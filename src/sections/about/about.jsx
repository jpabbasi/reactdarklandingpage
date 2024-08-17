import './about.css'
import {analyticsData} from '../services/data'
import {process, certData, voluntData} from './data'
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
        <h1>Shaping the Future <br/>of Digital Experiences</h1>
        <p>Bridging creativity and technology to craft your digital identity.</p>
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
          <h1>Crafting Strong Partnerships for Exceptional Results</h1>
          <p>I prioritize a collaborative process that centers on your goals, ensuring exceptional results and a strong, enduring partnership.</p>
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
                    <h3>{item.subtitle}</h3>
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
              {certData.map((item) => (
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
            <div className='howIWorkCard'>
              <Card className='flexColumn' fade={"fade-up"}>
              <h1>Volunteering</h1>
              <div>
              {voluntData.map((item) => (
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
              </Card>
            </div>
            {<Reviews/>}
            <div data-aos="fade-up" className='about'>
        <div className='innerAbout flexRow'>
            <img src={aboutImage} alt={`portrait`} className="homeImage" />
                <div className='titleFlex flexColumn'>
                    <h1 style={{color: 'var(--color-light)'}}>Innovative Front-End Engineer with a Strategic Vision</h1>
                    <h3>I'm Pedro Abbasi, a Front-End Engineer with a strong blend of technical expertise and creative insight.</h3>
                    <p>
                      With over seven years of experience in the tech industry, I’ve had the privilege of collaborating with
                      leading companies to enhance their digital platforms, streamline workflows, and drive innovation. My work
                      is characterized by a deep commitment to excellence, whether I’m architecting complex systems or designing
                      intuitive user interfaces.
                      </p>
                      <h3>
                      I believe in building strong partnerships and fostering collaboration.
                      My ability to bridge the gap between product management,
                      UX/UI design, and development has consistently proven valuable in every project
                      I undertake. I’m passionate about technology and dedicated to delivering results that exceed
                      expectations, making me a trusted leader in the field. Whether working on large-scale corporate
                      projects or personal initiatives, I’m driven by a desire to push boundaries and <i>create impactful digital experiences.</i> </h3>
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
