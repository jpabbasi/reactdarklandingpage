import React, { useState } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { cardsData } from './data';
import Card from '../../../components/card/Card';
import './services.css';
import HoverButton from '../../../components/hoverButton/hoverButton';

const ServicesText = ({ style, isSticky }) => (
  <div className={`servicesText flexColumn ${isSticky ? 'isSticky' : ''}`} style={{ ...style, top: isSticky ? '0' : '5rem'  }}>
    <div>
      <p>SERVICES</p>
      <h1>Design, Development, and Content. <br/> All-in-one.</h1>
      <h3>Take your online presence to the next level with my expert web design and content creation services.</h3>
    </div>
    <HoverButton
      title="GET IN TOUCH"
      variant="black"
    />
  </div>
);

const Services = () => {
  const [isDesktop] = useState(false);

  return (
    <StickyContainer>
      <div className='servicesFlex flexRow'>
        <div className="servicesTextContainer">
          {isDesktop ? (
            <Sticky topOffset={-5} bottomOffset={-250}>
              {({ style, isSticky }) => {
                if (!style) {
                  return null;
                }
                return (
                  <ServicesText style={{ ...style }} isSticky={isSticky} />
                );
              }}
            </Sticky>
          ) : (
            <ServicesText />
          )}
        </div>
        <div className='servicesCards flexColumn'>
          {cardsData.map((item, index) => (
            <Card fade={"fade-up"} key={index} className="serviceCard">
              <div className="cardFlex">
                <div className="cardText">
                  <div className="cardTitle flexRow">
                    <h2>{item.title}</h2>
                    <div className="iconsContainer">
                      {item.icons.map((Icon, iconIndex) => (
                        <Icon key={iconIndex} className="cardIcon" />
                      ))}
                    </div>
                  </div>
                  <div className="cardContent">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </StickyContainer>
  );
};

export default Services;
