import React from 'react';
import style from './Projects.module.css';
import pr1Image from '../../assets/ecommerce.webp';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Icons for buttons

const projects = [
  {
    title: 'Trendy Shopping',
    description: 'An e-commerce platform with a responsive design.',
    image: pr1Image,
    tags: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://trendyshopping.netlify.app/',
    githubLink: 'https://github.com/Mohamed-Cs99/eShop-react',
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with a responsive design.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'Redux', 'Firebase'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project 3',
    description: 'A portfolio website showcasing my skills and projects.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    githubLink: '#',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className={style.projectsSection}>
      <div className={`${style.headerWrapper} relative flex justify-center items-center py-5`}>
        <h2 className={`${style.headerMain} text-4xl md:text-5xl lg:text-6xl`}>Projects</h2>
        <h3 className={`${style.headerSub} text-6xl md:text-8xl lg:text-9xl`}>Projects</h3>
      </div>

      <div className={style.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <div className={style.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={style.projectContent}>
              <h3 className={style.projectTitle}>{project.title}</h3>
              <p className={style.projectDescription}>{project.description}</p>
              <h4 className={style.toolsHeader}>Tools </h4>
              <div className={style.projectTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={style.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={style.projectLinks}>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${style.link} ${style.demoLink}`}
                >
                  <FaExternalLinkAlt className={style.icon} /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${style.link} ${style.githubLink}`}
                >
                  <FaGithub className={style.icon} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}