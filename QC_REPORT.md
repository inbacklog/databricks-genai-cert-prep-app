# QC report — v4.8

## Scope

- Total questions: 268
- Official guide sample: 10
- Generated practice: 167
- User imported: 91

## Content checks retained

- Per-option explanations are present.
- Every question has source/verify links.
- User-imported questions are labelled as **User imported**.
- Answer options shuffle per browser session.
- Exam mode and review tools are available.

## Logic checks reviewed

- Changing mode or custom exam question count starts a fresh round/exam and does not trigger the old submit-first alert.
- **Start / restart selected mode** clears only active round/exam state and session-hidden questions, not long-term performance or review stats.
- **Reset all stats** clears mistakes, marked review, reported issues, performance stats, saved round/exam state, and session-hidden questions.
- **Show answer** remains disabled in exam mode.
- **Hide this question** is disabled in exam mode so the user cannot skip an exam question.
- Exam mode is sequential: answer current question → auto-advance → no back button during the exam.

## Known design decision

The app does not currently support returning to earlier exam questions during the same exam attempt. Marked questions are available for review after the exam. This is stricter than some exam UIs, but it keeps the simulation simple and prevents accidental answer leakage before scoring.

## Public note

This version includes user-imported questions from `Question.docx`. Publishing this version makes those questions public.


## v4.8 logic check

- No question is rendered on initial page load.
- Changing settings updates availability/stats but does not start a round.
- Difficulty filtering supports multi-select values: Easy, Medium, Hard.
- Exam mode remains sequential: answer current question, submit, auto-advance; no back/skip/revisit during the attempt.
