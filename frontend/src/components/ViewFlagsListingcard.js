import React from "react";
import "../pages/CartAndAndmin.css";

/**
 * FlaggedRowItem
 * @param {Object} product - Object containing product info (id, name, comment, badges)
 * @param {boolean} isDropdownOpen - Boolean flag checking if this specific row's dropdown is visible
 * @param {Function} onToggleDropdown - Callback function handling click state changes on the trigger button
 */
export default function FlaggedRowItem({ product, isDropdownOpen, onToggleDropdown }) {
  return (
    <div className="flag-row-item">
      
      {/* Left Metadata Panel */}
      <div className="flag-info-side">
        <h3 className="flag-product-name">{product.name}</h3>
        <p className="flag-reporter-comment">{product.comment}</p>
        
        {/* Badges row: Displays list dynamically only if data exists */}
        {product.badges && product.badges.length > 0 && (
          <div className="flag-badges-row">
            {product.badges.map((badge, index) => (
              <span key={index} className="flag-pill-badge">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right Actions Dropdown Interactive Block */}
      <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`}>
        <button 
          type="button" 
          className="dropdown-trigger-btn"
          onClick={onToggleDropdown}
        >
          Actions <span className="dropdown-arrow-icon">▼</span>
        </button>
        
        {isDropdownOpen && (
          <div className="dropdown-menu-box">
            <button type="button" className="dropdown-action-item">Dismiss</button>
            <button type="button" className="dropdown-action-item">Ban User</button>
            <button type="button" className="dropdown-action-item">View Full</button>
            <button type="button" className="dropdown-action-item delete-action">Delete Listing</button>
          </div>
        )}
      </div>

    </div>
  );
}