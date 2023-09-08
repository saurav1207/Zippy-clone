import React from 'react';
import '../styles/Project.css';

import p1 from '../assets/Project1 (2).jpg'
import p2 from '../assets/pro1 (1).jpg'
import p3 from '../assets/Project1 (2).jpg'

const Project = () => {
  return (
    // Start Project
    <section id="projects">
      <div className="project-heading">
        <div className="title">Our Project</div>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, exercitationem.</p>

      <div className="project-container">
        <div className="project-box" data-aos="zoom-in">
          <div className="project-img">
            <img src={p1} alt="" />
          </div>

          <div className="project-text">
            <a href="#" className="blog-title">
              Lorem ipsum dolor
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <button className="pro-btn">Get From Here</button>
          </div>
        </div>
        <div className="project-box" data-aos="zoom-in">
          <div className="project-img">
            <img src={p2} alt="" />
          </div>

          <div className="project-text">
            <a href="#" className="blog-title">
              Lorem ipsum dolor
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <button className="pro-btn">Get From Here</button>
          </div>
        </div>
        <div className="project-box" data-aos="zoom-in">
          <div className="project-img">
            <img src={p3} alt="" />
          </div>

          <div className="project-text">
            <a href="#" className="blog-title">
              Lorem ipsum dolor
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <button className="pro-btn">Get From Here</button>
          </div>
        </div>
      </div>
    </section>
    // End Project
  );
};

export default Project;
