# Safari Academy | Grade 12 EUEE Question Bank & Portal

Official Grade 12 Ethiopian University Entrance Examination (EUEE) revision and mock exam platform built specifically for Safari Academy students and faculty. 

> **"Your Kids Our Kids" • "ልጆቻችሁ ልጆቻችን ናቸው!"**

---

## 🚀 About the Project
The Safari Academy Question Bank is a school-owned, open-source revision platform designed to solve the scarcity of organized, curriculum-specific practice materials. It provides students with lightweight, mobile-optimized access to hundreds of EUEE-standard questions, timed mock exams, instant scoring, and detailed explanations.

---

## ✨ Key Features

* **Curriculum & Stream Alignment:** Supports both Natural Science and Social Science streams with tailored subject pools (Mathematics, Physics, Chemistry, Biology, English, Aptitude, Geography, History, and Economics).
* **Mock Exam Engine:** 
  * Full exams scored out of 600 (matching national grading weights).
  * Single-subject tests scored out of 100.
  * Option to practice shuffled mixes from all years or target specific entrance exam years.
  * Built-in countdown timers with automated section transitions and 10-minute breaks.
* **Monthly Passcode Security:** Uses PBKDF2-hashed monthly access codes to ensure secure, authorized student access.
* **Instant Feedback & Analytics:** Post-exam reviews highlighting correct/incorrect answers, step-by-step explanations, and a breakdown of weak topics requiring further study.
* **Local Data Persistence & Scoreboards:** Tracks personal performance history and scores locally on user devices.
* **Admin & Teacher Tools:** Dedicated portal for teachers and administrators to add, review, edit questions, and export updated question banks via `questions.json`.
* **20th Anniversary Wall:** A dedicated commemorative space celebrating two decades of Safari Academy history with an interactive message board.

---

## 🛠️ Tech Stack & Architecture
* **Frontend:** Single-file architecture (`index.html`) utilizing **Tailwind CSS** (via CDN) for responsive styling and dark mode support, with **Lucide Icons**.
* **State Management & Storage:** Vanilla JavaScript leveraging browser `localStorage` and `sessionStorage` for secure session tracking, user scores, and dynamic view routing.
* **Security:** Cryptographic PBKDF2 hashing for secure administrative and monthly passcode verification.

---

## 👥 Project Contributors & Maintainers

* **Lead Developer & Maintainer:** eyuel-seifu (Grade 11DpN) — *Self-taught web developer and AI enthusiast responsible for system architecture, frontend implementation, and deployment.*
* **Safari Academy Faculty & Administration:** *Providing curriculum alignment, question review, academic oversight, and student testing support.*

---

## 🚀 Getting Started & Local Development

1. Clone the repository:
   ```bash
   git clone [https://github.com/eyuel-seifu/safari-academy-question-bank.git](https://github.com/eyuel-seifu/safari-academy-question-bank.git)
