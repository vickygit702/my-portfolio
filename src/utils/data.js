export const SKILLS = [
  {
    title: "WEB TECHNOLOGIES",
    icon: "./assets/frontend.png",
    skills: [
      { skill: "REACT", percentage: "80%" },
      { skill: "EXPRESSJS", percentage: "70%" },
      { skill: "NODEJS", percentage: "75%" },
      { skill: "MONGODB", percentage: "70%" },
      { skill: "BOOTSTRAP", percentage: "80%" },
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    icon: "./assets/backend.png",
    skills: [
      { skill: "JAVA", percentage: "90%" },
      { skill: "PYTHON", percentage: "70%" },
    ],
  },
  {
    title: "TOOLS",
    icon: "./assets/tools.png",
    skills: [
      { skill: "GIT & GITHUB", percentage: "85%" },
      { skill: "VS CODE", percentage: "75%" },
      { skill: "INTELLIJ", percentage: "70%" },
      { skill: "FIGMA", percentage: "65%" },
    ],
  },
  {
    title: "SOFT SKILLS",
    icon: "./assets/soft-skills.png",
    skills: [
      { skill: "PROBLEM SOLVING", percentage: "80%" },
      { skill: "COLLABORATION", percentage: "86%" },
      { skill: "LEADERSHIP QUALITIES", percentage: "70%" },
    ],
  },
];

export const PROJECT_DETAILS = [
  {
    title: "Domestic Services Web Application (MERN Stack)",
    date: "Feb 2025 - May 2025",
    project_details: [
      "Developed a full-stack solution for connecting users with local service providers using React, Node.js, Express, and MongoDB",
      "Implemented JWT authentication with role-based access control for users and service providers",
      "Designed a K-means clustering algorithm to match users with nearby service providers based on location data",
      "Integrated Stripe for secure payment processing and Twilio for real-time SMS notifications",
      "Optimized application performance, reducing API response times by 40% through query optimization",
    ],
    url: "https://domestic-services-frontend.onrender.com",
  },
  {
    title: "Social Media Web Application (MERN Stack)",
    date: "Jun 2025",
    project_details: [
      "Developed a social media platform allowing users to create posts, like, and comment in real-time",
      "Implemented JWT-based authentication and authorization for secure user access",
      "Used MongoDB for storing user profiles, posts, likes, and comment data efficiently",
      "Integrated Redux for state management and handled optimistic UI updates",
      "Designed responsive UI using React with routing and protected routes for better navigation experience",
    ],
  },
  {
    title: "Hotel Management System (Java Console Application)",
    date: "Feb 2025",
    project_details: [
      "Developed a comprehensive console-based hotel management system using core Java",
      "Implemented room booking system with availability tracking and dynamic pricing",
      "Created food ordering module with menu management.",
      "Designed automated billing system that calculates total costs including room charges and food orders",
    ],
  },
];
