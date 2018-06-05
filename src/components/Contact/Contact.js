import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component {

    
    prevent = (event) => {
        event.preventDefault();
        
        let db = 'https://teemakwebsite.firebaseio.com/';
        
        const message = { 
            name: 'Tee',
            message: 'You are hired!'
        };

        axios.post(`${db}messages.json`, message)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };

    render() {
        return (
                    <div className="contact-container">
                        
                        <div className="form-container">
                            <form className="contact-form">
                                <label>Name</label>
                                <input type="text" />
                                
                                <label>Message</label>
                                <textarea />

                                <button onClick={this.prevent}>SEND</button>
                            </form>

                            <div className="bird-container">
                            {/*<h1>IMG of bird and clouds following input selector</h1>*/}
                                <div className="bird left-eye"></div>
                                <div className="bird right-eye"></div>
                                <div className="bird beak"></div>
                                <div className="bird body"></div>
                                <div className="bird left-wing"></div>
                                <div className="bird right-wing"></div>
                                <div className="bird left-foot"></div>
                                <div className="bird right-foot"></div>
                            </div>

                        </div>

                    </div>
                );
    }
};

export default Contact;
