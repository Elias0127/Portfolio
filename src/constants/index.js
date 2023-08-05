import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    python,
    cpp,
    java,
    sql,
    mysql,
    postgresql,
    css,
    reactjs,
    redux,
    nodejs,
    git,
    snap,
    cti,
    CodeDayLabs,
    greenView1,
    greenView2,
    appt,
    oed,
    openLibrary,
    csulb,
    smc,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Open Source Contributor",
        icon: backend,
    },
    {
        title: "Continuous Learner",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "C++",
        icon: cpp,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },

    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "CodeDay Labs",
        icon: CodeDayLabs,
        iconBg: "#383E56",
        date: "June 2023 - Aug 2023",
        points: [
            "Contributed to Open Energy Dashboard (OED), an open-source platform providing customizable energy data to promote efficiency and sustainability.",
            "Enhanced data visualization capabilities with the implementation of error bars on line graphs.",
            "Developed radar/clock graphics for improved data presentation.",
            "Introduced comparison line graphics for comprehensive energy trends analysis.",
            "Modified bar graphics to support data comparison over different years, aligning with LEED requirements.",
            "Extended functionalities for area and cost graphing, providing holistic views of energy usage.",
            "Improved system adaptability by enabling varying baseline values over time.",
            "Utilized technologies such as JavaScript, React, TypeScript, PostgreSQL, Node.js, Express, and Docker.",
        ],
    },
    {
        title: "Student Accelerator - TA",
        company_name: "Computing Talent Innitative (CTI)",
        icon: cti,
        iconBg: "#FFFFFF",
        date: "June 2023 - Present",
        points: [
            "Currently guiding and mentoring a cohort of over 70 students through a comprehensive 10-month technical curriculum, which includes Python, data structures, problem-solving via LeetCode, soft skills, and internship preparation.",
            "Conducting 1-3 weekly online sessions, providing students with live guidance and facilitating interactive learning experiences.",
            "Regularly reviewing and refining course materials, such as quizzes, instructional videos, and programming challenges, to ensure their relevance and efficacy.",
            "Holding thrice-weekly office hours to provide individualized support and address student queries or challenges, fostering a conducive learning environment.",
        ],
    },
    {
        title: "Open Source Contributer",
        company_name: "CodeDay Labs",
        icon: CodeDayLabs,
        iconBg: "#383E56",
        date: "Feb 2023 - March 2023",
        points: [
            "Contributed to Open Library, an open-source initiative by the Internet Archive that provides a web page for every book ever published.",
            "Developed a feature for managing custom reading lists, enhancing user engagement and personalizing user experience.",
            "Streamlined user interface components for consistent interaction across the platform, improving overall usability.",
            "Refined navigation elements to distinguish between user-generated content and public resources, thereby enhancing clarity and user experience.",
            "Redesigned user interface controls for list management, offering users more intuitive and direct control over their content.",
            "Modified list management functionality to provide users with more flexibility in preserving or removing their curated lists, even when empty.",
            "Utilized technologies such as Python, HTML/CSS, PostgreSQL, Apache Solr, Node.js, Docker.",
        ],
    },
    {
        title: "Snap Engineering Scholar",
        company_name: "Snap",
        icon: snap,
        iconBg: "#fffc00",
        date: "June 2022 - Aug 2022",
        points: [
            "Selected as one of 15 scholars out of a competitive application from over 150+ community colleges to partake in a software engineering boot camp.",
            "Developed a prototype for 'Green View', a novel feature for Snapchat aimed at fostering environmental awareness and community engagement among Gen Z users.",
            "Leveraged geolocation and event mapping APIs to help users discover and participate in environmentally conscious events in their local area.",
            "Implemented community chat functionality, facilitating real-time interaction and information exchange among event participants.",
            "Worked cross-functionally in a fast-paced, Agile development environment to deliver a user-centric solution that aligns with Snap Inc.'s commitment to environmental sustainability.",
            "Pitched prototyped Snapchat feature to Snap Inc.'s VP of Environmental Sustainability, Snap Employees and 200+ audience members, including Snap executives",
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
        name: "Green View",
        description:
            "Green View is a mobile feature prototype for Snapchat that enhances user engagement in environmental sustainability. It introduces an interactive map of local parks, allowing users to join specific park communities for real-time discussions. It includes a unique chat functionality where users can engage in real-time conversations with other members of their selected park community. The platform aims to raise environmental awareness among Gen Z users.",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
            {
                name: "API",
                color: "pink-text-gradient",
            },
        ],
        images: [greenView1, greenView2],
        source_code_link: "https://github.com/Elias0127/GreenView",
    },
    {
        name: "Appartment Management System",
        description:
            "An Apartment Management System that is designed to streamline administrative tasks for landlords. It provides an interactive, user-friendly interface that organizes and visualizes critical data related to tenants, rental income, and expenses. Key functionalities include the dynamic addition and removal of tenant data, real-time updating of financial records, and the generation of annual summaries. These features not only simplify record-keeping but also empower landlords with data-driven insights for effective property management.",
        tags: [
            {
                name: "HTML/CSS/JS",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js/Express",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
        ],
        images: [appt],
        source_code_link: "https://github.com/Elias0127/Apartment-Management-System/tree/main",
    },
];
const openSource = [
    {
        name: "Open Library",
        description:
            " An ambitious open-source initiative with the goal of creating a web page for every book ever published. The platform allows users to freely access an extensive database of books, contribute to catalog entries, and manage personalized reading lists. The project embodies the principles of open data, digital preservation, and widespread accessibility of knowledge.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Machine Learning",
                color: "green-text-gradient",
            },
        ],
        images: [openLibrary],
        source_code_link: "https://github.com/internetarchive/openlibrary",
    },
    {
        name: "Open Energy Dashboard (OED)",
        description:
            "An open-source web application that provides a platform for users to monitor, analyze, and visualize energy consumption data. It's built with the principle of portability, enabling its deployment in a variety of organizations. OED seeks to simplify the management of energy usage and promote sustainability.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Machine Learning",
                color: "green-text-gradient",
            },
        ],
        images: [oed],
        source_code_link: "https://github.com/OpenEnergyDashboard/OED",
    },
];
const education = [
    {
        university: "California State University Long Beach",
        degree: "Bachelor's in Computer Science",
        duration: "2022 - 2025",
        description: "Currently pursuing a Bachelor's in Computer Science. Courses of interest include Algorithm Design, Data Structures, and Web Development. Recipient of the CSULB Excellence Award for the 2022-23 academic year.",
        logo: csulb,
    },
    {
        university: "Santa Monica College",
        degree: "Associate's in Computer Science",
        duration: "2020 - 2022",
        description: "Graduated with an Associate's Degree in Computer Science. Excelled in Programming Fundamentals and Discrete Mathematics. Led the student programming club in 2021.",
        logo: smc,
    },
];

export { services, technologies, experiences, testimonials, projects, openSource, education};
