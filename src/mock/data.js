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
  subtitle: 'Cybersecurity student',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Cybersecurity student, proficient in solving CTF problems and owning online boxes. Earned 3 badges, hacked into 15+ machines and solved 10+ rooms on tryhackme',
  paragraphTwo:
    'Diligent competitve programmer. Ranked 1927 in Google Kickstart 2020 Round C. Rated 3* on CodeChef.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1MKk4vayBFau9ZyJluuP1ixcS2cUVyVdd/view?usp=sharing', // if no resume, the button will not show up
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
    img: 'digi_farming.jpg',
    title: 'Digi Farming',
    info:
      'A ML based regression model to tell the amount of irrigation needed for optimal growing of tomatoes.',
    info2:
      'It takes input parameters as temperature and humidity and computes the watering needed for the crop.',
    url: '',
    repo: 'https://github.com/Uchiha-DF/DigiFarming', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'puzzle_game.jpg',
    title: 'Puzzle',
    info: 'A Java based puzzle game with multiple levels.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
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
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/918859354694',
    },
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
