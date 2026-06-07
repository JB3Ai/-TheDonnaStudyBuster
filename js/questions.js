// THE DONNA STUDY BUSTER - EXAM QUESTION BANK
const questionBank = [
    // SECTION A: MULTIPLE CHOICE
    { id: "Q1", subject: "Natural Science & Technology", topic: "Habitat", type: "mcq", marks: 1,
      question: "A habitat is:", options: ["A type of animal", "The natural home of an organism", "A food chain", "A skeleton"], answer: "The natural home of an organism", explanation: "A habitat provides food, water, shelter, and space." },
    { id: "Q2", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1,
      question: "Which animal is an invertebrate?", options: ["Dog", "Fish", "Spider", "Frog"], answer: "Spider", explanation: "Spiders do not have a backbone." },
    { id: "Q3", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "mcq", marks: 1,
      question: "Which part of the skeleton protects the brain?", options: ["Rib cage", "Spine", "Skull", "Pelvis"], answer: "Skull", explanation: "The skull is the hard bone protecting the brain." },
    { id: "Q4", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 1,
      question: "Which of the following is a producer?", options: ["Lion", "Grass", "Snake", "Eagle"], answer: "Grass", explanation: "Plants are producers because they make their own food." },
    { id: "Q5", subject: "Natural Science & Technology", topic: "Joint and ligament", type: "mcq", marks: 1,
      question: "A ligament connects:", options: ["Muscle to bone", "Bone to bone", "Bone to skin", "Muscle to muscle"], answer: "Bone to bone", explanation: "Ligaments hold bones together at joints." },
    { id: "Q6", subject: "Natural Science & Technology", topic: "Metals vs non-metals", type: "mcq", marks: 1,
      question: "Which of these is a metal?", options: ["Wood", "Plastic", "Copper", "Rubber"], answer: "Copper", explanation: "Copper is a shiny metal used in wires." },
    { id: "Q7", subject: "Natural Science & Technology", topic: "Butterfly life cycle", type: "mcq", marks: 1,
      question: "Which stage comes after a caterpillar?", options: ["Egg", "Butterfly", "Pupa", "Tadpole"], answer: "Pupa", explanation: "Egg -> Caterpillar -> Pupa -> Butterfly." },
    { id: "Q8", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1,
      question: "Which animal has a backbone?", options: ["Earthworm", "Snail", "Ant", "Eagle"], answer: "Eagle", explanation: "Birds like eagles are vertebrates." },
    { id: "Q9", subject: "Natural Science & Technology", topic: "Uses of metals", type: "mcq", marks: 1,
      question: "Which material is a good conductor of electricity?", options: ["Glass", "Wood", "Copper", "Plastic"], answer: "Copper", explanation: "Metals like copper conduct electricity well." },
    { id: "Q10", subject: "Natural Science & Technology", topic: "Processing materials", type: "mcq", marks: 1,
      question: "Processing means:", options: ["Growing plants", "Changing materials into useful products", "Eating food", "Moving objects"], answer: "Changing materials into useful products", explanation: "Processing turns raw materials into things we can use." },

    // SECTION B: TRUE OR FALSE (Treated as MCQ)
    { id: "Q11", subject: "Natural Science & Technology", topic: "Producer and consumer", type: "mcq", marks: 1, question: "Plants can make their own food.", options: ["True", "False"], answer: "True", explanation: "Through photosynthesis." },
    { id: "Q12", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "mcq", marks: 1, question: "All animals are vertebrates.", options: ["True", "False"], answer: "False", explanation: "Many are invertebrates (like insects)." },
    { id: "Q13", subject: "Natural Science & Technology", topic: "Habitat", type: "mcq", marks: 1, question: "A habitat provides food and shelter.", options: ["True", "False"], answer: "True", explanation: "It provides food, water, shelter, and space." },
    
    // SECTION D: SHORT QUESTIONS (Keyword matched)
    { id: "Q26", subject: "Natural Science & Technology", topic: "Biodiversity", type: "typed", marks: 2,
      question: "Define biodiversity.", options: [], answer: ["variety", "different", "plants", "animals", "area"], explanation: "A variety of different plants and animals living in an area." },
    { id: "Q27", subject: "Natural Science & Technology", topic: "Habitat", type: "typed", marks: 2,
      question: "Name two things every habitat provides.", options: [], answer: ["food", "water", "shelter", "space"], explanation: "Food, Water, Shelter, and Space." },
    { id: "Q28", subject: "Natural Science & Technology", topic: "Vertebrate vs Invertebrate", type: "typed", marks: 2,
      question: "What is the difference between a vertebrate and an invertebrate?", options: [], answer: ["backbone", "spine", "bone"], explanation: "Vertebrates have a backbone, invertebrates do not." },
    { id: "Q29", subject: "Natural Science & Technology", topic: "Functions of the skeleton", type: "typed", marks: 3,
      question: "Name three functions of the skeleton.", options: [], answer: ["support", "shape", "protect", "movement", "move"], explanation: "Support body, give shape, protect organs, help movement." },
    { id: "Q36", subject: "Natural Science & Technology", topic: "Interdependence", type: "typed", marks: 2,
      question: "Study this food chain: Grass -> Grasshopper -> Frog -> Snake -> Eagle. What would happen if all the grass disappeared?", options: [], answer: ["die", "starve", "lose food", "disrupted"], explanation: "Animals would lose their food source and the chain would collapse." },
];

function getAllSubjects() { return ["Natural Science & Technology"]; }
function getQuestionsBySubject(subjectName) { return questionBank.filter(q => q.subject === subjectName); }
function getQuestionsByTopic(topicName) { return questionBank.filter(q => q.topic === topicName); }
function getTopicsForSubject(subjectName) {
    const topics = new Set();
    questionBank.forEach(q => topics.add(q.topic));
    return Array.from(topics).sort();
}
