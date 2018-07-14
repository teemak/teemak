import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
                <div className="social-container">
                    <ul className="social-link-list">
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">Github</p>
                            </a>
                        </li>
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">YouTube</p>
                            </a>
                        </li>
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">Medium</p>
                            </a>
                        </li>
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">Scotch</p>
                            </a>
                        </li>
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">Blog</p>
                            </a>
                        </li>
                        <li>
                            <a className="link-style" href="/">
                                <img className="logo" src={"https://png.icons8.com/nolan/50/9b59b6/github.png"} alt="logo"/>
                                <p className="link">Github</p>
                            </a>
                        </li>
                    </ul>
                </div>    
                );
    }
}

export default Social;
