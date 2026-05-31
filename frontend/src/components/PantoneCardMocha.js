import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#3D1F1F")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour mocha"></div>
                <div className="pantoneName">
                    <h3>Mocha</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#3D1F1F</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;