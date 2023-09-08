import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'; 

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'


const Navbar = () => {
    const [slidePosition, setSlidePosition] = useState(1);

    useEffect(() => {
        SlideShow(slidePosition);
    }, [slidePosition]);

    function plusSlides(n) {
        let newPosition = slidePosition + n;

        if (newPosition < 1) {
            newPosition = 3; 
        } else if (newPosition > 3) {
            newPosition = 1; 
        }

        setSlidePosition(newPosition);
    }

    function currentSlide(n) {
        setSlidePosition(n);
    }

    function SlideShow(n) {
        const slides = document.querySelectorAll(".Containers");
        const circles = document.querySelectorAll(".dots");

        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        circles.forEach((circle) => {
            circle.classList.remove("enable");
        });

        slides[slidePosition - 1].style.display = "block";
        circles[slidePosition - 1].classList.add("enable");
    }


    return (
        <header>
            <nav className="navbar">
                <div className="logo" id="home">
                    ZIPPY-CLONE
                </div>
                <ul className="nlist">
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="Carousel fade">
                <div className="Containers">
                    <img src={img1} alt="Image 1" style={{ width: '100%' }} />
                    <div className="Info">
                        <h1>One page promising to fill all your needs!!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            dolores.
                        </p>
                    </div>
                </div>

                <div className="Containers">
                    <img src={img2} alt="Image 2" style={{ width: '100%' }} />
                    <div className="Info">
                        <h1>One page promising to fill all your needs!!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            dolores.
                        </p>
                    </div>
                </div>

                <div className="Containers">
                    <img src={img3} alt="Image 3" style={{ width: '100%' }} />
                    <div className="Info">
                        <h1>One page promising to fill all your needs!!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                            dolores.
                        </p>
                    </div>
                </div>

               
                <a className="Back" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="forward" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br />
            
            <div style={{ textAlign: 'center' }}>
                <span className="dots" onClick={() => currentSlide(1)}></span>
                <span className="dots" onClick={() => currentSlide(2)}></span>
                <span className="dots" onClick={() => currentSlide(3)}></span>
            </div>
        </header>
    );
};

export default Navbar;
