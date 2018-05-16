import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
                <div className="portfolio-container">
                    <ul className="portfolio-items">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                        <li>FRONT END</li>
                        <li>FULL STACK</li>
                        <li>Games</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Mobile</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                        <li>FRONT END</li>
                        <li>FULL STACK</li>
                        <li>Games</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Mobile</li>
                        <li>LAST</li>
                    </ul>
                    <div className="portfolio-overview">
                        <div className="portfolio-overview-card">
                            <h1 className="portfolio-overview-card-title">React</h1>
                            <img src={'http://placehold.it/400x200'} alt="project-screenshot"/>
                            <div className="portfolio-overview-card-description">
                                <p>
                                    This is a simple to-do list app made using React.
                                    Connected to a Firebase Server.
                                    Complete CRUD functionality.
                                </p>

                                <hr />

                                <p>STACK</p>
                                    <span className="logos">
                                        <img src={"https://png.icons8.com/ios/50/9b59b6/react-native.png"} alt="react-logo" />
                                        <img src={"https://png.icons8.com/nolan/50/9b59b6/google-plus.png"} alt="firebase-logo" />
                                    </span>
                                <div className="portfolio-overview-card-a">
                                    <a href="/">Demo</a>
                                    <a href="/">Github</a>
                                    <a href="/">YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
};

export default Portfolio;
