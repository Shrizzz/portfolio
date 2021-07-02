import React from 'react';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                Hi, I am
          <span> Shrinidhi Shetti.</span>
                </h1>
                <p className="h-sub-text">
                Full stack developer, designer and creative person. I have experience of almost 2 years in Software Developement. Currently Working at Mindtree Ltd.
                </p>
                <br/>
                <p className="h-sub-text">
                    Connect me on
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/shrinidhishetti" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/Shrizzz" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.instagram.com/shrinidhizzz/" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
