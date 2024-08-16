import './contact.css'
import HoverButton from './../../components/hoverButton/hoverButton';
import { TbCopy } from "react-icons/tb";
import { socialLinks } from './../../components/footer/data';
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";

const Contact = () => {
  return (
    <div>
    <div style={{paddingBottom: '3rem'}} className='defaultHeader flexColumn'>
    <h3 className='gradientBackground'>GET IN TOUCH</h3>
      <p>Your website is an extension of your brand,
        and I’m here to help you make it the best it can be. </p>
    </div>
    
    <div className='defaultPadding'>
        <div className="contactCardsFlex">
          <div className="primaryCard">
            <div className="contactForm">
              <p>CONTACT</p>
              <h1>Let’s get in touch.</h1>
              <form className="contactFormElements">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
              <textarea placeholder="Message" className="messageTextarea"></textarea>
              <HoverButton style={{width: '100%'}} variant='white' title='SEND MESSAGE'/>
            </form>
            </div>
          </div>

          <div className="stackedCardsContainer">
        <div className="secondaryCard">
          <div className="connectCard">
            <div>
              <p>CONNECT</p>
            </div>
            <div className="buttonsContainer">
                <HoverButton icon={<TbCopy/>} style={{width: '100%'}}  variant='longButton white' title='me@pedroabbasi.com'/>
              <HoverButton style={{width: '100%'}}  variant='ghost' title='BOOK A CALL'/>
              <div className='zapButtons'>
              <HoverButton icon={<TbBrandWhatsapp/>} style={{width: '100%'}}  variant='zap' title='WHATSAPP'/>
              <HoverButton icon={<TbBrandTelegram/>} style={{width: '100%'}}  variant='telegram' title='TELEGRAM'/>
              </div>
            </div>
          </div>
        </div>
        <div className="secondaryCard">
          <div className="connectCard">
            <div>
              <p>FOLLOW</p>
            </div>
            <div className="buttonsContainer">
              {socialLinks.map((social)=> (

              <HoverButton link={social.url} icon={social.icon} style={{width: '100%'}}  variant='longButton white' title={social.name}/>
              ))}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Contact
