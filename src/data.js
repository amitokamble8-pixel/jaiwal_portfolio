/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Jaiwal",
  last: "Patel",
  fullName: "Jaiwal Patel",
  tagline: "Aspiring Computer Science Engineer • Published AI/ML Researcher • EcoRevive Dubai Founder",
  location: "Dubai, UAE",
  email: "",
  phone: "",
  bio: [
    "I enjoy turning problems into working systems. My foundation is in mathematics and computer science, and much of it I have built independently — my school offers no AP courses, so I self-studied five of them, and I scored 1580 on the SAT on my first attempt.",
    "My interest in computing has grown through research and building. I co-authored a published study on retinal OCT image classification using a lightweight CNN-SE model, and after founding EcoRevive Dubai, an e-waste collection initiative, I built EcoRevive OS — a cloud-native platform that digitised its manual operations from request to handover. I have also built a student book-exchange platform and an AI concierge bot.",
    "Outside of building, I enjoy teaching and leading — mentoring juniors in maths, running coding and SAT bootcamps, and leading my school's GATE Club — and I play competitive chess. I hope to study computer science at the undergraduate level, with an emphasis on technology that creates meaningful impact.",
  ],
  // TODO: no personal quote in the source — this line is drawn from the résumé summary; replace with the student's own words.
  quote:
    "I want to build technology that creates meaningful impact — taking real problems, like the e-waste in my own community, and turning them into systems that work.",
  socials: {
    github: "",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/jaiwal-patel-29ba1a296/?isSelfProfile=false",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/cv.pdf",
  photo: "/placeholder.png",
  aboutPhoto: "/placeholder.png",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Mentoring", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

/* ---- Experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "ecorevive-dubai-founder",
    role: "Founder",
    org: "EcoRevive Dubai",
    logo: "/logos/ecorevive.png", // TODO: add logo file or replace
    location: "Dubai, UAE",
    dates: "Dec 2024 – Present",
    meta: "Dec 2024 – Present · Dubai, UAE ·",
    badge: "Founder",
    desc: "Founded a community e-waste initiative in Dubai, coordinating household pickups and routing everything collected to a certified recycler. As the operation grew, I went on to build EcoRevive OS to replace its manual workflows.",
    bullets: [
      "Coordinated 400+ pickups from ~350 families",
      "Diverted ~3,000 kg of e-waste through certified recycler Enviroserve Dubai",
      "Mobilised volunteers and identified a successor to help carry the initiative forward",
    ],
    tags: ["Sustainability", "Operations", "Leadership", "Community Impact"],
    featured: true,
  },
  {
    slug: "mashauri-software-apprentice",
    role: "Software Development & Engineering Apprentice",
    org: "Mashauri Virtual Global Apprenticeship",
    logo: "/logos/mashauri.png", // TODO: add logo file or replace
    location: "Virtual",
    dates: "Mar – Sep 2025 · 130 hours",
    meta: "Mar – Sep 2025 · 130 hours · Virtual ·",
    badge: "Apprenticeship",
    desc: "Completed a 130-hour virtual apprenticeship in software development and engineering, building a responsive web application from the ground up.",
    bullets: [
      "Built a responsive web application using JavaScript and Bootstrap",
      "Completed 130 hours of structured software engineering work",
    ],
    tags: ["Web Development", "JavaScript", "Bootstrap", "Responsive Design"],
    featured: true,
  },
  {
    slug: "neokul-ai-apprentice",
    role: "AI Apprentice",
    org: "Neokul Virtual Global Apprenticeship",
    logo: "/logos/neokul.png", // TODO: add logo file or replace
    location: "Virtual",
    dates: "Mar – Sep 2025 · 30 hours",
    meta: "Mar – Sep 2025 · 30 hours · Virtual ·",
    badge: "Apprenticeship",
    desc: "Completed a 30-hour virtual AI apprenticeship, applying it to a practical tool for students.",
    bullets: [
      "Built a Python/JSON homework chatbot for students",
    ],
    tags: ["AI", "Python", "JSON", "Chatbots"],
    featured: true,
  },
  {
    slug: "aws-ai-ml-program",
    role: "Participant",
    org: "Amazon Web Services (AWS) AI/ML Program",
    logo: "/logos/aws.png", // TODO: add logo file or replace
    location: "", // TODO: not specified in source
    dates: "Jul 6 – Jul 27, 2025 · 24 hours",
    meta: "Jul 2025 · 24 hours ·",
    badge: "Program",
    desc: "Completed a 24-hour hands-on AI/ML program guided by an AWS mentor.",
    bullets: [
      "Worked hands-on with an AWS mentor",
      "Built an AI hotel concierge bot in Amazon Lex",
    ],
    tags: ["AWS", "Amazon Lex", "Conversational AI"],
    featured: false,
  },
];

/* ---- Projects (Research & Projects) ---- */
/* NOTE: `link` is an added field (not in the reference schema) — the Projects
   component may need a small update to render it as a clickable link. */

export const PROJECTS = [
  {
    name: "Retinal OCT Image Classification — Published Research",
    org: "Student Researcher & Co-author · JEEEMI Journal",
    meta: "Jun 2025 – Sep 2026 · Published",
    desc: "Co-authored and published a study using a lightweight CNN-SE model for retinal OCT image classification, reporting 99% accuracy on OCT2017 and 97% on OCT-C8. Contributed to the mathematical foundation, abstract analysis, manuscript drafting and editing, project execution and controlled ablation studies, under Professor Parth Dave, who led model implementation.",
    tags: ["AI/ML", "Deep Learning", "CNN", "Medical Imaging", "Research"],
    link: "https://jeeemi.org/index.php/jeeemi/article/view/1991",
    featured: true,
  },
  {
    name: "EcoRevive OS",
    org: "Founder & Product Developer",
    meta: "Apr – Aug 2026 · ecorevive.app",
    desc: "Transformed EcoRevive Dubai's manual e-waste operations into a scalable cloud-native platform, digitising request-to-handover workflows with AI-assisted tools. Defined requirements and product and architecture decisions; reviewed AI-assisted code, tested workflows and debugged failures. Built with Django/DRF, PostgreSQL, Redis, React, TypeScript, Vite, Docker Compose, pytest and an Azure VM.",
    tags: ["Django/DRF", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Azure"],
    link: "https://ecorevive.app",
    featured: true,
  },
  {
    name: "Student Book Exchange",
    org: "Founder & Developer",
    meta: "Jan – Mar 2026",
    desc: "Built a Django book-exchange platform with ~100 listings, enabling the exchange of 47 books among 22 launch users, then trained 2 coordinators to keep it running.",
    tags: ["Django", "Web Development", "Community"],
    link: "",
    featured: true,
  },
  {
    name: "AI Hotel Concierge Bot",
    org: "Amazon Web Services (AWS) AI/ML Program",
    meta: "Jul 2025",
    desc: "Built a 24/7 concierge bot in Amazon Lex that handles room service, spa and table bookings, housekeeping and laundry requests, and local recommendations.",
    tags: ["Amazon Lex", "AWS", "Conversational AI"],
    link: "",
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "📄",
    title: "Published Research — Retinal OCT Image Classification",
    meta: "Co-author · JEEEMI Journal",
    detail: "Co-authored a peer-published study using a lightweight CNN-SE model for retinal OCT classification, reporting 99% accuracy on OCT2017 and 97% on OCT-C8.",
    link: "https://jeeemi.org/index.php/jeeemi/article/view/1991",
    featured: true,
  },
  {
    icon: "📝",
    title: "SAT — 1580",
    meta: "First Attempt · Math 800 · Reading & Writing 780",
    detail: "Scored 1580 on the SAT on the first attempt, with a perfect 800 in Math and 780 in Reading & Writing.",
    link: "",
    featured: true,
  },
  {
    icon: "📚",
    title: "Five AP Exams — Self-Studied",
    meta: "College Board · Independent Study",
    detail: "Scored 5 in AP Calculus BC, AP Statistics, AP Physics C: Mechanics and AP Physics C: Electricity & Magnetism, and 4 in AP Computer Science A. The school offers no AP courses, so all five were pursued independently.",
    link: "",
    featured: true,
  },
  {
    icon: "🧮",
    title: "International Olympiad Foundation Mathematics Olympiad — UAE Rank 4",
    meta: "Round 2 Qualifier · 2025",
    detail: "Qualified for Round 2 of the International Olympiad Foundation Mathematics Olympiad and placed 4th in the UAE.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "TALLENTEX Overseas 2025 (ALLEN) — Country Rank 5",
    meta: "UAE Rank 5 · Overseas Rank 11 · 2025",
    detail: "Placed 5th in the UAE and 11th overall among overseas candidates.",
    link: "",
    featured: true,
  },
  {
    icon: "➗",
    title: "CBSE Aryabhatta Ganit Challenge — Top 100",
    meta: "Grade 10 · 2025",
    detail: "Placed in the Top 100 in the CBSE Aryabhatta Ganit Challenge in Grade 10.",
    link: "",
    featured: false,
  },
  {
    icon: "📊",
    title: "Ei ASSET Maths — National Level Topper",
    meta: "UAE · Grade 9 · 2024",
    detail: "National Level Topper in Ei ASSET Mathematics for the UAE in Grade 9.",
    link: "",
    featured: false,
  },
  {
    icon: "🔬",
    title: "SOF National Science Olympiad — Gold Medal of Distinction",
    meta: "Zonal Rank 17 · 2024",
    detail: "Awarded the Gold Medal of Distinction with a Zonal Rank of 17.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of Interest ---- */
/* Topics come from the résumé's projects and "Interests" line; the short
   descriptions are written from that content — review before publishing. */

export const ARTICLES = [
  {
    title: "AI & Machine Learning",
    outlet: "Deep learning for medical imaging, from published retinal OCT research to conversational bots",
    link: "",
  },
  {
    title: "Full-Stack Software Building",
    outlet: "Cloud-native platforms that turn manual operations into scalable, working systems",
    link: "",
  },
  {
    title: "Mathematics & Statistics",
    outlet: "Mathematical problem-solving and statistical analysis as the foundation for computing and research",
    link: "",
  },
  {
    title: "Sustainability & Technology",
    outlet: "Using technology and community action to tackle e-waste in Dubai",
    link: "",
  },
];

/* ---- Leadership, community & personal growth ---- */

export const VOLUNTEER = {
  stats: [
    { value: "23", label: "Member Led" },
    { value: "3", label: "Major Events Attended" },
    { value: "28", label: "Students Mentored" },
  ],
  orgs: [
    {
      name: "NMS GATE Club / Aqua Shield",
      role: "President & Innovation Team Lead · Apr 2025 – Mar 2026",
      desc: "Led a ~23-member GATE Club and organised 3 major events. Also led a 5-student Aqua Shield team that presented at the school Innovation Fair among ~20–25 teams.",
    },
    {
      name: "Academic & Coding Mentorship",
      // TODO: source shows "[Month '25 – Month '26]" placeholder — confirm exact months.
      role: "Math, SAT & Coding Mentor · Grade 11",
      desc: "Mentored 5 junior students in maths, led a coding bootcamp for 8 students, and ran an SAT bootcamp for 15 students (6 underprivileged), improving SAT scores by ~100–150 points.",
    },
  ],
};

/* ---- Beyond Academics (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "♟️",
    name: "Competitive Chess — FIDE Rating 1409",
    desc: "I have played competitive chess since January 2023, training with a coach and competing in 6 FIDE-rated tournaments to reach a rating of 1409. I also play online to sharpen calculation and decision-making.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "JSON"],
  },
  {
    group: "Frameworks, Databases & Tools",
    items: ["Django/DRF", "React", "Bootstrap", "PostgreSQL", "Redis", "Docker", "Git/GitHub", "pytest"],
  },
  {
    group: "Cloud & AI",
    items: ["Azure", "Amazon Lex", "CNN", "Deep Learning"],
  },
  {
    group: "Analytical Skills",
    items: ["Mathematical Problem-Solving", "Statistical Analysis", "Introductory Machine Learning", "Testing & Debugging"],
  },
  {
    group: "Courses & Certifications",
    items: ["Harvard CS50P", "Cisco Networking Basics", "Statistical Learning with R"],
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "GEMS New Millennium School, Dubai",
    location: "Dubai, UAE",
    level: "CBSE · Grade 12",
    dates: "Graduating March 2027",
    gpa: "95.8% (Grade 11)",
    // TODO: the résumé does not list CBSE subjects — add them here.
    coursework: [],
  },
  {
    school: "Independent Study — Advanced Placement",
    location: "Dubai, UAE",
    level: "College Board AP (self-studied)",
    dates: "", // TODO: exam years not given in source
    gpa: "",
    coursework: [
      "AP Calculus BC",
      "AP Statistics",
      "AP Physics C: Mechanics",
      "AP Physics C: Electricity & Magnetism",
      "AP Computer Science A",
    ],
  },
];

export const TEST_SCORES = [
  {
    exam: "SAT",
    date: "First Attempt",
    breakdown: [
      { label: "Math", value: "800" },
      { label: "Reading & Writing", value: "780" },
      { label: "Total", value: "1580" },
    ],
  },
  {
    exam: "AP Exams (Self-Studied)",
    date: "",
    breakdown: [
      { label: "Calculus BC", value: "5" },
      { label: "Statistics", value: "5" },
      { label: "Physics C: Mechanics", value: "5" },
      { label: "Physics C: Electricity & Magnetism", value: "5" },
      { label: "Computer Science A", value: "4" },
      { label: "Harvard", value: "CS50P" },
    ],
  },
  {
    exam: "CBSE School Results",
    date: "",
    breakdown: [
      { label: "Grade 11", value: "95.8%" },
      { label: "Grade 10", value: "96.16%" },
      { label: "Grade 9", value: "88.5%" },
    ],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Mentoring", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "Research Paper", href: "https://jeeemi.org/index.php/jeeemi/article/view/1991" },
  { label: "EcoRevive OS", href: "https://ecorevive.app" },
];
