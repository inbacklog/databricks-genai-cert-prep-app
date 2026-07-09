# Databricks GenAI Certification Prep App

Browser-based practice app for Databricks Certified Generative AI Engineer Associate preparation.

## What is included

Version: **4.4 reviewed with session hide**.

- **268 total questions**.
- Origin labels:
  - **Official guide sample**: sample-style questions from the uploaded Databricks exam guide.
  - **Generated practice**: original scenario-based practice questions aligned to Databricks exam objectives and docs.
  - **User imported**: questions imported from the user's `Question.docx` file.
- Per-option explanations: every answer explains what the option means, why it is correct or incorrect, and includes a quick example.
- Source / verify links on every question, pointing to official Databricks documentation or relevant reference resources where possible.
- Deck-based randomization: every filtered question appears once before reshuffle.
- **Hide this question for this session** button: hides the current question until the browser tab/session is closed.
- 45-question mock exam mode.
- Mistake review mode.
- Performance by exam section and topic/tag, stored locally in your browser.

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

## v4.4 quality note

This version specifically rechecks the `User imported` questions and removes repeated/generic explanations. The explanations now discuss each option separately. One user-imported answer key was corrected: `USER_IMPORTED_085` now uses MLflow tracing as the correct answer because that matches current Databricks GenAI observability practice better than generic structured logging.

## Study guidance

The app is a study aid, not a guarantee of passing. Verify important details against the latest Databricks exam guide and official docs before the exam. Databricks product names and features change, so check the guide again close to your exam date.
