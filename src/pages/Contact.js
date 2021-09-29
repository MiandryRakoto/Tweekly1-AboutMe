import React from 'react';
import Navigation from '../component/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Antananarivo-Ivandry</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0342473456">
                                    <span className="clickInput" 
                                    onClick={() =>{ alert('Téléphone Copié !');
                                    }}>0342473456</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <CopyToClipboard text="miandryrakotovelo@gmail.com">
                                    <span className="clickInput" 
                                    onClick={() =>{ alert('TE-mail Copié !');
                                    }}>miandryrakotovelo@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socialNetwork">
                    <ul>
                                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <h4>Facebook</h4>
                                    <i className="fab fa-facebook"></i>
                                </a>
                            
                               
                                <a href="http://www.github.com" target="_blank" rel="noopener noreferrer">
                                    <h4>Github</h4>
                                    <i className="fab fa-github"></i>
                                </a>
                            
                            
                                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <h4>instagram</h4>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                      
                                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <h4>Twitter</h4>
                                    <i className="fab fa-twitter"></i>
                                </a>       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;