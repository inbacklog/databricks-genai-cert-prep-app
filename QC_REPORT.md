# QC Report — v5.6 source/QC pass

This version keeps the v5.5 question set and performs a final cleanup pass before user review.

## Counts

- Total questions: 325
- Generated practice: 224
- User imported: 91
- Official guide sample: 10

## Difficulty distribution

- Easy: 22
- Medium: 259
- Hard: 44

## Fixes made in v5.6

- Rechecked the bank against the uploaded Databricks exam guide, official Databricks docs, and the uploaded Big Book of GenAI.
- Replaced old Vector Search source links with current AI Search source links where applicable.
- Replaced local/uploaded Big Book placeholder links with the official Databricks Big Book of Generative AI resource URL.
- Removed remaining generic boilerplate phrases from option explanations, especially in user-imported explanations.
- Fixed all remaining option explanations missing a quick example.
- Updated source links for selected user-imported questions where the previous source links were too broad or not directly relevant.
- Added an **Unhide session-hidden** button so an accidentally hidden question can be restored without resetting all stats.

## Automated checks

- Option explanations missing `Example:`: 0
- Non-HTTP source links: 0
- Duplicate per-option explanations within a question: 0
- Remaining generic boilerplate phrase hits: 0
- Generated/official answer choices starting with `Only`: 0

## Notes

- `User imported` questions are preserved as user-provided practice material. The known corrected answer for the multi-step agent debugging question remains MLflow tracing.
- The app still avoids copying paid/exam-dump content verbatim. New/source-grounded questions are original practice questions based on official/public learning materials.
- Public deployment note: this package includes `User imported` questions. Pushing it to a public GitHub repository makes those questions public.
