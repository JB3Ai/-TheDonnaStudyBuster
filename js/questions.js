// THE DONNA STUDY BUSTER - EXAM QUESTION BANK
const questionBank = [
    // SECTION A: MULTIPLE CHOICE (10 Marks)
    { id: "Q1", subject: "Natural Science & Technology", topic: "Habitat", type: "mcq", marks: 1, question: "A habitat is:", options: ["A type of animal", "The natural home of an organism", "A food chain", "A skeleton"], answer: "The natural home of an organism", explanation: "A habitat provides food, water, shelter, and space." },
    { id: "Q2", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1, question: "Which animal is an invertebrate?", options: ["Dog", "Fish", "Spider", "Frog"], answer: "Spider", explanation: "Spiders do not have a backbone." },
    { id: "Q3", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "mcq", marks: 1, question: "Which part of the skeleton protects the brain?", options: ["Rib cage", "Spine", "Skull", "Pelvis"], answer: "Skull", explanation: "The skull is the hard bone protecting the brain." },
    { id: "Q4", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 1, question: "Which of the following is a producer?", options: ["Lion", "Grass", "Snake", "Eagle"], answer: "Grass", explanation: "Plants are producers because they make their own food." },
    { id: "Q5", subject: "Natural Science & Technology", topic: "Joint and ligament", type: "mcq", marks: 1, question: "A ligament connects:", options: ["Muscle to bone", "Bone to bone", "Bone to skin", "Muscle to muscle"], answer: "Bone to bone", explanation: "Ligaments hold bones together at joints." },
    { id: "Q6", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "mcq", marks: 1, question: "Which of these is a metal?", options: ["Wood", "Plastic", "Copper", "Rubber"], answer: "Copper", explanation: "Copper is a shiny metal used in wires." },
    { id: "Q7", subject: "Natural Science & Technology", topic: "Butterfly life cycle", type: "mcq", marks: 1, question: "Which stage comes after a caterpillar?", options: ["Egg", "Butterfly", "Pupa", "Tadpole"], answer: "Pupa", explanation: "Egg -> Caterpillar -> Pupa -> Butterfly." },
    { id: "Q8", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1, question: "Which animal has a backbone?", options: ["Earthworm", "Snail", "Ant", "Eagle"], answer: "Eagle", explanation: "Birds like eagles are vertebrates." },
    { id: "Q9", subject: "Natural Science & Technology", topic: "Uses of metals", type: "mcq", marks: 1, question: "Which material is a good conductor of electricity?", options: ["Glass", "Wood", "Copper", "Plastic"], answer: "Copper", explanation: "Metals like copper conduct electricity well." },
    { id: "Q10", subject: "Natural Science & Technology", topic: "Processing materials", type: "mcq", marks: 1, question: "Processing means:", options: ["Growing plants", "Changing materials into useful products", "Eating food", "Moving objects"], answer: "Changing materials into useful products", explanation: "Processing turns raw materials into things we can use." },

    // SECTION B: TRUE OR FALSE (10 Marks)
    { id: "Q11", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 1, question: "Plants can make their own food.", options: ["True", "False"], answer: "True", explanation: "Plants make their own food using sunlight." },
    { id: "Q12", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1, question: "All animals are vertebrates.", options: ["True", "False"], answer: "False", explanation: "Many animals are invertebrates, like insects and worms." },
    { id: "Q13", subject: "Natural Science & Technology", topic: "Habitat", type: "mcq", marks: 1, question: "A habitat provides food and shelter.", options: ["True", "False"], answer: "True", explanation: "It provides food, water, shelter, and space." },
    { id: "Q14", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "mcq", marks: 1, question: "The rib cage protects the heart and lungs.", options: ["True", "False"], answer: "True", explanation: "The ribs form a protective cage around your vital chest organs." },
    { id: "Q15", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1, question: "Insects are vertebrates.", options: ["True", "False"], answer: "False", explanation: "Insects do not have backbones, they have exoskeletons." },
    { id: "Q16", subject: "Natural Science & Technology", topic: "Food chains", type: "mcq", marks: 1, question: "Food chains always start with a producer.", options: ["True", "False"], answer: "True", explanation: "Plants (producers) are always the base of the food chain." },
    { id: "Q17", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "mcq", marks: 1, question: "Metals are usually good conductors.", options: ["True", "False"], answer: "True", explanation: "Metals conduct heat and electricity well." },
    { id: "Q18", subject: "Natural Science & Technology", topic: "Butterfly life cycle", type: "mcq", marks: 1, question: "A butterfly's life cycle includes a pupa stage.", options: ["True", "False"], answer: "True", explanation: "The pupa (chrysalis) is the resting stage before becoming a butterfly." },
    { id: "Q19", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "mcq", marks: 1, question: "Plastic is a metal.", options: ["True", "False"], answer: "False", explanation: "Plastic is a non-metal." },
    { id: "Q20", subject: "Natural Science & Technology", topic: "Traditional processing methods", type: "mcq", marks: 1, question: "Traditional processing methods were used before modern factories.", options: ["True", "False"], answer: "True", explanation: "Like weaving grass or making mud bricks." },

    // SECTION C: MATCH THE COLUMNS (10 Marks)
    { id: "Q21", subject: "Natural Science & Technology", topic: "Habitat", type: "mcq", marks: 2, question: "Match the definition to the word: Habitat", options: ["Connects bones", "Makes own food", "Natural home", "Protects brain"], answer: "Natural home", explanation: "A habitat is an organism's natural home." },
    { id: "Q22", subject: "Natural Science & Technology", topic: "Joint and ligament", type: "mcq", marks: 2, question: "Match the definition to the word: Ligament", options: ["Connects bones", "Makes own food", "Natural home", "Eats plants or animals"], answer: "Connects bones", explanation: "Ligaments hold bones together." },
    { id: "Q23", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 2, question: "Match the definition to the word: Producer", options: ["Connects bones", "Makes own food", "Natural home", "Eats plants or animals"], answer: "Makes own food", explanation: "Producers make their own food from sunlight." },
    { id: "Q24", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 2, question: "Match the definition to the word: Consumer", options: ["Connects bones", "Makes own food", "Natural home", "Eats plants or animals"], answer: "Eats plants or animals", explanation: "Consumers have to eat other things to survive." },
    { id: "Q25", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "mcq", marks: 2, question: "Match the definition to the word: Skull", options: ["Connects bones", "Makes own food", "Protects brain", "Eats plants or animals"], answer: "Protects brain", explanation: "The skull acts like a helmet for the brain." },

    // SECTION D: SHORT QUESTIONS (15 Marks)
    { id: "Q26", subject: "Natural Science & Technology", topic: "Biodiversity", type: "typed", marks: 2, question: "Define biodiversity.", options: [], answer: ["variety", "different", "plants", "animals", "area"], explanation: "A variety of different plants and animals living in an area." },
    { id: "Q27", subject: "Natural Science & Technology", topic: "Habitat", type: "typed", marks: 2, question: "Name two things every habitat provides.", options: [], answer: ["food", "water", "shelter", "space"], explanation: "Food, Water, Shelter, and Space." },
    { id: "Q28", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "typed", marks: 2, question: "What is the difference between a vertebrate and an invertebrate?", options: [], answer: ["backbone", "spine", "bone"], explanation: "Vertebrates have a backbone, invertebrates do not." },
    { id: "Q29", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "typed", marks: 3, question: "Name three functions of the skeleton.", options: [], answer: ["support", "shape", "protect", "movement", "move"], explanation: "Support body, give shape, protect organs, help movement." },
    { id: "Q30", subject: "Natural Science & Technology", topic: "Joint and ligament", type: "typed", marks: 2, question: "What is a joint?", options: [], answer: ["bones meet", "bones connect", "where bones"], explanation: "A place where two bones meet." },
    { id: "Q31", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "typed", marks: 2, question: "Name two metals.", options: [], answer: ["iron", "copper", "aluminium", "gold", "silver", "steel"], explanation: "Iron, Copper, Aluminium, Gold." },
    { id: "Q32", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "typed", marks: 2, question: "Name two non-metals.", options: [], answer: ["wood", "plastic", "glass", "rubber", "paper"], explanation: "Wood, Plastic, Glass, Rubber." },

    // SECTION E: FOOD CHAINS (5 Marks)
    { id: "Q33", subject: "Natural Science & Technology", topic: "Food chains", type: "typed", marks: 1, question: "Study the food chain: Grass -> Grasshopper -> Frog -> Snake -> Eagle. Which organism is the producer?", options: [], answer: ["grass"], explanation: "Grass is the producer." },
    { id: "Q34", subject: "Natural Science & Technology", topic: "Food chains", type: "typed", marks: 1, question: "Study the food chain: Grass -> Grasshopper -> Frog -> Snake -> Eagle. Which organism eats the grasshopper?", options: [], answer: ["frog"], explanation: "The frog eats the grasshopper." },
    { id: "Q35", subject: "Natural Science & Technology", topic: "Food chains", type: "typed", marks: 1, question: "Study the food chain: Grass -> Grasshopper -> Frog -> Snake -> Eagle. Which organism is the top predator?", options: [], answer: ["eagle"], explanation: "The eagle is at the top of the chain." },
    { id: "Q36", subject: "Natural Science & Technology", topic: "Interdependence", type: "typed", marks: 2, question: "What would happen if all the grass disappeared?", options: [], answer: ["die", "starve", "lose food", "disrupted"], explanation: "Animals would lose their food source and the chain would collapse." },

    // SECTION F: LIFE CYCLES (5 Marks)
    { id: "Q37", subject: "Natural Science & Technology", topic: "Butterfly life cycle", type: "typed", marks: 4, question: "Put the butterfly life cycle in the correct order using commas (Butterfly, Egg, Pupa, Caterpillar):", options: [], answer: ["egg", "caterpillar", "pupa", "butterfly"], explanation: "Egg -> Caterpillar -> Pupa -> Butterfly" },
    { id: "Q38", subject: "Natural Science & Technology", topic: "Germination", type: "typed", marks: 1, question: "What is germination?", options: [], answer: ["seed", "grow", "sprout"], explanation: "The process where a seed begins to grow." },

    // SECTION G: PROCESSING MATERIALS (5 Marks)
    { id: "Q39", subject: "Natural Science & Technology", topic: "Processing materials", type: "typed", marks: 1, question: "Give one example of a raw material.", options: [], answer: ["wood", "clay", "cotton", "iron", "ore", "sand"], explanation: "Wood, Clay, Cotton, Iron ore." },
    { id: "Q40", subject: "Natural Science & Technology", topic: "Processing materials", type: "typed", marks: 1, question: "Give one product made from wood.", options: [], answer: ["paper", "furniture", "pencil", "desk", "table", "chair"], explanation: "Paper, furniture, pencil, desk." },
    { id: "Q41", subject: "Natural Science & Technology", topic: "Processing materials", type: "typed", marks: 1, question: "Give one product made from clay.", options: [], answer: ["brick", "pot", "tile", "vase", "bowl"], explanation: "Brick, pot, tile." },
    { id: "Q42", subject: "Natural Science & Technology", topic: "Processing materials", type: "typed", marks: 2, question: "Why do people process materials?", options: [], answer: ["useful", "improve", "stronger", "better"], explanation: "To make useful products and improve materials for use." },

    // BONUS CHALLENGE QUESTION (5 Marks)
    { id: "Q43", subject: "Natural Science & Technology", topic: "Interdependence", type: "typed", marks: 5, question: "Explain the relationship between plants, animals and habitats.", options: [], answer: ["depend", "food", "oxygen", "shelter", "water", "space"], explanation: "Plants grow in habitats and provide food and oxygen. Animals live in habitats and depend on plants and other animals. Habitats provide water, food, shelter and space." }
];

function getAllSubjects() { return ["Natural Science & Technology"]; }
function getQuestionsBySubject(subjectName) { return questionBank.filter(q => q.subject === subjectName); }
function getQuestionsByTopic(topicName) { return questionBank.filter(q => q.topic === topicName); }
function getTopicsForSubject(subjectName) {
    const topics = new Set();
    questionBank.forEach(q => topics.add(q.topic));
    return Array.from(topics).sort();
}
