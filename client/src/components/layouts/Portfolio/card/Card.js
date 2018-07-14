import React from 'react';
import './Card.css';

const Card = ({ title, description, github, demo }) => {
    return (
        <div className="portfolio-card">
            <div className="card-container">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="button-container">
                <a href={github}><button>REPO</button></a>
                <a href={demo}><button>DEMO</button></a>
            </div>
        </div>
    );
};

export default Card;
