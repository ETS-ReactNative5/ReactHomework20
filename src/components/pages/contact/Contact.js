import React from 'react';
import './contact.css';
// import {MdOutlineMail} from 'react-icons/md';

export default function Contact() {
  return (
    <section id='contact'>
     <h1>Contact Me</h1>
     {/* <div className="contact options">
        <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>jtiwana@hotmail.com</h5>
          <a href='mailto:jtiwana@hotmail.com' target='_blank' rel="noreferrer"> Send a message</a>
        </article>
        </div> */}
    <div className='container contact__container'>
      <form action="">
      <input type='text' name='name' placeholder='Name' required /> 
      <input type='email' name='email' placeholder='Email' required /> 
      <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>

    </div>


    </section>
  );
}
