export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "Full Stack Developer",
  "MERN Developer",
  "React Developer",
  "Node.js Developer",
];

export const SKILLS = [
  {
    category: "Languages",
    accent: "#38bdf8",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Frontend",
    accent: "#e879f9",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    accent: "#34d399",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
       {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" 
      },
      { name: "REST APIs", icon: null },
      { name: "JWT", icon: null },
    ],
  },
  {
    category: "Database",
    accent: '#a78bfa',
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    accent: "#fb923c",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      { name: "Vercel", icon: null },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Crusty Corner",
    subtitle: "Pizza Ordering App",
    description:
      "A fully responsive pizza ordering web app with a dynamic cart system, real-time order management, and a blazing-fast Vite build. Clean UI focused on speed and performance.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    category: "Frontend",
    accent: "#fb923c",
    images: [
     "/CrustyCorner1.png",
     "/CrustyCorner2.png",
     "/CrustyCorner3.png",
     "/CrustyCorner4.png",
     "/CrustyCorner5.png",
    ],
    live: "https://crusty-corner.vercel.app",
    repo: "https://github.com/gouravmishra/crusty-corner",
  },
  {
    id: 2,
    title: "GrandStay Suite",
    subtitle: "Hotel Management System",
    description:
      "GrandStay Suite is a full-stack hotel management application built with React and Supabase, offering real-time data synchronization, authentication, and dashboards for efficient booking and operations management.",
    tech: [
      "React",
      "Supabase",
      "Context API",
      "React Router",
      "Styled Component",
    ],
    category: "Full Stack",
    accent: "#38bdf8",
    images: [
      "/GrandStay1.png",
      "/GrandStay2.png",
      "/GrandStay3.png",
      "/GrandStay4.png",
      "/GrandStay5.png",
      "/GrandStay6.png",
    ],
    live: "https://grand-stay-suite-cyan.vercel.app",
    repo: "https://github.com/Gouravmishra92/GrandStay-Suite",
  },
  {
    id: 3,
    title: "GrandStay",
    subtitle: "Full-Stack Travel Listing Web Application",
    description: "StayHaven is a modern travel listing and booking platform inspired by Airbnb, built with Node.js, Express.js, MongoDB, and EJS. The application allows users to explore destinations, create and manage property listings, upload images, authenticate accounts, and interact through a clean responsive UI focused on smooth travel discovery.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
    ],
    category: "Full Stack",
    accent: "#FF5A5F",
    images:[
      "/StayHaven1.png",
      "/StayHaven2.png",
      "/StayHaven3.png",
      "/StayHaven4.png",
      "/StayHaven5.png",
    ],
    live: "https://stayhaven-xr5r.onrender.com",
    repo: "https://github.com/Gouravmishra92/StayHaven",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Uka Tarsadia University",
    period: "2023 – 2027",
    location: "Bardoli, Gujarat",
    status: "Ongoing",
    desc: "Focused on full-stack web development, data structures, algorithms, and software engineering. Completed multiple MERN stack projects and participated in coding competitions.",
    accent: "#e879f9",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Deacons Foundation Higher Secondary School",
    period: "2021 – 2023",
    location: "Surat, Gujarat",
    status: "Completed",
    desc: "Science stream with Physics, Chemistry and Mathematics. Developed strong analytical thinking and problem-solving foundations that fuel my engineering mindset.",
    accent: "#38bdf8",
  },
];
