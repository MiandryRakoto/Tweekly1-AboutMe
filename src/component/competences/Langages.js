import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Langages extends Component {
  state = {
    langages: [
        {id: 1, value: "Javascript", xp:1},
        {id: 2, value: "CSS", xp:1.7},
        {id: 3, value: "Python", xp:0.8}
    ],
    frameworks: [
        {id: 1, value: "React", xp:0.8},
        {id: 2, value: "Bootstrap", xp:0.4},
        {id: 3, value: "Sass", xp:0.7},
        {id: 3, value: "Django", xp:0.9}
    ]
  }  
    render() {
      let {langages, frameworks} = this.state;  
        return (
            <div className="langagesframeworks">
                <ProgressBar
                  langages={langages}
                  className="langagesDisplay"
                  title="Langages"
                />
                <ProgressBar
                  langages={frameworks}
                  title="Frameworks & Bibliothèques"
                  className="frameworksDisplay"
                  
                />
            </div>
        );
    }
}

export default Langages;