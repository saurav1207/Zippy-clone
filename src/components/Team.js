import React from 'react';
import '../styles/Team.css';

import t1 from '../assets/tw1 (1).jpg'
import t2 from '../assets/tw1 (8).jpg'
import t3 from '../assets/tw1 (2).jpg'
const Team = () => {
  return (
    <div>
      <div className="title" id="team">Our Zippy Team</div>
      <div className="team-row">
        <div className="team-member" data-aos="zoom-in">
          <img src={t1} alt="" />
          <h2>Dilma Rousseff</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
        <div className="team-member" data-aos="zoom-in">
          <img src={t2} alt="" />
          <h2>Malinda Gates</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
        <div className="team-member" data-aos="zoom-in">
          <img src={t3} alt="" />
          <h2>Chris Jones</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
