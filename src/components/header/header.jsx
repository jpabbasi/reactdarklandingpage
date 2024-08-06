import { useEffect } from 'react';
import './header.css';
import { buttons, contact } from './data';
import HoverButton from './../hoverButton/hoverButton';
import { TbMenu2 } from "react-icons/tb";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.headerMain');
      const scrollThreshold = window.innerHeight * 0.7;

      if (window.scrollY > scrollThreshold) {
        header.classList.add('dark');
      } else {
        header.classList.remove('dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="headerMain">
      <div className="headerContent">
        <div className="headerLogo">
          <h1>Pedro.</h1>
        </div>
        <nav className="navLinks">
          {buttons.map((item) => (
            <HoverButton
              key={item.id}
              title={item.title}
              link={item.link}
              icon={item.icon}
              variant="default"
            />
          ))}
          <HoverButton
            title={contact.title}
            link={contact.link}
            icon={contact.icon}
            variant="ghost"
          />
        </nav>
        <div className="mobileMenuContainer">
          <div className="mobileContactButton">
            <HoverButton
              title={contact.title}
              link={contact.link}
              icon={contact.icon}
              variant="ghost"
            />
          </div>
          <div className="mobileMenuButton">
            <HoverButton
              link="#"
              icon={<TbMenu2 />}
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
