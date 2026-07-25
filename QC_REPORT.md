# QC Report — v5.7 incomplete-context and explanation pass

## Counts

- Total questions: 325
- Generated practice: 224
- User imported: 91
- Official guide sample: 10
- Difficulty: Easy 22, Medium 259, Hard 44

## Repairs in v5.7

- Repaired `USER_IMPORTED_030`, whose imported source said “following error” but omitted the actual error. The question now supplies an explicit **input-context-length overflow** while preserving the intended two answers (smaller chunks and fewer retrieved chunks). The uploaded source confirms the original text omitted the error itself.
- Repaired three other imported questions that depended on missing material:
  - `USER_IMPORTED_023`: added the preceding VectorSearchClient setup.
  - `USER_IMPORTED_040`: removed the unavailable “diagram above” dependency.
  - `USER_IMPORTED_080`: added the missing `PromptTemplate` code.
  - `USER_IMPORTED_086`: added the missing agent prompt-variable configuration.
- Replaced 197 copied generic examples with option-specific examples derived from the actual answer choice and explanation.
- Removed 12 instances of generic NOT-question boilerplate.
- Corrected small wording/typing issues without changing answer keys.
- Added a compact bottom-right **Buy me a coffee** widget using the supplied Wallet of Satoshi Lightning address and QR code. The QR crop was decoded successfully before packaging.

- Replaced 58 generic main-question summaries with concept-specific summaries derived from the correct option explanations.
- Rewrote four remaining generic distractor explanations manually.

## Automated structural checks

- Missing visual/code/error references after repairs: 0
- Missing per-option `Example:` blocks: 0
- Duplicate option explanations within the same question: 0
- Fixed answer-letter references incompatible with shuffled options: 0
- Multi-select wording/key inconsistencies: 0
- Example texts repeated 4+ times after cleanup: 0

## Source notes

- Current Databricks documentation uses **Databricks AI Search** for the product formerly called Databricks Vector Search. Imported and official-guide questions may retain the older wording where it is part of the source material; explanations and links use current terminology where practical.
- User-imported questions remain labelled `User imported`. Their wording is kept where possible, but missing screenshots/code/configuration were reconstructed as explicit, self-contained scenarios so the questions can be answered in the browser.
- This automated scan checks structure, answer-key consistency, missing context markers, repeated explanations, and shuffle-safe wording. It does not claim that every third-party imported answer is an official Databricks exam answer; source links remain available for verification.
