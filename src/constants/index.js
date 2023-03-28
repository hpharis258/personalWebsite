let date = new Date().toLocaleDateString();
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "CRM Developer",
      icon: web,
    },
    {
      title: "Business Process Automation Expert",
      icon: mobile,
    },
    {
      title: "C# Developer",
      icon: backend,
    },
    {
      title: "Full Stack JavaScript Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Deluge Script",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C#",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud Systems Developer",
      company_name: "Ascent Business Solutions",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - " + date,
      points: [
        "Developing and maintaining CRM Zoho Based CRM systems.",
        "Developing Business Process automations using JavaScript and Deluge Script",
        "Implementing 3rd party restfull API integrations using JSON and XML",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Cloud Computing Student",
      company_name: "Birmingham Metropolitan College",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - May 2023",
      points: [
        "Completing Multiple Project using C#",
        "Achieved highest possible grade in multiple modules including Data Structures and Algorithms, Cloud Application Development and Applied Programming.",
        "Completed Level 4 HNC Cloud Comptuting Course, Completed Level 5 Cloud Computing Course.",
        "Implemented multiple projects in AWS and Microsoft Azure Cloud Platforms, completed Azure Fundamentals AZ-900 certification.",
      ],
    },
    {
      title: "Piscine Participant",
      company_name: "School 42 Wolfsburg",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2020 - Jan 2021",
      points: [
        "Learned Linux and Bash scripting fundamentals",
        "Spent a month coding in C",
        "Worked with more experienced developers to solve the piscine challenges"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "I had the pleasure of working with Haroldas on several projects, and I must say, he is one of the best software developers I've ever worked with. He is an excellent communicator, delivers high-quality work on time, and is always willing to go above and beyond to ensure the project's success.",
      name: "Islas Nawaz",
      designation: "Senior Full-Stack Developer",
      company: "Pushologies",
      image: "https://media.licdn.com/dms/image/D4E03AQHsN3FV-WoDaA/profile-displayphoto-shrink_800_800/0/1666202924908?e=2147483647&v=beta&t=mspfVdFKPYxevuxbSoT3HeU9mdN6n3Go-W7SnFlVSDc",
    },
    {
      testimonial:
      "Haroldas is an exceptional software developer. His ability to understand complex requirements and translate them into elegant code is remarkable. He's an excellent problem-solver and collaborates effectively with the team to find the best solution.",
      name: "Nisha Sardar",
      designation: "Software Engineer specialised in CRM and Full Stack Development",
      company: "UPSTIX",
      image: "https://media.licdn.com/dms/image/D4E03AQFpihbv7HqzlA/profile-displayphoto-shrink_800_800/0/1669392360837?e=2147483647&v=beta&t=RBqSdgpoq6xSY50_wAmc2Eeup7LD6orm4F1A6COKNVk",
    },
    {
      testimonial:
      "Working with Haroldas has been an absolute pleasure. He is an incredibly skilled developer, dedicated to delivering high-quality software, and pays great attention to detail. He is also a fantastic team player, always willing to offer his expertise and support to his colleagues. I highly recommend him as a top-notch software developer.",
      name: "Joel Lipman",
      designation: "Cloud Systems Consultant / Technical Team Leader at Ascent",
      company: "456 Enterprises",
      image: "https://media.licdn.com/dms/image/C4D03AQGxTRHRS8oENQ/profile-displayphoto-shrink_800_800/0/1601971601011?e=2147483647&v=beta&t=-SWvVLiiHw5E0FjRrPiWK6rugpkNHj4m0uZQ4We2BIY",
    },
  ];
  
  const projects = [
    {
      name: "Server Side Stripe BBPOS WisePOS™ E Terminal Integration",
      description:
        "Implemented Server Side Stripe BBPOS WisePOS™ E Terminal Integration using Stripe API. ",
      tags: [
        {
          name: "REST API",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe Integration",
          color: "green-text-gradient",
        },
        {
          name: "JSON",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/hpharis258",
    },
    {
      name: "Data Structures and Algorithms",
      description:
        "Implemented different Data Structures and Algorithms in C#",
      tags: [
        {
          name: "C sharp",
          color: "blue-text-gradient",
        },
        {
          name: "Data Structures",
          color: "green-text-gradient",
        },
        {
          name: "Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Member of Parliament Data Scrapper",
      description:
        "C# .NET Window Forms Project, using XML API to get Member of Parliament data and extract valuable information, implementing SOLID principles and Unit testing using MS-Test framework.",
      tags: [
        {
          name: "Window Forms",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "XML REST API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/hpharis258/XMLWinFormsParser",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };