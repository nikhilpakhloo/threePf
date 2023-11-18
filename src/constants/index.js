import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,

 

  tripguide,
  threejs,
} from "../assets";
import alphanzo from '../assets/company/alphanzo.jpg'
import gai from '../assets/company/gai.png'
import pickupyan from "../assets/company/pickupyan.png"
import leaderboard from "../assets/company/leaderboard.png"
import zomato from "../assets/company/zomato.png"
import weather from "../assets/company/weather.png"
import textUtil from "../assets/company/textutil.png"
import next from "../assets/company/next.png"


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
    title: "Reactjs",
    icon: web,
  },
  {
    title: "Nextjs",
    icon: mobile,
  },
  {
    title: "Expressjs",
    icon: backend,
  },
  {
    title: "State Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Alphanzo Technologies Ltd",
    icon: alphanzo,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Reactjs intern",
    company_name: "Gai technologies Ltd",
    icon: gai,
    iconBg: "#E6DEDD",
    date: "May 2023 - Sep 2023",
    points: [
      "Learnt basics of Reactjs, Html/css, tailwind css, material tailwind, redux",
      "Learnt basics of PHP",
      "Learnt responsive design making.",
      "Learnt git version control .",
    ],
  },


];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Bike/Scooter Rent ",
    description:
      "Web-based platform that allows users to search, book, and manage Vehicles rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pickupyan,
 
  },
  {
    name: "Leaderboard Dashboard",
    description:
      "Web application that enables users to pick tasks from all the tasks show on dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Restapis",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,

  },
  {
    name: "Zomato Clone",
    description:
      "A zomato clone with the frontend. Used restapis in this for CRUD operations",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "https://zomato-liart.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "A weather App, in this app we can search for weather at different places by input the place name. Using Openweather api here to fetch the weather conditions",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://weather-app-alpha-ivory.vercel.app/",
  },
  {
    name: "Text Utils",
    description:
      "Text util app , in which we can alter the text to uppercase , lowercase, copy text, count characters and in additional it has dark mode too ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: textUtil,
    source_code_link: "https://utils-five.vercel.app/",
  },
  {
    name: "CRUD APP",
    description:
      "CRUD APP , in which we can Get, post, delete, Update the contact details ",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: next,
    source_code_link: "https://nextjs-crud-beta.vercel.app/",
  },
];

export { services, technologies, experiences,  projects };
