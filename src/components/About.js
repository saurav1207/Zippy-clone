import React from 'react';
import '../styles/About.css';

import dea from '../assets/Data extraction-amico.png';
import bell from '../assets/bell.png';
import msg from '../assets/msg.png';
import box from '../assets/box.png';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">Welcome to Zippy</div>
      <div className="about-top">
        <div className="about-left" data-aos="zoom-in">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque velit iure! Magni quos deserunt
            aspernatur dolorum. Saepe laudantium est assumenda asperiores delectus quos accusamus perferendis
            quo tempora.
          </p>
        </div>
        <div className="about-right" data-aos="zoom-in">
          <img src={dea} alt="about" />
        </div>
      </div>
      <div className="aboutBox">
        <div className="aboutCard" data-aos="zoom-in">
          <div className="about-icon">
            <img src={bell} alt="" />
          </div>
          <h5>Lorem Ipsum</h5>
          <div className="pra">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsa laudantium provident
              illum, est iusto! Odio unde atque quibusdam in velit esse aut accusantium.
            </p>
            <p style={{ textAlign: 'center' }}>
              <a href="#" className="button">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div className="aboutCard" data-aos="zoom-in">
          <div className="about-icon">
            <img src={msg} alt="" />
          </div>
          <h5>Lorem Ipsum</h5>
          <div className="pra">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsa laudantium provident
              illum, est iusto! Odio unde atque quibusdam in velit esse aut accusantium.
            </p>
            <p style={{ textAlign: 'center' }}>
              <a href="#" className="button">
                Read More
              </a>
            </p>
          </div>
        </div>

        <div className="aboutCard" data-aos="zoom-in">
          <div className="about-icon">
            <img src={box} alt="" />
          </div>
          <h5>Lorem Ipsum</h5>
          <div className="pra">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ipsa laudantium provident
              illum, est iusto! Odio unde atque quibusdam in velit esse aut accusantium.
            </p>
            <p style={{ textAlign: 'center' }}>
              <a href="#" className="button">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
