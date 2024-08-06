import React from 'react';
import './logoBar.css';
import { logos } from './data';

const LogoBar = () => {
  return (
    <div className="logoBar">
      <div className="fadeLeft"></div>
      <div className='logoWrapper'>
        <div className="logos">
          {/* duplicated to make the loop infinite */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="logoContainer">
              <img
                src={logo.src}
                alt={logo.alt}
                className="logoImage"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fadeRight"></div>
    </div>
  );
};

export default React.memo(LogoBar);