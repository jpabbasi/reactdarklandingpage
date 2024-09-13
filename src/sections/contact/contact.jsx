import './contact.css'
import HoverButton from './../../components/hoverButton/hoverButton';
import { TbCopy } from "react-icons/tb";
import { socialLinks } from './../../components/footer/data';
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { useState } from 'react';
import { z } from 'zod';
import { TbMailFast } from "react-icons/tb";


const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => { 
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e, form) => {
    e.preventDefault();
  
    if (!form) {
      console.error('Form element is not found.');
      return;
    }
  
    const formData = new FormData(form); // Constrói FormData com o formulário correto
  
    // Sua lógica de validação e submissão vai aqui
    const data = Object.fromEntries(formData.entries());
  
    // Validação com Zod
    const validation = ContactSchema.safeParse(data);
  
    if (!validation.success) {
      const errorMessages = validation.error.format();
      setErrors(errorMessages);
    } else {
      setErrors({});
      form.submit(); // Submete o formulário se todos os campos estiverem válidos

      // Exibir a mensagem de sucesso
      const successMessage = document.getElementById('successMessage');
      successMessage.classList.add('show');

      // Ocultar a mensagem após 5 segundos
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 8000);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('me@pedroabbasi.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Remove o subtítulo após 2 segundos
    }).catch((err) => {
      console.error('Erro ao copiar texto: ', err);
    });
  };

  return (
    <div>
    <div style={{paddingBottom: '3rem'}} className='defaultHeader flexColumn'>
    <h3 className='gradientBackground'>GET IN TOUCH</h3>
      <p>Your website is an extension of your brand, and I’m here to help you make it the best it can be.</p>
    </div>
    
    <div className='defaultPadding'>
        <div className="contactCardsFlex">
          <div className="primaryCard">
            <div className="contactForm">
              <p>CONTACT</p>
              <h1>Let’s <b className='gradientBackground'>get in touch</b>.</h1>
              <form
              className="contactFormElements"
              action={`https://formspree.io/f/${process.env.FORMSPREE_ID}`}
              method="POST"
              noValidate 
              target="_blank" 
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name._errors[0]}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email._errors[0]}</span>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className={errors.phone ? 'error' : ''}
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className={`messageTextarea ${errors.message ? 'error' : ''}`}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message._errors[0]}</span>}

              <HoverButton
                onClick={handleSubmit}
                style={{ width: '100%' }}
                variant="white submit"
                title="SEND MESSAGE"
              />
            </form>
            <div id="successMessage" class="success-message">
              <TbMailFast/> Your message has been sent successfully!
            </div>
            </div>
          </div>

          <div className="stackedCardsContainer">
        <div className="secondaryCard">
          <div className="connectCard">
            <div>
              <p>CONNECT</p>
            </div>
            <div className="buttonsContainer">
                <HoverButton icon={<TbCopy/>} style={{width: '100%'}}  variant='copy longButton white' onClick={handleCopyClick}  title={copied ? 'COPIED!' : 'me@pedroabbasi.com'}/>
              <HoverButton style={{width: '100%'}} link='https://calendar.app.google/bQeiF6vjPLQy3UBBA'  variant='black-ghost' title='BOOK A CALL'/>
              <div className='zapButtons'>
              <HoverButton icon={<TbBrandWhatsapp/>} style={{width: '100%'}}  variant='zap' link='https://wa.me/+5545984284413' title='WHATSAPP'/>
              <HoverButton icon={<TbBrandTelegram/>} style={{width: '100%'}}  variant='telegram' link='https://t.me/pedroabbasi' title='TELEGRAM'/>
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
