import React from 'react';
import './about.css';
const About = () => {
    return (
        <div className = 'page-container'>
    
            <h1 className = 'about-heading'>News Aggregator</h1>
            
            <p className = 'about-body'>
                Leveraging the <a className = 'about-link' href = 'https://newsapi.org/'>News API</a>, this project acts as a portal to the top news headlines from numerous sources around the world.
                This site is using the Developer Plan which limits total requests to 1000 per day, and a limit of 20 articles per request.   
            </p>
            
            <h2 className = 'about-sub-heading'>Technologies Used</h2>
            
            <div className = 'about-grid'>
                <div className = 'about-grid-element'>
                    <i className="fab fa-node-js"></i>
                    <p>Node JS</p>
                </div>
                
                <div className = 'about-grid-element'>
                    <i className="fab fa-react"></i>
                    <p>React</p>
                </div>
            </div>
            
            <h2 className = 'about-sub-heading'>Additional Packages</h2>
            
            <ul className = 'about-list'>
                <li>Redux</li>
                <li>React-Router</li>
                <li>Express</li>
                <li>Webpack</li>
            </ul>
          
            <a href = 'https://github.com/oliverbth05/NewsAggregator-Dev' className = 'about-link-icon'><i className="fab fa-github"></i></a>
            
        </div>
        )
}

export default About;