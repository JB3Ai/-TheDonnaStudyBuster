// THE DONNA STUDY BUSTER - LOCAL STORAGE MANAGER
// Handles saving and loading data from browser localStorage
// Keys used:
//   donnaStudyBusterAttempts
//   donnaStudyBusterBadges
//   donnaStudyBusterSettings

const STUDENT_NAME = "Donna"; // Change this to change the student name

const STORAGE_KEYS = {
    attempts: "donnaStudyBusterAttempts",
    badges: "donnaStudyBusterBadges",
    settings: "donnaStudyBusterSettings"
};

// ---- SAVE AN ATTEMPT ----
function saveAttempt(attempt) {
    const attempts = loadAttempts();
    attempts.push(attempt);
    localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify(attempts));
}

// ---- LOAD ALL ATTEMPTS ----
function loadAttempts() {
    const data = localStorage.getItem(STORAGE_KEYS.attempts);
    return data ? JSON.parse(data) : [];
}

// ---- SAVE BADGES ----
function saveBadges(badges) {
    localStorage.setItem(STORAGE_KEYS.badges, JSON.stringify(badges));
}

// ---- LOAD BADGES ----
function loadBadges() {
    const data = localStorage.getItem(STORAGE_KEYS.badges);
    return data ? JSON.parse(data) : { unlocked: [], unlockedAt: {} };
}

// ---- SAVE SETTINGS ----
function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

// ---- LOAD SETTINGS ----
function loadSettings() {
    const data = localStorage.getItem(STORAGE_KEYS.settings);
    return data ? JSON.parse(data) : { selectedSubject: "Natural Science & Technology" };
}

// ---- CLEAR ALL DATA ----
function clearAllData() {
    if (confirm("Are you sure you want to delete ALL saved results, badges and settings? This cannot be undone!")) {
        localStorage.removeItem(STORAGE_KEYS.attempts);
        localStorage.removeItem(STORAGE_KEYS.badges);
        localStorage.removeItem(STORAGE_KEYS.settings);
        alert("All data cleared! Starting fresh!");
        location.reload();
    }
}

// ---- CHECK IF RETEST IS NEEDED ----
function getWeakTopics(subject) {
    const attempts = loadAttempts().filter(a => a.subject === subject);
    if (attempts.length === 0) return [];

    // Track topic scores across all attempts
    const topicData = {};
    attempts.forEach(a => {
        a.wrongAnswers.forEach(w => {
            if (!topicData[w.topic]) {
                topicData[w.topic] = { total: 0, wrong: 0 };
            }
            topicData[w.topic].total++;
            topicData[w.topic].wrong++;
        });
        a.correctAnswers.forEach(c => {
            if (!topicData[c.topic]) {
                topicData[c.topic] = { total: 0, wrong: 0 };
            }
            topicData[c.topic].total++;
        });
    });

    const weakTopics = [];
    Object.entries(topicData).forEach(([topic, data]) => {
        const pct = ((data.total - data.wrong) / data.total) * 100;
        if (pct < 70) {
            weakTopics.push({ topic, percent: pct });
        }
    });
    return weakTopics.sort((a, b) => a.percent - b.percent);
}
