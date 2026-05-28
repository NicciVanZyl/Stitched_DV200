import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#A9BDC4")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour paleHaze"></div>
                <div className="pantoneName">
                    <h3>Pale Haze</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#A9BDC4</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;