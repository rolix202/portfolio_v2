import crossborder_img from "./assets/crossborder_home.png"
import event_img from "./assets/event-ticket.png"
import inventory_img from "./assets/inventory2.png"
import community_img from "./assets/fixmycommunity.png"
import taskmanager from "./assets/taskmaster.png"
import sopulu from "./assets/sopulu.jpg";
import hariet from "./assets/harriet.jpg";
import livinus from "./assets/livinus.jpg"
import askme from "./assets/askmeeee.png"
import earthplanet from "./assets/earthplanet.png"
import ckp from "./assets/ckpppp.webp"
import portfolio from "./assets/portfoliome.png"


export const projects = [
  {
    img: taskmanager,
    title: 'Task-Manager Web App',
    link: 'https://my-taskmaster.vercel.app/',
    stack: ["Nodejs", "Expressjs", "MongoDB", "HTML / CSS"], 
    technologies: ["Nodejs", "Expressjs", "MongoDB", "HTML / CSS", "JWT", "PassportJs", "Cloudinary"],
    role: "Fullstack Developer",
    comment:
      "A web app to manage tasks easily. Built secure user authentication with PassportJs and JWT. Added Cloudinary for file uploads and ensured a smooth, functional design.",
  },
  {
    img: community_img,
    title: 'Issue Tracker Web App',
    link: 'https://fix-my-community-webapp.onrender.com/',
    stack: ["Nodejs", "Expressjs", "MongoDB", "ReactJs", "LeafletJs"], 
    technologies: ["Nodejs", "Expressjs", "MongoDB", "ReactJs", "LeafletJs", "Cloudinary", "TailwindCSS"],
    role: "Fullstack Developer",
    comment:
      "An issue tracker for communities. Integrated an interactive map with LeafletJs for precise issue location. Used Tailwind CSS for responsiveness and Cloudinary for image management.",
  },
  {
    img: crossborder_img,
    title: 'Mini Logistic Portal',
    link: 'https://www.crossborderlogisticsinc.com/',
    stack: ["Nodejs", "Expressjs", "MongoDB", "Ejs"],
    technologies: ["Nodejs", "Expressjs", "MongoDB", "Ejs", "BootstrapCSS", "JWT"],
    role: "Backend Developer",
    comment:
      "Backend for a logistics platform. Built secure authentication with JWT and optimized database performance for tracking shipments and managing orders.",
  },
  {
    img: askme,
    title: 'Question & Answer forum',
    stack: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    link: 'https://askme3mtt.onrender.com/',
    technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "JWT", "TailwindCSS", "PassportJS"],
    role: "Fullstack Developer",
    comment:
      "A platform for users to ask and answer questions. Built with authentication (JWT + PassportJS) and a clean, responsive interface using React and TailwindCSS.",
  },
  {
    img: event_img,
    title: 'Event Ticket Page with Paystack Integration',
    stack: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    link: 'https://ideasfestcalabar.onrender.com/',
    technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs", "TailwindCSS", "Paystack API"],
    role: "Frontend Developer",
    comment:
      "A ticketing page with Paystack payment integration. Designed a responsive frontend using ReactJs and implemented secure payment flows.",
    },

    {
      img: inventory_img,
      title: 'Mini Inventory Web App',
      stack: ["MongoDB", "ExpressJs", "Ejs", "NodeJs"],
      link: 'https://inventory-mgt-app-v1.onrender.com/products',
      technologies: ["MongoDB", "ExpressJs", "Ejs", "BootstrapCss", "NodeJs", "JWT", "Cloudinary"],
      role: "Backend Developer",
      comment:
      "A lightweight inventory management app. Developed the backend to handle product creation, updates, and deletion, with secure authentication and image uploads using Cloudinary."
    },
    {
      img: earthplanet,
      title: 'Earthplanet Website',
      stack: ["Ejs", "ExpressJs", "NodeJs"],
      link: 'https://www.earthplanetminerals.com/',
      technologies: ["Ejs", "ExpressJs", "NodeJs", "BootstrapCSS"],
      role: "Backend Developer",
      comment:
      "Corporate website for Earthplanet Minerals. Built using EJS for dynamic templating and Bootstrap for responsive design, ensuring a professional and clean look."
    },
    {
      img: portfolio,
      title: 'My Portfolio',
      stack: ["ReactJs", "TailwindCSS", "NodeJs"],
      link: 'https://rolandoodo.onrender.com/',
      technologies: ["ReactJs", "ExpressJs", "NodeJs", "TailwindCSS"],
      role: "Frontend Developer",
      comment:
      "My personal portfolio showcasing my skills, projects, and expertise. Built with ReactJs and TailwindCSS for modern, responsive designThis project was personal. I filled old books with sketches, clearing my codebase every time a new idea hit. It was a journey of trial, error, and growth. Hitting deploy felt like a win I won’t forget."
    },
    {
      img: ckp,
      title: 'Church Youth Directory',
      stack: ["ReactJs", "MongoDB", "ExpressJs", "NodeJs"],
      link: 'https://ckpodenigboyouth.vercel.app/',
      technologies: ["ReactJs", "MongoDB", "ExpressJs", "NodeJs", "BootstrapCss"],
      role: "Fullstack Developer",
      comment:
      "This project was an early experiment as a MERN stack developer. The design? Let's just say it's a color riot! But it was a great stepping stone, and looking back now, I can't help but laugh at how far I have grown since then."
    },
   
   
  ];

