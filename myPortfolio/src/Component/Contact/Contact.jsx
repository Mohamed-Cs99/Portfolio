import React from 'react';
import style from './Contact.module.css';
import Form from '../Form/Form';

export default function Contact() {
  return (
    <div className={`${style.contactWrapper} font-semibold`}>
      <div className={`${style.headerWrapper} relative flex justify-center items-center py-5`}>
        <h2 className={`${style.headerMain} text-4xl md:text-5xl lg:text-6xl`}>Contact Me</h2>
        <h3 className={`${style.headerSub} text-6xl md:text-8xl lg:text-9xl`}>contact me</h3>
      </div>
      
      <div className={style.container}>
        <div className={style.contactInfo}>
          <div className={style.infoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>Address</p>
              <p>123 Main Street, Cairo, Egypt</p>
            </div>
          </div>
          <div className={style.infoItem}>
            <i className="fas fa-phone"></i>
            <div>
              <p>Phone</p>
              <p>+201009516329</p>
            </div>
          </div>
          <div className={style.infoItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <p>Email</p>
              <p><a href="mailto:mohamed2017170366@outlook.com" className={style.contactLink}>mohamed2017170366@outlook.com</a></p>
            </div>
          </div>
          <h4 className={`text-start `}>Connect with Us</h4>
          <div className={style.socialLinks}>
            <a href="https://www.linkedin.com/in/mohamed-maher-a6a2b8177/" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mohamed-Cs99" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-github"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className={style.contactForm}>
          <h3 className={`${style.sectionTitle} py-2`}>Send Us a Message</h3>
          <Form/>
        </div>
      </div>
    </div>
  );
}
