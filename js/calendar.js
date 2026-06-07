// THE DONNA STUDY BUSTER - EXAM CALENDAR
// Fixed June 2026 exam schedule - NOT editable
// Source: Uploaded Grade 5 exam schedule (June 2026)

const examCalendar = [
  { date: "2026-06-01", day: "Monday", subject: "Coding & Robotics Theory", priority: "High" },
  { date: "2026-06-01", day: "Monday", subject: "isiZulu Test", priority: "Medium" },
  { date: "2026-06-02", day: "Tuesday", subject: "Social Science History", priority: "High" },
  { date: "2026-06-03", day: "Wednesday", subject: "Afrikaans Creative Writing", priority: "Medium" },
  { date: "2026-06-04", day: "Thursday", subject: "English Creative Writing", priority: "Medium" },
  { date: "2026-06-05", day: "Friday", subject: "Math Paper 1 & Paper 2", priority: "Very High" },
  { date: "2026-06-08", day: "Monday", subject: "Natural Science & Technology", priority: "Very High" },
  { date: "2026-06-09", day: "Tuesday", subject: "English Language", priority: "High" },
  { date: "2026-06-10", day: "Wednesday", subject: "Afrikaans Language", priority: "High" },
  { date: "2026-06-11", day: "Thursday", subject: "Social Science Geography", priority: "High" },
  { date: "2026-06-12", day: "Friday", subject: "Life Skills", priority: "Medium" },
  { date: "2026-06-15", day: "Monday", subject: "School Holiday", priority: "None" },
  { date: "2026-06-16", day: "Tuesday", subject: "Youth Day Public Holiday", priority: "None" },
  { date: "2026-06-17", day: "Wednesday", subject: "Coding & Robotics Practical", priority: "High" },
  { date: "2026-06-18", day: "Thursday", subject: "Exam Feedback Day", priority: "None" },
  { date: "2026-06-19", day: "Friday", subject: "Exam Feedback Day", priority: "None" },
  { date: "2026-06-22", day: "Monday", subject: "Exam Feedback Day", priority: "None" },
  { date: "2026-06-23", day: "Tuesday", subject: "Term 3 Work", priority: "None" },
  { date: "2026-06-24", day: "Wednesday", subject: "Term 3 Work", priority: "None" },
  { date: "2026-06-25", day: "Thursday", subject: "Term 3 Work", priority: "None" },
  { date: "2026-06-26", day: "Friday", subject: "School Closes", priority: "None" }
];

function renderCalendar() {
    const grid = document.getElementById("calendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    examCalendar.forEach(exam => {
        const dateObj = new Date(exam.date + "T00:00:00");
        const dayNum = dateObj.getDate();
        const month = dateObj.toLocaleDateString("en-ZA", { month: "short" });
        const priorityClass = getPriorityClass(exam.priority);
        const isStudyDay = exam.priority !== "None";

        const card = document.createElement("div");
        card.className = "calendar-card fade-in" + (isStudyDay ? "" : " non-study");
        card.innerHTML = `
            <div class="calendar-date">
                <div class="day">${exam.day}</div>
                <div class="date">${dayNum}</div>
                <div class="month">${month}</div>
            </div>
            <div class="calendar-details">
                <h3>${exam.subject}</h3>
                <span class="priority-badge ${priorityClass}">${exam.priority}</span>
                <div class="study-status">${getStudyStatus(exam)}</div>
            </div>
        `;
        grid.appendChild(card);
    });

    updateCountdown();
}

function getPriorityClass(priority) {
    switch (priority) {
        case "Very High": return "priority-very-high";
        case "High": return "priority-high";
        case "Medium": return "priority-medium";
        default: return "priority-none";
    }
}

function getStudyStatus(exam) {
    if (exam.priority === "None") return "📅 No study needed";
    const now = new Date();
    const examDate = new Date(exam.date + "T00:00:00");
    const diffDays = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "✅ Exam passed";
    if (diffDays === 0) return "🔥 Exam TODAY!";
    if (diffDays === 1) return "⏰ Exam tomorrow!";
    return `📖 ${diffDays} days to study`;
}

function updateCountdown() {
    const now = new Date();
    const upcoming = examCalendar
        .map(e => ({ ...e, parsed: new Date(e.date + "T00:00:00") }))
        .filter(e => e.parsed >= now)
        .sort((a, b) => a.parsed - b.parsed);

    if (upcoming.length > 0) {
        const next = upcoming[0];
        const diff = Math.ceil((next.parsed - now) / (1000 * 60 * 60 * 24));
        document.getElementById("countdownBanner").classList.remove("hidden");
        document.getElementById("nextExamSubject").textContent = `Next exam: ${next.subject} -`;
        document.getElementById("countdownDays").textContent = diff;
        document.getElementById("countdownLabel").textContent = diff === 1 ? "day until exam" : "days until exam";
    }
}

function startSubjectQuizForSubject(subject) {
    localStorage.setItem("donnaStudyBusterSelectedSubject", subject);
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", renderCalendar);
