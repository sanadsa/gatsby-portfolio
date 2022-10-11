import uuidv1 from 'uuid/v1';
import html from '../images/html5.svg';
import css from '../images/css3.svg';
import js from '../images/js.png';
import bootstrap from '../images/bootstrap.svg';
import angular from '../images/angular.svg';
import react from '../images/react.png';
import wpf from '../images/wpf.png';
import mvc from '../images/mvc.png';
import sql from '../images/sqll.png';
import csharp from '../images/csharp.png';
import nodejs from '../images/nodejs.png';
import java from '../images/Java.png';
import restApi from '../images/restApi.png';
import git from '../images/gitIcon.png';
import jira from '../images/JIRA.png';
import neo4j from '../images/neo4j.png';
import tfs from '../images/tfs.png';

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
  img: 'sanads-profile.jpg',
  paragraphOne:
    'I am a Software Developer with enthusiasm and focus on Web Development and Devops.',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the Web field.',
  paragraphThree: 'BSc Computer Science 👨‍💻 HIT 💻 Developer @ Sela Group',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  // max 4 in each
  frontEnd1: [html, css, js, bootstrap],
  frontEnd2: [angular, react, wpf, mvc],
  backend1: [sql, csharp, nodejs, java],
  backend2: [restApi],
  other: [git, jira, neo4j, tfs],
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
