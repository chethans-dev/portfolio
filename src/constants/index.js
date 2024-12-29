import {
  programmer,
  frontend,
  database,
  devops,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  extension,
  globussoft,
  express,
  rest,
  mysql,
  postgresql,
  elastic,
  redis,
  aws,
  kubernetes,
  github,
  jira,
  bitbucket,
  natours,
  convohub,
  climate,
  shop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: programmer,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Chrome Extension Developer",
    icon: extension,
  },
  {
    title: "Database Specialist",
    icon: database,
  },
  {
    title: "DevOps Enthusiast",
    icon: devops,
  },
];

const technologies = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: reactjs },
      { name: "Redux", icon: redux },
      { name: "TypeScript", icon: typescript },
      { name: "Tailwind", icon: tailwind },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
      { name: "REST APIs", icon: rest },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Elasticsearch", icon: elastic },
      { name: "Redis", icon: redis },
    ],
  },
  {
    title: "Cloud Computing",
    skills: [
      { name: "AWS", icon: aws },
      { name: "Docker", icon: docker },
      { name: "Kubernetes", icon: kubernetes },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "Bitbucket", icon: bitbucket },
      { name: "Jira", icon: jira },
    ],
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Globussoft Technology",
    icon: globussoft,
    iconBg: "#ddd",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using Node.js and React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shop Sphere",
    description:
      "💻 Developed a comprehensive e-commerce application, Shop Sphere, designed to deliver a seamless and intuitive shopping experience for users. This project incorporates robust features and scalable architecture, catering to both customers and administrators.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "grey-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/chethans-dev/Shop-Sphere",
  },
  {
    name: "Natours",
    description:
      "🌿 Natours, my latest project built with Express.js, Node.js, MongoDB, and RESTful APIs! 🚀 Transforming the way we experience nature through seamless technology integration.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "grey-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/chethans-dev/Natours",
  },
  {
    name: "ConvoHub",
    description:
      "A real-time chat application! Built using the MERN stack and Socket.io, it offers seamless communication with instant messaging support. Elevate your networking experience with our intuitive and efficient chat platform. Let's connect and chat in real-time!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "grey-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: convohub,
    source_code_link: "https://github.com/chethans-dev/ConvoHub",
  },
  {
    name: "Climate Clues",
    description:
      "Climate Clues, an up-to-the-minute weather information that empowers you to make informed decisions every day. Our commitment to accuracy, innovation, and user-friendliness makes us your go-to destination for all things weather-related.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: climate,
    source_code_link: "https://github.com/chethans-dev/Climate-Clues",
  },
];

export { services, technologies, experiences, testimonials, projects };
