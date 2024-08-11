import './footer.css'
import HoverButton from './../hoverButton/hoverButton';
import { Link } from 'react-router-dom';
import { footerColumns, socialLinks } from './data';

function Footer() {
  return (
    <footer>

      <div className='contact'>
        <p>LET'S TALK</p>
        <div className='title'>
          <h1>
          Unlock your potential with a <br/>website designed to <b>win</b>.
          </h1>
        </div>
        <div className='contactButton'>
        <HoverButton variant="arrow-inv" title="GET IN TOUCH"/>
        </div>
      </div>

      <div className="footerMain">
        <div className="footerLeft">
          <div className="footerLogo">
          <h3>Pedro <b style={{ fontWeight: 600 }}>Abbasi</b>.</h3>
          </div>
          <div className="footerSocials">
          {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                {social.name}
              </Link>
            ))}
            </div>
        </div>

        <div className="footerRight">
        {footerColumns.map((column, index) => (
            <div key={index} className="footerColumn">
              <h4>{column.title}</h4>
              {column.links.map((link, linkIndex) => (
                <Link key={linkIndex} to={link.url}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footerBottom">
        <p>🚀 2024 PEDRO ABBASI &copy; All Rights Reserved</p>
        <div onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className="footerToTop">
          <HoverButton  variant='arrow-up' title='TO TOP'/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
