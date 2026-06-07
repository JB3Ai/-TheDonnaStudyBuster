// THE DONNA STUDY BUSTER - RESULTS PAGE
// Dad Dashboard + Gap Analysis + Retest + Export

let latestAttempt = null;

function initResults() {
    renderSubjectTabs();
    loadDashboard();
    loadLatestAttempt();
    setupResultsListeners();
    renderBadges("dashboardBadges", false);
}

function loadDashboard() {
    const attempts = loadAttempts();
    const noResults = document.getElementById("noResults");
    const dashboard = document.getElementById("dashboard");

    if (attempts.length === 0) {
        noResults.classList.remove("hidden");
        dashboard.classList.add("hidden");
        return;
    }

    noResults.classList.add("hidden");
    dashboard.classList.remove("hidden");

    // Latest score
    const latest = attempts[attempts.length - 1];
    document.getElementById("latestScore").textContent = latest.score + "%";

    // Average score
    const avg = Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length);
    document.getElementById("avgScore").textContent = avg + "%";

    // Best score
    const best = Math.max(...attempts.map(a => a.score));
    document.getElementById("bestScore").textContent = best + "%";

    // Weakest subject
    const subjectScores = {};
    attempts.forEach(a => {
        if (!subjectScores[a.subject]) subjectScores[a.subject] = { total: 0, count: 0 };
        subjectScores[a.subject].total += a.score;
        subjectScores[a.subject].count++;
    });
    const weakestSubj = Object.entries(subjectScores)
        .sort((a, b) => (a[1].total / a[1].count) - (b[1].total / b[1].count))[0];
    document.getElementById("weakestSubject").textContent = weakestSubj ? weakestSubj[0] : "-";

    // Weakest topic
    const topicData = {};
    attempts.forEach(a => {
        a.wrongAnswers.forEach(w => {
            topicData[w.topic] = (topicData[w.topic] || 0) + 1;
        });
    });
    const worstTopic = Object.entries(topicData).sort((a, b) => b[1] - a[1])[0];
    document.getElementById("weakestTopic").textContent = worstTopic ? worstTopic[0] : "-";

    // Total quizzes
    document.getElementById("totalQuizzes").textContent = attempts.length;

    // Recommendation
    const lastAttempt = attempts[attempts.length - 1];
    const rec = lastAttempt.recommendedLesson;
    document.getElementById("recommendedLesson").innerHTML =
        `<strong>${rec.topic}</strong>: ${rec.lesson}`;
}

function loadLatestAttempt() {
    const data = sessionStorage.getItem("donnaStudyBusterLatestResult");
    if (data) {
        latestAttempt = JSON.parse(data);
        renderGapAnalysis(latestAttempt);
        updateRetestButton();
    } else if (loadAttempts().length > 0) {
        latestAttempt = loadAttempts()[loadAttempts().length - 1];
        renderGapAnalysis(latestAttempt);
        updateRetestButton();
    }
}

function renderGapAnalysis(attempt) {
    const container = document.getElementById("gapAnalysis");
    const msg = document.getElementById("noAttemptsMsg");
    if (!container || !attempt) return;

    container.classList.remove("hidden");
    msg.classList.add("hidden");

    const dateStr = new Date(attempt.dateTime).toLocaleString("en-ZA", {
        dateStyle: "medium", timeStyle: "short"
    });

    let html = `
        <div class="gap-summary">
            <p><strong>Student:</strong> ${attempt.studentName}</p>
            <p><strong>Date:</strong> ${dateStr}</p>
            <p><strong>Subject:</strong> ${attempt.subject}</p>
            <p><strong>Score:</strong> ${attempt.score}% (${attempt.correctCount}/${attempt.totalQuestions})</p>
        </div>
        <h4>✅ Correct Answers</h4>
        <ul class="gap-list correct-list">
    `;

    attempt.correctAnswers.forEach(a => {
        html += `<li><strong>${a.topic}</strong>: ${a.question} (Your answer: ${a.userAnswer || "N/A"})</li>`;
    });

    html += `</ul><h4>❌ Wrong Answers</h4><ul class="gap-list wrong-list">`;

    attempt.wrongAnswers.forEach(a => {
        html += `
            <li class="gap-item">
                <strong>${a.topic}</strong> (Page ${a.page})<br>
                Q: ${a.question}<br>
                You answered: ${a.userAnswer || "blank"}<br>
                Correct answer: ${a.correctAnswer}<br>
                <em>${a.explanation}</em>
            </li>
        `;
    });

    html += `</ul>`;

    if (attempt.weakTopics && attempt.weakTopics.length > 0) {
        html += `<h4>📉 Weak Topics</h4><ul>`;
        attempt.weakTopics.forEach(t => {
            html += `<li><strong>${t.topic}</strong> - ${t.wrongCount} wrong answer${t.wrongCount > 1 ? 's' : ''}</li>`;
        });
        html += `</ul>`;
    }

    if (attempt.recommendedLesson) {
        html += `<h4>📚 Suggested Lesson</h4><p>${attempt.recommendedLesson.lesson}</p>`;
    }

    if (attempt.videoPrompt) {
        html += `<h4>🎥 Suggested Video Topic</h4><p>${attempt.videoPrompt}</p>`;
    }

    container.innerHTML = html;
}

