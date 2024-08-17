import './about.css'
import aboutImage from '../../../assets/portrait.jpg'
import HoverButton from './../../../components/hoverButton/hoverButton';

const About = () => {
  return (
    <div data-aos="fade-up" className='about'>
        <div className='innerAbout flexRow'>
            <img src={aboutImage} alt={`portrait`} className="homeImage" />
                <div className='titleFlex flexColumn'>
                    <h1 style={{color: 'var(--color-light)'}}>Lead the Future of Digital Innovation</h1>
                    <p>In today's competitive landscape, a website is more than just a digital footprint—it's
                      a strategic asset. I specialize in creating front-end solutions that not only align with
                      your brand's vision but also set industry standards. With a focus on innovation and technical
                      excellence, I am ready to drive impactful digital transformations within your organization,
                      positioning you at the forefront of your industry. </p>
                    <div className='aboutButton'>
                    <HoverButton link={'/about'} variant="arrow-white" title="ABOUT ME"/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
