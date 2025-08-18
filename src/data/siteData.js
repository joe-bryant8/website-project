export const profile = {
  name: "Joseph Bryant",
  title: "Software Developer",
  company: "Masters in Applied Data Science",
  location: "City, State",
  blurb:
    "Software engineer specializing in TypeScript and single-page applications, while currently expanding my skillset with data science methodologies and new roles.",
  photo: "/headshot.jpg",
  resumeUrl: "/resume.pdf",
  links: [
    { label: "Email", href: "mailto:joe.a.bryant8@gmail.com", icon: "mail" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joseph-a-bryant/",
      icon: "linkedin",
    },
  ],
  bannerUrl: "/header.jpg",
};

export const experience = [
  {
    role: "Software Developer",
    company: "Cigna - Digital",
    start: "Jan 2021",
    end: "Feb 2024",
    bullets: [
      "Contributed in building a single page Angular web application, from initial design, aimed at promoting pain management and improving mobility.",
      "Developed an admin portal UI with the Angular framework for third party vendor database functionality, in tandem with a customer-facing MyCigna application.",
      "Wrote unit tests for frontend applications using Jest.",
      "Built/maintained API for the Digital Data – Customer Profile team using the Express framework with Typescript",
      "Learned to create/develop applications with an agile team using a proper Git workflow in sprint cycles",
      "Leveraged free time to begin initial training with the React library",
    ],
  },
  {
    role: "Scrum Master",
    company: "Cigna - Data & Analytics",
    start: "Jan 2020",
    end: "Dec 2020",
    bullets: [
      "Facilitated agile ceremonies, including Daily Standups, Iteration and PI Planning, and Iteration Retrospectives.",
      "Tracked/resolved any risks and dependencies involved in the software development life cycle.",
      "Removed any obstacles for developers and data analysts",
      "Received SAFe 5 SSM Certification to aid in agile development.",
      "Coached team members to ensure alignment with agile principles.",
      "Managed productivity and agility of team with ~5 developers.",
    ],
  },
  {
    role: "Technology Intern",
    company: "Cigna - Infrastructure",
    start: "May 2019",
    end: "Aug 2019",
    bullets: [
      "Created reports with Tableau to provide further information regarding all configuration items across Cigna.",
      "Provided more efficient method of email distribution across most of the ISG organization.",
      "Collaborated with a team of 14 interns to plan and develop an accessibility location application through the use of Angular and Google Maps API.",
      "Shadowed the release train engineer and scrum master of our agile train to receive hands-on experience with key agile principles.",
    ],
  },
];

export const education = [
  {
    degree: "Masters of Applied Data Science",
    school: "University of North Carolina at Chapel Hill",
    start: "2024",
    end: "Present",
    notes:
      "Graduate studies emphasizing data science methodology, including machine learning, statistical modeling, and databases.",
    logo: "/unc.png",
  },
  {
    degree: "Bachelors of Computer Science",
    school: "University of North Carolina at Charlotte",
    start: "2018",
    end: "2020",
    notes: "Magna Cum Laude; GPA 3.76",
    logo: "/uncc.png",
  },
];

export const skills = {
  technical: [
    { name: "Python", percent: 85 },
    { name: "JavaScript / TypeScript", percent: 90 },
    { name: "SQL", percent: 90 },
    { name: "HTML / CSS", percent: 80 },
  ],
  frameworks: [
    { name: "React", percent: 70 },
    { name: "Angular", percent: 85 },
    { name: "Express", percent: 80 },
    { name: "TensorFlow", percent: 65 },
  ],
  softSkills: [
    { name: "Agile", percent: 90 },
    { name: "Communication", percent: 85 },
    { name: "Design Techniques", percent: 75 },
    { name: "Version Control", percent: 80 },
  ],
};
