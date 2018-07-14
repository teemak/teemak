import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    
    render() {
        return (
                <div className="nav">
                    <Link to="/portfolio">
                        <div className="sphere sphere1">
                            <p>PORTFOLIO</p>
                        </div>
                    </Link>
                    <Link to="/social">
                        <div className="sphere sphere2">
                            <p>SOCIAL</p>
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="sphere  sphere3">
                            <p>CONTACT</p>
                        </div>
                    </Link>
                </div>           
                );
    }
}

export default Nav;
