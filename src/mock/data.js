import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashlee | Software Developer',
  lang: 'en',
  description: 'Building cool stuff',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ashlee.',
  subtitle: "I'm a Full Stack Software Engineer",
  cta: 'who is she?',
};

// ABOUT DATA
export const aboutData = {
  img: 'banner.jpeg',
  paragraphOne:
    "I'm a 10-year veteran of the beverage industry breaking into web development with a fresh outlook on problem solving and collaboration.",
  paragraphTwo:
    "Always on the lookout for a new technology to master, I'm quick on my feet and adaptable in the face of any challenge. ",
  paragraphThree: 'My favorite cocktail? A daiquiri.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pixelmate.png',
    title: 'Pixelmate',
    info: 'A pixel art maker',
    info2: 'Built using only vanilla JavaScript, HTML, and CSS',
    url: 'https://ashleekp.github.io/Pixelmate/',
    repo: 'https://github.com/AshleeKP/Pixelmate', // if no repo, the button will not show up
  },
  { 
    id: nanoid(),
    img: 'credibuddy.png',
    title: 'Credibuddy',
    info:
      'Your friendly newsbias alert extension. Pulls from news media bias measuring sites to alert the user to any bias either ways',
    info2: '',
    url: 'http://yourcredibuddy.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'checksponme.png',
    title: 'ChecksOn Me',
    info: 'A simple payment app for bars and restaurants. No extra equipment needed.',
    info2: 'Built using Flutter, Dart, and Stripe. ',
    url: 'https://checkson.me/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brain-maze.png',
    title: 'ScavengeAR Escape',
    info: 'An Scavengar Hunt meets an Escape Room, in Augmented Reality.',
    info2: 'Built using ViroReact, a React Native based AR/VR technology.',
    url: 'https://youtu.be/XZuxFMk2S9g',
    repo: 'https://github.com/Capstone-E/ScavengAR-Escape', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Have something you want to chat about?',
  btn: 'Get in touch',
  email: 'ashlee.pitock@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/100kohms',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashleepitock/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AshleeKP',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
