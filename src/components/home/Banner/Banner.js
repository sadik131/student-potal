import React from 'react';
import banner from '../../../images/banner.jpg';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='overly'>
            <img src={banner} alt="" />
            <div className='banner-text'>
                <p>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful</p>
                <button>Read More</button>
            </div>
            </div>
        </div>
    );
}

export default Banner;
