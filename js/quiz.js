// THE DONNA STUDY BUSTER - QUIZ ENGINE
// Handles the quiz flow: start, display questions, check answers, scoring

let currentQuiz = [];       // Array of questions for current quiz
let currentIndex = 0;       // Which question we are on
let currentSubject = "";    // Which subject is selected
let currentTopicFilter = "all";
let currentAnswers = [];    // Donna's answers for this attempt
let scoreCount = 0;         // Correct answers count
let quizFinished = false;

// ---- INIT / SUBJECT TABS ----
function init() {
    renderSubjectTabs();
    setupEventListeners();
    renderHomeBadges();
    // Restore last selected subject
    const settings = loadSettings();
    if (settings.selectedSubject) {
        setActiveSubject(settings.selectedSubject);
    }
}

function renderSubjectTabs() {
    const tabsContainer = document.getElementById("subjectTabs");
    if (!tabsContainer) return;
    const subjects = getAllSubjects();
    tabsContainer.innerHTML = subjects.map(s =>
        `<span class="subject-tab" data-subject="${s}" onclick="setActiveSubject('${s}')">${s}</span>`
    ).join("");
}

function setActiveSubject(subject) {
    currentSubject = subject;
    saveSettings({ selectedSubject: subject });
    const tabs = document.querySelectorAll(".subject-tab");
    tabs.forEach(t => {
        t.classList.toggle("active", t.dataset.subject === subject);
    });
}

// ---- START QUIZ ----
function startSubjectQuiz(topic = "all") {
    currentTopicFilter = topic;
    let questions;

    if (topic === "all") {
        questions = getQuestionsBySubject(currentSubject || "Natural Science & Technology");
    } else {
        questions = getQuestionsByTopic(topic);
    }

    if (questions.length === 0) {
        alert("No questions found for this topic!");
        return;
    }

    // Shuffle questions for variety
    currentQuiz = shuffleArray([...questions]).slice(0, Math.min(10, questions.length));
    currentIndex = 0;
    currentAnswers = [];
    scoreCount = 0;
    quizFinished = false;

    // Update UI
    document.querySelector(".welcome-card").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");

    // Populate topic filter dropdown
    const topicSelect = document.getElementById("topicFilter");
    if (topicSelect) {
        const topics = getTopicsForSubject(currentSubject || "Natural Science & Technology");
        topicSelect.innerHTML = "<option value='all'>All Topics</option>" +
            topics.map(t => `<option value='${t}' ${t === topic ? 'selected' : ''}>${t}</option>`).join("");
    }

    showQuestion();
}

// ---- SHOW CURRENT QUESTION ----
function showQuestion() {
    if (currentIndex >= currentQuiz.length) {
        finishQuiz();
        return;
    }

    const q = currentQuiz[currentIndex];
    document.getElementById("questionText").textContent = q.question;
    document.getElementById("topicBadge").textContent = q.topic;
    const subBadge = document.getElementById("subjectBadge");
    subBadge.textContent = q.subject;

    // Progress
    const pct = ((currentIndex) / currentQuiz.length) * 100;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("questionCounter").textContent = `${currentIndex + 1} of ${currentQuiz.length}`;

    // Reset UI state
    document.getElementById("optionsContainer").innerHTML = "";
    document.getElementById("typedAnswerContainer").classList.add("hidden");
    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("submitAnswer").classList.add("hidden");
    document.getElementById("nextQuestion").classList.add("hidden");

    if (q.type === "mcq") {
        renderOptions(q);
    } else {
        document.getElementById("typedAnswerContainer").classList.remove("hidden");
        document.getElementById("typedAnswer").value = "";
        document.getElementById("submitAnswer").classList.remove("hidden");
    }
}

// ---- RENDER MC OPTIONS ----
function renderOptions(q) {
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => selectOption(btn, opt);
        container.appendChild(btn);
    });
}

let selectedOptionText = null;

function selectOption(btn, opt) {
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedOptionText = opt;
    document.getElementById("submitAnswer").classList.remove("hidden");
}

