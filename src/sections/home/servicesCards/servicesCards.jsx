import React, { useState, useEffect } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { cardsData } from './data';
import Card from './../../../components/card/Card';
import './servicesCards.css';
import HoverButton from './../../../components/hoverButton/hoverButton';

const ServicesText = ({ style, isSticky }) => (
  <div className={`servicesText ${isSticky ? 'isSticky' : ''}`} style={{ ...style, top: isSticky ? '0' : '5rem'  }}>
    <div>
      <p>SERVICES</p>
      <h1>Design, Development, and Content. All-in-one.</h1>
      <h3>Take your online presence to the next level with my expert web design and content creation services.</h3>
    </div>
    <HoverButton
      title="GET IN TOUCH"
      variant="black"
    />
  </div>
);

const ServicesCards = () => {
  const [isDesktop] = useState(false);

  return (
    <StickyContainer>
      <div className='servicesFlex'>
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
        <div data-aos="fade-up" className='servicesCards'>
          {cardsData.map((item, index) => (
            <Card key={index} className="serviceCard">
              <div className="cardFlex">
                <div className="cardText">
                  <div className="cardTitle">
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

export default ServicesCards;
