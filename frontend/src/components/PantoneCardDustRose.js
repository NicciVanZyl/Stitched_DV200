import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#C3587F")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour dustRose"></div>
                <div className="pantoneName">
                    <h3>Dust Rose</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#C3587F</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;