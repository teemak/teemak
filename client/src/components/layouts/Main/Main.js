import React, { Component } from 'react';

import Nav from './Nav/Nav';
import Meta from './Meta/Meta';
import './Main.css';

class Main extends Component {

    render() {
        return ( 
            <div id="grid-container">
            {/*<video id="background-video" loop muted autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>*/}
                
                <Meta />
                <div className="intro border">
                        <h1>TEE MAK</h1>
                        <p className="roboto">
                            I'm the letter after s. Golfers find me when they need time. 
                        </p>
                        <p className="roboto">
                            My website was built using React. It is best experienced
                            with a desktop display but can also be viewed on mobile
                            devices.
                        </p>
                        <p className="roboto">
                            Click on the contact link and leave me a message.
                        </p>
                </div>

                <div className="barcode">
                    <p>CONTACT</p>
                    <p>954-707-9653</p>
                    <p>bunth667@gmail.com</p>
                </div>

                <Nav />
                
            </div> 

            );
    }
}
export default Main;
