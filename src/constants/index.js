import {
    mobile,
    backend,
    creator,
    web,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "Mobile Developer",
        icon: backend,
    }
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [{
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [{
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    // {
    //     name: "Furniture ecommerce",
    //     description: "Online store that allows users to buy furniture from sofas to chairs to tables with different sizes.",
    //     tags: [{
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "dot net core",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: carrent,
    //     source_code_link: "https://github.com/",
    //     live_link: "https://github.com/",
    //     technologiesUsed: [
    //         "dqs",
    //         "dqsdq",
    //         "dqsdqs"
    //     ]
    // },
    {
        name: "Task management",
        description: "Simple web application that allows users to manage their tasks by providing different categories and help them be productive.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js & Express.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/ilyasTraikia/Task-management",
        live_link: "https://master--ornate-starlight-ad1408.netlify.app/",
        technologiesUsed: [
            "Built a REST API for performing all the CRUD operations using Node.js & Express.js and MYSQL",
            "Used react-router-dom for routing , loading data and handling actions",
            "Used TailwindCSS library for the styling of the app",
        ]
    },
    {
        name: "Porfolio",
        description: "A portfolio that provides informations about myself and showcases my skills, tech and projects.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "framer motion",
                color: "blue-text-gradient",
            }

        ],
        image: tripguide,
        source_code_link: "https://github.com/",
        live_link: "",
        technologiesUsed: [
            "Built using react and three.js",
            "Used the packages react-three/fiber,react-three/drei and three.js for creating and handling the 3D models",
            "Used Framer motion library for the different animations",
            "Used the tailwindCSS library preline for responsive and ready to use components",
            "Used the emailJs package to make the contact happen with email"
        ]
    },
];

export { services, technologies, experiences, testimonials, projects };