import React from "react";

export default function CartCard({ id, name, price, onDelete }) {
  return (
    <div className="cart-item">
      <div className="product-image"></div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Remove
      </button>
    </div>
  );
}
