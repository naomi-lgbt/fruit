import {
  faDiscord,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
  faPatreon,
  faSteam,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Social } from '../interfaces/Social';

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/kbnich/',
    text: '#FFFFFF',
    background: '#0a66c2',
    hover: false,
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/fruitpursuits',
    text: '#f5f5f5',
    background: '#333333',
    hover: false,
  },
  {
    name: 'Discord',
    icon: faDiscord,
    url: 'https://discord.gg/VykvWEVYNb',
    text: '#FFFFFF',
    background: '#5865F2',
    hover: false,
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/PursuerOfFruit',
    text: '#FFFFFF',
    background: '#1DA1F2',
    hover: false,
  },
  {
    name: 'Twitch',
    icon: faTwitch,
    url: 'https://www.twitch.tv/fruitpursuits',
    text: '#FFFFFF',
    background: '#9146FF',
    hover: false,
  },
];
