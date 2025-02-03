import React from 'react';
import style from './Footer.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/mohamed-maher-a6a2b8177/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://github.com/Mohamed-Cs99" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-500" />
            </a>
            {/* <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a> */}
          </div>
          <div>
            <p className="text-center">© 2025 Mohammed Maher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
