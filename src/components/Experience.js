import React from "react";
import checkmark from "./../assets/checkmark.png";
import arrow from "./../assets/arrow.png";

const Experience = () => {
  const frontendExperience = [
    { id: 1, language: "JavaScript", level: "Experienced" },
    { id: 2, language: "React", level: "Intermediate" },
    { id: 3, language: "Redux", level: "Intermediate" },
    { id: 4, language: "HTML", level: "Experienced" },
    { id: 5, language: "CSS", level: "Experienced" },
    { id: 6, language: "Tailwind CSS", level: "Intermediate" },
  ];
  const backendExperience = [
    { id: 7, language: "Magento", level: "Intermediate" },
    { id: 8, language: "PHP/MySQL", level: "Basic" },
    { id: 9, language: "REST API/GraphQl", level: "Intermediate" },
    { id: 10, language: "Docker", level: "Basic" },
    { id: 11, language: "Git & Github", level: "Intermediate" },
    { id: 12, language: "AWS", level: "Basic" },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendExperience.map((experience) => (
                <article id={experience.id}>
                  <img src={checkmark} alt="Experience icon" className="checkmarkIcon icon"/>
                  <div>
                    <h3>{experience.language}</h3>
                    <p>{experience.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendExperience.map((experience) => (
                <article id={experience.id}>
                  <img src={checkmark} alt="Experience icon" className="checkmarkIcon icon" />
                  <div>
                    <h3>{experience.language}</h3>
                    <p>{experience.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>
  );
};

export default Experience;