export const completeProjects = [

]
export const educationData = [
    {
      title: 'B.Sc, Computer Science',
      institution: 'University of Nigeria, Nsukka',
      duration: '2019 - 2022',
      description:
        'Laid the foundation for a career in tech by mastering algorithms, software engineering, and data structures. Focused on building scalable systems.',
      type: 'degree'
    },
    {
      title: 'NCE, Computer / Mathematics Education',
      institution: 'Federal College of Education, Eha-Amufu',
      duration: '2016 - 2019',
      description:
        'Gained expertise in teaching and curriculum development, blending computer science and mathematical concepts for education.',
      type: 'degree'
    },
  ];

export const certificationsData = [
    {
      title: 'Software Development Program',
      institution: '3 Million Technical Talent (3MTT)',
      duration: '2024',
      description:
        'Specialized in modern frameworks like React, Node.js, and MongoDB. Gained hands-on experience with DevOps and engineering best practices.',
      type: 'certification'
    },
    {
      title: 'Web Development Bootcamp',
      institution: 'Utiva Programming School',
      duration: '2022',
      description:
        'Completed a rigorous course in full-stack development. Learned to build responsive, dynamic web applications using modern tools.',
      type: 'certification'
    },
  ];

  export const experienceData = [
    {
      id: "1",
      title: "Full-Stack Developer",
      company: "LoubbyAI",
      location: "Remote",
      startDate: "2024-12",
      endDate: "",
      current: false,
      link: "https://www.loubby.ai/",
      achievements: [
        "Helped build an AI-powered resume builder using Next.js, Node.js, and MongoDB.",
        "Worked on a job portal with advanced search and filtering features.",
        "Contributed to an AI agent marketplace handling auth, routes, and data connections."
      ]
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "The Factory Place",
      location: "Hybrid",
      startDate: "2024-09",
      endDate: "2025-07",
      current: false,
      link: "https://techfactory.xyz/",
      achievements: [
        "Rebuilt the company's main web app using React and Node.js.",
        "Mentored an intern and handled production fixes and deployments.",
        "Reduced API response time by ~20%."
      ]
    },
    {
      id: "3",
      title: "Full Stack Developer",
      company: "TRIIBE",
      location: "Remote",
      startDate: "2023-06",
      endDate: "2024-08",
      current: false,
      link: "https://triibeedu.com/",
      achievements: [
        "Migrated their static site to React + Node.js.",
        "Collaborated with design and marketing teams to ship features.",
        "Deployed the site on a VPS, improving SEO and load speed."
      ]
    },
    {
      id: "4",
      title: "Frontend Developer",
      company: "DaHel Technologies",
      location: "Remote",
      startDate: "2024",
      endDate: "2025-03",
      current: false,
      link: "https://www.daheltech.com/",
      achievements: [
        "Developed and maintained responsive, user-friendly websites using React.js, JavaScript, HTML5, and CSS3.",
        "Collaborated with designers to implement seamless UI/UX and ensure cross-browser compatibility.",
        "Optimized web pages for performance and accessibility, improving load times and user engagement.",
        "Delivered clean, maintainable code and launched websites that provided smooth, engaging user experiences."
      ]
    }
  ];

  export const testimonials = [
    {
      img: hariet,
      quote:
        "Roland is a talented software developer and a dependable teammate. Working with him on our e-commerce bookstore and online learning platform was a pleasure. His technical expertise, creativity, and commitment to quality were key to the project's success.",
      name: "Hariet Johnjaja",
      title: "Product Manager, SkillLift",
    },
    
    {
      img: sopulu,
      quote:
        "I have worked with Roland Oodo on several projects, and his passion for solving technical challenges always stands out. He is focused, reliable, and committed to delivering great results. I highly recommend him.",
      name: "Mba Sopuluchukwu",
      title: "CEO, Zeenom",
    },
    {
      img: livinus,
      quote:
        "Roland is more than just a skilled developer. He approaches every project with care and teamwork, making the process smooth and enjoyable. His ability to deliver great results while working well with others is truly inspiring.",
      name: "Livinus Ekene",
      title: "Frontend Deveoper, SkillLift",
    },
  ];
  