import React from "react";
import Navbar from "../components/navbar";
import { Trash } from "react-bootstrap-icons";
import './CartAndAndmin.css';

function Cart() {
  return (
    <div className="cart-page">

      {/* Navbar */}
      <Navbar />

      <div className="cart-wrapper">
        <h1 className="cart-title">Your Cart</h1>

        <div className="cart-content">
          
          {/* LEFT */}
          <div className="cart-items">
            <div className="cart-header">
              <span>Product</span>
              <span>Name</span>
              <span>Total</span>
              <span></span>
            </div>

            {[1, 2, 3].map((item) => (
              <div className="cart-item" key={item}>
                <div className="product-image"></div>

                <div className="product-name">
                  Lorem ipsum
                </div>

                <div className="product-price">
                  R0.00
                </div>

                <button className="delete-btn">
                  <Trash size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="order-summary">
            <h3>Order Summary</h3>

            <input
              className="discount-input"
              type="text"
              placeholder="Enter discount code"
            />

            <div className="summary-row">
              <span>Sub Total</span>
              <span>R0.00</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>R0.00</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>R0.00</span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total</strong>
              <strong>R0.00</strong>
            </div>

            <button className="checkout-btn">
              Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;