import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9t285gg', 'template_jtjlmlm', form.current, 'jTQm_5-CfwBO_GMvT')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
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
            </form>
        </div>
    </section>
  )
}

export default Contact;