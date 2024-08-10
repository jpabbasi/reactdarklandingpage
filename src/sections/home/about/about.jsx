import './about.css'
import aboutImage from '../../../assets/aboutImage.avif'
import HoverButton from './../../../components/hoverButton/hoverButton';

const About = () => {
  return (
    <div className='about'>
        <div className='innerAbout'>
            <img src={aboutImage} alt={`portrait`} className="homeImage" />
                <div className='titleFlex'>
                    <h1>Transform your digital presence, elevate your career</h1>
                    <p>Your website is more than just an online presence;
                      it’s the cornerstone of your brand's success.
                      Allow me to craft a digital experience that not only
                      mirrors your unique vision but also positions you as
                      a leader in your industry. With my specialized expertise,
                      I’ll build a website that drives results, enhances your
                      credibility, and propels your career to new heights. </p>
                    <div className='aboutButton'>
                    <HoverButton variant="arrow-white" title="ABOUT ME"/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
