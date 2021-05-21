import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hariom Chaturvedi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Hariom Chaturvedi',
  subtitle: 'Cybersecurity Enthusiast',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am Cybersecurity Enthusiast and a competitive programmer, currently pursuing Computer Science and Engineering from Dayananda Sagar College of Engineering. I practice my ethical hacking skills on tryhackme, hackthebox, and by participating in CTFs. Appart from these, I write blogs and writeups focussing on security concepts.',
  paragraphTwo:
    'Currently, I am contributing to PcapMonkey under the Google Summer of Code 2021. Where I work on Elastic SIEM, Zeek and Suricata',
  paragraphThree: ' ',
  blog: 'https://blog.findhariom.tech', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Flat-Bait',
    info:
      'A native app intended to minimize the efforts in finding house maid and cooks. Build using MERN stack.',
    info2:
      'This app basically locates available household workers near you. It simplifies the efforts for users, by showing them workers at the comfort of their home.',
    url: '',
    repo: 'https://github.com/hariomch/flat-bait', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netmamba.png',
    title: 'NetMamba',
    info: 'CLI tool written in python to scan for hosts in a network.',
    info2: '',
    url: '',
    repo: 'https://github.com/hariomch/py-netmamba', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'digi_farming.jpg',
    title: 'Digi Farming',
    info:
      'A ML based regression model to tell the amount of irrigation needed for optimal growing of tomatoes.',
    info2:
      'It takes input parameters as temperature and humidity and computes the watering needed for the crop.',
    url: '',
    repo: 'https://github.com/Uchiha-DF/DigiFarming', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: '',
  email: 'hariom4694@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/HariChaturved',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hariom-chaturvedi/',
    },
    // {
    //   id: nanoid(),
    //   name: 'whatsapp',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hariomch',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
