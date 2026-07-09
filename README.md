# Databricks GenAI Certification Prep App

Browser-based practice app for the Databricks Certified Generative AI Engineer Associate exam.

## v5.6 notes

This version performs a source/QC cleanup pass on top of v5.5.

- Total questions: 325
- Origin labels: `Generated practice`, `Official guide sample`, `User imported`
- Multi-select questions included where the scenario naturally requires more than one action
- Answer-choice shuffling enabled
- Study mode and strict Exam mode
- Custom exam length
- Previous question in Study mode
- Mark for review, Report issue, Hide for session
- New: `Unhide session-hidden` button
- Performance tracking by section/tag

## Important content note

This app is an unofficial study tool. It is not affiliated with Databricks.

This package includes user-imported practice questions. If you publish this repository publicly, those questions become public too.

## Run locally

Open `index.html` in a browser, or on Windows double-click:

```bat
run_app.bat
```

No backend server is required.

## GitHub Pages

This static app can be hosted with GitHub Pages.

Repository maintainers can enable Pages from:

```text
Settings → Pages → Deploy from a branch → main → /root
```

After deployment, open the generated GitHub Pages URL.

## Study workflow

1. Click `Start / restart selected mode`.
2. Use Study mode for immediate feedback.
3. Use Exam mode for fixed/custom-length simulations.
4. Use `Review mistakes`, `Review marked questions`, and `Review reported issues`.
5. Check `Performance by category` to see weak areas.
6. Verify surprising answers against the official Databricks exam guide and docs.

## Files

- `index.html` — browser app
- `question_bank.json` — question data
- `question_bank.js` — same data for static loading
- `QC_REPORT.md` — quality-control summary
- `private_question_pack_template.json` — optional import template
- `assets/dbx-prep-icon.svg` — simple app icon
- `run_app.bat` — Windows local launcher

## Updating the public repo

Copy/replace the files into your local repo folder, then run:

```bash
git status
git add .
git commit -m "Source and QC cleanup pass"
git push
```

Then open your GitHub Pages URL with a cache buster, for example:

```text
https://inbacklog.github.io/databricks-genai-cert-prep-app/?v=56
```
