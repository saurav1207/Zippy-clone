import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="pricing">
        <div className="pricing-top">
        <div class="title">Pricing Table</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, earum placeat quae quaerat quidem corporis?
          </p>
        </div>

        <div className="pricing-items">
          <div className="pricing-item" data-aos="zoom-in">
            <h3>Standard Plan</h3>
            <p>Perfect for teams smaller than 10</p>

            <div className="pricingItem-price">
              <span className="dollar">$</span>
              <span className="price">16</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricingItem-info">
              <li>- 1GB of Space</li>
              <li>- Support at $25/hour</li>
              <li>- Small social media</li>
            </ul>

            <button>Choose your plan</button>
          </div>

          <div className="pricing-item" data-aos="zoom-in">
            <h3>Business Plan</h3>
            <p>Perfect for teams smaller than 10</p>

            <div className="pricingItem-price">
              <span className="dollar">$</span>
              <span className="price">195</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricingItem-info">
              <li>- 1GB of Space</li>
              <li>- Support at $25/hour</li>
              <li>- Small social media</li>
            </ul>

            <button>Choose your plan</button>
          </div>

          <div className="pricing-item" data-aos="zoom-in">
            <h3>Premium Plan</h3>
            <p>Perfect for teams smaller than 10</p>

            <div className="pricingItem-price">
              <span className="dollar">$</span>
              <span className="price">245</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricingItem-info">
              <li>- 1GB of Space</li>
              <li>- Support at $25/hour</li>
              <li>- Small social media</li>
            </ul>

            <button>Choose your plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
