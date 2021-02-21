const animals = [
    {
        id: "1",
        image: "lion",
        title: "7-year Male Lion with Large Well Kept Main with a Beautiful Yellow/Brownish Color",
        rating: 5.0,
        price: "23,322",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "lion",
        category: "1"
    },
    {
        id: "2",
        image: "cham",
        title: "Beautiful Highly Specialized Clade Lizard with 202 Different Color Combinations",
        price: "1,522",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "chameleons",
        category: "2"
    },
    {
        id: "3",
        image: "dolphin",
        title: "Fast and Swift Aquatic Dolphin with Great Accordatic Skills in the Air",
        price: "101,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "dolphin",
        category: "3"
    },
    {
        id: "4",
        image: "gorilla",
        title: "Black Haired Gorilla with Broad Chest and Shoulder. Would be an Excellent Spot at the Gym",
        price: "47,775",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "gorilla",
        category: "4"
    },
    {
        id: "5",
        image: "horse",
        title: "17-year Female Horse with a Luxury Brown Exterior and a Beautiful Red Interior",
        price: "13,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "horse",
        category: "4"
    },
    {
        id: "6",
        image: "kang",
        title: "Large Kangaroo with Muscular Leg and Tail and Pointly Teeth and Ears",
        price: "42,453",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "kangaroo",
        category: "4"
    },
    {
        id: "7",
        image: "ele",
        title: "Grey Male 17 year Elephant with 12 Meter Truck and 5 Meter Tusk",
        price: "101,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "elephant",
        category: "4"
    },
    {
        id: "8",
        image: "donkey",
        title: "This is the Voice Actor from the Dockey for Shrek.",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "donkey",
        category: "4"
    }
  ]
  
  const categories = [
    {
        id: 1,
        category: "cats",
        slug: "cats",
        img: "tiger"
    },
    {
        id: 2,
        category: "reptiles",
        slug: "reptiles",
        img: "snake"
    },
    {
        id: 3,
        category: "ocean creatures",
        slug: "ocean-creatures",
        img: "stingray"
    },
    {
        id: 4,
        category: "mammals",
        slug: "mammals",
        img: "donkey"
    }
  ]

  const cards = [
    {
        id: 1,
        title: "Recently Viewed",
        bought: true,
        msg: "This is the best thing you bought",
        price: 42.32,
        img: "lion"
    },
    {
        id: 2,
        title: "Looking for a Gift?",
        bought: true,
        msg: "This is the best thing you bought",
        price: 42.32,
        img: "penguin"
    },
    {
        id: 3,
        title: "Best Behaved",
        bought: true,
        msg: "This is the best thing you bought",
        price: 42.32,
        img: "cat"
    }
  ]

module.exports = {
    animals,
    categories,
    cards
}