
const products = [
    {
        name: 'Wedding Miniature Frame',
        price: 2000,
        image: ['/products/wedding-minature-frame.jpg'],
        meta: "Wooden wall frame covered with an acrylic glass.",
        light:["Battery Light Free with LED Light for ₹350."],
        Size: ["12*12 inch", ["14*14 inch (₹200 extra)"]],
        Description: {
            About: "It's a wooden wall frame covered with acrylic glass. "+
            "The Main picture is a photo cutout. "+
            "Rest all elements are miniatures made of various materials. ",
            customerRequirements: ["Full-length image (To be used as the main picture) ",
        "6-8 background images", "Wedding Card or Couple's name/hashtag/wedding date, etc."],
        }
    },
    {
        name: "Birthday Miniature Frame",
        price: 2000,
        image: ['/products/birthday-minature-frames.jpg'],
        meta: "Wooden wall frame covered with an acrylic glass.",
        light:["Battery Light Free with LED Light for ₹350."],
        Size: ["12*12 inch", ["14*14 inch (₹200 extra)"]],
        Description: {
            About: "It's a wooden wall frame covered with acrylic glass. "+
            "The Main picture is a photo cutout. Rest all elements are miniatures made of various materials.",
            customerRequirements: ["Full-length image (To be used as the main picture) ",
        "6 other images", "Birthday Information"
        ]
        }
    },
    {
        name: "Two Partition Miniature Frame",
        price: 2500,
        image: ['/products/2-partition-minature-frame-1.jpg','/products/2-partition-minature-frame-2.jpg', '/products/2-partition-minature-frame-3.jpg'],
        meta: "Wooden wall frame covered with an acrylic glass.",
        light:["Battery Light Free with LED Light for ₹350."],
        Size: ["12*20 inch"],
        Description: {
            About: "It's a wooden wall frame covered with acrylic glass. "+
            "The main picture is a photo cutout. Rest all elements are miniatures made of various materials.",
            customerRequirements: ["Complete family picture or individual pictures for each partition (Should be of full length)",
        "10-12 other pictures", "Theme or specific elements for each partition, like Individual/Couple's interests, hobbies, " +
        "likings around each other elements will be crafted (Please be specific while providing details)).",
        "Any other specific details/name/miniature you want to get added to it."
        ]
        }
    },
    {
        name: "Three Partition Miniature Frame",
        price: 3500,
        image: ['/products/3-partition-minature-frame-1.jpg','/products/3-partition-minature-frame-2.jpg'],
        meta: "Wooden wall frame covered with an acrylic glass.",
        light:["Battery Light Free with LED Light for ₹400."],
        Size: ["14*26 inch"],
        Description: {
            About: "It's a wooden wall frame covered with acrylic glass. The main picture is a cutout. Rest all elements are miniatures made of various materials.",
            customerRequirements: ["Complete family picture or individual pictures for each partition (Should be of full length)",
            "15 other pictures", "Theme or specific elements for each partition, like Individual/Couple's interests, hobbies, " +
            "likings around each other elements will be crafted (Please be specific while providing details)).",
            "Any other specific details/name/miniature you want to get added to it."
        ]
        }
    },
    {
        name: "Wedding Miniature Frame (12*20 inch)",
        price: 2500,
        image: ['/products/wedding-minature-frame-2.jpg'],
        meta: "Wooden wall frame covered with an acrylic glass.",
        light:["Battery Light Free with LED Light for ₹350."],
        Size: ["12*20 inch"],
        Description: {
            About: "It's a wooden wall frame covered with acrylic glass. The main picture is a cutout. Rest all elements are miniatures made of various materials.",
            customerRequirements: ["One Full-length image (To be used as the main picture).",
            "6 to 8 background images", "Wedding card or Couple's name/hashtag/wedding date, etc.",
            "Any other specific details/name/miniature you want to get added in it."]
        }      
    },
    {
        name: "Minature Fridge Magnet",
        price: 550,
        image: ['/products/miniature-flag-magnet-1.jpg', '/products/miniature-flag-magnet-2.jpg', '/products/miniature-flag-magnet-3.jpg'],
        meta: "Cute Magnets to decorate the spaces",
        Size: ["Rectangular 5*6 inch approximate"],
        Description :{
            About: "Miniature Fridge Magnet is made of MDF. It comes with a magnet on the back.",
            customerRequirements: ["3 Pictures", "Date", "Captions or Couple Name (Example: Happy Anniversary/Birthday, Together Forever.)"]
        }
    }
];

const notes = [
    "Please send clear and good-quality images.",
    "Prices are inclusive for deliveries anywhere in Maharashtra only. There is a shipping charge of ₹300 for other states in India.",
    "Turn around time is 7-10 days including delivery.",
]

export {products, notes};
