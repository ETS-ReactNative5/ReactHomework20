import React, { useState } from 'react';
import './contact.css';
import { validateEmail } from '../../../utils/helpers.js';


export default function Contact() {


  return (
    <section id='contact'>
     <h1>Contact Me</h1>
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
