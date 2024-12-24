import crossborder_img from "./assets/crossborder_home.png"
import event_img from "./assets/event-ticket.png"
import inventory_img from "./assets/inventory2.png"
import portfolio_img from "./assets/portfolio.png"
import bookstore_img from "./assets/book store.png"
import community_img from "./assets/fixmycommunity.png"
import skill_img from "./assets/skill lift.png"
import taskmanager from "./assets/taskmaster.png"
import rooo from "./assets/rooo.jpg";

export const projects = [
  {
    img: taskmanager,
    title: 'Task-Manager Web App',
    link: '',
    stack: ["Nodejs", "Expressjs", "MongoDB", "HTML / CSS"], 
    techonologies: [
      "Nodejs", "Expressjs", "MongoDB", "HTML / CSS", "JWT", "PassportJs", "Cloudinary"
    ],
    role: "Fullstack Developer",
    comment:
      "This app gave me the opportunity to solve a real-world problem—managing inventories with ease. It was my playground to master backend tools like JWT authentication, Cloudinary image handling, and more. Every challenge I faced made the end product more robust, and I walked away with deeper insights into the MERN stack.",
  },
  {
    img: community_img,
    title: 'Issue Tracker Web App',
    link: 'https://ideasfestcalabar.onrender.com/',
    stack: ["Nodejs", "Expressjs", "MongoDB", "ReactJs", "LeafletJs"], 
    techonologies: [
      "Nodejs", "Expressjs", "MongoDB", "ReactJs", "LeafletJs", "Cloudinary", "Tailwind CSS"
    ],
    role: "Fullstack Developer",
    comment:
      "I wanted to create something impactful, something for the community. This platform allows people to voice concerns—potholes, broken infrastructure, power cuts, you name it—and helps the right people respond. It was rewarding to build something that could improve lives, combining maps (LeafletJS) and a modern tech stack.",
  },
  {
    img: crossborder_img,
    title: 'Mini Logistic Portal',
    link: 'https://www.crossborderlogisticsinc.com/',
    stack: ["Nodejs", "Expressjs", "MongoDB", "Ejs"],
    techonologies: ["Nodejs", "Expressjs", "MongoDB", "Ejs", "Bootstrap CSS"],
    github: "https://www.crossborderlogisticsinc.com/",
    role: "Backend Developer",
    comment:
      "Being the backbone of this logistics portal was an exciting challenge! I focused on building reliable APIs, ensuring smooth data flow, and handling database integrations. It was all about making the system work efficiently behind the scenes so clients could manage logistics seamlessly.",
  },
  {
    img: bookstore_img,
    title: 'Ecommerce Book Store',
    stack: ["ReactJs"],
    link: 'https://oodoroland.vercel.app/',
    techonologies: ["ReactJs", "Pure CSS"],
    github: "",
    role: "Frontend Developer",
    comment:
      "Building this simple yet sleek online bookstore helped me sharpen my React skills. I paid attention to creating a clean UI with smooth interactions to make browsing books enjoyable. Seeing the app come to life made me appreciate the art of combining simplicity and functionality.",
  }
    // {
    //   id: 7,
    //   // img: Project5,
    //   category: 'Volunteer',
    //   title: 'Church Youth Directory',
    //   link: 'https://ckpodenigboyouth.vercel.app/',
    //   description:
    //     'I designed a Church Youth Directory website to strengthen our community bonds. It\'s a simple yet powerful tool for connecting and engaging with our youth.',
    // },
    
    // {
    //   id: 3,
    //   // img: Project1,
    //   category: 'Volunteer',
    //   title: 'Hotel Booking Website',
    //   description:
    //     'I built a cool hotel booking website at Enugu Tech Program. It helps people easily find and book awesome hotels. Check it out to see my coding skills in action!',
    // },
   
    // {
    //   id: 5,
    //   // img: Project2,
    //   category: 'Personal',
    //   title: 'Staff Clocking System',
    //   description:
    //     'I designed a Staff Clocking System using QR codes for seamless login, sign-in, and sign-out processes. A simple yet effective solution for efficient attendance tracking.',
    // },
    // {
    //   id: 6,
    //   // img: Project4,
    //   category: 'Personal',
    //   title: 'My CV',
    //   description:
    //     'My CV offers a quick overview of my academic and professional journey, highlighting skills, education, qualifications, work experience, and more.',
    // },
    
    // {
    //   id: 9,
    //   // img: Project8,
    //   category: 'Volunteer',
    //   title: 'School Result Portal',
    //   description:
    //     'A user-friendly portal allowing subject teachers to submit results, class teachers to manage students, and administrators to oversee operations.',
    // },
   
  ];

export const educationData = [
    {
      title: 'B.Sc, Computer Science',
      institution: 'University of Nigeria, Nsukka',
      duration: '2019 - 2022',
      description:
        'Laid the foundation for a career in tech by mastering algorithms, software engineering, and data structures. Focused on building scalable systems.',
    },
    {
      title: 'NCE, Computer / Mathematics Education',
      institution: 'Federal College of Education, Eha-Amufu',
      duration: '2016 - 2019',
      description:
        'Gained expertise in teaching and curriculum development, blending computer science and mathematical concepts for education.',
    },
    {
      title: 'Software Development Program',
      institution: '3 Million Technical Talent (3MTT)',
      duration: '2024',
      description:
        'Specialized in modern frameworks like React, Node.js, and MongoDB. Gained hands-on experience with DevOps and engineering best practices.',
    },
    {
      title: 'Web Development Bootcamp',
      institution: 'Utiva Programming School',
      duration: '2022',
      description:
        'Completed a rigorous course in full-stack development. Learned to build responsive, dynamic web applications using modern tools.',
    },
  ];

export const testimonials = [
  {
    img: rooo,
    quote:
      "Working with [Your Name] was a game-changer. They didn’t just solve problems—they anticipated them, offering elegant solutions that transformed our project into a massive success.",
    name: "Mo Salah",
    title: "Software Engineer, Liverpool FC",
  },
  {
    img: rooo,
    quote:
      "[Your Name]'s creativity and technical expertise are unmatched. Their ability to bridge the gap between vision and execution made all the difference in delivering results we are proud of.",
    name: "Jane Doe",
    title: "Project Manager, TechCorp",
  },
  {
    img: rooo,
    quote:
      "Every interaction with [Your Name] is inspiring. They bring not just technical skills but empathy and a collaborative spirit that makes every project feel like a shared success story.",
    name: "John Smith",
    title: "CEO, StartUp XYZ",
  },
];