import React from 'react'
import Card from './../../../components/card/Card'

const ServicesCards = () => {
  return (
    <div className='servicesFlex'>
          <div className='servicesText'>
            <p>SERVICES</p>
            <h1>Design, Development, and Content.<br/> All-in-one.</h1>
            <h3>Take your online presence to the next level with my expert <br/> web design and content creation services.</h3>
          </div>
          <div className='servicesText'>
                <Card>
                    <div className="cardFlex">
                    <div className="cardText">
                      <div className="cardTitle">
                        <h2>WEB DEVELOPMENT</h2>
                        <div className="cardIcon">
                          <h2>02</h2>
                        </div>
                      </div>
                      <div className="cardContent">
                        <p>I build your website in Framer, ensuring a robust CMS integration, great performance, and SEO optimization.</p>
                      </div>
                    </div>
                    </div>
                </Card>
                  </div>
            </div>
  )
}

export default ServicesCards
