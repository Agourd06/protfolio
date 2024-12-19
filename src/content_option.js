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
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
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
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Agourd06",
    linkedin: "hhttps://www.linkedin.com/in/oualid-agourd-1a4898240/",
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