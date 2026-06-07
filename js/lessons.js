// THE DONNA STUDY BUSTER - LESSONS PAGE
// Shows mini lessons for topics Donna needs to practice

function initLessons() {
    renderSubjectTabs();
    renderLessons();
}

function renderLessons() {
    const container = document.getElementById("lessonsContainer");
    const noLessons = document.getElementById("noLessons");
    if (!container) return;

    const attempts = loadAttempts();
    const wrongAnswers = [];

    // Collect all wrong answers with topics
    attempts.forEach(a => {
        a.wrongAnswers.forEach(w => wrongAnswers.push(w));
    });

    if (wrongAnswers.length === 0) {
        container.classList.add("hidden");
        if (noLessons) noLessons.classList.remove("hidden");
        return;
    }

    // Group by topic
    const topicMap = {};
    wrongAnswers.forEach(w => {
        if (!topicMap[w.topic]) {
            topicMap[w.topic] = {
                topic: w.topic,
                subject: w.subject || "Natural Science & Technology",
                page: w.page,
                lesson: w.lesson,
                videoPrompt: w.videoPrompt,
                count: 0
            };
        }
        topicMap[w.topic].count++;
    });

    const topics = Object.values(topicMap).sort((a, b) => b.count - a.count);
    container.innerHTML = "";

    topics.forEach((t, index) => {
        const card = document.createElement("div");
        card.className = "lesson-card fade-in";
        card.style.animationDelay = (index * 0.1) + "s";
        card.onclick = () => toggleLessonDetail(t, card);
        card.innerHTML = `
            <div class="topic-label">${t.topic}</div>
            <div class="page-ref">📖 Page ${t.page}</div>
            <div class="wrong-count">${t.count} wrong answer${t.count > 1 ? 's' : ''}</div>
        `;
        container.appendChild(card);
    });
}

function toggleLessonDetail(topicData, cardElement) {
    // Remove expanded state from all other cards
    document.querySelectorAll(".lesson-card").forEach(c => {
        if (c !== cardElement) {
            c.classList.remove("expanded");
            const detail = c.querySelector(".lesson-detail");
            if (detail) detail.remove();
        }
    });

    // Toggle this card
    cardElement.classList.toggle("expanded");

    // Remove existing detail if any
    const existingDetail = cardElement.querySelector(".lesson-detail");
    if (existingDetail) {
        existingDetail.remove();
        return;
    }

    // Add detail
    const detail = document.createElement("div");
    detail.className = "lesson-detail fade-in";
    detail.innerHTML = `
        <h4>📚 Lesson: ${topicData.topic}</h4>
        <p><strong>📖 Textbook Pages:</strong> ${topicData.page}</p>
        <p><strong>📝 What to learn:</strong></p>
        <p>${topicData.lesson}</p>
        <p><strong>🎥 Suggested Video:</strong></p>
        <p class="video-prompt-text">${topicData.videoPrompt}</p>
    `;
    cardElement.appendChild(detail);
}

document.addEventListener("DOMContentLoaded", initLessons);
