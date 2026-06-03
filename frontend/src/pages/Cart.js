import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import './CartAndAndmin.css';
import RedFooter from "../components/RedFooter";
import CartCard from "../components/cartCard";
import RatingSellerCard from "../components/RatingSellerCard";
import { TrashIcon } from "react-bootstrap-icons";
import { useAuth } from '../context/authContext';
import axios from "axios";
import CmntRateModal from "../components/commentRateModal";
import { useCart } from "../context/cartContext";
import Modal from "../components/modal"
import { useNavigate } from "react-router-dom";


function Cart() {

  const navigate = useNavigate();
  const { cartData, removeFromCart, emptyCart } = useCart();
  const { user, token } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal toggle and data tracking states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doneModal, setDoneModal] = useState(false);
  const [uniqueSellers, setUniqueSellers] = useState([]);
  const [sellerComments, setSellerComments] = useState([]);

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
    CalculateUserRating();
  }, []);

  const handleDeleteCartItem = (id) => {
    const updatedCart = cartItems.filter((item) => (item._id || item.id) !== id);
    setCartItems(updatedCart);
    removeFromCart(id);
  };

  const CalculateUserRating = async (sellers) => {
    try {
      const res = await Promise.all(
        sellers.map((seller) => {
          return axios.get(`http://localhost:5009/api/comment/seller/${seller.id}`, { headers: { authorization: `Bearer ${token}` } })
        })
      )
      setSellerComments(res.map((result) => result.data));
      console.log(res.map((result) => result.data));

    } catch (error) {
      console.log(error.response?.data?.message);
    }
  }


  useEffect(() => {
    if (sellerComments?.length === 0) return;

    const updateAllSellerRatings = async () => {
      try {
        const res = await Promise.all(
          sellerComments.map((sellerCommentArray, index) => {

            // Calculate average ratings
            const total = sellerCommentArray.reduce((sum, comment) => {
              return sum + parseFloat(comment.rating);  //make strings floats otherwise math doesn't math
            }, 0);
            const avgRating = parseFloat((total / sellerCommentArray.length).toFixed(1));


            const seller = uniqueSellers[index];
            console.log(`Updating seller ${seller.name} with rating ${avgRating}`);

            return axios.patch(
              `http://localhost:5009/api/user/${seller.id}`,
              { rating: avgRating },
              { headers: { authorization: `Bearer ${token}` } }
            );
          })
        );

        console.log('All sellers updated:', res.map(r => r.data));

      } catch (error) {
        console.log(error);
      }
    };

    updateAllSellerRatings();

  }, [sellerComments]);

  const CloseRateModal = async (message) => {
    setIsModalOpen(false);
    if (message === "Rate") {
      //Calculate sellers new ratings
      await CalculateUserRating(uniqueSellers); //still doing shit out of order :(
    } else {

    }
    setDoneModal(true);
  }

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
  };

  useEffect(() => {
    if (uniqueSellers.length > 0) {
      setIsModalOpen(true);
    }
  }, [uniqueSellers]);

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
                  imgUrl={item.imageUrl}
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

      <CmntRateModal
        isOpen={isModalOpen}
        onClose={(message) => CloseRateModal(message)}
        sellers={uniqueSellers}
      />
      <Modal
        show={doneModal}
        message={"Purchase and ratings successful! Thank you for your support."}
        userName={user.name}
        onClose={() => {
          setDoneModal(false);
          //clear cart
          emptyCart()
          //navigate to home page 
          navigate("/Home");
        }}
      />


      <RedFooter />
    </div>
  );
}

export default Cart;