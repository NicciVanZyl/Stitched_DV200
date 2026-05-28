import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#8B1A1A")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour burgundy"></div>
                <div className="pantoneName">
                    <h3>Burgundy</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#8B1A1A</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;