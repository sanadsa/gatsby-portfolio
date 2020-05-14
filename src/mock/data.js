import uuidv1 from 'uuid/v1';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.svg';
import angular from '../images/angular.svg';
import react from '../images/react.png';

// HEAD DATA
export const headData = {
  title: 'Sanad Satel | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sanad Satel',
  subtitle: "I'm a Software Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'download.png',
  paragraphOne:
    "I'm a young and ambitious software engineer with a Bs.C in computer science from HIT. I've been working for the past year as an implementation engineer in robotic process automation using NICE's Real Time Designer. Fluent in C#, JS, JAVA",
  paragraphTwo: 'a',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  // max 4 in each
  frontEnd1: [html, css, js, bootstrap],
  frontEnd2: [angular, react],
  backEndImgs: [1, 2, 3, 4, 4],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'exam.JPG',
    title: 'Exam System – Angular',
    info: 'An exam system which allows creating/editing exams for educational institutions',
    info2: '– Front end in Angular, Server side in NodeJs DB SQL server',
    url: '',
    repo: 'https://github.com/sanadsa/ExamSystem-1', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'InstaBook.JPG',
    title: 'Social Network Project - InstaBook',
    info:
      'A web application for social network using microservices –users (follow/unfollow/block), posts (text, image, tag, like, comment)',
    info2: '– MVC ASP.NET - DB using AWS DynamoDb and Neo4J Uploading images using aws s3',
    url: '',
    repo: 'https://github.com/sanadsa/SocialNetwork',
  },
  {
    id: uuidv1(),
    img: 'Cellular.JPG',
    title: 'Management System For A Cellular Company – .NET',
    info:
      'A windows application for managing customers, lines, packages and invoices for a cellular company',
    info2:
      '- Client side in WPF using mvvm - Server side in c# using web api service  DB in sql server using Entity Framework',
    url: '',
    repo: 'https://github.com/sanadsa/Cellular',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'sanadsatel@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sanad-satel/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/sanadsa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
