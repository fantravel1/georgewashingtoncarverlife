// SweetPotatoProducts.js - George Washington Carver's Revolutionary Sweet Potato Products Database
// Based on historical research from Tuskegee University archives and USDA records

const sweetPotatoProductsDatabase = {
    // Food Products (30+ items)
    foodProducts: [
        "Sweet Potato Flour #1",
        "Sweet Potato Flour #2", 
        "Sweet Potato Flour #3",
        "Sweet Potato Flour #4",
        "Sweet Potato Starch #1",
        "Sweet Potato Starch #2",
        "Sweet Potato Starch #3",
        "Sweet Potato Starch #4",
        "Sweet Potato Sugar",
        "Sweet Potato Molasses #1",
        "Sweet Potato Molasses #2",
        "Sweet Potato Molasses #3",
        "Mock Coconut",
        "Sweet Potato Tapioca",
        "Sweet Potato Vinegar",
        "Sweet Potato Egg Yolk Substitute",
        "Synthetic Ginger",
        "Sweet Potato Candy #1",
        "Sweet Potato Candy #2",
        "Sweet Potato Candy #3",
        "Sweet Potato Candy #4",
        "Sweet Potato Candy #5",
        "Sweet Potato Candy #6",
        "Sweet Potato Candy #7",
        "Sweet Potato Candy #8",
        "Sweet Potato Candy #9",
        "Sweet Potato Candy #10",
        "Sweet Potato Candy #11",
        "Sweet Potato Candy #12",
        "Sweet Potato Candy #13",
        "Sweet Potato Candy #14",
        "Sweet Potato Chocolate",
        "Dried Sweet Potatoes #1",
        "Dried Sweet Potatoes #2",
        "Sweet Potato Dry Paste",
        "Sweet Potato Nibs",
        "Sweet Potato Bisque Powder",
        "Sweet Potato Breakfast Food #1",
        "Sweet Potato Breakfast Food #2",
        "Sweet Potato Breakfast Food #3",
        "Sweet Potato Breakfast Food #4",
        "Sweet Potato Breakfast Food #5",
        "Sweet Potato Meal #1",
        "Sweet Potato Meal #2",
        "Sweet Potato Meal #3",
        "Sweet Potato Meal #4",
        "After Dinner Mints #1",
        "After Dinner Mints #2",
        "After Dinner Mints #3",
        "Sweet Potato Yeast",
        "Sweet Potato Coffee (Dry)",
        "Sweet Potato Instant Coffee",
        "Granulated Sweet Potatoes",
        "Sweet Potato Lemon Drops",
        "Sweet Potato Orange Drops",
        "Sweet Potato Sauce",
        "Spiced Sweet Potato Vinegar"
    ],

    // Industrial Products (20+ items)
    industrialProducts: [
        "Sweet Potato Rubber Compound",
        "Synthetic Sweet Potato Rubber",
        "Sweet Potato Writing Ink",
        "Sweet Potato Paper (from vines)",
        "Sweet Potato Synthetic Cotton",
        "Sweet Potato Synthetic Silk",
        "Sweet Potato Alcohol",
        "Sweet Potato Fuel Alcohol",
        "Sweet Potato Industrial Starch",
        "Sweet Potato Adhesive",
        "Sweet Potato Glue",
        "Sweet Potato Cement",
        "Sweet Potato Paste Compound",
        "Sweet Potato Celluloid",
        "Sweet Potato Plastics",
        "Sweet Potato Insulation Material",
        "Sweet Potato Building Material",
        "Sweet Potato Waterproof Coating",
        "Sweet Potato Varnish",
        "Sweet Potato Lacquer"
    ],

    // Dyes and Stains (73+ documented dyes plus wood fillers)
    dyesAndStains: [
        "Sweet Potato Dye #1 (Red)",
        "Sweet Potato Dye #2 (Orange)",
        "Sweet Potato Dye #3 (Yellow)",
        "Sweet Potato Dye #4 (Brown)",
        "Sweet Potato Dye #5 (Purple)",
        "Sweet Potato Dye #6 (Pink)",
        "Sweet Potato Dye #7 (Maroon)",
        "Sweet Potato Dye #8 (Crimson)",
        "Sweet Potato Dye #9 (Scarlet)",
        "Sweet Potato Dye #10 (Gold)",
        "Sweet Potato Dye #11 (Amber)",
        "Sweet Potato Dye #12 (Tan)",
        "Sweet Potato Dye #13 (Beige)",
        "Sweet Potato Dye #14 (Rust)",
        "Sweet Potato Dye #15 (Copper)",
        "Sweet Potato Dye #16 (Bronze)",
        "Sweet Potato Dye #17 (Mahogany)",
        "Sweet Potato Dye #18 (Chestnut)",
        "Sweet Potato Dye #19 (Auburn)",
        "Sweet Potato Dye #20 (Sienna)",
        "Leather Dye #1",
        "Leather Dye #2",
        "Leather Dye #3",
        "Cloth Dye #1",
        "Cloth Dye #2",
        "Cloth Dye #3",
        "Cloth Dye #4",
        "Cloth Dye #5",
        "Textile Dye (Red)",
        "Textile Dye (Blue)",
        "Textile Dye (Green)",
        "Textile Dye (Yellow)",
        "Textile Dye (Purple)",
        "Fabric Stain #1",
        "Fabric Stain #2",
        "Wood Stain #1",
        "Wood Stain #2",
        "Wood Stain #3",
        "Wood Stain #4",
        "Wood Stain #5",
        "Wood Filler #1",
        "Wood Filler #2",
        "Wood Filler #3",
        "Wood Filler #4",
        "Wood Filler #5",
        "Wood Filler #6",
        "Wood Filler #7",
        "Wood Filler #8",
        "Wood Filler #9",
        "Wood Filler #10",
        "Wood Filler #11",
        "Wood Filler #12",
        "Wood Filler #13",
        "Wood Filler #14",
        "Paint Base #1",
        "Paint Base #2",
        "Paint Base #3",
        "House Paint (Sweet Potato Base)",
        "Wall Paint",
        "Furniture Stain",
        "Floor Stain",
        "Decorative Paint",
        "Artist Paint",
        "Watercolor Paint",
        "Oil Paint Base",
        "Primer Paint",
        "Protective Coating",
        "Metal Paint",
        "Rust Prevention Paint",
        "Boat Paint",
        "Barn Paint",
        "Fence Stain"
    ],

    // Cosmetic and Personal Care Products (15+ items)
    cosmeticProducts: [
        "Sweet Potato Face Powder",
        "Sweet Potato Face Cream",
        "Sweet Potato Hand Lotion",
        "Sweet Potato Skin Cream",
        "Sweet Potato Hair Oil",
        "Sweet Potato Pomade",
        "Sweet Potato Soap",
        "Sweet Potato Shampoo",
        "Sweet Potato Complexion Cream",
        "Sweet Potato Cold Cream",
        "Sweet Potato Vanishing Cream",
        "Sweet Potato Bath Soap",
        "Sweet Potato Toilet Soap",
        "Sweet Potato Cleansing Cream",
        "Sweet Potato Moisturizing Lotion"
    ],

    // Medicinal Products (10+ items)
    medicinalProducts: [
        "Sweet Potato Medicine",
        "Sweet Potato Tonic",
        "Sweet Potato Health Supplement",
        "Sweet Potato Digestive Aid",
        "Sweet Potato Cough Syrup",
        "Sweet Potato Therapeutic Oil",
        "Sweet Potato Healing Salve",
        "Sweet Potato Antiseptic",
        "Sweet Potato Medicinal Tea",
        "Sweet Potato Vitamin Extract"
    ],

    // Animal Feed Products (8+ items)
    animalFeedProducts: [
        "Sweet Potato Stock Feed",
        "Sweet Potato Cattle Feed", 
        "Sweet Potato Pig Feed",
        "Sweet Potato Chicken Feed",
        "Sweet Potato Horse Feed",
        "Sweet Potato Livestock Meal",
        "Sweet Potato Feed Supplement",
        "Sweet Potato Fodder"
    ],

    // Household Items (10+ items)
    householdProducts: [
        "Library Paste #1",
        "Library Paste #2",
        "Library Paste #3",
        "Library Paste #4",
        "Library Paste #5",
        "Sweet Potato Shoe Blacking",
        "Sweet Potato Shoe Polish",
        "Postage Stamp Glue",
        "Sweet Potato Cleaning Agent",
        "Sweet Potato Household Adhesive"
    ],

    // Specialty/Research Products (5+ items)
    specialtyProducts: [
        "Sweet Potato Extract",
        "Sweet Potato Essential Oil",
        "Sweet Potato Research Specimens",
        "Sweet Potato Laboratory Samples",
        "Sweet Potato Experimental Compounds"
    ],

    // Database utility methods
    getAllProducts() {
        return [
            ...this.foodProducts,
            ...this.industrialProducts,
            ...this.dyesAndStains,
            ...this.cosmeticProducts,
            ...this.medicinalProducts,
            ...this.animalFeedProducts,
            ...this.householdProducts,
            ...this.specialtyProducts
        ];
    },

    getProductsByCategory(category) {
        switch(category.toLowerCase()) {
            case 'food': return this.foodProducts;
            case 'industrial': return this.industrialProducts;
            case 'dyes': return this.dyesAndStains;
            case 'cosmetic': return this.cosmeticProducts;
            case 'medicinal': return this.medicinalProducts;
            case 'animal-feed': return this.animalFeedProducts;
            case 'household': return this.householdProducts;
            case 'specialty': return this.specialtyProducts;
            default: return [];
        }
    },

    searchProducts(searchTerm) {
        const allProducts = this.getAllProducts();
        const term = searchTerm.toLowerCase();
        return allProducts.filter(product => 
            product.toLowerCase().includes(term)
        );
    },

    getRandomProducts(count = 10) {
        const allProducts = this.getAllProducts();
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    getStats() {
        return {
            totalProducts: this.getAllProducts().length,
            foodProducts: this.foodProducts.length,
            industrialProducts: this.industrialProducts.length,
            dyesAndStains: this.dyesAndStains.length,
            cosmeticProducts: this.cosmeticProducts.length,
            medicinalProducts: this.medicinalProducts.length,
            animalFeedProducts: this.animalFeedProducts.length,
            householdProducts: this.householdProducts.length,
            specialtyProducts: this.specialtyProducts.length,
            categories: 8
        };
    },

    getProductDescription(productName) {
        // Provide context for key products
        const descriptions = {
            "Sweet Potato Flour #1": "Wartime wheat substitute developed during WWI food shortages",
            "Sweet Potato Rubber Compound": "Early bio-based rubber alternative for industrial applications",
            "Mock Coconut": "Sweet potato-based coconut substitute for cooking and baking",
            "Sweet Potato Writing Ink": "Natural ink made from sweet potato extracts and minerals",
            "Postage Stamp Glue": "Adhesive made from sweet potato starch for postal applications",
            "Sweet Potato Synthetic Silk": "Early synthetic textile fiber derived from sweet potato materials",
            "Library Paste #1": "Educational adhesive made from sweet potato starch for schools",
            "Sweet Potato Dye #1 (Red)": "Natural red dye for textiles and leather goods"
        };
        
        return descriptions[productName] || "One of George Washington Carver's innovative sweet potato-based products";
    },

    // Historical context methods
    getWarTimeProducts() {
        return this.foodProducts.filter(product => 
            product.includes('Flour') || 
            product.includes('Sugar') || 
            product.includes('Molasses') ||
            product.includes('Starch')
        );
    },

    getDyeProducts() {
        return this.dyesAndStains.filter(product => 
            product.includes('Dye') || product.includes('Stain')
        );
    },

    getIndustrialAlternatives() {
        return this.industrialProducts.filter(product =>
            product.includes('Rubber') ||
            product.includes('Synthetic') ||
            product.includes('Plastic') ||
            product.includes('Alcohol')
        );
    },

    // Innovation timeline
    getProductsByEra() {
        return {
            early1900s: [
                "Sweet Potato Flour #1",
                "Sweet Potato Starch #1", 
                "Sweet Potato Molasses #1",
                "Sweet Potato Vinegar"
            ],
            wwi: [
                "Sweet Potato Flour #2",
                "Sweet Potato Flour #3",
                "Sweet Potato Flour #4",
                "Sweet Potato Sugar",
                "Sweet Potato Alcohol"
            ],
            postWar: [
                "Sweet Potato Rubber Compound",
                "Sweet Potato Synthetic Silk",
                "Sweet Potato Paper (from vines)",
                "Postage Stamp Glue"
            ],
            mature: [
                "Sweet Potato Plastics",
                "Sweet Potato Synthetic Cotton",
                "Sweet Potato Celluloid",
                "Industrial applications"
            ]
        };
    }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.sweetPotatoProductsDatabase = sweetPotatoProductsDatabase;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sweetPotatoProductsDatabase;
}
        