import { nanoid } from "nanoid";
import project1 from "/public/imgs/project1.jpg"
import project2 from "/public/imgs/project2.png"
import project22 from "/public/imgs/project-2.png"


export const projectsData = [
    {
        name: "Mobilux e-Commerce",
        id: 2,
        photo: project2,
        photo2: project22,
        text: "This e-commerce site is built for selling electronic products. In this website, you can buy several type of products through by registering.",
        tech: "Next-JS, TypeScript, Tailwind-Css, Next-Auth, Shadcn-UI, Redux-Toolkit, React-Hook-Form",
        live: "https://github.com/redmaxredmax/admin-page.git",
        git: "https://github.com/redmaxredmax/mobilux.git",
        server: "https://github.com/redmaxredmax/mobilux-server.git",
        feature: [
            { features: "This project is integrated with a backend which I created;" },
            { features: "Products are sorted into categories by their 'CategoryId'" },
            { features: "Registration also works. After you LogIn you can buy products." },
            { features: "Log In is protected. The 'Token' is 24 hours, if this time expires,it will automatically send you to the Login Page."},
            { features: "All requests created and processed through Postman are handled by the Backend." },
        ],
        istructions: [
            { instruction: "Download the Project Client and Server sections 'ZIP' file from the above GitHub links;" },
            { instruction: "Run the Server section in Visual Studio Code. Firstly, enter the 'npm i' then 'npm run dev' commands in the terminal section." },
            { instruction: "Run the same commands on the Client section." },
            { instruction: "Run the program in the browser environment through the given link;" },
        ],
    },
    {
        name: "AnyMarket Admin Page",
        id: 1,
        photo: project1,
        photo2: project1,
        text: "This project is designed to manage an internet magazine website. You can add, update or delete products through this site.",
        tech: "HTML, JavaScript, React, Tailwind Css, React-router, Toastify, React-Hook-Form...",
        live: "https://github.com/redmaxredmax/admin-page.git",
        git: "https://github.com/redmaxredmax/admin-page.git",
        server: "https://github.com/redmaxredmax/adminpage-server",
        feature: [
            { features: "This page is accessed through Log in on this site. Integrated with backend." },
            { features: "There are categories and products are added to them by choosing a category." },
            { features: "Categories and products can be added, deleted and edited, and it all works with the backend." },
            { features: "Log In is protected. The 'Token' time is 1 day, that is, 1 day after logging in, it will automatically send you to the Login page. Log out buttons work." },
            { features: "The Pagination and Search components work by sending a request to the backend." },
            { features: "All requests created and processed through Postman are handled by the Backend." },
        ],
        istructions: [
            { instruction: "Download the Project Client and Server sections 'ZIP' file from the above GitHub links;" },
            { instruction: "Run the Server section in Visual Studio Code. Firstly, enter the 'npm i' then 'npm run dev' commands in the terminal section." },
            { instruction: "Run the same commands on the Client section." },
            { instruction: "Run the program in the browser environment through the given link;" },
            { instruction: "Reminder: Login: redmax@gmail.com    Password: 1234;" },
        ],
    },
   

]