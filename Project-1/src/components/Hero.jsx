import React from 'react';
import './Hero.css';
import amazonIcon from '../../public/images/amazon.png';
import flipkartIcon from '../../public/images/flipkart.png';
import heroImage from '../../public/images/hero-image.png';

const Hero = () => {
    return (
        <main className='hero-container'>

            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESRVER THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                    <div className='brand-icons'>
                        <img src={amazonIcon} alt='amazon' />
                        <img src={flipkartIcon} alt='flipkart' />
                    </div>
                </div>
            </div>
            <div className='hero-logo'>
                <img src={heroImage} alt="heroImage" />
            </div>

        </main>
    )
}

export default Hero