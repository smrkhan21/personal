import React from "react";
import Project1 from "./../assets/project-1.png";
import Project2 from "./../assets/project-2.png";
import Project3 from "./../assets/project-3.png";
import Project4 from "./../assets/project-4.png";
import Project5 from "./../assets/project-5.png";
import Project2_2 from "./../assets/project-2_2.png";
import arrow from "./../assets/arrow.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Project1,
      name: "Youtube Clone",
      githubLink: "https://github.com/smrkhan21/youtube-clone",
      demoLink: "https://v1-youtube.netlify.app/",
    },
    {
      id: 2,
      src: Project2,
      name: "Crypto App",
      githubLink: "https://github.com/smrkhan21/cryptoapp",
      demoLink: "https://crypto-currency-hub.netlify.app/",
    },
    {
      id: 3,
      src: Project3,
      name: "Shopping Cart",
      githubLink: "https://github.com/smrkhan21/shoppingcart",
      demoLink: "https://escart.netlify.app/",
    },
    {
      id: 4,
      src: Project4,
      name: "Magic Memory Game",
      githubLink: "https://github.com/smrkhan21/magic-memory",
      demoLink: "https://magicmemory-game.netlify.app/",
    },
    {
      id: 5,
      src: Project5,
      name: "Landing Page",
      githubLink: "https://github.com/smrkhan21/landingpage",
      demoLink: "https://v1-onepage.netlify.app/",
    },
    { id: 6, src: Project2_2, name: "Project 6", githubLink: "#", demoLink: "#" },
  ];
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects && projects.map((project) => (
              <div key={project.id} className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project.src}
                    alt="Project 1"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  {project.name}
                </h2>
                <div className="btn-container">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick="location.href='./#contact'"
      />
    </section>
  );
};

export default Projects;
