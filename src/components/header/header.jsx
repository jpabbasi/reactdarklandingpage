import { useEffect } from 'react';
import './header.css';
import { buttons, contact } from './data';
import HoverButton from './../hoverButton/hoverButton';
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.headerMain');

      // This function is made to check what would be the ideal header color accordingly to the page scroll.
      // It's different to each screensize.

      let scrollThreshold = 0.7 * window.innerHeight; // Default value (for big devices)
      if (window.innerWidth <= 600) {
        scrollThreshold = 1.36 * window.innerHeight; // Small devices
      } else if (window.innerWidth <= 2000) {
        scrollThreshold = 1 * window.innerHeight; // Medium devices
      }

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
        <Link to="/" onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>
        <div className="headerLogo">
          <h1>Pedro <b style={{ fontWeight: 500 }}>Abbasi</b>.</h1>
        </div>
        </Link>
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
