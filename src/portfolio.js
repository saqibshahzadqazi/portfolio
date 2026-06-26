/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saqib Shahzad Qazi",
  title: "Hi all, I'm Saqib",
  subTitle: emoji(
    "Senior AI/ML Engineer / Data Scientist 🚀 with ~9 years building enterprise LLM systems, multi-agent architectures, and cloud-native ML pipelines on Google Cloud. Specialized in NLP-to-SQL analytics, contract intelligence, anomaly detection, and large-scale document understanding with Vertex AI (Gemini), LangChain, and RAG."
  ),
  resumeLink:
    "https://www.linkedin.com/in/saqib-shahzad-aa0b083b1",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saqib-shahzad-aa0b083b1",
  gmail: "saqib.shahzad.se@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR AI/ML ENGINEER & DATA SCIENTIST SPECIALIZING IN LLMS, MULTI-AGENT SYSTEMS, AND PRODUCTION ML ON GOOGLE CLOUD",
  skills: [
    emoji(
      "⚡ Build LLM and multi-agent systems with Vertex AI (Gemini), LangChain, and LangGraph, including RAG pipelines over Vector Search"
    ),
    emoji(
      "⚡ Design end-to-end, event-driven ML and data pipelines with Apache Spark (Dataproc), Airflow, and Pub/Sub on Google Cloud"
    ),
    emoji(
      "⚡ Deliver production ML for anomaly detection, NLP-to-SQL analytics, and document intelligence across HR, healthcare, and compliance"
    ),
    emoji(
      "⚡ Deploy scalable, secure inference services on Cloud Run with Docker, IAM, Secret Manager, and full monitoring and logging"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "langchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "gemini-vertex-ai",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "apache-spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "sql-postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "airflow",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Services Section

const servicesSection = {
  title: "Services I Offer",
  subTitle: "ENTERPRISE AI/ML AND DATA SCIENCE SOLUTIONS, FROM RAW DATA TO PRODUCTION",
  services: [
    {
      title: "LLM & GenAI Solutions",
      iconClass: "fas fa-robot",
      description:
        "Enterprise LLM applications with multi-agent reasoning, RAG, and intelligent automation.",
      details: [
        "Build LLM agents with Vertex AI (Gemini), LangChain, and LangGraph",
        "Design RAG systems with Vertex AI Vector Search and embeddings",
        "Add SQL validation, guardrails, and compliance safety layers",
        "NLP-to-SQL analytics so business users query data in plain English",
        "Deploy production GenAI pipelines on Cloud Run with monitoring"
      ],
      technologies: ["Vertex AI", "Gemini", "LangChain", "LangGraph", "RAG", "Vector Search"]
    },
    {
      title: "Machine Learning Models",
      iconClass: "fas fa-brain",
      description:
        "Production ML models for anomaly detection, prediction, and decision support.",
      details: [
        "Unsupervised anomaly detection (Isolation Forest) for fraud and risk",
        "Feature engineering, model training, tuning, and evaluation",
        "Experiment tracking with MLflow and Vertex AI Model Registry",
        "Real-time scoring APIs with auto-scaling on Cloud Run",
        "End-to-end model lifecycle, from data prep to deployment"
      ],
      technologies: ["scikit-learn", "PyTorch", "Isolation Forest", "MLflow", "Vertex AI", "Docker"]
    },
    {
      title: "Data Engineering & ETL",
      iconClass: "fas fa-cogs",
      description:
        "Scalable, event-driven data pipelines and big data processing on the cloud.",
      details: [
        "Event-driven ETL with Cloud Functions, Dataproc, and Pub/Sub",
        "Big data processing and metric computation with Apache Spark",
        "Pipeline orchestration with Airflow (Cloud Composer)",
        "Data validation, cleaning, normalization, and feature pipelines",
        "Curated outputs persisted to Cloud SQL and BigQuery-ready stores"
      ],
      technologies: ["Apache Spark", "Dataproc", "Airflow", "Pub/Sub", "Cloud SQL", "Python"]
    },
    {
      title: "Document & Contract Intelligence",
      iconClass: "fas fa-file-alt",
      description:
        "Large-scale document understanding, extraction, and clause-level analysis.",
      details: [
        "Multi-agent contract clause analysis with LangChain expert agents",
        "Document extraction with Google Document AI (Form Parser)",
        "Standard vs non-standard clause detection with legal heuristics",
        "Key-value mapping, validation, and enrichment with Gemini",
        "Audit-ready logging and traceability in Cloud SQL"
      ],
      technologies: ["Document AI", "Gemini", "LangChain", "Vector Search", "Pub/Sub", "Cloud Run"]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Superior University, Lahore",
      logo: require("./assets/images/superior.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "",
      desc: "Advanced study in computer science with a focus on machine learning and applied AI.",
      descBullets: [
        "Specialized in machine learning, data science, and intelligent systems",
        "Foundation for enterprise-grade LLM and ML engineering work"
      ]
    },
    {
      schoolName: "FAST University, Lahore",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "",
      desc: "Core computer science education covering algorithms, data, and software engineering.",
      descBullets: [
        "Strong foundation in programming, data structures, and mathematics",
        "Built the base for a career in AI/ML and data engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "LLMs & Multi-Agent Systems", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning & Data Science",
      progressPercentage: "92%"
    },
    {
      Stack: "Python & Backend Development",
      progressPercentage: "93%"
    },
    {
      Stack: "Data Engineering & Big Data (Spark, Airflow)",
      progressPercentage: "88%"
    },
    {
      Stack: "Cloud & MLOps (GCP, AWS, Docker)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Data Scientist / AI-ML Engineer",
      company: "Mind Maze",
      companylogo: require("./assets/images/liztek_logo.jpg"),
      date: "Oct 2025 – May 2026",
      desc: "Built enterprise LLM platforms for analytics and contract intelligence on Google Cloud.",
      descBullets: [
        "Built a schema-aware NLP-to-SQL analytics platform on Vertex AI (Gemini) so business users could query NPS and feedback data in natural language",
        "Designed a multi-agent RAG system for contract clause analysis using LangChain and Vertex AI Vector Search",
        "Added SQL validation, query whitelisting, and guardrails to keep production queries safe"
      ]
    },
    {
      role: "Senior Software Engineer – AI/ML",
      company: "Trinet",
      companylogo: require("./assets/images/optivex.jpg"),
      date: "Jul 2025 – Sep 2025",
      desc: "Delivered AI for enterprise HR, payroll, and compliance workflows.",
      descBullets: [
        "Built LLM automation pipelines with Vertex AI Gemini for document understanding and policy extraction",
        "Implemented ML anomaly detection for payroll inconsistencies and compliance risks",
        "Architected secure, event-driven microservices with Pub/Sub, Cloud SQL, and GCS"
      ]
    },
    {
      role: "Senior Software Engineer – AI/ML",
      company: "Digital DirAction",
      companylogo: require("./assets/images/Fierra.jpg"),
      date: "Dec 2020 – Jun 2025",
      desc: "Built production ML pipelines for anomaly detection and intelligent automation.",
      descBullets: [
        "Designed an unsupervised medical claims fraud detection pipeline using Isolation Forest, end to end on GCP",
        "Engineered features like claim z-score, time since last claim, and ZIP distance; tracked runs with MLflow",
        "Built an AI-driven self-healing web scraper that detects and adapts to webpage schema changes"
      ]
    },
    {
      role: "ML Engineer",
      company: "CureMD RCM",
      companylogo: require("./assets/images/saayaHealthLogo.webp"),
      date: "Feb 2017 – Nov 2020",
      desc: "Built document AI, speech, and conversational AI systems.",
      descBullets: [
        "Built a PDF-to-CSV pipeline for multilingual tabular documents using Google Document AI and Gemini",
        "Built an Arabic speaker diarization and transcription tool with Pyannote-audio and Whisper on Cloud Run GPU",
        "Built a multi-agent communication coaching assistant with Dialogflow CX and Vertex AI Gemini"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Disabled: no GitHub token configured
  display: false // Disabled: Major Projects section already showcases work
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle:
    "ENTERPRISE LLM SYSTEMS, MULTI-AGENT PLATFORMS, AND PRODUCTION ML DELIVERING REAL BUSINESS IMPACT",
  projects: [
    {
      image: require("./assets/images/rag-compliance.png"),
      projectName: "Self-Service NPS Analytics (NLP-to-SQL)",
      projectDesc:
        "LLM-powered NLP-to-SQL analytics platform on GCP letting business users query NPS and customer feedback data in plain English, with Vertex AI Gemini and Spark.",
      longDescription:
        "An LLM-powered NLP-to-SQL analytics platform built on Google Cloud, enabling business users to query NPS and customer feedback data using natural language. Event-driven ETL pipelines (Cloud Functions, Dataproc) ingest, clean, and curate survey data, while Spark computes NPS scores, sentiment aggregates, and time-based trends into Cloud SQL. A schema-aware Vertex AI (Gemini) pipeline converts questions into validated, executable SQL, deployed as a scalable REST API on Cloud Run.",
      highlights: [
        "Schema-aware NLP-to-SQL with Vertex AI Gemini converting questions into validated SQL",
        "SQL validation, query whitelisting, and guardrails to prevent unsafe queries",
        "Event-driven Spark ETL on Dataproc for NPS scores, sentiment, and trends",
        "Deployed as an auto-scaling REST API on Cloud Run with full monitoring"
      ],
      techStack: ["Vertex AI (Gemini)", "Apache Spark", "Cloud Run", "Cloud SQL", "Python", "Dataproc"],
      footerLink: []
    },
    {
      image: require("./assets/images/agentic-procurement.png"),
      projectName: "Intelligent Contract Clause Analysis (Multi-Agent RAG)",
      projectDesc:
        "Multi-agent RAG platform on GCP that parses large contracts and flags non-standard clauses using LangChain expert agents and Vertex AI Vector Search.",
      longDescription:
        "An LLM-powered contract analysis platform on Google Cloud that parses large contracts and automatically extracts clause- and paragraph-level content. A GCP-native, event-driven system uses Pub/Sub to decouple document extraction, clause-specific expert agents, and orchestration. A vector-based RAG pipeline on Vertex AI Vector Search retrieves relevant passages, while LangChain expert agents assess content and flag standard vs non-standard legal terms.",
      highlights: [
        "Vector-based RAG with Vertex AI Vector Search over contract embeddings",
        "LangChain clause-expert agents detecting standard vs non-standard legal terms",
        "Event-driven, decoupled architecture with Pub/Sub and Cloud Run",
        "Audit-ready logging and traceability persisted in Cloud SQL"
      ],
      techStack: ["LangChain", "Vertex AI (Gemini)", "Vector Search", "Pub/Sub", "Cloud Run", "PostgreSQL"],
      footerLink: []
    },
    {
      image: require("./assets/images/healthcare.png"),
      projectName: "Medical Claims Anomaly Detection (Isolation Forest)",
      projectDesc:
        "Scalable unsupervised anomaly detection pipeline on GCP that flags suspicious medical claims in real time using Isolation Forest and engineered fraud signals.",
      longDescription:
        "A scalable, end-to-end unsupervised anomaly detection pipeline on Google Cloud to identify suspicious medical claims using Isolation Forest. Automated ETL triggered by new uploads validates and normalizes data; a Vertex AI training pipeline computes features like z-score of claim amount, time since last claim, and ZIP distance. The tuned model is tracked with MLflow, versioned in Vertex AI Model Registry, and served as a real-time scoring API on Cloud Run.",
      highlights: [
        "Unsupervised Isolation Forest detecting fraud with no labeled data",
        "Engineered features: claim z-score, time since last claim, ZIP distance",
        "Automated ETL, training, and inference orchestrated with Cloud Composer (Airflow)",
        "Real-time scoring API on Cloud Run with MLflow experiment tracking"
      ],
      techStack: ["scikit-learn", "Vertex AI", "Cloud Composer", "MLflow", "Cloud Run", "Python"],
      footerLink: []
    },
    {
      image: require("./assets/images/ace-predictor.png"),
      projectName: "Self-Healing Web Scraper (AI Schema Adaptation)",
      projectDesc:
        "Intelligent scraping system on GCP that detects and adapts to webpage schema changes using Vertex AI Gemini, ensuring uninterrupted data collection.",
      longDescription:
        "An intelligent, self-healing web scraping system on Google Cloud that automatically detects and adapts to webpage schema changes. An AI-driven framework uses Vertex AI (Gemini) to fingerprint and compare HTML DOM structures, with Cloud Bigtable storing schemas, configs, and historical versions for traceability and rollback. Cloud Functions orchestrate schema comparison and automatic regeneration of scraper logic, with GitHub Actions CI/CD and Pub/Sub alerting.",
      highlights: [
        "AI schema adaptation with Vertex AI Gemini fingerprinting HTML DOM structures",
        "Cloud Bigtable store for schemas, configs, and versioned rollbacks",
        "Serverless orchestration with Cloud Functions and automatic scraper regeneration",
        "CI/CD with GitHub Actions and real-time alerting via Pub/Sub"
      ],
      techStack: ["Vertex AI (Gemini)", "Cloud Functions", "Cloud Bigtable", "Pub/Sub", "GitHub Actions", "Docker"],
      footerLink: []
    },
    {
      image: require("./assets/images/GRC.jpg"),
      projectName: "HR & Compliance AI Automation",
      projectDesc:
        "LLM and ML automation for enterprise HR, payroll, and compliance, with Vertex AI document understanding and anomaly detection for payroll and benefits risk.",
      longDescription:
        "AI/ML solutions to enhance enterprise HR, payroll, and compliance workflows. LLM-powered automation with Vertex AI Gemini handles document understanding, policy extraction, and classification of HR compliance artifacts. ML-driven anomaly detection identifies payroll inconsistencies, benefits-eligibility deviations, and compliance risks, all on a secure, event-driven microservices framework with Pub/Sub, Cloud SQL, and GCS.",
      highlights: [
        "LLM document understanding and policy extraction with Vertex AI Gemini",
        "ML anomaly detection for payroll and benefits-eligibility risks",
        "Secure, event-driven microservices with Pub/Sub, Cloud SQL, and GCS",
        "Containerized inference on Cloud Run (GPU/CPU) with autoscaling"
      ],
      techStack: ["Vertex AI (Gemini)", "scikit-learn", "Pub/Sub", "Cloud Run", "Cloud SQL", "GCS"],
      footerLink: []
    },
    {
      image: require("./assets/images/globalmart-sales.png"),
      projectName: "AI-Enhanced PDF to CSV Mapping (Document AI)",
      projectDesc:
        "Document processing pipeline converting multilingual (German) tabular PDFs into structured CSV using Google Document AI, Gemini, and LangChain.",
      longDescription:
        "An intelligent document processing pipeline that converts multilingual (German) tabular PDFs into structured, analytics-ready CSV. Google Document AI (Form Parser / Custom Extractor) detects tables and key-value pairs, while extracted layout and text are transformed into structured JSON. LLM-driven post-processing with Vertex AI Gemini and LangChain maps, validates, and enriches fields, with key-value matching to update existing CSV datasets.",
      highlights: [
        "Google Document AI for table and key-value extraction from complex PDFs",
        "German-language text extraction with preserved table structure",
        "LLM post-processing with Gemini and LangChain for mapping and validation",
        "Prompt engineering and key-value matching to update CSV datasets"
      ],
      techStack: ["Document AI", "Vertex AI (Gemini)", "LangChain", "Python", "JSON", "CSV"],
      footerLink: []
    },
    {
      image: require("./assets/images/omani.png"),
      projectName: "Arabic Speaker Diarization & Transcription",
      projectDesc:
        "End-to-end Arabic speech system on GCP producing speaker-attributed transcripts with Pyannote-audio and Whisper (large) on Cloud Run GPU.",
      longDescription:
        "An end-to-end speaker diarization and transcription system on Google Cloud for Arabic conversational audio, producing accurate speaker-attributed transcripts. Pyannote-audio on Cloud Run (GPU) handles precise speaker segmentation with timestamps, while Whisper (large) delivers high-accuracy Arabic speech-to-text. Timestamp alignment merges diarization and transcription, with a JavaScript web interface for uploads, relabeling, and downloads.",
      highlights: [
        "Speaker segmentation with Pyannote-audio on Cloud Run GPU",
        "High-accuracy Arabic speech-to-text with Whisper (large)",
        "Timestamp alignment merging diarization and transcription outputs",
        "JavaScript web UI for upload, speaker relabeling, and transcript download"
      ],
      techStack: ["Pyannote-audio", "Whisper", "Cloud Run (GPU)", "Python", "GCS", "JavaScript"],
      footerLink: []
    },
    {
      image: require("./assets/images/voice-ai-patient.png"),
      projectName: "Multi-Agent Communication Coaching",
      projectDesc:
        "Multi-agent conversational AI on GCP helping users build assertive communication and conflict-resolution skills with Vertex AI Gemini and Dialogflow CX.",
      longDescription:
        "A multi-agent conversational AI system on Google Cloud that helps users develop assertive communication, conflict resolution, and constructive feedback skills. A modular, intent-driven dialogue architecture handles dynamic, multi-turn conversations, with specialized agents (emotional intelligence coach, workplace communication advisor) and seamless handoffs. Vertex AI Gemini delivers context-aware guidance, scenario simulations, and real-time feedback, deployed as a scalable Cloud Run service.",
      highlights: [
        "Modular, intent-driven dialogue for dynamic multi-turn conversations",
        "Specialized AI agents with context-based handoffs",
        "Context-aware guidance and scenario simulations with Vertex AI Gemini",
        "Deployed as a scalable web service on Cloud Run"
      ],
      techStack: ["Vertex AI (Gemini)", "Dialogflow CX", "Node.js", "Cloud Run", "Multi-Agent", "NLP"],
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Highlights 🏆 "),
  subtitle:
    "Key strengths and recognitions across enterprise AI, machine learning, and data engineering",

  achievementsCards: [
    {
      title: "Enterprise LLM Systems",
      subtitle:
        "Designed and shipped production NLP-to-SQL and multi-agent RAG platforms on Vertex AI for real business users.",
      image: require("./assets/images/Applications of AI.jpeg"),
      imageAlt: "Enterprise LLM Systems",
      footerLink: []
    },
    {
      title: "Production ML at Scale",
      subtitle:
        "Built and deployed unsupervised anomaly detection and document intelligence pipelines across healthcare, HR, and compliance.",
      image: require("./assets/images/Big data analytics.jpeg"),
      imageAlt: "Production ML",
      footerLink: []
    },
    {
      title: "Cloud-Native MLOps",
      subtitle:
        "End-to-end pipelines on Google Cloud with Cloud Run, Pub/Sub, MLflow, and full monitoring, logging, and security.",
      image: require("./assets/images/Cloud Foundations.jpeg"),
      imageAlt: "Cloud-Native MLOps",
      footerLink: []
    }
  ],
  display: false // Certifications/achievements section hidden
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights on LLMs, multi-agent systems, and production ML.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("SHARING KNOWLEDGE ON AI/ML AND LLM SYSTEMS 🚀"),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSIONS ON AI/ML AND DATA SCIENCE",

  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: false // Resume/download removed
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to senior Data Scientist and AI/ML roles, remote across US time zones. Let's talk about your AI/ML project!",
  number: "+1 (201) 479-4770",
  email_address: "saqib.shahzad.se@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  servicesSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
