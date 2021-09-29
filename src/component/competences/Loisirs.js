import React from 'react';

const Loisirs = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-basketball-ball"></i>
                    <span>Basket-ball</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>Crypto-monaies</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-chess-king"></i>
                    <span>Jeu d'Echec</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-swimming-pool"></i>
                    <span>Natation</span>
                </li>
            </ul>
        </div>
    );
};

export default Loisirs;