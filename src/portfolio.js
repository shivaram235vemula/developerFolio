import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivaramakrishna Yemula",
  title: "Hi all, I'm Shivaramakrishna",
  subTitle: emoji(
    "An AWS DevOps Engineer 🚀 with expertise in Cloud automation, DevOps processes, container orchestration, and over 3 years of experience in the Banking domain."
  ),
  resumeLink: "https://docs.google.com/document/d/1bfe_5CZr0YowwlgnfVVcJhKkBl6jtfmk/edit?usp=drive_link&ouid=114822685295115625864&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shivaram235vemula/",
  linkedin: "https://www.linkedin.com/in/shivaramakrishna-yemula-572971141",
  gmail: "shivaram235vemula@gmail.com",
  hashnode: "https://shivaramkrishna.hashnode.dev/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY AWS DEVOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Cloud infrastructure automation with AWS, Terraform, and Ansible"),
    emoji("⚡ Containerization and orchestration with Docker and Kubernetes (EKS)")
  ],
  softwareSkills: [
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "gitlab", fontAwesomeClassname: "fab fa-gitlab" },
    { skillName: "jenkins", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "grafana", fontAwesomeClassname: "fas fa-chart-line" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Your University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Your Degree",
      duration: "Month Year - Month Year",
      desc: "Your academic achievements and activities.",
      descBullets: [
        "Your key accomplishments"
      ]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & Infrastructure Automation", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "85%"
    },
    {
      Stack: "CI/CD & DevOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience Section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "Feb 2022 – Present",
      desc: "Working on automating infrastructure, managing CI/CD pipelines, and container orchestration across AWS environments.",
      descBullets: [
        "Implemented build pipelines from scratch using Jenkins for microservices deployment",
        "Automated Kubernetes cluster management (EKS) and Docker-based containerization",
        "Enhanced monitoring using Prometheus and Grafana dashboards"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Big Projects Section
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "A health management platform with a focus on user-friendly features and reliable performance.",
      footerLink: [
        { name: "Visit Website", url: "http://saayahealth.com/" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "A digital learning platform aimed at enhancing educational experiences.",
      footerLink: [
        { name: "Visit Website", url: "http://nextu.se/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices worldwide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        { name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less than 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "shivaram235vemula@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be displayed as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
