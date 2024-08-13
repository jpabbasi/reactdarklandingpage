import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export const socialLinks = [
    { icon: <FiLinkedin/>, name: 'LinkedIn', url: 'https://www.linkedin.com/in/pedro-abbasi/' },
    { icon: <FiGithub/>,  name: 'Github', url: 'https://github.com/jpabbasi' },
    { icon: <FiInstagram/>,  name: 'Instagram', url: 'https://www.instagram.com/pedroabbasi' },
  ];

export const footerColumns = [
    {
      title: 'PAGES',
      links: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'PORTFOLIO',
      links: [
        { name: 'My Work', url: '/work' },
      ],
    }
  ];