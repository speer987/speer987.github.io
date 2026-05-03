const projects = [
  {
    feature: true,
    project: "AI Planner Web Application",
    category: "Full Stack & AI",
    monthYear: "Jan 2026",
    year: 2026,
    img: "app/imgs/smart_planner.png",
    sentence:
      "An AI-powered planning app that turns high-level goals into structured quarterly, monthly, and weekly plans using the Gemini API.",
    desc: [
      "Built a full-stack application using the Gemini API to convert user inputted long-term goals into structured, concise and actionable steps",
      "Designed prompt workflows that return structured JSON, ensuring consistent and parseable AI outputs across the system",
      "Implemented loading, error, and rate-limit handling (including 429 responses), providing clear feedback during AI request failures",
      "Developed a responsive UI with Next.js, React, and Tailwind CSS, supporting a guided multi-step planning flow",
      "Managed client-side state for AI responses and user inputs, ensuring consistent data flow across components",
      "Deployed the application on Vercel with environment-based configuration, securely managing API keys in production"
    ],
    stack: [
      "Google Gemini API",
      "Tailwind CSS",
      "Node.js",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Google Fonts",
      "Git",
      "GitHub",
      "Headless UI",
      "Vercel",
    ],
    links: {
      code: "https://github.com/speer987/smart-planner",
      readme:
        "https://github.com/speer987/smart-planner/blob/a0861a430a2a89c3df3a66f4b182f9734428c296/README.md",
      demo: "https://smart-planner-ai.vercel.app/",
    },
  },
  {
    feature: true,
    project: "Marketplace Mobile App",
    category: "Mobile App & UI Design",
    monthYear: "Jan 2024 - Aug 2024",
    year: 2024,
    img: "app/imgs/unibuy.png",
    sentence: "A React Native marketplace app for Loyola Marymount University students to list, browse, and favorite items with secure account management and authentication.",
     desc: [
      "Collaborated with a business student to define requirements and core user flows, aligning product design with user needs",
      "Designed Figma prototypes for listing, user, and creation flows, establishing a clear UI structure prior to development",
      "Developed a Firebase/Firestore backend, enabling real-time listing storage and user management",
      "Integrated Clerk authentication with Google and Outlook sign-in, including verified user indicators",
      "Implemented dynamic listing components with images, pricing, and detail views, improving browsing experience and engagement"
    ], 
    stack: [
        "Software Engineering Principles",
        "Documentation",
        "React Native Paper",
        "React Native",
        "Firestore",
        "Firebase Authentication",
        "XCode Simulator",
        "Google Fonts",
        "Git",
        "Github",
      ],
    },
    {
      feature: true,
      project: "React Book Wishlist/Tracking Web App (The Book Nook)",
      category: "Web App Development & UI",
      // monthYear: "Aug 2023 - Dec 2023",
      year: 2023,
      img: "app/imgs/book_nook.png",
      sentence: "A React web app that lets users search, track, and organize books into virtual bookshelves using external APIs and progress tracking.",
      desc: [
      "Built a full-stack React application for managing personal reading lists using Firestore-backed shelves",  
      "Integrated Google Books, NYT Books, and Open Library APIs, enabling comprehensive book search and discovery",
      "Implemented Chart.js visualizations, displaying user reading progress over time",
      "Added Google Authentication, supporting persistent and personalized user data",
      "Developed reusable Tailwind CSS components, ensuring consistent and maintainable UI design",
      "Presented progress in team reviews and incorporated feedback, iterating on usability and feature improvements",
    ],
     stack: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Firebase (Auth, Firestore, Hosting)",
      "Google Books API",
      "Open Library API",
      "NYT Books API",
      "Chart.js",
      "Google Auth",
      "Git/GitHub",
      "UX Collaboration (Agile, peer reviews, presentations)",
],
      links: {
      code: "https://github.com/speer987/the-book-nook",
      readme:
        "https://github.com/speer987/the-book-nook/README.md",
      demo: "https://the-book-nook-5c098.web.app/",
    },
    },
    {
      project: "YeeHaw Programming Language",
      year: 2023,
      category: "Programming Language Design",
      img: "app/imgs/filler.jpg",
      sentence:
      "Collaborated with a team to develop a cowboy-themed programming language supporting loops, static typing, nesting, and OOP, including analyzer, compiler, and grammar components.",
    desc: [
      "Collaborated with a team of five to design a cowboy-themed programming language supporting loops, nesting, static typing, and OOP.",
      "Implemented key components of the analyzer and compiler, including test scripts and example code for demonstration.",
      "Applied Ohm language to define grammars and parse code efficiently.",
    ],
      stack: [
        "Ohm",
        "JavaScript",
        "Teamwork",
        "Communication Skills",
        "Presentations",
        "Github",
        "Git",
      ],
      links: {
        code: "https://github.com/alex-armknecht/YeeHaw",
        readme: "https://github.com/alex-armknecht/YeeHaw/blob/4b3711c222848e3e8cec83154276e83aca19703a/README.md"
      }
    },
    {
      project: "Command Line Utility (mkfid - Make File in Directory)",
      year: 2023,
      category: "Operating Systems",
      img: "app/imgs/filler.jpg",
      sentence:
      "Collaborated with teammates to implement a custom C CLI utility (mkfid) that creates files in new or existing directories using command flags.",
    desc: [
      "Collaborated with three team members to develop a C command line tool which allows users to create files in a chosen directory with a single command.",
      "Implemented flexible command flags such as -h for help and -d to specify directories, inspired by standard CLI tools.",
      "Converted pseudocode into working C code while coordinating closely with three teammates.",
      "Documented project plans and functionality in GitHub repositories for ease of use and replication.",
      "Presented completed tool functionality, demonstrating design decisions and user workflow.",
    ],
      stack: [
        "Ohm",
        "JavaScript",
        "Teamwork",
        "Communication Skills",
        "Presentations",
        "Github",
        "Git",
      ],
      links: {
      code: "https://github.com/Sarronnn/CMSI-3510_Tadesse-Ramchandran-Peer-Abrams"} 
    }, 
  {
    project: "Full Graph Database SDK w/ Command Line Interface", 
    year: 2022,
    category: "Database Systems and ETL/ELT",
    sentence:
      "Built a Neo4J graph database for a Museum of Modern Art dataset with Python DAL files, CSV preprocessing, and CLI queries for CRUD and aggregate operations.",
    desc: [
      "Built a Neo4J graph database SDK to manage large datasets of artworks and artists, including nodes, relationships, and metadata.",
      "Developed a command-line interface enabling users to query the database and perform CRUD operations.",
      "Preprocessed CSV data into nodes and relationships for accurate and clean database imports.",
      "Authored detailed documentation and database schema diagrams to guide SDK users.",
      "Created a command line program as a proof of concept to potentially allow researchers and historians to efficiently maintain and query the artwork dataset.",
    ],
    stack: [
      "Neo4J",
      "Python",
      "Cypher",
      "Database Design",
      "Documentation",
      "Database Systems Knowledge",
      "Kaggle",
      "Data Science",
      "Data Cleaning",
      "Version Control",
      "Git",
      "Github",
    ],
  },
  {
    project: "React Nutrition Web App",
    category: "Web App Development & UI",
    year: 2022,
    sentence:
      "Worked alongside teammates to develop a React app that lets users search, generate, and favorite recipes with nutritional details using Firestore and Spoonacular API.",
    desc: [
      "Collaborated with two teammates to develop a React web app helping users search for recipes, get random suggestions, and view recent favorites saved in Firestore.",
      "Designed a grid layout with gradient backgrounds, allowing users to filter recipes by max carbs, protein, calories, and prep time.",
      "Integrated Spoonacular API endpoints to display recipe details, including titles, images, summaries, serving sizes, ready times, and nutrition labels.",
      "Implemented interactive recipe cards with favorite buttons and real-time recipe retrieval for search and random generation pages.",
      "Discussed project plans, schedules, and team responsibilities while coordinating development tasks across team members.",
      "Applied Google Authentication to maintain user data.",
    ],
    stack: [
      "React",
      "Spoonacular API",
      "CSS",
      "HTML",
      "Firebase/Firestore",
      "Google Authentication",
      "Google Fonts",
      "GitHub",
      "Git",
      "Teamwork",
      "Communication Skills",
      "Presentation Skills",
    ],
    links:{ code: "https://github.com/joanna-estrada/nutrition", readme: "https://github.com/joanna-estrada/nutrition/blob/b3666b881c75463a2b1badf6c32d5e235785a5e0/README.md"
}
  },
    {
    project: "React Country Data Finder Web App",
    category: "Web App Development & UI",
    year: 2022,
    sentence:
      "Developed a React app to fetch and display detailed country information with a responsive, accessible interface using the Rest Countries API.",
    desc: [
      "Developed a React app that fetches country data including names, population, region, capital, flag, and time zones from the Rest Countries API.",
      "Implemented user input forms that query the API and display results dynamically below the form.",
      "Designed a responsive interface using CSS grid and flexbox to maintain symmetry and visual balance.",
      "Hosted the app on GitHub Pages and CodeSandbox to showcase project accessibility and deployment skills.",
    ],
    stack: [
      "Rest Countries API",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Color Schemes",
      "Google Fonts",
      "Git",
      "Github",
      "CodeSandbox",
    ],
    
    links: {
      code : "https://github.com/speer987/react-country-finder", 
      "codesandbox demo": "https://codesandbox.io/p/sandbox/react-country-data-finder-q839ng?file=%2Fsrc%2Findex.js", 
      "github pages demo": "https://speer987.github.io/react-country-finder/"}
    },
    {
    project: "Rose Hack Hydroponics Website",
    category: "Web App Development & UI",
    year: 2021,
    sentence:
      "Contributed to the front-end development of a hydroponics education web app, focusing on HTML/CSS and user-friendly UI design.",
    desc: [
      "Developed the front page of a web app focused on educating users about hydroponics using HTML and CSS.",
      "Collaborated with team members to implement styling and layout adjustments.",
      "Hosted the project on DevPost to showcase functionality and design to the hackathon community.",
    ],
    stack: [
      "CSS",
      "HTML",
      "Teamwork",
      "Communication Skills",
      "Presentation Skills",
    ],
    links: {devpost: "https://devpost.com/software/hydroponics-website"},
  },
  {
    project: "Medication Tracking Mobile App (BetterHealth App)",
    category: "UI/UX Design",
    year: 2021,
    sentence:
      "Collaborated with teammates to create a prototype app to log medication and mood data, applying HCI principles and evaluating usability through reports and peer feedback.",
    desc: [
      "Collaborated with two team members to ideate, design, and prototype an app that reminds users to record mood and medication intake.",
      "Applied HCI principles to improve usability and accessibility for forgetful medication users.",
      "Submitted four reports and a video summarizing research, design iterations, and effectiveness evaluations.",
      "Reviewed peer prototypes to inform improvements in aesthetics and user-centered design.",
      "Designed intuitive UI flows to help users track their habits without feeling overwhelmed.",
    ],
    stack: [
      "User Interface Design",
      "Teamwork",
      "HCI Design Principles",
      "Prototyping",
      "Documentation",
      "Peer Reviews",
    ],
  },
];

export default projects;
