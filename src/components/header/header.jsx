import { useEffect } from 'react';
import './header.css';
import {buttons, contact} from './data';
import HoverButton from './../hoverButton/hoverButton';

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.headerMain');
      const scrollThreshold = window.innerHeight * 0.7; // Adjust this value to change when the color should change (90% of viewport height)

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
          <h1>
            Pedro.
          </h1>
        </div>
            <nav className="navLinks">
                {
                  buttons.map((item) => (
                    <HoverButton
                    key={item.id}
                    title={item.title}
                    link={item.link}
                    icon={item.icon}
                    variant="default"
                    />
                  ))
                }
                <HoverButton
                  title={contact.title}
                  link={contact.link}
                  icon={contact.icon}
                  variant="ghost"
                  />
              </nav>
        </div>
    </header>
  );
}

export default Header;