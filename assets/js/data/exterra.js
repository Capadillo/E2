export default {
    "inputs": {
        // ----------------------------------------
        // Quantities
        // ----------------------------------------

        "igs": {
            "attr": { "max": 100, "min": 0, "value": 20 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "ics": {
            "attr": { "max": 100, "min": 0, "value": 0 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "ags": {
            "attr": { "max": 100, "min": 0, "value": 1 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "duration": {
            "attr": { "max": 100, "min": 0, "value": 6 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "visits": {
            "attr": { "max": 100, "min": 0, "value": 5 },
            "icon": { "default": "fa-regular fa-hashtag" }
        },

        "tpi": {
            "attr": { "checked": false },
            "icon": { "default": "fa-solid fa-circle", "checked": "fa-solid fa-circle-check" }
        },

        "drill": {
            "attr": { "checked": false },
            "icon": { "default": "fa-solid fa-circle", "checked": "fa-solid fa-circle-check" }
        },

        "active": {
            "attr": { "checked": true },
            "icon": { "default": "fa-solid fa-circle", "checked": "fa-solid fa-circle-check" }
        },

        // ----------------------------------------
        // Prices
        // ----------------------------------------

        "igs-price": {
            "attr": { "max": 100, "min": 0, "value": 19.26 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "ics-price": {
            "attr": { "max": 100, "min": 0, "value": 23.16 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "ags-price": {
            "attr": { "max": 100, "min": 0, "value": 97.69 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "duration-price": {
            "attr": { "max": 100, "min": 0, "value": 180.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "visits-price": {
            "attr": { "max": 100, "min": 0, "value": 220.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "tpi-price": {
            "attr": { "max": 100, "min": 0, "value": 310.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "drill-price": {
            "attr": { "max": 100, "min": 0, "value": 299.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        "active-price": {
            "attr": { "max": 100, "min": 0, "value": 449.00 },
            "icon": { "default": "fa-regular fa-dollar" }
        },

        // ----------------------------------------
        // Proposal
        // ----------------------------------------

        "total-price": {
            "attr": { "readonly": true },
            "icon": { "default": "fa-regular fa-dollar" }  
        }
    },
    "templates": {
        "overview": "An Exterra Termite Baiting System will be installed around the perimeter of the structure. Each bait station will be placed no more than 3 meters apart, and will be checked every 8 weeks over a 12 month period.\r\n\r\n* If any stations become active during the 12 months: Termite bait will be added to the station and checks will increase in frequency to every 4 weeks until the activity has ceased.\r\n\r\n* If termites enter the structure: An above ground station will be placed at the point of activity and checked every 4 weeks until activity has ceased.\r\n\r\nAdditional fees apply after the initial 12 month period. The fee will cover another 12 month period and will include a renewal of the baiting system as well as a timber pest inspection.",
        "breakdown": "The minimum number of stations to be installed are:\r\n\r\n* {igs} In Ground Station(s)\r\n* {ics} In Concrete Station(s)\r\n* {ags} Above Ground Station(s)\r\n\r\nWhere in-ground stations are installed; a 120mm hole will be dug out and a bait station will be installed into the hole. The bait station includes a child-safe twist top lid. The station is designed to be flush with the ground to ensure no issues when mowing.\r\n\r\nIf in-concrete stations are installed; an electric core drill will be used to drill a hole approximately 78mm in diameter and a slip-resistant cap will be used to cover the hole. Additional costs for fair use of the drill are included. Access to water and electricity is required.\r\n\r\nIf above-ground stations are used; a bait box will be installed to the affected areas using a variety of methods, including but not limited to liquid nails, screws, and black tape."
    }
}