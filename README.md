# Databricks GenAI Cert Prep App — v5.13

Browser-based practice app for the Databricks Certified Generative AI Engineer Associate exam.

## v5.13 quality pass

This release focuses on difficulty accuracy and realistic exam-style distractors.

- Reclassified all 58 questions that were labelled `Hard` in v5.12.
- Retained 12 genuinely hard questions and changed 46 to `Medium`.
- Rewrote 57 `Generated practice` questions with distractors that were previously implausible, unrelated, or too easy to eliminate.
- Added a written difficulty rubric to `QC_REPORT.md`.
- Preserved all 91 `User imported` questions exactly as they were in v5.12.
- Preserved official-guide question wording and answer choices; only difficulty labels were adjusted where needed.

## Current bank

- Total questions: **339**
- Easy: **22**
- Medium: **305**
- Hard: **12**
- Generated practice: **238**
- Official guide sample: **10**
- User imported: **91**

The Hard label is now reserved for questions involving multiple interacting constraints, realistic competing architectures, or nuanced Databricks-specific trade-offs. An advanced topic alone is not enough for a Hard label.

## Features

- Answer-choice shuffling
- Study mode with immediate explanations
- Strict Exam mode with fixed or custom length
- Previous question in Study mode
- Mark for review and report issue
- Hide/unhide questions for the current session
- Performance tracking by section and tag
- Buy Me a Coffee and Bitcoin Lightning support options
- Mobile-responsive browser layout

## Important content note

This app is an unofficial study tool and is not affiliated with Databricks.

This package includes user-imported practice questions. Publishing the repository makes those questions public.

## Run locally

Open `index.html` in a browser, or on Windows double-click:

```bat
run_app.bat
```

No backend server is required.

## GitHub Pages

This static app can be hosted with GitHub Pages:

```text
Settings → Pages → Deploy from a branch → main → /root
```

## Suggested study workflow

1. Click `Start / restart selected mode`.
2. Use Study mode for immediate feedback.
3. Mark uncertain questions for review.
4. Run a 45-question Exam mode simulation.
5. Review mistakes and category performance.
6. Verify surprising answers against the official Databricks exam guide and documentation.

## Files

- `index.html` — browser application
- `question_bank.json` — question data
- `question_bank.js` — static browser-loaded question data
- `QC_REPORT.md` — difficulty and quality-control report
- `private_question_pack_template.json` — optional local import template
- `assets/` — icon and support QR images
- `run_app.bat` — Windows launcher

## Updating the public repository

Copy and replace the files inside your local repository, then run:

```bash
git status
git add .
git commit -m "Recalibrate difficulty and improve distractors"
git push
```

After GitHub Pages deploys, open the site with a cache-busting query once:

```text
https://inbacklog.github.io/databricks-genai-cert-prep-app/?v=513
```
