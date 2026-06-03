import React from "react";
import { Trash } from "react-bootstrap-icons";

export default function CartCard({ id, name, price, onDelete,imgUrl }) {
  return (
    <div className="cart-item">
      {/* Product Image Placeholder */}
      <img src={imgUrl} className="product-image"></img>

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