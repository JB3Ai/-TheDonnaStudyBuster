// THE DONNA STUDY BUSTER - STUDY RESOURCE LIBRARY
// Clickable cards with links to helpful study resources

const studyResources = {
    papers: [
        {
            name: "Testpapers",
            desc: "Free South African past exam papers and worksheets for Grade 5.",
            bestUse: "Practising real exam questions under timed conditions.",
            tags: ["Past Papers", "Worksheets", "All Subjects"],
            link: "https://www.testpapers.co.za"
        },
        {
            name: "WCED ePortal / EdBuddies",
            desc: "Western Cape Education Department e-learning portal with digital resources.",
            bestUse: "WCED-aligned lessons and digital content.",
            tags: ["Digital", "WCED", "Lessons"],
            link: "https://www.wcedeportal.co.za"
        },
        {
            name: "Siyavula",
            desc: "Free South African maths and science textbooks and exercises online.",
            bestUse: "Extra practice for Maths and Natural Science with auto-marking.",
            tags: ["Mathematics", "Natural Science", "Textbooks"],
            link: "https://www.siyavula.com"
        },
        {
            name: "Khan Academy",
            desc: "World-class free lessons in maths, science and more with video tutorials.",
            bestUse: "Learning new topics step by step with practice exercises.",
            tags: ["Mathematics", "Science", "Video Lessons"],
            link: "https://www.khanacademy.org"
        },
        {
            name: "Twinkl South Africa",
            desc: "Printable worksheets, posters and lesson plans for South African learners.",
            bestUse: "Printing extra worksheets for offline practice.",
            tags: ["Worksheets", "Printable", "All Subjects"],
            link: "https://www.twinkl.co.za"
        }
    ],
    flashcards: [
        {
            name: "8-Box Flashcard Method",
            desc: "A simple paper system for drilling vocabulary, facts and definitions.",
            bestUse: "Learning definitions, spelling and science vocabulary with physical cards.",
            tags: ["Memory", "Vocabulary", "Printable"],
            link: ""
        },
        {
            name: "Anki",
            desc: "Smart flashcard app that uses spaced repetition to help you remember longer.",
            bestUse: "Long-term memory for definitions, dates and biology facts.",
            tags: ["App", "Spaced Repetition", "Science"],
            link: "https://apps.ankiweb.net"
        },
        {
            name: "Quizlet",
            desc: "Online flashcards, quizzes and games for learning any subject.",
            bestUse: "Quick drills and games for revision before a test.",
            tags: ["Online", "Games", "All Subjects"],
            link: "https://quizlet.com"
        },
        {
            name: "Brainscape",
            desc: "Digital flashcards with a confidence-based repetition system.",
            bestUse: "Focused revision on topics you find difficult.",
            tags: ["Online", "Adaptive", "All Subjects"],
            link: "https://www.brainscape.com"
        }
    ],
    ai: [
        {
            name: "Quizgecko",
            desc: "AI tool that turns notes into quizzes, flashcards and study guides.",
            bestUse: "Turning textbook pages into quick practice quizzes.",
            tags: ["AI", "Quiz Generator", "All Subjects"],
            link: "https://quizgecko.com"
        },
        {
            name: "Consensus",
            desc: "AI search that gives cited answers from academic sources.",
            bestUse: "Researching science topics with trustworthy explanations.",
            tags: ["AI", "Research", "Science"],
            link: "https://consensus.app"
        },
        {
            name: "Khan Academy AI",
            desc: "AI tutor inside Khan Academy that gives personalised help.",
            bestUse: "Getting step-by-step help on maths and science problems.",
            tags: ["AI", "Tutor", "Mathematics", "Science"],
            link: "https://www.khanacademy.org"
        }
    ]
};

function renderResources() {
    renderSubjectTabs();

    const papersGrid = document.getElementById("papersGrid");
    const flashcardsGrid = document.getElementById("flashcardsGrid");
    const aiGrid = document.getElementById("aiGrid");

    if (papersGrid) papersGrid.innerHTML = studyResources.papers.map(r => resourceCardHTML(r)).join("");
    if (flashcardsGrid) flashcardsGrid.innerHTML = studyResources.flashcards.map(r => resourceCardHTML(r)).join("");
    if (aiGrid) aiGrid.innerHTML = studyResources.ai.map(r => resourceCardHTML(r)).join("");
}

function resourceCardHTML(r) {
    return `
        <div class="resource-card fade-in">
            <div class="resource-name">${r.name}</div>
            <div class="resource-desc">${r.desc}</div>
            <div class="resource-desc"><strong>Best use:</strong> ${r.bestUse}</div>
            <div class="resource-tags">
                ${r.tags.map(t => `<span class="subject-tag">${t}</span>`).join("")}
            </div>
            ${r.link ? `<a href="${r.link}" target="_blank" rel="noopener" class="resource-link">🔗 Visit ${r.name}</a>` : `<span class="resource-link">📄 Offline / Physical tool</span>`}
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", renderResources);
