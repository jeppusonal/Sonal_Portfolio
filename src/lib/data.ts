export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  results: string[];
  category: "ML" | "DE" | "BI" | "AI";
  github?: string;
  demo?: string;
  featured: boolean;
  showcase?: string;
  huggingface?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "internship";
  description: string[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "vehicleiq",
    title: "VehicleIQ",
    tagline: "AI-Powered Vehicle Intelligence Platform",
    problem:
      "Insurance and fleet management companies waste thousands of hours manually identifying vehicles and assessing damage from photos — a slow, error-prone process that delays claims and increases costs.",
    solution:
      "Built a multi-model computer vision pipeline that classifies vehicle make, model, colour, and body type, then detects damage regions — all from a single image upload. Exposed via a FastAPI REST service with sub-second inference.",
    stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "Torchvision", "Docker"],
    results: [
      "Presented at UTS Innovation Showcase 2024",
      "92%+ classification accuracy on make/model recognition",
      "Processes 4 simultaneous inference tasks per image",
      "Sub-200ms API response time on GPU inference",
    ],
    category: "AI",
    github: "https://github.com/jeppusonal",
    huggingface:"https://huggingface.co/spaces/Sidsuresh/VehicleIQ",
    demo: "https://vehicle-iq-eight.vercel.app/",
    featured: true,
    showcase: "UTS Innovation Showcase",
  },
  {
    id: "airbnb-pipeline",
    title: "Airbnb Analytics Pipeline",
    tagline: "Production-Grade Data Engineering with Medallion Architecture",
    problem:
      "Raw Airbnb listing data is unstructured, inconsistent, and difficult to query for business insights. Analysts need clean, reliable data models they can trust for pricing and demand decisions.",
    solution:
      "Designed and built an end-to-end ELT pipeline using Airflow for orchestration, dbt for transformation and testing, PostgreSQL as the warehouse, and GCP for cloud storage — implementing Bronze → Silver → Gold medallion layers.",
    stack: ["Apache Airflow", "dbt", "PostgreSQL", "Google Cloud Platform", "Python", "SQL"],
    results: [
      "3-layer medallion architecture with full data lineage",
      "Automated daily ingestion with Airflow DAGs",
      "15+ dbt models with built-in data quality tests",
      "Enabled analytical queries 8x faster vs raw source tables",
    ],
    category: "DE",
    github: "https://github.com/jeppusonal",
    demo: "#",
    featured: true,
  },
  {
    id: "sales-dashboard",
    title: "Sales Intelligence Dashboard",
    tagline: "Executive-Ready BI Dashboard in Power BI & Tableau",
    problem:
      "Sales leadership lacked a single source of truth for regional performance, product trends, and pipeline health — relying on manual Excel reports that were outdated by the time they were shared.",
    solution:
      "Designed and built interactive dashboards in both Power BI and Tableau with drill-through capabilities, dynamic filters, and KPI cards. Modelled data relationships using star schema for optimal DAX performance.",
    stack: ["Power BI", "Tableau", "DAX", "SQL", "Data Modelling"],
    results: [
      "Reduced report generation time from 4 hours to real-time",
      "Enabled self-serve analytics for 3 business teams",
      "Star schema model supporting 5M+ transaction rows",
      "Drill-through from national → state → rep level",
    ],
    category: "BI",
    github: "https://github.com/jeppusonal",
    demo: "#",
    featured: true,
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Predictor",
    tagline: "ML-Powered Retention Risk Scoring",
    problem:
      "Subscription businesses lose revenue when churn is detected reactively. Identifying at-risk customers before they leave requires predictive models that handle class imbalance in transactional data.",
    solution:
      "Built an end-to-end classification pipeline with feature engineering, SMOTE oversampling for class imbalance, hyperparameter-tuned Random Forest and Decision Tree models, and SHAP explainability for business stakeholders.",
    stack: ["Python", "Scikit-learn", "SMOTE", "Random Forest", "SHAP", "Pandas"],
    results: [
      "84% recall on minority (churn) class after SMOTE",
      "ROC-AUC of 0.91 on holdout test set",
      "SHAP waterfall plots for each prediction — stakeholder-ready",
      "Reduced false negatives by 40% vs baseline logistic regression",
    ],
    category: "ML",
    github: "https://github.com/jeppusonal",
    demo: "#",
    featured: false,
  },
  {
    id: "nyc-taxi",
    title: "NYC Taxi Fare Predictor",
    tagline: "Large-Scale ML on PySpark",
    problem:
      "NYC taxi fare prediction at scale requires processing hundreds of millions of trip records — beyond what single-node pandas can handle.",
    solution:
      "Implemented a distributed ML pipeline using PySpark for feature engineering and model training on the full NYC TLC dataset, with SQL for EDA and feature validation.",
    stack: ["PySpark", "SQL", "MLlib", "Python", "Jupyter"],
    results: [
      "Processed 150M+ trip records using distributed computing",
      "RMSE of $2.14 on holdout fare prediction",
      "Feature engineering: time-of-day, distance buckets, zone encoding",
    ],
    category: "ML",
    github: "https://github.com/jeppusonal",
    demo: "#",
    featured: false,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: ["SQL", "Python", "Pandas", "NumPy", "EDA", "Feature Engineering"],
  },
  {
    category: "Business Intelligence",
    icon: "📈",
    skills: ["Power BI", "Tableau", "DAX", "Data Modelling", "Star Schema"],
  },
  {
    category: "Machine Learning",
    icon: "🤖",
    skills: ["Scikit-learn", "Random Forest", "XGBoost", "Classification", "Regression", "SHAP"],
  },
  {
    category: "Deep Learning & AI",
    icon: "🧠",
    skills: ["PyTorch", "Computer Vision", "NLP", "LangChain", "RAG", "Prompt Engineering"],
  },
  {
    category: "Data Engineering",
    icon: "⚙️",
    skills: ["Apache Airflow", "dbt", "PostgreSQL", "Google Cloud Platform", "Medallion Architecture"],
  },
  {
    category: "Tools & Cloud",
    icon: "☁️",
    skills: ["Docker", "FastAPI", "Git", "GitHub", "GCP", "Jupyter", "PySpark"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Mitsubishi Pension and Market Services",
    role: "Associate Developer",
    period: "Jul 2022 – Jul 2024",
    location: "Sydney, NSW",
    type: "full-time",
    description: [
      "Optimised SQL Server queries and stored procedures supporting high-volume Australian pension and investor management systems, improving report generation performance by 30%+",
      "Built and maintained middleware applications processing large-scale financial records for superannuation and investment funds",
      "Partnered with business stakeholders and operations teams to translate reporting requirements into automated data workflows",
      "Supported production systems with stringent data integrity and regulatory compliance requirements",
    ],
    stack: ["SQL Server", "Stored Procedures", ".NET MVC", "C#", "SSRS"],
  },
];

export const STATS = [
  { label: "Years Industry Experience", value: "2+", suffix: "" },
  { label: "Projects Delivered", value: "10+", suffix: "" },
  { label: "Technologies", value: "20+", suffix: "" },
  { label: "Innovation Showcase", value: "UTS", suffix: "" },
];
