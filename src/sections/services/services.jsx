import servicesHeader from '../../assets/servicesHeader.webp'
import './services.css'
import { analyticsData, servicesData } from './data'
import HoverButton from './../../components/hoverButton/hoverButton';
import BasicHeader from '../../components/basicHeader/basicHeader';

const Services = () => {
  return (
    <div>
    <div className='defaultHeader flexColumn'>
      <h3 className="gradientBackground">SERVICES</h3>
      <h1>Unlock Your <br/> Website's Potential</h1>
      <p>Maximize your website's capabilities and reach its<br/>full potential with our services.</p>
      <img src={servicesHeader} alt="services header" />
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
      <div className='servicesList'>
        {servicesData.map((service) => (
          <div className='servicesListFlex'>
            <BasicHeader>
              <h2>{service.title}</h2>
              <h3>{service.subTitle}</h3>
              <div style={{paddingTop: '1rem'}}>
              <HoverButton link={'/contact'} title={<h3>GET IN TOUCH</h3>} variant="arrow-black"/>
              </div>
            </BasicHeader>
            <div>
              {service.description}
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services
