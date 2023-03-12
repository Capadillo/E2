if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}


$("#section-prices > h2").click(function() {
    $(this).parent().toggleClass("collapse");
});

let items = [
    {
        "quantity": "#in-ground-quantity",
        "price": "#in-ground-price"
    },
    {
        "quantity": "#in-concrete-quantity",
        "price": "#in-concrete-price"
    },
    {
        "quantity": "#above-ground-quantity",
        "price": "#above-ground-price"
    },
    {
        "quantity": "#labour-quantity",
        "price": "#labour-price"
    },
    {
        "quantity": "#monitor-quantity",
        "price": "#monitor-price"
    },
    {
        "quantity": "#inspection-toggle",
        "price": "#inspection-price"
    },
    {
        "quantity": "#drill-toggle",
        "price": "#drill-price"
    },
    {
        "quantity": "#site-fee-toggle",
        "price": "#site-fee-price"
    }
];

function calculate(list)
{
    let total = 0;

    $(list).each((index, item) => {
        let quantity = $(item.quantity);
        let price = $(item.price);

        if (quantity.attr('type') == "checkbox") {
            if (quantity.prop('checked')) {
                total += Number(price.val());
            }
        } else {
            total += Number(quantity.val()) * Number(price.val());
        }
    })

    return (total * 1.1).toFixed(2);
}

function updateNumbers() {
    let temp1 = $("#breakdown").html();
    temp1 = temp1.replace('{igs}', $("#in-ground-quantity").val());
    temp1 = temp1.replace('{ics}', $("#in-concrete-quantity").val());
    temp1 = temp1.replace('{ags}', $("#above-ground-quantity").val());
    $("#breakdown").val(temp1);
    
    $("#total-price").val(calculate(items));
}

$(document).ready(function() {
    updateNumbers()
});

$("input").on("keydown change keyup", function() {
    updateNumbers()
})

$("textarea[readonly]").on("click", function() {
    let text = $(this).val();
    navigator.clipboard.writeText(text);
});