export const projects = [
  {
    title: "SFTP Batch Ingestion Pipeline",

    description:
      "CSV files are ingested from SFTP, transformed and validated, checked with CDC logic, retried on failure, routed to DLQ when needed, loaded into PostgreSQL, and surfaced in the application.",

    image: "/projects/sftp-batch-ingestion-pipeline.svg",

    tech: [
      "Python",
      "CSV",
      "SFTP",
      "Transformations",
      "Retry Logic",
      "DLQ",
      "PostgreSQL",
      "CDC",
      "Application",
    ],
  },

  {
    title: "Workable API Ingestion Pipeline",

    description:
      "Workable API data is extracted with scheduled GitHub Actions, loaded through DLT Hub with incremental state handling, and stored in PostgreSQL for downstream reporting and application workflows.",

    image: "/projects/workable-api-ingestion-pipeline.svg",

    tech: [
      "Python",
      "Workable API",
      "DLT Hub",
      "PostgreSQL",
      "Incremental Loading",
      "GitHub Actions",
    ],
  },

  {
    title: "HubSpot CRM Data Pipeline",

    description:
      "HubSpot CRM records are pulled from APIs, processed through DLT Hub, scheduled with GitHub Actions, and loaded into PostgreSQL as analytics-ready customer and pipeline data.",

    image: "/projects/hubspot-crm-data-pipeline.svg",

    tech: [
      "Python",
      "HubSpot API",
      "DLT Hub",
      "PostgreSQL",
      "ETL/ELT",
      "GitHub Actions",
      "Data Validation",
    ],
  },

  {
    title: "Clever Data Integration Pipeline",

    description:
      "Clever API data moves through MageAI transformations, CDC checks, PostgreSQL loading, and final application sync so district and student records stay clean and usable.",

    image: "/projects/clever-data-integration-pipeline.svg",

    tech: [
      "Python",
      "Clever API",
      "MageAI",
      "Transformations",
      "CDC",
      "PostgreSQL",
      "Application",
    ],
  },

  {
    title: "ClassLink Data Integration Pipeline",

    description:
      "ClassLink API data is orchestrated through MageAI, transformed and checked with CDC logic, loaded into PostgreSQL, and synchronized into the application for operational use.",

    image: "/projects/classlink-data-integration-pipeline.svg",

    tech: [
      "Python",
      "ClassLink API",
      "MageAI",
      "Transformations",
      "CDC",
      "PostgreSQL",
      "Application",
    ],
  },

  {
    title: "Google Forms Ingestion Pipeline",

    description:
      "Google Form submissions are authenticated, orchestrated in MageAI, transformed into structured records, and loaded into PostgreSQL for reporting and backend workflows.",

    image: "/projects/google-forms-ingestion-pipeline.svg",

    tech: [
      "Python",
      "Google Forms",
      "Authentication",
      "MageAI",
      "Transformations",
      "PostgreSQL",
      "Automation",
    ],
  },

  {
    title: "PostgreSQL to SFTP Export Pipeline",

    description:
      "Application changes are captured in PostgreSQL, transformed through MageAI, exported as clean CSV files, and delivered securely to an SFTP server for partner data exchange.",

    image: "/projects/postgresql-to-sftp-export-pipeline.svg",

    tech: [
      "Python",
      "Application",
      "PostgreSQL",
      "MageAI",
      "Transformations",
      "CSV",
      "SQL",
      "SFTP",
    ],
  },

  {
    title: "Real-Time Messaging App",

    description:
      "Real-time bidirectional messaging app with secure JWT authentication, Socket.IO communication, a responsive React frontend, and a scalable NestJS/PostgreSQL backend.",

    image: "/projects/messagingapp.png",

    github:
      "https://github.com/manoj13196/Messaging_app",

    live:
      "https://messaging-app-two-psi.vercel.app/",

    tech: [
      "NestJS",
      "React",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
    ],
  },

  {
    title: "Members Only Platform",

    description:
      "Authentication-based application with protected routes, secure session workflows, backend integration, and role-based access handling.",

    image: "/projects/members-only.png",

    github:
      "https://github.com/manoj13196/Members-Only_App",

    live:
      "https://members-only-app.vercel.app/",

    tech: [
      "Authentication",
      "Node.js",
      "MongoDB",
      "Express",
      "Sessions",
    ],
  },

  {
    title: "File Uploader & Dashboard App",

    description:
      "Secure file management platform with role-based access control, Cloudinary uploads, Supabase authentication, REST APIs, and a React admin dashboard for file and user-role management.",

    image: "/projects/file-upload.png",

    github:
      "https://github.com/manoj13196/File_Uploader",

    live:
      "https://file-uploader-three-rust.vercel.app/",

    tech: [
      "NestJS",
      "React",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
      "REST APIs",
    ],
  },

  {
    title: "Interactive CV Generator",

    description:
      "Dynamic resume generator application with live editing, reusable UI components, and responsive layouts.",

    image: "/projects/cv-generator.png",

    github:
      "https://github.com/manoj13196/Cv-Generator",

    live:
      "https://cv-generator-nu-nine.vercel.app/",

    tech: [
      "React",
      "TypeScript",
      "Responsive UI",
      "Forms",
    ],
  },

  {
    title: "Shopping Cart Application",

    description:
      "E-commerce shopping cart application with product management, cart workflows, dynamic UI rendering, and responsive design.",

    image: "/projects/shopping-cart.png",

    github:
      "https://github.com/manoj13196/Shopping-cart",

    live:
      "https://shopping-cart-psi-brown.vercel.app/",

    tech: [
      "React",
      "JavaScript",
      "Frontend",
      "State Management",
    ],
  },

  {
    title: "Weather Forecast Application",

    description:
      "Weather dashboard application with API integration, real-time forecast retrieval, search functionality, and responsive layouts.",

    image: "/projects/weather.png",

    github:
      "https://github.com/manoj13196/weather-project",

    live:
      "https://manoj13196.github.io/weather-project/",

    tech: [
      "JavaScript",
      "Weather API",
      "Frontend",
      "Responsive UI",
    ],
  },
];
