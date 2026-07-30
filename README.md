# Databricks GenAI Cert Prep App — v5.12

## v5.12 additions

Adds 14 difficult, scenario-based questions for underrepresented objectives in the March 2026 exam guide. The new set focuses on:

- AI Search Delta Sync versus Direct Vector Access
- Change Data Feed only where it directly supports standard AI Search endpoint synchronization
- standard versus storage-optimized endpoint and sync-mode tradeoffs
- stable chunk primary keys and selective metadata synchronization
- MLflow Prompt Registry versions, aliases, promotion, and rollback
- Unity AI Gateway usage tracking versus inference tables
- Databricks Apps user authorization versus app authorization
- managed/external/custom MCP architecture
- resilient large-scale `ai_query()` batch inference
- Supervisor Agent orchestration and downstream permissions

Existing User imported questions and answer keys were not modified in this release.

Browser-based practice app for the Databricks Certified Generative AI Engineer Associate exam.

## v5.11 notes

This version repairs incomplete imported questions, removes repeated generic examples, expands structural QC, and adds an optional Wallet of Satoshi support widget.


- Removed repetitive examples that restated the option and explanation.
- Removed literal truncation artifacts from explanations.
- Repaired mismatched explanations in several user-imported questions, including prompt chaining, Inference Tables, chunk preparation, and metadata filtering.

- Total questions: 325
- Origin labels: `Generated practice`, `Official guide sample`, `User imported`
- Multi-select questions included where the scenario naturally requires more than one action
- Answer-choice shuffling enabled
- Study mode and strict Exam mode
- Custom exam length
- Previous question in Study mode
- Mark for review, Report issue, Hide for session
- `Unhide session-hidden` button
- Compact bottom-right coffee button with Buy Me a Coffee and Bitcoin Lightning options
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
git commit -m "Re-audit user imported questions"
git push
```

Then open your GitHub Pages URL with a cache buster, for example:

```text
https://inbacklog.github.io/databricks-genai-cert-prep-app/?v=5111
```



## Question quality and sources

The 91 `User imported` questions were re-audited against the March 2026 official exam guide and current Databricks documentation. Twenty-nine ambiguous, stale, incomplete, or incorrect items were corrected or reframed while retaining the original learning objective and `User imported` origin label.