// ---- SUBMIT ANSWER ----
function submitAnswer() {
    const q = currentQuiz[currentIndex];
    let userAnswer = "";
    let isCorrect = false;

    if (q.type === "mcq") {
        userAnswer = selectedOptionText || "";
        isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
    } else {
        // SMART TYPED ANSWER CHECKING FOR DONNA
        const input = document.getElementById("typedAnswer");
        userAnswer = input.value.trim().toLowerCase();
        
        let keywordsMatched = 0;
        q.answer.forEach(keyword => {
            if (userAnswer.includes(keyword.toLowerCase())) {
                keywordsMatched++;
            }
        });
        
        const requiredMatches = q.marks > 1 ? 2 : 1; 
        isCorrect = keywordsMatched >= requiredMatches;
    }

    const answerRecord = {
        questionId: q.id,
        topic: q.topic,
        question: q.question,
        correctAnswer: q.type === "mcq" ? q.answer : q.answer.join(", "),
        userAnswer: userAnswer,
        answerCorrect: isCorrect,
        explanation: q.explanation,
        marks: q.marks
    };

    if (isCorrect) {
        scoreCount += q.marks;
        currentAnswers.push({ questionId: q.id, topic: q.topic, correct: true, marks: q.marks });
    } else {
        currentAnswers.push({ questionId: q.id, topic: q.topic, correct: false, marks: 0 });
    }

    const fb = document.getElementById("feedback");
    fb.classList.remove("hidden");
    fb.className = "feedback " + (isCorrect ? "feedback-correct" : "feedback-wrong");

    document.getElementById("feedbackText").textContent = isCorrect
        ? "🌟 Correct! Well done Donna!"
        : "😊 Not quite, but that is okay!";

    document.getElementById("correctAnswer").textContent = isCorrect
        ? ""
        : `Key things to mention: ${q.type === "mcq" ? q.answer : q.answer.join(", ")}`;

    document.getElementById("explanationText").textContent = q.explanation;

    if (q.type === "mcq") {
        document.querySelectorAll(".option-btn").forEach(btn => {
            btn.classList.remove("selected");
            if (btn.textContent === q.answer) btn.classList.add("correct");
            else if (btn.classList.contains("selected")) btn.classList.add("wrong");
            btn.disabled = true;
        });
    }

    document.getElementById("submitAnswer").classList.add("hidden");
    document.getElementById("nextQuestion").classList.remove("hidden");
}

// ---- NEXT QUESTION ----
function nextQuestion() {
    currentIndex++;
    selectedOptionText = null;
    showQuestion();
}

// ---- FINISH QUIZ ----
function finishQuiz() {
    quizFinished = true;
    const totalMarks = currentQuiz.reduce((sum, q) => sum + (q.marks || 1), 0);
    const score = totalMarks > 0 ? Math.round((scoreCount / totalMarks) * 100) : 0;

    const correctAnswersList = [];
    const wrongAnswersList = [];

    currentQuiz.forEach((q, i) => {
        const record = {
            questionId: q.id,
            topic: q.topic,
            page: q.page,
            question: q.question,
            correctAnswer: Array.isArray(q.answer) ? q.answer.join(", ") : q.answer,
            userAnswer: currentAnswers[i] ? (i < currentQuiz.length ? currentAnswers[i].userAnswer || "" : "") : "",
            answerCorrect: currentAnswers[i] ? currentAnswers[i].correct : false,
            explanation: q.explanation,
            lesson: q.lesson,
            videoPrompt: q.videoPrompt,
            marks: q.marks || 1
        };
        if (currentAnswers[i] && currentAnswers[i].correct) {
            correctAnswersList.push(record);
        } else {
            wrongAnswersList.push(record);
        }
    });

    const attempt = {
        id: "ATT-" + Date.now(),
        studentName: STUDENT_NAME,
        dateTime: new Date().toISOString(),
        subject: currentSubject || "Natural Science & Technology",
        type: currentTopicFilter !== "all" ? "retest" : "full",
        topicFilter: currentTopicFilter,
        score: score,
        totalMarks: totalMarks,
        earnedMarks: scoreCount,
        totalQuestions: currentQuiz.length,
        correctCount: correctAnswersList.length,
        correctAnswers: correctAnswersList,
        wrongAnswers: wrongAnswersList,
        weakTopics: detectWeakTopics(wrongAnswersList),
        recommendedLesson: generateRecommendation(wrongAnswersList),
        videoPrompt: generateVideoPrompt(wrongAnswersList)
    };

    // Save attempt and update badges
    saveAttempt(attempt);
    updateBadges(attempt);

    // Show results page
    showResults(attempt);
}

