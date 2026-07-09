# Databricks GenAI Certification Prep App

Browser-based practice app for Databricks Certified Generative AI Engineer Associate preparation.

## What is included

Version: **4.6 custom exam and reset controls**.

- **268 total questions**.
- Origin labels:
  - **Official guide sample**: sample-style questions from the Databricks exam guide.
  - **Generated practice**: original scenario-based practice questions aligned to Databricks exam objectives and docs.
  - **User imported**: questions imported from the user's `Question.docx` file.
- Per-option explanations: every answer explains what the option means, why it is correct or incorrect, and includes a quick example.
- Source / verify links on every question.
- Deck-based randomization: every filtered question appears once before reshuffle.
- Answer-choice shuffling per browser session.
- **Hide this question for this session** button.
- **Mark for review** and review modes for marked, mistaken, or reported questions.
- **Exam mode** with either 45 questions or a custom number of questions.
- Performance by exam section and topic/tag, stored locally in your browser.
- Reset controls for round-only reshuffle, performance-only reset, and full local stats reset.

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

- **Reshuffle current round**: rebuilds only the current filtered question deck. It does not clear mistakes, marked questions, reported issues, or performance stats.
- **Clear saved progress**: clears the current saved round/exam state, mistakes, and performance stats. Marked/reported questions remain.
- **Reset performance stats**: clears only the Performance by category table.
- **Reset all stats**: clears mistakes, marked review, reported issues, performance stats, saved round/exam state, and session-hidden questions. Imported question packs are kept.
- **Exam questions**: used only by **Exam mode — custom length**.

## Study guidance

The app is a study aid, not a guarantee of passing. Verify important details against the latest Databricks exam guide and official docs before the exam. Databricks product names and features change, so check the guide again close to your exam date.
