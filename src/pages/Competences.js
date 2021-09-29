import React from 'react';
import Autres from '../component/competences/Autres';
import Exper from '../component/competences/Exper';
import Langages from '../component/competences/Langages';
import Loisirs from '../component/competences/Loisirs';
import Navigation from '../component/Navigation';

const Competences = () => {
    return (
        <div className="competences">
            <Navigation/>
            <div className="competencesContent">
                <Langages />
                <Exper />
                <Autres />
                <Loisirs />
                
            </div>
        </div>
    );
};

export default Competences;