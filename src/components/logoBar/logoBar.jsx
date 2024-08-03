import './logoBar.css';
import {logos} from './data'

const LogoBar = () => {
    return (
      <div className="logoBar">
        <div className="fadeLeft"></div>
        <div className='logoWrapper'>
        <div className="logos">
          {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
        </div>
        <div className="fadeRight"></div>
      </div>
    );
  };
  
  export default LogoBar;