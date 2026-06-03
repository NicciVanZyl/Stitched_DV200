import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import './CartAndAndmin.css';
import RedFooter from "../components/RedFooter";
import CartCard from "../components/cartCard";
import RatingSellerCard from "../components/RatingSellerCard";
import { TrashIcon } from "react-bootstrap-icons";
import { useCart } from "../context/cartContext";
import { useAuth } from '../context/authContext';
import axios from "axios";

function Cart() {
  const { cartData, removeFromCart } = useCart();
  const { user, token } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal toggle and data tracking states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uniqueSellers, setUniqueSellers] = useState([]);

  const GetItemData = async () => {
    try {
      const res = await Promise.all(
        cartData.map((data) => {
          return axios.get(`http://localhost:5009/api/listing/${data.id}`)
        })
      )
      setCartItems(res.map((result) => result.data));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }

  useEffect(() => {
    GetItemData();
    setLoading(false);
  }, []);

  const handleDeleteCartItem = (id) => {
    const updatedCart = cartItems.filter((item) => (item._id || item.id) !== id);
    setCartItems(updatedCart);
    removeFromCart(id);
  };

  const handleCheckoutClick = () => {
    const sellersMap = {};

    cartItems.forEach(item => {
      const sId = item.postedBy;
      let sName;
      cartData.forEach(data => {
        if (data.sellerId == item.postedBy) {
          sName = data.sellerName;
          
          return;
        }
      })
      if (!sellersMap[sId]) {
        sellersMap[sId] = { id: sId, name: sName };
      }
    });

    setUniqueSellers(Object.values(sellersMap));
    setIsModalOpen(true);
  };

  // Triggers when user hits submit inside the pop-up panel
  const handleFinalCheckout = async (ratingsReceived) => {
    setIsModalOpen(false);

    // Optional destination: Put a fetch call here if you want to POST ratings to backend
    console.log("Captured Feedback State:", ratingsReceived);

    try {
      const promises = cartItems.map(async (item) => {
        const itemId = item._id || item.id;
        const response = await fetch(`http://localhost:5009/api/listing/${itemId}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ sold: true })
        });
        return response;
      });

      const results = await Promise.all(promises);
      const allSuccessful = results.every(res => res.ok);

      if (allSuccessful) {
        alert("Checkout successful! Thank you for rating the sellers.");
        setCartItems([]);
        localStorage.removeItem("cart");
      } else {
        alert("Some items failed to process during checkout.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("An error occurred connecting to the server.");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + Number(item.price || 0), 0);
  };

  const subTotal = calculateSubtotal();
  const discount = 0.00;
  const deliveryFee = subTotal > 0 ? 50.00 : 0.00;
  const total = subTotal - discount + deliveryFee;

  if (loading) return <div className="cart-page"><p>Loading your cart...</p></div>;

  return (
    <div className="cart-page">
      <div className="cart-wrapper">
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-content">

          {/* LEFT SIDE: ITEMS */}
          <div className="cart-items">
            <div className="cart-header">
              <span>Product</span>
              <span>Name</span>
              <span>Total</span>
              <span></span>
            </div>

            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Your cart is currently empty.</p>
            ) : (
              cartItems.map((item) => (
                <CartCard
                  key={item._id || item.id}
                  id={item._id || item.id}
                  name={item.name}
                  price={`R${Number(item.price).toFixed(2)}`}
                  onDelete={handleDeleteCartItem}
                />
              ))
            )}
          </div>

          {/* RIGHT SIDE: SUMMARY OVERVIEW */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <input className="discount-input" type="text" placeholder="Enter discount code" />

            <div className="summary-row">
              <span>Sub Total</span>
              <span>R{subTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span>R{discount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>R{deliveryFee.toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-total">
              <strong>Total</strong>
              <strong>R{total.toFixed(2)}</strong>
            </div>

            <button className="customBtn checkoutBtn" onClick={handleCheckoutClick} disabled={cartItems.length === 0}>
              Checkout
            </button>
          </div>

        </div>
      </div>

      {/* Structural placement of the Rating overlay overlay card */}
      <RatingSellerCard
        isOpen={isModalOpen}
        sellers={uniqueSellers}
        onSubmit={handleFinalCheckout}
        onClose={() => setIsModalOpen(false)}
      />

      <RedFooter />
    </div>
  );
}

export default Cart;