import { Link } from 'react-router-dom';
import './header.css';
import {buttons, contact} from './data';
import HoverButton from './../hoverButton/hoverButton';

function Header() {

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
            />
          ))
          }
          <HoverButton
            title={contact.title}
            link={contact.link}// Provide the link if any
            icon={contact.icon}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;