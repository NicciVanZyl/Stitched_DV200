import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import "./Profile.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ProfileCards from "../components/profileCards";

export default function Profile() {
  const { state } = useLocation();
  const { sellerId } = state;
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("activeListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [listings, setListings] = useState([]);
  const [previouslistings, setPreviousListings] = useState([]);
  const [likedListings, setLikedListings] = useState([]);
  const [ratingsComments, setRatingsComments] = useState([]);
  const { user, token } = useAuth();
  const [sellerName, setSellerName] = useState();
  const RenderItems = (listings) => {
    return listings.map((listing) => <ProfileCards listing={listing} />);
  };

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/user/${sellerId}`,
        {
          headers: { authorization: `Bearer ${token}` },
        },
      );

      setSellerName(res.data.name);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  const getActiveListings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/listing/active/${sellerId}`,
        { headers: { authorization: `Bearer ${token}` } },
      );
      setListings(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const getLikedListings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/listing/getUserLikes`,
        { headers: { authorization: `Bearer ${token}` } },
      );
      setLikedListings(res.data.data.listings);
      console.log(res.data.data.listings);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const getPreviousListings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/listing/previous/${user?.id}`,
        { headers: { authorization: `Bearer ${token}` } },
      );
      setPreviousListings(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const getRatingsComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/rating-comment/${sellerId}`,
        { headers: { authorization: `Bearer ${token}` } },
      );
      setRatingsComments(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching ratings and comments:", error);
    }
  };

  useEffect(() => {
    getProfile();
    getActiveListings();
    getLikedListings();
    getPreviousListings();
    getRatingsComments();
  }, []);
  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="name-container">
            <p>{sellerName}</p>
          </div>
          <div id="profile-button">
            {[
              "activeListing",
              "previousListing",
              "viewLiked",
              "ratingsComments",
            ].map((tab) => {
              const tabLabels = {
                activeListing: "Active Listings",
                previousListing: "Previous Listings",
                viewLiked: "View Liked",
                ratingsComments: "Ratings & Comments",
              };
              const isActive = activeTab === tab;

              return (
                <button
                  className={`tab-button ${isActive ? "active" : ""}`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  onMouseEnter={() => setHoverTab(tab)}
                  onMouseLeave={() => setHoverTab(null)}
                >
                  <div className="tab-label">{tabLabels[tab]}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div id="right-panel">
          {activeTab === "activeListing" ? (
            <>
              <div id="active-listings-title" className="activeListings">
                Active Listings
              </div>
              {RenderItems(listings)}
            </>
          ) : activeTab === "previousListing" ? (
            <>
              <div id="previous-listings-title" className="previousListings">
                Previous Listings
              </div>
              {RenderItems(previouslistings)}
            </>
          ) : activeTab === "viewLiked" ? (
            <>
              <div id="view-liked-title" className="viewLiked">
                View Liked
              </div>
              {RenderItems(likedListings)}
            </>
          ) : activeTab === "ratingsComments" ? (
            <>
              <div id="ratings-comments-title" className="ratingsComments">
                Ratings & Comments
              </div>
              {RenderItems(ratingsComments)}
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
