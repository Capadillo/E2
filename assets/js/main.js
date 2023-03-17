if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

const tpl = {
    "overview": "An Exterra Termite Baiting System will be installed around the perimeter of the structure. Each bait station will be placed no more than 3 meters apart, and will be checked every 8 weeks over a 12 month period.\r\n\r\n* If any stations become active during the 12 months: Termite bait will be added to the station and checks will increase in frequency to every 4 weeks until the activity has ceased.\r\n\r\n* If termites enter the structure: An above ground station will be placed at the point of activity and checked every 4 weeks until activity has ceased.\r\n\r\nAdditional fees apply after the initial 12 month period. The fee will cover another 12 month period and will include a renewal of the baiting system as well as a timber pest inspection.",
    "breakdown": "The minimum number of stations to be installed are:\r\n\r\n* {igs} In Ground Station(s)\r\n* {ics} In Concrete Station(s)\r\n* {ags} Above Ground Station(s)\r\n\r\nWhere in-ground stations are installed; a 120mm hole will be dug out and a bait station will be installed into the hole. The bait station includes a child-safe twist top lid. The station is designed to be flush with the ground to ensure no issues when mowing.\r\n\r\nIf in-concrete stations are installed; an electric drill will be used to drill a hole approximately 78mm in diameter and a slip-resistant cap will be used to cover the hole. Additional costs for fair use of the drill are included. Access to water and electricity is required.\r\n\r\nIf above-ground stations are used; a bait box will be installed to the affected areas using a variety of methods, including but not limited to liquid nails, screws, and black tape."
};

function update() {
    $("#overview").html(tpl.overview);
    $("#breakdown").html(tpl.breakdown
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