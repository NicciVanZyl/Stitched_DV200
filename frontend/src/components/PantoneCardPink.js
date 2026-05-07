import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard() {
    return (
        <div className="pantoneComponent">
            <div className="pantoneCard">
                <div className="swatchColour pink"></div>
                <div className="pantoneName">
                    <h3>Colour Name</h3>
                    <h4>Pantone™</h4>
                    <h4>Hex Code</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;