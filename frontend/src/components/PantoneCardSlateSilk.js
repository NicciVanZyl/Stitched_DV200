import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard({onSelect}) {
    return (
        <div className="pantoneComponent" onClick={() => onSelect("#4A5D66")} 
            style={{ cursor: 'pointer' }}>
            <div className="pantoneCard">
                <div className="swatchColour slateSilk"></div>
                <div className="pantoneName">
                    <h3>Slate Silk</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#4A5D66</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;