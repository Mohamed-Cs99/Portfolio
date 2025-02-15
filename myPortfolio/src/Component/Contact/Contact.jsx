import React from 'react';
import style from './Contact.module.css';
import Form from '../Form/Form';
import outlookIcon from '../../assets/outlook.jpg'; // Add the path to your Outlook icon image
import gmailIcon from '../../assets/gmail.png'; // Add the path to your Gmail icon image

export default function Contact() {
  return (
    <div id='contact' className={`${style.contactWrapper} font-sans font-semibold`}>
      <div className={`${style.headerWrapper} relative flex justify-center items-center py-5`}>
        <h2 className={`${style.headerMain} text-4xl md:text-5xl lg:text-6xl`}>Contact Me</h2>
        <h3 className={`${style.headerSub} text-6xl md:text-8xl lg:text-9xl`}>Contact Me</h3>
      </div>

      <div className={style.container}>
        <div className={style.contactInfo}>
          <h2 className={style.contactHeader}>Let's Get in Touch!</h2>

          <div className={style.infoItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Address</h3>
              <p> Cairo, Egypt</p>
            </div>
          </div>

          <div className={style.infoItem}>
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+201009516329</p>
            </div>
          </div>

          <div className={style.infoItem}>
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p className={style.iconLinks}>
                <a href="mailto:mohamed2017170366@outlook.com" className={style.contactLink}>
                  <img src={outlookIcon} alt="Outlook Icon" className={`${style.outlookIcon} object-cover`} />
                </a>
                <a href="mailto:mohammedmaher207@gmail.com" className={`${style.contactLink} object-cover`}>
                  <img src={gmailIcon} alt="Gmail Icon" className={style.gmailIcon} />
                </a>
              </p>
            </div>
          </div>

          <h4 className={`text-start text-2xl `}>Connect with Us</h4>

          <div className={style.socialLinks}>
            <a href="https://www.linkedin.com/in/mohamed-maher-a6a2b8177/" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mohamed-Cs99" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008417509368" target="_blank" rel="noopener noreferrer" className={style.contactLink}>
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>


        <div className={style.contactForm}>
          <h2 className={`${style.sectionTitle} py-2`}>We Value Your Feedback!</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
