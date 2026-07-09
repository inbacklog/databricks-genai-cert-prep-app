# Databricks GenAI Certification Prep App

Browser-based practice app for Databricks Certified Generative AI Engineer Associate preparation.

## What is included

Version: **4.7 logic polish**.

- **268 total questions**.
- Origin labels:
  - **Official guide sample**: sample-style questions from the Databricks exam guide.
  - **Generated practice**: original scenario-based practice questions aligned to Databricks exam objectives and docs.
  - **User imported**: questions imported from the user's `Question.docx` file.
- Per-option explanations: every answer explains what the option means, why it is correct or incorrect, and includes a quick example.
- Source / verify links on every question.
- Deck-based randomization: every filtered question appears once before reshuffle.
- Answer-choice shuffling per browser session.
- **Start / restart selected mode** button to start the selected mode cleanly with current filters and exam length.
- **Hide this question for this session** button in study/review modes.
- **Mark for review** and review modes for marked, mistaken, or reported questions.
- **Exam mode** with either 45 questions or a custom number of questions.
- Performance by exam section and topic/tag, stored locally in your browser.
- Reset controls for current mode restart, performance-only reset, and full local stats reset.

## Run locally

Open `index.html` in a browser. On Windows you can also double-click `run_app.bat`.

## GitHub Pages

This app can be hosted with GitHub Pages.

1. Go to Settings → Pages.
2. Set Source to `Deploy from a branch`.
3. Select branch `main`.
4. Select folder `/root`.
5. Click Save.

After a few minutes, GitHub provides a public URL for the app.

## Important note about user-imported questions

This version includes questions imported from `Question.docx`. If you push this version to a public GitHub repo, those user-imported questions will also be public. Use this version publicly only if you are comfortable publishing that content.

## Controls explained

- **Start / restart selected mode**: starts the selected mode again using the current filters and exam length. It clears the active round/exam state and session-hidden questions, but keeps mistakes, performance, marked questions, reported issues, and imports.
- **Clear saved progress**: clears the current saved round/exam state, mistakes, performance stats, and session-hidden questions. Marked/reported questions remain.
- **Reset performance stats**: clears only the Performance by category table.
- **Reset all stats**: clears mistakes, marked review, reported issues, performance stats, saved round/exam state, and session-hidden questions. Imported question packs are kept.
- **Exam questions**: used only by **Exam mode — custom length**.

## Exam mode behavior

Exam mode is intentionally strict and sequential:

- You must submit the current question before moving forward.
- The app automatically advances after submission.
- There is no previous/back button during the exam.
- You cannot hide questions during exam mode.
- You can mark a question for post-exam review, but you cannot return to it during the same exam attempt.
- Feedback and explanations are shown only after the exam through review modes.

## Study guidance

The app is a study aid, not a guarantee of passing. Verify important details against the latest Databricks exam guide and official docs before the exam. Databricks product names and features change, so check the guide again close to your exam date.

## v4.8 logic polish

- Renamed the confusing round button to **Start / restart selected mode**.
- Fixed the custom exam restart path so changing mode or exam length starts cleanly.
- Disabled **Hide this question** in exam mode to avoid accidental exam skipping.
- Clarified reset controls and exam-mode behavior.


## v4.8 UX updates

- Difficulty filter now supports selecting one or more of Easy, Medium, and Hard.
- Changing mode/filters/search no longer auto-starts or scrolls to a question.
- Questions are hidden until the user clicks **Start / restart selected mode**.
- Exam-result messages are tiered by score: Strong exam attempt, Almost ready, Needs targeted review, or Restart with fundamentals.
