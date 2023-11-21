import React from "react";
import profilePic from './../assets/profile-pic.jpg';
import linkedin from './../assets/linkedin.png';
import github from './../assets/github.png';
import resume from './../assets/resume.pdf';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Sameer Khan Profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sameer Khan</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resume)}
          >
            Download CV
          </button>
          <a href="#contact">
            <button className="btn btn-color-1">
                Contact Info
            </button>
          </a>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/sameerkhan21/" target="_blank" rel="noreferrer">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a href="https://github.com/smrkhan21" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="My Github profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
