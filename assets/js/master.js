import data from "./data2.js";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

async function copyToClipboard(textToCopy) {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
    } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
            
        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    };
}

function loopInput(id, input) {
    input.label = $("[for={id}]".replace('{id}', input.id));
    input.icon  = $("<i/>", {id: input.id + "-icon"}).insertAfter(input);

    $(input.label).toggleClass("checkbox", $(input).is(":checkbox"));
    $(input.label).toggleClass("is-checked", $(input).is(":checked"));
};

function checkboxOnChange() {
    $(this.label).toggleClass("is-checked", $(this).is(":checked"));
    
    this.icon.removeClass();
    
    let data_icon = data.inputs[this.id].icon;
    
    if ($(this).is(":checkbox") && $(this).is(":checked")) {
        this.icon.addClass(data_icon.checked);
    } else {
        this.icon.addClass(data_icon.default);
    }
}

function onUpdate() {
    $("#overview").html(data.templates.overview);
    $("#breakdown").html(data.templates.breakdown
        .replace('{igs}', $('#igs').val())
        .replace('{ics}', $('#ics').val())
        .replace('{ags}', $('#ags').val()));

    const fields = [
        '#igs',
        '#ics',
        '#ags',
        '#duration',
        '#visits',
        '#tpi',
        '#drill',
        '#active'
    ];

    let total = 0;

    $(fields).each((id, field) => {
        let quantity = $(field);
        let price    = $(field + "-price");

        if (quantity.is(":checkbox")) {
            if (quantity.is(':checked')) {
                total += Number(price.val());
            }
        } else {
            total += Number(price.val()) * Number(quantity.val());
        }
    });

    $('#total-price').val(total.toFixed(2));
}

$(function() {
    // --------------------------------------------------
    // Setup Inputs
    // --------------------------------------------------

    let input = undefined;
   
    $('input').each(loopInput);

    onUpdate();
    $('input').on('change keyup', onUpdate);
    $('input:checkbox').on('change', checkboxOnChange);

    $.each(data.inputs, (id, row) => {
        input = $("#{id}".replace('{id}', id)).get(0);

        if (input !== undefined) {
            $.each(row.attr, (key, value) => {
                $(input).attr(key, value);
            });

            if ($(input).is(":checkbox") && $(input).is(":checked")) {
                input.icon.addClass(row.icon.checked);
            } else {
                input.icon.addClass(row.icon.default);
            }

            $(input).trigger('change');
        }
    });
    
    // --------------------------------------------------
    // Tabs w/ Memory
    // --------------------------------------------------

    // https://stackoverflow.com/questions/4299435/remember-which-tab-was-active-after-refresh

    var index = 'key';
    var dataStore = window.sessionStorage;

    try {
        var oldIndex = dataStore.getItem(index);
    } catch(e) {
        var oldIndex = 0;
    }

    $('#tabs').tabs({
        active : oldIndex,
        
        activate : function( event, ui ){
            var newIndex = ui.newTab.parent().children().index(ui.newTab);
            dataStore.setItem( index, newIndex ) 
        }
    });

    // --------------------------------------------------
    // Copy to Clipboard
    // --------------------------------------------------

    $("blockquote").on('click', function() {
        copyToClipboard($(this).html());
        $(this).animate({color: "#00000019"}, "slow");
        $(this).animate({color: "#000000FF"}, "fast");
    });
});