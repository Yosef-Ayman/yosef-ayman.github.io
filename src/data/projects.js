function screenshots(folder, count) {
  return Array.from({ length: count }, (_, i) => `/images/demo/${folder}/Screenshot-${i + 1}.png`);
}

export const projects = [
  {
    id: 'base-go-app',
    title: 'Base Go App',
    shortDesc:
      'A reusable Go backend starter template inspired by Laravel, providing a structured foundation for building web applications.',
    about:
      'Base-Go-App is a reusable backend project template built with Go, inspired by Laravel’s developer experience and application structure. It provides a consistent foundation for building web applications through organized configuration, HTTP handling, controllers, middleware, routing, database integration, and HTML templating. The project emphasizes modular architecture, maintainability, and leveraging Go’s standard library wherever practical, allowing developers to start new backend projects without rebuilding common infrastructure from scratch.',
    features: [
      'Environment-based application configuration',
      'MVC-inspired application architecture',
      'HTTP request and response handling',
      'Routing and middleware management',
      'Database connection and query management',
      'Database schema and migration support',
      'HTML template rendering',
      'Session-based authentication',
      'Cookie and session management',
      'Repository testing structure'
    ],
    technologies: [
      'Go',
      'MySQL',
      'SQL',
      'HTML',
      'Go Standard Library'
    ],
    highlights: [
      'Laravel-inspired development experience',
      'Reusable backend project foundation',
      'Standard-library-first approach',
      'Separation of application responsibilities',
      'Database integration and migration support',
      'Designed for extensibility and maintainability'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/Base-Go-App',
    live: null,
    watch: null
  },
  {
    id: 'teacher',
    title: 'Teacher System',
    shortDesc:
      'An educational platform that helps teachers manage courses, students, enrollments, and digital learning content.',
    about:
      'Teacher System is a full-stack educational platform designed to help teachers manage their teaching business online. It provides course management, student enrollment, protected video content and wallet-based payments.',
    features: [
      'Teacher and student management',
      'Course and lesson management',
      'Student enrollment and access control',
      'Protected educational video content',
      'Wallet and payment management',
      'Role-based access control',
      'Administrative dashboards',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'FilamentPHP',
      'PostgreSQL',
      'MySQL',
      'React',
      'Inertia.js',
      'Tailwind CSS'
    ],
    highlights: [
      'Secure course enrollment and content access',
      'Wallet-based transactions',
      'Role-based authorization',
      'Scalable educational platform design'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/teacher',
    live: 'https://yosef-teacher.up.railway.app',
    watch: null
  },
  {
    id: 'icpc-fcai-cu-community',
    title: 'ICPC FCAI CU Community',
    shortDesc:
      'A community platform for ICPC FCAI CU, supporting competitive programming education, learning levels, sessions, and student engagement.',
    about:
      'ICPC FCAI CU Community is a web platform built to support the competitive programming community at the Faculty of Computers and Artificial Intelligence, Cairo University. It organizes learning levels, educational sessions, community activities, and student progress, providing a central hub for students and organizers.',
    features: [
      'Competitive programming learning levels',
      'Level-based learning roadmaps',
      'Educational session management',
      'Student profiles and progress tracking',
      'Community announcements and updates',
      'Leaderboard and student engagement',
      'Role-based access for community teams',
      'Centralized learning resources'
    ],
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'MySQL',
    ],
    highlights: [
      'Built for a university competitive programming community',
      'Structured learning paths across multiple levels',
      'Centralized session and learning resource management',
      'Designed to support community growth and engagement'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/icpcfcaicu',
    live: 'https://icpc-fcai-cu.vercel.app',
    watch: null
  },
  {
    id: 'jobify',
    title: 'Jobify',
    shortDesc:
      'A Django-based job portal connecting job seekers and employers through job posting, applications, and profile management.',
    about:
      'Jobify is a full-stack job portal built with Django that streamlines the hiring process for both job seekers and employers. The platform provides authentication, onboarding flows, employer dashboards, job management, applicant tracking, profile management, and responsive user interfaces.',
    features: [
      'Role-based authentication system',
      'Job seeker and employer accounts',
      'Employer dashboard',
      'Job posting and management',
      'Job application system',
      'Applicant tracking',
      'User profile management',
      'Password reset functionality'
    ],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Full authentication and onboarding flow',
      'Multi-role platform architecture',
      'Employer job management system',
      'Responsive Bootstrap-based UI'
    ],
    demo: screenshots('jobify', 17),
    github: 'https://github.com/Yosef-Ayman/Jobify',
    live: null,
    watch: 'https://www.linkedin.com/posts/yosef-ayman_django-python-webdevelopment-ugcPost-7462741992297484288-szE6'
  },
  {
    id: 'budgetary',
    title: 'Budgetary',
    shortDesc: 'A full-stack financial management platform built with Django REST Framework, React and JWT authentication.',
    about:
      'Budgetary is a modern finance management platform designed to help users organize budgets, track financial activities, and manage personal expenses through a secure and scalable architecture. The project follows a full-stack approach using React for the frontend and Django REST Framework for the backend.',
    features: [
      'JWT authentication',
      'RESTful API architecture',
      'Budget management',
      'Expense tracking',
      'Secure user accounts',
      'Responsive React frontend'
    ],
    technologies: ['Python', 'Django REST Framework', 'React', 'JWT'],
    highlights: [
      'Modern full-stack architecture',
      'API-first backend design',
      'Containerized deployment workflow',
      'Secure authentication using JWT'
    ],
    demo: screenshots('budgetary', 14),
    github: 'https://github.com/Yosef-Ayman/Budgetary',
    live: null,
    watch: null
  },
  {
    id: 'simple-audio-player',
    title: 'Simple Audio Player',
    shortDesc: 'Desktop audio mixer application with dual-deck audio player built using JUCE Framework and C++17.',
    about:
      'Simple Audio Player is a professional desktop audio mixer application featuring a dual-deck audio player interface. Built with JUCE Framework and C++17, this project demonstrates advanced audio processing capabilities, object-oriented design principles, and real-time audio manipulation.',
    features: [
      'Dual-deck audio player interface',
      'Play, Pause, Stop, and Loop controls',
      'Playback speed control',
      'Volume and gain control',
      'Metadata extraction',
      'Keyboard shortcuts',
      'Professional audio mixing capabilities'
    ],
    technologies: ['C++17', 'JUCE Framework', 'Audio Processing', 'OOP'],
    highlights: [
      'Real-time audio processing and mixing',
      'Professional-grade audio controls',
      'Efficient memory management with C++17 features',
      'Cross-platform compatibility through JUCE Framework'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/Simple-Audio-Player',
    live: null,
    watch: 'https://youtu.be/QOO6oMp4b3I'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Collection',
    shortDesc: 'Modular board game framework with 14+ game variants, focusing on OOP, Templates, Polymorphism, and STL.',
    about:
      'Tic-Tac-Toe Collection is a comprehensive modular board game framework that implements 14+ game variants. This project showcases advanced C++ programming concepts including object-oriented programming, templates, polymorphism, and effective use of the Standard Template Library (STL).',
    features: [
      '14+ game variants',
      'Modular and extensible architecture',
      'Template-based design',
      'Polymorphic game engine',
      'STL container utilization',
      'AI opponent support',
      'Customizable game rules'
    ],
    technologies: ['C++', 'OOP', 'Templates', 'STL', 'Design Patterns'],
    highlights: [
      'Demonstrates advanced OOP principles',
      'Template metaprogramming for code reusability',
      'Polymorphic design for extensibility',
      'Efficient STL usage for data structures'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/Tic-Tac-Toe-Collection',
    live: 'https://boardgamestictactoe.vercel.app',
    watch: 'https://youtu.be/EzMj2KNCbI4'
  },
  {
    id: 'image-processing',
    title: 'Image Processing',
    shortDesc: 'Pixel-level image processing project implementing 15+ filters including grayscale, edge detection, blur, and more.',
    about:
      'Image Processing is a comprehensive pixel-level image manipulation project that implements 15+ image filters and transformations. The project demonstrates proficiency in algorithms, RGB manipulation, and efficient image processing techniques.',
    features: [
      '15+ image filters and effects',
      'Grayscale conversion',
      'Edge detection algorithms',
      'Blur and sharpening filters',
      'Color manipulation',
      'Brightness and contrast adjustment',
      'Histogram equalization',
      'Custom filter support'
    ],
    technologies: ['C++', 'Image Processing', 'Algorithms', 'Data Structures'],
    highlights: [
      'Pixel-level manipulation algorithms',
      'Efficient image processing techniques',
      'Multiple filter implementations',
      'Algorithm optimization for performance'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/Simple-Image-Processing',
    live: null,
    watch: 'https://youtu.be/_1Yx6p7TWfw'
  },
  {
    id: 'frontend-mentor',
    title: 'Frontend Mentor Challenges',
    shortDesc: 'A collection of responsive UI challenges built from Frontend Mentor to sharpen layout, CSS, and UI skills.',
    about:
      'Frontend Mentor Challenges is a collection of responsive UI projects completed from the Frontend Mentor platform. These challenges focus on improving layout skills, CSS mastery, and UI/UX design implementation.',
    features: [
      'Multiple responsive UI challenges',
      'Modern CSS techniques',
      'Semantic HTML structure',
      'Mobile-first design approach',
      'Cross-browser compatibility',
      'Accessibility considerations',
      'Clean and maintainable code'
    ],
    technologies: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'],
    highlights: [
      'Responsive design mastery',
      'Modern CSS layout techniques',
      'UI/UX best practices',
      'Clean and semantic markup'
    ],
    demo: [],
    github: 'https://github.com/Yosef-Ayman/frontend-mentor-challenges',
    live: null
  }
];

export const featuredProjectIds = ['jobify', 'budgetary', 'simple-audio-player', 'tic-tac-toe', 'image-processing', 'frontend-mentor'];

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}
