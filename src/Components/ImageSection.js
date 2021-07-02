import React from 'react';
import about from '../img/about.jpg';
import resume from '../img/Shrinidhi_Shetti_Resume.pdf'

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
                    <table>
                        <thead>
                        <tr>
                            <td className="left-section"><p>Full Name&nbsp;</p></td>
                            <td className="right-section"><p> Shrinidhi Shetti</p></td>
                        </tr>
                       
                        <tr>
                            <td className="left-section"><p>Age &nbsp;</p></td>
                            <td className="right-section"><p> 23</p></td>
                        </tr>
                        <tr>
                            <td className="left-section"><p>Nationality&nbsp;</p></td>
                            <td className="right-section"><p> Indian</p></td>
                        </tr>
                        <tr>
                            <td className="left-section"><p>Languages&nbsp;</p></td>
                            <td className="right-section"><p> Kannada, Hindi, English</p></td>
                        </tr>
                        <tr>
                            <td className="left-section"><p>Address&nbsp;</p></td>
                            <td className="right-section"><p> Hubli, Karnataka</p></td>
                        </tr>
                        <tr>
                            <td className="left-section"><p>Country&nbsp;</p></td>
                            <td className="right-section"><p> India</p></td>
                        </tr>
                        </thead>
                    </table>
                    {/* <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p> Shrinidhi Shetti</p>
                        <p> 23</p>
                        <p> Indian</p>
                        <p> Kannada, Hindi, English</p>
                        <p> Keshwapur, Hubli, Karnataka</p>
                        <p> India</p>
                    </div> */}
                </div>
                <a href={resume} className="btn" download>Download Cv</a>
            </div>
        </div>
    )
}

export default ImageSection;
