import React from "react";
import aboutPic from "./../assets/About.png";
import experience from "./../assets/experience.png";
import education from "./../assets/education.png";
import arrow from "./../assets/arrow.png";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                4+ years <br />
                Software Development
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.Tech Bachelors Degree
                <br />
              </p>
            </div>
          </div>
          <div className="text-container">
          <p>
              I'm an experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in web technologies such as React, JavaScript, Magento, PHP, MySQL, HTML, CSS, Redux, RestAPIs, GraphQL, Docker & AWS. Proficient in developing ecommerce web applications and adept at adapting quickly to new needs and policies. With a strong track record, I design and develop web
              applications that provide exceptional user experiences.
              Adaptability enables me to swiftly respond to changing
              requirements and policies, ensuring project success. Committed to
              staying updated with the latest web development trends, I bring
              valuable expertise to any team or project.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
};

export default About;
