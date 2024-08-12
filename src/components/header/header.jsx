import { useEffect } from 'react';
import './header.css';
import { buttons, contact } from './data';
import HoverButton from './../hoverButton/hoverButton';
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Header({ scrollThresholds }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.headerMain');

      let scrollThreshold = scrollThresholds.default;
      if (window.innerWidth <= 1025) {
        scrollThreshold = scrollThresholds.small;
      } else if (window.innerWidth <= 2000) {
        scrollThreshold = scrollThresholds.medium;
      }

      if (window.scrollY > scrollThreshold) {
        header.classList.add('dark');
      } else {
        header.classList.remove('dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThresholds]);

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
