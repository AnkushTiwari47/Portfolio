// ============================================================
// portfolioData.js — Centralized configuration for Md Yusuf's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Ankush Tiwari",
  firstName: "Ankush Tiwari",
  brandName: "Ankush Tiwari",
  title: "Full Stack MERN Developer",
  location: "UJJAIN, India",
  phone: "+91 6206933045",
  emails: {
    primary: "at0017876@gmail.com",
    secondary: "0101cs251012@uec.in",
  },
  summary:
    "Aspiring software engineer and motivated B.Tech Computer Science student with solid skills in Spring Boot, React, and Python. Passionate about building scalable full-stack applications with clean architecture and modern tech stacks.",
  resumeUrl: "/Md_Yusuf_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/AnkushTiwari47",
  linkedin: "www.linkedin.com/in/ankush-tiwari-002900348",
  instagram: "https://instagram.com/ankush_tiwari.24",
};

export const heroContent = {
  greeting: "Hi, I'm  Ankush Tiwari",
  titleHighlight: "Full Stack MERN Developer",
  subtitle:
    "I build fast, scalable applications Spring Boot, MERN Stack, and Python.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mdyusufcse096@iesuniversity.ac.in?subject=Hiring Inquiry – Portfolio&body=Hello Md Yusuf,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: null },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ankush Tiwari</span>, an aspiring software engineer based in Ujjain, India, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: [ "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 10 },
        { name: "C++", level: 85 },
        { name: "Python", level: 45 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "FastAPI", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 5 },
        { name: "Firebase", level: 50 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "n8n", level: 52 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Antigravity", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 10 },
        { name: "Algorithms", level: 15 },
        { name: "DBMS", level: 0 },
        { name: "OOP", level: 0 },
        { name: "Software Engineering", level: 40 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic ai videos",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ videosCreated",
      icon: "🎥"
    },
   
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
 
    
];

// Brand New Internships Data
export const internshipsList = [
  
  {
    organization: " Actevely Searching",
    role: "Web Development Intern",
    duration: "not specified(Online)",
    skills: ["Frontend Development", "Responsive Layouts", "API Testing", "Web Performance"],
    tech: ["HTML5", "CSS3", "JavaScript","React", "Bootstrap"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "🎤", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "Edulink",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Edulink",
    description:
      "Edulink is a platform where student can connect with best teacher in their nearest location and all over the india,it includes features like posting tution requirement , real time chating , authentication,making connections with students and teachers,searching best teachers in their location.",
    techTags: [
      "React",
      "Javascript",
      "Nodejs",
      "MongoDb",
      "socket.io",
      "Expressjs",
      
    ],
    links: {
      github: "https://github.com/AnkushTiwari47/Edulinkr",
      demo: "https://edulink-wbum.onrender.com",
    },
    isFlagship: true,
  },
  {
    id: "stayHub",
    number: "02",
    badge: null,
    title: "stayHub",
    description:
      "comming soon ...work in progress",
    techTags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    links: {
      github: "https://https://github.com/AnkushTiwari47/stayHub",
      demo: null
    },
    isFlagship: false,
  },
  
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    }
    
  ],
  
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Ujaain Engineering college (UJJAIN)",
  cgpa: "",
  graduation: "2029",
  twelfth: "12th Science – 86%",
  tenth: "10th CBSE – 95.4%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE ",
  copyright: `© ${new Date().getFullYear()} Ankush Tiwari | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
