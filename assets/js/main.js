if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}


function update() {
    $.getJSON("../data/templates.json", (tpl) => {
        $("#overview").html(tpl.overview);
        $("#breakdown").html(tpl.breakdown
            .replace('{igs}', $('#igs').val())
            .replace('{ics}', $('#ics').val())
            .replace('{ags}', $('#ags').val()));
    });

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

$(function() {
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

    update();
    $("input").on('change', function(event) {
        update();
    });

    $("blockquote").on('click', function() {
        const text = $(this).html();
        copyToClipboard(text);
    });
});