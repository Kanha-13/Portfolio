import fullstackIcon from "../../Assets/images/fullstack.png"
import mobileIcon from "../../Assets/images/mobile.webp"
import desktopIcon from "../../Assets/images/desktop.png"
import frontendIcon from "../../Assets/images/frontend.svg"
import backendIcon from "../../Assets/images/backend.webp"
import devopsIcon from "../../Assets/images/devops.png"

import logshotsImg from "../../Assets/images/logshots.png"
import taskbuddyImg from "../../Assets/images/taskbuddy.png"
import studentdashboardImg from "../../Assets/images/studentdashboard.png"
import bookappointmentImg from "../../Assets/images/bookappointment.png"
import flexbenchImg from "../../Assets/images/flexbench.svg"
import pharmacyImg from "../../Assets/images/pharmacy.png"
import employeemanageImg from "../../Assets/images/employeemanage.png"

// import img5 from "../../Assets/images/chugli.png"

export const PROJECTS = [
  {
    name: "Students Hub",
    source_code: "https://github.com/Kanha-13/StudentsDashboard",
    live: "https://studentdashboard-rho.vercel.app/",
    image: studentdashboardImg,
    info: `The Student Dashboard is a React.js web application designed for managing student data. It allows admins and superusers to: Add new students with details like name, cohort, joining date, last login, courses enrolled, etc. View, update, and delete student records. Navigate through dummy screens for Dashboard, Help, Reports, Chapters, and Settings. The application is fully responsive, ensuring a seamless experience across devices including mobiles, tablets, and desktops.`,
    category: "Full Stack"
  },
  {
    name: "Pharmacy ERP Solution",
    source_code: "https://github.com/Kanha-13/pharmacyERP_Solution",
    live: "https://pharmatrack.vercel.app/login",
    image: pharmacyImg,
    info: `The pharmacy inventory management web application is a comprehensive solution built using Express (Node.js), React, and MongoDB. It empowers pharmacies with a range of features, including inventory management, sell-purchase history tracking, GST bill generation, bill history management, profit-loss analysis, party and company profile management, expiry alerts, and comprehensive transaction records. The upcoming version 2.0 is currently in development. Moreover, the software has been successfully deployed and is actively used for daily transactions in our own pharmacy, ensuring its reliability and practicality.`,
    category: "Full Stack"
  },
  {
    name: "Log Shorts",
    source_code: "https://github.com/Kanha-13/logshorts.git",
    live: "https://logshorts.vercel.app/",
    image: logshotsImg,
    info: "Log Shorts delivers bite-sized news updates, keeping you informed with just a glance. Access the latest headlines from around the world in a clean, easy-to-use interface. Each story includes a brief summary for quick understanding, and you can dive deeper into topics that interest you with a single tap. Perfect for staying up-to-date on the go!",
    category: "Frontend"
  },
  {
    name: "TaskBuddy",
    source_code: "https://github.com/Kanha-13/taskbuddy.git",
    live: "https://taskbuddy-13.vercel.app/",
    image: taskbuddyImg,
    info: `TaskBuddy is a powerful and user-friendly task management application built using React and TypeScript. The app helps users manage tasks efficiently with a variety of features such as Google Firebase authentication, Firestore database integration, and file storage via Supabase buckets. Whether you're working on personal or work-related tasks, TaskBuddy provides all the tools you need to stay organized and productive.`,
    category: "Frontend"
  },
  {
    name: "Students Hub",
    source_code: "https://github.com/Kanha-13/StudentsDashboard",
    live: "https://studentdashboard-rho.vercel.app/",
    image: studentdashboardImg,
    info: `The Student Dashboard is a React.js web application designed for managing student data. It allows admins and superusers to: Add new students with details like name, cohort, joining date, last login, courses enrolled, etc. View, update, and delete student records. Navigate through dummy screens for Dashboard, Help, Reports, Chapters, and Settings. The application is fully responsive, ensuring a seamless experience across devices including mobiles, tablets, and desktops.`,
    category: "Frontend"
  },
  {
    name: "Students Hub",
    source_code: "https://github.com/Kanha-13/StudentsDashboard_nodeapp.git",
    live: "https://github.com/Kanha-13/StudentsDashboard_nodeapp.git",
    image: studentdashboardImg,
    info: `This is a Node.js Express server that handles CRUD operations for the Students Dashboard React App. It acts as the backend, processing requests from the frontend, querying the Supabase database using Prisma ORM, and returning appropriate responses.`,
    category: "Backend"
  },
  {
    name: "Flexbench",
    source_code: "https://github.com/flexivian/flexbench/tree/develop",
    live: "https://flexivian.github.io/flexbench/docs/GSoC/2022/",
    image: flexbenchImg,
    info: `Flexbench is a powerful tool for generating simulated HTTP/HTTPS traffic. Built with NodeJS, it provides extensive customization options to tailor the traffic generation according to specific requirements. Whether used as a standalone script, a desktop application, or a server, Flexbench allows users to simulate traffic with fine-grained control. With features like read/write ratio configuration, duration settings, precise request generation control, and the ability to throttle inbound and outbound traffic, Flexbench enables users to mimic real-world scenarios and test the performance of their systems under different traffic loads. Its flexibility and customization options make it a valuable tool for traffic simulation and testing.`,
    category: "DevOps",
  },
  {
    name: "Flexbench",
    source_code: "https://github.com/flexivian/flexbench/tree/develop",
    live: "https://flexivian.github.io/flexbench/docs/GSoC/2022/",
    image: flexbenchImg,
    info: `Flexbench is a powerful tool for generating simulated HTTP/HTTPS traffic. Built with NodeJS, it provides extensive customization options to tailor the traffic generation according to specific requirements. Whether used as a standalone script, a desktop application, or a server, Flexbench allows users to simulate traffic with fine-grained control. With features like read/write ratio configuration, duration settings, precise request generation control, and the ability to throttle inbound and outbound traffic, Flexbench enables users to mimic real-world scenarios and test the performance of their systems under different traffic loads. Its flexibility and customization options make it a valuable tool for traffic simulation and testing.`,
    category: "Desktop Apps",
  },
  {
    name: "Flexbench",
    source_code: "https://github.com/flexivian/flexbench/tree/develop",
    live: "https://flexivian.github.io/flexbench/docs/GSoC/2022/",
    image: flexbenchImg,
    info: `Flexbench is a powerful tool for generating simulated HTTP/HTTPS traffic. Built with NodeJS, it provides extensive customization options to tailor the traffic generation according to specific requirements. Whether used as a standalone script, a desktop application, or a server, Flexbench allows users to simulate traffic with fine-grained control. With features like read/write ratio configuration, duration settings, precise request generation control, and the ability to throttle inbound and outbound traffic, Flexbench enables users to mimic real-world scenarios and test the performance of their systems under different traffic loads. Its flexibility and customization options make it a valuable tool for traffic simulation and testing.`,
    category: "Backend",
  },
  {
    name: "Flexbench",
    source_code: "https://github.com/flexivian/flexbench/tree/develop",
    live: "https://flexivian.github.io/flexbench/docs/GSoC/2022/",
    image: flexbenchImg,
    info: `Flexbench is a powerful tool for generating simulated HTTP/HTTPS traffic. Built with NodeJS, it provides extensive customization options to tailor the traffic generation according to specific requirements. Whether used as a standalone script, a desktop application, or a server, Flexbench allows users to simulate traffic with fine-grained control. With features like read/write ratio configuration, duration settings, precise request generation control, and the ability to throttle inbound and outbound traffic, Flexbench enables users to mimic real-world scenarios and test the performance of their systems under different traffic loads. Its flexibility and customization options make it a valuable tool for traffic simulation and testing.`,
    category: "Full Stack",
  },
  {
    name: "Pharmacy ERP Solution",
    source_code: "https://github.com/Kanha-13/Pharma_Track-backend.git",
    live: "https://github.com/Kanha-13/Pharma_Track-backend.git",
    image: pharmacyImg,
    info: `PharmaTrack is a cutting-edge web application tailor-made for pharmacy shops, revolutionizing inventory management. Built using React, Node.js, Express.js, and MongoDB, it offers seamless performance and a user-friendly experience. Say goodbye to manual stock tracking and expired products with our intuitive interface.`,
    category: "Backend"
  },
  {
    name: "Bookmy appointment",
    source_code: "https://github.com/Kanha-13/bookmyappointment",
    live: "https://github.com/Kanha-13/bookmyappointment",
    image: bookappointmentImg,
    info: "Bookmy appointment is a user-friendly platform developed using React, Node.js, and MongoDB. It simplifies the process of scheduling and managing medical appointments. Patients can easily search for doctors, view their availability, and book appointments based on their preferences. The app securely stores patient and doctor information, ensuring privacy and data protection. With its seamless integration and intuitive interface, the app improves accessibility to healthcare services, enhancing patient-doctor communication and overall healthcare management.",
    category: "Frontend"
  },
  {
    name: "My Employee Book",
    source_code: "https://github.com/Kanha-13/myemployeebook_frontend",
    live: "https://github.com/Kanha-13/myemployeebook_frontend",
    image: employeemanageImg,
    info: "My Employee Book is a powerful tool developed using React and Node.js. It streamlines HR processes by providing features like employee onboarding, and role management. With its intuitive interface and seamless integration, the app allows managers to efficiently handle employee information, monitor productivity, and generate insightful reports. It enhances collaboration, simplifies administrative tasks, and ensures effective workforce management, empowering businesses to optimize their human resources efficiently and drive organizational success.",
    category: "Frontend"
  },


  // {
  //   name: "Chugli chat app",
  //   source_code: "https://github.com/Kanha-13/chuglikro_frontend",
  //   live: "https://chuglikro.web.app/",
  //   info: "The messaging app, developed using React, Node.js, and MongoDB, prioritizes user privacy by not saving chat history. It offers real-time communication through secure and encrypted channels. Users can engage in one-on-one and exchange messages. With a user-friendly interface and robust backend, the app ensures smooth and seamless messaging experiences. While it prioritizes privacy by not storing chat history, it still offers essential features like message delivery notifications and online/offline status indicators to facilitate effective and instant communication between users.",
  //   category: "Frontend"
  // }
]


export const PROJECT_CATEGORIES = [
  { title: "Full Stack", icon: fullstackIcon },
  { title: "Mobile Apps", icon: mobileIcon },
  { title: "Desktop Apps", icon: desktopIcon },
  { title: "Frontend", icon: frontendIcon },
  { title: "Backend", icon: backendIcon },
  { title: "DevOps", icon: devopsIcon }
]