function updateRetestButton() {
    const btn = document.getElementById("retestWeak");
    const msg = document.getElementById("retestMsg");
    if (!btn) return;

    const weak = getWeakTopics(latestAttempt ? latestAttempt.subject : "Natural Science & Technology");
    if (weak.length === 0) {
        btn.classList.add("hidden");
        if (msg) msg.classList.remove("hidden");
    } else {
        btn.classList.remove("hidden");
        if (msg) msg.classList.add("hidden");
    }
}

function retestWeakTopics() {
    if (!latestAttempt) {
        alert("Please complete a quiz first.");
        return;
    }
    const weak = getWeakTopics(latestAttempt.subject);
    if (weak.length === 0) {
        alert("Great job! No weak topics to retest! 🎉");
        return;
    }

    const topics = weak.map(w => w.topic);
    const questions = questionBank.filter(q =>
        q.subject === latestAttempt.subject && topics.includes(q.topic)
    );

    if (questions.length === 0) {
        alert("No questions found for weak topics.");
        return;
    }

    // Store the subject and topic filter for quiz.js to use
    localStorage.setItem("donnaStudyBusterSelectedSubject", latestAttempt.subject);
    sessionStorage.setItem("donnaStudyBusterRetestTopics", JSON.stringify(topics));
    window.location.href = "index.html#retest";
}

function exportJSON() {
    const attempts = loadAttempts();
    if (attempts.length === 0) {
        alert("No results to export!");
        return;
    }
    const blob = new Blob([JSON.stringify(attempts, null, 2)], { type: "application/json" });
    downloadBlob(blob, "donna-study-results.json");
}

function exportTXT() {
    const attempts = loadAttempts();
    if (attempts.length === 0) {
        alert("No results to export!");
        return;
    }
    let txt = "THE DONNA STUDY BUSTER - RESULTS REPORT\n";
    txt += "=".repeat(50) + "\n\n";
    attempts.forEach((a, i) => {
        const dateStr = new Date(a.dateTime).toLocaleString("en-ZA");
        txt += `Attempt ${i + 1}\n`;
        txt += `Date: ${dateStr}\n`;
        txt += `Subject: ${a.subject}\n`;
        txt += `Score: ${a.score}% (${a.correctCount}/${a.totalQuestions})\n`;
        txt += `Correct: ${a.correctAnswers.length}\n`;
        txt += `Wrong: ${a.wrongAnswers.length}\n`;
        if (a.wrongAnswers.length > 0) {
            txt += `\nWrong Answers:\n`;
            a.wrongAnswers.forEach(w => {
                txt += `  - [${w.topic}] ${w.question}\n`;
                txt += `    Your answer: ${w.userAnswer}\n`;
                txt += `    Correct answer: ${w.correctAnswer}\n`;
            });
        }
        txt += "\n" + "-".repeat(50) + "\n\n";
    });
    const blob = new Blob([txt], { type: "text/plain" });
    downloadBlob(blob, "donna-study-results.txt");
}

function copyReportChatGPT() {
    const attempts = loadAttempts();
    if (attempts.length === 0) {
        alert("No results to copy!");
        return;
    }
    const latest = attempts[attempts.length - 1];
    let text = `Donna's Study Report\n`;
    text += `Latest Score: ${latest.score}%\n`;
    text += `Subject: ${latest.subject}\n`;
    text += `Date: ${new Date(latest.dateTime).toLocaleString("en-ZA")}\n\n`;
    text += `Weak Topics:\n`;
    if (latest.weakTopics && latest.weakTopics.length > 0) {
        latest.weakTopics.forEach(t => {
            text += `- ${t.topic} (${t.wrongCount} wrong)\n`;
        });
    } else {
        text += `None - Great job!\n`;
    }
    text += `\nPlease help Donna improve in these topics with Grade 5 explanations.`;
    navigator.clipboard.writeText(text).then(() => {
        alert("Report copied to clipboard!");
    }).catch(() => {
        prompt("Copy this text:", text);
    });
}

function copyVideoPrompt() {
    if (!latestAttempt || !latestAttempt.videoPrompt) {
        alert("No video prompt available.");
        return;
    }
    navigator.clipboard.writeText(latestAttempt.videoPrompt).then(() => {
        alert("Video prompt copied to clipboard!");
    }).catch(() => {
        prompt("Copy this prompt:", latestAttempt.videoPrompt);
    });
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function clearAllData() {
    if (confirm("Are you sure you want to delete ALL saved results, badges and settings? This cannot be undone!")) {
        localStorage.removeItem("donnaStudyBusterAttempts");
        localStorage.removeItem("donnaStudyBusterBadges");
        localStorage.removeItem("donnaStudyBusterSettings");
        alert("All data cleared! Starting fresh!");
        location.reload();
    }
}

function setupResultsListeners() {
    const retestBtn = document.getElementById("retestWeak");
    if (retestBtn) {
        retestBtn.addEventListener("click", retestWeakTopics);
    }
}

document.addEventListener("DOMContentLoaded", initResults);
