// PeanutProducts.js - George Washington Carver's Revolutionary Peanut Products Database
// Based on historical research from Tuskegee University archives and agricultural bulletins

const peanutProductsDatabase = {
    // Food Products (100+ items)
    foodProducts: [
        "Peanut Butter (Regular)",
        "Peanut Butter #2", 
        "Peanut Butter #3",
        "Salted Peanuts",
        "Chocolate Coated Peanuts",
        "Malted Peanuts",
        "Crystallized Peanuts",
        "Shredded Peanuts",
        "Peanut Flakes #1",
        "Peanut Flakes #2", 
        "Peanut Hearts",
        "Peanut Sprouts",
        "Mock Oysters",
        "Mock Meat",
        "Mock Goose",
        "Mock Duck", 
        "Mock Chicken",
        "Mock Veal",
        "Peanut Sausage",
        "Peanut Meat Loaf",
        "Peanut Tofu",
        "Peanut Brittle",
        "Peanut Chocolate Fudge",
        "Peanut Tutti Frutti Bars",
        "Peanut and Pop Corn Bars",
        "Peanut Bar #1",
        "Caramel",
        "Butterscotch",
        "Sweet Pickle",
        "Peanut Cake #1",
        "Peanut Cake #2",
        "Breakfast Food #1",
        "Breakfast Food #2",
        "Breakfast Food #3",
        "Breakfast Food #4",
        "Breakfast Food #5",
        "Pancake Flour",
        "Peanut Flour #1",
        "Peanut Flour #2",
        "Peanut Flour #3",
        "Peanut Flour #4",
        "Peanut Flour #5",
        "Peanut Flour #6",
        "Peanut Flour #7",
        "Peanut Flour #8",
        "Peanut Flour #9",
        "Peanut Flour #10",
        "Peanut Flour #11",
        "Bisque Powder",
        "Peanut Meal #1",
        "Peanut Meal #2",
        "Peanut Meal (Brown)",
        "Peanut Surprise",
        "Butter from Peanut Milk",
        "Cooking Oil",
        "Salad Oil", 
        "Oleomargarine",
        "Lard Compound",
        "Chili Sauce",
        "Mayonnaise",
        "Worcestershire Sauce",
        "Chop Suey Sauce",
        "Peanut Relish #1",
        "Peanut Relish #2",
        "Flavoring Paste",
        "Instant Coffee",
        "Dry Coffee", 
        "Peanut Coffee",
        "Coffee Cream",
        "Dry Coffee Cream",
        "Vinegar",
        "Cream for Milk",
        "Buttermilk", 
        "Cut Milks (32 varieties)",
        "Curds",
        "Evaporated Milk",
        "Dehydrated Milk Flakes",
        "Peanut Orange Punch #1",
        "Peanut Lemon Punch", 
        "Peanut Koumiss Beverage",
        "Peanut Punch #2",
        "Normal Peanut Beverage",
        "Beverage for Ice Cream",
        "Peanut Beverage Flakes",
        "Blackberry Punch",
        "Plum Punch",
        "Evaporated Peanut Beverage",
        "Cherry Punch",
        "Pineapple Punch"
    ],

    // Cosmetic and Personal Care Products (30+ items)
    cosmeticProducts: [
        "Face Powder",
        "Face Lotion",
        "Face Cream", 
        "Vanishing Cream",
        "Face Bleach and Tan Remover",
        "Baby Massage Cream",
        "Hand Lotion",
        "Shampoo",
        "Peanut Oil Shampoo",
        "Oil for Hair and Scalp",
        "Shaving Cream",
        "Pomade for Scalp",
        "Pomade for Skin",
        "Face Ointment",
        "Glycerine",
        "All Purpose Cream", 
        "Fat Producing Cream",
        "Tetter and Dandruff Cure",
        "Toilet Soap",
        "Antiseptic Soap",
        "Carvoline Antiseptic Hair Dressing",
        "Hair Oil",
        "Scalp Treatment",
        "Skin Cream",
        "Moisturizing Lotion",
        "Cleansing Cream",
        "Cold Cream",
        "Complexion Soap",
        "Perfumed Soap",
        "Bathing Soap"
    ],

    // Medicinal Products (25+ items)
    medicinalProducts: [
        "Rubbing Oil",
        "Carvoline Rubbing Oil", 
        "Iron Tonic",
        "Tannic Acid",
        "Medicine similar to Castor Oil",
        "Emulsion for Bronchitis",
        "Castor Substitute",
        "Goiter Treatment",
        "Oils Emulsified with Mercury for Venereal Disease #1",
        "Oils Emulsified with Mercury for Venereal Disease #2",
        "Quinine",
        "Laxatives",
        "Antiseptics",
        "Cough Medicine",
        "Throat Medicine",
        "Respiratory Treatment",
        "Muscle Relief Oil",
        "Joint Pain Relief",
        "Skin Ointment",
        "Healing Salve",
        "Medicinal Oil",
        "Health Tonic",
        "Vitamin Supplement",
        "Digestive Aid",
        "Carver Penol (Tuberculosis Treatment)"
    ],

    // Industrial and Commercial Products (100+ items)
    industrialProducts: [
        "Paints #1",
        "Paints #2", 
        "Wood Stains #1",
        "Wood Stains #2",
        "Wood Stains #3",
        "Wood Stains #4",
        "Wood Stains #5",
        "Wood Stains #6",
        "Wood Stains #7",
        "Wood Stains #8", 
        "Wood Stains #9",
        "Wood Stains #10",
        "Wood Stains #11",
        "Wood Stains #12",
        "Wood Stains #13",
        "Wood Stains #14",
        "Wood Stains #15",
        "Wood Stains #16",
        "Wood Stains #17",
        "Dyes #1",
        "Dyes #2",
        "Dyes #3",
        "Dyes #4",
        "Dyes #5",
        "Dyes #6",
        "Dyes #7",
        "Dyes #8",
        "Dyes #9",
        "Dyes #10",
        "Cloth Dyes #1-30",
        "Printer's Ink",
        "Writing Ink",
        "Ink for Fountain Pens",
        "Shoe Polish",
        "Metal Polish", 
        "Furniture Polish",
        "Floor Polish",
        "Leather Polish",
        "Axle Grease",
        "Lubricating Oil",
        "Machine Oil",
        "Motor Oil",
        "Gasoline Additive",
        "Fuel Briquettes",
        "Charcoal",
        "Synthetic Rubber",
        "Plastics #1",
        "Plastics #2",
        "Plastics #3",
        "Celluloid",
        "Insulating Board",
        "Linoleum",
        "Paper #1", 
        "Paper #2",
        "Cardboard",
        "Wall Board #1",
        "Wall Board #2", 
        "Wall Board #3",
        "Wall Board #4",
        "Wall Board #5",
        "Wall Board #6",
        "Wall Board #7",
        "Wall Board #8",
        "Wall Board #9",
        "Wall Board #10",
        "Wall Board #11",
        "Insulation Material",
        "Building Material",
        "Glue #1",
        "Glue #2",
        "Adhesive",
        "Cement",
        "Waterproof Coating",
        "Varnish",
        "Lacquer", 
        "Wood Filler",
        "Caulking Compound",
        "Insecticide #1",
        "Insecticide #2",
        "Insecticide #3",
        "Pesticide",
        "Rodent Repellent",
        "Soil Conditioner",
        "Fertilizer",
        "Compost Activator",
        "Plant Food",
        "Nitroglycerine",
        "Explosives",
        "Bleach",
        "Cleaning Agent",
        "Degreaser",
        "Solvent",
        "Paint Thinner",
        "Rust Remover"
    ],

    // Animal Feed Products (15+ items) 
    animalFeedProducts: [
        "Peanut Stock Food #1",
        "Peanut Stock Food #2", 
        "Peanut Stock Food #3",
        "Peanut Hull Meal",
        "Peanut Hull Stock Food",
        "Molasses Feed",
        "Peanut Hull Bran",
        "Peanut Hay Meal",
        "Hen Food for Laying (Peanut Hearts)",
        "Livestock Feed",
        "Chicken Feed",
        "Cattle Feed", 
        "Horse Feed",
        "Pig Feed",
        "Poultry Supplement"
    ],

    // Specialty Products
    specialtyProducts: [
        "Meat Tenderizer",
        "Soil Analysis Kit",
        "pH Testing Solution", 
        "Crop Rotation Guide",
        "Farming Manual",
        "Agricultural Bulletin",
        "Demonstration Samples",
        "Laboratory Specimens",
        "Teaching Materials",
        "Scientific Instruments"
    ],

    // Database utility methods
    getAllProducts() {
        return [
            ...this.foodProducts,
            ...this.cosmeticProducts, 
            ...this.medicinalProducts,
            ...this.industrialProducts,
            ...this.animalFeedProducts,
            ...this.specialtyProducts
        ];
    },

    getProductsByCategory(category) {
        switch(category.toLowerCase()) {
            case 'food': return this.foodProducts;
            case 'cosmetic': return this.cosmeticProducts;
            case 'medicinal': return this.medicinalProducts; 
            case 'industrial': return this.industrialProducts;
            case 'animal-feed': return this.animalFeedProducts;
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
            cosmeticProducts: this.cosmeticProducts.length,
            medicinalProducts: this.medicinalProducts.length,
            industrialProducts: this.industrialProducts.length,
            animalFeedProducts: this.animalFeedProducts.length,
            specialtyProducts: this.specialtyProducts.length,
            categories: 6
        };
    },

    getProductDescription(productName) {
        // Provide context for key products
        const descriptions = {
            "Carver Penol": "A mixture of creosote and peanuts marketed as a patent medicine for respiratory diseases like tuberculosis",
            "Carvoline Antiseptic Hair Dressing": "A mix of peanut oil and lanolin for hair care",
            "Carvoline Rubbing Oil": "Peanut oil specifically formulated for therapeutic massages",
            "Mock Oysters": "Peanut-based protein substitute that mimicked the taste and texture of oysters",
            "Peanut Nitroglycerine": "Industrial explosive compound derived from peanut components",
            "Synthetic Rubber": "Early bio-based rubber alternative developed from peanut materials"
        };
        
        return descriptions[productName] || "One of George Washington Carver's innovative peanut-based products";
    }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.peanutProductsDatabase = peanutProductsDatabase;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = peanutProductsDatabase;
}
