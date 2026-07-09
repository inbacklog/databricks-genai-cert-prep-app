# QC Report – v4.4

## Scope

- Started from v4.3.1 with user-imported questions.
- Reviewed all user-imported questions for repeated/generic explanations.
- Rebuilt per-option explanations so each answer explains what the option means, why it is correct/incorrect, and gives a quick example.
- Added source/verify links to every question.
- Added a per-session **Hide this question** action in the UI.
- Corrected `USER_IMPORTED_085` from structured logging to MLflow tracing based on current Databricks GenAI observability/tracing practice.

## Counts

- Total questions: 268
- User imported questions: 91
- Missing per-option explanations: 0
- Duplicate per-option explanations in a question: 0
- Options with old generic phrases: 0
- Questions missing source/verify links: 0

## UI additions

- Added **Hide this question for this session**. The question is removed from the active deck until the tab/session is closed.
- Hidden count is shown in the top stats.

## Notes

- Some user-imported questions are retained because the user requested inclusion, but explanations now call out limitations where an option is only the best choice among the provided answers.
- Review whether user-imported workshop content should be public before pushing this version to GitHub.


## v4.5 feature quality update

Implemented requested exam-prep workflow enhancements:

- Answer choices are shuffled per question per browser session and displayed with fresh A/B/C/D labels.
- Correctness is still evaluated by internal option IDs, so shuffling does not change the answer key.
- Added Mark for review and Review marked questions mode.
- Added 45-question Exam mode with feedback hidden until the end.
- Added Report issue and Review reported issues mode, plus export to JSON.
- Added readiness labels to category performance stats.

Not implemented by request:

- Confidence buttons.
- Hide-reason prompts.
