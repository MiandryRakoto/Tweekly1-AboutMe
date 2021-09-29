import React from 'react';
import Navigation from '../component/Navigation';

const Accueil = () => {
    return (
        <div className="home">
          <Navigation />
          <div className="homeContent">
            <div className="content">
              <h1>Miandry Rakotoarivelo IMTICIA3 N12</h1>
              <h2>Développeur Informatique</h2>
              <div className="pdf">
                <a href="./media/CV.pdf" target="_blank">
                  Télécharger CV
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Accueil;