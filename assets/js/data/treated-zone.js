export default {
    "inputs": {
        // ----------------------------------------
        // Quantities
        // ----------------------------------------

        "trenched": {
            "attr": { "max": 100, "min": 0, "value": 0 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "drilled": {
            "attr": { "max": 100, "min": 0, "value": 0 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "duration": {
            "attr": { "max": 100, "min": 0, "value": 6 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "visits": {
            "attr": { "max": 100, "min": 0, "value": 0 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "tpi": {
            "attr": { "checked": false },
            "icon": { "default": "fa-solid fa-circle", "checked": "fa-solid fa-circle-check" }
        },

        "hire": {
            "attr": { "checked": false },
            "icon": { "default": "fa-solid fa-circle", "checked": "fa-solid fa-circle-check" }
        },

        // ----------------------------------------
        // Prices
        // ----------------------------------------

        "trenched-price": {
            "attr": { "max": 100, "min": 0, "value": 55.00 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "drilled-price": {
            "attr": { "max": 100, "min": 0, "value": 75.00 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "duration-price": {
            "attr": { "max": 100, "min": 0, "value": 180.00 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "visits-price": {
            "attr": { "max": 100, "min": 0, "value": 220.00 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "tpi-price": {
            "attr": { "max": 100, "min": 0, "value": 310.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "hire-price": {
            "attr": { "max": 100, "min": 0, "value": 149.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },
    },
    "templates": {
        "overview": "This process involves excavating a trench around the perimeter of the slab ('slab'). The trench must be no less than 150 mm wide and to a minimum depth of 50mm below the top edge of the slab. Where trenching is not possible because of an additional concrete slab ('addition'), and the addition has not had a control joint installed (as per NCC 2019 BCA V2 Part 3.1.4), drilling of the addition along the edge closest to the slab will occur with spacing between the holes not exceeding 200 mm, or greater depending on the termiticide label.\r\n\r\nOnce the area has been prepared, liquid termiticide will be applied to the prepared areas at a rate of approximately 100L per cubic meter for trenching, or 200L for drilling. Where drilling has occurred, an injector rod will be used to inject chemical into the soil directly below the slab. Otherwise known as rodding.\r\n\r\nTreated zones that have been disturbed by construction, excavation and other soil disturbing activities will need reapplication to restore site to original condition.",
        "breakdown": "Apply 5L of prepared ULTRATHOR spray per square meter of soil OR 2L of prepared ULTRATHOR per hole when using an injector rod."
    }
}