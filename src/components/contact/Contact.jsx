import './contact.css'
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8tyrjfm', 'template_3100qme', form.current, 'zyR7xA1RIutW_lYr2')
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ahmadparvej58@gmail.com</h5>
            <a href="mailto:ahmadparvej58@gmail.com" target="_blank">Send a messege</a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon"/>
            <h4>Twitter</h4>
            <h5>codemagzine</h5>
            <a href="https://twitter.com/codemagzine" target="_blank">Send a messege</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" id="email" placeholder="Your Email" required />
          <textarea name="message" id="message" rows="7" placeholder="Your message" required></textarea>
          <input type="submit"className="btn btn-primary" value="Send Message"/>
        </form>
      </div>
    </section>
  )
}

export default Contact