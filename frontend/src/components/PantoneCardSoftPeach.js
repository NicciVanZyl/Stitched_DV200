import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#F4C2A1")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour softPeach"></div>
                <div className="pantoneName">
                    <h3>Soft Peach</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#F4C2A1</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;