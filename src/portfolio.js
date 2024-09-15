/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

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
  resumeLink:
    "https://docs.google.com/document/d/1bfe_5CZr0YowwlgnfVVcJhKkBl6jtfmk/edit?usp=drive_link&ouid=114822685295115625864&rtpof=true&sd=true", // Set to empty to hide the button
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
  subTitle: "CRAZY AWS DEVOPS ENGINEER WHO LOVES TO EXPLORE NEW TECH STACKS",
  skills: [
    emoji(
      "⚡ Skilled in automating infrastructure provisioning and configuration management using AWS, Terraform, and Ansible"
    ),
    emoji("⚡ Hands-on expertise in managing Kubernetes (EKS) clusters, Docker, and CI/CD pipelines via Jenkins and GitLab"),
    emoji(
      "⚡ Proficient in cloud-based deployment, monitoring, and troubleshooting, with a strong focus on microservices and containerization across AWS environments"
    )
  ],

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Your University",
      subHeader: "Your Degree",
      duration: "Month Year - Month Year",
      desc: "Your academic achievements and activities.",
      descBullets: ["Your key accomplishments"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & Infrastructure Automation",
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
  displayCodersrank: false // Set true to display codersrank badges section need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Accenture",
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

// Is Hireable Section

const isHireable = false; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  isHireable
};
