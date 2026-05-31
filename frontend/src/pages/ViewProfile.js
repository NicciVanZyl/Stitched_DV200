import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("activeListing");
  const [hoverTab, setHoverTab] = useState(null);

  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            <p>Jane</p>
            <p>Doe</p>
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
              <div id="listing-row-1">
                <div id="listing-1-image"></div>
                <div id="listing-1-title">Placeholder for listing</div>
                <div id="listing-1-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-2">
                <div id="listing-2-image"></div>
                <div id="listing-2-title">Placeholder for listing</div>
                <div id="listing-2-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-3">
                <div id="listing-3-image"></div>
                <div id="listing-3-title">Placeholder for listing</div>
                <div id="listing-3-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-4">
                <div id="listing-4-image"></div>
                <div id="listing-4-title">Placeholder for listing</div>
                <div id="listing-4-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : activeTab === "previousListing" ? (
            <>
              <div id="previous-listings-title" className="previousListings">
                Previous Listings
              </div>
              <div id="listing-row-1">
                <div id="listing-1-image"></div>
                <div id="listing-1-title">Placeholder for listing</div>
                <div id="listing-1-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-2">
                <div id="listing-2-image"></div>
                <div id="listing-2-title">Placeholder for listing</div>
                <div id="listing-2-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-3">
                <div id="listing-3-image"></div>
                <div id="listing-3-title">Placeholder for listing</div>
                <div id="listing-3-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-4">
                <div id="listing-4-image"></div>
                <div id="listing-4-title">Placeholder for listing</div>
                <div id="listing-4-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : activeTab === "viewLiked" ? (
            <>
              <div id="view-liked-title" className="viewLiked">
                View Liked
              </div>
              <div id="listing-row-1">
                <div id="listing-1-image"></div>
                <div id="listing-1-title">Placeholder for listing</div>
                <div id="listing-1-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-2">
                <div id="listing-2-image"></div>
                <div id="listing-2-title">Placeholder for listing</div>
                <div id="listing-2-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-3">
                <div id="listing-3-image"></div>
                <div id="listing-3-title">Placeholder for listing</div>
                <div id="listing-3-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-4">
                <div id="listing-4-image"></div>
                <div id="listing-4-title">Placeholder for listing</div>
                <div id="listing-4-price">R00 000</div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : activeTab === "ratingsComments" ? (
            <>
              <div id="ratings-comments-title" className="ratingsComments">
                Ratings & Comments
              </div>
              <div className="comment-row">
                <div className="comment-product-image"></div>
                <div className="comment-content">
                  <div className="comment-product-title">
                    Burgundy Fabric Collection
                  </div>
                  <div className="comment-rating">★★★★★ 5.0</div>
                  <div className="comment-text">
                    "Amazing quality and fast shipping! Highly recommend this
                    seller."
                  </div>
                </div>
              </div>
              <div className="comment-row">
                <div className="comment-product-image"></div>
                <div className="comment-content">
                  <div className="comment-product-title">Denim Jacket</div>
                  <div className="comment-rating">★★★★☆ 4.0</div>
                  <div className="comment-text">
                    "Great product, though sizing runs a bit small. Otherwise
                    excellent."
                  </div>
                </div>
              </div>
              <div className="comment-row">
                <div className="comment-product-image"></div>
                <div className="comment-content">
                  <div className="comment-product-title">Soft Peach Blouse</div>
                  <div className="comment-rating">★★★★★ 5.0</div>
                  <div className="comment-text">
                    "Beautiful piece! Perfect fit and the color is exactly as
                    pictured."
                  </div>
                </div>
              </div>
              <div className="comment-row">
                <div className="comment-product-image"></div>
                <div className="comment-content">
                  <div className="comment-product-title">Terracotta Scarf</div>
                  <div className="comment-rating">★★★☆☆ 3.0</div>
                  <div className="comment-text">
                    "Good quality but took longer to arrive than expected."
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
