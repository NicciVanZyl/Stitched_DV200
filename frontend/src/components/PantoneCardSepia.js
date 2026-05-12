import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard() {
    return (
        <div className="pantoneComponent">
            <div className="pantoneCard">
                <div className="swatchColour sepia"></div>
                <div className="pantoneName">
                    <h3>Sepia</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#E3AC2C</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;