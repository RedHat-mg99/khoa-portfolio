
import { Experience, Project, Service } from './types';

export const PERSONAL_INFO = {
  fullName: "Phan Khoa",
  role: "Software Tester / QA Engineer",
  tagline: "Bridging Quality Assurance and Strategic Product Delivery",
  email: "chanhkhoa102@gmail.com",
  phone: "(+84) 0384-958-259",
  linkedin: "www.linkedin.com/in/pvckhoa",
  github: "https://github.com/",
  summary: "Detail-oriented Tester professional with 4+ years of experience in manual and automated testing. Passionate about ensuring high-quality user experiences and moving towards a Product Delivery Manager role to oversee end-to-end project lifecycles and process optimization."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    company: "TMA Solutions",
    role: "Software Tester",
    duration: "2021 - 2023",
    responsibilities: [
      "Executed comprehensive manual regression tests for mobile and web applications.",
      "Developed automated UI tests with Java Selenium, increasing more coverage from 20% to 45%.",
      "Drafted detailed test case documentation guide for Clients / Customer before product launches.",
      "Managed the full bug lifecycle using Jira, ensuring clear communication between dev and business teams."
    ]
  },
  {
    id: "exp2",
    company: "Realme Vietnam",
    role: "QC Engineer",
    duration: "2024 - 2025",
    responsibilities: [
      "Designed and maintained test cases, ensuring comprehensive coverage of features.",
      "Tested mobile networks and protocols including 3G, 4G, 5G, IMS, VoLTE, VoNR, and VoWiFi.",
      "Performed functional and UX testing for applications such as Zalo, TikTok, Facebook, and Banking apps.",
      "Collaborated with developers and ISP operators to prepare for new feature releases and resolve detected issues."
    ]
  },
  {
    id: "exp3",
    company: "Puzzle Studio (puzzle.sg)",
    role: "Game Tester",
    duration: "Jul - Aug 2025",
    responsibilities: [
      "Wrote and execute manual test cases for visual games.",
      "Previewed and commentted about all assets (UI/UX, animations, functions, game flow, tree level...).",
      "Collected and analyzed requirements to write the document guideline to enhance the user experience.",
      "Tested third-party intergrated functions on pre-release and after-release as Advertisement, charging money."
    ]
  },
  {
    id: "exp4",
    company: "FPT Software HCM",
    role: "Verification Test Engineer I",
    duration: "Nov - Dec 2025",
    responsibilities: [
      "Research about IC circuit, Hardware LSI design flow (ASIC/SoC).",
      "Focus on DFT (design for testability) with SCAN, MBIST layout.",
      "Research Architect design, RTL design, Synthesis, simulate timing clock, logic, memory path.",
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Automation Suite",
    description: "End-to-end automation framework for a large-scale e-commerce platform ensuring checkout and inventory reliability.",
    tools: ["Playwright", "TypeScript", "GitHub Actions"],
    link: "https://github.com"
  },
  {
    id: "p2",
    title: "Accessibility Audit Framework",
    description: "Developed a standardized testing process for WCAG 2.1 compliance across government client web portals.",
    tools: ["Axe-core", "Manual Audit", "Lighthouse"],
    link: "https://github.com"
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Manual Testing",
    description: "Precision-focused human testing to ensure the highest user experience standards.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    items: ["Test Case Design", "Exploratory Testing", "Bug Reporting", "Regression Testing"]
  },
  {
    id: "s2",
    title: "Automation Testing",
    description: "Robust, scalable automation suites that integrate seamlessly into your CI/CD pipeline.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    items: ["Framework Design", "Selenium Web UI", "API Automation", "Performance Testing"]
  },
  {
    id: "s3",
    title: "Product Delivery Consulting",
    description: "Make clear guidance on processing the SDLC and raising optimized delivery productions.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    items: ["Agile Workflow Optimization", "Release Management", "Documents Guideline Verification", "QA-DEV Collaboration"]
  }
];
