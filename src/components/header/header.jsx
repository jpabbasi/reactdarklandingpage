import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TbMenu2, TbX } from 'react-icons/tb';
import { buttons, contact } from './data';
import HoverButton from './../hoverButton/hoverButton';
import './header.css';

function Header({ scrollThresholds }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && 
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrollThresholds]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="headerContainer">
      <header className="headerMain">
        <div className="headerContent">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            <div className={`mobileMenuButton ${isMenuOpen ? 'open' : ''}`} 
                 onClick={toggleMenu} 
                 ref={menuButtonRef}>
              <TbMenu2 className="icon menu" />
              <TbX className="icon x" />
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (     
        <div className="mobileMenu" ref={menuRef}>
          {buttons.map((item) => (
          <div
          className="mobileMenuItem">
            <HoverButton
              key={item.id}
              link={item.link}
              onClick={handleLinkClick}
              icon={item.icon}
              title={item.title}
              variant='black-ghost'
            />
          </div>))}
        </div>
      )}
    </div>
  );
}

export default Header;