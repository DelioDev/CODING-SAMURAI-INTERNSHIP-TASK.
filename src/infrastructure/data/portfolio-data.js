export const portfolioData = {
  name: 'Adel Djeziri',
  title: 'Full-Stack & Mobile Developer | Cybersecurity & AI Enthusiast',
  email: 'adeldjeziri.42.46@gmail.com',
  phone: '+213-675-97-92-16',
  location: 'Ain Temouchent, Algeria',
  summary:
    'Hello! I\'m Adel Djeziri, a passionate Full-Stack & Mobile Developer with a Master\'s degree in Cybersecurity and Artificial Intelligence.',
  navigation: [
    { label: 'Home', href: '#home', icon: 'fa-solid fa-home' },
    { label: 'About', href: '#about', icon: 'fa-solid fa-user-astronaut' },
    { label: 'Skills', href: '#skills', icon: 'fa-solid fa-code' },
    { label: 'Education', href: '#education', icon: 'fa-solid fa-book' },
    { label: 'Projects', href: '#projects', icon: 'fa-solid fa-layer-group' },
    { label: 'Contact', href: '#contact', icon: 'fa-solid fa-paper-plane' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/090320004246adeldjezir', icon: 'fab fa-github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/djeziriadel4246/', icon: 'fab fa-linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/adeldjezirideliodev/', icon: 'fab fa-instagram' },
  ],
  footerSocials: [
    { label: 'GitHub', href: 'https://github.com/DelioDev', icon: 'fab fa-github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/djeziriadel4246/', icon: 'fab fa-linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/adeldjezirideliodev/', icon: 'fab fa-instagram' },
  ],
  skills: [
    {
      title: '🧠 Technical Skills',
      items: [
        { label: 'Languages:', value: 'Python, Dart, Java, Kotlin, PHP, TypeScript, HTML, CSS' },
        { label: 'Frameworks:', value: 'Flutter, Laravel, Angular, Firebase' },
        { label: 'Databases:', value: 'MySQL, Firebase, SQLite' },
      ],
    },
    {
      title: '⚙️ Dev & System Skills',
      items: [
        { label: 'Version Control:', value: 'Git, GitHub' },
        { label: 'Deployment:', value: 'Netlify, Firebase Hosting, Laravel Forge' },
        { label: 'Security & Networks:', value: 'Routing, Cybersecurity Basics' },
      ],
    },
    {
      title: '🤖 AI & Data Skills',
      items: [
        { label: 'Machine Learning:', value: 'scikit-learn, TensorFlow, Pandas, NumPy' },
        { label: 'Deep Learning:', value: 'NVIDIA Certified' },
        { label: 'Visualization:', value: 'Matplotlib' },
      ],
    },
    {
      title: '🎨 Design Skills',
      items: [
        { label: 'UI/UX:', value: 'Figma, Canva, Adobe XD' },
        { label: 'Wireframing & Prototyping', value: '' },
      ],
    },
    {
      title: '💬 Soft Skills',
      items: ['Teamwork & Leadership', 'Problem Solving', 'Fast Learner', 'Project Management'],
    },
  ],
  education: [
    {
      icon: '🎓',
      degree: 'Master’s Degree in Cybersecurity & AI',
      school: 'University of Ain Témouchent, Algeria',
      year: '2022 – 2024',
      details:
        'Focused on advanced cybersecurity, deep learning, and AI-driven solutions. Completed research projects integrating machine learning models for threat detection.',
    },
    {
      icon: '🎓',
      degree: 'Bachelor’s Degree in Computer Systems',
      school: 'University of Ain Témouchent, Algeria',
      year: '2019 – 2022',
      details:
        'Studied computer systems, software engineering, and network management. Participated in academic clubs and completed several practical development projects.',
    },
    {
      icon: '📘',
      degree: 'Certificate: Fundamentals of Deep Learning',
      school: 'University of Sidi Belabbes, Algeria',
      year: '2023',
      details:
        'Learned the fundamentals of designing and training neural networks using modern AI tools. Focused on practical applications in computer vision and data processing.',
    },
  ],
  projects: [
    {
      title: 'Tabkh Eddar',
      titleArabic: 'طبخ الدار',
      description:
        'A bilingual marketplace where customers order home-cooked dishes with cash on delivery. Chefs manage dishes and preparation progress, drivers claim ready orders and confirm delivery, and admins review chef and driver applications.',
      technologies: 'React, TypeScript, Vite, Node.js, Express, PostgreSQL, Vercel, Render',
      links: [
        { label: 'Live Website', href: 'https://tabkh-manzily.vercel.app/' },
        { label: 'Backend API', href: 'https://tabkhmanzily-1.onrender.com/' },
        { label: 'Source Code', href: 'https://github.com/DelioDev/tabkhManzily' },
      ],
    },
    {
      image: 'images/images/Adel.png',
      imageAlt: 'Doctor Appointment App',
      title: 'Doctor Appointment App',
      description:
        'A mobile app built with Flutter and Laravel API for booking doctor appointments easily with authentication and scheduling features.',
      technologies: 'Flutter, Laravel, MySQL',
      links: [{ label: 'Take a look', href: 'https://portfolio-adeldjeziri.netlify.app/#/' }],
    },
    {
      image: 'images/images/siahaty.png',
      imageAlt: 'Siahaty Reservation',
      title: 'Siahaty Reservation',
      description: 'A web platform for hotel and room reservations with an elegant UI, built using Laravel and Angular.',
      technologies: 'Flutter, Firebase',
      links: [{ label: 'Take a look', href: 'https://portfolio-adeldjeziri.netlify.app/#/' }],
    },
    {
      image: 'images/images/dawa_background.png',
      imageAlt: 'Medi - Medicament App',
      title: 'Medi - Medicament in the Hand',
      description:
        'An app to find medications available in nearby pharmacies with a smart search system and real-time updates.',
      technologies: 'Flutter, Firebase',
      links: [{ label: 'Take a look', href: 'https://portfolio-adeldjeziri.netlify.app/#/' }],
    },
    {
      image: 'images/images/portfolio.png',
      imageAlt: 'Adel Djeziri Portfolio App',
      title: 'My Portfolio App',
      description:
        'A responsive personal portfolio built entirely with Flutter Web. It presents my projects, skills, and background with a smooth UI, custom animations, and local asset integration — hosted on Netlify for fast and reliable access.',
      technologies: 'Flutter, Dart, Netlify Hosting',
      links: [{ label: 'Live Demo', href: 'https://portfolio-adeldjeziri.netlify.app/' }],
    },
    {
      image: 'images/images/xoxo.png',
      imageAlt: 'XO Game Web App',
      title: 'XO Game Web',
      description:
        'An interactive and responsive Tic Tac Toe game built using React. It offers smooth gameplay, modern UI, and real-time updates — a fun demonstration of front-end logic and clean design.',
      technologies: 'React, JavaScript, Vercel Hosting',
      links: [
        { label: 'View Code', href: 'https://github.com/DelioDev/TicTacTaoGame' },
        { label: 'Play Now', href: 'https://tic-tac-tao-game-blond.vercel.app/' },
      ],
    },
    {
      image: 'images/images/image.png',
      imageAlt: 'Agency Website',
      title: 'Agency Website',
      description:
        "A modern and responsive website for a creative agency, built with HTML, CSS, and JavaScript. It features a clean design, smooth animations, and a user-friendly interface to showcase the agency's portfolio and services.",
      technologies: 'React, JavaScript, Vercel Hosting',
      links: [{ label: 'Play Now', href: 'https://deliodev.vercel.app/' }],
    },
    {
      image: 'images/images/ept.png',
      imageAlt: 'EasyPayTrack Desktop App',
      title: 'EasyPayTrack',
      description:
        'EasyPayTrack is a C# desktop application that simplifies payment tracking, invoice management, and financial reporting. The app offers a clean interface, fast performance, and robust functionality for personal and small business use.',
      technologies: 'C#, .NET Framework, Windows Desktop App',
      links: [{ label: 'Watch Demo', href: 'images/images/ept.mp4' }],
    },
  ],
  footerLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
};
