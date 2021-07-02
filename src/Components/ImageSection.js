import React from 'react';
import about from '../img/about.jpg';
import resume from '../img/Vaccine.pdf'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
            <h4>
                I am <span> Shrinidhi</span>
            </h4>
                <p className="about-text">
                Working at Mindtree Ltd. from the past last 2 years. I mainly focus on
                web development. Completed my Bachelor of Engineering at S.D.M. College.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Shrinidhi Shetti</p>
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: Kannada, Hindi, English</p>
                        <p>: Keshwapur, Hubli, Karnataka</p>
                        <p>: India</p>
                    </div>
                </div>
                <a href="" className="btn" download>Download Cv</a>
            </div>
        </div>
    )
}

export default ImageSection;
