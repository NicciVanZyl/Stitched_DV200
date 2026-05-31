import React, { useState } from "react";
import Navbar from "../components/navbar";
import './CartAndAndmin.css';
import RedFooter from "../components/RedFooter";
import CartCard from "../components/cartCard"; 

function Cart() {
  // 2. State initialized with mock data matching your original layout.
  // Swap the initial array out later for your LocalStorage/SessionStorage data!
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lorem ipsum", price: "R0.00" },
    { id: 2, name: "Lorem ipsum", price: "R0.00" },
    { id: 3, name: "Lorem ipsum", price: "R0.00" },
  ]);

  // Handler to delete items from the UI state
  const handleDeleteCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    // NOTE: You can also clear it from your local/session storage here later!
  };

  return (
    <div className="cart-page">
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

            {/* 3. Replaced the hardcoded loop with your dynamic component rendering */}
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                onDelete={handleDeleteCartItem}
              />
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

            <button className="customBtn checkoutBtn">
              Checkout
            </button>
          </div>

        </div>
      </div>
      <RedFooter />
    </div>
  );
}

export default Cart;