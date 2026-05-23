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
          <button
            className="customBtn"
            id="add-listing-btn"
            style={{ position: "absolute", top: "20px", right: "20px" }}
          >
            Add Listing
          </button>
          <div id="profile-button">
            {["activeListing", "previousListing", "viewLiked"].map((tab) => {
              const tabLabels = {
                activeListing: "Active Listings",
                previousListing: "Previous Listings",
                viewLiked: "View Liked",
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
          ) : (
            <div></div>
          )}
          <div id="pageContainer">
            {(activeTab === "activeListing" ||
              activeTab === "previousListing" ||
              activeTab === "viewLiked") && (
              <>
                <button
                  id="pageOne"
                  className={activePage === 1 ? "active" : ""}
                  onClick={() => setActivePage(1)}
                >
                  1
                </button>
                <button
                  id="pageTwo"
                  className={activePage === 2 ? "active" : ""}
                  onClick={() => setActivePage(2)}
                >
                  2
                </button>
                <button
                  id="pageThree"
                  className={activePage === 3 ? "active" : ""}
                  onClick={() => setActivePage(3)}
                >
                  3
                </button>
                <img id="arrowBottom" src="/arrow.png" alt="arrow" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
