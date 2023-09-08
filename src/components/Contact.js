import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">Contact Us</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repudiandae natus sapiente dolor est error
          officiis enim voluptates ratione placeat.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo" data-aos="zoom-in">
          <div className="box">
            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa-solid fa-phone"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>(+91) XXXXX-12345</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>enquiry@zipppy.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm" data-aos="zoom-in">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="name" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required="required"></textarea>
              <span>Type your Message</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
