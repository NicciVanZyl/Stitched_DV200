import React, { useState } from "react";
import '../pages/CartAndAndmin.css'; // Consolidated CSS file

function RatingSellerCard({ isOpen, sellers, onSubmit, onClose }) {
  const [ratings, setRatings] = useState({});

  if (!isOpen) return null;

  const handleStarClick = (sellerId, ratingValue) => {
    setRatings((prev) => ({
      ...prev,
      [sellerId]: ratingValue,
    }));
  };

  const handleSubmit = () => {
    // Pass the finalized ratings back to the checkout workflow
    onSubmit(ratings);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Rate the Sellers</h2>
        <p>Please rate your experience with the sellers for this purchase:</p>
        
        <div className="sellers-list">
          {sellers.map((seller) => {
            const currentRating = ratings[seller.id] || 0;
            return (
              <div key={seller.id} className="seller-rating-row">
                <span className="seller-name">{seller.name}</span>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= currentRating ? "selected" : ""}`}
                      onClick={() => handleStarClick(seller.id, star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="modal-actions">
          <button className="submit-ratings-btn" onClick={handleSubmit}>
            Submit & Complete
          </button>
          <button className="close-modal-btn" onClick={onClose}>
            Skip / Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingSellerCard;