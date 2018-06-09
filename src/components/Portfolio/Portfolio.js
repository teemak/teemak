import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    state = {
        img: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png",
        "https://d2vqpl3tx84ay5.cloudfront.net/tumblr_lsus01g1ik1qies3uo1_400.png",
        "https://cdn-images-1.medium.com/max/1200/1*T1b83o47E1AI0lTpwzHVvA.png",
        "https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-logo.png",
        "https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg",
        "https://cdn.nucuta.com/2017/09/digitalocean_logo-841x349.jpg",
        "https://tr3.cbsistatic.com/hub/i/r/2016/07/14/9b8f5520-b483-4159-8cee-c036485574e7/resize/770x/76f6684ad79e06c14ac4c99bbcc7485e/nginxhero.jpg"
        ]

    }

    render() {
        return (
                <div className="portfolio-container">
                    
                    <ul className="portfolio-items">
                        <li>NEXTOUR</li>
                        <li>BASE</li>
                        <li>REALTY</li>
                    </ul>
                    
                    <div className="arrow-container">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>

                    <div className="portfolio-card">

                    </div>

                    <div className="icons-container">
                        <div className="icon">
                            <img class="image" src={this.state.img[6]} alt="framework-icons" />
                        </div>
                        <div className="icon">
                            <img class="image" src={this.state.img[7]} alt="framework-icons" />
                        </div>
                        <div className="icon">
                            <img class="image" src={this.state.img[2]} alt="framework-icons" />
                        </div>
                        <div className="icon">
                            <img class="image" src={this.state.img[3]} alt="framework-icons" />
                        </div>
                        <div className="icon">
                            <img class="image" src={this.state.img[4]} alt="framework-icons" />
                        </div>
                        <div className="icon">
                            <img class="image" src={this.state.img[5]} alt="framework-icons" />
                        </div>
                    </div>

                </div>
                );
    }
};

export default Portfolio;
