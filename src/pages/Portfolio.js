import React from 'react';
import Navigation from '../component/Navigation';
import ProjectList from '../component/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <ProjectList/>
        </div>
    );
};

export default Portfolio;