# Databricks GenAI Certification Prep App

A simple, static browser-based study app for Databricks Certified Generative AI Engineer Associate preparation.

## What it does

- Shows one multiple-choice / multiple-select question at a time.
- Lets you submit an answer and immediately see whether it was correct.
- Shows explanations for every answer option, not only the correct one.
- Tracks mistakes and performance by category/topic in browser local storage.
- Uses deck-based randomization: each filtered question appears once before reshuffle.
- Runs locally or from GitHub Pages.

## What is included in this public version

This public version includes public-safe practice questions only:

- official-guide sample-style questions
- generated practice questions aligned to the exam guide topics
- source/verification links where available

Do not commit private/internal workshop packs, paid course material, or real/proctored exam dumps to a public repository.

## Run locally

Option 1, easiest:

1. Download or clone this repository.
2. Open `index.html` in your browser.

Option 2, Windows helper:

1. Double-click `run_app.bat`.
2. Your default browser should open the app.

The app is static. It does not require Python, Node.js, npm, a backend server, or Databricks credentials.

## Upload to a public GitHub repository

### A. Create the repository on GitHub

1. Go to GitHub.
2. Click **New repository**.
3. Choose a repository name, for example `databricks-genai-cert-prep`.
4. Set visibility to **Public**.
5. Do not add a README from GitHub if this folder already has one.
6. Create the repository.

### B. Push the files with Git

Open Git Bash, PowerShell, or Windows Terminal inside the unzipped app folder and run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Databricks GenAI cert prep app"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace:

```text
YOUR_USERNAME = your GitHub username
YOUR_REPO_NAME = your repository name
```

### C. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/root**.
6. Save.
7. Wait a minute or two.
8. GitHub will show a public Pages URL.

The app entry point is `index.html`, so it should work directly from GitHub Pages.

## Import private questions locally

The public repo includes a private import UI. Imported files are stored only in your browser local storage and are not written into the repository.

Expected JSON format:

```json
{
  "questions": [
    {
      "id": "MY_Q001",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": ["rag", "chunking"],
      "origin_type": "Private local import",
      "origin_label": "My private notes",
      "question": "Question text here",
      "options": [
        {"id": "A", "text": "Option A", "explanation": "Why A is correct/incorrect."},
        {"id": "B", "text": "Option B", "explanation": "Why B is correct/incorrect."}
      ],
      "correct_answers": ["A"],
      "explanation": "Overall explanation here.",
      "source_links": []
    }
  ]
}
```

## Files

- `index.html` — the full browser app.
- `question_bank.js` — public-safe question bank loaded by the app.
- `question_bank.json` — same questions in JSON format for easier editing.
- `assets/dbx-prep-icon.svg` — simple study icon.
- `private_question_pack_template.json` — template for local private imports.
- `run_app.bat` — Windows helper.

## Notes

This is an unofficial study tool. Verify surprising answers against the official Databricks exam guide and official Databricks documentation before relying on them.