// ---- DETECT WEAK TOPICS ----
function detectWeakTopics(wrongAnswers) {
    const map = {};
    wrongAnswers.forEach(w => {
        map[w.topic] = (map[w.topic] || 0) + 1;
    });
    return Object.entries(map)
        .sort((a, b) => b[1] - a[1])
        .map(([topic, count]) => ({ topic, wrongCount: count }));
}

// ---- GENERATE RECOMMENDATION ----
function generateRecommendation(wrongAnswers) {
    if (wrongAnswers.length === 0) return {
            topic: "None",
            message: "Great job! Keep revising all topics.",
            page: "Review textbook",
            lesson: "Continue practicing and stay consistent!"
        };
    const worst = wrongAnswers[0].topic;
    const page = wrongAnswers[0].page;
    return {
        topic: worst,
        message: `Practice ${worst}. Focus on pages ${page}.`,
        page: page,
        lesson: `Review ${worst}. Read textbook pages ${page}. Do 5 practice questions.`
    };
}

// ---- GENERATE VIDEO PROMPT ----
function generateVideoPrompt(wrongAnswers) {
    if (wrongAnswers.length === 0) {
        return `Create a 2-minute Grade 5 recap video for Donna celebrating her success on this quiz. Praise her hard work and quickly review one or two key facts.`;
    }
    const worst = wrongAnswers[0];
    return `Create a 2-minute Grade 5 explanation video for Donna on ${worst.topic}. She struggled with "${wrongAnswers[0].question}". She answered "${wrongAnswers[0].userAnswer}" but the correct answer is "${wrongAnswers[0].correctAnswer}". Explain it simply using a short story or analogy, give real-life examples, and finish with 3 easy quiz questions she can answer. Make it friendly and encouraging for a Grade 5 student.`;
}

// ---- SHOW RESULTS ON RESULTS PAGE ----
function showResults(attempt) {
    // Navigate to results page with data via sessionStorage
    sessionStorage.setItem("donnaStudyBusterLatestResult", JSON.stringify(attempt));
    // Navigate without triggering beforeunload issues
    window.location.href = "results.html#latest";
}

// ---- RETEST WEAK TOPICS ----
function retestWeakTopics() {
    const weak = getWeakTopics(currentSubject || "Natural Science & Technology");
    if (weak.length === 0) {
        alert("Great job! No weak topics to retest! 🎉");
        return;
    }
    const topics = weak.map(w => w.topic);
    const questions = questionBank.filter(q =>
        q.subject === (currentSubject || "Natural Science & Technology") &&
        topics.includes(q.topic)
    );
    if (questions.length === 0) {
        alert("No questions found for weak topics. Try the full quiz instead.");
        return;
    }

    currentQuiz = shuffleArray([...questions]).slice(0, Math.min(10, questions.length));
    currentIndex = 0;
    currentAnswers = [];
    scoreCount = 0;
    quizFinished = false;
    currentTopicFilter = "retest";

    document.querySelector(".welcome-card").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");
    document.getElementById("topicFilter").value = "all";
    document.getElementById("topicFilter").disabled = true;

    showQuestion();
}

// ---- EVENT LISTENERS ----
function setupEventListeners() {
    const topicFilter = document.getElementById("topicFilter");
    if (topicFilter) {
        topicFilter.addEventListener("change", (e) => {
            startSubjectQuiz(e.target.value);
        });
    }

    const submitBtn = document.getElementById("submitAnswer");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            if (!quizFinished) submitAnswer();
        });
    }

    const typedInput = document.getElementById("typedAnswer");
    if (typedInput) {
        typedInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !quizFinished) {
                submitAnswer();
            }
        });
    }

    const nextBtn = document.getElementById("nextQuestion");
    if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
    }
}

function renderHomeBadges() {
    renderBadges("homeBadges");
}

// ---- UTILITY: SHUFFLE ARRAY ----
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialise when page loads
document.addEventListener("DOMContentLoaded", init);
