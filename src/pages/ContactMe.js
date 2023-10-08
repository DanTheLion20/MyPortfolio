import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareFacebook,faInstagram,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const openLinkInNewTab = (link) => {
        window.open(link, "_blank");
      };
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_op7yx6r', 'template_dao5ddb', form.current, 'v4oISPwlWBSrMP9vQ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className="title">Contact Me</h1>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Name' name='your_name' />
                <input type="email" className='email' placeholder='Email' name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Message'></textarea>
                <button className='submitBtn' type='submit' value="Send">Submit</button>
                <div className='links'>
                <div className="contact_icons " onClick={() => openLinkInNewTab("https://www.facebook.com/danphilip.perez/")}><FontAwesomeIcon icon={faSquareFacebook} /></div>
                <div className="contact_icons" onClick={() => openLinkInNewTab("https://www.instagram.com/kingdan0/")}><FontAwesomeIcon icon={faInstagram} /></div>
                <div className="contact_icons" onClick={() => openLinkInNewTab("https://www.linkedin.com/in/dan-philip-perez-a20948188/")}><FontAwesomeIcon icon={faLinkedin} /></div>
                <div className="contact_icons" onClick={() => openLinkInNewTab("https://github.com/DanTheLion20")}><FontAwesomeIcon icon={faGithub} /></div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;