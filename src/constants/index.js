import {
  mobile,
  backend,
  creator,
  web,
  javascript,
apple,
  html,
  css,
  reactjs,
leetcode,
geeksforgeeks,
  nodejs,
  
  git,
  portfolio,

  c,
express,
github2,
java,
python,
api,
 
  
  threejs,
  postgresql,
  github,
  edubg
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Java Programmer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },{
    title: "Computer Science Engineer",
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
    name: "Java",
    icon: java,
    },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
  {
    name: "Express-JS",
    icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "GitHub",
      icon: github2,
      },
      {
        name: "Rest-API",
        icon: api,
        },
  {
    name: "C",
    icon: c,
    },
  
    
    
    {
    name: "Python",
    icon: python,
    },
   
  
 
  
 
 

  
  

 
 
  {
    name: "git",
    icon: git,
  },
 
 
];





const projects = [
  {
    name: "Catch Apple -Phaser Game",
    description:
      "Catch falling apples in this fast-paced arcade game, scoring points with engaging sound effects and vibrant visuals before time runs out!",
    tags: [
      {
        name: "phaser",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: apple,
    source_code_link: "https://github.com/mssaif-008/my-phaser-game",
  },{
    name: "Portfolio Website",
    description:
      "A visually immersive React portfolio integrating 3D models for a dynamic and interactive experience. Showcasing projects and skills with a modern, engaging design..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      
    ],
    image: portfolio,
    source_code_link: "https://github.com/mssaif-008/portfolio_3d",
  }
];
const profiles = [

  {
    name: "LeetCode",
    description:
      "",
    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      
    ],
    image: leetcode,
    source_code_link: "https://leetcode.com/u/mdsaif_008/",
  },{
    name: "GeeksforGeeks",
    description:
      "",
    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      
    ],
    image: geeksforgeeks,
    source_code_link: "https://www.geeksforgeeks.org/user/mssaif0gxw5/",
  },{
    name: "GitHub",
    description:
      "",
    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      
    ],
    image: github,
    source_code_link: "https://github.com/mssaif-008",
  }


];


const education = [
  {
    title: "School",
    company_name: "Gill Adarsh Matriculation Higher Secodary School",
    icon:edubg,
    
    date: "2023-Passout",
    points: [
      "Higher-Secondary: 91%",
     
    ],

  },
  {
    title: "B.E Computer Science",
    company_name: "Meenakshi Sundararajan Engineering College",
  
    icon:edubg,
    date: "2023-2027",
    points: [
      "GPA: 8.2",
     
    ],
  },
 
];

export { services,education, technologies, projects,profiles };