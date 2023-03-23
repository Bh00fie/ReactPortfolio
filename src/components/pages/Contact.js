import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactUs.css';

function Contact(props) {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo1kije', 'template_19vdx6m', form.current, 'iBYhqT4UJAXbXb877')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    setIsEmailSent(false);
  };

  return (
    <div>
    <div className='contactContainer'>
      {isEmailSent ? (
        <div className='confirmationMessage'>
          <p>Email sent successfully! ✅</p>
          <button className="sendButtonAgain" onClick={resetForm}>Send another email</button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h1>Get in touch with us:</h1>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' className='sendButton' />
        </form>
      )}
    </div>
              <a className="btn btn-primary btn-lg" href="images/Abhinandan Thour CV 2023.pdf" download="Abhinandan Thour CV" role="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
          <h2 id="button-text">Download my Resume</h2> 
      </a>

      <div className="socials">
        <p>Get in touch with me at: Bh00fie@gmail.com</p>
        <a href="https://github.com/Bh00fie"> GitHub</a>
        <a href="https://www.linkedin.com/in/abhinandan-thour-42359b193/"> LinkedIn</a>
      </div>
   </div>
  );
}

export default Contact;