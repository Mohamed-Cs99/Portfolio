import React from 'react';
import style from './Skills.module.css';

export default function Skills() {
  const skills = [
    // Frontend Skills
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Redux', icon: 'fab fa-redo' },
    { name: 'Next.js', icon: 'fas fa-code' }, 
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
    { name: 'Performance Optimization', icon: 'fas fa-tachometer-alt' },
    { name: 'SASS/SCSS', icon: 'fab fa-sass' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'Git', icon: 'fab fa-git' },
    // { name: 'Agile Methodologies', icon: 'fas fa-sprint' },
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'Problem Solving', icon: 'fas fa-brain'}
    // .NET Backend Skills
    // { name: '.NET Core', icon: 'fab fa-microsoft' },
    // { name: 'C#', icon: 'fas fa-code' },
    // { name: 'ASP.NET', icon: 'fab fa-microsoft' },
    // { name: 'Entity Framework', icon: 'fas fa-database' },
    // { name: 'REST APIs', icon: 'fas fa-exchange-alt' },
    // { name: 'SQL Server', icon: 'fas fa-database' },
    // { name: 'Azure', icon: 'fab fa-microsoft' },
  ];

  return (
    <div id='skills' className={`${style.skillsWrapper} py-5`}>
      <div className={`${style.headerWrapper} relative flex justify-center items-center py-5`}>
        <h2 className={`${style.headerMain} text-4xl md:text-5xl lg:text-6xl`}>Skills</h2>
        <h3 className={`${style.headerSub} text-6xl md:text-8xl lg:text-9xl`}>Skills</h3>
      </div>
      <div className={`${style.skillsContainer} ${style.container} px-4 md:px-8 lg:px-16`}>
        {skills.map((skill, index) => (
          <div key={index} className={style.skillItem}>
            <i className={`${skill.icon} ${style.skillIcon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
