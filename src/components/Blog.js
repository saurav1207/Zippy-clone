import React from 'react';
import '../styles/Blog.css';

import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog-heading">
        <div className="title">Our Blog</div>
      </div>

      <div className="blog-container">
        <div className="blog-box" data-aos="zoom-in">
          <div className="blog-img">
            <img src={b1} alt="" />
          </div>

          <div className="blog-text">
            <span>8 July 2022 / Web Developer</span>
            <a href="#" className="blog-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facilis!
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="blog-box" data-aos="zoom-in">
          <div className="blog-img">
            <img src={b2} alt="" />
          </div>

          <div className="blog-text">
            <span>8 July 2022 / Web Developer</span>
            <a href="#" className="blog-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facilis!
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="blog-box" data-aos="zoom-in">
          <div className="blog-img">
            <img src={b3} alt="" />
          </div>

          <div className="blog-text">
            <span>8 July 2022 / Web Developer</span>
            <a href="#" className="blog-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, facilis!
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, minus neque ducimus earum odio?
              Perferendis recusandae quidem non necessitatibus.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;