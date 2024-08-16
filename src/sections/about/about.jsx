import './about.css'
import {analyticsData} from '../services/data'
import {process, cardsData} from './data'
import Card from '../../components/card/Card'
import MyStack from '../../components/myStack/myStack';
import HoverButton from '../../components/hoverButton/hoverButton';
import aboutImage from '../../assets/portrait.jpg';
import {socialLinks} from '../../components/footer/data'
import {stackItems} from '../../components/myStack/data'
import Reviews from '../home/reviews/reviews';

const About = () => {
  return (

    <div>
      <div style={{paddingBottom: '3rem'}} className='defaultHeader flexColumn'>
      <h3 className='gradientBackground'>MY STORY</h3>
        <h1>I Bring Your Website <br/> Vision to Life</h1>
        <p>Your website is an extension of your brand,
          and I’m here to help you make it the best it can be. </p>
      </div>

      <div className='whiteBoard'>
        <div className="analytics flexRow">
          {
            analyticsData.map((item, index) => (
              <div key={index} className="analyticsItem">
                <h3>{item.title}</h3>
                <h2>{item.number}</h2>
              </div>
            ))
          }
        </div>

        <div className='howIWork centeredText'>
          <h3>HOW I WORK</h3>
          <h1>My Approach to a successfull Partnership</h1>
          <p>I believe in a collaborative process that puts
          your needs first, and delivers outstanding results every time. </p>
          </div>
              <MyStack stacks={stackItems}/>
          <div style={{paddingTop: '5rem'}}>
            <div className='howIWorkList'>
            {process.map((item) => (
              <div className='howIWorkTopic'>
                <div style={{gap: '1rem'}}  className='titleNumberDisplay'>
                  <div>
                    <h2>{item.id}</h2>
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                    <h3>Hey, just wondering if you got your photos printed? bogos binted? what</h3>
                  </div>
                </div>
                  <p>{item.desc}</p>
              </div>
            ))}
            </div>

            <div className='howIWorkCard'>
              <Card className='flexColumn' fade={"fade-up"}>
              <h1>Qualifications</h1>
              <h3>In general, I’m a big fan of learning by doing and extensive practice</h3>
              <div>
              {cardsData.map((item) => (
                <div className='qualifications flexRow'>
                  <div className='qualificationsIcon'>
                    {item.icon}
                    <h2>{item.title}</h2>
                    <p>{item.source}</p>
                  </div>
                  <p>{item.date}</p>
                </div>
              ))}
              </div>
              <h3>More than 25 online courses since 2017. So I won’t add all here.</h3>
              </Card>
            </div>
            {<Reviews/>}
            <div data-aos="fade-up" className='about'>
        <div className='innerAbout flexRow'>
            <img src={aboutImage} alt={`portrait`} className="homeImage" />
                <div className='titleFlex flexColumn'>
                    <h1 style={{color: 'var(--color-light)'}}>Transform your digital presence, elevate your career</h1>
                    <p>Your website is more than just an online presence;
                      it’s the cornerstone of your brand's success.
                      Allow me to craft a digital experience that not only
                      mirrors your unique vision but also positions you as
                      a leader in your industry. With my specialized expertise,
                      I’ll build a website that drives results, enhances your
                      credibility, and propels your career to new heights. </p>
                    <div className='aboutButtonFlex'>
                      <div style={{display: 'flex', gap: '0.6rem'}}>
                      {socialLinks.map((item) => (
                        <HoverButton link={item.url} variant="round-ghost" icon={item.icon}/>
                      )
                    )}
                    </div>
                    <div className="aboutButtonIcon">
                        <HoverButton link={'/contact'} variant="arrow-white" title="GET IN TOUCH"/>
                    </div>
                    </div>
                </div>
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default About
