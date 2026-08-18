export type Project = {
  id: string;
  index: number;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  overview: string;
  role: string;
  techStack: string[];
  features: string[];
  architecture?: string;
  deployment?: string;
  image: string;
  status: "Production" | "Development" | "Archived";
  links: {
    live?: string;
    github?: string;
    type: "Private Production System" | "Public Website" | "Demo";
  };
  isProfessional: boolean;
};

export const projects: Project[] = [
  {
    id: "klfpro-crm",
    index: 1,
    title: "KLFPRO CRM",
    category: "Enterprise Software",
    shortDescription: "Enterprise CRM & Business Operations Platform",
    description:
      "Full-scale business operations platform managing leads, workflows, MIS reporting, and internal operations for enterprise-level financial services.",
    overview:
      "A comprehensive CRM system built to handle the complete lead lifecycle — from acquisition through sanction and disbursement. The platform integrates MIS dashboards, attendance tracking, HR modules, and role-based access control into a unified enterprise interface.",
    role: "Sole architect and full-stack developer. Designed the database schema, built the REST API layer, developed the frontend interface, and deployed to AWS EC2.",
    techStack: ["Python", "Flask", "REST APIs", "JavaScript", "AWS EC2", "PostgreSQL"],
    features: [
      "Lead management & lifecycle tracking",
      "Login / Sanction / Disbursement workflow",
      "Relationship Manager workflows",
      "MIS & Admin dashboard",
      "Attendance & HR module",
      "Role-based access control",
    ],
    architecture:
      "Monolithic Flask application with RESTful API endpoints, PostgreSQL database with complex relational models, server-side rendering with JavaScript-enhanced frontend.",
    deployment: "Deployed on AWS EC2 with Nginx reverse proxy. Database hosted on managed PostgreSQL.",
    image: "/assets/projects/crm-dashboard.jpg",
    status: "Production",
    links: {
      type: "Private Production System",
    },
    isProfessional: true,
  },
  {
    id: "klfpro-healthcare",
    index: 2,
    title: "KLFPRO Healthcare",
    category: "Enterprise Software",
    shortDescription: "Healthcare Business Solutions Platform",
    description:
      "Enterprise healthcare platform focused on revenue cycle management, medical billing, and provider credentialing for US healthcare operations.",
    overview:
      "A modern healthcare business solutions platform built to streamline revenue cycle management, medical billing and coding, denial management, and provider credentialing workflows. Designed for operational efficiency in the US healthcare market.",
    role: "Lead frontend engineer and system architect. Built the entire Next.js frontend, designed the component system, and integrated with backend APIs.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Revenue Cycle Management",
      "Medical Billing & Coding",
      "Denial Management",
      "Provider Credentialing",
      "AR Follow-up workflows",
    ],
    architecture:
      "Next.js App Router with server components, Tailwind CSS design system, REST API integration layer.",
    deployment: "Deployed on Vercel with custom domain and CDN.",
    image: "/assets/projects/healthcare-platform.jpg",
    status: "Production",
    links: {
      live: "https://klfprohealthcare.com",
      type: "Public Website",
    },
    isProfessional: true,
  },
  {
    id: "klf-times",
    index: 3,
    title: "KLF Times",
    category: "Web",
    shortDescription: "Digital News & Publishing Platform",
    description:
      "High-performance digital publishing platform with automated news workflows, SEO optimization, and social media distribution.",
    overview:
      "A full-featured digital news platform built for speed and SEO. Includes automated content workflows, social media card generation, category-based navigation, and a custom CMS backend for editorial teams.",
    role: "Full-stack developer. Built the Next.js frontend, implemented automated news workflows, SEO optimization, and social publishing features.",
    techStack: ["Next.js", "React", "APIs", "Automation"],
    features: [
      "News publishing & SEO optimization",
      "Content management system",
      "Automated news workflows",
      "Social media publishing",
      "Dynamic news card generation",
    ],
    architecture:
      "Next.js with ISR for fast page loads, API routes for content management, automated workflows for social distribution.",
    deployment: "Deployed on Vercel with custom domain, Cloudflare CDN.",
    image: "/assets/projects/news-platform.jpg",
    status: "Production",
    links: {
      live: "https://klftimes.com",
      type: "Public Website",
    },
    isProfessional: true,
  },
  {
    id: "npi-lead-extractor",
    index: 4,
    title: "NPI Lead Extractor",
    category: "Data Science",
    shortDescription: "Healthcare Provider Data Intelligence Tool",
    description:
      "Data intelligence tool for extracting and filtering healthcare provider information from the NPI Registry with advanced search and export capabilities.",
    overview:
      "An internal tool designed to extract, filter, and organize healthcare provider data from the National Provider Identifier (NPI) Registry. Features background collection jobs, duplicate detection, and Excel export for sales and outreach teams.",
    role: "Full-stack developer. Built the FastAPI backend for NPI API integration, designed the React frontend with advanced filtering, and implemented background job processing.",
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "OpenPyXL"],
    features: [
      "NPI Registry API integration",
      "Provider & Specialty filtering",
      "State/city & date filtering",
      "Background collection jobs",
      "Duplicate removal & Excel export",
    ],
    architecture:
      "Next.js frontend with FastAPI backend, PostgreSQL for data storage, background workers for batch collection, OpenPyXL for Excel generation.",
    deployment: "Internal deployment on AWS EC2.",
    image: "/assets/projects/npi-extractor.jpg",
    status: "Production",
    links: {
      live: "https://klfpro-npi-extractor-seven.vercel.app/",
      type: "Demo",
    },
    isProfessional: true,
  },
  {
    id: "klfpro-hrms",
    index: 5,
    title: "KLFPRO HRMS",
    category: "Enterprise Software",
    shortDescription: "Employee Management & HR Platform",
    description:
      "Complete HR management system for tracking attendance, managing salaries, generating payslips, and handling the full employee lifecycle.",
    overview:
      "An enterprise HRMS platform that handles employee management, attendance tracking (including GPS-based), salary computation, payslip generation, leave management, and HR analytics. Built with role-based access for HR admins and employees.",
    role: "Full-stack developer. Designed the database schema, built the API layer, developed the admin and employee-facing interfaces.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Employee lifecycle management",
      "Attendance & GPS-based tracking",
      "Salary computation & payslip generation",
      "Leave management system",
      "HR dashboard & role-based access",
    ],
    architecture:
      "Next.js App Router frontend, Node.js/Express API, PostgreSQL with Prisma ORM, PDF generation for payslips.",
    deployment: "Deployed on Vercel (frontend) and AWS EC2 (backend).",
    image: "/assets/projects/hrms-dashboard.jpg",
    status: "Production",
    links: {
      type: "Private Production System",
    },
    isProfessional: true,
  },
  {
    id: "klfpro-hrms-mobile",
    index: 6,
    title: "KLFPRO HRMS Mobile",
    category: "Mobile",
    shortDescription: "Flutter Mobile App for HR Management",
    description:
      "Companion mobile application for the KLFPRO HRMS with GPS-based attendance tracking, salary viewing, and payslip downloads.",
    overview:
      "A cross-platform mobile application built with Flutter that serves as the employee-facing companion to the KLFPRO HRMS. Employees can check in/out with GPS verification, view salary details, download payslips, and manage leave requests.",
    role: "Mobile developer. Built the complete Flutter application, integrated with the HRMS REST API, and implemented GPS-based attendance features.",
    techStack: ["Flutter", "Dart", "REST APIs"],
    features: [
      "Employee authentication",
      "GPS-based attendance check-in/out",
      "Salary information & history",
      "Payslip PDF download",
      "Leave request submission",
    ],
    architecture:
      "Flutter with Provider state management, REST API integration with the HRMS backend, GPS and location services integration.",
    deployment: "Distributed as APK for Android devices.",
    image: "/assets/projects/hrms-mobile.jpg",
    status: "Production",
    links: {
      type: "Private Production System",
    },
    isProfessional: true,
  },
  {
    id: "klfpro-website",
    index: 7,
    title: "KLFPRO Website",
    category: "Web",
    shortDescription: "Corporate Website & Business Platform",
    description:
      "The primary corporate digital presence for KLFPRO — a modern business platform showcasing services, capabilities, and company information.",
    overview:
      "A modern corporate website serving as the primary digital presence for KLFPRO. Built with Next.js for performance and SEO, featuring a clean design that communicates the company's technology and consulting services.",
    role: "Lead developer. Designed and built the complete website using Next.js and Tailwind CSS, optimized for performance and SEO.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Corporate representation",
      "Service showcase",
      "SEO optimized",
      "Responsive design",
      "Contact integration",
    ],
    architecture: "Next.js with static generation, Tailwind CSS design system.",
    deployment: "Deployed on Vercel with custom domain.",
    image: "/assets/projects/corporate-website.jpg",
    status: "Production",
    links: {
      live: "https://klfpro.in",
      type: "Public Website",
    },
    isProfessional: true,
  },

  // Earlier Work & Experiments
  {
    id: "ride-sharing-analytics",
    index: 8,
    title: "Ride-Sharing Analytics",
    category: "Data Science",
    shortDescription: "Demand prediction & geospatial analysis platform",
    description:
      "Optimized ride-sharing services using demand prediction algorithms and geospatial analysis for route and pricing optimization.",
    overview:
      "An academic project applying data science techniques to ride-sharing optimization. Used Pandas, GeoPandas, and Scikit-learn for demand prediction, geospatial analysis, and data visualization.",
    role: "Sole developer and researcher.",
    techStack: ["Python", "Pandas", "GeoPandas", "Scikit-learn"],
    features: [
      "Demand prediction models",
      "Geospatial analysis & mapping",
      "Data visualization dashboards",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
    status: "Archived",
    links: {
      type: "Demo",
      live: "https://ridesharinganalytics.onrender.com/",
      github: "https://github.com/ritikrauniyar93/ride-sharing-analytics",
    },
    isProfessional: false,
  },
  {
    id: "brain-mri-tumor-detection",
    index: 9,
    title: "Brain MRI Tumor Detection",
    category: "AI/ML",
    shortDescription: "CNN model with explainable AI for medical imaging",
    description:
      "Convolutional neural network for detecting tumors in brain MRI scans with Grad-CAM explainability features.",
    overview:
      "A deep learning project using TensorFlow and Keras to build a CNN classifier for brain MRI tumor detection. Integrated Grad-CAM for model explainability, allowing visualization of which regions the model focuses on for predictions.",
    role: "Sole developer and researcher.",
    techStack: ["TensorFlow", "Keras", "OpenCV", "Grad-CAM"],
    features: [
      "Image classification pipeline",
      "Explainable AI with Grad-CAM",
      "Medical imaging preprocessing",
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1470&q=80",
    status: "Archived",
    links: {
      type: "Demo",
      github: "https://github.com/ritikrauniyar93/brain-mri-tumor-detection",
    },
    isProfessional: false,
  },
];
