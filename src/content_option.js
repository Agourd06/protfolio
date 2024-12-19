import img1 from "./assets/images/movieMinds.png"
import img2 from "./assets/images/BookStore.png"
import homeBg from "./assets/images/jsCup.jpg"

const logotext = "AGOURD";
const meta = {
    title: "Oualid Agourd",
    description: "I’m Oualid Agourd Full stack devloper,currently Studying in YouCode",
};

const introdata = {
    title: "I’m Oualid Agourd",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description1: "Full-Stack Developer | JavaScript Specialist ",
    description: "I create dynamic, user-focused web solutions using React, Next.js, Vue, Angular, Node.js, and NestJS. With expertise in PHP, Laravel, Tailwind, Bootstrap, MongoDB, and SQL, I deliver responsive designs and scalable, high-performance applications tailored to business needs.",
    home_bg: homeBg,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I am a junior-level developer with a strong foundation in JavaScript, React, Angular, and Node.js. I am currently studying as a full-stack JavaScript developer at Youcode, where I have honed my technical skills and developed a passion for building both front-end and back-end applications. I am focusing on sharpening my problem-solving skills and creating intuitive user experiences. I am excited to continue learning and growing in the tech industry, expanding my knowledge as I begin my professional journey."
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "NestJs",
        value: 80,
    },
    {
        name: "ExpressJs",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "PHP",
        value: 85,
    },
    {
        name: "Laravel",
        value: 85,
    },
];

const services = [{
    title: "UI & UX Design",
    description: "Designing user interfaces and crafting user experiences that ensure intuitive, visually appealing, and user-centric digital products.",
},
{
    title: "Mobile Apps",
    description: "Developing responsive and performant mobile applications using modern frameworks and best practices to provide seamless user experiences.",
},
{
    title: "Back End Developer",
    description: "Building and optimizing server-side logic, APIs, and integrations to create robust, scalable, and efficient backend systems.",
},

];

const dataportfolio = [{
        img: img1,
        description: "Movie Minds A webSite where the movies lovers can share there opnion about any movie and also author can share there movies",
        tech: "Laravel , Tailwind , Javascript , Html5 , SQL",
        link: "#",
    },
    {
        img: img2,
        description: "Big BOOKSHELF is a book store where you can reach any book and buy it from the store",
        tech: "Nest.JS , React.js , Tailwind ,  MongoDB",
        link: "#",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "oualidagourd@gmail.com",
    YOUR_FONE: "(+212)655996022",
    description: "I hope you can contact me directly through my email or phone number I will active the feature of Contact latter Thank You ❤",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Agourd06",
    linkedin: "https://www.linkedin.com/in/oualid-agourd-1a4898240/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};