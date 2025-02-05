import React from 'react';
import personal from '../../assets/personal.jpeg';
import backgroundImage from '../../assets/Portfolio1.jpg';
import ResumeBtn from '../ResumeBtn/ResumeBtn';

export default function Home() {
  return (
    <>
      <section id='about' className="min-h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="home-portfolio font-serif container mx-auto h-full flex flex-col justify-center px-4">
          <div className="row bg-black bg-opacity-50 flex flex-wrap md:flex-nowrap items-center p-5 rounded-lg shadow-lg h-full md:h-auto">
            <div className="w-full md:w-1/4 p-5 flex justify-center md:justify-start">
              <img src={personal} className="w-full max-w-xs rounded" alt="Mohammed Maher - Profile" />
            </div>
            <div className="w-full md:w-3/4 p-5 md:ml-5 flex flex-col justify-center text-center md:text-left items-center md:items-start">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">I'm Mohammed Maher <span className="animate-pulse">| Software Engineer</span></h1>
              <span className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-md">Frontend | React Developer</span>
              <p className="text-white font-semibold text-base md:text-lg leading-relaxed drop-shadow-sm">
                I'm a fresh graduate software engineer specializing in React development. With a strong foundation in front-end technologies, I am passionate about building user-friendly and dynamic web applications.
              </p>
              <ResumeBtn />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
