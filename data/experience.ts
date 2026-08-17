export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "klfpro-ai-head",
    company: "KLFPRO",
    role: "AI Engineer & IT Head",
    period: "2025 — Present",
    description: "Leading the technology infrastructure, AI implementations, and full-stack enterprise product development from concept to production.",
    responsibilities: [
      "Architect and develop enterprise CRM and ERP/FinTech platforms",
      "Build and maintain healthcare technology platforms and HRMS solutions",
      "Develop AI-powered solutions, internal automation, and data extraction systems",
      "Manage AWS cloud infrastructure, Vercel/Cloudflare deployments, and internal IT",
      "Lead cross-functional engineering initiatives across web, mobile, and backend",
    ],
    technologies: [
      "Next.js", "React", "Python", "FastAPI", "Flask", "AWS EC2", "PostgreSQL", "Flutter"
    ]
  },
  {
    id: "ibm-intern",
    company: "IBM",
    role: "Data Analytics Intern",
    period: "2023",
    description: "Worked on data visualization and predictive modeling during early engineering career.",
    responsibilities: [
      "Cleaned and visualized large datasets using Pandas/NumPy",
      "Built ML models for predictive analytics",
      "Conducted EDA to identify trends and anomalies"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning"]
  }
];
