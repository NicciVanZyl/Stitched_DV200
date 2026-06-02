import React from "react";
import { Trash } from "react-bootstrap-icons";

export default function CartCard({ id, name, price, onDelete }) {
  return (
    <div className="cart-item">
      {/* Product Image Placeholder */}
      <div className="product-image"></div>

      <div className="product-name">
        {name || "Lorem ipsum"}
      </div>

      <div className="product-price">
        {price || "R0.00"}
      </div>

      <button className="delete-btn" onClick={() => onDelete(id)}>
        <Trash size={18} />
      </button>
    </div>
  );
}