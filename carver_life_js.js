// CarverLife.js - Comprehensive George Washington Carver Timeline Database

const carverLifeDatabase = {
    // Timeline events data
    events: [
        {
            id: 1,
            date: "1864",
            age: "Birth",
            title: "Born into Slavery",
            location: "Diamond Grove, Missouri",
            description: "George Washington Carver was born into slavery on the farm of Moses Carver. His exact birth date is unknown, but estimated around 1864. As an infant, he and his mother were kidnapped by Confederate raiders.",
            detailedDescription: "George Washington Carver was born into slavery during the Civil War on the 240-acre farm of Moses Carver in Diamond Grove, Missouri. His mother, Mary, was owned by Moses Carver, a German immigrant. When George was just a few weeks old, he and his mother were kidnapped by Confederate raiders known as bushwhackers. Moses Carver hired a neighbor to track them down, but only baby George was recovered. His mother was never seen again. Moses and his wife Susan raised George and his older brother Jim as their own children after slavery was abolished.",
            category: "childhood",
            emoji: "🍼",
            importance: "Critical",
            impact: [
                "Shaped his early understanding of hardship and resilience",
                "Influenced his later dedication to helping poor farmers",
                "Developed his deep connection to nature and plants",
                "Formed the foundation of his character and determination"
            ],
            context: [
                "Civil War was raging across America",
                "Slavery was still legal in Missouri",
                "Confederate bushwhackers terrorized the region",
                "Many enslaved families were separated"
            ]
        },
        {
            id: 2,
            date: "1877",
            age: "13",
            title: "Leaves Home for Education",
            location: "Neosho, Missouri",
            description: "At age 13, Carver left the Carver farm to attend a one-room schoolhouse in Neosho, the nearest town with a school that accepted Black students.",
            detailedDescription: "Determined to get an education, 13-year-old George walked eight miles to Neosho, Missouri, carrying all his possessions in a bundle. He found lodging with Mariah and Andrew Watkins, a kind African American couple. Mariah, a midwife and herbalist, became a second mother to George and taught him about plants and their medicinal properties. At the Lincoln School, a one-room schoolhouse for Black children, George quickly mastered the basics and soon knew more than his teacher.",
            category: "childhood",
            emoji: "🚶",
            importance: "Major",
            impact: [
                "First step toward formal education",
                "Learned about medicinal plants from Mariah Watkins",
                "Developed independence and self-reliance",
                "Began his lifelong pursuit of knowledge"
            ],
            context: [
                "Reconstruction era was ending",
                "Jim Crow laws were beginning to emerge",
                "Educational opportunities for Black children were extremely limited",
                "Most formerly enslaved people remained illiterate"
            ]
        },
        {
            id: 3,
            date: "1885",
            age: "21",
            title: "First College Application Rejected",
            location: "Highland, Kansas",
            description: "Carver was accepted to Highland University by mail but rejected when he appeared in person due to his race. This devastating setback didn't deter his educational aspirations.",
            detailedDescription: "After years of working and saving money, George applied to Highland University in Kansas and was accepted based on his academic credentials. However, when he arrived on campus and officials realized he was Black, they refused to admit him. This crushing rejection could have ended his dreams, but George persevered. He spent the next few years working various jobs, including as a cook and launderer, while continuing to study independently and search for a college that would accept him.",
            category: "education",
            emoji: "💔",
            importance: "Major",
            impact: [
                "Demonstrated the harsh reality of racial discrimination",
                "Strengthened his resolve to pursue education",
                "Led to years of self-directed learning",
                "Prepared him for future challenges"
            ],
            context: [
                "Jim Crow laws were solidifying across the South",
                "Higher education was largely segregated",
                "Plessy v. Ferguson would soon legalize 'separate but equal'",
                "Few colleges admitted Black students"
            ]
        },
        {
            id: 4,
            date: "1890",
            age: "26",
            title: "Enters Simpson College",
            location: "Indianola, Iowa",
            description: "Carver finally gained admission to Simpson College, becoming the first Black student at the institution. He initially studied art and piano.",
            detailedDescription: "At age 26, George Washington Carver became the first African American student to enroll at Simpson College in Indianola, Iowa. Initially, he planned to study art and was quite talented as a painter, particularly in botanical illustration. His art teacher, Etta Budd, recognized his exceptional ability with plants and encouraged him to study botany instead. She also helped arrange for him to transfer to Iowa State University, where her father was a professor and where he could pursue agricultural studies.",
            category: "education",
            emoji: "🎨",
            importance: "Critical",
            impact: [
                "First integrated educational experience",
                "Discovered his artistic talents",
                "Met mentors who shaped his future",
                "Transition from art to agricultural science"
            ],
            context: [
                "Few colleges in the Midwest accepted Black students",
                "Art was considered an impractical field for Black students",
                "Agricultural education was becoming more scientific",
                "Iowa was more progressive on racial issues"
            ]
        },
        {
            id: 5,
            date: "1891",
            age: "27",
            title: "Transfers to Iowa State University",
            location: "Ames, Iowa",
            description: "Carver transferred to Iowa State University to study botany and agriculture, becoming the first Black student at the institution.",
            detailedDescription: "George Washington Carver transferred to Iowa State University of Science and Technology (now Iowa State University) to study botany, horticulture, and agriculture. He was the first African American student in the university's history. Despite facing some social isolation, Carver excelled academically and was mentored by prominent botanists including Louis Pammel and Joseph Budd. He lived in the basement of the science building and worked as a janitor to pay for his education while conducting botanical research.",
            category: "education",
            emoji: "🌱",
            importance: "Critical",
            impact: [
                "Gained access to cutting-edge agricultural science",
                "Worked with renowned botanists",
                "Began serious botanical research",
                "Developed scientific methodology"
            ],
            context: [
                "Agricultural science was rapidly advancing",
                "Land-grant universities were expanding",
                "Scientific agriculture was replacing traditional farming",
                "Racial integration in higher education was extremely rare"
            ]
        },
        {
            id: 6,
            date: "1894",
            age: "30",
            title: "Graduates with Bachelor's Degree",
            location: "Ames, Iowa",
            description: "Carver graduated from Iowa State with a Bachelor of Science degree in Agriculture, becoming one of the first African Americans to earn a degree in agricultural science.",
            detailedDescription: "George Washington Carver graduated from Iowa State University with a Bachelor of Science degree in Agriculture. His thesis focused on plant pathology, specifically the fungal diseases that affected plants. He was one of the first African Americans to earn a degree in agricultural science. His professors were so impressed with his work that they immediately offered him a position as a graduate student and assistant in the botany department, making him the first Black faculty member at Iowa State.",
            category: "education",
            emoji: "🎓",
            importance: "Critical",
            impact: [
                "First African American agricultural scientist",
                "Established credibility in the scientific community",
                "Opened doors for advanced research",
                "Broke barriers in higher education"
            ],
            context: [
                "Very few African Americans had college degrees",
                "Agricultural science was a new and growing field",
                "Scientific farming methods were being developed",
                "Racial barriers in academia were extremely high"
            ]
        },
        {
            id: 7,
            date: "1896",
            age: "32",
            title: "Earns Master's Degree",
            location: "Ames, Iowa",
            description: "Carver completed his Master of Agriculture degree, specializing in plant pathology and mycology (the study of fungi).",
            detailedDescription: "George Washington Carver earned his Master of Agriculture degree from Iowa State University, specializing in plant pathology and mycology. His master's thesis examined plant diseases caused by fungi. During his graduate studies, he maintained the university's greenhouse, conducted research on plant diseases, and taught undergraduate courses. His reputation as a brilliant botanist grew, and he began receiving offers from various institutions seeking his expertise.",
            category: "education",
            emoji: "🔬",
            importance: "Major",
            impact: [
                "Advanced expertise in plant diseases",
                "Established research methodology",
                "Gained teaching experience",
                "Built national reputation"
            ],
            context: [
                "Plant pathology was an emerging scientific field",
                "Crop diseases were devastating American agriculture",
                "Scientific solutions to farming problems were needed",
                "Graduate education for African Americans was virtually nonexistent"
            ]
        },
        {
            id: 8,
            date: "1896",
            age: "32",
            title: "Joins Tuskegee Institute",
            location: "Tuskegee, Alabama",
            description: "Booker T. Washington personally recruited Carver to head the Agriculture Department at Tuskegee Institute, beginning his 47-year career there.",
            detailedDescription: "Booker T. Washington, founder of Tuskegee Institute, personally recruited George Washington Carver to lead the school's agriculture department. Washington wrote: 'I cannot offer you money, position, or fame... I offer you the chance to bring your people out of bondage.' Carver accepted the invitation and moved to Alabama, leaving behind potential opportunities at Iowa State. He found Tuskegee's agriculture department severely under-resourced, with no equipment, no laboratory, and no research facilities. He would spend the next 47 years building it into a renowned center of agricultural research and education.",
            category: "tuskegee",
            emoji: "🏫",
            importance: "Critical",
            impact: [
                "Committed his life to educating African Americans",
                "Brought scientific agriculture to the South",
                "Established Tuskegee as a research center",
                "Began his mission to help poor farmers"
            ],
            context: [
                "Reconstruction had ended, Jim Crow was beginning",
                "The South's economy was devastated",
                "Cotton monoculture was depleting soil",
                "Educational opportunities for African Americans were minimal"
            ]
        },
        {
            id: 9,
            date: "1897",
            age: "33",
            title: "Establishes Agricultural Experiment Station",
            location: "Tuskegee, Alabama",
            description: "Carver established the Tuskegee Agricultural Experiment Station to conduct research on crops suitable for the South and to help local farmers.",
            detailedDescription: "With virtually no budget, George Washington Carver established the Tuskegee Agricultural Experiment Station. He salvaged discarded equipment, made his own laboratory apparatus from bottles and jars, and began systematic research into crops that could grow in Alabama's depleted soil. The station focused on practical research that would directly benefit local farmers, particularly poor African American sharecroppers who had been trapped in cycles of debt by cotton monoculture.",
            category: "tuskegee",
            emoji: "🧪",
            importance: "Major",
            impact: [
                "Created center for agricultural research",
                "Developed practical farming solutions",
                "Focused on helping poor farmers",
                "Established pattern of applied research"
            ],
            context: [
                "Southern soil was severely depleted from cotton farming",
                "Sharecropping system trapped farmers in poverty",
                "Agricultural research was rare in the South",
                "Farmers had little access to scientific knowledge"
            ]
        },
        {
            id: 10,
            date: "1902",
            age: "38",
            title: "Begins Peanut Research",
            location: "Tuskegee, Alabama",
            description: "Carver began intensive research on peanuts as an alternative crop to cotton, eventually developing over 300 uses for peanuts.",
            detailedDescription: "Recognizing that cotton monoculture was destroying Southern soil, George Washington Carver began intensive research on peanuts as an alternative crop. Peanuts, being legumes, naturally fix nitrogen in the soil, helping to restore its fertility. Carver systematically studied every aspect of the peanut and began developing countless uses for it. He created peanut-based foods, cosmetics, dyes, paints, gasoline additives, and many other products. His goal was to make peanut farming profitable enough that farmers would rotate away from cotton.",
            category: "discoveries",
            emoji: "🥜",
            importance: "Critical",
            impact: [
                "Revolutionized Southern agriculture",
                "Promoted crop rotation and soil conservation",
                "Created economic alternatives to cotton",
                "Developed hundreds of peanut-based products"
            ],
            context: [
                "Cotton prices were falling",
                "Boll weevil was devastating cotton crops",
                "Soil depletion was a major crisis",
                "Farmers needed alternative income sources"
            ]
        },
        {
            id: 11,
            date: "1904",
            age: "40",
            title: "Launches Farmers' Institute",
            location: "Tuskegee, Alabama",
            description: "Carver established monthly farmers' conferences to teach local farmers about crop rotation, soil conservation, and new agricultural techniques.",
            detailedDescription: "George Washington Carver launched the Tuskegee Farmers' Institute, holding monthly conferences every third Saturday to teach local farmers about scientific agriculture. These sessions covered crop rotation, soil conservation, composting, and how to make the most of small farms. Carver demonstrated practical techniques and distributed free bulletins written in simple language. The institutes became extremely popular, with farmers traveling from across Alabama and neighboring states to attend.",
            category: "tuskegee",
            emoji: "👥",
            importance: "Major",
            impact: [
                "Spread scientific agriculture to poor farmers",
                "Built trust between Tuskegee and the community",
                "Demonstrated practical solutions to farming problems",
                "Created lasting agricultural education programs"
            ],
            context: [
                "Most farmers lacked formal education",
                "Agricultural extension services barely existed",
                "Sharecroppers had little access to new information",
                "Traditional farming methods were failing"
            ]
        },
        {
            id: 12,
            date: "1906",
            age: "42",
            title: "Develops Sweet Potato Research",
            location: "Tuskegee, Alabama",
            description: "Carver expanded his research to sweet potatoes, eventually developing over 100 uses for the crop and promoting it as another cotton alternative.",
            detailedDescription: "Building on his success with peanuts, George Washington Carver turned his attention to sweet potatoes. He developed over 100 uses for sweet potatoes, including flour, molasses, rubber, ink, dyes, and various food products. Like peanuts, sweet potatoes could grow in poor soil and provided excellent nutrition. Carver promoted sweet potatoes as both a food source and a cash crop that could help farmers diversify away from cotton dependency.",
            category: "discoveries",
            emoji: "🍠",
            importance: "Major",
            impact: [
                "Provided another alternative to cotton",
                "Improved nutrition for poor families",
                "Created new economic opportunities",
                "Advanced food science and processing"
            ],
            context: [
                "Malnutrition was common among poor Southerners",
                "Agricultural diversification was desperately needed",
                "Sweet potatoes were considered 'poor people's food'",
                "Industrial uses for agricultural products were emerging"
            ]
        },
        {
            id: 13,
            date: "1915",
            age: "51",
            title: "Boll Weevil Crisis Response",
            location: "Throughout the South",
            description: "When the boll weevil destroyed cotton crops across the South, Carver's alternative crops and soil conservation methods proved invaluable to farmers.",
            detailedDescription: "The boll weevil invasion devastated cotton crops across the South, vindicating George Washington Carver's years of promoting crop diversification. Farmers who had followed his advice and planted peanuts, sweet potatoes, and other alternative crops were able to survive the crisis. Carver worked tirelessly to help farmers transition to new crops, providing seeds, technical advice, and moral support. His reputation as an agricultural savior spread throughout the region.",
            category: "discoveries",
            emoji: "🐛",
            importance: "Critical",
            impact: [
                "Validated years of research and advocacy",
                "Saved countless farmers from ruin",
                "Proved the value of agricultural diversification",
                "Established Carver as a national figure"
            ],
            context: [
                "Boll weevil caused agricultural catastrophe",
                "Cotton-dependent regions faced economic collapse",
                "Traditional farming systems failed",
                "Alternative crops became essential for survival"
            ]
        },
        {
            id: 14,
            date: "1916",
            age: "52",
            title: "Elected Fellow of Royal Society",
            location: "London, England",
            description: "Carver was elected as a fellow of the Royal Society for the Encouragement of Arts, Manufactures and Commerce in London, international recognition of his achievements.",
            detailedDescription: "The Royal Society for the Encouragement of Arts, Manufactures and Commerce in London elected George Washington Carver as a fellow, making him one of the few Americans and even fewer African Americans to receive this honor. This international recognition validated his scientific work and brought global attention to his agricultural innovations. The fellowship acknowledged his contributions to applied science and his success in translating research into practical solutions for farmers.",
            category: "legacy",
            emoji: "👑",
            importance: "Major",
            impact: [
                "Gained international scientific recognition",
                "Elevated status of agricultural research",
                "Inspired other African American scientists",
                "Brought global attention to Tuskegee"
            ],
            context: [
                "International scientific cooperation was growing",
                "Applied science was gaining respect",
                "African Americans rarely received international recognition",
                "Agricultural science was becoming more prestigious"
            ]
        },
        {
            id: 15,
            date: "1921",
            age: "57",
            title: "Testifies Before Congress",
            location: "Washington, D.C.",
            description: "Carver testified before the House Ways and Means Committee about the potential of peanuts, giving a famous demonstration that changed perceptions about agricultural products.",
            detailedDescription: "George Washington Carver testified before the House Ways and Means Committee in support of a tariff to protect American peanut farmers from foreign competition. Initially given only 10 minutes to speak, Carver's passionate and knowledgeable presentation so impressed the congressmen that they extended his time. He demonstrated various peanut products and explained their potential economic value. His testimony was widely reported in newspapers and significantly raised his national profile, making him a celebrity scientist.",
            category: "legacy",
            emoji: "🏛️",
            importance: "Critical",
            impact: [
                "Became a national celebrity",
                "Advanced agricultural policy",
                "Demonstrated value of scientific research",
                "Broke racial barriers in Washington"
            ],
            context: [
                "Post-WWI economic adjustment was occurring",
                "Agricultural interests sought protection from imports",
                "Congress rarely heard from African American experts",
                "Scientific testimony was becoming more important in policy"
            ]
        },
        {
            id: 16,
            date: "1923",
            age: "59",
            title: "Receives Spingarn Medal",
            location: "New York, New York",
            description: "The NAACP awarded Carver the Spingarn Medal, its highest honor, for distinguished achievement by an African American.",
            detailedDescription: "The National Association for the Advancement of Colored People (NAACP) awarded George Washington Carver the Spingarn Medal, its highest honor for distinguished achievement by an African American. The award recognized his scientific contributions and his role as an inspiration to African Americans. Carver had become a symbol of what African Americans could achieve despite discrimination and limited opportunities. The award ceremony was attended by prominent civil rights leaders and further elevated his status as a role model.",
            category: "legacy",
            emoji: "🏅",
            importance: "Major",
            impact: [
                "Recognized by leading civil rights organization",
                "Became symbol of African American achievement",
                "Inspired next generation of Black scientists",
                "Validated his life's work"
            ],
            context: [
                "NAACP was fighting for civil rights",
                "Positive role models were desperately needed",
                "Scientific achievement was highly valued",
                "African Americans faced severe discrimination"
            ]
        },
        {
            id: 17,
            date: "1935",
            age: "71",
            title: "Collaborates with Henry Ford",
            location: "Dearborn, Michigan",
            description: "Carver began collaborating with Henry Ford on research into industrial uses for agricultural products, particularly focusing on soybeans and plant-based materials.",
            detailedDescription: "Henry Ford, the famous automobile manufacturer, sought out George Washington Carver to collaborate on research into industrial uses for agricultural products. Ford was particularly interested in using soybeans and other plants to create materials for automobiles. Carver spent time at Ford's research facilities in Dearborn, Michigan, working on projects that would use agricultural products in industrial applications. This collaboration represented the convergence of agriculture and industry that Carver had long advocated.",
            category: "discoveries",
            emoji: "🚗",
            importance: "Major",
            impact: [
                "Advanced industrial uses for agricultural products",
                "Connected agriculture with modern industry",
                "Influenced automotive materials research",
                "Demonstrated practical applications of his research"
            ],
            context: [
                "Industrial research was expanding rapidly",
                "Automobile industry was seeking new materials",
                "Agricultural surpluses needed new markets",
                "Science and industry were becoming more connected"
            ]
        },
        {
            id: 18,
            date: "1938",
            age: "74",
            title: "Donates Life Savings to Carver Foundation",
            location: "Tuskegee, Alabama",
            description: "Carver donated his life savings of $60,000 to establish the George Washington Carver Foundation at Tuskegee to continue agricultural research.",
            detailedDescription: "At age 74, George Washington Carver donated his entire life savings of $60,000 (equivalent to over $1 million today) to establish the George Washington Carver Foundation at Tuskegee Institute. The foundation was created to continue agricultural research and to provide scholarships for students studying agriculture and related fields. This generous donation demonstrated Carver's commitment to education and his desire to ensure that his work would continue after his death.",
            category: "legacy",
            emoji: "💰",
            importance: "Major",
            impact: [
                "Established lasting foundation for agricultural research",
                "Provided scholarships for future scientists",
                "Ensured continuation of his work",
                "Demonstrated commitment to education"
            ],
            context: [
                "Great Depression had reduced many endowments",
                "Agricultural research needed stable funding",
                "Educational opportunities for African Americans remained limited",
                "Private philanthropy was crucial for Black institutions"
            ]
        },
        {
            id: 19,
            date: "1942",
            age: "78",
            title: "Receives Roosevelt Medal",
            location: "Tuskegee, Alabama",
            description: "Carver was awarded the Roosevelt Medal for distinguished service in science, one of the highest honors in American science.",
            detailedDescription: "At age 78, George Washington Carver received the Roosevelt Medal for distinguished service in science, presented by the Roosevelt Memorial Association. This award recognized his lifetime of scientific achievement and his contributions to American agriculture. Despite his advanced age and declining health, Carver continued his research and teaching. The medal represented the pinnacle of scientific recognition and acknowledged his place among America's greatest scientists.",
            category: "legacy",
            emoji: "🏆",
            importance: "Major",
            impact: [
                "Received highest recognition in American science",
                "Validated lifetime of scientific work",
                "Inspired future generations of scientists",
                "Cemented his place in scientific history"
            ],
            context: [
                "World War II highlighted importance of scientific research",
                "Agricultural science was crucial for war effort",
                "Scientific achievement was highly valued",
                "Recognition for African American scientists was rare"
            ]
        },
        {
            id: 20,
            date: "1943",
            age: "79",
            title: "Death and Immediate Legacy",
            location: "Tuskegee, Alabama",
            description: "George Washington Carver died on January 5, 1943, at Tuskegee Institute. His death was mourned nationwide, and his legacy as America's greatest agricultural scientist was firmly established.",
            detailedDescription: "George Washington Carver died on January 5, 1943, at Tuskegee Institute, where he had spent 47 years of his life. He died from complications related to a fall down a flight of stairs at his home. News of his death was reported on the front pages of newspapers across America. President Franklin D. Roosevelt led the nation in mourning, and tributes poured in from around the world. Carver was buried on the Tuskegee campus next to Booker T. Washington. His death marked the end of an era, but his scientific legacy and inspiration continued to influence generations of scientists, farmers, and educators.",
            category: "legacy",
            emoji: "🌟",
            importance: "Critical",
            impact: [
                "End of remarkable scientific career",
                "National recognition of his contributions",
                "Beginning of his legendary status",
                "Inspiration for future generations"
            ],
            context: [
                "World War II was raging",
                "Agricultural science was crucial for food production",
                "America was recognizing its scientific heroes",
                "Civil rights movement was beginning to emerge"
            ]
        }
    ],

    // Database utility methods
    getAll() {
        return this.events;
    },

    getByCategory(category) {
        return this.events.filter(event => event.category === category);
    },

    getById(id) {
        return this.events.find(event => event.id === id);
    },

    searchEvents(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.events.filter(event =>
            event.title.toLowerCase().includes(term) ||
            event.description.toLowerCase().includes(term) ||
            event.location.toLowerCase().includes(term) ||
            event.date.toLowerCase().includes(term) ||
            event.category.toLowerCase().includes(term)
        );
    },

    getStats() {
        return {
            totalEvents: this.events.length,
            categories: [...new Set(this.events.map(event => event.category))].length,
            yearSpan: "79 Years",
            locations: [...new Set(this.events.map(event => event.location))].length
        };
    },

    getEventsByImportance(importance) {
        return this.events.filter(event => event.importance === importance);
    },

    getRelatedEvents(eventId, limit = 3) {
        const currentEvent = this.getById(eventId);
        if (!currentEvent) return [];

        const related = this.events.filter(event => {
            if (event.id === eventId) return false;
            
            // Same category gets highest priority
            if (event.category === currentEvent.category) return true;
            
            // Similar time period (within 5 years)
            const yearDiff = Math.abs(parseInt(event.date) - parseInt(currentEvent.date));
            if (yearDiff <= 5 && yearDiff > 0) return true;
            
            // Same location
            if (event.location === currentEvent.location) return true;
            
            return false;
        });

        // Sort by relevance and return limited results
        return related.slice(0, limit);
    }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.carverLifeDatabase = carverLifeDatabase;
}