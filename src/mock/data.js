import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hariom Chaturvedi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Hariom Chaturvedi',
  subtitle: 'a Playboy',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am passionate about CyberSecurtiy, enjoy playing CTFs and to root machines.',
  paragraphTwo:
    'Apart from Security I practice my problem solving skills with Competitive Programming. Rated 3* on CodeChef.',
  paragraphThree: 'Blah blah blah',
  resume: 'https://drive.google.com/file/d/1MKk4vayBFau9ZyJluuP1ixcS2cUVyVdd/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
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
