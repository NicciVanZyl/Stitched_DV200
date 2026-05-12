import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PantoneCard() {
    return (
        <div className="pantoneComponent">
            <div className="pantoneCard">
                <div className="swatchColour terracotta"></div>
                <div className="pantoneName">
                    <h3>Terracotta</h3>
                    <h4 style={{fontSize: "0.8rem"}}>Pantone™</h4>
                    <h4>#D15433</h4>
                </div>
            </div>
        
        </div>
    );
}

export default PantoneCard;