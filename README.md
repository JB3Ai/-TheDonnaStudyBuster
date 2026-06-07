# The Donna Study Buster!

**Quiz. Learn. Fix the gaps. Collect the badges.**

A local Grade 5 study web app for Natural Science & Technology, Mathematics, Social Sciences, Life Skills, and more. Works entirely offline. No backend, no database.

---

## How to Run

### On this computer
1. Open a terminal / command prompt.
2. Go to the project folder:
   ```bash
   cd "C:\Apps in Dev Visual Code Folder\donna-nst-quiz"
   ```
3. Start a local web server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### On another device on the same Wi-Fi (iPad, phone, etc.)
1. Find this computer's local IP address.
   - On Windows, run: `ipconfig`
   - Look for the IPv4 Address (for example `192.168.1.45`)
2. Start the server (see above).
3. On the other device, open a browser and type:
   ```
   http://192.168.1.45:8000
   ```
   (Use YOUR computer's actual IP address.)
4. Make sure both devices are connected to the **same Wi-Fi network**.

---

## Pages

| Page | Link |
|------|------|
| Home | `index.html` |
| Lessons | `lessons.html` |
| Results | `results.html` |
| Exam Calendar | `calendar.html` |
| Study Tools | `resources.html` |

---

## Tech Stack

- Plain HTML
- Plain CSS
- Plain JavaScript (vanilla)
- No frameworks
- No backend
- localStorage for all saving

---

## Storage Keys

- `donnaStudyBusterAttempts` - quiz history
- `donnaStudyBusterBadges` - unlocked badges
- `donnaStudyBusterSettings` - app preferences

---

## How to Add More Questions

Open `js/questions.js` and copy an existing question block. Change the values:

```js
{
    id: "NST-Q200",
    subject: "Natural Science & Technology",
    topic: "New Topic",
    page: "100-105",
    type: "mcq",        // or "typed"
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],  // use [] for typed
    answer: "Correct answer",
    explanation: "Simple Grade 5 explanation.",
    lesson: "Short lesson summary.",
    videoPrompt: "Prompt for a mini video about this topic."
}
```

Adding new questions automatically creates new subject tabs on all pages.

---

## Features

- Subject tabs for all loaded subjects
- Multiple choice and typed-answer questions
- Auto-marking with instant feedback
- Badge collection system
- Exam calendar with countdown
- Study resource library
- Gap analysis after every quiz
- Retest weak topics only
- Export as JSON or TXT
- Copy report for ChatGPT
- Mobile / iPad friendly

---

Enjoy studying!
