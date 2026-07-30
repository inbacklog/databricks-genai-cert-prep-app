# QC Report - v5.11.1

## Scope

- Total questions: 325
- User-imported questions reviewed: 91
- User-imported questions corrected or materially reframed: 29
- User-imported questions retained after review: 62

The review used the official March 2026 Databricks Certified Generative AI Engineer Associate exam guide and current official Databricks documentation for AI Search, MLflow GenAI, Model Serving, AI Gateway, authentication, Unity Catalog model lifecycle, Genie/structured retrieval, and Agent Framework.

## Corrected or reframed user-imported questions

USER_IMPORTED_012, USER_IMPORTED_017, USER_IMPORTED_016, USER_IMPORTED_021, USER_IMPORTED_024, USER_IMPORTED_025, USER_IMPORTED_028, USER_IMPORTED_029, USER_IMPORTED_031, USER_IMPORTED_032, USER_IMPORTED_036, USER_IMPORTED_039, USER_IMPORTED_041, USER_IMPORTED_044, USER_IMPORTED_047, USER_IMPORTED_048, USER_IMPORTED_059, USER_IMPORTED_060, USER_IMPORTED_063, USER_IMPORTED_064, USER_IMPORTED_067, USER_IMPORTED_081, USER_IMPORTED_082, USER_IMPORTED_084, USER_IMPORTED_086, USER_IMPORTED_087, USER_IMPORTED_088, USER_IMPORTED_089, USER_IMPORTED_091

## Notable corrections

- `USER_IMPORTED_017` and `USER_IMPORTED_060`: removed references to missing sample-email text while preserving the structured-output learning objective.
- `USER_IMPORTED_021`: changed the ambiguous answer key and wording so retrieval evaluation is explicitly the first step before changing search configuration.
- `USER_IMPORTED_028`: replaced an incorrect “accuracy and relevance” safety answer with harmful-content safety evaluation.
- `USER_IMPORTED_031`: removed multiple simultaneously-invalid distractors and separated latency/capacity from relevance techniques.
- `USER_IMPORTED_032`: changed the answer from prompt-only filtering to upstream corpus cleaning before indexing.
- `USER_IMPORTED_047`: replaced raw cosine-score comparison with labeled retrieval metrics such as recall@k or NDCG.
- `USER_IMPORTED_059`: updated the safety control to Databricks AI Gateway guardrails/service policies.
- `USER_IMPORTED_064`: changed embedding selection to in-domain retrieval benchmarking rather than a single leaderboard or domain claim.
- `USER_IMPORTED_067`: updated structured-data access to a governed Genie Agent/SQL tool pattern.
- `USER_IMPORTED_084`: corrected the legal-document chunking strategy to structure-aware chunks with temporal metadata.
- `USER_IMPORTED_087`: updated the LangGraph/ReAct construction sequence.
- `USER_IMPORTED_089`: replaced weak model-inversion mitigations with governed access, rate limiting/budgets, and monitoring.
- `USER_IMPORTED_091`: updated ChatAgent-era wording to ResponsesAgent-compatible deployment and clarified default operational metrics versus configured quality scorers.

## Automated integrity checks

- All correct-answer IDs exist in their option sets.
- Every user-imported option has a non-empty explanation.
- No correct option explanation starts with “Incorrect.”
- No incorrect option explanation starts with “Correct.”
- Multi-select answer counts match multi-select wording.
- Fixed answer letters are not referenced inside explanations.

## Important limitation

These are practice questions, not guaranteed live exam items. Product behavior and exam objectives can change, so users should verify time-sensitive details against the official Databricks exam guide and documentation shortly before the exam.
