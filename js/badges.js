// THE DONNA STUDY BUSTER - BADGE SYSTEM
// Collectible reward badges for Donna

const BADGE_DEFINITIONS = [
    {
        id: "turtle_starter",
        name: "Turtle Starter",
        emoji: "🐢",
        desc: "First quiz completed",
        check: (attempts, badges) => attempts.length >= 1
    },
    {
        id: "panda_power",
        name: "Panda Power",
        emoji: "🐼",
        desc: "Scored above 70%",
        check: (attempts, badges) => attempts.some(a => a.score >= 70)
    },
    {
        id: "science_star",
        name: "Science Star",
        emoji: "⭐",
        desc: "Scored above 85%",
        check: (attempts, badges) => attempts.some(a => a.score >= 85)
    },
    {
        id: "foodchain_hero",
        name: "Food Chain Hero",
        emoji: "🌿",
        desc: "Aced Producer and consumer questions",
        check: (attempts, badges) => attempts.some(a => {
            const foodChainCorrect = a.correctAnswers.some(c => (c.topic === "Producer and consumer") && c.answerCorrect);
            const foodChainWrong = a.wrongAnswers.some(w => w.topic === "Producer and consumer");
            return foodChainCorrect && !foodChainWrong;
        })
    },
    {
        id: "skeleton_solver",
        name: "Skeleton Solver",
        emoji: "🦴",
        desc: "Aced a Functions of the skeleton question",
        check: (attempts, badges) => attempts.some(a => {
            const skelCorrect = a.correctAnswers.some(c => (c.topic === "Functions of the skeleton") && c.answerCorrect);
            const skelWrong = a.wrongAnswers.some(w => w.topic === "Functions of the skeleton");
            return skelCorrect && !skelWrong;
        })
    },
    {
        id: "metal_master",
        name: "Metal Master",
        emoji: "🔧",
        desc: "Aced a Metals vs non-metals question",
        check: (attempts, badges) => attempts.some(a => {
            const metalCorrect = a.correctAnswers.some(c => (c.topic === "Metals vs non-metals") && c.answerCorrect);
            const metalWrong = a.wrongAnswers.some(w => w.topic === "Metals vs non-metals");
            return metalCorrect && !metalWrong;
        })
    },
    {
        id: "exam_ready",
        name: "Exam Ready!",
        emoji: "📝",
        desc: "Scored 80% or more on a full exam",
        check: (attempts, badges) => attempts.some(a => a.score >= 80 && a.type === "full")
    },
    {
        id: "must_know_master",
        name: "Must Know Master",
        emoji: "🧠",
        desc: "Got all Must Know questions correct",
        check: (attempts, badges) => {
            const mustKnowTopics = [
                "Habitat", "Biodiversity", "Interdependence", "Vertebrate vs Invertebrate",
                "Functions of the skeleton", "Joint and ligament", "Producer and consumer",
                "Food Chains", "Butterfly life cycle", "Metals vs non-metals",
                "Uses of metals", "Processing materials"
            ];
            return attempts.some(a => {
                const wrongTopics = new Set(a.wrongAnswers.map(w => w.topic));
                return mustKnowTopics.every(t => !wrongTopics.has(t)) && a.correctAnswers.some(c => mustKnowTopics.includes(c.topic));
            });
        }
    },
    {
        id: "revision_champion",
        name: "Revision Champion",
        emoji: "🏆",
        desc: "Completed 3 quizzes",
        check: (attempts, badges) => attempts.length >= 3
    },
    {
        id: "perfect_score",
        name: "Perfect Score",
        emoji: "💯",
        desc: "Got 100% on a quiz",
        check: (attempts, badges) => attempts.some(a => a.score === 100)
    },
    {
        id: "improvement_star",
        name: "Improvement Star",
        emoji: "🌟",
        desc: "Improved a weak topic after retest",
        check: (attempts, badges) => badges.improvementStar === true
    }
];

// ---- UPDATE BADGES AFTER EACH ATTEMPT ----
function updateBadges(attempt) {
    const stored = loadBadges();
    const allAttempts = loadAttempts();
    const badges = stored.unlocked ? stored.unlocked : [];
    const meta = stored.unlockedAt || {};

    BADGE_DEFINITIONS.forEach(badge => {
        if (!badges.includes(badge.id)) {
            if (badge.check(allAttempts, stored)) {
                badges.push(badge.id);
                meta[badge.id] = new Date().toISOString();
            }
        }
    });

    saveBadges({ unlocked: badges, unlockedAt: meta });
    return badges;
}

// ---- MARK IMPROVEMENT STAR ----
function markImprovementStar() {
    const stored = loadBadges();
    stored.improvementStar = true;
    saveBadges(stored);
    const allAttempts = loadAttempts();
    allAttempts.forEach(a => {
        if (a.type === "retest" && a.score >= 70) {
            updateBadges(a);
        }
    });
}

// ---- RENDER BADGES ----
function renderBadges(containerId, showLocked = true) {
    const stored = loadBadges();
    const badges = stored.unlocked || [];
    const meta = stored.unlockedAt || {};
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "badge-grid";

    BADGE_DEFINITIONS.forEach(badge => {
        const isUnlocked = badges.includes(badge.id);
        const card = document.createElement("div");
        card.className = "badge-card" + (isUnlocked ? " badge-unlocked" : " locked");
        card.innerHTML = `
            <div class="badge-emoji">${badge.emoji}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-status">${isUnlocked ? "Unlocked " + formatDateShort(meta[badge.id]) : badge.desc}</div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function formatDateShort(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString();
}
