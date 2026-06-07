// THE DONNA STUDY BUSTER - QUESTION BANK
// Each question follows this format:
// {
//   id: "NST-Q001",
//   subject: "Natural Science & Technology",
//   topic: "Topic Name",
//   page: "42-44",
//   type: "mcq",          // "mcq" = multiple choice, "typed" = type answer
//   question: "Question text",
//   options: ["A", "B", "C", "D"],   // empty array for typed questions
//   answer: "correct answer",
//   explanation: "Simple explanation for Grade 5",
//   lesson: "Short lesson summary",
//   videoPrompt: "Prompt for generating a mini video"
// }

// EASY TO ADD MORE QUESTIONS - just copy a block and change the values!

const questionBank = [
    // ===== NATURAL SCIENCE & TECHNOLOGY =====

    // Habitats & Biodiversity
    {
        id: "NST-Q001",
        subject: "Natural Science & Technology",
        topic: "Habitats",
        page: "42-44",
        type: "mcq",
        question: "What is a habitat?",
        options: ["A place where animals sleep", "The natural home of an organism", "A type of plant", "A big forest"],
        answer: "The natural home of an organism",
        explanation: "A habitat is where an animal or plant naturally lives and finds food, water and shelter.",
        lesson: "Every living thing needs a home called a habitat. It provides food, water and shelter.",
        videoPrompt: "Create a Grade 5 video explaining what a habitat is with examples like forests, oceans and deserts."
    },
    {
        id: "NST-Q002",
        subject: "Natural Science & Technology",
        topic: "Vertebrates and Invertebrates",
        page: "47-51",
        type: "mcq",
        question: "Which animal is an invertebrate?",
        options: ["Dog", "Fish", "Spider", "Bird"],
        answer: "Spider",
        explanation: "Spiders do NOT have a backbone. Animals without backbones are called invertebrates.",
        lesson: "Vertebrates have backbones (mammals, birds, fish, reptiles, amphibians). Invertebrates do not (spiders, worms, insects).",
        videoPrompt: "Create a Grade 5 video explaining the difference between vertebrates and invertebrates with fun examples."
    },
    {
        id: "NST-Q003",
        subject: "Natural Science & Technology",
        topic: "Skeletons",
        page: "66-70",
        type: "mcq",
        question: "Which part of the skeleton protects the brain?",
        options: ["Rib cage", "Spine", "Skull", "Leg bone"],
        answer: "Skull",
        explanation: "The skull is the hard bone around your head that protects your brain.",
        lesson: "The skeleton protects our organs. The skull protects the brain, and the rib cage protects the heart and lungs.",
        videoPrompt: "Create a Grade 5 video about the human skeleton with a focus on which bones protect our organs."
    },
    {
        id: "NST-Q004",
        subject: "Natural Science & Technology",
        topic: "Food Chains",
        page: "127-129",
        type: "mcq",
        question: "Which of these is a producer?",
        options: ["Snake", "Eagle", "Grass", "Mouse"],
        answer: "Grass",
        explanation: "Producers are usually plants that make their own food using sunlight.",
        lesson: "Producers (plants) make their own food. Consumers eat other living things. A food chain shows who eats whom.",
        videoPrompt: "Create a 2-minute Grade 5 explanation video about food chains with producers, consumers and examples."
    },
    {
        id: "NST-Q005",
        subject: "Natural Science & Technology",
        topic: "Joints and Ligaments",
        page: "74-77",
        type: "mcq",
        question: "A ligament connects...",
        options: ["Muscle to bone", "Bone to bone", "Skin to muscle", "Bone to muscle"],
        answer: "Bone to bone",
        explanation: "Ligaments are strong connective tissues that connect bones to other bones at joints.",
        lesson: "Ligaments connect bone to bone. Tendons connect muscle to bone. Joints allow movement.",
        videoPrompt: "Create a Grade 5 video explaining joints, ligaments and how our bodies move."
    },
    {
        id: "NST-Q006",
        subject: "Natural Science & Technology",
        topic: "Metals and Non-metals",
        page: "186-194",
        type: "mcq",
        question: "Which of these is a metal?",
        options: ["Wood", "Copper", "Plastic", "Glass"],
        answer: "Copper",
        explanation: "Copper is a metal. Metals are usually shiny, hard, and can conduct electricity.",
        lesson: "Metals are strong, shiny and can be magnetic. Non-metals like wood and plastic are not metals.",
        videoPrompt: "Create a Grade 5 video about metals and non-metals with simple tests to tell them apart."
    },
    {
        id: "NST-Q007",
        subject: "Natural Science & Technology",
        topic: "Life Cycles of Animals",
        page: "148-156",
        type: "mcq",
        question: "Which stage comes after a caterpillar?",
        options: ["Egg", "Butterfly", "Pupa", "Larva"],
        answer: "Pupa",
        explanation: "After a caterpillar has grown, it forms a pupa (chrysalis) before becoming a butterfly.",
        lesson: "Life cycle of a butterfly: egg -> caterpillar -> pupa -> butterfly.",
        videoPrompt: "Create a Grade 5 video showing the life cycle of a butterfly with drawings or real footage."
    },
    {
        id: "NST-Q008",
        subject: "Natural Science & Technology",
        topic: "Vertebrates and Invertebrates",
        page: "47-51",
        type: "typed",
        question: "Complete the sentence: A vertebrate is an animal with a ________.",
        options: [],
        answer: "backbone",
        explanation: "Vertebrates are animals with backbones, like dogs, birds and fish.",
        lesson: "Vertebrates have a backbone. Invertebrates do not.",
        videoPrompt: "Create a Grade 5 video about vertebrates with a song or rhyme about the backbone."
    },
    {
        id: "NST-Q009",
        subject: "Natural Science & Technology",
        topic: "Life Cycles of Plants",
        page: "136-145",
        type: "typed",
        question: "Complete the sentence: A seed starts to grow during ________.",
        options: [],
        answer: "germination",
        explanation: "Germination is when a seed starts to sprout and grow into a new plant.",
        lesson: "Germination needs water, warmth and oxygen. The seed uses food stored inside to start growing.",
        videoPrompt: "Create a Grade 5 video showing how seeds germinate in a cup with cotton wool and water."
    },
    {
        id: "NST-Q010",
        subject: "Natural Science & Technology",
        topic: "Life Processes",
        page: "116-124",
        type: "typed",
        question: "Complete the sentence: Plants make their own ________.",
        options: [],
        answer: "food",
        explanation: "Plants make their own food through photosynthesis using sunlight, water and carbon dioxide.",
        lesson: "Plants are producers. They make their own food in their leaves using sunlight.",
        videoPrompt: "Create a Grade 5 video explaining photosynthesis simply with a catchy song."
    },
    {
        id: "NST-Q011",
        subject: "Natural Science & Technology",
        topic: "Biodiversity",
        page: "20-25",
        type: "mcq",
        question: "What does 'biodiversity' mean?",
        options: ["Only big animals", "Many different living things in an area", "Only plants", "Only insects"],
        answer: "Many different living things in an area",
        explanation: "Biodiversity means the variety of all living things in one place.",
        lesson: "Biodiversity includes all animals, plants, insects and microorganisms living in one area.",
        videoPrompt: "Create a Grade 5 video about biodiversity and why it is important for our planet."
    },
    {
        id: "NST-Q012",
        subject: "Natural Science & Technology",
        topic: "Interdependence",
        page: "130-135",
        type: "mcq",
        question: "Why do animals and plants depend on each other?",
        options: ["They are friends", "They share the same space", "They need each other to survive", "They are the same species"],
        answer: "They need each other to survive",
        explanation: "Animals need plants for food and oxygen. Plants need animals for pollination and spreading seeds.",
        lesson: "Living things are interdependent. If one part is removed, the whole system can be affected.",
        videoPrompt: "Create a Grade 5 video about interdependence between animals and plants in a forest."
    },
    {
        id: "NST-Q013",
        subject: "Natural Science & Technology",
        topic: "Habitats",
        page: "42-44",
        type: "mcq",
        question: "Which habitat would you find a cactus plant?",
        options: ["Rainforest", "Desert", "Ocean", "Arctic"],
        answer: "Desert",
        explanation: "Cactus plants have adapted to live in hot, dry deserts with very little water.",
        lesson: "Different plants and animals are adapted to live in specific habitats. Deserts are hot and dry.",
        videoPrompt: "Create a Grade 5 video about animal and plant adaptations in different habitats."
    },
    {
        id: "NST-Q014",
        subject: "Natural Science & Technology",
        topic: "Skeletons",
        page: "66-70",
        type: "mcq",
        question: "How many bones are in the adult human body?",
        options: ["106", "206", "306", "406"],
        answer: "206",
        explanation: "An adult human has 206 bones. Babies have about 270 bones, some of which fuse together.",
        lesson: "The skeleton protects, supports and helps us move. Adult humans have 206 bones.",
        videoPrompt: "Create a Grade 5 video about the human skeleton showing all 206 bones in a fun way."
    },
    {
        id: "NST-Q015",
        subject: "Natural Science & Technology",
        topic: "Metals and Non-metals",
        page: "186-194",
        type: "mcq",
        question: "Which metal is used to make electrical wires?",
        options: ["Iron", "Copper", "Lead", "Gold"],
        answer: "Copper",
        explanation: "Copper is excellent at conducting electricity, so it is used in electrical wires.",
        lesson: "Copper is a good conductor of electricity. It is used in wires, pipes and coins.",
        videoPrompt: "Create a Grade 5 video showing how copper is used in everyday life."
    },
    {
        id: "NST-Q016",
        subject: "Natural Science & Technology",
        topic: "Food Chains",
        page: "127-129",
        type: "mcq",
        question: "A rabbit eating grass is a...",
        options: ["Producer", "Consumer", "Decomposer", "Predator"],
        answer: "Consumer",
        explanation: "A rabbit eats grass (a producer), so it is a consumer called a herbivore.",
        lesson: "Herbivores eat plants. Carnivores eat animals. Omnivores eat both.",
        videoPrompt: "Create a Grade 5 video about herbivores, carnivores and omnivores with animal examples."
    },
    {
        id: "NST-Q017",
        subject: "Natural Science & Technology",
        topic: "Life Cycles of Plants",
        page: "136-145",
        type: "mcq",
        question: "What does a seed need to germinate?",
        options: ["Only sunlight", "Water, warmth and oxygen", "Only water", "Only warmth"],
        answer: "Water, warmth and oxygen",
        explanation: "A seed needs water, warmth and oxygen to break open and start growing.",
        lesson: "Seeds need water to swell, warmth to activate, and oxygen to breathe during germination.",
        videoPrompt: "Create a Grade 5 science experiment video showing a seed germinating in a jar."
    },
    {
        id: "NST-Q018",
        subject: "Natural Science & Technology",
        topic: "Processing Materials",
        page: "200-210",
        type: "mcq",
        question: "Which material is best for making a frying pan?",
        options: ["Paper", "Plastic", "Metal", "Cotton"],
        answer: "Metal",
        explanation: "Metal conducts heat well and does not melt, making it perfect for frying pans.",
        lesson: "Different materials have different properties. Metal is strong, hard and conducts heat well.",
        videoPrompt: "Create a Grade 5 video about choosing the right materials for everyday objects."
    },
    {
        id: "NST-Q019",
        subject: "Natural Science & Technology",
        topic: "Structures",
        page: "230-235",
        type: "mcq",
        question: "Which shape is the strongest for building bridges?",
        options: ["Circle", "Triangle", "Square", "Heart"],
        answer: "Triangle",
        explanation: "Triangles are strong shapes. They distribute weight evenly and do not collapse easily.",
        lesson: "Engineers use triangles in bridges and buildings because they are very strong shapes.",
        videoPrompt: "Create a Grade 5 engineering video explaining why triangles make buildings strong."
    },
    {
        id: "NST-Q020",
        subject: "Natural Science & Technology",
        topic: "Plant Reproduction",
        page: "136-145",
        type: "typed",
        question: "A new plant can grow from a ________.",
        options: [],
        answer: "seed",
        explanation: "Seeds are how most flowering plants reproduce and grow into new plants.",
        lesson: "Plants reproduce through seeds, bulbs or cuttings. A seed contains a tiny baby plant.",
        videoPrompt: "Create a Grade 5 video about how plants reproduce and how seeds travel by wind, water and animals."
    },

    // ===== MATHEMATICS =====

    {
        id: "MAT-Q001",
        subject: "Mathematics",
        topic: "Whole Numbers",
        page: "5-12",
        type: "mcq",
        question: "What is 345 + 278?",
        options: ["523", "623", "613", "533"],
        answer: "623",
        explanation: "345 + 278 = 623. Add the numbers: 300+200=500, 40+70=110, 5+8=13. 500+110+13=623.",
        lesson: "To add large numbers, add each place value column separately: ones, tens, hundreds.",
        videoPrompt: "Create a Grade 5 video showing how to add 3-digit numbers using column addition step by step."
    },
    {
        id: "MAT-Q002",
        subject: "Mathematics",
        topic: "Fractions",
        page: "55-60",
        type: "mcq",
        question: "What is 1/2 + 1/4?",
        options: ["1/6", "2/4", "3/4", "1"],
        answer: "3/4",
        explanation: "To add fractions, make the denominators the same first. 1/2 = 2/4. Then 2/4 + 1/4 = 3/4.",
        lesson: "When adding fractions, the denominators must be the same. Convert fractions to have the same bottom number.",
        videoPrompt: "Create a Grade 5 video about adding fractions with like denominators using pizza slices."
    },
    {
        id: "MAT-Q003",
        subject: "Mathematics",
        topic: "Multiplication",
        page: "30-38",
        type: "mcq",
        question: "What is 12 x 8?",
        options: ["84", "92", "96", "106"],
        answer: "96",
        explanation: "12 x 8 = 96. You can break 12 into 10 + 2 then multiply: 10x8=80, 2x8=16, 80+16=96.",
        lesson: "Multiplication is repeated addition. 12 x 8 means twelve groups of eight, or eight groups of twelve.",
        videoPrompt: "Create a Grade 5 video about multiplication using arrays and grouping objects."
    },
    {
        id: "MAT-Q004",
        subject: "Mathematics",
        topic: "Division",
        page: "40-48",
        type: "typed",
        question: "Complete the sentence: Division means sharing ________ into equal groups.",
        options: [],
        answer: "equally",
        explanation: "Division is sharing a number equally into groups. It is the opposite of multiplication.",
        lesson: "Division splits a number into equal parts. It is the reverse of multiplication.",
        videoPrompt: "Create a Grade 5 video about division by sharing objects into equal groups practically."
    },
    {
        id: "MAT-Q005",
        subject: "Mathematics",
        topic: "Perimeter and Area",
        page: "120-128",
        type: "mcq",
        question: "What is the perimeter of a rectangle with length 6cm and width 4cm?",
        options: ["10cm", "20cm", "24cm", "48cm"],
        answer: "20cm",
        explanation: "Perimeter = 2 x (length + width) = 2 x (6+4) = 2 x 10 = 20cm.",
        lesson: "Perimeter is the distance right around the outside of a shape. Area is how much space is inside.",
        videoPrompt: "Create a Grade 5 video explaining perimeter and area using a garden or bedroom example."
    },

    // ===== SOCIAL SCIENCES =====

    {
        id: "SS-Q001",
        subject: "Social Sciences",
        topic: "History - The San People",
        page: "15-25",
        type: "mcq",
        question: "What were the San people known for?",
        options: ["Building pyramids", "Rock paintings", "Sailing ships", "Writing books"],
        answer: "Rock paintings",
        explanation: "The San people (Bushmen) were famous for their beautiful rock paintings in caves.",
        lesson: "The San were the first people in South Africa. They painted rock art showing hunts and animals.",
        videoPrompt: "Create a Grade 5 video about the San people, their rock paintings and how they lived in South Africa."
    },
    {
        id: "SS-Q002",
        subject: "Social Sciences",
        topic: "Democracy",
        page: "80-90",
        type: "mcq",
        question: "What is democracy?",
        options: ["One person rules", "Rule by the people through voting", "Military rule", "No rules"],
        answer: "Rule by the people through voting",
        explanation: "Democracy means the people choose their leaders by voting in free and fair elections.",
        lesson: "In a democracy, all citizens over 18 can vote. Every vote counts. It is how South Africa chooses leaders.",
        videoPrompt: "Create a Grade 5 video about democracy and why voting is important in South Africa."
    },
    {
        id: "SS-Q003",
        subject: "Social Sciences",
        topic: "Geography - Landmarks",
        page: "35-45",
        type: "mcq",
        question: "Which famous South African landmark is a big flat mountain?",
        options: ["Table Mountain", "Drakensberg", "Kalahari", "Sterkfontein Caves"],
        answer: "Table Mountain",
        explanation: "Table Mountain in Cape Town is famous for its flat top and is one of the wonders of nature.",
        lesson: "Table Mountain is in Cape Town. It is part of a national park and has many unique plants and animals.",
        videoPrompt: "Create a Grade 5 video tour of South Africa's famous landmarks including Table Mountain."
    },
    {
        id: "SS-Q004",
        subject: "Social Sciences",
        topic: "Rights and Responsibilities",
        page: "100-110",
        type: "mcq",
        question: "Which is a right of every South African child?",
        options: ["To work in a mine", "To education", "To stay home always", "To drive a car"],
        answer: "To education",
        explanation: "Every child in South Africa has the right to go to school and get an education.",
        lesson: "Children's rights include education, safety, health care and protection from harm.",
        videoPrompt: "Create a Grade 5 video about children's rights in South Africa and what they mean."
    },
    {
        id: "SS-Q005",
        subject: "Social Sciences",
        topic: "Map Skills",
        page: "50-60",
        type: "typed",
        question: "On a map, the top is always ________.",
        options: [],
        answer: "north",
        explanation: "Most maps are drawn with North at the top. This is called map orientation.",
        lesson: "Cardinal directions: North, South, East, West. Remember 'Never Eat Soggy Waffles' for clockwise directions.",
        videoPrompt: "Create a Grade 5 video teaching how to read maps and use compass directions."
    },

    // ===== LIFE SKILLS =====

    {
        id: "LS-Q001",
        subject: "Life Skills",
        topic: "Healthy Living",
        page: "10-20",
        type: "mcq",
        question: "Which food group gives us the most energy?",
        options: ["Proteins", "Fruit and vegetables", "Carbohydrates", "Dairy"],
        answer: "Carbohydrates",
        explanation: "Carbohydrates (bread, rice, pasta, potatoes) give us lots of energy for playing and learning.",
        lesson: "Eat a balanced diet with carbohydrates, proteins, fruits, vegetables and some dairy every day.",
        videoPrompt: "Create a Grade 5 video about eating a balanced plate with the different food groups."
    },
    {
        id: "LS-Q002",
        subject: "Life Skills",
        topic: "Safety",
        page: "30-40",
        type: "mcq",
        question: "What should you do if there is a fire at home?",
        options: ["Hide under the bed", "Get out and call for help", "Take your toys", "Go back in for something"],
        answer: "Get out and call for help",
        explanation: "In a fire, the safest thing is to get out of the house quickly and call an adult or the fire department.",
        lesson: "Fire safety: Stop, Drop and Roll if clothes catch fire. Crawl low under smoke. Never use lifts.",
        videoPrompt: "Create a Grade 5 video about home fire safety with easy rules to remember."
    },
    {
        id: "LS-Q003",
        subject: "Life Skills",
        topic: "Personal Hygiene",
        page: "50-55",
        type: "mcq",
        question: "How many times a day should you brush your teeth?",
        options: ["Once", "Twice", "Three times", "Never"],
        answer: "Twice",
        explanation: "Brushing teeth twice a day (morning and night) keeps them clean and healthy.",
        lesson: "Good hygiene includes brushing teeth twice, washing hands, bathing regularly and wearing clean clothes.",
        videoPrompt: "Create a Grade 5 video about personal hygiene tips for staying clean and healthy."
    },
    {
        id: "LS-Q004",
        subject: "Life Skills",
        topic: "Friendship",
        page: "70-75",
        type: "typed",
        question: "A good friend is someone who ________ you.",
        options: [],
        answer: "supports",
        explanation: "Good friends support each other, share kindly and help when someone is sad.",
        lesson: "Good friendships are based on kindness, trust, listening and supporting each other.",
        videoPrompt: "Create a Grade 5 video about what makes a good friend and how to be one."
    },
    {
        id: "LS-Q005",
        subject: "Life Skills",
        topic: "Bullying",
        page: "80-90",
        type: "mcq",
        question: "What should you do if you see someone being bullied?",
        options: ["Join in", "Walk away", "Tell a trusted adult", "Ignore it"],
        answer: "Tell a trusted adult",
        explanation: "If someone is being bullied, tell a teacher, parent or another adult you trust. It is not tattle-taling.",
        lesson: "Bullying is never okay. Standing up by telling an adult is the right thing to do.",
        videoPrompt: "Create a Grade 5 video about bullying, what it is, and what to do if you see it happening."
    },
    {
        id: "LS-Q006",
        subject: "Life Skills",
        topic: "Emotions",
        page: "100-110",
        type: "mcq",
        question: "It is okay to feel...",
        options: ["Only happy", "Any emotion and talk about it", "Only angry when it is not fair", "Nothing"],
        answer: "Any emotion and talk about it",
        explanation: "All feelings are normal. Talking about your feelings helps you and others understand you better.",
        lesson: "Everyone feels sad, angry, scared or happy sometimes. Talking about feelings helps manage them.",
        videoPrompt: "Create a Grade 5 video about feelings and emotions, and healthy ways to express them."
    }
];

// ---- HELPER: GET ALL SUBJECTS ----
function getAllSubjects() {
    const subjects = new Set();
    questionBank.forEach(q => subjects.add(q.subject));
    return Array.from(subjects).sort();
}

// ---- HELPER: GET QUESTIONS FOR SUBJECT ----
function getQuestionsBySubject(subjectName) {
    return questionBank.filter(q => q.subject === subjectName);
}

// ---- HELPER: GET QUESTIONS BY TOPIC ----
function getQuestionsByTopic(topicName) {
    return questionBank.filter(q => q.topic === topicName);
}

// ---- HELPER: GET ALL TOPICS FOR SUBJECT ----
function getTopicsForSubject(subjectName) {
    const topics = new Set();
    questionBank.filter(q => q.subject === subjectName).forEach(q => topics.add(q.topic));
    return Array.from(topics).sort();
}
