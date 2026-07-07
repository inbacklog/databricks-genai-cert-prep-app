window.QUESTION_BANK = {
  "meta": {
    "title": "Unofficial Databricks Generative AI Engineer Associate Prep App",
    "version": "v3.5",
    "generated_at": "2026-07-07",
    "question_count": 310,
    "public_git_ready": true,
    "copyright_note": "Question bank contains original generated questions and public Databricks guide sample-style items only. It does not include paid Udemy questions, live/proctored exam dumps, or internal workshop material.",
    "sources": {
      "cert_page": "https://www.databricks.com/learn/certification/genai-engineer-associate",
      "ai_search": "https://docs.databricks.com/aws/en/ai-search/ai-search",
      "ai_search_create": "https://docs.databricks.com/aws/en/ai-search/create-ai-search",
      "ai_search_query": "https://docs.databricks.com/aws/en/ai-search/query-ai-search",
      "ai_search_perf": "https://docs.databricks.com/aws/en/ai-search/best-practices",
      "ai_search_apps": "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search",
      "agents": "https://docs.databricks.com/aws/en/agents/",
      "agents_author": "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent",
      "agents_tools": "https://docs.databricks.com/aws/en/agents/agent-framework/unstructured-retrieval-tools",
      "mcp": "https://docs.databricks.com/aws/en/agents/mcp/managed-mcp",
      "genie": "https://docs.databricks.com/aws/en/genie/conversation-api",
      "model_serving": "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
      "foundation_models": "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview",
      "foundation_apis": "https://docs.databricks.com/aws/en/machine-learning/foundation-model-apis/",
      "external_models": "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/",
      "custom_models": "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models",
      "multi_model": "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint",
      "ai_gateway": "https://docs.databricks.com/aws/en/ai-gateway/",
      "rate_limits": "https://docs.databricks.com/aws/en/ai-gateway/rate-limits",
      "inf_tables": "https://docs.databricks.com/aws/en/ai-gateway/inference-tables",
      "mlflow_tracing": "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/",
      "mlflow_langchain": "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/integrations/langchain",
      "mlflow_auto": "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/app-instrumentation/automatic",
      "mlflow_models_uc": "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/",
      "mlflow_pyfunc": "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html",
      "mlflow_trace_manual": "https://mlflow.org/docs/latest/genai/tracing/app-instrumentation/manual-tracing/",
      "mlflow_trace_tags": "https://mlflow.org/docs/latest/genai/tracing/attach-tags/",
      "uc_functions": "https://docs.databricks.com/aws/en/udf/unity-catalog",
      "ai_functions": "https://docs.databricks.com/aws/en/large-language-models/ai-functions",
      "apps": "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/",
      "lakehouse_monitoring": "https://docs.databricks.com/aws/en/lakehouse-monitoring/",
      "guardrails": "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
      "apps_bundles": "https://docs.databricks.com/aws/en/dev-tools/bundles/",
      "udemy_listing": "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/"
    },
    "origin_types": [
      "Generated practice",
      "Official guide sample"
    ],
    "notes": "Expanded per-option explanations, cleaned vote artifacts, added detailed public GitHub README steps."
  },
  "questions": [
    {
      "id": "OFFICIAL_SAMPLE_001",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "chunking",
        "embeddings"
      ],
      "question": "A Generative AI Engineer is loading 150 million embeddings into a vector database that takes a maximum of 100 million.\nWhich TWO actions can they take to reduce the record count?",
      "options": [
        {
          "id": "A",
          "text": "Increase the document chunk size",
          "explanation": "Correct. Larger chunks and lower overlap create fewer chunks, therefore fewer embedding records. A smaller embedding model changes vector size/cost, not the number of records."
        },
        {
          "id": "B",
          "text": "Decrease the overlap between chunks",
          "explanation": "Correct. Larger chunks and lower overlap create fewer chunks, therefore fewer embedding records. A smaller embedding model changes vector size/cost, not the number of records."
        },
        {
          "id": "C",
          "text": "Decrease the document chunk size",
          "explanation": "Incorrect. Decreasing chunk size usually creates more chunks, which increases the number of vector records and can increase retrieval noise/cost. That moves record count in the wrong direction by creating more/similar chunks, while the scenario needs fewer vector records."
        },
        {
          "id": "D",
          "text": "Increase the overlap between chunks",
          "explanation": "Incorrect. Increasing overlap duplicates more text between chunks and usually increases the number of vector records. That moves record count in the wrong direction by creating more/similar chunks, while the scenario needs fewer vector records."
        },
        {
          "id": "E",
          "text": "Use a smaller embedding model",
          "explanation": "Incorrect. A smaller embedding model can reduce vector dimension, memory, and cost, but it does not by itself reduce the number of chunk records. It may reduce each vector’s size but not the number of vectors, so it does not solve a maximum-record-count problem."
        }
      ],
      "correct_answers": [
        "A",
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Larger chunks and lower overlap create fewer chunks, therefore fewer embedding records. A smaller embedding model changes vector size/cost, not the number of records.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_002",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "source selection",
        "RAG"
      ],
      "question": "A customer-facing automotive parts app can answer order and billing details using account_id and transaction_id, but fails on shipping and expected arrival dates. Which approach would improve this?",
      "options": [
        {
          "id": "A",
          "text": "Create a vector store with company shipping policies and payment terms for all parts",
          "explanation": "Incorrect. A vector store is useful for semantic retrieval over unstructured text, but it may not solve structured lookup needs unless it contains the exact facts. It does not fit here because the missing information is structured, transaction-specific delivery data keyed by transaction_id."
        },
        {
          "id": "B",
          "text": "Create a feature store table with transaction_id as primary key populated with invoice data and expected delivery date",
          "explanation": "Correct. The app needs transaction-specific structured data for delivery dates. A feature/lookup table keyed by transaction_id provides current, precise facts."
        },
        {
          "id": "C",
          "text": "Fine-tune periodically on example expected arrival dates",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the missing information is structured, transaction-specific delivery data keyed by transaction_id."
        },
        {
          "id": "D",
          "text": "Prompt the model to add 14 days to the order date",
          "explanation": "Incorrect. Prompting can shape format and behavior, but it cannot reliably create missing private or live facts. It does not fit here because the missing information is structured, transaction-specific delivery data keyed by transaction_id."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. The app needs transaction-specific structured data for delivery dates. A feature/lookup table keyed by transaction_id provides current, precise facts.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_003",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "document extraction",
        "OCR"
      ],
      "question": "A RAG application uses scanned source documents saved as image files such as .jpeg or .png. The engineer wants the least code to extract text. Which Python package should be used?",
      "options": [
        {
          "id": "A",
          "text": "beautifulsoup",
          "explanation": "Incorrect. BeautifulSoup parses HTML/XML, not scanned images. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        },
        {
          "id": "B",
          "text": "scrapy",
          "explanation": "Incorrect. Scrapy is a web-crawling framework, not an OCR extractor for image files. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        },
        {
          "id": "C",
          "text": "pytesseract",
          "explanation": "Correct. Scanned images require OCR. pytesseract is an OCR wrapper commonly used to extract text from image files. pytesseract provides OCR capabilities for extracting text from image files such as PNG/JPEG scans."
        },
        {
          "id": "D",
          "text": "pyquery",
          "explanation": "Incorrect. PyQuery queries HTML/XML documents with jQuery-like syntax, not image OCR. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. pytesseract. The documents are images, so the solution needs ocr rather than html parsing or web crawling.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_004",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "embedding model",
        "context length"
      ],
      "question": "Documents for a retriever are chunked to a maximum of 512 tokens. Cost and latency are more important than quality. Which embedding model context-length option best fits?",
      "options": [
        {
          "id": "A",
          "text": "context length 512: smallest model is 0.13GB and embedding dimension 384",
          "explanation": "Correct. Choose the smallest model that still covers the chunk size. Bigger context and dimensions increase cost/latency without being needed."
        },
        {
          "id": "B",
          "text": "context length 514: smallest model is 0.44GB and embedding dimension 768",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "context length 2048: smallest model is 11GB and embedding dimension 2560",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "context length 32768: smallest model is 14GB and embedding dimension 4096",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. context length 512: smallest model is 0.13GB and embedding dimension 384. The question is about how chunking choices affect retrieval quality, context size, and vector record count.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_005",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "task selection"
      ],
      "question": "An engineer wants to update a paragraph-long memo into a single-sentence gist that fits into a front end. Which NLP task category should they evaluate LLMs for?",
      "options": [
        {
          "id": "A",
          "text": "text2text Generation",
          "explanation": "Incorrect. The choice “text2text Generation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Summarization, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Sentencizer",
          "explanation": "Incorrect. The choice “Sentencizer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Summarization, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Text Classification",
          "explanation": "Incorrect. The choice “Text Classification” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Summarization, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Summarization",
          "explanation": "Correct. The task is compressing text while preserving the main intent, which is summarization."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Summarization. The correct choice is d. summarization, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_006",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Hard",
      "tags": [
        "AI Search",
        "latency",
        "reranking"
      ],
      "question": "An online retailer has 100 million inventory items, about 80 searches/sec, and latency is critical. They can accept upfront development cost if it improves accuracy without harming latency. How should vector search be configured?",
      "options": [
        {
          "id": "A",
          "text": "Use GTE Large, standard vector search, hybrid search and reranking on",
          "explanation": "Incorrect. The choice “Use GTE Large, standard vector search, hybrid search and reranking on” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Fine tune a custom embedding model, use standard vector search, keep hybrid search and reranking off, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use GTE Large, storage optimized vector search, hybrid search and reranking on",
          "explanation": "Incorrect. The choice “Use GTE Large, storage optimized vector search, hybrid search and reranking on” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Fine tune a custom embedding model, use standard vector search, keep hybrid search and reranking off, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Fine tune a custom embedding model, use standard vector search, keep hybrid search and reranking off",
          "explanation": "Correct. For latency-critical high-throughput serving, avoid reranking/hybrid steps that add latency. Upfront cost can be invested in a better embedding model while using standard endpoint for latency."
        },
        {
          "id": "D",
          "text": "Fine tune a custom embedding model, use storage optimized vector search, keep hybrid search and reranking off",
          "explanation": "Incorrect. The choice “Fine tune a custom embedding model, use storage optimized vector search, keep hybrid search and reranking off” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Fine tune a custom embedding model, use standard vector search, keep hybrid search and reranking off, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. For latency-critical high-throughput serving, avoid reranking/hybrid steps that add latency. Upfront cost can be invested in a better embedding model while using standard endpoint for latency.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_007",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "prompt versioning",
        "MLflow aliases"
      ],
      "question": "A team needs gated prompt promotion from dev to staging to prod, version history, and rollback. Which approach supports this?",
      "options": [
        {
          "id": "A",
          "text": "Store prompt templates in the app repo and promote by branch merges",
          "explanation": "Incorrect. The choice “Store prompt templates in the app repo and promote by branch merges” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Track prompts as MLflow versions and promote using aliases after they pass, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Track prompts as MLflow versions and promote using aliases after they pass",
          "explanation": "Correct. MLflow versions and aliases provide lifecycle management, promotion semantics, version history, and rollback for prompts/models. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "C",
          "text": "Save prompts in JSON on the CI runner and overwrite prod on each run",
          "explanation": "Incorrect. Explicit JSON instructions/examples improve structured extraction by specifying exact fields and format. It does not fit here because the correct choice is B. Track prompts as MLflow versions and promote using aliases after they pass, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Put prompts in Delta tables and overwrite the prod table every deployment",
          "explanation": "Incorrect. The choice “Put prompts in Delta tables and overwrite the prod table every deployment” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Track prompts as MLflow versions and promote using aliases after they pass, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Track prompts as MLflow versions and promote using aliases after they pass. The correct choice is b. track prompts as mlflow versions and promote using aliases after they pass, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_008",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "Databricks Apps",
        "auth"
      ],
      "question": "A Databricks App lets support agents ask questions grounded in PDFs. Users must authenticate with corporate identity; the app must call a Mosaic AI Agent endpoint without exposing long-lived browser tokens; answers must respect user permissions. Which approach fits?",
      "options": [
        {
          "id": "A",
          "text": "Use a Databricks App backend to call the Agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context",
          "explanation": "Correct. Server-side calls avoid exposing secrets to the browser and allow the app to enforce authenticated user context and permissions."
        },
        {
          "id": "B",
          "text": "Store a PAT in JavaScript and call the Agent endpoint directly",
          "explanation": "Incorrect. The choice “Store a PAT in JavaScript and call the Agent endpoint directly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Use a Databricks App backend to call the Agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Publish the endpoint publicly and protect it with an API key in the frontend",
          "explanation": "Incorrect. The choice “Publish the endpoint publicly and protect it with an API key in the frontend” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Use a Databricks App backend to call the Agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Export PDFs to a public bucket so the Agent can read them without identity checks",
          "explanation": "Incorrect. The choice “Export PDFs to a public bucket so the Agent can read them without identity checks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Use a Databricks App backend to call the Agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Use a Databricks App backend to call the Agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context. The correct choice is a. use a databricks app backend to call the agent endpoint with app credentials and enforce user identity/permissions via the app authenticated context, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_009",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Hard",
      "tags": [
        "MCP",
        "agents",
        "secrets"
      ],
      "question": "A research assistant agent needs a managed Databricks MCP server for one internet data source and an external MCP server for an API requiring a key. Which TWO actions should be taken?",
      "options": [
        {
          "id": "A",
          "text": "Build one custom MCP server wrapping both resources",
          "explanation": "Incorrect. The choice “Build one custom MCP server wrapping both resources” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Configure the managed MCP server by specifying server type managed and its server identifier, E. Deploy the external MCP server with connection details, store the API key in Databricks Secrets, and reference it in MCP configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use a managed web browser MCP server to navigate internet resources",
          "explanation": "Incorrect. The choice “Use a managed web browser MCP server to navigate internet resources” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Configure the managed MCP server by specifying server type managed and its server identifier, E. Deploy the external MCP server with connection details, store the API key in Databricks Secrets, and reference it in MCP configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Cache all resources and search results as Unity Catalog external tables",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is D. Configure the managed MCP server by specifying server type managed and its server identifier, E. Deploy the external MCP server with connection details, store the API key in Databricks Secrets, and reference it in MCP configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Configure the managed MCP server by specifying server type managed and its server identifier",
          "explanation": "Correct. Use managed MCP where Databricks provides it to minimize maintenance, and configure external MCP securely with connection details and secrets."
        },
        {
          "id": "E",
          "text": "Deploy the external MCP server with connection details, store the API key in Databricks Secrets, and reference it in MCP configuration",
          "explanation": "Correct. Use managed MCP where Databricks provides it to minimize maintenance, and configure external MCP securely with connection details and secrets."
        }
      ],
      "correct_answers": [
        "D",
        "E"
      ],
      "explanation": "Origin: Curated official-doc practice. Use managed MCP where Databricks provides it to minimize maintenance, and configure external MCP securely with connection details and secrets.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/agents/mcp/use-mcp-in-agents"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "OFFICIAL_SAMPLE_010",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "SME feedback",
        "evaluation"
      ],
      "question": "Domain experts rate customer-support RAG answers weekly. Ratings vary widely for the same responses, making evaluation data unreliable. What should the engineer do?",
      "options": [
        {
          "id": "A",
          "text": "Use an LLM-as-judge as the primary source of truth instead of experts",
          "explanation": "Incorrect. The choice “Use an LLM-as-judge as the primary source of truth instead of experts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Define clear rubrics, calibrate SMEs, and use aligned judgments in mlflow.genai.evaluate(), because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Define clear rubrics, calibrate SMEs, and use aligned judgments in mlflow.genai.evaluate()",
          "explanation": "Correct. Clear rubrics and SME calibration reduce rater inconsistency while preserving expert feedback for iterative evaluation."
        },
        {
          "id": "C",
          "text": "Average all scores and use the blended score as definitive benchmark",
          "explanation": "Incorrect. The choice “Average all scores and use the blended score as definitive benchmark” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Define clear rubrics, calibrate SMEs, and use aligned judgments in mlflow.genai.evaluate(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only keep responses where all experts already agree",
          "explanation": "Incorrect. The choice “Only keep responses where all experts already agree” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Define clear rubrics, calibrate SMEs, and use aligned judgments in mlflow.genai.evaluate(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Define clear rubrics, calibrate SMEs, and use aligned judgments in mlflow.genai.evaluate(). The correct choice is b. define clear rubrics, calibrate smes, and use aligned judgments in mlflow.genai.evaluate(), because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Official guide sample",
      "origin_label": "Public Databricks exam-guide sample / uploaded guide",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_001",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "MLflow",
        "Unity Catalog"
      ],
      "question": "Which registry URI is used to register models in Unity Catalog with MLflow?",
      "options": [
        {
          "id": "A",
          "text": "databricks",
          "explanation": "Incorrect. databricks is not the Unity Catalog registry URI; it does not explicitly select the UC model registry. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        },
        {
          "id": "B",
          "text": "databricks-uc",
          "explanation": "Correct. Unity Catalog Model Registry uses the databricks-uc registry URI. In MLflow 3 it is the default on Databricks, but explicitly setting it is still common in training material."
        },
        {
          "id": "C",
          "text": "uc-registry",
          "explanation": "Incorrect. uc-registry is a plausible label, but it is not the MLflow registry URI used for Unity Catalog. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        },
        {
          "id": "D",
          "text": "unity-catalog",
          "explanation": "Incorrect. unity-catalog describes the product concept, but it is not the MLflow registry URI string. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Unity Catalog Model Registry uses the databricks-uc registry URI. In MLflow 3 it is the default on Databricks, but explicitly setting it is still common in training material.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_002",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "MLflow Tracing",
        "LangChain"
      ],
      "question": "When enabling MLflow tracing for LangChain agents, which command is used?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.start_tracing()",
          "explanation": "Incorrect. mlflow.start_tracing() is not the LangChain autologging API used in the demo; it is a plausible but incorrect name. The question asks for the LangChain integration command; this option is not the autolog call used for LangChain tracing."
        },
        {
          "id": "B",
          "text": "mlflow.enable_tracing()",
          "explanation": "Incorrect. mlflow.enable_tracing() is not the command used by the MLflow LangChain tracing integration. The question asks for the LangChain integration command; this option is not the autolog call used for LangChain tracing."
        },
        {
          "id": "C",
          "text": "mlflow.trace.enable()",
          "explanation": "Incorrect. mlflow.trace.enable() is not the LangChain integration command; tracing is enabled through the integration autolog call. The question asks for the LangChain integration command; this option is not the autolog call used for LangChain tracing."
        },
        {
          "id": "D",
          "text": "mlflow.langchain.autolog()",
          "explanation": "Correct. Databricks docs show LangChain automatic tracing enabled with mlflow.langchain.autolog(). mlflow.langchain.autolog() enables MLflow tracing/autologging for LangChain chains and agents."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. mlflow.langchain.autolog(). The correct choice is d. mlflow.langchain.autolog(), because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/integrations/langchain"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_003",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "tracing",
        "observability"
      ],
      "question": "What is the main purpose of MLflow tracing in agent development?",
      "options": [
        {
          "id": "A",
          "text": "Automatically fix bugs in agent code",
          "explanation": "Incorrect. The choice “Automatically fix bugs in agent code” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata",
          "explanation": "Correct. MLflow Tracing records inputs, outputs, intermediate steps, and metadata so you can debug, evaluate, monitor, and audit GenAI applications."
        },
        {
          "id": "C",
          "text": "Make agents run faster",
          "explanation": "Incorrect. The choice “Make agents run faster” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Reduce model size",
          "explanation": "Incorrect. The choice “Reduce model size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata. The correct choice is b. provide step-by-step visibility into inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_004",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "trace tags"
      ],
      "question": "When creating tagged traces in MLflow, how do you update tags for an active trace?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.set_tags(tags)",
          "explanation": "Incorrect. mlflow.set_tags() is for run-style tags, not active GenAI trace updates in this question. It does not fit here because the correct choice is D. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "mlflow.add_tags(tags)",
          "explanation": "Incorrect. mlflow.add_tags() is not the active MLflow trace update API. It does not fit here because the correct choice is D. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "mlflow.trace_tags(tags)",
          "explanation": "Incorrect. mlflow.trace_tags() is not the active MLflow trace tagging API. It does not fit here because the correct choice is D. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "mlflow.update_current_trace(tags={...})",
          "explanation": "Correct. For ongoing traces, MLflow uses mlflow.update_current_trace(tags={...}) to attach or update trace tags."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. mlflow.update_current_trace(tags={...}). The correct choice is d. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints.",
      "source_links": [
        "https://mlflow.org/docs/latest/genai/tracing/attach-tags/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_005",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "manual tracing"
      ],
      "question": "In the MLflow tracing demo, what decorator is used to add custom tracing to Python functions?",
      "options": [
        {
          "id": "A",
          "text": "@mlflow.track",
          "explanation": "Incorrect. @mlflow.track is a plausible name, but the tracing decorator is @mlflow.trace. The question asks for MLflow’s manual trace decorator; this option is not the decorator that creates spans."
        },
        {
          "id": "B",
          "text": "@mlflow.log",
          "explanation": "Incorrect. @mlflow.log is not the decorator for custom function tracing. The question asks for MLflow’s manual trace decorator; this option is not the decorator that creates spans."
        },
        {
          "id": "C",
          "text": "@mlflow.monitor",
          "explanation": "Incorrect. @mlflow.monitor is not the MLflow decorator for manual trace spans. The question asks for MLflow’s manual trace decorator; this option is not the decorator that creates spans."
        },
        {
          "id": "D",
          "text": "@mlflow.trace",
          "explanation": "Correct. The @mlflow.trace decorator instruments a function and creates spans/traces for manual tracing. @mlflow.trace is the MLflow decorator for adding manual/custom tracing spans around Python functions."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. @mlflow.trace. The correct choice is d. @mlflow.trace, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://mlflow.org/docs/latest/genai/tracing/app-instrumentation/manual-tracing/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_006",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "span",
        "trace"
      ],
      "question": "In MLflow tracing, what is a span?",
      "options": [
        {
          "id": "A",
          "text": "The number of tokens processed",
          "explanation": "Incorrect. The choice “The number of tokens processed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. A single operation with start/end time plus metadata, inputs, and outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "A single operation with start/end time plus metadata, inputs, and outputs",
          "explanation": "Correct. A span represents a unit of work inside a trace, such as an LLM call, retriever call, tool call, or custom function."
        },
        {
          "id": "C",
          "text": "The total time an agent takes to respond",
          "explanation": "Incorrect. The choice “The total time an agent takes to respond” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. A single operation with start/end time plus metadata, inputs, and outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The memory used by an agent",
          "explanation": "Incorrect. The choice “The memory used by an agent” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. A single operation with start/end time plus metadata, inputs, and outputs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. A single operation with start/end time plus metadata, inputs, and outputs. The correct choice is b. a single operation with start/end time plus metadata, inputs, and outputs, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_007",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "MLflow flavor",
        "pyfunc"
      ],
      "question": "Which MLflow model flavor is the generic Python-function interface with log_model, save_model, and predict?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.spark",
          "explanation": "Incorrect. mlflow.spark is for Spark ML models, not the generic pyfunc interface. It does not fit here because the correct choice is C. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "mlflow.langchain",
          "explanation": "Incorrect. LangChain composes prompts, retrievers, tools, chains, and multi-step LLM workflows. It does not fit here because the correct choice is C. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "mlflow.pyfunc",
          "explanation": "Correct. mlflow.pyfunc is the generic Python function flavor that exposes a common predict interface. mlflow.pyfunc is MLflow’s generic Python-function model flavor with a standard load/predict interface."
        },
        {
          "id": "D",
          "text": "mlflow.transformers",
          "explanation": "Incorrect. mlflow.transformers is for Hugging Face Transformers models, not the default generic pyfunc interface. It does not fit here because the correct choice is C. mlflow.pyfunc, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. mlflow.pyfunc. The correct choice is c. mlflow.pyfunc, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_008",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "packaging",
        "MLflow"
      ],
      "question": "In GenAI packaging, which object can validly be logged and managed as a model or pipeline in MLflow?",
      "options": [
        {
          "id": "A",
          "text": "Only locally hosted foundation model weights",
          "explanation": "Incorrect. The choice “Only locally hosted foundation model weights” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. An engineered prompt template, LangChain chain, or lightweight external LLM API wrapper, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Only .bin or .pt model weight files",
          "explanation": "Incorrect. The choice “Only .bin or .pt model weight files” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. An engineered prompt template, LangChain chain, or lightweight external LLM API wrapper, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only raw training data and tokenizer vocabulary",
          "explanation": "Incorrect. The choice “Only raw training data and tokenizer vocabulary” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. An engineered prompt template, LangChain chain, or lightweight external LLM API wrapper, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "An engineered prompt template, LangChain chain, or lightweight external LLM API wrapper",
          "explanation": "Correct. In GenAI, the packaged unit can be code and configuration around an LLM call, prompt, retriever, chain, or agent, not only model weights. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. An engineered prompt template, LangChain chain, or lightweight external LLM API wrapper. The correct choice is d. an engineered prompt template, langchain chain, or lightweight external llm api wrapper, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/api-reference",
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_009",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "agent as code"
      ],
      "question": "What is the recommended approach for logging agents in MLflow?",
      "options": [
        {
          "id": "A",
          "text": "Directly saving the in-memory agent object only",
          "explanation": "Incorrect. The choice “Directly saving the in-memory agent object only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Agent as code with Python files and YAML/configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Agent as code with Python files and YAML/configuration",
          "explanation": "Correct. Agents include code, tools, prompts, dependencies, and config. Agent-as-code keeps this reproducible and deployable."
        },
        {
          "id": "C",
          "text": "Using mlflow.sklearn.log_model for every agent",
          "explanation": "Incorrect. The choice “Using mlflow.sklearn.log_model for every agent” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Agent as code with Python files and YAML/configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Using mlflow.pytorch.log_model for every agent",
          "explanation": "Incorrect. The choice “Using mlflow.pytorch.log_model for every agent” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Agent as code with Python files and YAML/configuration, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Agent as code with Python files and YAML/configuration. The correct choice is b. agent as code with python files and yaml/configuration, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/tutorials/agent-quickstart",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_010",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "resources",
        "auth passthrough"
      ],
      "question": "What is the purpose of the resources parameter when logging an agent model to MLflow on Databricks?",
      "options": [
        {
          "id": "A",
          "text": "Configure model scaling parameters",
          "explanation": "Incorrect. The choice “Configure model scaling parameters” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the resources parameter declares which Databricks resources the served agent needs for automatic authorization passthrough."
        },
        {
          "id": "B",
          "text": "Define automatic authentication passthrough for specified Databricks resources",
          "explanation": "Correct. The resources parameter declares the Databricks resources the agent needs so serving can handle authentication/permissions correctly."
        },
        {
          "id": "C",
          "text": "Set execution timeout",
          "explanation": "Incorrect. The choice “Set execution timeout” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the resources parameter declares which Databricks resources the served agent needs for automatic authorization passthrough."
        },
        {
          "id": "D",
          "text": "Specify memory requirements",
          "explanation": "Incorrect. The choice “Specify memory requirements” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the resources parameter declares which Databricks resources the served agent needs for automatic authorization passthrough."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Define automatic authentication passthrough for specified Databricks resources. The resources parameter declares which databricks resources the served agent needs for automatic authorization passthrough.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/mcp/use-mcp-in-agents"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_011",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "ResponsesAgent"
      ],
      "question": "What is the primary benefit of the ResponsesAgent interface?",
      "options": [
        {
          "id": "A",
          "text": "It only works with SQL functions",
          "explanation": "Incorrect. The choice “It only works with SQL functions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It requires less memory",
          "explanation": "Incorrect. The choice “It requires less memory” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It is always faster",
          "explanation": "Incorrect. The choice “It is always faster” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It provides compatibility with OpenAI Responses schema while adding Databricks-specific enhancements",
          "explanation": "Correct. Databricks describes ResponsesAgent as an interface that makes agents work across frameworks and integrate with Databricks tools and deployment."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Databricks describes ResponsesAgent as an interface that makes agents work across frameworks and integrate with Databricks tools and deployment.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/tutorials/agent-quickstart"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_012",
      "source": "Curated official-doc practice",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "agents"
      ],
      "question": "What are the three fundamental principles that AI agents operate on?",
      "options": [
        {
          "id": "A",
          "text": "Planning, Execution, Monitoring",
          "explanation": "Incorrect. These are workflow/MLOps ideas, not the basic agent principles asked here. It does not fit here because the correct choice is C. Perception, Decision-Making, Action, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Data, Model, Interface",
          "explanation": "Incorrect. These are application components, not the fundamental agent loop. It does not fit here because the correct choice is C. Perception, Decision-Making, Action, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Perception, Decision-Making, Action",
          "explanation": "Correct. Agents perceive input or environment state, decide what to do next, and act through responses or tool calls. Perception, decision-making, and action describe the agent loop: observe inputs/environment, choose a next step, and act/respond/tool-call."
        },
        {
          "id": "D",
          "text": "Input, Processing, Output",
          "explanation": "Incorrect. This is a generic computing pipeline, not the agent-specific framing. It does not fit here because the correct choice is C. Perception, Decision-Making, Action, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Perception, Decision-Making, Action. The correct choice is c. perception, decision-making, action, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_013",
      "source": "Curated official-doc practice",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "agent types"
      ],
      "question": "Which is NOT one of the standard five AI-agent types by complexity?",
      "options": [
        {
          "id": "A",
          "text": "Distributed Learning Agents",
          "explanation": "Correct. The standard list is Simple Reflex, Model-Based Reflex, Goal-Based, Utility-Based, and Learning Agents."
        },
        {
          "id": "B",
          "text": "Model-Based Reflex Agents",
          "explanation": "Incorrect. Model-Based Reflex Agents are part of the classic taxonomy and maintain internal state. It does not fit here because the correct choice is A. Distributed Learning Agents, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Simple Reflex Agents",
          "explanation": "Incorrect. Simple Reflex Agents are part of the classic taxonomy and react using rules. It does not fit here because the correct choice is A. Distributed Learning Agents, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Utility-Based Agents",
          "explanation": "Incorrect. Utility-Based Agents are part of the classic taxonomy and choose actions by utility/preference. It does not fit here because the correct choice is A. Distributed Learning Agents, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Distributed Learning Agents. The correct choice is a. distributed learning agents, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_014",
      "source": "Curated official-doc practice",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "Agent Bricks",
        "IE"
      ],
      "question": "Which Agent Bricks type is designed for extracting structured data from unstructured sources?",
      "options": [
        {
          "id": "A",
          "text": "Multi-Agent Supervisor (MAS)",
          "explanation": "Incorrect. Multi-Agent Supervisor coordinates multiple agents; it is not the specialized extraction brick. It does not fit here because the correct choice is B. Information Extraction (IE), because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Information Extraction (IE)",
          "explanation": "Correct. Information Extraction transforms unlabeled text/documents into structured extracted outputs. Information Extraction is the Agent Bricks pattern for extracting structured fields from unstructured content."
        },
        {
          "id": "C",
          "text": "Knowledge Assistant (KA)",
          "explanation": "Incorrect. Knowledge Assistant is aimed at question answering over knowledge sources, not primarily field extraction. It does not fit here because the correct choice is B. Information Extraction (IE), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Custom LLM (CLLM)",
          "explanation": "Incorrect. Custom LLM is about model customization/serving, not the prebuilt structured extraction brick. It does not fit here because the correct choice is B. Information Extraction (IE), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Information Extraction (IE). The correct choice is b. information extraction (ie), because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-bricks/key-info-extraction"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_015",
      "source": "Curated official-doc practice",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "Genie",
        "text-to-SQL"
      ],
      "question": "For a data assistant that answers natural-language questions over governed SQL data, which Databricks capability is most relevant?",
      "options": [
        {
          "id": "A",
          "text": "Genie Spaces / Genie API",
          "explanation": "Correct. Genie Spaces and the Genie API support natural-language data querying and can be integrated into agents and apps."
        },
        {
          "id": "B",
          "text": "pytesseract",
          "explanation": "Incorrect. pytesseract is an OCR package for extracting text from images such as scanned PNG/JPEG documents. It does not fit here because the correct choice is A. Genie Spaces / Genie API, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Lakeview only",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the correct choice is A. Genie Spaces / Genie API, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "AutoML regression",
          "explanation": "Incorrect. The choice “AutoML regression” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Genie Spaces / Genie API, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Genie Spaces / Genie API. The correct choice is a. genie spaces / genie api, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/genie/conversation-api"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_016",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC functions",
        "LangChain"
      ],
      "question": "Which class was used in the LangChain demo to wrap Unity Catalog functions as LangChain tools?",
      "options": [
        {
          "id": "A",
          "text": "UCToolWrapper",
          "explanation": "Incorrect. UCToolWrapper is generic-sounding and not the specific toolkit class used in the demo pattern. It does not fit here because the question asks for the exact wrapper class used to expose Unity Catalog functions as LangChain tools."
        },
        {
          "id": "B",
          "text": "UCFunctionToolkit",
          "explanation": "Correct. The training demo uses UCFunctionToolkit to expose Unity Catalog functions as LangChain tools. UCFunctionToolkit is the Unity Catalog function toolkit used in the UC-functions/LangChain pattern to expose governed UC functions as callable LangChain tools."
        },
        {
          "id": "C",
          "text": "DatabricksToolkit",
          "explanation": "Incorrect. The choice “DatabricksToolkit” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question asks for the exact wrapper class used to expose Unity Catalog functions as LangChain tools."
        },
        {
          "id": "D",
          "text": "LangChainUCBridge",
          "explanation": "Incorrect. LangChainUCBridge sounds like an integration bridge, but it is not the class name used in the demo pattern. It does not fit here because the question asks for the exact wrapper class used to expose Unity Catalog functions as LangChain tools."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. UCFunctionToolkit. The question asks for the exact wrapper class used to expose unity catalog functions as langchain tools.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_017",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC functions",
        "metadata"
      ],
      "question": "When creating UC SQL functions for agent use, which clause is essential for giving the LLM context about what the function does?",
      "options": [
        {
          "id": "A",
          "text": "COMMENT",
          "explanation": "Correct. COMMENT describes the tool/function purpose so an agent can choose it appropriately. The COMMENT clause describes what a SQL function does, helping agents/LLMs understand when to use the function."
        },
        {
          "id": "B",
          "text": "DETERMINISTIC",
          "explanation": "Incorrect. The choice “DETERMINISTIC” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. COMMENT, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "LANGUAGE SQL",
          "explanation": "Incorrect. The choice “LANGUAGE SQL” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. COMMENT, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "RETURNS",
          "explanation": "Incorrect. The choice “RETURNS” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. COMMENT, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. COMMENT. The correct choice is a. comment, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_018",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "SQL functions"
      ],
      "question": "In Unity Catalog SQL functions, what does DETERMINISTIC mean?",
      "options": [
        {
          "id": "A",
          "text": "The function requires admin privileges",
          "explanation": "Incorrect. The choice “The function requires admin privileges” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. The function returns the same result for the same inputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "The function always executes in the same order",
          "explanation": "Incorrect. The choice “The function always executes in the same order” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. The function returns the same result for the same inputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The function returns the same result for the same inputs",
          "explanation": "Correct. A deterministic function is expected to produce the same output for identical inputs. RETURNS defines output type, but it does not provide the natural-language tool description needed by the LLM."
        },
        {
          "id": "D",
          "text": "The function can only be called once",
          "explanation": "Incorrect. The choice “The function can only be called once” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. The function returns the same result for the same inputs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. The function returns the same result for the same inputs. The correct choice is c. the function returns the same result for the same inputs, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_019",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "UC functions",
        "governance"
      ],
      "question": "What makes Unity Catalog functions useful as agent tools compared with ordinary local helper functions?",
      "options": [
        {
          "id": "A",
          "text": "They are discoverable and governed with metadata, permissions, and signatures",
          "explanation": "Correct. Unity Catalog functions can be documented, governed, and exposed as tools agents can discover and call."
        },
        {
          "id": "B",
          "text": "They require special hardware",
          "explanation": "Incorrect. The choice “They require special hardware” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are discoverable and governed with metadata, permissions, and signatures, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "They always execute faster",
          "explanation": "Incorrect. The choice “They always execute faster” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are discoverable and governed with metadata, permissions, and signatures, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "They only work with SQL databases",
          "explanation": "Incorrect. The choice “They only work with SQL databases” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are discoverable and governed with metadata, permissions, and signatures, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. They are discoverable and governed with metadata, permissions, and signatures. The correct choice is a. they are discoverable and governed with metadata, permissions, and signatures, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_020",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC Python functions"
      ],
      "question": "In a Python UC function registration demo, where should imports be placed?",
      "options": [
        {
          "id": "A",
          "text": "Inside the function body",
          "explanation": "Correct. Putting imports inside the function body helps the registered function be self-contained when executed."
        },
        {
          "id": "B",
          "text": "At the top of the notebook",
          "explanation": "Incorrect. The choice “At the top of the notebook” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Outside the function definition",
          "explanation": "Incorrect. The choice “Outside the function definition” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Libraries cannot be imported in UC Python functions",
          "explanation": "Incorrect. The choice “Libraries cannot be imported in UC Python functions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Inside the function body. The correct choice is a. inside the function body, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_021",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "serverless",
        "UC Python functions"
      ],
      "question": "Which execution mode is required for Python UC functions when using serverless compute?",
      "options": [
        {
          "id": "A",
          "text": "Both serverless and local modes equally",
          "explanation": "Incorrect. The choice “Both serverless and local modes equally” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "B",
          "text": "Local mode only",
          "explanation": "Incorrect. Local mode is for local execution/testing, not the required serverless execution path. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "C",
          "text": "Distributed mode",
          "explanation": "Incorrect. Distributed mode is not the UC Python function execution mode asked here. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "D",
          "text": "Serverless mode",
          "explanation": "Correct. When using serverless compute, the function should run in serverless mode. Serverless mode means the UC Python function is executed on serverless compute rather than local notebook execution."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Serverless mode. The scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_022",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC Python functions"
      ],
      "question": "Which method was used to test UC Python functions programmatically in the demo?",
      "options": [
        {
          "id": "A",
          "text": "client.call_function()",
          "explanation": "Incorrect. client.call_function() is a plausible name, but not the method used in the demo pattern. It does not fit here because the correct choice is B. client.execute_function(), because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "client.execute_function()",
          "explanation": "Correct. The demo method name for programmatic function execution/testing is client.execute_function(). client.execute_function() is the programmatic call used to execute/test a registered Unity Catalog function in the demo-style workflow."
        },
        {
          "id": "C",
          "text": "client.test_function()",
          "explanation": "Incorrect. client.test_function() sounds like testing, but the demo API uses execute_function(). It does not fit here because the correct choice is B. client.execute_function(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "client.run_function()",
          "explanation": "Incorrect. client.run_function() is not the method used in the demo pattern. It does not fit here because the correct choice is B. client.execute_function(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. client.execute_function(). The correct choice is b. client.execute_function(), because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_023",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "configuration",
        "YAML"
      ],
      "question": "In the demo, what file format stores agent configuration separately from the main notebook?",
      "options": [
        {
          "id": "A",
          "text": ".toml",
          "explanation": "Incorrect. TOML is a config format, but it is not the format used in this demo-style question. It does not fit here because the correct choice is B. .yaml, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": ".yaml",
          "explanation": "Correct. A .yaml file is a human-readable configuration format commonly used to keep agent settings separate from code. This directly satisfies the scenario: Origin: Curated official-doc practice. The demo uses YAML for external agent configuration."
        },
        {
          "id": "C",
          "text": ".xml",
          "explanation": "Incorrect. XML is not the configuration format used in this demo-style question. It does not fit here because the correct choice is B. .yaml, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": ".json",
          "explanation": "Incorrect. JSON can store configuration, but the demo-style agent config used YAML. It does not fit here because the correct choice is B. .yaml, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. .yaml. The correct choice is b. .yaml, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_024",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Model Serving"
      ],
      "question": "Databricks Model Serving manages which three categories of models through a unified UI/API?",
      "options": [
        {
          "id": "A",
          "text": "Batch, streaming, and real-time models",
          "explanation": "Incorrect. The choice “Batch, streaming, and real-time models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Custom Models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "TensorFlow, PyTorch, and scikit-learn models only",
          "explanation": "Incorrect. TensorFlow is a deep learning framework, not the typical LLM chain/orchestration framework here. It does not fit here because the correct choice is D. Custom Models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Internal, third-party, and on-premise models",
          "explanation": "Incorrect. The choice “Internal, third-party, and on-premise models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Custom Models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Custom Models, Foundation Model APIs, and External Models",
          "explanation": "Correct. Databricks docs list custom models, foundation models, and external models as supported model types. External Models let Databricks manage access to models hosted outside Databricks, such as third-party model APIs."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Custom Models, Foundation Model APIs, and External Models. The correct choice is d. custom models, foundation model apis, and external models, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_025",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Model Serving",
        "serverless"
      ],
      "question": "Which Databricks Model Serving feature directly enables serverless operations for unpredictable traffic?",
      "options": [
        {
          "id": "A",
          "text": "Autoscaling and scale-to-zero compute",
          "explanation": "Correct. Model Serving automatically scales up/down using serverless compute; scale-to-zero reduces idle cost. Scale-to-zero reduces cost by shutting serving compute down when no traffic is present."
        },
        {
          "id": "B",
          "text": "Built-in A/B testing",
          "explanation": "Incorrect. A/B testing compares versions with traffic splits; it is useful but not the core serverless scaling feature. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "C",
          "text": "Feature Store integration",
          "explanation": "Incorrect. A feature/lookup table keyed by an ID is useful for structured, transaction-specific facts such as delivery dates. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "D",
          "text": "Support for MLflow flavors",
          "explanation": "Incorrect. The choice “Support for MLflow flavors” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Autoscaling and scale-to-zero compute. The scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_026",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "A/B testing",
        "traffic split"
      ],
      "question": "How does Databricks Model Serving support A/B testing or canary deployment?",
      "options": [
        {
          "id": "A",
          "text": "Serve multiple models behind one endpoint with configurable traffic splits",
          "explanation": "Correct. Databricks supports multiple served entities behind a single endpoint with explicit traffic percentages."
        },
        {
          "id": "B",
          "text": "Use ai_query() to choose model by user ID",
          "explanation": "Incorrect. ai_query() is for invoking endpoints in SQL/batch inference, not choosing models by user ID or traffic splitting. It does not fit here because the correct choice is A. Serve multiple models behind one endpoint with configurable traffic splits, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Randomly assign based on GPU availability",
          "explanation": "Incorrect. The choice “Randomly assign based on GPU availability” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serve multiple models behind one endpoint with configurable traffic splits, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Require separate endpoints and external load balancer",
          "explanation": "Incorrect. Separate endpoints plus an external load balancer is not the managed Databricks serving traffic-split pattern. It does not fit here because the correct choice is A. Serve multiple models behind one endpoint with configurable traffic splits, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Serve multiple models behind one endpoint with configurable traffic splits. The correct choice is a. serve multiple models behind one endpoint with configurable traffic splits, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_027",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "Model Registry",
        "UC"
      ],
      "question": "What does the Model Registry in Unity Catalog facilitate during deployment?",
      "options": [
        {
          "id": "A",
          "text": "Centralized versions, aliases such as champion/challenger, ACLs, lineage and governance",
          "explanation": "Correct. UC Models centralize model lifecycle with governance, access controls, lineage, and aliases for deployment promotion. Champion/challenger aliases identify production and candidate model versions for controlled lifecycle management."
        },
        {
          "id": "B",
          "text": "Training loss visualization only",
          "explanation": "Incorrect. The choice “Training loss visualization only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        },
        {
          "id": "C",
          "text": "Automatic retraining on Delta Lake changes",
          "explanation": "Incorrect. Monitoring detects issues; it does not automatically retrain models by itself. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        },
        {
          "id": "D",
          "text": "Automatic ONNX conversion",
          "explanation": "Incorrect. The choice “Automatic ONNX conversion” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Centralized versions, aliases such as champion/challenger, ACLs, lineage and governance. The scenario is about managed model lifecycle, aliases, versions, and permissions in unity catalog.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_028",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "MLOps",
        "environment separation"
      ],
      "question": "For environment separation in scalable secure MLOps/LLMOps, what is the recommended approach in the course?",
      "options": [
        {
          "id": "A",
          "text": "Separate Databricks workspaces for Development, Staging, and Production",
          "explanation": "Correct. Direct separation improves security, isolation, promotion control, and production reliability. Separate workspaces isolate development, staging, and production permissions/resources for stronger environment separation."
        },
        {
          "id": "B",
          "text": "All developers admin in one workspace",
          "explanation": "Incorrect. The choice “All developers admin in one workspace” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate Databricks workspaces for Development, Staging, and Production, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Dev and Staging combined with Production separate only",
          "explanation": "Incorrect. The choice “Dev and Staging combined with Production separate only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate Databricks workspaces for Development, Staging, and Production, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Single workspace with folder permissions only",
          "explanation": "Incorrect. The choice “Single workspace with folder permissions only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate Databricks workspaces for Development, Staging, and Production, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Separate Databricks workspaces for Development, Staging, and Production. The correct choice is a. separate databricks workspaces for development, staging, and production, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_029",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "secrets",
        "pyfunc"
      ],
      "question": "What is a safe way to pass secrets/credentials to a custom PyFunc model serving endpoint?",
      "options": [
        {
          "id": "A",
          "text": "spark.conf.set() in a notebook",
          "explanation": "Incorrect. spark.conf.set is a notebook/session configuration mechanism, not a secure serving endpoint credential method. It does not fit here because the correct choice is C. Environment variables/secrets configured for serving, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Databricks Feature Store API variables",
          "explanation": "Incorrect. A feature/lookup table keyed by an ID is useful for structured, transaction-specific facts such as delivery dates. It does not fit here because the correct choice is C. Environment variables/secrets configured for serving, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Environment variables/secrets configured for serving",
          "explanation": "Correct. Serving-time secrets should not be hard-coded. Environment variables backed by secret management are the appropriate pattern."
        },
        {
          "id": "D",
          "text": "Plain text in code",
          "explanation": "Incorrect. Plain text credentials in code are insecure and should not be used. It does not fit here because the correct choice is C. Environment variables/secrets configured for serving, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Environment variables/secrets configured for serving. The correct choice is c. environment variables/secrets configured for serving, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_030",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "chunking"
      ],
      "question": "Which actions reduce the number of vector records generated from documents? Select TWO.",
      "options": [
        {
          "id": "A",
          "text": "Increase chunk size",
          "explanation": "Correct. Record count is controlled mainly by how many chunks are produced. Larger chunks and less overlap produce fewer chunks."
        },
        {
          "id": "B",
          "text": "Decrease chunk overlap",
          "explanation": "Correct. Record count is controlled mainly by how many chunks are produced. Larger chunks and less overlap produce fewer chunks."
        },
        {
          "id": "C",
          "text": "Decrease chunk size",
          "explanation": "Incorrect. Smaller chunks usually create more chunks and therefore more vector records. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Increase chunk overlap",
          "explanation": "Incorrect. Increasing overlap repeats more text between adjacent chunks, which usually increases the record count. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "E",
          "text": "Use a smaller embedding dimension",
          "explanation": "Incorrect. A smaller embedding model changes vector dimensionality/cost/latency, but does not directly reduce how many chunks exist. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A",
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Increase chunk size, B. Decrease chunk overlap. The question is about how chunking choices affect retrieval quality, context size, and vector record count.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_031",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "data cleaning",
        "RAG"
      ],
      "question": "A source dataset contains page headers, ads, navigation menus, and unrelated text that degrades RAG quality. What is the best data-prep response?",
      "options": [
        {
          "id": "A",
          "text": "Keep everything and rely only on the system prompt",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the correct choice is B. Filter/clean extraneous content before indexing, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Filter/clean extraneous content before indexing",
          "explanation": "Correct. Noise in indexed documents lowers retrieval precision and can contaminate generated answers, so clean/filter upstream."
        },
        {
          "id": "C",
          "text": "Increase the LLM temperature",
          "explanation": "Incorrect. The choice “Increase the LLM temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Filter/clean extraneous content before indexing, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Use a larger output token limit",
          "explanation": "Incorrect. The choice “Use a larger output token limit” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Filter/clean extraneous content before indexing, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Filter/clean extraneous content before indexing. The correct choice is b. filter/clean extraneous content before indexing, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_032",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "document parsing"
      ],
      "question": "HTML documents must be parsed into text with minimal code. Which Python package is most appropriate?",
      "options": [
        {
          "id": "A",
          "text": "pytesseract",
          "explanation": "Incorrect. pytesseract is an OCR package for extracting text from images such as scanned PNG/JPEG documents. It does not fit here because the correct choice is D. BeautifulSoup, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "numpy",
          "explanation": "Incorrect. The choice “numpy” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. BeautifulSoup, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "PyPDF2",
          "explanation": "Incorrect. The choice “PyPDF2” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. BeautifulSoup, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "BeautifulSoup",
          "explanation": "Correct. BeautifulSoup is commonly used to parse HTML and extract text/content. BeautifulSoup parses HTML/XML pages; it does not perform OCR on scanned image documents."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. BeautifulSoup. The correct choice is d. beautifulsoup, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_033",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "Delta",
        "chunk storage"
      ],
      "question": "PDF/text chunks are stored as one row per document with an array of chunks. What is the best structure before writing to a Delta table for Vector/AI Search indexing?",
      "options": [
        {
          "id": "A",
          "text": "Keep one array per document",
          "explanation": "Incorrect. The choice “Keep one array per document” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "B",
          "text": "Flatten to one chunk per row with a unique id",
          "explanation": "Correct. Vector indexes work on row-level records; flattening chunks to one row per chunk with an id is the typical design."
        },
        {
          "id": "C",
          "text": "Store each chunk only as a JSON file",
          "explanation": "Incorrect. Explicit JSON instructions/examples improve structured extraction by specifying exact fields and format. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Only store document names",
          "explanation": "Incorrect. The choice “Only store document names” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Flatten to one chunk per row with a unique id. The question is about how chunking choices affect retrieval quality, context size, and vector record count.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_034",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "context precision",
        "RAG eval"
      ],
      "question": "What is Context Precision in RAG evaluation?",
      "options": [
        {
          "id": "A",
          "text": "The signal-to-noise and ranking quality of retrieved context",
          "explanation": "Correct. Context precision measures whether retrieved chunks are relevant and ranked above irrelevant/noisy chunks."
        },
        {
          "id": "B",
          "text": "Whether the query contains PII",
          "explanation": "Incorrect. The choice “Whether the query contains PII” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        },
        {
          "id": "C",
          "text": "Grammar quality of final answer",
          "explanation": "Incorrect. The choice “Grammar quality of final answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        },
        {
          "id": "D",
          "text": "Embedding cost per token",
          "explanation": "Incorrect. The choice “Embedding cost per token” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. The signal-to-noise and ranking quality of retrieved context. The metric asks whether relevant retrieved chunks are ranked above irrelevant chunks.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_035",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "context recall",
        "RAG eval"
      ],
      "question": "What is Context Recall in RAG evaluation?",
      "options": [
        {
          "id": "A",
          "text": "Whether the final answer is concise",
          "explanation": "Incorrect. The choice “Whether the final answer is concise” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "B",
          "text": "Whether retrieval found the necessary context to answer the query",
          "explanation": "Correct. Context recall asks whether the required supporting information was retrieved at all."
        },
        {
          "id": "C",
          "text": "Whether the LLM used JSON",
          "explanation": "Incorrect. Explicit JSON instructions/examples improve structured extraction by specifying exact fields and format. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "D",
          "text": "The percentage of requests logged",
          "explanation": "Incorrect. The choice “The percentage of requests logged” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Whether retrieval found the necessary context to answer the query. The metric asks whether the retrieved context contains the information needed to answer.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_036",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "reranking"
      ],
      "question": "What are the main benefits of reranking in retrieval? Select TWO.",
      "options": [
        {
          "id": "A",
          "text": "Eliminates the need for vector search",
          "explanation": "Incorrect. The choice “Eliminates the need for vector search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Reduces hallucinations by improving context quality, D. Improves accuracy/ranking of context provided to the LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Reduces hallucinations by improving context quality",
          "explanation": "Correct. Reranking can improve the relevance and order of retrieved context, which helps reduce hallucinations, but it usually adds computation and does not replace retrieval."
        },
        {
          "id": "C",
          "text": "Always increases computational speed",
          "explanation": "Incorrect. The choice “Always increases computational speed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Reduces hallucinations by improving context quality, D. Improves accuracy/ranking of context provided to the LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Improves accuracy/ranking of context provided to the LLM",
          "explanation": "Correct. Reranking can improve the relevance and order of retrieved context, which helps reduce hallucinations, but it usually adds computation and does not replace retrieval."
        }
      ],
      "correct_answers": [
        "B",
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Reranking can improve the relevance and order of retrieved context, which helps reduce hallucinations, but it usually adds computation and does not replace retrieval.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_037",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "AI Search"
      ],
      "question": "Databricks AI Search supports which query capabilities to tune retrieval quality?",
      "options": [
        {
          "id": "A",
          "text": "ANN, hybrid, full-text queries, filters, and reranking",
          "explanation": "Correct. The current AI Search docs state that ANN, hybrid, full-text query types, filters, pagination, and reranking are supported."
        },
        {
          "id": "B",
          "text": "Only exact SQL joins",
          "explanation": "Incorrect. The choice “Only exact SQL joins” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ANN, hybrid, full-text queries, filters, and reranking, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only keyword LIKE search",
          "explanation": "Incorrect. The choice “Only keyword LIKE search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ANN, hybrid, full-text queries, filters, and reranking, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only manual document review",
          "explanation": "Incorrect. The choice “Only manual document review” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ANN, hybrid, full-text queries, filters, and reranking, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. ANN, hybrid, full-text queries, filters, and reranking. The correct choice is a. ann, hybrid, full-text queries, filters, and reranking, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_038",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "name change",
        "AI Search"
      ],
      "question": "What is the current product name for Databricks Vector Search in the docs?",
      "options": [
        {
          "id": "A",
          "text": "Lakeview Search",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the correct choice is B. Databricks AI Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Databricks AI Search",
          "explanation": "Correct. The docs say Databricks AI Search was formerly known as Databricks Vector Search. Exam materials may still use Vector Search. Databricks AI Search / Vector Search is the retrieval/index layer for semantic, hybrid, and keyword-style search over governed data."
        },
        {
          "id": "C",
          "text": "AutoML Search",
          "explanation": "Incorrect. The choice “AutoML Search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Databricks AI Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "DBSQL Search",
          "explanation": "Incorrect. DBSQL is for SQL analytics/warehouses, not automatic endpoint request/response logging. It does not fit here because the correct choice is B. Databricks AI Search, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Databricks AI Search. The correct choice is b. databricks ai search, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_039",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "AI Search",
        "CDF"
      ],
      "question": "For a standard AI Search endpoint, what source-table feature is required according to the docs?",
      "options": [
        {
          "id": "A",
          "text": "Change Data Feed enabled",
          "explanation": "Correct. Databricks AI Search docs require Change Data Feed on source tables for standard endpoints."
        },
        {
          "id": "B",
          "text": "A GPU cluster attached",
          "explanation": "Incorrect. The choice “A GPU cluster attached” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Change Data Feed enabled, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "No primary key",
          "explanation": "Incorrect. The choice “No primary key” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Change Data Feed enabled, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "CSV source only",
          "explanation": "Incorrect. The choice “CSV source only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Change Data Feed enabled, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Change Data Feed enabled. The correct choice is a. change data feed enabled, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_040",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "Delta Sync index"
      ],
      "question": "When setting up a Databricks AI/Vector Search endpoint with managed embeddings and Delta Sync, which function creates the index?",
      "options": [
        {
          "id": "A",
          "text": "client.get_index()",
          "explanation": "Incorrect. The choice “client.get_index()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. client.create_delta_sync_index(), because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "client.create_delta_sync_index()",
          "explanation": "Correct. A Delta Sync index syncs from a Delta table and can compute embeddings with a configured embedding endpoint/model."
        },
        {
          "id": "C",
          "text": "client.create_direct_access_index()",
          "explanation": "Incorrect. The choice “client.create_direct_access_index()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. client.create_delta_sync_index(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "client.similarity_search()",
          "explanation": "Incorrect. The choice “client.similarity_search()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. client.create_delta_sync_index(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. client.create_delta_sync_index(). The correct choice is b. client.create_delta_sync_index(), because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_041",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "LangChain"
      ],
      "question": "Which framework is most suitable for building a multi-step LLM workflow?",
      "options": [
        {
          "id": "A",
          "text": "Pandas",
          "explanation": "Incorrect. Pandas is for tabular data manipulation, not for orchestrating LLM chains/tools. It does not fit here because the correct choice is D. LangChain, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "TensorFlow",
          "explanation": "Incorrect. TensorFlow is a deep learning framework, not the typical LLM chain/orchestration framework here. It does not fit here because the correct choice is D. LangChain, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "PySpark",
          "explanation": "Incorrect. PySpark is for distributed data processing, not defining LLM chains and tool workflows. It does not fit here because the correct choice is D. LangChain, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "LangChain",
          "explanation": "Correct. LangChain is designed for chaining LLM calls, prompts, retrievers, and tools in multi-step workflows. LangChain is a framework for composing prompts, models, tools, retrievers, and chains/agents."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. LangChain. The correct choice is d. langchain, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/integrations/langchain"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_042",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "RAG motivation"
      ],
      "question": "What is a critical prompting failure mode that RAG helps solve? Select THREE.",
      "options": [
        {
          "id": "A",
          "text": "High computational costs",
          "explanation": "Incorrect. The choice “High computational costs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Knowledge cutoff limitations, C. Ambiguity without private context, D. Hallucination when asked for specific facts, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Knowledge cutoff limitations",
          "explanation": "Correct. RAG adds external, private, and current context, reducing cutoff/context gaps and grounding specific factual answers."
        },
        {
          "id": "C",
          "text": "Ambiguity without private context",
          "explanation": "Correct. RAG adds external, private, and current context, reducing cutoff/context gaps and grounding specific factual answers."
        },
        {
          "id": "D",
          "text": "Hallucination when asked for specific facts",
          "explanation": "Correct. RAG adds external, private, and current context, reducing cutoff/context gaps and grounding specific factual answers."
        }
      ],
      "correct_answers": [
        "B",
        "C",
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Knowledge cutoff limitations, C. Ambiguity without private context, D. Hallucination when asked for specific facts. The correct choice is b. knowledge cutoff limitations, c. ambiguity without private context, d. hallucination when asked for specific facts, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_043",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "prompt engineering"
      ],
      "question": "A prompt asks for formatted JSON from emails. Which improves output accuracy the most?",
      "options": [
        {
          "id": "A",
          "text": "Ask for human-readable output",
          "explanation": "Incorrect. Human-readable output is less machine-parseable than explicit JSON for extraction tasks. It does not fit here because the task is structured extraction, so the best prompt should specify the fields and the JSON output shape."
        },
        {
          "id": "B",
          "text": "Give explicit JSON fields plus a concrete example",
          "explanation": "Correct. Structured instructions and few-shot/examples help the model match the desired schema."
        },
        {
          "id": "C",
          "text": "Use no schema to avoid bias",
          "explanation": "Incorrect. The choice “Use no schema to avoid bias” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the task is structured extraction, so the best prompt should specify the fields and the JSON output shape."
        },
        {
          "id": "D",
          "text": "Rely on downstream parsing only",
          "explanation": "Incorrect. The choice “Rely on downstream parsing only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the task is structured extraction, so the best prompt should specify the fields and the JSON output shape."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Give explicit JSON fields plus a concrete example. The task is structured extraction, so the best prompt should specify the fields and the json output shape.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_044",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "few-shot prompting"
      ],
      "question": "An LLM keeps adding an explanation of how it generated a summary. What prompt change best mitigates this?",
      "options": [
        {
          "id": "A",
          "text": "Truncate at newlines after generation",
          "explanation": "Incorrect. The choice “Truncate at newlines after generation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Provide few-shot examples of the desired output format, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Tune chunk size only",
          "explanation": "Incorrect. The choice “Tune chunk size only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Provide few-shot examples of the desired output format, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Re-ingest all documents",
          "explanation": "Incorrect. The choice “Re-ingest all documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Provide few-shot examples of the desired output format, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Provide few-shot examples of the desired output format",
          "explanation": "Correct. Few-shot examples of acceptable responses teach the model the desired format and avoid unwanted meta-explanations."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Provide few-shot examples of the desired output format. The correct choice is d. provide few-shot examples of the desired output format, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_045",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "model selection",
        "privacy"
      ],
      "question": "For a highly confidential internal RAG app where data cannot be sent to third parties and quality matters more than latency, which model choice is most appropriate?",
      "options": [
        {
          "id": "A",
          "text": "OpenAI GPT-4 external API",
          "explanation": "Incorrect. External APIs can violate confidentiality/data-residency constraints if the scenario says data cannot leave the environment. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "B",
          "text": "A self-hosted larger open model such as Llama-family 70B",
          "explanation": "Correct. Confidentiality constraints favor self-hosting/Databricks-governed serving; quality constraints favor a larger model when latency is less important."
        },
        {
          "id": "C",
          "text": "BGE embedding model as generator",
          "explanation": "Incorrect. BGE is an embedding model family; embeddings retrieve/represent text but do not generate final answers by themselves. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "D",
          "text": "Tiny model only because it is cheap",
          "explanation": "Incorrect. The choice “Tiny model only because it is cheap” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Confidentiality constraints favor self-hosting/Databricks-governed serving; quality constraints favor a larger model when latency is less important.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_046",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "perplexity"
      ],
      "question": "A model with a sharp next-token probability peak has what perplexity/confidence behavior?",
      "options": [
        {
          "id": "A",
          "text": "Low perplexity, high confidence",
          "explanation": "Correct. Perplexity is lower when the model assigns high probability to the observed/next token, indicating lower uncertainty. Perplexity reflects how uncertain a model is about token prediction; lower perplexity generally means more confident predictions."
        },
        {
          "id": "B",
          "text": "Low perplexity, low confidence",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the correct choice is A. Low perplexity, high confidence, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "High perplexity, low confidence",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the correct choice is A. Low perplexity, high confidence, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "High perplexity, high confidence",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the correct choice is A. Low perplexity, high confidence, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Low perplexity, high confidence. The correct choice is a. low perplexity, high confidence, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_047",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "model memory"
      ],
      "question": "For a 10B parameter model at FP32, roughly how much GPU RAM is needed just for one copy of weights?",
      "options": [
        {
          "id": "A",
          "text": "~40 GB",
          "explanation": "Correct. FP32 uses 4 bytes/parameter. 10B x 4 bytes = about 40GB before KV cache, activations, and overhead."
        },
        {
          "id": "B",
          "text": "~10 GB",
          "explanation": "Incorrect. ~10GB is too low for 10B FP32 weights; FP32 uses 4 bytes per parameter. It does not fit here because the correct choice is A. ~40 GB, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "~20 GB",
          "explanation": "Incorrect. ~20GB is closer to FP16/BF16 storage for 10B parameters, not FP32. It does not fit here because the correct choice is A. ~40 GB, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "~80 GB",
          "explanation": "Incorrect. ~80GB overestimates the simple FP32 weight-only calculation for 10B parameters. It does not fit here because the correct choice is A. ~40 GB, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. ~40 GB. The correct choice is a. ~40 gb, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_048",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "vLLM"
      ],
      "question": "Which open-source integration is highlighted as transformer-friendly and memory-efficient for inference on NVIDIA and AMD GPUs?",
      "options": [
        {
          "id": "A",
          "text": "vLLM",
          "explanation": "Correct. vLLM is an OSS LLM inference/serving library known for memory-efficient transformer inference. vLLM is an open-source inference/serving library for memory-efficient LLM inference."
        },
        {
          "id": "B",
          "text": "Ray on Spark",
          "explanation": "Incorrect. Ray on Spark is for distributed Ray workloads, not the transformer-friendly inference library in this question. It does not fit here because the correct choice is A. vLLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "TensorRT",
          "explanation": "Incorrect. TensorRT is an NVIDIA optimization stack, but the highlighted OSS transformer inference library here is vLLM. It does not fit here because the correct choice is A. vLLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "MLServer",
          "explanation": "Incorrect. MLServer is a model serving runtime, not the highlighted transformer inference library. It does not fit here because the correct choice is A. vLLM, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. vLLM. The correct choice is a. vllm, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_049",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "agent frameworks"
      ],
      "question": "Which is NOT a supported agent authoring framework mentioned in the course?",
      "options": [
        {
          "id": "A",
          "text": "LangChain",
          "explanation": "Incorrect. LangChain composes prompts, retrievers, tools, chains, and multi-step LLM workflows. It does not fit here because the correct choice is C. TensorFlow Agents, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "OpenAI",
          "explanation": "Incorrect. The choice “OpenAI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. TensorFlow Agents, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "TensorFlow Agents",
          "explanation": "Correct. LangChain, OpenAI, and DSPy are common GenAI/agent authoring integrations; TensorFlow Agents is not the framework highlighted in this course context."
        },
        {
          "id": "D",
          "text": "DSPy",
          "explanation": "Incorrect. The choice “DSPy” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. TensorFlow Agents, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. LangChain, OpenAI, and DSPy are common GenAI/agent authoring integrations; TensorFlow Agents is not the framework highlighted in this course context.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/tutorials/agent-quickstart"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_050",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "agents",
        "tools"
      ],
      "question": "How should an agent combine capabilities for general team info, event dates from an API, and current standings in tables?",
      "options": [
        {
          "id": "A",
          "text": "Only RAG over PDFs",
          "explanation": "Incorrect. The choice “Only RAG over PDFs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Use an agent with tools for RAG, API calls, and table/SQL access, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use an agent with tools for RAG, API calls, and table/SQL access",
          "explanation": "Correct. Agents are useful when the system must decide among multiple tools/actions for a query."
        },
        {
          "id": "C",
          "text": "Put all dates and standings into the system prompt",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the correct choice is B. Use an agent with tools for RAG, API calls, and table/SQL access, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ask the LLM to guess the answer",
          "explanation": "Incorrect. The choice “Ask the LLM to guess the answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Use an agent with tools for RAG, API calls, and table/SQL access, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Use an agent with tools for RAG, API calls, and table/SQL access. The correct choice is b. use an agent with tools for rag, api calls, and table/sql access, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_051",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "guardrails",
        "Llama Guard"
      ],
      "question": "What description best characterizes Llama Guard as a safeguard model?",
      "options": [
        {
          "id": "A",
          "text": "A grammar post-processor only",
          "explanation": "Incorrect. The choice “A grammar post-processor only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "B",
          "text": "A keyword filter with a static banned list",
          "explanation": "Incorrect. The choice “A keyword filter with a static banned list” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "An LLM-based classifier using risk taxonomy/guidelines for prompts and responses",
          "explanation": "Correct. Llama Guard is used as a safety classifier rather than a simple grammar script or static keyword list. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "D",
          "text": "A vector database tool",
          "explanation": "Incorrect. A vector database/search index stores embeddings for retrieval; it is not Lakehouse Monitoring. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. An LLM-based classifier using risk taxonomy/guidelines for prompts and responses. The scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_052",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "guardrails"
      ],
      "question": "Which guardrail technique helps protect against malicious user inputs?",
      "options": [
        {
          "id": "A",
          "text": "Safety filter/moderation that detects harmful inputs and refuses or routes appropriately",
          "explanation": "Correct. Input moderation/safety filters are a standard guardrail for malicious or unsafe user content."
        },
        {
          "id": "B",
          "text": "Increase GPU compute",
          "explanation": "Incorrect. The choice “Increase GPU compute” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Allow all input but shorten responses",
          "explanation": "Incorrect. The choice “Allow all input but shorten responses” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Disable logging",
          "explanation": "Incorrect. The choice “Disable logging” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Safety filter/moderation that detects harmful inputs and refuses or routes appropriately. The scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_053",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "data leakage",
        "guardrails"
      ],
      "question": "An internal policy bot must not leak confidential data. Which mitigation should NOT be relied on by itself?",
      "options": [
        {
          "id": "A",
          "text": "Output guardrails",
          "explanation": "Incorrect. Output guardrails filter or block unsafe/leaky generated responses before display. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "B",
          "text": "Fine-tuning and hoping the model learns what is appropriate",
          "explanation": "Correct. Fine-tuning alone is not a reliable access-control or leakage-prevention mechanism."
        },
        {
          "id": "C",
          "text": "User-level data access limits",
          "explanation": "Incorrect. User-level data access limits prevent users from retrieving unauthorized data. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "D",
          "text": "Strong system prompt",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Fine-tuning and hoping the model learns what is appropriate. The scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_054",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "licensing"
      ],
      "question": "Which action is NOT appropriate to avoid legal risks with training data licenses?",
      "options": [
        {
          "id": "A",
          "text": "Use original data you created",
          "explanation": "Incorrect. The choice “Use original data you created” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Start using the model first and contact curators afterward, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use open-licensed data and follow terms",
          "explanation": "Incorrect. The choice “Use open-licensed data and follow terms” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Start using the model first and contact curators afterward, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Contact data curators before use if needed",
          "explanation": "Incorrect. Contacting curators before use can clarify permissions; doing it only after use is not safe risk control. It does not fit here because the correct choice is D. Start using the model first and contact curators afterward, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Start using the model first and contact curators afterward",
          "explanation": "Correct. License clearance should happen before using data/trained models, not after deployment."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Start using the model first and contact curators afterward. The correct choice is d. start using the model first and contact curators afterward, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_055",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "Unity Catalog",
        "governance"
      ],
      "question": "How does Unity Catalog support governance of GenAI applications regarding vector search and retrieval?",
      "options": [
        {
          "id": "A",
          "text": "It rewrites toxic prompts",
          "explanation": "Incorrect. The choice “It rewrites toxic prompts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It governs vector/AI Search indexes, models, functions, permissions, and lineage, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It governs vector/AI Search indexes, models, functions, permissions, and lineage",
          "explanation": "Correct. Unity Catalog provides centralized governance, access control, lineage, and discovery for data/assets including models and related GenAI resources."
        },
        {
          "id": "C",
          "text": "It encrypts GPU memory only",
          "explanation": "Incorrect. The choice “It encrypts GPU memory only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It governs vector/AI Search indexes, models, functions, permissions, and lineage, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It provides a proprietary LLM-as-judge for embeddings",
          "explanation": "Incorrect. The choice “It provides a proprietary LLM-as-judge for embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It governs vector/AI Search indexes, models, functions, permissions, and lineage, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Unity Catalog provides centralized governance, access control, lineage, and discovery for data/assets including models and related GenAI resources.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/",
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_056",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "DASF"
      ],
      "question": "Within the Data and AI Security Framework, which component focuses on data-asset governance via centralized access control, lineage, and auditing?",
      "options": [
        {
          "id": "A",
          "text": "Model Management",
          "explanation": "Incorrect. Model Management governs model versions/aliases/serving lifecycle, not primarily data assets. It does not fit here because the correct choice is D. Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Algorithm",
          "explanation": "Incorrect. Algorithm refers to model logic/methods, not the catalog governance layer. It does not fit here because the correct choice is D. Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Evaluation",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the correct choice is D. Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Catalog",
          "explanation": "Correct. Catalog is the governance layer for data assets, access, lineage, and auditing. Catalog refers to governance of data assets through centralized discovery, permissions, lineage, and auditing."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Catalog. The correct choice is d. catalog, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_057",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "DASF",
        "AI security"
      ],
      "question": "What stakeholder gap is explicitly a challenge in AI security?",
      "options": [
        {
          "id": "A",
          "text": "Cloud providers do not encrypt vector databases",
          "explanation": "Incorrect. A vector database/search index stores embeddings for retrieval; it is not Lakehouse Monitoring. It does not fit here because the correct choice is C. Data scientists often have not performed security tasks, and security teams are often new to AI architectures, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Legal teams refuse to review model code",
          "explanation": "Incorrect. The choice “Legal teams refuse to review model code” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Data scientists often have not performed security tasks, and security teams are often new to AI architectures, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Data scientists often have not performed security tasks, and security teams are often new to AI architectures",
          "explanation": "Correct. AI security is hard because expertise is split: DS teams may lack security practice and security teams may lack AI architecture familiarity."
        },
        {
          "id": "D",
          "text": "Executives always prioritize speed over compliance",
          "explanation": "Incorrect. The choice “Executives always prioritize speed over compliance” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Data scientists often have not performed security tasks, and security teams are often new to AI architectures, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Data scientists often have not performed security tasks, and security teams are often new to AI architectures. The correct choice is c. data scientists often have not performed security tasks, and security teams are often new to ai architectures, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_058",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "answer relevancy"
      ],
      "question": "What does Answer Relevancy assess in a RAG pipeline?",
      "options": [
        {
          "id": "A",
          "text": "Semantic similarity to ground truth",
          "explanation": "Incorrect. The choice “Semantic similarity to ground truth” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response addresses the user query intent."
        },
        {
          "id": "B",
          "text": "N-gram overlap with context",
          "explanation": "Incorrect. The choice “N-gram overlap with context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response addresses the user query intent."
        },
        {
          "id": "C",
          "text": "Alignment of the generated response with the user's query intent",
          "explanation": "Correct. Answer relevancy checks whether the answer addresses what the user asked."
        },
        {
          "id": "D",
          "text": "Whether retrieved documents contain the answer",
          "explanation": "Incorrect. The choice “Whether retrieved documents contain the answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response addresses the user query intent."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Alignment of the generated response with the user's query intent. The metric asks whether the generated response addresses the user query intent.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_059",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "faithfulness",
        "correctness"
      ],
      "question": "How does Answer Correctness differ from Faithfulness?",
      "options": [
        {
          "id": "A",
          "text": "Faithfulness compares to ground truth; correctness compares to context",
          "explanation": "Incorrect. Faithfulness checks whether the answer is grounded in the retrieved context. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "B",
          "text": "Correctness requires ground truth; faithfulness checks whether the answer is supported by retrieved context",
          "explanation": "Correct. Answer correctness evaluates accuracy against a reference/ground truth; faithfulness evaluates whether the response is grounded in the provided context."
        },
        {
          "id": "C",
          "text": "They are synonyms",
          "explanation": "Incorrect. The choice “They are synonyms” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "D",
          "text": "Faithfulness only works online",
          "explanation": "Incorrect. Faithfulness checks whether the answer is grounded in the retrieved context. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Answer correctness evaluates accuracy against a reference/ground truth; faithfulness evaluates whether the response is grounded in the provided context.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_060",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "faithfulness"
      ],
      "question": "Which RAG metric measures factual support relative to provided context without requiring ground truth?",
      "options": [
        {
          "id": "A",
          "text": "Faithfulness",
          "explanation": "Correct. Faithfulness checks whether generated claims are supported by the retrieved/provided context. Faithfulness checks whether the generated answer is supported by the retrieved/provided context, without requiring ground truth."
        },
        {
          "id": "B",
          "text": "Answer Correctness",
          "explanation": "Incorrect. Answer Correctness compares the answer with a reference/ground-truth answer, so it requires labels or expected answers. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "C",
          "text": "Context Recall",
          "explanation": "Incorrect. Context Recall measures whether the retrieved context contains the information needed to answer the question. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "D",
          "text": "Toxicity",
          "explanation": "Incorrect. Toxicity measures harmful/offensive content; it does not measure factual grounding in context. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Faithfulness. The metric asks whether the generated response is grounded in the retrieved context.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_061",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "BLEU",
        "ROUGE"
      ],
      "question": "What is a shared limitation of BLEU and ROUGE for GenAI evaluation?",
      "options": [
        {
          "id": "A",
          "text": "They rely on LLM-as-judge",
          "explanation": "Incorrect. The choice “They rely on LLM-as-judge” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. They require references and rely on n-gram overlap rather than semantic understanding, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "They require references and rely on n-gram overlap rather than semantic understanding",
          "explanation": "Correct. BLEU/ROUGE compare textual overlap with references and can miss semantically correct paraphrases."
        },
        {
          "id": "C",
          "text": "They only work in Mosaic AI",
          "explanation": "Incorrect. The choice “They only work in Mosaic AI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. They require references and rely on n-gram overlap rather than semantic understanding, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "They only apply to image generation",
          "explanation": "Incorrect. The choice “They only apply to image generation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. They require references and rely on n-gram overlap rather than semantic understanding, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. They require references and rely on n-gram overlap rather than semantic understanding. The correct choice is b. they require references and rely on n-gram overlap rather than semantic understanding, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_062",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "LLM judge",
        "human review"
      ],
      "question": "When using LLM-as-a-judge without reference data for complex cases, what improves reliability?",
      "options": [
        {
          "id": "A",
          "text": "Rely only on toxicity",
          "explanation": "Incorrect. Toxicity measures harmful/offensive language, not retrieval or answer accuracy. It does not fit here because the correct choice is B. Use human-in-the-loop review/calibration, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use human-in-the-loop review/calibration",
          "explanation": "Correct. Human review and clear rubrics help calibrate ambiguous LLM-generated judgments. Human-in-the-loop review helps validate ambiguous LLM-as-a-judge outputs and calibrate evaluation quality."
        },
        {
          "id": "C",
          "text": "Use the smallest possible model",
          "explanation": "Incorrect. The choice “Use the smallest possible model” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Use human-in-the-loop review/calibration, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Avoid rubrics",
          "explanation": "Incorrect. The choice “Avoid rubrics” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Use human-in-the-loop review/calibration, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Use human-in-the-loop review/calibration. The correct choice is b. use human-in-the-loop review/calibration, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_063",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "ground truth"
      ],
      "question": "Which evaluation judges/metrics typically require ground truth?",
      "options": [
        {
          "id": "A",
          "text": "Answer correctness",
          "explanation": "Correct. Answer correctness compares the model answer against an expected/reference answer. Answer Correctness compares the answer with a reference/ground-truth answer, so it requires labels or expected answers."
        },
        {
          "id": "B",
          "text": "Faithfulness",
          "explanation": "Incorrect. Faithfulness checks whether the answer is supported by the retrieved/provided context. It does not fit here because the correct choice is A. Answer correctness, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Latency",
          "explanation": "Incorrect. The choice “Latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Answer correctness, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Toxicity",
          "explanation": "Incorrect. Toxicity measures harmful/offensive language, not retrieval or answer accuracy. It does not fit here because the correct choice is A. Answer correctness, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Answer correctness. The correct choice is a. answer correctness, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_064",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "monitoring"
      ],
      "question": "What should be monitored for a customer-service LLM application in production?",
      "options": [
        {
          "id": "A",
          "text": "Number of customer inquiries processed per unit time",
          "explanation": "Correct. Production monitoring should include operational metrics relevant to the business workflow, like throughput/volume and latency/errors."
        },
        {
          "id": "B",
          "text": "Final training perplexity only",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "HuggingFace leaderboard value",
          "explanation": "Incorrect. The choice “HuggingFace leaderboard value” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Energy usage per query only",
          "explanation": "Incorrect. The choice “Energy usage per query only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Number of customer inquiries processed per unit time. The scenario asks for operational monitoring of requests, responses, quality, cost, or drift.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_065",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "inference tables"
      ],
      "question": "Which Databricks feature logs requests and responses from model services into Unity Catalog Delta tables for monitoring/debugging?",
      "options": [
        {
          "id": "A",
          "text": "Vector Search",
          "explanation": "Incorrect. The choice “Vector Search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Lakeview only",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Inference Tables",
          "explanation": "Correct. Unity AI Gateway inference tables log request/response payloads to UC Delta tables for monitoring, debugging, optimization, and compliance. Inference Tables log model serving requests and responses for monitoring, debugging, and evaluation."
        },
        {
          "id": "D",
          "text": "AutoML",
          "explanation": "Incorrect. The choice “AutoML” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Inference Tables. The scenario asks for operational monitoring of requests, responses, quality, cost, or drift.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_066",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "inference tables",
        "monitoring"
      ],
      "question": "Before enabling Lakehouse Monitoring on GenAI response logs, what data engineering step is often needed after capturing an inference table?",
      "options": [
        {
          "id": "A",
          "text": "Drop and recreate the table",
          "explanation": "Incorrect. The choice “Drop and recreate the table” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Convert all data to CSV",
          "explanation": "Incorrect. The choice “Convert all data to CSV” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Unpack/flatten raw JSON payloads into structured columns",
          "explanation": "Correct. Monitoring metrics generally need structured columns such as prompt, response, timestamps, latency, and status extracted from nested JSON logs."
        },
        {
          "id": "D",
          "text": "Manually label every row",
          "explanation": "Incorrect. The choice “Manually label every row” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Monitoring metrics generally need structured columns such as prompt, response, timestamps, latency, and status extracted from nested JSON logs.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_067",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "Lakehouse Monitoring"
      ],
      "question": "What is the primary purpose of Databricks Lakehouse Monitoring for data/ML pipelines?",
      "options": [
        {
          "id": "A",
          "text": "Manage CI/CD Asset Bundles",
          "explanation": "Incorrect. CI/CD handles deployments, not monitoring metrics/dashboards by itself. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Automatically retrain models whenever accuracy drops",
          "explanation": "Incorrect. The choice “Automatically retrain models whenever accuracy drops” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Provide automated insights and out-of-the-box profile/drift metrics via dashboards",
          "explanation": "Correct. Lakehouse Monitoring is for automated monitoring insights/metrics such as profile and drift, not automatic retraining by itself."
        },
        {
          "id": "D",
          "text": "Serve as a vector database",
          "explanation": "Incorrect. A vector database/search index stores embeddings for retrieval; it is not Lakehouse Monitoring. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: C. Provide automated insights and out-of-the-box profile/drift metrics via dashboards. The scenario asks for operational monitoring of requests, responses, quality, cost, or drift.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_068",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "testing",
        "monitoring"
      ],
      "question": "In the Testing stage for Lakehouse Monitoring workflows, what is recommended?",
      "options": [
        {
          "id": "A",
          "text": "Use production data to establish final baseline",
          "explanation": "Incorrect. The choice “Use production data to establish final baseline” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Disable monitoring",
          "explanation": "Incorrect. The choice “Disable monitoring” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only monitor CPU/RAM",
          "explanation": "Incorrect. The choice “Only monitor CPU/RAM” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Develop integration tests that run a few iterations to ensure metrics work",
          "explanation": "Correct. Testing should validate that monitoring pipelines, metrics, and dashboards run end-to-end before production use."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Develop integration tests that run a few iterations to ensure metrics work. The scenario asks for operational monitoring of requests, responses, quality, cost, or drift.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_069",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "AI Gateway"
      ],
      "question": "Which Unity AI Gateway features help control and observe LLM/API usage?",
      "options": [
        {
          "id": "A",
          "text": "Usage tracking, payload logging/inference tables, rate limits, and guardrails",
          "explanation": "Correct. AI Gateway is the governance/control plane for LLM endpoints with usage tracking, payload logging, rate limits, and guardrails. Inference Tables log model serving requests and responses for monitoring, debugging, and evaluation."
        },
        {
          "id": "B",
          "text": "Only embeddings",
          "explanation": "Incorrect. The choice “Only embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Usage tracking, payload logging/inference tables, rate limits, and guardrails, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only notebook widgets",
          "explanation": "Incorrect. The choice “Only notebook widgets” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Usage tracking, payload logging/inference tables, rate limits, and guardrails, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only SQL warehouses",
          "explanation": "Incorrect. The choice “Only SQL warehouses” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Usage tracking, payload logging/inference tables, rate limits, and guardrails, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Usage tracking, payload logging/inference tables, rate limits, and guardrails. The correct choice is a. usage tracking, payload logging/inference tables, rate limits, and guardrails, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_070",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "rate limits"
      ],
      "question": "After accidentally running thousands of Foundation Model API queries, what control should prevent recurrence?",
      "options": [
        {
          "id": "A",
          "text": "Prompt the LLM to refuse too many calls",
          "explanation": "Incorrect. The choice “Prompt the LLM to refuse too many calls” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Configure rate limiting on the endpoint/service, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Require manual code reviews only",
          "explanation": "Incorrect. The choice “Require manual code reviews only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Configure rate limiting on the endpoint/service, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Build a custom proxy only",
          "explanation": "Incorrect. The choice “Build a custom proxy only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Configure rate limiting on the endpoint/service, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Configure rate limiting on the endpoint/service",
          "explanation": "Correct. Rate limiting is the platform control designed to cap usage and prevent runaway requests. Rate limiting controls traffic and cost by restricting request volume to serving endpoints."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Configure rate limiting on the endpoint/service. The correct choice is d. configure rate limiting on the endpoint/service, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_071",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "ai_query"
      ],
      "question": "Which AI function is commonly used for batch inference workloads from SQL on Databricks?",
      "options": [
        {
          "id": "A",
          "text": "ai_query()",
          "explanation": "Correct. The exam guide explicitly lists ai_query() for batch inference workloads; Model Serving docs also describe AI Functions/ai-query integration."
        },
        {
          "id": "B",
          "text": "dbutils.ai()",
          "explanation": "Incorrect. The choice “dbutils.ai()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "spark_ai_call()",
          "explanation": "Incorrect. The choice “spark_ai_call()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "llm.predict_sql()",
          "explanation": "Incorrect. The choice “llm.predict_sql()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. The exam guide explicitly lists ai_query() for batch inference workloads; Model Serving docs also describe AI Functions/ai-query integration.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_072",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "RAG architecture"
      ],
      "question": "What is the least-effort architecture for a QA app that must answer from frequently updated documents at low cost?",
      "options": [
        {
          "id": "A",
          "text": "Prompt + retriever + LLM, inserting retrieved context into the prompt",
          "explanation": "Correct. RAG avoids repeated fine-tuning by retrieving current documents and injecting them into the prompt. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Fine-tune the LLM after every document update",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. Prompt + retriever + LLM, inserting retrieved context into the prompt, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Prompt only, no retrieval",
          "explanation": "Incorrect. The choice “Prompt only, no retrieval” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt + retriever + LLM, inserting retrieved context into the prompt, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Agent + fine-tuned LLM only",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. Prompt + retriever + LLM, inserting retrieved context into the prompt, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Prompt + retriever + LLM, inserting retrieved context into the prompt. The correct choice is a. prompt + retriever + llm, inserting retrieved context into the prompt, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_073",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "RAG troubleshooting"
      ],
      "question": "A RAG app returns information about the wrong product. What should the engineer assess first?",
      "options": [
        {
          "id": "A",
          "text": "Retrieved context quality/relevance",
          "explanation": "Correct. Irrelevant answers often originate from irrelevant retrieval, so inspect retrieved context quality first."
        },
        {
          "id": "B",
          "text": "Only output grammar",
          "explanation": "Incorrect. The choice “Only output grammar” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Retrieved context quality/relevance, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Training loss from the base model",
          "explanation": "Incorrect. The choice “Training loss from the base model” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Retrieved context quality/relevance, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "GPU memory only",
          "explanation": "Incorrect. The choice “GPU memory only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Retrieved context quality/relevance, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Retrieved context quality/relevance. The correct choice is a. retrieved context quality/relevance, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_074",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "source selection"
      ],
      "question": "Which source documents best support a HelpDesk chatbot that must identify ticket root cause and resolution? Select TWO.",
      "options": [
        {
          "id": "A",
          "text": "Customer usage history for chargebacks",
          "explanation": "Incorrect. The choice “Customer usage history for chargebacks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Call detail table with root_cause/resolution, E. Transcript text volume, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Maintenance schedule/outages",
          "explanation": "Incorrect. The choice “Maintenance schedule/outages” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Call detail table with root_cause/resolution, E. Transcript text volume, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Representative call duration table",
          "explanation": "Incorrect. The choice “Representative call duration table” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Call detail table with root_cause/resolution, E. Transcript text volume, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Call detail table with root_cause/resolution",
          "explanation": "Correct. Root cause/resolution fields and call transcripts directly contain the knowledge needed to diagnose and resolve tickets."
        },
        {
          "id": "E",
          "text": "Transcript text volume",
          "explanation": "Correct. Root cause/resolution fields and call transcripts directly contain the knowledge needed to diagnose and resolve tickets."
        }
      ],
      "correct_answers": [
        "D",
        "E"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Call detail table with root_cause/resolution, E. Transcript text volume. The correct choice is d. call detail table with root_cause/resolution, e. transcript text volume, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_075",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "business requirements"
      ],
      "question": "Which input/output pair best supports a restaurant chatbot goal of reducing escalations and phone calls while keeping personalization?",
      "options": [
        {
          "id": "A",
          "text": "Input chat logs; output grouped summaries of each user's interactions",
          "explanation": "Incorrect. The choice “Input chat logs; output grouped summaries of each user's interactions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Input chat logs; output booking-detail choices/buttons, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Input chat logs; output booking-detail choices/buttons",
          "explanation": "Correct. For common booking inquiries, a guided conversational flow with booking choices supports task completion and reduces human escalation."
        },
        {
          "id": "C",
          "text": "Input reviews; output sentiment",
          "explanation": "Incorrect. The choice “Input reviews; output sentiment” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Input chat logs; output booking-detail choices/buttons, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Input chat logs; output cancellation options only",
          "explanation": "Incorrect. The choice “Input chat logs; output cancellation options only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Input chat logs; output booking-detail choices/buttons, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Input chat logs; output booking-detail choices/buttons. The correct choice is b. input chat logs; output booking-detail choices/buttons, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_076",
      "source": "Curated official-doc practice",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "pyfunc",
        "preprocessing"
      ],
      "question": "What is an effective way to preprocess prompts with custom code before sending to an LLM?",
      "options": [
        {
          "id": "A",
          "text": "Modify the LLM architecture",
          "explanation": "Incorrect. The choice “Modify the LLM architecture” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Wrap preprocessing and prediction in an MLflow PyFunc model, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Avoid preprocessing always",
          "explanation": "Incorrect. The choice “Avoid preprocessing always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Wrap preprocessing and prediction in an MLflow PyFunc model, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only postprocess outputs",
          "explanation": "Incorrect. The choice “Only postprocess outputs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is D. Wrap preprocessing and prediction in an MLflow PyFunc model, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Wrap preprocessing and prediction in an MLflow PyFunc model",
          "explanation": "Correct. A PyFunc model can implement preprocessing, call the LLM, then postprocess while exposing a standard predict interface."
        }
      ],
      "correct_answers": [
        "D"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: D. Wrap preprocessing and prediction in an MLflow PyFunc model. The correct choice is d. wrap preprocessing and prediction in an mlflow pyfunc model, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_077",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "tools",
        "fresh data"
      ],
      "question": "For a query requiring latest sports scores, what kind of tool should an agent use?",
      "options": [
        {
          "id": "A",
          "text": "Static vector store only",
          "explanation": "Incorrect. A vector store is useful for semantic retrieval over unstructured text, but it may not solve structured lookup needs unless it contains the exact facts. It does not fit here because the correct choice is B. Real-time API/structured serving tool, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Real-time API/structured serving tool",
          "explanation": "Correct. Fresh, rapidly changing facts require live/structured data access through a tool rather than static training knowledge."
        },
        {
          "id": "C",
          "text": "Fine-tuning dataset",
          "explanation": "Incorrect. The choice “Fine-tuning dataset” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Real-time API/structured serving tool, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Prompt-only memory",
          "explanation": "Incorrect. The choice “Prompt-only memory” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. Real-time API/structured serving tool, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Real-time API/structured serving tool. The correct choice is b. real-time api/structured serving tool, because it best satisfies the scenario constraints.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_078",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "evaluation",
        "monitoring"
      ],
      "question": "Which pair best separates evaluation vs monitoring in the GenAI lifecycle?",
      "options": [
        {
          "id": "A",
          "text": "Evaluation is pre/post-release quality testing; monitoring tracks live production behavior over time",
          "explanation": "Correct. Evaluation measures quality during development/testing; monitoring observes deployed app behavior, drift, usage, latency, cost, and quality signals over time."
        },
        {
          "id": "B",
          "text": "Evaluation only checks CPU; monitoring only checks grammar",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "They are identical",
          "explanation": "Incorrect. The choice “They are identical” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Monitoring is only for training jobs",
          "explanation": "Incorrect. The choice “Monitoring is only for training jobs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Evaluation measures quality during development/testing; monitoring observes deployed app behavior, drift, usage, latency, cost, and quality signals over time.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_079",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Foundation Model APIs"
      ],
      "question": "Which Databricks product can serve Databricks-hosted foundation models like Meta Llama through pay-per-token or provisioned throughput?",
      "options": [
        {
          "id": "A",
          "text": "Foundation Model APIs",
          "explanation": "Correct. Databricks Foundation Model APIs expose curated hosted foundation models with pay-per-token or provisioned throughput options. Foundation Model APIs provide hosted access to supported foundation models for generative AI tasks."
        },
        {
          "id": "B",
          "text": "Delta Sharing",
          "explanation": "Incorrect. The choice “Delta Sharing” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Foundation Model APIs, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Auto Loader",
          "explanation": "Incorrect. The choice “Auto Loader” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Foundation Model APIs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Lakeview",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the correct choice is A. Foundation Model APIs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Foundation Model APIs. The correct choice is a. foundation model apis, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_080",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "External Models"
      ],
      "question": "Which option describes External Models in Databricks Model Serving?",
      "options": [
        {
          "id": "A",
          "text": "Models hosted outside Databricks, such as OpenAI or Anthropic, governed/queryable through Databricks",
          "explanation": "Correct. External models let Databricks centrally manage access to models hosted by external providers."
        },
        {
          "id": "B",
          "text": "Only models stored in DBFS",
          "explanation": "Incorrect. The choice “Only models stored in DBFS” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, such as OpenAI or Anthropic, governed/queryable through Databricks, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only scikit-learn models",
          "explanation": "Incorrect. The choice “Only scikit-learn models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, such as OpenAI or Anthropic, governed/queryable through Databricks, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only private Hugging Face weights downloaded locally",
          "explanation": "Incorrect. The choice “Only private Hugging Face weights downloaded locally” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, such as OpenAI or Anthropic, governed/queryable through Databricks, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Models hosted outside Databricks, such as OpenAI or Anthropic, governed/queryable through Databricks. The correct choice is a. models hosted outside databricks, such as openai or anthropic, governed/queryable through databricks, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_081",
      "source": "Curated official-doc practice",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "traffic split"
      ],
      "question": "A serving endpoint hosts model A at 90% traffic and challenger model B at 10%. What strategy is this?",
      "options": [
        {
          "id": "A",
          "text": "Canary/A-B deployment",
          "explanation": "Correct. Traffic split lets teams compare challenger behavior while keeping most traffic on current production model."
        },
        {
          "id": "B",
          "text": "Chunking",
          "explanation": "Incorrect. The choice “Chunking” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Canary/A-B deployment, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Tokenization",
          "explanation": "Incorrect. The choice “Tokenization” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Canary/A-B deployment, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Canary/A-B deployment, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Canary/A-B deployment. The correct choice is a. canary/a-b deployment, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_082",
      "source": "Curated official-doc practice",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "traces",
        "dataset collection"
      ],
      "question": "Which data can production MLflow traces provide for future evaluation datasets?",
      "options": [
        {
          "id": "A",
          "text": "Inputs, outputs, tool/retriever steps, latency, tokens, and metadata from real requests",
          "explanation": "Correct. Traces capture rich request-level behavior that can be converted into evaluation datasets and debugging evidence."
        },
        {
          "id": "B",
          "text": "Only notebook cell outputs",
          "explanation": "Incorrect. The choice “Only notebook cell outputs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only training loss curves",
          "explanation": "Incorrect. The choice “Only training loss curves” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Only feature distributions",
          "explanation": "Incorrect. The choice “Only feature distributions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. Inputs, outputs, tool/retriever steps, latency, tokens, and metadata from real requests. The scenario asks for operational monitoring of requests, responses, quality, cost, or drift.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_083",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "chunk overlap"
      ],
      "question": "Why is chunk overlap used in document splitting?",
      "options": [
        {
          "id": "A",
          "text": "To preserve context across chunk boundaries",
          "explanation": "Correct. Overlap helps avoid losing context when important information spans chunk boundaries, though too much overlap increases record count/cost."
        },
        {
          "id": "B",
          "text": "To reduce all embedding records",
          "explanation": "Incorrect. The choice “To reduce all embedding records” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "To remove duplicate facts completely",
          "explanation": "Incorrect. The choice “To remove duplicate facts completely” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "To make HTML parsing easier",
          "explanation": "Incorrect. The choice “To make HTML parsing easier” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. To preserve context across chunk boundaries. The question is about how chunking choices affect retrieval quality, context size, and vector record count.",
      "source_links": [
        "Databricks Certified Generative AI Engineer Associate Exam Guide (uploaded PDF, Mar 18 2026)"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_084",
      "source": "Curated official-doc practice",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "reranking",
        "latency"
      ],
      "question": "When latency is critical, what is a tradeoff of enabling reranking?",
      "options": [
        {
          "id": "A",
          "text": "It can improve relevance but adds an extra ranking step/latency",
          "explanation": "Correct. Reranking is a quality optimization that often adds computation after initial retrieval."
        },
        {
          "id": "B",
          "text": "It removes all latency",
          "explanation": "Incorrect. The choice “It removes all latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It can improve relevance but adds an extra ranking step/latency, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It replaces the LLM",
          "explanation": "Incorrect. The choice “It replaces the LLM” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It can improve relevance but adds an extra ranking step/latency, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It disables filters",
          "explanation": "Incorrect. The choice “It disables filters” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It can improve relevance but adds an extra ranking step/latency, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: A. It can improve relevance but adds an extra ranking step/latency. The correct choice is a. it can improve relevance but adds an extra ranking step/latency, because it best satisfies the scenario constraints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "CUR_085",
      "source": "Curated official-doc practice",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "access control",
        "RAG"
      ],
      "question": "Which is the right governance pattern for a RAG app over confidential documents?",
      "options": [
        {
          "id": "A",
          "text": "Index all docs and rely on prompt instructions only",
          "explanation": "Incorrect. The choice “Index all docs and rely on prompt instructions only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "B",
          "text": "Apply user-level access controls and retrieve only content the user is allowed to see",
          "explanation": "Correct. Governed retrieval should respect the user's permissions before content is exposed to the LLM or user."
        },
        {
          "id": "C",
          "text": "Let the LLM decide if content is confidential",
          "explanation": "Incorrect. The choice “Let the LLM decide if content is confidential” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "D",
          "text": "Publish the documents publicly",
          "explanation": "Incorrect. The choice “Publish the documents publicly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Origin: Curated official-doc practice. Correct answer: B. Apply user-level access controls and retrieve only content the user is allowed to see. The scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "origin": "Curated official-doc practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; validated against official Databricks docs where linked",
      "public_safe_note": "Public source or original generated question. Not a live/proctored exam item."
    },
    {
      "id": "ADD_001",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "agents",
        "tools"
      ],
      "question": "A product team needs an LLM app that must decide whether to search documents, call an order-status API, or query a SQL table before answering. Which design is most appropriate?",
      "options": [
        {
          "id": "A",
          "text": "A single prompt that asks the model to memorize all data",
          "explanation": "Incorrect. The choice “A single prompt that asks the model to memorize all data” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. An agent with clearly described tools and schemas for each action, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "An agent with clearly described tools and schemas for each action",
          "explanation": "Correct. The requirement is multi-step tool selection. An agent with documented tools lets the model choose retrieval, API calls, or SQL as needed."
        },
        {
          "id": "C",
          "text": "Fine-tune a model on every possible user question",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is B. An agent with clearly described tools and schemas for each action, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A vector index only, with no tool descriptions",
          "explanation": "Incorrect. The choice “A vector index only, with no tool descriptions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. An agent with clearly described tools and schemas for each action, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "The requirement is multi-step tool selection. An agent with documented tools lets the model choose retrieval, API calls, or SQL as needed.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_002",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "RAG",
        "requirements"
      ],
      "question": "A manager asks for “a chatbot that answers HR policy questions from PDFs.” Which high-level pipeline best maps the business goal to inputs/outputs?",
      "options": [
        {
          "id": "A",
          "text": "PDFs → chunk/embed/index → retrieve relevant chunks from user question → LLM answer with context",
          "explanation": "Correct. A RAG pipeline maps source PDFs and user questions into retrieved context and grounded answers."
        },
        {
          "id": "B",
          "text": "User question → LLM answer from pretraining only",
          "explanation": "Incorrect. The choice “User question → LLM answer from pretraining only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PDFs → chunk/embed/index → retrieve relevant chunks from user question → LLM answer with context, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "PDFs → summarize all PDFs once → always return summaries",
          "explanation": "Incorrect. The choice “PDFs → summarize all PDFs once → always return summaries” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PDFs → chunk/embed/index → retrieve relevant chunks from user question → LLM answer with context, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Employee ID → SQL aggregation → chart only",
          "explanation": "Incorrect. The choice “Employee ID → SQL aggregation → chart only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PDFs → chunk/embed/index → retrieve relevant chunks from user question → LLM answer with context, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "A RAG pipeline maps source PDFs and user questions into retrieved context and grounded answers.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate",
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_003",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "Agent Bricks"
      ],
      "question": "When should Agent Bricks Knowledge Assistant be favored over Information Extraction?",
      "options": [
        {
          "id": "A",
          "text": "When the goal is conversational Q&A over knowledge sources",
          "explanation": "Correct. Knowledge Assistant is for answering questions from governed knowledge; Information Extraction is for extracting structured data from unstructured content."
        },
        {
          "id": "B",
          "text": "When the goal is extracting fixed fields into structured rows",
          "explanation": "Incorrect. The choice “When the goal is extracting fixed fields into structured rows” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When the goal is conversational Q&A over knowledge sources, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "When the goal is serving a custom PyFunc model",
          "explanation": "Incorrect. The choice “When the goal is serving a custom PyFunc model” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When the goal is conversational Q&A over knowledge sources, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "When the goal is creating rate limits",
          "explanation": "Incorrect. The choice “When the goal is creating rate limits” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When the goal is conversational Q&A over knowledge sources, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Knowledge Assistant is for answering questions from governed knowledge; Information Extraction is for extracting structured data from unstructured content.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_004",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "Information Extraction"
      ],
      "question": "When should an Information Extraction agent pattern be used?",
      "options": [
        {
          "id": "A",
          "text": "To extract fields such as invoice number, date, and total from PDFs into a table",
          "explanation": "Correct. Information Extraction fits deterministic structured extraction from unstructured sources."
        },
        {
          "id": "B",
          "text": "To randomly route traffic between model versions",
          "explanation": "Incorrect. The choice “To randomly route traffic between model versions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To extract fields such as invoice number, date, and total from PDFs into a table, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "To generate embeddings from all chunks",
          "explanation": "Incorrect. The choice “To generate embeddings from all chunks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To extract fields such as invoice number, date, and total from PDFs into a table, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "To create a SQL warehouse",
          "explanation": "Incorrect. The choice “To create a SQL warehouse” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To extract fields such as invoice number, date, and total from PDFs into a table, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Information Extraction fits deterministic structured extraction from unstructured sources.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_005",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "MAS"
      ],
      "question": "A use case needs one supervising agent to route tasks to several specialized agents. Which Agent Bricks concept best fits?",
      "options": [
        {
          "id": "A",
          "text": "Knowledge Assistant",
          "explanation": "Incorrect. Knowledge Assistant is aimed at question answering over knowledge sources, not primarily field extraction. It does not fit here because the correct choice is C. Multi-Agent Supervisor, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Information Extraction",
          "explanation": "Incorrect. Information Extraction is the Agent Bricks type for extracting structured fields from unstructured input. It does not fit here because the correct choice is C. Multi-Agent Supervisor, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Multi-Agent Supervisor",
          "explanation": "Correct. A Multi-Agent Supervisor coordinates and routes across specialized agents."
        },
        {
          "id": "D",
          "text": "AI Gateway rate limit",
          "explanation": "Incorrect. The choice “AI Gateway rate limit” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is C. Multi-Agent Supervisor, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "C"
      ],
      "explanation": "The correct answer is C. Multi-Agent Supervisor. A Multi-Agent Supervisor coordinates and routes across specialized agents.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_006",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "prompting",
        "JSON"
      ],
      "question": "Which prompt design best requests structured JSON output?",
      "options": [
        {
          "id": "A",
          "text": "“Tell me about the customer.”",
          "explanation": "Incorrect. The choice ““Tell me about the customer.”” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. “Extract customer_id and issue_type. Return only valid JSON matching this schema: {customer_id:string, issue_type:string}.”, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "“Extract customer_id and issue_type. Return only valid JSON matching this schema: {customer_id:string, issue_type:string}.”",
          "explanation": "Correct. Explicit schemas, field names, and output constraints improve structured output reliability."
        },
        {
          "id": "C",
          "text": "“Be creative and detailed.”",
          "explanation": "Incorrect. The choice ““Be creative and detailed.”” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. “Extract customer_id and issue_type. Return only valid JSON matching this schema: {customer_id:string, issue_type:string}.”, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "“Answer however you want.”",
          "explanation": "Incorrect. The choice ““Answer however you want.”” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. “Extract customer_id and issue_type. Return only valid JSON matching this schema: {customer_id:string, issue_type:string}.”, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "Explicit schemas, field names, and output constraints improve structured output reliability.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_007",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "few-shot",
        "format"
      ],
      "question": "A prompt keeps returning explanations when the front end only needs a short label. What prompt change is most appropriate?",
      "options": [
        {
          "id": "A",
          "text": "Add few-shot examples showing only the desired label",
          "explanation": "Correct. Few-shot examples and explicit output format constraints are a prompt-level fix for unwanted output format."
        },
        {
          "id": "B",
          "text": "Increase chunk overlap",
          "explanation": "Incorrect. Increasing overlap repeats more text between adjacent chunks, which usually increases the record count. It does not fit here because the correct choice is A. Add few-shot examples showing only the desired label, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Use a larger embedding dimension",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the correct choice is A. Add few-shot examples showing only the desired label, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disable Unity Catalog",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Add few-shot examples showing only the desired label, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Few-shot examples and explicit output format constraints are a prompt-level fix for unwanted output format.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_008",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "fresh data",
        "tools"
      ],
      "question": "A user asks for the latest shipping status for order 123. Why is tool use better than relying on the model’s pretraining?",
      "options": [
        {
          "id": "A",
          "text": "The status is dynamic and must come from a live system of record",
          "explanation": "Correct. Dynamic, private, or real-time facts should be retrieved from live systems through tools."
        },
        {
          "id": "B",
          "text": "Pretraining always has all live shipping events",
          "explanation": "Incorrect. The choice “Pretraining always has all live shipping events” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The status is dynamic and must come from a live system of record, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Reranking replaces APIs",
          "explanation": "Incorrect. The choice “Reranking replaces APIs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The status is dynamic and must come from a live system of record, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Perplexity can calculate shipping dates",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the correct choice is A. The status is dynamic and must come from a live system of record, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. The status is dynamic and must come from a live system of record. Dynamic, private, or real-time facts should be retrieved from live systems through tools.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_009",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "tool metadata"
      ],
      "question": "For a multi-stage reasoning task, what makes a tool description useful to an agent?",
      "options": [
        {
          "id": "A",
          "text": "It hides input parameters",
          "explanation": "Incorrect. The choice “It hides input parameters” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It clearly states what the tool does, required inputs, and returned outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It clearly states what the tool does, required inputs, and returned outputs",
          "explanation": "Correct. Agents need rich metadata/schema to decide when and how to invoke a tool."
        },
        {
          "id": "C",
          "text": "It says only “use this sometimes”",
          "explanation": "Incorrect. The choice “It says only “use this sometimes”” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It clearly states what the tool does, required inputs, and returned outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It contains no examples or schema",
          "explanation": "Incorrect. The choice “It contains no examples or schema” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is B. It clearly states what the tool does, required inputs, and returned outputs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "B"
      ],
      "explanation": "The correct answer is B. It clearly states what the tool does, required inputs, and returned outputs. Agents need rich metadata/schema to decide when and how to invoke a tool.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_010",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "RAG",
        "actions"
      ],
      "question": "A system must answer questions from private company docs and also create tickets in ServiceNow. Which is the best design?",
      "options": [
        {
          "id": "A",
          "text": "RAG retriever for docs plus a ticket-creation action tool with validated inputs",
          "explanation": "Correct. The app needs knowledge retrieval and external action. Use separate tools with clear schemas."
        },
        {
          "id": "B",
          "text": "Only a static FAQ in the prompt",
          "explanation": "Incorrect. The choice “Only a static FAQ in the prompt” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. RAG retriever for docs plus a ticket-creation action tool with validated inputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Fine-tune a model and hope it creates tickets",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. RAG retriever for docs plus a ticket-creation action tool with validated inputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Vector search against tickets only",
          "explanation": "Incorrect. The choice “Vector search against tickets only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. RAG retriever for docs plus a ticket-creation action tool with validated inputs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The app needs knowledge retrieval and external action. Use separate tools with clear schemas.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent",
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_011",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "chunking"
      ],
      "question": "A PDF manual has strong section headings and tables. Which chunking strategy is usually a better starting point than splitting every fixed number of characters?",
      "options": [
        {
          "id": "A",
          "text": "Structure-aware chunking by sections/headings with table handling",
          "explanation": "Correct. Structure-aware chunking preserves semantic boundaries and improves retrieval quality."
        },
        {
          "id": "B",
          "text": "Random word splitting",
          "explanation": "Incorrect. The choice “Random word splitting” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "One chunk per full manual always",
          "explanation": "Incorrect. The choice “One chunk per full manual always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Removing all headings before chunking",
          "explanation": "Incorrect. The choice “Removing all headings before chunking” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Structure-aware chunking by sections/headings with table handling. Structure-aware chunking preserves semantic boundaries and improves retrieval quality.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_012",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "retrieval",
        "top-k"
      ],
      "question": "A retriever returns too many nearly duplicate chunks and exceeds context length. What is a likely tuning step?",
      "options": [
        {
          "id": "A",
          "text": "Reduce top-k or overlap and consider MMR/diversity retrieval",
          "explanation": "Correct. Reducing redundant chunks and controlling top-k helps fit context and improve signal-to-noise."
        },
        {
          "id": "B",
          "text": "Increase overlap to 95%",
          "explanation": "Incorrect. The choice “Increase overlap to 95%” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Use no filters ever",
          "explanation": "Incorrect. The choice “Use no filters ever” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Double output tokens only",
          "explanation": "Incorrect. The choice “Double output tokens only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Reducing redundant chunks and controlling top-k helps fit context and improve signal-to-noise.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search",
        "https://docs.databricks.com/aws/en/ai-search/best-practices"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_013",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "context recall"
      ],
      "question": "What does Context Recall measure in RAG evaluation?",
      "options": [
        {
          "id": "A",
          "text": "Whether retrieved context contains the information needed to answer the question",
          "explanation": "Correct. Context recall focuses on whether relevant/needed evidence was retrieved."
        },
        {
          "id": "B",
          "text": "Whether every retrieved chunk is grammatically correct",
          "explanation": "Incorrect. The choice “Whether every retrieved chunk is grammatically correct” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "C",
          "text": "Whether the answer avoids toxic text",
          "explanation": "Incorrect. The choice “Whether the answer avoids toxic text” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "D",
          "text": "Whether the embedding model is small",
          "explanation": "Incorrect. The choice “Whether the embedding model is small” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Whether retrieved context contains the information needed to answer the question. Context recall focuses on whether relevant/needed evidence was retrieved.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_014",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "context precision"
      ],
      "question": "What does Context Precision measure in RAG evaluation?",
      "options": [
        {
          "id": "A",
          "text": "Whether relevant chunks are ranked higher than irrelevant chunks",
          "explanation": "Correct. Context precision evaluates signal-to-noise and ranking quality of retrieved context."
        },
        {
          "id": "B",
          "text": "Whether the model’s final answer matches a ground truth exactly",
          "explanation": "Incorrect. The choice “Whether the model’s final answer matches a ground truth exactly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        },
        {
          "id": "C",
          "text": "Whether the SQL table has primary keys",
          "explanation": "Incorrect. The choice “Whether the SQL table has primary keys” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        },
        {
          "id": "D",
          "text": "Whether the prompt has no PII",
          "explanation": "Incorrect. The choice “Whether the prompt has no PII” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether relevant retrieved chunks are ranked above irrelevant chunks."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Whether relevant chunks are ranked higher than irrelevant chunks. Context precision evaluates signal-to-noise and ranking quality of retrieved context.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_015",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "cleaning",
        "RAG"
      ],
      "question": "A source document has ads, unrelated news, and boilerplate footers. What should be done before indexing?",
      "options": [
        {
          "id": "A",
          "text": "Clean/filter irrelevant content before chunking and embedding",
          "explanation": "Correct. Garbage in, garbage out: irrelevant source content can degrade RAG retrieval and answer quality."
        },
        {
          "id": "B",
          "text": "Index everything because more tokens always help",
          "explanation": "Incorrect. The choice “Index everything because more tokens always help” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Clean/filter irrelevant content before chunking and embedding, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Fine-tune the LLM on ads",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. Clean/filter irrelevant content before chunking and embedding, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only increase max output tokens",
          "explanation": "Incorrect. The choice “Only increase max output tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Clean/filter irrelevant content before chunking and embedding, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Garbage in, garbage out: irrelevant source content can degrade RAG retrieval and answer quality.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_016",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "source selection"
      ],
      "question": "Which source is best for exact current account balance in a support chatbot?",
      "options": [
        {
          "id": "A",
          "text": "A governed transactional table keyed by account_id",
          "explanation": "Correct. Exact customer-specific facts should come from governed structured systems/tables, not pretraining or generic docs."
        },
        {
          "id": "B",
          "text": "A generic policy PDF only",
          "explanation": "Incorrect. The choice “A generic policy PDF only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A governed transactional table keyed by account_id, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A static embedding of last year’s FAQ",
          "explanation": "Incorrect. The choice “A static embedding of last year’s FAQ” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A governed transactional table keyed by account_id, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The LLM’s general knowledge",
          "explanation": "Incorrect. The choice “The LLM’s general knowledge” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A governed transactional table keyed by account_id, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Exact customer-specific facts should come from governed structured systems/tables, not pretraining or generic docs.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_017",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "chunk size"
      ],
      "question": "Why does decreasing chunk size often increase vector index record count?",
      "options": [
        {
          "id": "A",
          "text": "More chunks are created from the same documents",
          "explanation": "Correct. Smaller chunks split the same corpus into more records to embed and store."
        },
        {
          "id": "B",
          "text": "Embedding vectors become smaller",
          "explanation": "Incorrect. The choice “Embedding vectors become smaller” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "The LLM returns more tokens",
          "explanation": "Incorrect. The choice “The LLM returns more tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Unity Catalog disables indexes",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. More chunks are created from the same documents. Smaller chunks split the same corpus into more records to embed and store.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_018",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "chunking tradeoff"
      ],
      "question": "What is the main tradeoff of larger chunks?",
      "options": [
        {
          "id": "A",
          "text": "Fewer records but potentially lower retrieval precision and more irrelevant text per chunk",
          "explanation": "Correct. Larger chunks reduce record count but can dilute the specific evidence returned to the LLM."
        },
        {
          "id": "B",
          "text": "More records and zero context",
          "explanation": "Incorrect. The choice “More records and zero context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Always better accuracy with no cost",
          "explanation": "Incorrect. The choice “Always better accuracy with no cost” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "They cannot be embedded",
          "explanation": "Incorrect. The choice “They cannot be embedded” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Larger chunks reduce record count but can dilute the specific evidence returned to the LLM.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_019",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "overlap"
      ],
      "question": "What is the main tradeoff of overlap between chunks?",
      "options": [
        {
          "id": "A",
          "text": "It preserves boundary context but increases duplicate content and embedding records",
          "explanation": "Correct. Overlap helps facts spanning boundaries but increases index size/cost and redundancy."
        },
        {
          "id": "B",
          "text": "It reduces all storage cost to zero",
          "explanation": "Incorrect. The choice “It reduces all storage cost to zero” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "It only affects LLM temperature",
          "explanation": "Incorrect. The choice “It only affects LLM temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "It disables OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. It preserves boundary context but increases duplicate content and embedding records. Overlap helps facts spanning boundaries but increases index size/cost and redundancy.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_020",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "OCR"
      ],
      "question": "When scanned PDFs are saved as images, what extraction technique is required?",
      "options": [
        {
          "id": "A",
          "text": "OCR",
          "explanation": "Correct. Image-based scans require optical character recognition to turn pixels into text."
        },
        {
          "id": "B",
          "text": "BeautifulSoup HTML parsing only",
          "explanation": "Incorrect. BeautifulSoup parses HTML/XML, not scanned images. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        },
        {
          "id": "C",
          "text": "SQL GROUP BY",
          "explanation": "Incorrect. The choice “SQL GROUP BY” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        },
        {
          "id": "D",
          "text": "Model Serving traffic split",
          "explanation": "Incorrect. The choice “Model Serving traffic split” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the documents are images, so the solution needs OCR rather than HTML parsing or web crawling."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. OCR. Image-based scans require optical character recognition to turn pixels into text.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_021",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "metadata filters"
      ],
      "question": "A RAG system needs exact filtering by product_id and then semantic search within matching docs. What should the index include?",
      "options": [
        {
          "id": "A",
          "text": "Metadata fields such as product_id plus text embeddings",
          "explanation": "Correct. Metadata filters narrow the candidate set before/alongside semantic retrieval."
        },
        {
          "id": "B",
          "text": "Only raw images",
          "explanation": "Incorrect. The choice “Only raw images” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Metadata fields such as product_id plus text embeddings, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only output tokens",
          "explanation": "Incorrect. The choice “Only output tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Metadata fields such as product_id plus text embeddings, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only model aliases",
          "explanation": "Incorrect. The choice “Only model aliases” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Metadata fields such as product_id plus text embeddings, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Metadata fields such as product_id plus text embeddings. Metadata filters narrow the candidate set before/alongside semantic retrieval.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_022",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "reranking"
      ],
      "question": "Why use reranking after initial retrieval?",
      "options": [
        {
          "id": "A",
          "text": "To reorder candidate chunks by relevance using a stronger model/scoring step",
          "explanation": "Correct. Reranking improves final context relevance by re-scoring candidates, often at additional latency/cost."
        },
        {
          "id": "B",
          "text": "To eliminate all vector search",
          "explanation": "Incorrect. The choice “To eliminate all vector search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To reorder candidate chunks by relevance using a stronger model/scoring step, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "To reduce all latency",
          "explanation": "Incorrect. The choice “To reduce all latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To reorder candidate chunks by relevance using a stronger model/scoring step, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "To train the base LLM",
          "explanation": "Incorrect. The choice “To train the base LLM” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To reorder candidate chunks by relevance using a stronger model/scoring step, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Reranking improves final context relevance by re-scoring candidates, often at additional latency/cost.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_023",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Hard",
      "tags": [
        "retrieval metrics"
      ],
      "question": "Which metric is most suitable for optimizing retrieval ranking quality when ground-truth relevant documents are known?",
      "options": [
        {
          "id": "A",
          "text": "NDCG or recall@k",
          "explanation": "Correct. Information retrieval metrics such as recall@k and NDCG evaluate whether relevant docs appear in retrieved/ranked results."
        },
        {
          "id": "B",
          "text": "Training loss only",
          "explanation": "Incorrect. The choice “Training loss only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. NDCG or recall@k, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "GPU utilization only",
          "explanation": "Incorrect. The choice “GPU utilization only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. NDCG or recall@k, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "BLEU only",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. NDCG or recall@k, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Information retrieval metrics such as recall@k and NDCG evaluate whether relevant docs appear in retrieved/ranked results.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_024",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Hard",
      "tags": [
        "AI Search configuration"
      ],
      "question": "A RAG app needs to handle 200M embeddings and optimize cost for a large corpus with moderate latency needs. Which AI Search consideration is central?",
      "options": [
        {
          "id": "A",
          "text": "Endpoint/index type and performance/cost tradeoffs",
          "explanation": "Correct. Large indexes require choosing configurations based on embeddings count, update frequency, latency, and cost."
        },
        {
          "id": "B",
          "text": "Only LLM temperature",
          "explanation": "Incorrect. The choice “Only LLM temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Endpoint/index type and performance/cost tradeoffs, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only notebook color theme",
          "explanation": "Incorrect. The choice “Only notebook color theme” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Endpoint/index type and performance/cost tradeoffs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only output parser",
          "explanation": "Incorrect. The choice “Only output parser” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Endpoint/index type and performance/cost tradeoffs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Large indexes require choosing configurations based on embeddings count, update frequency, latency, and cost.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/best-practices",
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_025",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "hybrid search"
      ],
      "question": "When should hybrid search be considered?",
      "options": [
        {
          "id": "A",
          "text": "When both keyword matching and vector semantic similarity can improve retrieval",
          "explanation": "Correct. Hybrid combines lexical and vector signals, useful when exact terms matter as well as semantic similarity."
        },
        {
          "id": "B",
          "text": "When you never have text fields",
          "explanation": "Incorrect. The choice “When you never have text fields” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When both keyword matching and vector semantic similarity can improve retrieval, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only when using no embeddings",
          "explanation": "Incorrect. The choice “Only when using no embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When both keyword matching and vector semantic similarity can improve retrieval, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only for image generation",
          "explanation": "Incorrect. The choice “Only for image generation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When both keyword matching and vector semantic similarity can improve retrieval, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Hybrid combines lexical and vector signals, useful when exact terms matter as well as semantic similarity.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_026",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "SKU",
        "hybrid search"
      ],
      "question": "A user query includes a specific SKU code. Which retrieval enhancement is likely helpful?",
      "options": [
        {
          "id": "A",
          "text": "Hybrid/keyword matching or metadata filtering for exact SKU",
          "explanation": "Correct. Exact identifiers are often better handled with lexical matching or metadata filters than pure semantic similarity."
        },
        {
          "id": "B",
          "text": "Only increasing LLM temperature",
          "explanation": "Incorrect. The choice “Only increasing LLM temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid/keyword matching or metadata filtering for exact SKU, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Removing all metadata",
          "explanation": "Incorrect. The choice “Removing all metadata” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid/keyword matching or metadata filtering for exact SKU, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Using fewer source docs randomly",
          "explanation": "Incorrect. The choice “Using fewer source docs randomly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid/keyword matching or metadata filtering for exact SKU, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Exact identifiers are often better handled with lexical matching or metadata filters than pure semantic similarity.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_027",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Hard",
      "tags": [
        "Delta Sync"
      ],
      "question": "For constantly updated documents in Delta tables, what index pattern is useful?",
      "options": [
        {
          "id": "A",
          "text": "Delta Sync index with Change Data Feed where applicable",
          "explanation": "Correct. Delta Sync indexes keep AI Search synchronized from Delta data, with requirements such as CDF for standard endpoints."
        },
        {
          "id": "B",
          "text": "Manual re-upload of PDFs every month only",
          "explanation": "Incorrect. The choice “Manual re-upload of PDFs every month only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Delta Sync index with Change Data Feed where applicable, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "No indexing",
          "explanation": "Incorrect. The choice “No indexing” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Delta Sync index with Change Data Feed where applicable, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A static prompt only",
          "explanation": "Incorrect. The choice “A static prompt only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Delta Sync index with Change Data Feed where applicable, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Delta Sync indexes keep AI Search synchronized from Delta data, with requirements such as CDF for standard endpoints.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_028",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Hard",
      "tags": [
        "governance",
        "retrieval"
      ],
      "question": "What is the risk of indexing documents the user is not allowed to see without applying permissions at retrieval time?",
      "options": [
        {
          "id": "A",
          "text": "The LLM could expose unauthorized context in its answer",
          "explanation": "Correct. Governed RAG must respect permissions before context reaches the model/user."
        },
        {
          "id": "B",
          "text": "The embedding dimension becomes zero",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the correct choice is A. The LLM could expose unauthorized context in its answer, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The app automatically becomes cheaper",
          "explanation": "Incorrect. The choice “The app automatically becomes cheaper” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The LLM could expose unauthorized context in its answer, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Reranking stops working",
          "explanation": "Incorrect. The choice “Reranking stops working” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The LLM could expose unauthorized context in its answer, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. The LLM could expose unauthorized context in its answer. Governed RAG must respect permissions before context reaches the model/user.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_029",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "chunk tables"
      ],
      "question": "A document extraction pipeline outputs a Delta table of chunks. What columns are typically useful for RAG indexing?",
      "options": [
        {
          "id": "A",
          "text": "chunk_text, document_id, metadata, embedding/source fields",
          "explanation": "Correct. Chunk text plus IDs and metadata support retrieval, traceability, and filtering."
        },
        {
          "id": "B",
          "text": "Only random_id",
          "explanation": "Incorrect. The choice “Only random_id” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Only user password",
          "explanation": "Incorrect. The choice “Only user password” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Only model alias",
          "explanation": "Incorrect. The choice “Only model alias” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. chunk_text, document_id, metadata, embedding/source fields. Chunk text plus IDs and metadata support retrieval, traceability, and filtering.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_030",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "LangChain",
        "prompt"
      ],
      "question": "Which LangChain component is used to define reusable prompt text with variables?",
      "options": [
        {
          "id": "A",
          "text": "PromptTemplate / ChatPromptTemplate",
          "explanation": "Correct. Prompt templates parameterize prompts and make chains reproducible. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "VectorSearchEndpoint",
          "explanation": "Incorrect. The choice “VectorSearchEndpoint” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PromptTemplate / ChatPromptTemplate, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Delta Sync Trigger",
          "explanation": "Incorrect. The choice “Delta Sync Trigger” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PromptTemplate / ChatPromptTemplate, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Lakehouse Monitor",
          "explanation": "Incorrect. The choice “Lakehouse Monitor” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. PromptTemplate / ChatPromptTemplate, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. PromptTemplate / ChatPromptTemplate. Prompt templates parameterize prompts and make chains reproducible.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_031",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "pyfunc"
      ],
      "question": "A chain needs preprocessing before LLM call and postprocessing after response. Which MLflow flavor/interface is generic enough to package this?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.pyfunc",
          "explanation": "Correct. mlflow.pyfunc provides a generic Python predict interface that can wrap custom preprocessing and postprocessing. mlflow.pyfunc is MLflow’s generic Python-function model flavor with a standard load/predict interface."
        },
        {
          "id": "B",
          "text": "mlflow.spark only",
          "explanation": "Incorrect. mlflow.spark is for Spark ML models, not the generic pyfunc interface. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "mlflow.sklearn only",
          "explanation": "Incorrect. The choice “mlflow.sklearn only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Auto Loader",
          "explanation": "Incorrect. The choice “Auto Loader” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "mlflow.pyfunc provides a generic Python predict interface that can wrap custom preprocessing and postprocessing.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_032",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "guardrails"
      ],
      "question": "Which issue is a safety guardrail primarily intended to reduce?",
      "options": [
        {
          "id": "A",
          "text": "Harmful or disallowed content in inputs/outputs",
          "explanation": "Correct. The choice “Harmful or disallowed content in inputs/outputs” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "B",
          "text": "Embedding vector dimensionality",
          "explanation": "Incorrect. The choice “Embedding vector dimensionality” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "SQL warehouse size",
          "explanation": "Incorrect. The choice “SQL warehouse size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Git branch conflicts",
          "explanation": "Incorrect. The choice “Git branch conflicts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Harmful or disallowed content in inputs/outputs. Safety guardrails classify/filter harmful inputs or outputs.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_033",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "guardrails"
      ],
      "question": "Which issue is a contextual guardrail most related to?",
      "options": [
        {
          "id": "A",
          "text": "Keeping the app on-topic and aligned to the permitted domain",
          "explanation": "Correct. Contextual/domain guardrails restrict responses to allowed topics and contexts."
        },
        {
          "id": "B",
          "text": "Autoscaling GPU instances",
          "explanation": "Incorrect. Autoscaling adjusts serving compute based on demand; scale-to-zero reduces idle cost. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Increasing embedding dimension",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Compressing PNG images",
          "explanation": "Incorrect. The choice “Compressing PNG images” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Keeping the app on-topic and aligned to the permitted domain. Contextual/domain guardrails restrict responses to allowed topics and contexts.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_034",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "classification",
        "prompt"
      ],
      "question": "An LLM app must classify customer transcript labels as exactly “In Stock” or “Out of Stock”. What prompt style is best?",
      "options": [
        {
          "id": "A",
          "text": "Explicit task instructions with allowed labels and no extra output",
          "explanation": "Correct. Closed-label tasks benefit from explicit allowed outputs and constraints."
        },
        {
          "id": "B",
          "text": "A vague open-ended prompt",
          "explanation": "Incorrect. The choice “A vague open-ended prompt” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit task instructions with allowed labels and no extra output, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A prompt asking for creative analysis",
          "explanation": "Incorrect. The choice “A prompt asking for creative analysis” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit task instructions with allowed labels and no extra output, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No prompt",
          "explanation": "Incorrect. The choice “No prompt” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit task instructions with allowed labels and no extra output, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Explicit task instructions with allowed labels and no extra output. Closed-label tasks benefit from explicit allowed outputs and constraints.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_035",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "embedding context"
      ],
      "question": "A model card says an embedding model has max sequence length 512. Your chunks are 900 tokens. What should you do?",
      "options": [
        {
          "id": "A",
          "text": "Choose a longer-context embedding model or reduce chunk size",
          "explanation": "Correct. Embedding model context length must cover the chunk text or chunks may truncate/perform poorly."
        },
        {
          "id": "B",
          "text": "Ignore it because embeddings have unlimited context",
          "explanation": "Incorrect. The choice “Ignore it because embeddings have unlimited context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Increase LLM output tokens only",
          "explanation": "Incorrect. The choice “Increase LLM output tokens only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Use a SQL warehouse",
          "explanation": "Incorrect. The choice “Use a SQL warehouse” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Embedding model context length must cover the chunk text or chunks may truncate/perform poorly.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_036",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "hallucination"
      ],
      "question": "Which qualitative review finding indicates hallucination?",
      "options": [
        {
          "id": "A",
          "text": "The answer includes claims not supported by retrieved context",
          "explanation": "Correct. The choice “The answer includes claims not supported by retrieved context” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. The answer includes claims not supported by retrieved context, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "The answer is shorter than expected but grounded",
          "explanation": "Incorrect. The choice “The answer is shorter than expected but grounded” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The answer includes claims not supported by retrieved context, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The answer has a neutral tone",
          "explanation": "Incorrect. The choice “The answer has a neutral tone” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The answer includes claims not supported by retrieved context, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The answer cites the correct document",
          "explanation": "Incorrect. The choice “The answer cites the correct document” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The answer includes claims not supported by retrieved context, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. The answer includes claims not supported by retrieved context. Unsupported factual claims are hallucinations in a RAG setting.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_037",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "model selection",
        "privacy"
      ],
      "question": "Which LLM selection factor matters most when private data cannot leave the customer-controlled environment?",
      "options": [
        {
          "id": "A",
          "text": "Ability to self-host or serve in an approved boundary",
          "explanation": "Correct. Data residency/confidentiality constraints can require self-hosted/custom model serving instead of external providers."
        },
        {
          "id": "B",
          "text": "Highest public leaderboard score only",
          "explanation": "Incorrect. The choice “Highest public leaderboard score only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Ability to self-host or serve in an approved boundary, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Most creative writing style",
          "explanation": "Incorrect. The choice “Most creative writing style” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Ability to self-host or serve in an approved boundary, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Lowest number of parameters always",
          "explanation": "Incorrect. The choice “Lowest number of parameters always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Ability to self-host or serve in an approved boundary, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Data residency/confidentiality constraints can require self-hosted/custom model serving instead of external providers.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models",
        "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_038",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "model selection"
      ],
      "question": "For a small group willing to wait for highest quality, what model choice is usually favored?",
      "options": [
        {
          "id": "A",
          "text": "A larger/higher-quality model within governance constraints",
          "explanation": "Correct. When latency/throughput are not constraints, choose for quality while honoring privacy/governance."
        },
        {
          "id": "B",
          "text": "The smallest possible model regardless of quality",
          "explanation": "Incorrect. The choice “The smallest possible model regardless of quality” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A larger/higher-quality model within governance constraints, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "No LLM",
          "explanation": "Incorrect. The choice “No LLM” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A larger/higher-quality model within governance constraints, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A keyword-only system",
          "explanation": "Incorrect. The choice “A keyword-only system” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A larger/higher-quality model within governance constraints, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "When latency/throughput are not constraints, choose for quality while honoring privacy/governance.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_039",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "cost",
        "latency"
      ],
      "question": "For a high-volume low-latency app where answer quality requirements are modest, what model choice is often favored?",
      "options": [
        {
          "id": "A",
          "text": "Smaller/faster model with sufficient quality",
          "explanation": "Correct. Cost and latency constraints often justify a smaller model if evaluation shows acceptable quality."
        },
        {
          "id": "B",
          "text": "Largest model always",
          "explanation": "Incorrect. The choice “Largest model always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Smaller/faster model with sufficient quality, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Manual human review for every query",
          "explanation": "Incorrect. The choice “Manual human review for every query” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Smaller/faster model with sufficient quality, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No monitoring",
          "explanation": "Incorrect. The choice “No monitoring” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Smaller/faster model with sufficient quality, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Cost and latency constraints often justify a smaller model if evaluation shows acceptable quality.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_040",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Hard",
      "tags": [
        "prompt injection"
      ],
      "question": "Which approach best reduces prompt injection impact in a RAG app?",
      "options": [
        {
          "id": "A",
          "text": "Guardrails, instruction hierarchy, tool/input validation, and not blindly executing retrieved text as instructions",
          "explanation": "Correct. Prompt injection requires layered controls around instructions, retrieval, tool calls, and validation. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "Increasing temperature",
          "explanation": "Incorrect. The choice “Increasing temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Guardrails, instruction hierarchy, tool/input validation, and not blindly executing retrieved text as instructions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Removing all system prompts",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the correct choice is A. Guardrails, instruction hierarchy, tool/input validation, and not blindly executing retrieved text as instructions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Putting API keys in retrieved docs",
          "explanation": "Incorrect. The choice “Putting API keys in retrieved docs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Guardrails, instruction hierarchy, tool/input validation, and not blindly executing retrieved text as instructions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Prompt injection requires layered controls around instructions, retrieval, tool calls, and validation.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_041",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "prompting"
      ],
      "question": "An LLM keeps returning verbose paragraphs when UI needs a 20-word answer. What should you adjust first?",
      "options": [
        {
          "id": "A",
          "text": "Prompt constraints and examples for length/style",
          "explanation": "Correct. Output length/style is usually controlled by prompt instructions and examples. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Vector index endpoint type",
          "explanation": "Incorrect. The choice “Vector index endpoint type” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt constraints and examples for length/style, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Registry URI",
          "explanation": "Incorrect. The choice “Registry URI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt constraints and examples for length/style, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "GPU RAM",
          "explanation": "Incorrect. The choice “GPU RAM” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt constraints and examples for length/style, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Prompt constraints and examples for length/style. Output length/style is usually controlled by prompt instructions and examples.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_042",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "answer relevancy"
      ],
      "question": "What does answer relevancy evaluate?",
      "options": [
        {
          "id": "A",
          "text": "Whether the generated response addresses the user’s query intent",
          "explanation": "Correct. Answer relevancy scores alignment between user question and generated answer."
        },
        {
          "id": "B",
          "text": "Whether all retrieved chunks are relevant",
          "explanation": "Incorrect. The choice “Whether all retrieved chunks are relevant” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response addresses the user query intent."
        },
        {
          "id": "C",
          "text": "Whether the response has no toxic language",
          "explanation": "Incorrect. Toxicity metrics measure unsafe or offensive language, not general answer correctness by themselves. This measures a different RAG metric; Answer Relevancy is about alignment with the user query intent."
        },
        {
          "id": "D",
          "text": "Whether context contains the answer",
          "explanation": "Incorrect. The choice “Whether context contains the answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response addresses the user query intent."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Whether the generated response addresses the user’s query intent. Answer relevancy scores alignment between user question and generated answer.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_043",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "faithfulness"
      ],
      "question": "What does faithfulness evaluate in RAG?",
      "options": [
        {
          "id": "A",
          "text": "Whether the answer is supported by provided/retrieved context",
          "explanation": "Correct. Faithfulness measures grounding in the supplied context, not necessarily agreement with a separate reference answer."
        },
        {
          "id": "B",
          "text": "Whether the answer matches ground truth exactly",
          "explanation": "Incorrect. The choice “Whether the answer matches ground truth exactly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "C",
          "text": "Whether the question is polite",
          "explanation": "Incorrect. The choice “Whether the question is polite” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "D",
          "text": "Whether the model is fast",
          "explanation": "Incorrect. The choice “Whether the model is fast” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Faithfulness measures grounding in the supplied context, not necessarily agreement with a separate reference answer.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_044",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "answer correctness"
      ],
      "question": "What does answer correctness typically require that faithfulness may not?",
      "options": [
        {
          "id": "A",
          "text": "Ground truth/reference answer",
          "explanation": "Correct. Answer correctness compares to a reference/ground truth, while faithfulness checks context support."
        },
        {
          "id": "B",
          "text": "Vector index endpoint",
          "explanation": "Incorrect. The choice “Vector index endpoint” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "C",
          "text": "GPU autoscaling only",
          "explanation": "Incorrect. Autoscaling adjusts serving compute up and down based on traffic, reducing manual infrastructure work. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "D",
          "text": "OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Answer correctness compares to a reference/ground truth, while faithfulness checks context support.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_045",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "BLEU",
        "ROUGE"
      ],
      "question": "Which classic text metric relies heavily on n-gram overlap and can miss semantic equivalence?",
      "options": [
        {
          "id": "A",
          "text": "BLEU/ROUGE",
          "explanation": "Correct. BLEU and ROUGE compare token/n-gram overlap and may penalize correct paraphrases. BLEU is an n-gram overlap metric that requires a reference and may miss semantic equivalence."
        },
        {
          "id": "B",
          "text": "Context Recall",
          "explanation": "Incorrect. Context Recall checks whether the retrieved context contains the information needed to answer. It does not fit here because the correct choice is A. BLEU/ROUGE, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Latency p95",
          "explanation": "Incorrect. The choice “Latency p95” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. BLEU/ROUGE, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "GPU memory",
          "explanation": "Incorrect. The choice “GPU memory” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. BLEU/ROUGE, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. BLEU/ROUGE. BLEU and ROUGE compare token/n-gram overlap and may penalize correct paraphrases.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_046",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "LLM judge"
      ],
      "question": "For LLM-as-a-Judge evaluation, what improves reliability?",
      "options": [
        {
          "id": "A",
          "text": "Clear rubric, examples, calibration, and human review of ambiguous cases",
          "explanation": "Correct. Judges need rubrics/calibration and human-in-the-loop checks, especially for ambiguous cases."
        },
        {
          "id": "B",
          "text": "No instructions to avoid bias",
          "explanation": "Incorrect. The choice “No instructions to avoid bias” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Clear rubric, examples, calibration, and human review of ambiguous cases, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Smallest model always",
          "explanation": "Incorrect. The choice “Smallest model always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Clear rubric, examples, calibration, and human review of ambiguous cases, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only toxicity metric",
          "explanation": "Incorrect. Toxicity measures harmful/offensive language, not retrieval or answer accuracy. It does not fit here because the correct choice is A. Clear rubric, examples, calibration, and human review of ambiguous cases, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Judges need rubrics/calibration and human-in-the-loop checks, especially for ambiguous cases.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_047",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "perplexity"
      ],
      "question": "What does low perplexity generally indicate for next-token prediction?",
      "options": [
        {
          "id": "A",
          "text": "The model assigns high probability to the observed/likely tokens",
          "explanation": "Correct. Lower perplexity means the sequence is less surprising under the model probability distribution."
        },
        {
          "id": "B",
          "text": "The model is confused across many tokens",
          "explanation": "Incorrect. The choice “The model is confused across many tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The model assigns high probability to the observed/likely tokens, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The model used too much GPU",
          "explanation": "Incorrect. The choice “The model used too much GPU” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The model assigns high probability to the observed/likely tokens, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The answer is always ethically safe",
          "explanation": "Incorrect. The choice “The answer is always ethically safe” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The model assigns high probability to the observed/likely tokens, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Lower perplexity means the sequence is less surprising under the model probability distribution.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_048",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "perplexity",
        "RAG evaluation"
      ],
      "question": "Why can perplexity be insufficient for evaluating a RAG answer?",
      "options": [
        {
          "id": "A",
          "text": "It does not directly measure factual grounding or relevance to retrieved context",
          "explanation": "Correct. A fluent low-perplexity answer can still be ungrounded or irrelevant."
        },
        {
          "id": "B",
          "text": "It is only for images",
          "explanation": "Incorrect. The choice “It is only for images” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It does not directly measure factual grounding or relevance to retrieved context, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It always requires a SQL table",
          "explanation": "Incorrect. The choice “It always requires a SQL table” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It does not directly measure factual grounding or relevance to retrieved context, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It detects all PII leaks",
          "explanation": "Incorrect. The choice “It detects all PII leaks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It does not directly measure factual grounding or relevance to retrieved context, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. It does not directly measure factual grounding or relevance to retrieved context. A fluent low-perplexity answer can still be ungrounded or irrelevant.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_049",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "tool calling"
      ],
      "question": "An agent sometimes sends malformed tool arguments. What improvement should be made?",
      "options": [
        {
          "id": "A",
          "text": "Provide JSON schemas, descriptions, examples, and validate arguments before execution",
          "explanation": "Correct. Reliable tool use requires structured schemas and runtime validation."
        },
        {
          "id": "B",
          "text": "Allow arbitrary free text directly to APIs",
          "explanation": "Incorrect. The choice “Allow arbitrary free text directly to APIs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Provide JSON schemas, descriptions, examples, and validate arguments before execution, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Remove all parameter validation",
          "explanation": "Incorrect. The choice “Remove all parameter validation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Provide JSON schemas, descriptions, examples, and validate arguments before execution, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Increase creativity",
          "explanation": "Incorrect. The choice “Increase creativity” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Provide JSON schemas, descriptions, examples, and validate arguments before execution, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Provide JSON schemas, descriptions, examples, and validate arguments before execution. Reliable tool use requires structured schemas and runtime validation.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_050",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "MCP"
      ],
      "question": "What is an MCP server used for in agent applications?",
      "options": [
        {
          "id": "A",
          "text": "Standardized connection between agents and external tools/data/workflows",
          "explanation": "Correct. MCP lets agents connect to tools and data through a standardized protocol/server abstraction."
        },
        {
          "id": "B",
          "text": "A tokenizer only",
          "explanation": "Incorrect. The choice “A tokenizer only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Standardized connection between agents and external tools/data/workflows, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A replacement for Unity Catalog",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Standardized connection between agents and external tools/data/workflows, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A GPU memory calculator",
          "explanation": "Incorrect. The choice “A GPU memory calculator” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Standardized connection between agents and external tools/data/workflows, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "MCP lets agents connect to tools and data through a standardized protocol/server abstraction.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/mcp/managed-mcp"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_051",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Unity Catalog",
        "MLflow"
      ],
      "question": "Which registry URI is used to register models in Unity Catalog?",
      "options": [
        {
          "id": "A",
          "text": "databricks-uc",
          "explanation": "Correct. MLflow uses mlflow.set_registry_uri(\"databricks-uc\") for UC model registry. databricks-uc is the MLflow registry URI that tells MLflow to use Unity Catalog for model registration."
        },
        {
          "id": "B",
          "text": "unity-catalog",
          "explanation": "Incorrect. unity-catalog describes the product concept, but it is not the MLflow registry URI string. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        },
        {
          "id": "C",
          "text": "uc-registry",
          "explanation": "Incorrect. uc-registry is a plausible label, but it is not the MLflow registry URI used for Unity Catalog. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        },
        {
          "id": "D",
          "text": "databricks",
          "explanation": "Incorrect. databricks is not the Unity Catalog registry URI; it does not explicitly select the UC model registry. The question asks for the exact MLflow registry URI string; this option is not the string that selects Unity Catalog."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. databricks-uc. MLflow uses mlflow.set_registry_uri(\"databricks-uc\") for UC model registry.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_052",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "aliases"
      ],
      "question": "What is the key purpose of model aliases such as @champion and @challenger?",
      "options": [
        {
          "id": "A",
          "text": "Manage lifecycle references to model versions for deployment/promotion",
          "explanation": "Correct. Aliases provide stable names for lifecycle roles while underlying versions change."
        },
        {
          "id": "B",
          "text": "Change the model’s tokenizer",
          "explanation": "Incorrect. The choice “Change the model’s tokenizer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Manage lifecycle references to model versions for deployment/promotion, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Resize embeddings",
          "explanation": "Incorrect. The choice “Resize embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Manage lifecycle references to model versions for deployment/promotion, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Create a SQL table",
          "explanation": "Incorrect. The choice “Create a SQL table” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Manage lifecycle references to model versions for deployment/promotion, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Manage lifecycle references to model versions for deployment/promotion. Aliases provide stable names for lifecycle roles while underlying versions change.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_053",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Model Serving"
      ],
      "question": "Which Databricks Model Serving categories are supported under a unified serving interface?",
      "options": [
        {
          "id": "A",
          "text": "Custom models, Foundation Model APIs, and External Models",
          "explanation": "Correct. Databricks serving covers custom models, hosted foundation models, and external providers. External Models let Databricks manage access to models hosted outside Databricks, such as third-party model APIs."
        },
        {
          "id": "B",
          "text": "Only scikit-learn, Spark, and TensorFlow",
          "explanation": "Incorrect. TensorFlow is a deep learning framework, not the typical LLM chain/orchestration framework here. It does not fit here because the correct choice is A. Custom models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only batch, stream, and ETL models",
          "explanation": "Incorrect. The choice “Only batch, stream, and ETL models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Custom models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only open-source models",
          "explanation": "Incorrect. The choice “Only open-source models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Custom models, Foundation Model APIs, and External Models, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Databricks serving covers custom models, hosted foundation models, and external providers.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_054",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "A/B testing"
      ],
      "question": "What feature enables canary/A-B deployments behind one Databricks serving endpoint?",
      "options": [
        {
          "id": "A",
          "text": "Multiple served entities with configurable traffic splits",
          "explanation": "Correct. Traffic splitting lets a serving endpoint route chosen percentages to different model versions."
        },
        {
          "id": "B",
          "text": "Manual DNS load balancer only",
          "explanation": "Incorrect. The choice “Manual DNS load balancer only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Multiple served entities with configurable traffic splits, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Embedding chunk overlap",
          "explanation": "Incorrect. The choice “Embedding chunk overlap” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Multiple served entities with configurable traffic splits, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "BLEU score",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. Multiple served entities with configurable traffic splits, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Traffic splitting lets a serving endpoint route chosen percentages to different model versions.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_055",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "serverless"
      ],
      "question": "What feature supports “serverless” operations for unpredictable serving traffic?",
      "options": [
        {
          "id": "A",
          "text": "Autoscaling and scale-to-zero/managed compute behavior where supported",
          "explanation": "Correct. Serverless serving abstracts infrastructure and scales with demand. Scale-to-zero reduces cost by shutting serving compute down when no traffic is present."
        },
        {
          "id": "B",
          "text": "Hard-coded GPU count forever",
          "explanation": "Incorrect. The choice “Hard-coded GPU count forever” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "C",
          "text": "Manual VM patching",
          "explanation": "Incorrect. The choice “Manual VM patching” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "D",
          "text": "No monitoring",
          "explanation": "Incorrect. The choice “No monitoring” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Autoscaling and scale-to-zero/managed compute behavior where supported. Serverless serving abstracts infrastructure and scales with demand.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_056",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "secrets"
      ],
      "question": "Why should secrets for a custom PyFunc serving endpoint not be hardcoded in model code?",
      "options": [
        {
          "id": "A",
          "text": "They should be managed through environment variables/secrets/resource configuration",
          "explanation": "Correct. Secrets should be injected securely at serving time, not stored in code or frontend."
        },
        {
          "id": "B",
          "text": "Hardcoding improves governance",
          "explanation": "Incorrect. The choice “Hardcoding improves governance” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They should be managed through environment variables/secrets/resource configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The browser needs all secrets",
          "explanation": "Incorrect. The choice “The browser needs all secrets” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They should be managed through environment variables/secrets/resource configuration, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It prevents authentication",
          "explanation": "Incorrect. The choice “It prevents authentication” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They should be managed through environment variables/secrets/resource configuration, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. They should be managed through environment variables/secrets/resource configuration. Secrets should be injected securely at serving time, not stored in code or frontend.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_057",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "pyfunc"
      ],
      "question": "Which MLflow flavor is the generic Python function interface?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.pyfunc",
          "explanation": "Correct. pyfunc provides log_model/save_model/load_model and a predict interface for arbitrary Python models/pipelines. mlflow.pyfunc is MLflow’s generic Python-function model flavor with a standard load/predict interface."
        },
        {
          "id": "B",
          "text": "mlflow.delta",
          "explanation": "Incorrect. The choice “mlflow.delta” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "mlflow.ucsql",
          "explanation": "Incorrect. The choice “mlflow.ucsql” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "mlflow.vector",
          "explanation": "Incorrect. The choice “mlflow.vector” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.pyfunc, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "pyfunc provides log_model/save_model/load_model and a predict interface for arbitrary Python models/pipelines.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_058",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "signature"
      ],
      "question": "When logging a GenAI app as an MLflow model, why include input examples and signature?",
      "options": [
        {
          "id": "A",
          "text": "To define expected request/response schema and improve deployment validation",
          "explanation": "Correct. The choice “To define expected request/response schema and improve deployment validation” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. To define expected request/response schema and improve deployment validation, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "To change model weights",
          "explanation": "Incorrect. The choice “To change model weights” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To define expected request/response schema and improve deployment validation, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "To disable UC permissions",
          "explanation": "Incorrect. The choice “To disable UC permissions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To define expected request/response schema and improve deployment validation, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "To create a Databricks App icon",
          "explanation": "Incorrect. The choice “To create a Databricks App icon” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To define expected request/response schema and improve deployment validation, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. To define expected request/response schema and improve deployment validation. Signatures/examples clarify model I/O for serving and consumers.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_059",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "resources",
        "auth"
      ],
      "question": "What should the resources parameter capture when logging/serving an agent model?",
      "options": [
        {
          "id": "A",
          "text": "External/Databricks resources the agent needs so access/auth passthrough can be configured",
          "explanation": "Correct. Resource declarations identify required serving-time resources such as indexes/endpoints/functions for secure access."
        },
        {
          "id": "B",
          "text": "GPU memory only",
          "explanation": "Incorrect. The choice “GPU memory only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the resources parameter declares which Databricks resources the served agent needs for automatic authorization passthrough."
        },
        {
          "id": "C",
          "text": "A markdown README",
          "explanation": "Incorrect. README content can help documentation, but it does not answer the technical scenario. The resources parameter is about declaring resource dependencies/authentication passthrough, not scaling, timeouts, or memory sizing."
        },
        {
          "id": "D",
          "text": "Only the prompt template string",
          "explanation": "Incorrect. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself. The resources parameter is about declaring resource dependencies/authentication passthrough, not scaling, timeouts, or memory sizing."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Resource declarations identify required serving-time resources such as indexes/endpoints/functions for secure access.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_060",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "AI Search"
      ],
      "question": "Which is the correct use of AI Search in a RAG app?",
      "options": [
        {
          "id": "A",
          "text": "Create/query an index over embedded chunks and pass retrieved context to the LLM",
          "explanation": "Correct. AI Search provides retrieval over embeddings/metadata for RAG context."
        },
        {
          "id": "B",
          "text": "Use it as a replacement for all prompts",
          "explanation": "Incorrect. The choice “Use it as a replacement for all prompts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Create/query an index over embedded chunks and pass retrieved context to the LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Use it only for model training loss",
          "explanation": "Incorrect. The choice “Use it only for model training loss” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Create/query an index over embedded chunks and pass retrieved context to the LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Use it to compile Python packages",
          "explanation": "Incorrect. The choice “Use it to compile Python packages” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Create/query an index over embedded chunks and pass retrieved context to the LLM, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Create/query an index over embedded chunks and pass retrieved context to the LLM. AI Search provides retrieval over embeddings/metadata for RAG context.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/ai-search",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_061",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "renamed product"
      ],
      "question": "Databricks AI Search was formerly known as what?",
      "options": [
        {
          "id": "A",
          "text": "Databricks Vector Search",
          "explanation": "Correct. Current docs say Databricks AI Search was formerly Databricks Vector Search. Vector Search / AI Search is used to index embeddings and retrieve semantically similar chunks for RAG."
        },
        {
          "id": "B",
          "text": "Databricks AutoML Search",
          "explanation": "Incorrect. The choice “Databricks AutoML Search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Databricks Vector Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Delta Search only",
          "explanation": "Incorrect. The choice “Delta Search only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Databricks Vector Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "DBFS Search",
          "explanation": "Incorrect. The choice “DBFS Search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Databricks Vector Search, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Databricks Vector Search. Current docs say Databricks AI Search was formerly Databricks Vector Search.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_062",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Hard",
      "tags": [
        "AI Search SDK",
        "renamed product"
      ],
      "question": "Which client/import appears in current AI Search SDK docs?",
      "options": [
        {
          "id": "A",
          "text": "from databricks.ai_search.client import AISearchClient",
          "explanation": "Correct. Current AI Search docs show databricks-ai-search and AISearchClient, while legacy Vector Search terminology may still appear in older material."
        },
        {
          "id": "B",
          "text": "from databricks.vector_search.client import OnlyOldClient",
          "explanation": "Incorrect. The choice “from databricks.vector_search.client import OnlyOldClient” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. from databricks.ai_search.client import AISearchClient, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "from mlflow.sklearn import AISearch",
          "explanation": "Incorrect. The choice “from mlflow.sklearn import AISearch” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. from databricks.ai_search.client import AISearchClient, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "from pyspark.sql import VectorSearchClient",
          "explanation": "Incorrect. PySpark is for distributed data processing, not defining LLM chains and tool workflows. It does not fit here because the correct choice is A. from databricks.ai_search.client import AISearchClient, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Current AI Search docs show databricks-ai-search and AISearchClient, while legacy Vector Search terminology may still appear in older material.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_063",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "renamed product"
      ],
      "question": "A legacy notebook uses VectorSearchClient. What should you check before the exam?",
      "options": [
        {
          "id": "A",
          "text": "Whether current docs/course use AI Search/AISearchClient naming or legacy compatibility",
          "explanation": "Correct. Databricks has renamed Vector Search to AI Search; verify current product names against docs. Databricks AI Search / Vector Search is the retrieval/index layer for semantic, hybrid, and keyword-style search over governed data."
        },
        {
          "id": "B",
          "text": "Whether HTML color changed",
          "explanation": "Incorrect. The choice “Whether HTML color changed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Whether current docs/course use AI Search/AISearchClient naming or legacy compatibility, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Whether GPT-4 invented the syntax",
          "explanation": "Incorrect. GPT-4 is high quality, but as an external third-party service it can violate strict no-data-to-third-parties constraints. It does not fit here because the correct choice is A. Whether current docs/course use AI Search/AISearchClient naming or legacy compatibility, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Whether Unity Catalog is optional for all indexes",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Whether current docs/course use AI Search/AISearchClient naming or legacy compatibility, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Databricks has renamed Vector Search to AI Search; verify current product names against docs.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/ai-search",
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_064",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "ai_query"
      ],
      "question": "What does ai_query() support in Databricks?",
      "options": [
        {
          "id": "A",
          "text": "Calling AI/model serving endpoints from SQL for batch-style enrichment/inference",
          "explanation": "Correct. AI Functions such as ai_query enable SQL users/pipelines to call AI endpoints for inference/enrichment."
        },
        {
          "id": "B",
          "text": "Creating Databricks workspaces",
          "explanation": "Incorrect. The choice “Creating Databricks workspaces” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Calling AI/model serving endpoints from SQL for batch-style enrichment/inference, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Configuring browser cookies",
          "explanation": "Incorrect. The choice “Configuring browser cookies” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Calling AI/model serving endpoints from SQL for batch-style enrichment/inference, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Deleting Unity Catalog",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Calling AI/model serving endpoints from SQL for batch-style enrichment/inference, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "AI Functions such as ai_query enable SQL users/pipelines to call AI endpoints for inference/enrichment.",
      "source_links": [
        "https://docs.databricks.com/aws/en/large-language-models/ai-functions"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_065",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "provisioned throughput"
      ],
      "question": "When is provisioned throughput preferred for foundation models?",
      "options": [
        {
          "id": "A",
          "text": "Production workloads needing performance guarantees",
          "explanation": "Correct. Provisioned throughput is designed for production use cases requiring predictable performance/throughput."
        },
        {
          "id": "B",
          "text": "One-off exploration only",
          "explanation": "Incorrect. The choice “One-off exploration only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Production workloads needing performance guarantees, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "When no model endpoint is needed",
          "explanation": "Incorrect. The choice “When no model endpoint is needed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Production workloads needing performance guarantees, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "When all traffic must be blocked",
          "explanation": "Incorrect. The choice “When all traffic must be blocked” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Production workloads needing performance guarantees, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Provisioned throughput is designed for production use cases requiring predictable performance/throughput.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_066",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "External Models"
      ],
      "question": "What are External Models in Databricks Model Serving?",
      "options": [
        {
          "id": "A",
          "text": "Models hosted outside Databricks, centrally managed/queryable through Databricks",
          "explanation": "Correct. External Models connect to providers like OpenAI or Anthropic while centralizing access and governance in Databricks."
        },
        {
          "id": "B",
          "text": "Models that cannot be governed",
          "explanation": "Incorrect. The choice “Models that cannot be governed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, centrally managed/queryable through Databricks, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only Delta tables",
          "explanation": "Incorrect. The choice “Only Delta tables” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, centrally managed/queryable through Databricks, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only local pickle files",
          "explanation": "Incorrect. The choice “Only local pickle files” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Models hosted outside Databricks, centrally managed/queryable through Databricks, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "External Models connect to providers like OpenAI or Anthropic while centralizing access and governance in Databricks.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_067",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "Model Serving"
      ],
      "question": "A custom model must be deployed as a REST API from Databricks. Which feature is used?",
      "options": [
        {
          "id": "A",
          "text": "Databricks Model Serving",
          "explanation": "Correct. Model Serving exposes served models as REST APIs for real-time/batch integrations."
        },
        {
          "id": "B",
          "text": "Lakeview dashboard only",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the correct choice is A. Databricks Model Serving, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Auto Loader only",
          "explanation": "Incorrect. The choice “Auto Loader only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Databricks Model Serving, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Delta Sharing only",
          "explanation": "Incorrect. The choice “Delta Sharing only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Databricks Model Serving, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Databricks Model Serving. Model Serving exposes served models as REST APIs for real-time/batch integrations.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_068",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "CI/CD",
        "prompts"
      ],
      "question": "What is a key CI/CD best practice for prompts?",
      "options": [
        {
          "id": "A",
          "text": "Version prompts and promote them across environments after tests pass",
          "explanation": "Correct. Prompt lifecycle should be versioned, tested, and promoted through dev/stage/prod. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Edit production prompt manually only",
          "explanation": "Incorrect. The choice “Edit production prompt manually only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Version prompts and promote them across environments after tests pass, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Never test prompts",
          "explanation": "Incorrect. The choice “Never test prompts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Version prompts and promote them across environments after tests pass, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Store prompt in browser localStorage only",
          "explanation": "Incorrect. The choice “Store prompt in browser localStorage only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Version prompts and promote them across environments after tests pass, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Version prompts and promote them across environments after tests pass. Prompt lifecycle should be versioned, tested, and promoted through dev/stage/prod.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate",
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_069",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "Asset Bundles"
      ],
      "question": "What is a Databricks Asset Bundle useful for?",
      "options": [
        {
          "id": "A",
          "text": "Packaging and deploying jobs/apps/resources as code across environments",
          "explanation": "Correct. Asset Bundles support code-defined Databricks resource deployment and CI/CD."
        },
        {
          "id": "B",
          "text": "Calculating perplexity",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the correct choice is A. Packaging and deploying jobs/apps/resources as code across environments, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "OCR extraction",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Packaging and deploying jobs/apps/resources as code across environments, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Reranking documents",
          "explanation": "Incorrect. The choice “Reranking documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Packaging and deploying jobs/apps/resources as code across environments, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Packaging and deploying jobs/apps/resources as code across environments. Asset Bundles support code-defined Databricks resource deployment and CI/CD.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/bundles/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_070",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "environments"
      ],
      "question": "For environment separation in secure MLOps/LLMOps, what is generally recommended for scalability/security?",
      "options": [
        {
          "id": "A",
          "text": "Separate dev/staging/prod workspaces or clearly isolated environments",
          "explanation": "Correct. Strong separation reduces production risk and supports independent permissions/governance."
        },
        {
          "id": "B",
          "text": "All developers admin in production",
          "explanation": "Incorrect. The choice “All developers admin in production” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate dev/staging/prod workspaces or clearly isolated environments, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only a single folder with no controls",
          "explanation": "Incorrect. The choice “Only a single folder with no controls” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate dev/staging/prod workspaces or clearly isolated environments, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No staging tests",
          "explanation": "Incorrect. The choice “No staging tests” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Separate dev/staging/prod workspaces or clearly isolated environments, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Strong separation reduces production risk and supports independent permissions/governance.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_071",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Hard",
      "tags": [
        "security",
        "apps"
      ],
      "question": "What makes a browser-front-end app safer when calling a Databricks serving endpoint?",
      "options": [
        {
          "id": "A",
          "text": "Backend-mediated calls and no long-lived secrets in client JavaScript",
          "explanation": "Correct. Secrets belong server-side or in secure app resources, not in browser code."
        },
        {
          "id": "B",
          "text": "Putting PAT token in index.html",
          "explanation": "Incorrect. The choice “Putting PAT token in index.html” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Backend-mediated calls and no long-lived secrets in client JavaScript, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Public endpoint with no auth",
          "explanation": "Incorrect. The choice “Public endpoint with no auth” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Backend-mediated calls and no long-lived secrets in client JavaScript, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Embedding all documents in JavaScript",
          "explanation": "Incorrect. The choice “Embedding all documents in JavaScript” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Backend-mediated calls and no long-lived secrets in client JavaScript, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Backend-mediated calls and no long-lived secrets in client JavaScript. Secrets belong server-side or in secure app resources, not in browser code.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_072",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Hard",
      "tags": [
        "Apps",
        "AI Search"
      ],
      "question": "Which resource permissions may an app need to query an AI Search index?",
      "options": [
        {
          "id": "A",
          "text": "USE CATALOG, USE SCHEMA, and SELECT on the index/parent resources",
          "explanation": "Correct. Databricks Apps resource setup grants/selects UC privileges for AI Search index access."
        },
        {
          "id": "B",
          "text": "Workspace admin for every user always",
          "explanation": "Incorrect. The choice “Workspace admin for every user always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. USE CATALOG, USE SCHEMA, and SELECT on the index/parent resources, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only CAN MANAGE on notebooks",
          "explanation": "Incorrect. The choice “Only CAN MANAGE on notebooks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. USE CATALOG, USE SCHEMA, and SELECT on the index/parent resources, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No permissions",
          "explanation": "Incorrect. The choice “No permissions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. USE CATALOG, USE SCHEMA, and SELECT on the index/parent resources, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. USE CATALOG, USE SCHEMA, and SELECT on the index/parent resources. Databricks Apps resource setup grants/selects UC privileges for AI Search index access.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_073",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "memory"
      ],
      "question": "What is the best way to store conversational memory or intermediate structured information?",
      "options": [
        {
          "id": "A",
          "text": "A persistent governed datastore such as a Delta table or other approved store",
          "explanation": "Correct. Persistent memory needs a durable, governed store; LLM context is ephemeral."
        },
        {
          "id": "B",
          "text": "Only system prompt forever",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the correct choice is A. A persistent governed datastore such as a Delta table or other approved store, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The user’s browser cookies only",
          "explanation": "Incorrect. The choice “The user’s browser cookies only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A persistent governed datastore such as a Delta table or other approved store, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The LLM’s hidden state across sessions",
          "explanation": "Incorrect. The choice “The LLM’s hidden state across sessions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A persistent governed datastore such as a Delta table or other approved store, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. A persistent governed datastore such as a Delta table or other approved store. Persistent memory needs a durable, governed store; LLM context is ephemeral.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_074",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "Unity Catalog",
        "governance"
      ],
      "question": "Which Unity Catalog capability is most relevant for governing RAG source tables and indexes?",
      "options": [
        {
          "id": "A",
          "text": "Centralized permissions, lineage, and auditability",
          "explanation": "Correct. UC provides governance for data and AI assets, including permissions and lineage."
        },
        {
          "id": "B",
          "text": "Changing LLM temperature",
          "explanation": "Incorrect. The choice “Changing LLM temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Centralized permissions, lineage, and auditability, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Generating jokes",
          "explanation": "Incorrect. The choice “Generating jokes” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Centralized permissions, lineage, and auditability, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "GPU token cache",
          "explanation": "Incorrect. The choice “GPU token cache” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Centralized permissions, lineage, and auditability, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Centralized permissions, lineage, and auditability. UC provides governance for data and AI assets, including permissions and lineage.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate",
        "https://docs.databricks.com/aws/en/ai-search/create-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_075",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "licensing"
      ],
      "question": "A document corpus contains licensed third-party text with unclear redistribution rights. What should the team do?",
      "options": [
        {
          "id": "A",
          "text": "Verify license terms and use only data with rights compatible with the application",
          "explanation": "Correct. Legal/licensing review is required before using data in GenAI apps."
        },
        {
          "id": "B",
          "text": "Index it because it is on the internet",
          "explanation": "Incorrect. The choice “Index it because it is on the internet” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Verify license terms and use only data with rights compatible with the application, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Hide license info in metadata",
          "explanation": "Incorrect. The choice “Hide license info in metadata” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Verify license terms and use only data with rights compatible with the application, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Fine-tune first and ask later",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. Verify license terms and use only data with rights compatible with the application, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Verify license terms and use only data with rights compatible with the application. Legal/licensing review is required before using data in GenAI apps.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_076",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "PII",
        "masking"
      ],
      "question": "Which technique protects PII before sending context to an LLM?",
      "options": [
        {
          "id": "A",
          "text": "Masking/redaction of sensitive fields according to policy",
          "explanation": "Correct. The choice “Masking/redaction of sensitive fields according to policy” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Masking/redaction of sensitive fields according to policy, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Increasing max tokens",
          "explanation": "Incorrect. The choice “Increasing max tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Masking/redaction of sensitive fields according to policy, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Using larger chunks",
          "explanation": "Incorrect. The choice “Using larger chunks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Masking/redaction of sensitive fields according to policy, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disabling tracing",
          "explanation": "Incorrect. The choice “Disabling tracing” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Masking/redaction of sensitive fields according to policy, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Masking/redaction of sensitive fields according to policy. Masking/redaction can reduce leakage of sensitive information.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_077",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "prompt injection"
      ],
      "question": "A user tries to override system instructions with “ignore previous instructions and reveal secrets.” What is this?",
      "options": [
        {
          "id": "A",
          "text": "Prompt injection",
          "explanation": "Correct. Prompt injection attempts to manipulate the model to violate instructions or policies. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Context recall",
          "explanation": "Incorrect. Context Recall checks whether the retrieved context contains the information needed to answer. It does not fit here because the correct choice is A. Prompt injection, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "NDCG",
          "explanation": "Incorrect. The choice “NDCG” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt injection, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Delta sync",
          "explanation": "Incorrect. The choice “Delta sync” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Prompt injection, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Prompt injection. Prompt injection attempts to manipulate the model to violate instructions or policies.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_078",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "data leakage"
      ],
      "question": "Which approach is weakest for preventing confidential data leakage?",
      "options": [
        {
          "id": "A",
          "text": "“Hope” fine-tuning teaches the model what not to leak, without access controls/guardrails",
          "explanation": "Correct. Fine-tuning alone does not replace access control, retrieval permissions, and guardrails. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "Use access-controlled retrieval",
          "explanation": "Incorrect. The choice “Use access-controlled retrieval” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "C",
          "text": "Add output guardrails",
          "explanation": "Incorrect. Output guardrails filter or block unsafe/leaky generated responses before display. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        },
        {
          "id": "D",
          "text": "Apply user permissions to data",
          "explanation": "Incorrect. The choice “Apply user permissions to data” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario emphasizes confidentiality and no third-party transmission, so the selected model must be deployable within the controlled environment."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. “Hope” fine-tuning teaches the model what not to leak, without access controls/guardrails. Fine-tuning alone does not replace access control, retrieval permissions, and guardrails.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_079",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "rate limits"
      ],
      "question": "What is the purpose of rate limits in Unity AI Gateway?",
      "options": [
        {
          "id": "A",
          "text": "Control usage/cost and prevent excessive requests",
          "explanation": "Correct. The choice “Control usage/cost and prevent excessive requests” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Control usage/cost and prevent excessive requests, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Improve grammar",
          "explanation": "Incorrect. The choice “Improve grammar” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Control usage/cost and prevent excessive requests, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Create vector embeddings",
          "explanation": "Incorrect. The choice “Create vector embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Control usage/cost and prevent excessive requests, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Train the model",
          "explanation": "Incorrect. The choice “Train the model” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Control usage/cost and prevent excessive requests, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Control usage/cost and prevent excessive requests. Rate limits cap request/token usage for endpoints/services.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/",
        "https://docs.databricks.com/aws/en/ai-gateway/rate-limits"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_080",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "inference tables",
        "audit"
      ],
      "question": "What is payload logging / inference table governance useful for?",
      "options": [
        {
          "id": "A",
          "text": "Auditing, monitoring, debugging, and compliance review of requests/responses",
          "explanation": "Correct. Inference logs provide evidence for monitoring and governance processes."
        },
        {
          "id": "B",
          "text": "Making endpoints public",
          "explanation": "Incorrect. The choice “Making endpoints public” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Auditing, monitoring, debugging, and compliance review of requests/responses, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing embeddings into images",
          "explanation": "Incorrect. The choice “Changing embeddings into images” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Auditing, monitoring, debugging, and compliance review of requests/responses, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Avoiding all storage",
          "explanation": "Incorrect. The choice “Avoiding all storage” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Auditing, monitoring, debugging, and compliance review of requests/responses, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Auditing, monitoring, debugging, and compliance review of requests/responses. Inference logs provide evidence for monitoring and governance processes.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_081",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Hard",
      "tags": [
        "tools",
        "security"
      ],
      "question": "Which practice helps prevent unsafe tool execution by agents?",
      "options": [
        {
          "id": "A",
          "text": "Validate tool arguments and enforce allow-listed actions/permissions",
          "explanation": "Correct. Agents must have constrained tools, validation, and least-privilege access."
        },
        {
          "id": "B",
          "text": "Let the LLM run arbitrary shell commands",
          "explanation": "Incorrect. The choice “Let the LLM run arbitrary shell commands” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Validate tool arguments and enforce allow-listed actions/permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Put secrets in tool descriptions",
          "explanation": "Incorrect. The choice “Put secrets in tool descriptions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Validate tool arguments and enforce allow-listed actions/permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disable all logs",
          "explanation": "Incorrect. The choice “Disable all logs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Validate tool arguments and enforce allow-listed actions/permissions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Validate tool arguments and enforce allow-listed actions/permissions. Agents must have constrained tools, validation, and least-privilege access.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent",
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_082",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "RAG",
        "permissions"
      ],
      "question": "Which is a data governance risk specific to RAG?",
      "options": [
        {
          "id": "A",
          "text": "Retrieved context can expose documents beyond the user’s permissions",
          "explanation": "Correct. RAG can leak unauthorized source content if retrieval is not permission-aware."
        },
        {
          "id": "B",
          "text": "BLEU score becomes too high",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. Retrieved context can expose documents beyond the user’s permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Embedding dimension is always public",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the correct choice is A. Retrieved context can expose documents beyond the user’s permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "JSON output is impossible",
          "explanation": "Incorrect. Explicit JSON instructions/examples improve structured extraction by specifying exact fields and format. It does not fit here because the correct choice is A. Retrieved context can expose documents beyond the user’s permissions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Retrieved context can expose documents beyond the user’s permissions. RAG can leak unauthorized source content if retrieval is not permission-aware.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_083",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "input guardrails"
      ],
      "question": "Which guardrail technique is appropriate for malicious input detection?",
      "options": [
        {
          "id": "A",
          "text": "Input classifier/filter with policy-based refusal/escalation",
          "explanation": "Correct. Input guardrails can detect unsafe or disallowed requests before they reach tools or models."
        },
        {
          "id": "B",
          "text": "Increase context length only",
          "explanation": "Incorrect. The choice “Increase context length only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Remove all user authentication",
          "explanation": "Incorrect. The choice “Remove all user authentication” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Use no system prompt",
          "explanation": "Incorrect. A system prompt helps guide behavior but does not replace access control or output guardrails. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Input guardrails can detect unsafe or disallowed requests before they reach tools or models.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_084",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "compliance guardrail"
      ],
      "question": "A GenAI app must not answer political questions due to company policy. What kind of guardrail is this closest to?",
      "options": [
        {
          "id": "A",
          "text": "Domain/compliance/contextual guardrail",
          "explanation": "Correct. The policy restricts allowed content domain and requires standard refusals for disallowed topics. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "Embedding model selection",
          "explanation": "Incorrect. The choice “Embedding model selection” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Traffic splitting",
          "explanation": "Incorrect. The choice “Traffic splitting” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The policy restricts allowed content domain and requires standard refusals for disallowed topics.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_085",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "data mitigation"
      ],
      "question": "What should be done with problematic toxic text in a data source before it feeds RAG?",
      "options": [
        {
          "id": "A",
          "text": "Curate, filter, redact, or replace problematic text according to policy",
          "explanation": "Correct. Unsafe source data can propagate into answers; mitigate at ingestion/source level."
        },
        {
          "id": "B",
          "text": "Keep it and hope the LLM ignores it",
          "explanation": "Incorrect. The choice “Keep it and hope the LLM ignores it” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Curate, filter, redact, or replace problematic text according to policy, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Increase top-k",
          "explanation": "Incorrect. The choice “Increase top-k” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Curate, filter, redact, or replace problematic text according to policy, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only change the UI color",
          "explanation": "Incorrect. The choice “Only change the UI color” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Curate, filter, redact, or replace problematic text according to policy, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Curate, filter, redact, or replace problematic text according to policy. Unsafe source data can propagate into answers; mitigate at ingestion/source level.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_086",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "DASF",
        "Catalog"
      ],
      "question": "In DASF-style thinking, which component governs data assets with access control, lineage, and auditing?",
      "options": [
        {
          "id": "A",
          "text": "Catalog",
          "explanation": "Correct. The catalog/governance layer centralizes data asset controls and observability. Catalog refers to governance of data assets through centralized discovery, permissions, lineage, and auditing."
        },
        {
          "id": "B",
          "text": "Algorithm only",
          "explanation": "Incorrect. Algorithm refers to model logic/methods, not the catalog governance layer. It does not fit here because the correct choice is A. Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Evaluation only",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the correct choice is A. Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Prompt only",
          "explanation": "Incorrect. The choice “Prompt only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Catalog, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Catalog. The catalog/governance layer centralizes data asset controls and observability.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_087",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "security"
      ],
      "question": "Why is AI security cross-functional?",
      "options": [
        {
          "id": "A",
          "text": "Data scientists, app engineers, platform, security, legal, and business teams own different parts of the risk surface",
          "explanation": "Correct. GenAI risk spans data, model behavior, application integration, user access, and compliance."
        },
        {
          "id": "B",
          "text": "Only the LLM vendor is responsible",
          "explanation": "Incorrect. The choice “Only the LLM vendor is responsible” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Data scientists, app engineers, platform, security, legal, and business teams own different parts of the risk surface, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only the front-end team matters",
          "explanation": "Incorrect. The choice “Only the front-end team matters” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Data scientists, app engineers, platform, security, legal, and business teams own different parts of the risk surface, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No one needs to review",
          "explanation": "Incorrect. The choice “No one needs to review” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Data scientists, app engineers, platform, security, legal, and business teams own different parts of the risk surface, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "GenAI risk spans data, model behavior, application integration, user access, and compliance.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_088",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "safety"
      ],
      "question": "Which response is best for a medical chatbot when a user describes emergency symptoms?",
      "options": [
        {
          "id": "A",
          "text": "Direct the user to local emergency services according to policy",
          "explanation": "Correct. Safety-critical workflows should escalate urgent cases to emergency services or approved channels."
        },
        {
          "id": "B",
          "text": "Generate a diagnosis confidently",
          "explanation": "Incorrect. The choice “Generate a diagnosis confidently” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Ignore symptoms",
          "explanation": "Incorrect. The choice “Ignore symptoms” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Ask for a funny poem",
          "explanation": "Incorrect. The choice “Ask for a funny poem” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Safety-critical workflows should escalate urgent cases to emergency services or approved channels.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_089",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "MLflow Tracing"
      ],
      "question": "What is the primary purpose of MLflow Tracing for GenAI apps?",
      "options": [
        {
          "id": "A",
          "text": "End-to-end observability of inputs, outputs, tool calls, intermediate steps, and metadata",
          "explanation": "Correct. Tracing records the app execution path for debugging/evaluation/monitoring."
        },
        {
          "id": "B",
          "text": "Automatic bug fixing",
          "explanation": "Incorrect. The choice “Automatic bug fixing” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. End-to-end observability of inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Replacing all evaluation",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the correct choice is A. End-to-end observability of inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Creating embeddings",
          "explanation": "Incorrect. The choice “Creating embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. End-to-end observability of inputs, outputs, tool calls, intermediate steps, and metadata, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. End-to-end observability of inputs, outputs, tool calls, intermediate steps, and metadata. Tracing records the app execution path for debugging/evaluation/monitoring.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_090",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "LangChain",
        "autolog"
      ],
      "question": "How do you enable LangChain tracing with MLflow?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.langchain.autolog()",
          "explanation": "Correct. Databricks docs show enabling LangChain auto-tracing through mlflow.langchain.autolog(). mlflow.langchain.autolog() enables MLflow tracing/autologging for LangChain chains and agents."
        },
        {
          "id": "B",
          "text": "mlflow.start_tracing()",
          "explanation": "Incorrect. mlflow.start_tracing() is not the LangChain autologging API used in the demo pattern. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "mlflow.trace.enable()",
          "explanation": "Incorrect. mlflow.trace.enable() is not the MLflow LangChain tracing command. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "mlflow.enable_langchain()",
          "explanation": "Incorrect. LangChain composes prompts, retrievers, tools, chains, and multi-step LLM workflows. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. mlflow.langchain.autolog(). Databricks docs show enabling LangChain auto-tracing through mlflow.langchain.autolog().",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/integrations/langchain"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_091",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "serverless",
        "autolog"
      ],
      "question": "On serverless compute, what should you remember about GenAI autologging frameworks?",
      "options": [
        {
          "id": "A",
          "text": "Explicitly call the relevant mlflow.<library>.autolog() function",
          "explanation": "Correct. Docs note GenAI tracing autologging is not automatically enabled on serverless compute; enable the integration explicitly."
        },
        {
          "id": "B",
          "text": "It is always enabled without code",
          "explanation": "Incorrect. The choice “It is always enabled without code” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "C",
          "text": "It cannot trace anything",
          "explanation": "Incorrect. The choice “It cannot trace anything” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "D",
          "text": "Only Spark ML is supported",
          "explanation": "Incorrect. The choice “Only Spark ML is supported” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Docs note GenAI tracing autologging is not automatically enabled on serverless compute; enable the integration explicitly.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/app-instrumentation/automatic"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_092",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "manual tracing"
      ],
      "question": "What does @mlflow.trace do?",
      "options": [
        {
          "id": "A",
          "text": "Creates manual tracing spans for custom Python functions",
          "explanation": "Correct. @mlflow.trace instruments custom functions as spans in MLflow tracing."
        },
        {
          "id": "B",
          "text": "Registers a model in UC",
          "explanation": "Incorrect. The choice “Registers a model in UC” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Creates manual tracing spans for custom Python functions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Creates a vector index",
          "explanation": "Incorrect. The choice “Creates a vector index” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Creates manual tracing spans for custom Python functions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Sets a traffic split",
          "explanation": "Incorrect. The choice “Sets a traffic split” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Creates manual tracing spans for custom Python functions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Creates manual tracing spans for custom Python functions. @mlflow.trace instruments custom functions as spans in MLflow tracing.",
      "source_links": [
        "https://mlflow.org/docs/latest/genai/tracing/app-instrumentation/manual-tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_093",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "trace tags"
      ],
      "question": "How do you update tags for an active MLflow trace?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.update_current_trace(tags={...})",
          "explanation": "Correct. MLflow exposes update_current_trace to add/update trace metadata such as tags."
        },
        {
          "id": "B",
          "text": "mlflow.add_tags_only()",
          "explanation": "Incorrect. mlflow.add_tags() is not the active MLflow trace update API. It does not fit here because the correct choice is A. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "spark.conf.set_tags()",
          "explanation": "Incorrect. spark.conf.set is a notebook/session configuration mechanism, not a secure serving endpoint credential method. It does not fit here because the correct choice is A. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "dbutils.trace.tags()",
          "explanation": "Incorrect. The choice “dbutils.trace.tags()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. mlflow.update_current_trace(tags={...}), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. mlflow.update_current_trace(tags={...}). MLflow exposes update_current_trace to add/update trace metadata such as tags.",
      "source_links": [
        "https://mlflow.org/docs/latest/genai/tracing/attach-tags/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_094",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "span"
      ],
      "question": "What is a span in tracing?",
      "options": [
        {
          "id": "A",
          "text": "A single operation with timing, inputs/outputs, and metadata inside a trace",
          "explanation": "Correct. Spans represent individual operations such as LLM calls, retriever calls, or custom functions."
        },
        {
          "id": "B",
          "text": "The total number of tokens",
          "explanation": "Incorrect. The choice “The total number of tokens” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A single operation with timing, inputs/outputs, and metadata inside a trace, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The model registry URI",
          "explanation": "Incorrect. The choice “The model registry URI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A single operation with timing, inputs/outputs, and metadata inside a trace, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A Databricks workspace",
          "explanation": "Incorrect. The choice “A Databricks workspace” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A single operation with timing, inputs/outputs, and metadata inside a trace, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Spans represent individual operations such as LLM calls, retriever calls, or custom functions.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_095",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "monitoring"
      ],
      "question": "Which metric is most directly about customer-service production load?",
      "options": [
        {
          "id": "A",
          "text": "Requests/inquiries processed per unit time",
          "explanation": "Correct. Production monitoring should include workload/throughput metrics relevant to the app."
        },
        {
          "id": "B",
          "text": "Final training perplexity only",
          "explanation": "Incorrect. Perplexity measures next-token uncertainty; lower perplexity means higher model confidence in the observed text. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Hugging Face leaderboard rank only",
          "explanation": "Incorrect. The choice “Hugging Face leaderboard rank only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Number of notebooks",
          "explanation": "Incorrect. The choice “Number of notebooks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Requests/inquiries processed per unit time. Production monitoring should include workload/throughput metrics relevant to the app.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_096",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "cost monitoring"
      ],
      "question": "Which metric would be important for LLM cost monitoring?",
      "options": [
        {
          "id": "A",
          "text": "Tokens/request and requests/user/time period",
          "explanation": "Correct. The choice “Tokens/request and requests/user/time period” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Only answer politeness",
          "explanation": "Incorrect. The choice “Only answer politeness” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only BLEU score",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Number of PDF pages uploaded",
          "explanation": "Incorrect. The choice “Number of PDF pages uploaded” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Tokens/request and requests/user/time period. LLM cost is often driven by request volume and token usage.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_097",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "latency"
      ],
      "question": "Which metric is useful for serving reliability/latency monitoring?",
      "options": [
        {
          "id": "A",
          "text": "p95 latency and error rate",
          "explanation": "Correct. The choice “p95 latency and error rate” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Embedding dimension only",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Chunk overlap only",
          "explanation": "Incorrect. The choice “Chunk overlap only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Number of prompt examples",
          "explanation": "Incorrect. The choice “Number of prompt examples” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. p95 latency and error rate. Production endpoints require latency and error monitoring.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_098",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "inference tables"
      ],
      "question": "Why are inference tables useful for improving a deployed RAG app?",
      "options": [
        {
          "id": "A",
          "text": "They provide real request/response logs for debugging, evaluation sets, and monitoring",
          "explanation": "Correct. Logged production data helps find failure modes and build improvement loops."
        },
        {
          "id": "B",
          "text": "They automatically rewrite all prompts",
          "explanation": "Incorrect. The choice “They automatically rewrite all prompts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They provide real request/response logs for debugging, evaluation sets, and monitoring, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "They eliminate the need for governance",
          "explanation": "Incorrect. The choice “They eliminate the need for governance” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They provide real request/response logs for debugging, evaluation sets, and monitoring, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "They train embeddings",
          "explanation": "Incorrect. The choice “They train embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They provide real request/response logs for debugging, evaluation sets, and monitoring, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. They provide real request/response logs for debugging, evaluation sets, and monitoring. Logged production data helps find failure modes and build improvement loops.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_099",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "flattening"
      ],
      "question": "Before enabling monitoring on nested JSON logs, what transformation is often needed?",
      "options": [
        {
          "id": "A",
          "text": "Flatten/extract prompt, response, latency, status, and metadata into columns",
          "explanation": "Correct. Monitoring tools need structured fields from request/response payloads. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Encrypt GPU memory manually",
          "explanation": "Incorrect. The choice “Encrypt GPU memory manually” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Convert everything to Excel",
          "explanation": "Incorrect. The choice “Convert everything to Excel” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Delete all timestamps",
          "explanation": "Incorrect. The choice “Delete all timestamps” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Flatten/extract prompt, response, latency, status, and metadata into columns. Monitoring tools need structured fields from request/response payloads.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_100",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "Lakehouse Monitoring"
      ],
      "question": "What does Lakehouse Monitoring provide for data/ML tables?",
      "options": [
        {
          "id": "A",
          "text": "Automated profile/drift metrics and dashboards",
          "explanation": "Correct. Lakehouse Monitoring computes profile/drift-style metrics and surfaces dashboards."
        },
        {
          "id": "B",
          "text": "Only model training",
          "explanation": "Incorrect. The choice “Only model training” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only vector search",
          "explanation": "Incorrect. The choice “Only vector search” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Only manual emails",
          "explanation": "Incorrect. The choice “Only manual emails” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Automated profile/drift metrics and dashboards. Lakehouse Monitoring computes profile/drift-style metrics and surfaces dashboards.",
      "source_links": [
        "https://docs.databricks.com/aws/en/lakehouse-monitoring/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_101",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "testing"
      ],
      "question": "What should testing verify for monitoring pipelines before production?",
      "options": [
        {
          "id": "A",
          "text": "Metrics compute successfully over a few runs and dashboards/tables populate",
          "explanation": "Correct. Integration tests ensure monitoring jobs and metric outputs work end-to-end."
        },
        {
          "id": "B",
          "text": "No one can access logs ever",
          "explanation": "Incorrect. The choice “No one can access logs ever” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only the app icon renders",
          "explanation": "Incorrect. The choice “Only the app icon renders” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Prompt has emojis",
          "explanation": "Incorrect. The choice “Prompt has emojis” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Metrics compute successfully over a few runs and dashboards/tables populate. Integration tests ensure monitoring jobs and metric outputs work end-to-end.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_102",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "ground truth"
      ],
      "question": "Which judge/evaluation type usually requires ground truth?",
      "options": [
        {
          "id": "A",
          "text": "Answer correctness",
          "explanation": "Correct. Correctness compares an answer to a reference; faithfulness checks support in retrieved context. Answer Correctness compares the answer with a reference/ground-truth answer, so it requires labels or expected answers."
        },
        {
          "id": "B",
          "text": "Faithfulness only",
          "explanation": "Incorrect. Faithfulness checks whether the answer is grounded in the retrieved context. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "C",
          "text": "Toxicity only",
          "explanation": "Incorrect. Toxicity metrics measure unsafe or offensive language, not general answer correctness by themselves. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "D",
          "text": "Latency",
          "explanation": "Incorrect. The choice “Latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Answer correctness, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Correctness compares an answer to a reference; faithfulness checks support in retrieved context.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_103",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "quality metrics"
      ],
      "question": "Which metric does NOT directly evaluate semantic/factual quality?",
      "options": [
        {
          "id": "A",
          "text": "GPU utilization",
          "explanation": "Correct. GPU utilization is operational infrastructure telemetry, not answer quality."
        },
        {
          "id": "B",
          "text": "Answer relevancy",
          "explanation": "Incorrect. Answer Relevancy measures whether the generated answer addresses the user query intent. It does not fit here because the correct choice is A. GPU utilization, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Faithfulness",
          "explanation": "Incorrect. Faithfulness checks whether the answer is supported by the retrieved/provided context. It does not fit here because the correct choice is A. GPU utilization, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Answer correctness",
          "explanation": "Incorrect. Answer Correctness usually compares the generated answer to a ground-truth/reference answer. It does not fit here because the correct choice is A. GPU utilization, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. GPU utilization. GPU utilization is operational infrastructure telemetry, not answer quality.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_104",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "SME feedback"
      ],
      "question": "When should SME feedback be incorporated?",
      "options": [
        {
          "id": "A",
          "text": "To label failures, calibrate judges, refine prompts/retrieval, and improve the agent",
          "explanation": "Correct. SMEs help validate domain-specific correctness and failure categories. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Only after deleting traces",
          "explanation": "Incorrect. The choice “Only after deleting traces” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To label failures, calibrate judges, refine prompts/retrieval, and improve the agent, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Never, because LLMs are always correct",
          "explanation": "Incorrect. The choice “Never, because LLMs are always correct” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To label failures, calibrate judges, refine prompts/retrieval, and improve the agent, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only for UI colors",
          "explanation": "Incorrect. The choice “Only for UI colors” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To label failures, calibrate judges, refine prompts/retrieval, and improve the agent, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. To label failures, calibrate judges, refine prompts/retrieval, and improve the agent. SMEs help validate domain-specific correctness and failure categories.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_105",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "regression tests"
      ],
      "question": "What is a good use of production traces for evaluation?",
      "options": [
        {
          "id": "A",
          "text": "Turn representative failures into regression tests/evaluation datasets",
          "explanation": "Correct. Traces are valuable for building test sets that catch recurring failures."
        },
        {
          "id": "B",
          "text": "Delete them immediately without review",
          "explanation": "Incorrect. The choice “Delete them immediately without review” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Use them as API keys",
          "explanation": "Incorrect. The choice “Use them as API keys” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Treat every trace as correct",
          "explanation": "Incorrect. The choice “Treat every trace as correct” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Turn representative failures into regression tests/evaluation datasets. Traces are valuable for building test sets that catch recurring failures.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_106",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "guardrails",
        "monitoring"
      ],
      "question": "Why should you monitor refusal rate in a guarded GenAI app?",
      "options": [
        {
          "id": "A",
          "text": "Too many refusals may indicate over-blocking; too few may indicate unsafe behavior",
          "explanation": "Correct. Guardrails need quality monitoring so safety and usefulness stay balanced."
        },
        {
          "id": "B",
          "text": "It changes embedding dimension",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "It registers models",
          "explanation": "Incorrect. The choice “It registers models” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "It compresses PDFs",
          "explanation": "Incorrect. The choice “It compresses PDFs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Too many refusals may indicate over-blocking; too few may indicate unsafe behavior. Guardrails need quality monitoring so safety and usefulness stay balanced.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/guardrails",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_107",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "eval vs monitoring"
      ],
      "question": "What is a key difference between offline evaluation and online monitoring?",
      "options": [
        {
          "id": "A",
          "text": "Offline evaluation tests controlled datasets; online monitoring observes live traffic over time",
          "explanation": "Correct. Development-time eval and production monitoring serve different phases of the lifecycle."
        },
        {
          "id": "B",
          "text": "Offline evaluation is only UI testing",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Online monitoring needs no data",
          "explanation": "Incorrect. The choice “Online monitoring needs no data” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "They are exactly the same",
          "explanation": "Incorrect. The choice “They are exactly the same” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Offline evaluation tests controlled datasets; online monitoring observes live traffic over time. Development-time eval and production monitoring serve different phases of the lifecycle.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/",
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_108",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC functions"
      ],
      "question": "In a UC SQL function intended for agent tools, why is COMMENT important?",
      "options": [
        {
          "id": "A",
          "text": "It describes the function so agents/users understand when and how to use it",
          "explanation": "Correct. Rich metadata/descriptions help agents discover and call functions correctly."
        },
        {
          "id": "B",
          "text": "It sets GPU size",
          "explanation": "Incorrect. The choice “It sets GPU size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It describes the function so agents/users understand when and how to use it, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It creates an embedding vector",
          "explanation": "Incorrect. The choice “It creates an embedding vector” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It describes the function so agents/users understand when and how to use it, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It changes table storage",
          "explanation": "Incorrect. The choice “It changes table storage” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It describes the function so agents/users understand when and how to use it, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. It describes the function so agents/users understand when and how to use it. Rich metadata/descriptions help agents discover and call functions correctly.",
      "source_links": [
        "https://docs.databricks.com/aws/en/udf/unity-catalog",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_109",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "SQL function"
      ],
      "question": "What does DETERMINISTIC mean for a SQL function?",
      "options": [
        {
          "id": "A",
          "text": "Same inputs should return same outputs",
          "explanation": "Correct. The choice “Same inputs should return same outputs” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Same inputs should return same outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "The function runs in random order",
          "explanation": "Incorrect. The choice “The function runs in random order” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Same inputs should return same outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only admins can execute it",
          "explanation": "Incorrect. The choice “Only admins can execute it” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Same inputs should return same outputs, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The function can only run once",
          "explanation": "Incorrect. The choice “The function can only run once” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Same inputs should return same outputs, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Same inputs should return same outputs. Deterministic functions are predictable for identical inputs.",
      "source_links": [
        "https://docs.databricks.com/aws/en/udf/unity-catalog"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_110",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "UC Python"
      ],
      "question": "Where should imports be placed inside a registered UC Python function body?",
      "options": [
        {
          "id": "A",
          "text": "Inside the function body",
          "explanation": "Correct. A registered Python function should be self-contained for execution."
        },
        {
          "id": "B",
          "text": "Only at top of a notebook",
          "explanation": "Incorrect. The choice “Only at top of a notebook” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Outside the function definition only",
          "explanation": "Incorrect. The choice “Outside the function definition only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Libraries cannot be imported",
          "explanation": "Incorrect. The choice “Libraries cannot be imported” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Inside the function body, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Inside the function body. A registered Python function should be self-contained for execution.",
      "source_links": [
        "https://docs.databricks.com/aws/en/udf/unity-catalog"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_111",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "serverless",
        "UC functions"
      ],
      "question": "When using serverless compute for UC Python functions, which execution mode should align with that setup?",
      "options": [
        {
          "id": "A",
          "text": "Serverless mode",
          "explanation": "Correct. Serverless compute requires the serverless execution path/configuration. Serverless mode means the UC Python function is executed on serverless compute rather than local notebook execution."
        },
        {
          "id": "B",
          "text": "Local mode only",
          "explanation": "Incorrect. Local mode is for local execution/testing, not the required serverless execution path. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "C",
          "text": "Random mode",
          "explanation": "Incorrect. The choice “Random mode” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        },
        {
          "id": "D",
          "text": "Streaming mode only",
          "explanation": "Incorrect. The choice “Streaming mode only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario explicitly uses serverless compute, so the execution/serving feature must match serverless behavior."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Serverless mode. Serverless compute requires the serverless execution path/configuration.",
      "source_links": [
        "https://docs.databricks.com/aws/en/udf/unity-catalog"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_112",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "UC functions"
      ],
      "question": "Which method name was used in the demo-style UC Python function testing pattern?",
      "options": [
        {
          "id": "A",
          "text": "client.execute_function()",
          "explanation": "Correct. The demo-style pattern used execute_function to call/test registered functions programmatically. client.execute_function() is the programmatic call used to execute/test a registered Unity Catalog function in the demo-style workflow."
        },
        {
          "id": "B",
          "text": "client.call_everything()",
          "explanation": "Incorrect. The choice “client.call_everything()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. client.execute_function(), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "client.test_uc_sql_only()",
          "explanation": "Incorrect. The choice “client.test_uc_sql_only()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. client.execute_function(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "client.start_model()",
          "explanation": "Incorrect. The choice “client.start_model()” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. client.execute_function(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The demo-style pattern used execute_function to call/test registered functions programmatically.",
      "source_links": [
        "https://docs.databricks.com/aws/en/udf/unity-catalog"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_113",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "LangChain",
        "UC functions"
      ],
      "question": "Which class wraps Unity Catalog functions as LangChain tools in the demo-style pattern?",
      "options": [
        {
          "id": "A",
          "text": "UCFunctionToolkit",
          "explanation": "Correct. UCFunctionToolkit is the tool wrapper name used in the Unity Catalog function/LangChain pattern covered in the workshop material. UCFunctionToolkit is the Unity Catalog function toolkit used in the UC-functions/LangChain pattern to expose governed UC functions as callable LangChain tools."
        },
        {
          "id": "B",
          "text": "DatabricksToolkitOnly",
          "explanation": "Incorrect. DatabricksToolkitOnly is not the demo class name; it reads like a made-up placeholder and does not identify a UC-function wrapper. The question asks for the exact demo wrapper class name; this option is not the class used in that pattern."
        },
        {
          "id": "C",
          "text": "LangChainUCBridge",
          "explanation": "Incorrect. LangChainUCBridge sounds plausible, but it is not the class name used in the demo pattern for wrapping UC functions. The question asks for the exact demo wrapper class name; this option is not the class used in that pattern."
        },
        {
          "id": "D",
          "text": "UCToolWrapper",
          "explanation": "Incorrect. UCToolWrapper is a generic-sounding name, but it is not the specific class used by the UC-functions/LangChain pattern. The question asks for the exact demo wrapper class name; this option is not the class used in that pattern."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "UCFunctionToolkit is the tool wrapper name used in the Unity Catalog function/LangChain pattern covered in the workshop material.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_114",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "coverage: prompt engineering",
        "prompt engineering",
        "topic scan"
      ],
      "question": "A prompt must output exactly two fields as JSON. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for prompt engineering, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying prompt engineering to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying prompt engineering to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "prompt engineering"
    },
    {
      "id": "ADD_115",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "coverage: chunking",
        "chunking",
        "topic scan"
      ],
      "question": "A documentation corpus produces too many vector records. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for chunking, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying chunking to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying chunking to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "chunking"
    },
    {
      "id": "ADD_116",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "coverage: retrieval evaluation",
        "retrieval evaluation",
        "topic scan"
      ],
      "question": "RAG returns relevant answers only when source chunks are ranked correctly. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for retrieval evaluation, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying retrieval evaluation to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying retrieval evaluation to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "retrieval evaluation"
    },
    {
      "id": "ADD_117",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "coverage: model serving",
        "model serving",
        "topic scan"
      ],
      "question": "A team wants one endpoint to compare champion and challenger. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for model serving, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying model serving to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying model serving to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "model serving"
    },
    {
      "id": "ADD_118",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "coverage: MLflow tracing",
        "MLflow tracing",
        "topic scan"
      ],
      "question": "A developer needs to debug tool calls inside an agent. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for MLflow tracing, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying MLflow tracing to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying MLflow tracing to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "MLflow tracing"
    },
    {
      "id": "ADD_119",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "coverage: Unity Catalog governance",
        "Unity Catalog governance",
        "topic scan"
      ],
      "question": "A RAG app must respect document permissions. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for Unity Catalog governance, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying Unity Catalog governance to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying Unity Catalog governance to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "Unity Catalog governance"
    },
    {
      "id": "ADD_120",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "coverage: AI Gateway cost control",
        "AI Gateway cost control",
        "topic scan"
      ],
      "question": "An endpoint needs per-user usage limits. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for AI Gateway cost control, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying AI Gateway cost control to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying AI Gateway cost control to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "AI Gateway cost control"
    },
    {
      "id": "ADD_121",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "coverage: Agent tools",
        "Agent tools",
        "topic scan"
      ],
      "question": "An LLM must call SQL, API, or retrieval tools depending on intent. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for Agent tools, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying Agent tools to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying Agent tools to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "Agent tools"
    },
    {
      "id": "ADD_122",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "coverage: inference tables",
        "inference tables",
        "topic scan"
      ],
      "question": "Production request/response payloads must be monitored. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for inference tables, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying inference tables to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying inference tables to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "inference tables"
    },
    {
      "id": "ADD_123",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI from public topic coverage scan; no Udemy questions copied",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "coverage: MCP servers",
        "MCP servers",
        "topic scan"
      ],
      "question": "An agent needs standardized access to Databricks tools/data. What should you focus on first?",
      "options": [
        {
          "id": "A",
          "text": "The core Databricks/GenAI concept for MCP servers, verified against official docs and applied to the scenario",
          "explanation": "Correct. This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying MCP servers to a realistic scenario."
        },
        {
          "id": "B",
          "text": "Memorizing leaked exam answers",
          "explanation": "Incorrect. Memorizing leaked exam answers is not a valid learning strategy and is not safe for a public practice app. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "C",
          "text": "Changing unrelated UI styling",
          "explanation": "Incorrect. UI styling changes appearance only; it does not improve certification knowledge or fix a Databricks architecture choice. It is not a study strategy that improves mastery of the tested Databricks objective."
        },
        {
          "id": "D",
          "text": "Ignoring official docs",
          "explanation": "Incorrect. Official Databricks documentation is the source of truth for current product names, APIs, and behaviors. It is not a study strategy that improves mastery of the tested Databricks objective."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is an original question generated from public course/exam-topic coverage, not copied from Udemy or exam dumps. The tested skill is applying MCP servers to a realistic scenario.",
      "source_links": [
        "https://www.udemy.com/topic/databricks-certified-generative-ai-engineer-associate/",
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item.",
      "coverage_topic": "MCP servers"
    },
    {
      "id": "ADD_124",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "context recall",
        "RAG troubleshooting"
      ],
      "question": "A RAG app has high hallucination because the retriever misses key policy sections. Which fix is most targeted?",
      "options": [
        {
          "id": "A",
          "text": "Improve retrieval/chunking/indexing and measure context recall",
          "explanation": "Correct. Missing evidence is a retrieval/context recall problem, so fix retrieval before blaming the generator. Context recall asks whether the retriever found the needed supporting information."
        },
        {
          "id": "B",
          "text": "Only increase answer temperature",
          "explanation": "Incorrect. The choice “Only increase answer temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "C",
          "text": "Only add a prettier UI",
          "explanation": "Incorrect. The choice “Only add a prettier UI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        },
        {
          "id": "D",
          "text": "Use no documents",
          "explanation": "Incorrect. The choice “Use no documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the retrieved context contains the information needed to answer."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Missing evidence is a retrieval/context recall problem, so fix retrieval before blaming the generator.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_125",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "context precision",
        "reranking"
      ],
      "question": "A RAG app retrieves correct documents but includes many irrelevant chunks before the useful chunk. Which metric/approach helps?",
      "options": [
        {
          "id": "A",
          "text": "Context precision and reranking/tuning",
          "explanation": "Correct. This is a ranking/signal-to-noise problem, addressed with context precision and retrieval tuning."
        },
        {
          "id": "B",
          "text": "Toxicity only",
          "explanation": "Incorrect. Toxicity measures harmful/offensive language, not retrieval or answer accuracy. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Model registry only",
          "explanation": "Incorrect. The choice “Model registry only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "CPU usage only",
          "explanation": "Incorrect. The choice “CPU usage only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "This is a ranking/signal-to-noise problem, addressed with context precision and retrieval tuning.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_126",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "faithfulness"
      ],
      "question": "An answer is fluent but contradicts retrieved context. Which metric should catch this?",
      "options": [
        {
          "id": "A",
          "text": "Faithfulness",
          "explanation": "Correct. Faithfulness checks whether generated claims are supported by retrieved context. Faithfulness checks whether the generated answer is supported by the retrieved/provided context, without requiring ground truth."
        },
        {
          "id": "B",
          "text": "p95 latency",
          "explanation": "Incorrect. The choice “p95 latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "C",
          "text": "Embedding dimension",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        },
        {
          "id": "D",
          "text": "OCR score",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the metric asks whether the generated response is grounded in the retrieved context."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Faithfulness. Faithfulness checks whether generated claims are supported by retrieved context.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_127",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "External Models"
      ],
      "question": "A team wants to call OpenAI through Databricks governance rather than directly from app code. What model serving feature fits?",
      "options": [
        {
          "id": "A",
          "text": "External Models",
          "explanation": "Correct. External Models centralize access to third-party providers through Databricks serving/governance. External Models let Databricks manage access to models hosted outside Databricks, such as third-party model APIs."
        },
        {
          "id": "B",
          "text": "Delta Live Tables",
          "explanation": "Incorrect. The choice “Delta Live Tables” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Lakeview only",
          "explanation": "Incorrect. Lakeview/dashboarding visualizes data but does not replace endpoint request/response logging. It does not fit here because the correct choice is A. External Models, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Photon",
          "explanation": "Incorrect. The choice “Photon” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. External Models, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "External Models centralize access to third-party providers through Databricks serving/governance.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_128",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "tracing",
        "agents"
      ],
      "question": "A production agent sometimes calls the wrong tool. What artifact helps debug the sequence?",
      "options": [
        {
          "id": "A",
          "text": "MLflow trace with tool-call spans",
          "explanation": "Correct. The choice “MLflow trace with tool-call spans” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "B",
          "text": "Only training loss",
          "explanation": "Incorrect. The choice “Only training loss” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only a PDF of the UI",
          "explanation": "Incorrect. The choice “Only a PDF of the UI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "A larger chunk size",
          "explanation": "Incorrect. The choice “A larger chunk size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. MLflow trace with tool-call spans. Traces expose intermediate steps and tool calls.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_129",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "governance",
        "permissions"
      ],
      "question": "A RAG app must avoid exposing salary documents to unauthorized employees. What is required?",
      "options": [
        {
          "id": "A",
          "text": "Permission-aware retrieval governed by Unity Catalog/access controls",
          "explanation": "Correct. Unity Catalog provides governed access control, lineage, discovery, and model/data governance. This directly satisfies the scenario: Prompts do not enforce access; retrieval/data permissions must."
        },
        {
          "id": "B",
          "text": "Only a stronger prompt",
          "explanation": "Incorrect. The choice “Only a stronger prompt” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Permission-aware retrieval governed by Unity Catalog/access controls, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Higher model temperature",
          "explanation": "Incorrect. The choice “Higher model temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Permission-aware retrieval governed by Unity Catalog/access controls, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "More chunk overlap",
          "explanation": "Incorrect. The choice “More chunk overlap” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Permission-aware retrieval governed by Unity Catalog/access controls, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Permission-aware retrieval governed by Unity Catalog/access controls. Prompts do not enforce access; retrieval/data permissions must.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_130",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "packaging"
      ],
      "question": "A model must be packaged with Python preprocessing and a call to an external LLM API. What can be logged?",
      "options": [
        {
          "id": "A",
          "text": "An MLflow PyFunc or GenAI app package as code/config",
          "explanation": "Correct. GenAI packaging can include prompts/chains/code, not only weights."
        },
        {
          "id": "B",
          "text": "Only binary model weights",
          "explanation": "Incorrect. The choice “Only binary model weights” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. An MLflow PyFunc or GenAI app package as code/config, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only training data",
          "explanation": "Incorrect. The choice “Only training data” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. An MLflow PyFunc or GenAI app package as code/config, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only a SQL dashboard",
          "explanation": "Incorrect. The choice “Only a SQL dashboard” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. An MLflow PyFunc or GenAI app package as code/config, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. An MLflow PyFunc or GenAI app package as code/config. GenAI packaging can include prompts/chains/code, not only weights.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_131",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "cost control"
      ],
      "question": "You need to cap endpoint spend from accidental high-volume usage. Which AI Gateway feature helps?",
      "options": [
        {
          "id": "A",
          "text": "Rate limits",
          "explanation": "Correct. Rate limiting controls traffic and cost by restricting request volume to serving endpoints. This directly satisfies the scenario: Rate limits constrain request/token usage."
        },
        {
          "id": "B",
          "text": "BLEU",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Chunk overlap",
          "explanation": "Incorrect. The choice “Chunk overlap” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Rate limits. Rate limits constrain request/token usage.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/rate-limits"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_132",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "fresh data",
        "tools"
      ],
      "question": "A user asks for a current stock price. Why is pure prompting insufficient?",
      "options": [
        {
          "id": "A",
          "text": "The fact is time-sensitive and should come from a live data source/tool",
          "explanation": "Correct. Fresh facts require retrieval/tool access rather than static model knowledge."
        },
        {
          "id": "B",
          "text": "Prompts know all future prices",
          "explanation": "Incorrect. The choice “Prompts know all future prices” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The fact is time-sensitive and should come from a live data source/tool, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "BLEU will fetch it",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. The fact is time-sensitive and should come from a live data source/tool, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Reranking creates prices",
          "explanation": "Incorrect. The choice “Reranking creates prices” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The fact is time-sensitive and should come from a live data source/tool, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. The fact is time-sensitive and should come from a live data source/tool. Fresh facts require retrieval/tool access rather than static model knowledge.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_133",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "custom models"
      ],
      "question": "Which serving option is appropriate for a trained custom scikit-learn/pyfunc model registered in UC?",
      "options": [
        {
          "id": "A",
          "text": "Custom model serving endpoint",
          "explanation": "Correct. Custom Model Serving serves MLflow/custom models registered in UC. Custom Models are user-logged MLflow models served behind Databricks Model Serving endpoints."
        },
        {
          "id": "B",
          "text": "Foundation Model API only",
          "explanation": "Incorrect. The choice “Foundation Model API only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Custom model serving endpoint, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "External Model only",
          "explanation": "Incorrect. The choice “External Model only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Custom model serving endpoint, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "AI Search endpoint",
          "explanation": "Incorrect. The choice “AI Search endpoint” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Custom model serving endpoint, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Custom model serving endpoint. Custom Model Serving serves MLflow/custom models registered in UC.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_134",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which application design should be used when requirements include “gather knowledge and take actions”?",
      "options": [
        {
          "id": "A",
          "text": "Agent with tools",
          "explanation": "Correct. The correct concept is Agent with tools. This maps directly to the exam objective for 1. Design Applications."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Agent with tools, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Agent with tools, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Agent with tools, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Agent with tools. This maps directly to the exam objective for 1. Design Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_135",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which Agent Bricks type is closest to extracting fields from contracts?",
      "options": [
        {
          "id": "A",
          "text": "Information Extraction",
          "explanation": "Correct. The correct concept is Information Extraction. This maps directly to the exam objective for 1. Design Applications."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Information Extraction, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Information Extraction, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Information Extraction, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Information Extraction. This maps directly to the exam objective for 1. Design Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_136",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "1. Design Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which Agent Bricks type is closest to Q&A over governed documents?",
      "options": [
        {
          "id": "A",
          "text": "Knowledge Assistant",
          "explanation": "Correct. The correct concept is Knowledge Assistant. This maps directly to the exam objective for 1. Design Applications."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Knowledge Assistant, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Knowledge Assistant, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Knowledge Assistant, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Knowledge Assistant. This maps directly to the exam objective for 1. Design Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_137",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which step comes before creating embeddings for dirty web pages?",
      "options": [
        {
          "id": "A",
          "text": "Clean/extract relevant text",
          "explanation": "Correct. The correct concept is Clean/extract relevant text. This maps directly to the exam objective for 2. Data Preparation."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Clean/extract relevant text, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Clean/extract relevant text, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Clean/extract relevant text, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Clean/extract relevant text. This maps directly to the exam objective for 2. Data Preparation.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_138",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which retrieval metric checks if relevant docs are found at all?",
      "options": [
        {
          "id": "A",
          "text": "Recall@k",
          "explanation": "Correct. The correct concept is Recall@k. This maps directly to the exam objective for 2. Data Preparation."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Recall@k, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Recall@k, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Recall@k, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Recall@k. This maps directly to the exam objective for 2. Data Preparation.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_139",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "2. Data Preparation",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which retrieval metric cares about ranking quality?",
      "options": [
        {
          "id": "A",
          "text": "NDCG/context precision",
          "explanation": "Correct. The correct concept is NDCG/context precision. This maps directly to the exam objective for 2. Data Preparation."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. NDCG/context precision, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. NDCG/context precision, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. NDCG/context precision, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is NDCG/context precision. This maps directly to the exam objective for 2. Data Preparation.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_140",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which evaluation issue means the answer is on-topic to the user query?",
      "options": [
        {
          "id": "A",
          "text": "Answer relevancy",
          "explanation": "Correct. The correct concept is Answer relevancy. This maps directly to the exam objective for 3. Application Development. Answer relevancy asks whether the generated answer addresses the user’s original intent."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Answer relevancy, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. CSS affects the look of the app, not the GenAI/Databricks concept being tested. This measures a different RAG metric; Answer Relevancy is about alignment with the user query intent."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Answer relevancy, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Answer relevancy. This maps directly to the exam objective for 3. Application Development.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_141",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which issue means answer facts are unsupported by context?",
      "options": [
        {
          "id": "A",
          "text": "Low faithfulness / hallucination",
          "explanation": "Correct. The correct concept is Low faithfulness / hallucination. This maps directly to the exam objective for 3. Application Development. Faithfulness checks whether the answer is grounded in the retrieved context."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Low faithfulness / hallucination, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. CSS affects the look of the app, not the GenAI/Databricks concept being tested. This measures a different evaluation concept; Faithfulness is groundedness in retrieved context, while correctness uses ground truth."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Low faithfulness / hallucination, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Low faithfulness / hallucination. This maps directly to the exam objective for 3. Application Development.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_142",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which model type creates vector representations for retrieval?",
      "options": [
        {
          "id": "A",
          "text": "Embedding model",
          "explanation": "Correct. The correct concept is Embedding model. This maps directly to the exam objective for 3. Application Development."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Embedding model. This maps directly to the exam objective for 3. Application Development.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_143",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "3. Application Development",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which model selection factor matters for long documents?",
      "options": [
        {
          "id": "A",
          "text": "Context length",
          "explanation": "Correct. The correct concept is Context length. This maps directly to the exam objective for 3. Application Development."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Context length, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Context length, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Context length, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Context length. This maps directly to the exam objective for 3. Application Development.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_144",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which MLflow setting points to UC registry?",
      "options": [
        {
          "id": "A",
          "text": "databricks-uc",
          "explanation": "Correct. The correct concept is databricks-uc. This maps directly to the exam objective for 4. Assembling and Deploying Applications. databricks-uc is the MLflow registry URI that tells MLflow to use Unity Catalog for model registration."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the scenario is about managed model lifecycle, aliases, versions, and permissions in Unity Catalog."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is databricks-uc. This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_145",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which alias commonly refers to production model?",
      "options": [
        {
          "id": "A",
          "text": "@champion",
          "explanation": "Correct. The correct concept is @champion. This maps directly to the exam objective for 4. Assembling and Deploying Applications. Champion/challenger aliases identify production and candidate model versions for controlled lifecycle management."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is @champion. This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_146",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which alias commonly refers to candidate model?",
      "options": [
        {
          "id": "A",
          "text": "@challenger",
          "explanation": "Correct. The correct concept is @challenger. This maps directly to the exam objective for 4. Assembling and Deploying Applications. Champion/challenger aliases identify production and candidate model versions for controlled lifecycle management."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. @challenger, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. @challenger, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. @challenger, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is @challenger. This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_147",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which feature routes 10% traffic to challenger?",
      "options": [
        {
          "id": "A",
          "text": "Traffic split",
          "explanation": "Correct. The correct concept is Traffic split. This maps directly to the exam objective for 4. Assembling and Deploying Applications."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Traffic split, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Traffic split, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Traffic split, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Traffic split. This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_148",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which Databricks search service powers RAG retrieval?",
      "options": [
        {
          "id": "A",
          "text": "AI Search",
          "explanation": "Correct. The correct concept is AI Search. This maps directly to the exam objective for 4. Assembling and Deploying Applications. Databricks AI Search / Vector Search is the retrieval/index layer for semantic, hybrid, and keyword-style search over governed data."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. AI Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. AI Search, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. AI Search, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is AI Search. This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_149",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which SQL function calls model serving for batch enrichment?",
      "options": [
        {
          "id": "A",
          "text": "ai_query()",
          "explanation": "Correct. The correct concept is ai_query(). This maps directly to the exam objective for 4. Assembling and Deploying Applications."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. ai_query(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is ai_query(). This maps directly to the exam objective for 4. Assembling and Deploying Applications.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_150",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which control masks sensitive data before model input?",
      "options": [
        {
          "id": "A",
          "text": "Redaction/masking guardrail",
          "explanation": "Correct. The correct concept is Redaction/masking guardrail. This maps directly to the exam objective for 5. Governance. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Redaction/masking guardrail, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Redaction/masking guardrail, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Redaction/masking guardrail, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Redaction/masking guardrail. This maps directly to the exam objective for 5. Governance.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_151",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which control stops too many requests?",
      "options": [
        {
          "id": "A",
          "text": "Rate limits",
          "explanation": "Correct. The correct concept is Rate limits. This maps directly to the exam objective for 5. Governance. Rate limiting controls traffic and cost by restricting request volume to serving endpoints."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Rate limits, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Rate limits. This maps directly to the exam objective for 5. Governance.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_152",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "5. Governance",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which platform layer centralizes data permissions?",
      "options": [
        {
          "id": "A",
          "text": "Unity Catalog",
          "explanation": "Correct. The correct concept is Unity Catalog. This maps directly to the exam objective for 5. Governance. Unity Catalog provides governed access control, lineage, discovery, and model/data governance."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Unity Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Unity Catalog, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Unity Catalog, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Unity Catalog. This maps directly to the exam objective for 5. Governance.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_153",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which logs requests and responses to Delta tables?",
      "options": [
        {
          "id": "A",
          "text": "Inference tables",
          "explanation": "Correct. The correct concept is Inference tables. This maps directly to the exam objective for 6. Evaluation and Monitoring. Inference Tables log model serving requests and responses for monitoring, debugging, and evaluation."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. Inference tables, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. Inference tables, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. Inference tables, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is Inference tables. This maps directly to the exam objective for 6. Evaluation and Monitoring.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_154",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which observability feature captures intermediate agent steps?",
      "options": [
        {
          "id": "A",
          "text": "MLflow Tracing",
          "explanation": "Correct. The correct concept is MLflow Tracing. This maps directly to the exam objective for 6. Evaluation and Monitoring."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. MLflow Tracing, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. MLflow Tracing, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. MLflow Tracing, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is MLflow Tracing. This maps directly to the exam objective for 6. Evaluation and Monitoring.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_155",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which decorator manually traces custom Python functions?",
      "options": [
        {
          "id": "A",
          "text": "@mlflow.trace",
          "explanation": "Correct. The correct concept is @mlflow.trace. This maps directly to the exam objective for 6. Evaluation and Monitoring. @mlflow.trace is the MLflow decorator for adding manual/custom tracing spans around Python functions."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. @mlflow.trace, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. @mlflow.trace, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. @mlflow.trace, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is @mlflow.trace. This maps directly to the exam objective for 6. Evaluation and Monitoring.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "ADD_156",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Easy",
      "tags": [
        "quick recall"
      ],
      "question": "Which method enables LangChain autotracing?",
      "options": [
        {
          "id": "A",
          "text": "mlflow.langchain.autolog()",
          "explanation": "Correct. The correct concept is mlflow.langchain.autolog(). This maps directly to the exam objective for 6. Evaluation and Monitoring. mlflow.langchain.autolog() enables MLflow tracing/autologging for LangChain chains and agents."
        },
        {
          "id": "B",
          "text": "A larger chunk overlap only",
          "explanation": "Incorrect. Larger overlap repeats more text between chunks, increasing duplicated content and usually increasing record count. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Changing browser CSS",
          "explanation": "Incorrect. Changing UI styling does not answer the technical Databricks/GenAI scenario. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Ignoring official documentation",
          "explanation": "Incorrect. Ignoring official docs increases the risk of outdated or wrong Databricks behavior. It does not fit here because the correct choice is A. mlflow.langchain.autolog(), because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct concept is mlflow.langchain.autolog(). This maps directly to the exam objective for 6. Evaluation and Monitoring.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_001",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "routing",
        "agents"
      ],
      "question": "A business wants a GenAI workflow to first classify intent, then retrieve docs, then call a tool only for order-status questions. What pattern fits best?",
      "options": [
        {
          "id": "A",
          "text": "A composed chain/agent workflow with routing and tools",
          "explanation": "Correct. The scenario combines intent routing, retrieval, and action tools, so a composed chain/agent workflow is appropriate."
        },
        {
          "id": "B",
          "text": "A single embedding model only",
          "explanation": "Incorrect. The choice “A single embedding model only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A composed chain/agent workflow with routing and tools, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A Lakehouse dashboard only",
          "explanation": "Incorrect. The choice “A Lakehouse dashboard only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A composed chain/agent workflow with routing and tools, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A random forest classifier only",
          "explanation": "Incorrect. The choice “A random forest classifier only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A composed chain/agent workflow with routing and tools, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The scenario combines intent routing, retrieval, and action tools, so a composed chain/agent workflow is appropriate.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_002",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "prompting"
      ],
      "question": "A use case requires the LLM to answer in a strict CSV row. What prompt feature is most useful?",
      "options": [
        {
          "id": "A",
          "text": "Explicit output schema and examples",
          "explanation": "Correct. Structured outputs are improved with explicit format constraints and examples."
        },
        {
          "id": "B",
          "text": "Higher temperature",
          "explanation": "Incorrect. The choice “Higher temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit output schema and examples, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "More unrelated documents",
          "explanation": "Incorrect. The choice “More unrelated documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit output schema and examples, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No system instruction",
          "explanation": "Incorrect. The choice “No system instruction” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Explicit output schema and examples, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Explicit output schema and examples. Structured outputs are improved with explicit format constraints and examples.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_003",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "tools",
        "RAG"
      ],
      "question": "A user request requires “find relevant policy, summarize, then create a follow-up task.” What should the system include?",
      "options": [
        {
          "id": "A",
          "text": "Retriever plus action tool with validated parameters",
          "explanation": "Correct. The system needs both retrieval and an action tool, with validation for safe execution."
        },
        {
          "id": "B",
          "text": "Only a static prompt",
          "explanation": "Incorrect. The choice “Only a static prompt” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Retriever plus action tool with validated parameters, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only a large context window",
          "explanation": "Incorrect. The choice “Only a large context window” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Retriever plus action tool with validated parameters, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only OCR",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Retriever plus action tool with validated parameters, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Retriever plus action tool with validated parameters. The system needs both retrieval and an action tool, with validation for safe execution.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_004",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "RAG"
      ],
      "question": "Which business requirement most clearly implies RAG?",
      "options": [
        {
          "id": "A",
          "text": "Answers must reflect a private and frequently changing document repository",
          "explanation": "Correct. Private or frequently changing knowledge should be retrieved at query time rather than relying on pretraining."
        },
        {
          "id": "B",
          "text": "The answer must be a haiku",
          "explanation": "Incorrect. The choice “The answer must be a haiku” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Answers must reflect a private and frequently changing document repository, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The app only translates fixed text",
          "explanation": "Incorrect. The choice “The app only translates fixed text” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Answers must reflect a private and frequently changing document repository, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The UI must have dark mode",
          "explanation": "Incorrect. The choice “The UI must have dark mode” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Answers must reflect a private and frequently changing document repository, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Private or frequently changing knowledge should be retrieved at query time rather than relying on pretraining.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate",
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_005",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "chains"
      ],
      "question": "When is a simple chain better than a full multi-agent system?",
      "options": [
        {
          "id": "A",
          "text": "The task has a predictable linear sequence of steps",
          "explanation": "Correct. A linear predictable flow can be implemented as a simpler chain, avoiding unnecessary agent complexity."
        },
        {
          "id": "B",
          "text": "The task requires multiple specialists and delegation",
          "explanation": "Incorrect. The choice “The task requires multiple specialists and delegation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The task has a predictable linear sequence of steps, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "The system must coordinate many tools dynamically",
          "explanation": "Incorrect. The choice “The system must coordinate many tools dynamically” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The task has a predictable linear sequence of steps, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The app needs complex planning",
          "explanation": "Incorrect. The choice “The app needs complex planning” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. The task has a predictable linear sequence of steps, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "A linear predictable flow can be implemented as a simpler chain, avoiding unnecessary agent complexity.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_006",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "requirements"
      ],
      "question": "Why define desired inputs and outputs before choosing a model?",
      "options": [
        {
          "id": "A",
          "text": "It maps business goals to the AI pipeline contract",
          "explanation": "Correct. Clear I/O definitions guide model/task selection, evaluation, and application design."
        },
        {
          "id": "B",
          "text": "It automatically trains the model",
          "explanation": "Incorrect. The choice “It automatically trains the model” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It maps business goals to the AI pipeline contract, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It eliminates evaluation",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the correct choice is A. It maps business goals to the AI pipeline contract, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It replaces security review",
          "explanation": "Incorrect. The choice “It replaces security review” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It maps business goals to the AI pipeline contract, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. It maps business goals to the AI pipeline contract. Clear I/O definitions guide model/task selection, evaluation, and application design.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_007",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "tool safety"
      ],
      "question": "An agent is allowed to refund orders only below €50. Where should this rule be enforced?",
      "options": [
        {
          "id": "A",
          "text": "In tool/business logic validation, not only in the prompt",
          "explanation": "Correct. Business constraints for actions must be enforced outside the model via validation/authorization. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Only in the model card",
          "explanation": "Incorrect. The choice “Only in the model card” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Only by changing temperature",
          "explanation": "Incorrect. The choice “Only by changing temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Only in CSS",
          "explanation": "Incorrect. The choice “Only in CSS” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Business constraints for actions must be enforced outside the model via validation/authorization.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_008",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "1. Design Applications",
      "difficulty": "Medium",
      "tags": [
        "grounding"
      ],
      "question": "What is the best response design when an agent cannot find supporting evidence?",
      "options": [
        {
          "id": "A",
          "text": "Say it cannot answer confidently and provide next steps",
          "explanation": "Correct. Grounded apps should avoid unsupported claims and expose uncertainty when retrieval fails."
        },
        {
          "id": "B",
          "text": "Invent the most likely answer",
          "explanation": "Incorrect. The choice “Invent the most likely answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Say it cannot answer confidently and provide next steps, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Hide uncertainty",
          "explanation": "Incorrect. The choice “Hide uncertainty” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Say it cannot answer confidently and provide next steps, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Return unrelated context",
          "explanation": "Incorrect. The choice “Return unrelated context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Say it cannot answer confidently and provide next steps, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Grounded apps should avoid unsupported claims and expose uncertainty when retrieval fails.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_009",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "tables",
        "chunking"
      ],
      "question": "A long table is split row-by-row and answers need totals from multiple rows. What is a likely improvement?",
      "options": [
        {
          "id": "A",
          "text": "Chunk or store tables so related rows/headers remain interpretable",
          "explanation": "Correct. Table-aware extraction/chunking preserves relationships needed for accurate answers."
        },
        {
          "id": "B",
          "text": "Remove all table headers",
          "explanation": "Incorrect. The choice “Remove all table headers” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Use only random chunks",
          "explanation": "Incorrect. The choice “Use only random chunks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Index screenshots only",
          "explanation": "Incorrect. The choice “Index screenshots only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Chunk or store tables so related rows/headers remain interpretable. Table-aware extraction/chunking preserves relationships needed for accurate answers.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_010",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "metadata"
      ],
      "question": "Why store document_id and page number as metadata with chunks?",
      "options": [
        {
          "id": "A",
          "text": "For filtering, citation, debugging, and traceability",
          "explanation": "Correct. Metadata makes retrieval auditable and supports citations/filters."
        },
        {
          "id": "B",
          "text": "To increase model temperature",
          "explanation": "Incorrect. The choice “To increase model temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "To hide source documents",
          "explanation": "Incorrect. The choice “To hide source documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "To replace embeddings",
          "explanation": "Incorrect. The choice “To replace embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. For filtering, citation, debugging, and traceability. Metadata makes retrieval auditable and supports citations/filters.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_011",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "filters"
      ],
      "question": "A retrieval query must return only documents from France. What should be used?",
      "options": [
        {
          "id": "A",
          "text": "Metadata filter such as country = France",
          "explanation": "Correct. The choice “Metadata filter such as country = France” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Metadata filter such as country = France, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Only larger model context",
          "explanation": "Incorrect. The choice “Only larger model context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Metadata filter such as country = France, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only BLEU",
          "explanation": "Incorrect. BLEU is an n-gram overlap metric that requires reference text and can miss semantic equivalence. It does not fit here because the correct choice is A. Metadata filter such as country = France, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disable embeddings",
          "explanation": "Incorrect. The choice “Disable embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Metadata filter such as country = France, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Metadata filter such as country = France. Metadata filters constrain retrieval to allowed/relevant subsets.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_012",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "chunking"
      ],
      "question": "What is a risk of using one chunk for an entire 200-page PDF?",
      "options": [
        {
          "id": "A",
          "text": "Low precision and context-window overflow",
          "explanation": "Correct. Overly large chunks are hard to retrieve precisely and may exceed context limits."
        },
        {
          "id": "B",
          "text": "No storage cost at all",
          "explanation": "Incorrect. The choice “No storage cost at all” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Perfect retrieval always",
          "explanation": "Incorrect. The choice “Perfect retrieval always” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "No need for embeddings",
          "explanation": "Incorrect. The choice “No need for embeddings” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Low precision and context-window overflow. Overly large chunks are hard to retrieve precisely and may exceed context limits.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_013",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "chunking"
      ],
      "question": "What is a risk of tiny sentence-level chunks with no overlap?",
      "options": [
        {
          "id": "A",
          "text": "Loss of surrounding context needed to answer",
          "explanation": "Correct. Tiny chunks can miss context, making retrieved evidence incomplete."
        },
        {
          "id": "B",
          "text": "Too few vector records",
          "explanation": "Incorrect. The choice “Too few vector records” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Embeddings cannot be computed",
          "explanation": "Incorrect. The choice “Embeddings cannot be computed” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "No retrieval possible",
          "explanation": "Incorrect. The choice “No retrieval possible” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Loss of surrounding context needed to answer. Tiny chunks can miss context, making retrieved evidence incomplete.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_014",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "evaluation"
      ],
      "question": "Which step best validates a new chunking strategy?",
      "options": [
        {
          "id": "A",
          "text": "Run retrieval evaluation on representative question/evidence pairs",
          "explanation": "Correct. Chunking should be optimized with retrieval metrics on representative data."
        },
        {
          "id": "B",
          "text": "Choose by intuition only",
          "explanation": "Incorrect. The choice “Choose by intuition only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "C",
          "text": "Use the prettiest chunk text",
          "explanation": "Incorrect. The choice “Use the prettiest chunk text” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        },
        {
          "id": "D",
          "text": "Only count PDF pages",
          "explanation": "Incorrect. The choice “Only count PDF pages” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the question is about how chunking choices affect retrieval quality, context size, and vector record count."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Run retrieval evaluation on representative question/evidence pairs. Chunking should be optimized with retrieval metrics on representative data.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_015",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "preprocessing"
      ],
      "question": "A corpus contains duplicate policy versions. What should preprocessing handle?",
      "options": [
        {
          "id": "A",
          "text": "Deduplicate or prefer current authoritative versions",
          "explanation": "Correct. Duplicates/stale docs can create conflicting context and degrade answers."
        },
        {
          "id": "B",
          "text": "Index all duplicates equally",
          "explanation": "Incorrect. The choice “Index all duplicates equally” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Deduplicate or prefer current authoritative versions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Randomly delete all dates",
          "explanation": "Incorrect. The choice “Randomly delete all dates” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Deduplicate or prefer current authoritative versions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Use only older copies",
          "explanation": "Incorrect. The choice “Use only older copies” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Deduplicate or prefer current authoritative versions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Deduplicate or prefer current authoritative versions. Duplicates/stale docs can create conflicting context and degrade answers.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_016",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "OCR"
      ],
      "question": "What should be embedded for a PDF page with image-only text?",
      "options": [
        {
          "id": "A",
          "text": "OCR-extracted text",
          "explanation": "Correct. Embeddings require text representation; image-only text must be OCR processed or handled multimodally."
        },
        {
          "id": "B",
          "text": "The file path only",
          "explanation": "Incorrect. The choice “The file path only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. OCR-extracted text, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A screenshot filename only",
          "explanation": "Incorrect. The choice “A screenshot filename only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. OCR-extracted text, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The LLM answer",
          "explanation": "Incorrect. The choice “The LLM answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. OCR-extracted text, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Embeddings require text representation; image-only text must be OCR processed or handled multimodally.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_017",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "hybrid search"
      ],
      "question": "Which technique helps with exact product names and semantic descriptions together?",
      "options": [
        {
          "id": "A",
          "text": "Hybrid search",
          "explanation": "Correct. The choice “Hybrid search” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Hybrid search, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Only vector search with no text fields",
          "explanation": "Incorrect. The choice “Only vector search with no text fields” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid search, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only random retrieval",
          "explanation": "Incorrect. The choice “Only random retrieval” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid search, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only final answer rerun",
          "explanation": "Incorrect. The choice “Only final answer rerun” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Hybrid search, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Hybrid search. Hybrid search combines lexical and semantic retrieval signals.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_018",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "2. Data Preparation",
      "difficulty": "Medium",
      "tags": [
        "top-k"
      ],
      "question": "If top-5 retrieval misses relevant docs but top-20 finds them, what parameter may need tuning?",
      "options": [
        {
          "id": "A",
          "text": "top_k / number of retrieved records",
          "explanation": "Correct. Increasing candidate count can improve recall, possibly followed by reranking to manage noise."
        },
        {
          "id": "B",
          "text": "LLM output font",
          "explanation": "Incorrect. The choice “LLM output font” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. top_k / number of retrieved records, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Registry URI",
          "explanation": "Incorrect. The choice “Registry URI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. top_k / number of retrieved records, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Databricks icon size",
          "explanation": "Incorrect. The choice “Databricks icon size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. top_k / number of retrieved records, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Increasing candidate count can improve recall, possibly followed by reranking to manage noise.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/query-ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_019",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "guardrails"
      ],
      "question": "A model refuses safe questions too often. What should you tune or evaluate?",
      "options": [
        {
          "id": "A",
          "text": "Guardrail thresholds/rubrics and false positives",
          "explanation": "Correct. Over-refusal often means guardrails or prompts are too strict and need evaluation. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "Chunk page numbers only",
          "explanation": "Incorrect. The choice “Chunk page numbers only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Favicon path",
          "explanation": "Incorrect. The choice “Favicon path” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Registry URI",
          "explanation": "Incorrect. The choice “Registry URI” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Guardrail thresholds/rubrics and false positives. Over-refusal often means guardrails or prompts are too strict and need evaluation.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_020",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "guardrails"
      ],
      "question": "A model answers disallowed questions too often. What should you tune or evaluate?",
      "options": [
        {
          "id": "A",
          "text": "Guardrail coverage, prompt policy, and false negatives",
          "explanation": "Correct. Under-blocking indicates guardrails/policy enforcement are insufficient. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Only UI spacing",
          "explanation": "Incorrect. The choice “Only UI spacing” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "C",
          "text": "Only vector dimensions",
          "explanation": "Incorrect. The choice “Only vector dimensions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        },
        {
          "id": "D",
          "text": "Only query cache",
          "explanation": "Incorrect. The choice “Only query cache” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for a guardrail that prevents unsafe, off-policy, or unauthorized behavior before the user sees the response."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Guardrail coverage, prompt policy, and false negatives. Under-blocking indicates guardrails/policy enforcement are insufficient.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_021",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "embeddings"
      ],
      "question": "Which model is best for vector retrieval?",
      "options": [
        {
          "id": "A",
          "text": "Embedding model",
          "explanation": "Correct. The choice “Embedding model” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Text generation chat model only",
          "explanation": "Incorrect. The choice “Text generation chat model only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "SQL warehouse",
          "explanation": "Incorrect. The choice “SQL warehouse” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "OCR binary",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Embedding model, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Embedding model. Embedding models convert text into vectors for similarity search.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_022",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "LLM"
      ],
      "question": "Which model is best for generating final natural-language answers?",
      "options": [
        {
          "id": "A",
          "text": "Chat/completion LLM",
          "explanation": "Correct. The choice “Chat/completion LLM” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Chat/completion LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Embedding model only",
          "explanation": "Incorrect. The choice “Embedding model only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Chat/completion LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Lakehouse monitor",
          "explanation": "Incorrect. The choice “Lakehouse monitor” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Chat/completion LLM, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Unity Catalog function only",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Chat/completion LLM, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Chat/completion LLM. A response-generating LLM produces final text answers.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_023",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "extraction"
      ],
      "question": "A task needs extracting exactly three fields from invoices. What output technique improves accuracy?",
      "options": [
        {
          "id": "A",
          "text": "JSON schema/few-shot examples and validation",
          "explanation": "Correct. Structured extraction benefits from schemas, examples, and validation."
        },
        {
          "id": "B",
          "text": "High temperature",
          "explanation": "Incorrect. The choice “High temperature” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. JSON schema/few-shot examples and validation, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "No examples",
          "explanation": "Incorrect. The choice “No examples” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. JSON schema/few-shot examples and validation, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Long unrelated context",
          "explanation": "Incorrect. The choice “Long unrelated context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. JSON schema/few-shot examples and validation, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. JSON schema/few-shot examples and validation. Structured extraction benefits from schemas, examples, and validation.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_024",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "model cards"
      ],
      "question": "What does a model card help you assess?",
      "options": [
        {
          "id": "A",
          "text": "Capabilities, limitations, training context, license, and suitable tasks",
          "explanation": "Correct. Model cards provide metadata needed for selecting a model responsibly."
        },
        {
          "id": "B",
          "text": "Only UI colors",
          "explanation": "Incorrect. The choice “Only UI colors” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Capabilities, limitations, training context, license, and suitable tasks, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only user passwords",
          "explanation": "Incorrect. The choice “Only user passwords” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Capabilities, limitations, training context, license, and suitable tasks, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only Git branches",
          "explanation": "Incorrect. The choice “Only Git branches” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Capabilities, limitations, training context, license, and suitable tasks, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Capabilities, limitations, training context, license, and suitable tasks. Model cards provide metadata needed for selecting a model responsibly.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_025",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "model selection"
      ],
      "question": "What is a common reason to choose a domain-specific smaller model?",
      "options": [
        {
          "id": "A",
          "text": "It may deliver acceptable quality at lower cost for a specialized task",
          "explanation": "Correct. Domain-specific models can improve cost/performance tradeoffs when evaluated for the task."
        },
        {
          "id": "B",
          "text": "It is always worse",
          "explanation": "Incorrect. The choice “It is always worse” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It may deliver acceptable quality at lower cost for a specialized task, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It removes the need for evaluation",
          "explanation": "Incorrect. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. It does not fit here because the correct choice is A. It may deliver acceptable quality at lower cost for a specialized task, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It always has infinite context",
          "explanation": "Incorrect. The choice “It always has infinite context” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It may deliver acceptable quality at lower cost for a specialized task, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Domain-specific models can improve cost/performance tradeoffs when evaluated for the task.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/foundation-model-overview"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_026",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "generation"
      ],
      "question": "Which setting usually increases randomness/creativity in generation?",
      "options": [
        {
          "id": "A",
          "text": "Temperature",
          "explanation": "Correct. Higher temperature generally makes outputs more random; lower temperature is better for deterministic tasks."
        },
        {
          "id": "B",
          "text": "Embedding dimension",
          "explanation": "Incorrect. Embedding dimension affects vector size and storage per record, not the number of source chunks by itself. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Delta CDF",
          "explanation": "Incorrect. The choice “Delta CDF” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "UC catalog name",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "Higher temperature generally makes outputs more random; lower temperature is better for deterministic tasks.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_027",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "temperature"
      ],
      "question": "Which setting is often reduced for deterministic classification/extraction tasks?",
      "options": [
        {
          "id": "A",
          "text": "Temperature",
          "explanation": "Correct. Lower temperature reduces randomness for structured/deterministic tasks."
        },
        {
          "id": "B",
          "text": "Access control",
          "explanation": "Incorrect. The choice “Access control” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Trace logging",
          "explanation": "Incorrect. The choice “Trace logging” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Schema validation",
          "explanation": "Incorrect. The choice “Schema validation” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Temperature, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Temperature. Lower temperature reduces randomness for structured/deterministic tasks.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_028",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "JSON"
      ],
      "question": "What should be done when generated JSON is sometimes invalid?",
      "options": [
        {
          "id": "A",
          "text": "Add schema instructions and validate/repair outputs in code",
          "explanation": "Correct. Structured output should be validated programmatically, with better prompt/schema design."
        },
        {
          "id": "B",
          "text": "Ignore parsing errors",
          "explanation": "Incorrect. The choice “Ignore parsing errors” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Add schema instructions and validate/repair outputs in code, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Increase randomness",
          "explanation": "Incorrect. The choice “Increase randomness” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Add schema instructions and validate/repair outputs in code, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Remove examples",
          "explanation": "Incorrect. The choice “Remove examples” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Add schema instructions and validate/repair outputs in code, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Add schema instructions and validate/repair outputs in code. Structured output should be validated programmatically, with better prompt/schema design.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_029",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "3. Application Development",
      "difficulty": "Medium",
      "tags": [
        "chains"
      ],
      "question": "What is the purpose of an output parser in a chain?",
      "options": [
        {
          "id": "A",
          "text": "Convert/validate raw LLM text into the desired structured format",
          "explanation": "Correct. The choice “Convert/validate raw LLM text into the desired structured format” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Convert/validate raw LLM text into the desired structured format, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Create a GPU",
          "explanation": "Incorrect. The choice “Create a GPU” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Convert/validate raw LLM text into the desired structured format, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Register UC permissions",
          "explanation": "Incorrect. The choice “Register UC permissions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Convert/validate raw LLM text into the desired structured format, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Index documents",
          "explanation": "Incorrect. The choice “Index documents” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Convert/validate raw LLM text into the desired structured format, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Convert/validate raw LLM text into the desired structured format. Output parsers make model outputs easier to consume reliably.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_030",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "permissions"
      ],
      "question": "A model is registered in UC but users cannot query the endpoint. What should you check?",
      "options": [
        {
          "id": "A",
          "text": "Serving endpoint permissions and underlying resource permissions",
          "explanation": "Correct. Deployment failures often involve endpoint ACLs or access to required resources."
        },
        {
          "id": "B",
          "text": "Only chunk overlap",
          "explanation": "Incorrect. The choice “Only chunk overlap” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serving endpoint permissions and underlying resource permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only OCR package",
          "explanation": "Incorrect. OCR is the right technique when text is inside image files rather than selectable text. It does not fit here because the correct choice is A. Serving endpoint permissions and underlying resource permissions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only prompt font",
          "explanation": "Incorrect. The choice “Only prompt font” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serving endpoint permissions and underlying resource permissions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Serving endpoint permissions and underlying resource permissions. Deployment failures often involve endpoint ACLs or access to required resources.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/",
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_031",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "resources"
      ],
      "question": "A RAG serving model needs access to an AI Search index. What must be configured?",
      "options": [
        {
          "id": "A",
          "text": "Resource access/permissions for the served model or app identity",
          "explanation": "Correct. Served apps need permission to query indexes/tables/functions used at runtime."
        },
        {
          "id": "B",
          "text": "Only answer correctness",
          "explanation": "Incorrect. Answer Correctness usually compares the generated answer to a ground-truth/reference answer. It does not fit here because the correct choice is A. Resource access/permissions for the served model or app identity, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only CSS",
          "explanation": "Incorrect. The choice “Only CSS” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Resource access/permissions for the served model or app identity, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "No permissions",
          "explanation": "Incorrect. The choice “No permissions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Resource access/permissions for the served model or app identity, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Resource access/permissions for the served model or app identity. Served apps need permission to query indexes/tables/functions used at runtime.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/vector-search",
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_032",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "MLflow"
      ],
      "question": "Why log a model to MLflow before serving?",
      "options": [
        {
          "id": "A",
          "text": "To package code/dependencies/signature and register/manage lifecycle",
          "explanation": "Correct. MLflow packaging is the bridge between development artifacts and serving/registry lifecycle."
        },
        {
          "id": "B",
          "text": "To change source PDFs",
          "explanation": "Incorrect. The choice “To change source PDFs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To package code/dependencies/signature and register/manage lifecycle, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "To bypass tests",
          "explanation": "Incorrect. The choice “To bypass tests” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To package code/dependencies/signature and register/manage lifecycle, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "To create Udemy content",
          "explanation": "Incorrect. The choice “To create Udemy content” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To package code/dependencies/signature and register/manage lifecycle, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "MLflow packaging is the bridge between development artifacts and serving/registry lifecycle.",
      "source_links": [
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html",
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_033",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "aliases"
      ],
      "question": "Which action promotes a tested model version without changing client code that references @champion?",
      "options": [
        {
          "id": "A",
          "text": "Move the @champion alias to the new version",
          "explanation": "Correct. Champion/challenger aliases identify production and candidate model versions for controlled lifecycle management. This directly satisfies the scenario: Aliases decouple client references from exact version numbers."
        },
        {
          "id": "B",
          "text": "Delete all old versions",
          "explanation": "Incorrect. The choice “Delete all old versions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Move the @champion alias to the new version, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Change every client URL",
          "explanation": "Incorrect. The choice “Change every client URL” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Move the @champion alias to the new version, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Rebuild the workspace",
          "explanation": "Incorrect. The choice “Rebuild the workspace” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Move the @champion alias to the new version, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Move the @champion alias to the new version. Aliases decouple client references from exact version numbers.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_034",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "rollback"
      ],
      "question": "A challenger is performing poorly. What is a fast rollback mechanism?",
      "options": [
        {
          "id": "A",
          "text": "Move traffic/alias back to the previous champion version",
          "explanation": "Correct. Aliases and traffic splits support controlled rollout and rollback. Champion/challenger aliases identify production and candidate model versions for controlled lifecycle management."
        },
        {
          "id": "B",
          "text": "Delete Unity Catalog",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Move traffic/alias back to the previous champion version, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Increase chunk size",
          "explanation": "Incorrect. The choice “Increase chunk size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Move traffic/alias back to the previous champion version, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disable all logging",
          "explanation": "Incorrect. The choice “Disable all logging” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Move traffic/alias back to the previous champion version, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Move traffic/alias back to the previous champion version. Aliases and traffic splits support controlled rollout and rollback.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/serve-multiple-models-to-serving-endpoint",
        "https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_035",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "dependencies"
      ],
      "question": "Why include dependencies when logging a PyFunc model?",
      "options": [
        {
          "id": "A",
          "text": "Serving must recreate the runtime environment reliably",
          "explanation": "Correct. The choice “Serving must recreate the runtime environment reliably” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Serving must recreate the runtime environment reliably, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It improves answer tone",
          "explanation": "Incorrect. The choice “It improves answer tone” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serving must recreate the runtime environment reliably, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It sets SQL permissions",
          "explanation": "Incorrect. The choice “It sets SQL permissions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serving must recreate the runtime environment reliably, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It hides prompts",
          "explanation": "Incorrect. The choice “It hides prompts” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Serving must recreate the runtime environment reliably, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Serving must recreate the runtime environment reliably. Dependencies ensure the model can run consistently in serving.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/custom-models",
        "https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_036",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "external models"
      ],
      "question": "Which endpoint type is for querying third-party hosted models through Databricks governance?",
      "options": [
        {
          "id": "A",
          "text": "External model endpoint",
          "explanation": "Correct. External model endpoints connect to outside providers while centralizing usage/governance. External Models let Databricks manage access to models hosted outside Databricks, such as third-party model APIs."
        },
        {
          "id": "B",
          "text": "Delta Sync index",
          "explanation": "Incorrect. The choice “Delta Sync index” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. External model endpoint, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Lakehouse monitor",
          "explanation": "Incorrect. The choice “Lakehouse monitor” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. External model endpoint, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "DBFS mount",
          "explanation": "Incorrect. The choice “DBFS mount” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. External model endpoint, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "External model endpoints connect to outside providers while centralizing usage/governance.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_037",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "batch inference"
      ],
      "question": "When should batch inference be considered over real-time serving?",
      "options": [
        {
          "id": "A",
          "text": "When processing large offline tables where immediate user response is not required",
          "explanation": "Correct. Batch is appropriate for asynchronous enrichment/scoring at scale."
        },
        {
          "id": "B",
          "text": "When every user needs instant chat",
          "explanation": "Incorrect. The choice “When every user needs instant chat” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When processing large offline tables where immediate user response is not required, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "When there are no records",
          "explanation": "Incorrect. The choice “When there are no records” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When processing large offline tables where immediate user response is not required, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "When UI color matters",
          "explanation": "Incorrect. The choice “When UI color matters” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. When processing large offline tables where immediate user response is not required, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. When processing large offline tables where immediate user response is not required. Batch is appropriate for asynchronous enrichment/scoring at scale.",
      "source_links": [
        "https://docs.databricks.com/aws/en/large-language-models/ai-functions"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_038",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "ai_query"
      ],
      "question": "What is a natural output of ai_query in SQL workflows?",
      "options": [
        {
          "id": "A",
          "text": "A column with generated/enriched AI output per row",
          "explanation": "Correct. The choice “A column with generated/enriched AI output per row” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. A column with generated/enriched AI output per row, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "A new workspace",
          "explanation": "Incorrect. The choice “A new workspace” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A column with generated/enriched AI output per row, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "A model alias",
          "explanation": "Incorrect. The choice “A model alias” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A column with generated/enriched AI output per row, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "A notebook screenshot",
          "explanation": "Incorrect. The choice “A notebook screenshot” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. A column with generated/enriched AI output per row, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. A column with generated/enriched AI output per row. AI functions can enrich rows by calling model services from SQL.",
      "source_links": [
        "https://docs.databricks.com/aws/en/large-language-models/ai-functions"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_039",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "RAG"
      ],
      "question": "What is the main risk of putting all context into a system prompt instead of using retrieval?",
      "options": [
        {
          "id": "A",
          "text": "Stale/oversized prompt and no scalable grounding",
          "explanation": "Correct. RAG scales and updates knowledge more effectively than static prompt stuffing. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Lower UI cost only",
          "explanation": "Incorrect. The choice “Lower UI cost only” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Stale/oversized prompt and no scalable grounding, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Better access controls automatically",
          "explanation": "Incorrect. The choice “Better access controls automatically” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Stale/oversized prompt and no scalable grounding, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Perfect facts forever",
          "explanation": "Incorrect. The choice “Perfect facts forever” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Stale/oversized prompt and no scalable grounding, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Stale/oversized prompt and no scalable grounding. RAG scales and updates knowledge more effectively than static prompt stuffing.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_040",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "4. Assembling and Deploying Applications",
      "difficulty": "Medium",
      "tags": [
        "public repo"
      ],
      "question": "Which is better for a public Git app: external CDN dependencies or local files?",
      "options": [
        {
          "id": "A",
          "text": "Local/no-build files for offline reliability and simple hosting",
          "explanation": "Correct. Public/offline apps are easier to run and safer when they avoid secrets and private data."
        },
        {
          "id": "B",
          "text": "Secret tokens in JavaScript",
          "explanation": "Incorrect. The choice “Secret tokens in JavaScript” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Local/no-build files for offline reliability and simple hosting, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Private docs committed to repo",
          "explanation": "Incorrect. The choice “Private docs committed to repo” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Local/no-build files for offline reliability and simple hosting, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Paid question dumps",
          "explanation": "Incorrect. The choice “Paid question dumps” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Local/no-build files for offline reliability and simple hosting, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Local/no-build files for offline reliability and simple hosting. Public/offline apps are easier to run and safer when they avoid secrets and private data.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_041",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "copyright"
      ],
      "question": "Why should private workshop questions not be committed publicly?",
      "options": [
        {
          "id": "A",
          "text": "They may be copyrighted/internal and not licensed for redistribution",
          "explanation": "Correct. Public repos should avoid content without clear redistribution rights."
        },
        {
          "id": "B",
          "text": "They make the app faster",
          "explanation": "Incorrect. The choice “They make the app faster” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They may be copyrighted/internal and not licensed for redistribution, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "They change vector dimensions",
          "explanation": "Incorrect. The choice “They change vector dimensions” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They may be copyrighted/internal and not licensed for redistribution, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "They disable MLflow",
          "explanation": "Incorrect. The choice “They disable MLflow” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They may be copyrighted/internal and not licensed for redistribution, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. They may be copyrighted/internal and not licensed for redistribution. Public repos should avoid content without clear redistribution rights.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_042",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "copyright",
        "Udemy"
      ],
      "question": "Why should paid Udemy questions not be copied into the app?",
      "options": [
        {
          "id": "A",
          "text": "They are copyrighted course content; use public listings only for topic inspiration",
          "explanation": "Correct. Paid course questions should not be redistributed without permission."
        },
        {
          "id": "B",
          "text": "They are always wrong",
          "explanation": "Incorrect. The choice “They are always wrong” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are copyrighted course content; use public listings only for topic inspiration, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "They cannot be displayed in HTML",
          "explanation": "Incorrect. The choice “They cannot be displayed in HTML” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are copyrighted course content; use public listings only for topic inspiration, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "They lower latency",
          "explanation": "Incorrect. The choice “They lower latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. They are copyrighted course content; use public listings only for topic inspiration, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. They are copyrighted course content; use public listings only for topic inspiration. Paid course questions should not be redistributed without permission.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_043",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "disclaimer"
      ],
      "question": "Which is a good public-repo disclaimer?",
      "options": [
        {
          "id": "A",
          "text": "Unofficial study aid, not affiliated with Databricks, no exam dumps",
          "explanation": "Correct. Public study tools should be transparent and avoid misleading affiliation claims."
        },
        {
          "id": "B",
          "text": "Guaranteed real exam answers",
          "explanation": "Incorrect. The choice “Guaranteed real exam answers” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Unofficial study aid, not affiliated with Databricks, no exam dumps, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Official Databricks product",
          "explanation": "Incorrect. The choice “Official Databricks product” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Unofficial study aid, not affiliated with Databricks, no exam dumps, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Certification included",
          "explanation": "Incorrect. The choice “Certification included” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Unofficial study aid, not affiliated with Databricks, no exam dumps, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Unofficial study aid, not affiliated with Databricks, no exam dumps. Public study tools should be transparent and avoid misleading affiliation claims.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_044",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "origin labels"
      ],
      "question": "Which is the safest origin label for original questions created from docs?",
      "options": [
        {
          "id": "A",
          "text": "Generated practice — official-doc aligned",
          "explanation": "Correct. Clear labels communicate provenance without implying leaked/official exam content."
        },
        {
          "id": "B",
          "text": "Real exam leaked item",
          "explanation": "Incorrect. The choice “Real exam leaked item” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Generated practice — official-doc aligned, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Copied from paid course",
          "explanation": "Incorrect. The choice “Copied from paid course” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Generated practice — official-doc aligned, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Guaranteed exam answer",
          "explanation": "Incorrect. The choice “Guaranteed exam answer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Generated practice — official-doc aligned, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Generated practice — official-doc aligned. Clear labels communicate provenance without implying leaked/official exam content.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_045",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "privacy"
      ],
      "question": "What should a public app do with user-imported private questions?",
      "options": [
        {
          "id": "A",
          "text": "Store/import locally and keep out of the repository",
          "explanation": "Correct. Local import keeps private materials out of public source control."
        },
        {
          "id": "B",
          "text": "Automatically publish them to GitHub",
          "explanation": "Incorrect. The choice “Automatically publish them to GitHub” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Store/import locally and keep out of the repository, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Send them to a server",
          "explanation": "Incorrect. The choice “Send them to a server” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Store/import locally and keep out of the repository, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Use them as official logo assets",
          "explanation": "Incorrect. The choice “Use them as official logo assets” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Store/import locally and keep out of the repository, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Store/import locally and keep out of the repository. Local import keeps private materials out of public source control.",
      "source_links": [
        "https://docs.databricks.com/aws/en/dev-tools/databricks-apps/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_046",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "least privilege"
      ],
      "question": "What is least privilege for an agent tool?",
      "options": [
        {
          "id": "A",
          "text": "Give only the permissions/actions needed for the task",
          "explanation": "Correct. Least privilege reduces blast radius of tool misuse or prompt injection."
        },
        {
          "id": "B",
          "text": "Give workspace admin to every tool",
          "explanation": "Incorrect. The choice “Give workspace admin to every tool” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Give only the permissions/actions needed for the task, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Use one all-powerful PAT in frontend",
          "explanation": "Incorrect. The choice “Use one all-powerful PAT in frontend” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Give only the permissions/actions needed for the task, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Disable audit logs",
          "explanation": "Incorrect. The choice “Disable audit logs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Give only the permissions/actions needed for the task, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Give only the permissions/actions needed for the task. Least privilege reduces blast radius of tool misuse or prompt injection.",
      "source_links": [
        "https://docs.databricks.com/aws/en/agents/agent-framework/author-agent"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_047",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "audit"
      ],
      "question": "Why is audit logging important for GenAI endpoints?",
      "options": [
        {
          "id": "A",
          "text": "It supports investigation of unsafe/costly/incorrect behavior",
          "explanation": "Correct. The choice “It supports investigation of unsafe/costly/incorrect behavior” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. It supports investigation of unsafe/costly/incorrect behavior, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It increases creativity",
          "explanation": "Incorrect. The choice “It increases creativity” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It supports investigation of unsafe/costly/incorrect behavior, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It replaces all tests",
          "explanation": "Incorrect. The choice “It replaces all tests” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It supports investigation of unsafe/costly/incorrect behavior, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It removes data governance",
          "explanation": "Incorrect. The choice “It removes data governance” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. It supports investigation of unsafe/costly/incorrect behavior, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. It supports investigation of unsafe/costly/incorrect behavior. Logs make production behavior reviewable and accountable.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_048",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "5. Governance",
      "difficulty": "Medium",
      "tags": [
        "licensing"
      ],
      "question": "Which is a correct reaction to uncertain license terms for source docs?",
      "options": [
        {
          "id": "A",
          "text": "Do not use until rights are confirmed",
          "explanation": "Correct. The choice “Do not use until rights are confirmed” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Do not use until rights are confirmed, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Use now and ask later",
          "explanation": "Incorrect. The choice “Use now and ask later” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Do not use until rights are confirmed, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Hide source URL",
          "explanation": "Incorrect. The choice “Hide source URL” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Do not use until rights are confirmed, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Fine-tune immediately",
          "explanation": "Incorrect. Fine-tuning changes model weights and is usually not the first choice for fresh, private, frequently changing, or transaction-specific facts. It does not fit here because the correct choice is A. Do not use until rights are confirmed, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Do not use until rights are confirmed. Licensing risks must be resolved before use.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_049",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "traces"
      ],
      "question": "What does an MLflow trace tree help visualize?",
      "options": [
        {
          "id": "A",
          "text": "Parent/child steps across retrieval, tools, LLM calls, and custom functions",
          "explanation": "Correct. The choice “Parent/child steps across retrieval, tools, LLM calls, and custom functions” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Parent/child steps across retrieval, tools, LLM calls, and custom functions, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Only final certification score",
          "explanation": "Incorrect. The choice “Only final certification score” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Parent/child steps across retrieval, tools, LLM calls, and custom functions, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only table schema",
          "explanation": "Incorrect. The choice “Only table schema” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Parent/child steps across retrieval, tools, LLM calls, and custom functions, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only package version",
          "explanation": "Incorrect. The choice “Only package version” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Parent/child steps across retrieval, tools, LLM calls, and custom functions, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Parent/child steps across retrieval, tools, LLM calls, and custom functions. Trace trees show nested execution across a GenAI app.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_050",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "eval sets"
      ],
      "question": "Which production data is useful to create future eval sets?",
      "options": [
        {
          "id": "A",
          "text": "Representative prompts, responses, contexts, feedback, and failure cases",
          "explanation": "Correct. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself. This directly satisfies the scenario: Real traffic and feedback provide realistic eval cases."
        },
        {
          "id": "B",
          "text": "Only favicon clicks",
          "explanation": "Incorrect. The choice “Only favicon clicks” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only browser width",
          "explanation": "Incorrect. The choice “Only browser width” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Only user agent",
          "explanation": "Incorrect. The choice “Only user agent” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Representative prompts, responses, contexts, feedback, and failure cases. Real traffic and feedback provide realistic eval cases.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/inference-tables",
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_051",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "latency"
      ],
      "question": "What is the risk of relying only on average latency?",
      "options": [
        {
          "id": "A",
          "text": "Tail latency problems can be hidden; monitor p95/p99 too",
          "explanation": "Correct. The choice “Tail latency problems can be hidden; monitor p95/p99 too” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Tail latency problems can be hidden; monitor p95/p99 too, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "It always captures all issues",
          "explanation": "Incorrect. The choice “It always captures all issues” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Tail latency problems can be hidden; monitor p95/p99 too, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "It measures correctness",
          "explanation": "Incorrect. The choice “It measures correctness” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Tail latency problems can be hidden; monitor p95/p99 too, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "It validates licenses",
          "explanation": "Incorrect. The choice “It validates licenses” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Tail latency problems can be hidden; monitor p95/p99 too, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Tail latency problems can be hidden; monitor p95/p99 too. Percentiles reveal slow outliers that averages may mask.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/model-serving/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_052",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "external models"
      ],
      "question": "What should be monitored when using external models?",
      "options": [
        {
          "id": "A",
          "text": "Usage, latency, errors, cost, and provider-related failures",
          "explanation": "Correct. External providers add cost/latency/error dependencies to monitor."
        },
        {
          "id": "B",
          "text": "Only vector dimension",
          "explanation": "Incorrect. The choice “Only vector dimension” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Only SQL count",
          "explanation": "Incorrect. The choice “Only SQL count” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "Only Git stars",
          "explanation": "Incorrect. The choice “Only Git stars” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Usage, latency, errors, cost, and provider-related failures. External providers add cost/latency/error dependencies to monitor.",
      "source_links": [
        "https://docs.databricks.com/aws/en/machine-learning/foundation-models/external-models/",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_053",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "drift"
      ],
      "question": "What indicates retrieval drift?",
      "options": [
        {
          "id": "A",
          "text": "Queries start retrieving less relevant/stale context over time",
          "explanation": "Correct. Retrieval quality can change as documents/queries evolve and should be monitored."
        },
        {
          "id": "B",
          "text": "Favicon changes",
          "explanation": "Incorrect. The choice “Favicon changes” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Queries start retrieving less relevant/stale context over time, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Code comments increase",
          "explanation": "Incorrect. The choice “Code comments increase” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Queries start retrieving less relevant/stale context over time, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "The README is longer",
          "explanation": "Incorrect. The choice “The README is longer” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Queries start retrieving less relevant/stale context over time, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Queries start retrieving less relevant/stale context over time. Retrieval quality can change as documents/queries evolve and should be monitored.",
      "source_links": [
        "https://docs.databricks.com/aws/en/lakehouse-monitoring/",
        "https://docs.databricks.com/aws/en/ai-search/ai-search"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_054",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "SME feedback"
      ],
      "question": "What should happen after SME feedback marks an answer wrong?",
      "options": [
        {
          "id": "A",
          "text": "Turn it into a labeled eval example and use it to improve prompt/retrieval/model",
          "explanation": "Correct. SME labels are valuable for regression tests and improvement loops. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself."
        },
        {
          "id": "B",
          "text": "Delete the feedback",
          "explanation": "Incorrect. The choice “Delete the feedback” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Turn it into a labeled eval example and use it to improve prompt/retrieval/model, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Ignore it if LLM was confident",
          "explanation": "Incorrect. The choice “Ignore it if LLM was confident” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Turn it into a labeled eval example and use it to improve prompt/retrieval/model, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only change CSS",
          "explanation": "Incorrect. The choice “Only change CSS” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Turn it into a labeled eval example and use it to improve prompt/retrieval/model, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Turn it into a labeled eval example and use it to improve prompt/retrieval/model. SME labels are valuable for regression tests and improvement loops.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_055",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "cost"
      ],
      "question": "Which trace metadata is useful for diagnosing high cost?",
      "options": [
        {
          "id": "A",
          "text": "Token counts, model/endpoint, tool calls, latency",
          "explanation": "Correct. The choice “Token counts, model/endpoint, tool calls, latency” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Token counts, model/endpoint, tool calls, latency, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Only answer font",
          "explanation": "Incorrect. The choice “Only answer font” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Token counts, model/endpoint, tool calls, latency, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Only user avatar",
          "explanation": "Incorrect. The choice “Only user avatar” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Token counts, model/endpoint, tool calls, latency, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Only notebook title",
          "explanation": "Incorrect. The choice “Only notebook title” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Token counts, model/endpoint, tool calls, latency, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Token counts, model/endpoint, tool calls, latency. Cost diagnosis needs model and token/usage telemetry.",
      "source_links": [
        "https://docs.databricks.com/aws/en/mlflow3/genai/tracing/",
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_056",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "custom scorers"
      ],
      "question": "What is the best use of custom scorers?",
      "options": [
        {
          "id": "A",
          "text": "Encode task-specific evaluation logic not covered by generic metrics",
          "explanation": "Correct. Evaluation assesses model/app quality, not data asset access, lineage, and auditing. This matches the scenario because the correct choice is A. Encode task-specific evaluation logic not covered by generic metrics, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Replace all monitoring",
          "explanation": "Incorrect. The choice “Replace all monitoring” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Encode task-specific evaluation logic not covered by generic metrics, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Generate official exam certs",
          "explanation": "Incorrect. The choice “Generate official exam certs” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Encode task-specific evaluation logic not covered by generic metrics, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Create data catalogs",
          "explanation": "Incorrect. Catalog governance covers governed data assets, centralized permissions, lineage, and auditing. It does not fit here because the correct choice is A. Encode task-specific evaluation logic not covered by generic metrics, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Encode task-specific evaluation logic not covered by generic metrics. Custom scorers let teams evaluate domain-specific requirements.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_057",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "prompt eval"
      ],
      "question": "Why compare candidate prompts on the same eval set?",
      "options": [
        {
          "id": "A",
          "text": "To isolate prompt impact on quality metrics",
          "explanation": "Correct. Prompting controls the model instructions and output format, but it cannot reliably supply missing private/live facts by itself. This directly satisfies the scenario: Controlled eval sets make prompt comparisons meaningful."
        },
        {
          "id": "B",
          "text": "To change source documents randomly",
          "explanation": "Incorrect. The choice “To change source documents randomly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To isolate prompt impact on quality metrics, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "To hide failures",
          "explanation": "Incorrect. The choice “To hide failures” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To isolate prompt impact on quality metrics, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "To remove test data",
          "explanation": "Incorrect. The choice “To remove test data” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. To isolate prompt impact on quality metrics, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. To isolate prompt impact on quality metrics. Controlled eval sets make prompt comparisons meaningful.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_058",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "LLM judge"
      ],
      "question": "What should you do if LLM judge and human SME disagree often?",
      "options": [
        {
          "id": "A",
          "text": "Calibrate rubric/examples and inspect disagreement cases",
          "explanation": "Correct. The choice “Calibrate rubric/examples and inspect disagreement cases” points to a different tool, workflow, or optimization than the one being tested in the scenario. This matches the scenario because the correct choice is A. Calibrate rubric/examples and inspect disagreement cases, because it best satisfies the scenario constraints."
        },
        {
          "id": "B",
          "text": "Trust the judge blindly",
          "explanation": "Incorrect. The choice “Trust the judge blindly” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Calibrate rubric/examples and inspect disagreement cases, because it best satisfies the scenario constraints."
        },
        {
          "id": "C",
          "text": "Delete human feedback",
          "explanation": "Incorrect. The choice “Delete human feedback” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Calibrate rubric/examples and inspect disagreement cases, because it best satisfies the scenario constraints."
        },
        {
          "id": "D",
          "text": "Increase CSS padding",
          "explanation": "Incorrect. The choice “Increase CSS padding” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the correct choice is A. Calibrate rubric/examples and inspect disagreement cases, because it best satisfies the scenario constraints."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Calibrate rubric/examples and inspect disagreement cases. Disagreement signals rubric/model calibration issues.",
      "source_links": [
        "https://www.databricks.com/learn/certification/genai-engineer-associate"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    },
    {
      "id": "V3PLUS_059",
      "source": "Generated practice",
      "origin_type": "Generated practice",
      "origin_label": "Generated by AI; official-doc aligned; no Udemy/exam-dump content copied",
      "section": "6. Evaluation and Monitoring",
      "difficulty": "Medium",
      "tags": [
        "guardrails"
      ],
      "question": "Which monitoring signal suggests a prompt injection attack spike?",
      "options": [
        {
          "id": "A",
          "text": "Increase in blocked malicious-input guardrail events",
          "explanation": "Correct. Guardrail event counts can surface attack attempts or unsafe traffic changes. Guardrails filter or constrain inputs/outputs to reduce unsafe, off-topic, or policy-violating behavior."
        },
        {
          "id": "B",
          "text": "Lower favicon load time",
          "explanation": "Incorrect. The choice “Lower favicon load time” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "C",
          "text": "Higher CSS size",
          "explanation": "Incorrect. The choice “Higher CSS size” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        },
        {
          "id": "D",
          "text": "More README views",
          "explanation": "Incorrect. The choice “More README views” points to a different tool, workflow, or optimization than the one being tested in the scenario. It does not fit here because the scenario asks for operational monitoring of requests, responses, quality, cost, or drift."
        }
      ],
      "correct_answers": [
        "A"
      ],
      "explanation": "The correct answer is A. Increase in blocked malicious-input guardrail events. Guardrail event counts can surface attack attempts or unsafe traffic changes.",
      "source_links": [
        "https://docs.databricks.com/aws/en/ai-gateway/"
      ],
      "public_safe_note": "Original practice item created for study. Not copied from Udemy, not a live/proctored exam item."
    }
  ]
};
