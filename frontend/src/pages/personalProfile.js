import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("activeListing");
  const [hoverListing1, setHoverListing1] = useState(false);
  const [hoverListing2, setHoverListing2] = useState(false);
  const [hoverListing3, setHoverListing3] = useState(false);
  const [hoverListing4, setHoverListing4] = useState(false);
  const [hoverTab, setHoverTab] = useState(null);
  <div
    id="unused-container"
    style={{
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      background: "#f5ede0",
    }}
  ></div>;
  return (
    <div
      id="main-wrapper"
      style={{
        background:
          "linear-gradient(180deg, rgba(239, 227, 199, 1), rgba(237, 120, 73, 1))",
        minHeight: "100vh",
      }}
    >
      <div
        id="content-container"
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          width: "fit-content",
        }}
      >
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            {" "}
            <p style={{ marginTop: "0.25rem", marginBottom: "0rem" }}>Jane</p>
            <p style={{ marginTop: "0.10rem" }}>Doe</p>
          </div>
          <div id="profile-button">
            {[
              "activeListing",
              "previousListing",
              "viewLiked",
              "editProfile",
              "signOut",
            ].map((tab, index) => {
              const tabLabels = {
                activeListing: "Active Listings",
                previousListing: "Previous Listings",
                viewLiked: "View Liked",
                editProfile: "Edit Profile Details",
                signOut: "Sign Out",
              };
              const isActive = activeTab === tab;
              const isHovered = hoverTab === tab;

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
                <div id="listing-1-image">
                  <div id="listing-1-title">Placeholder for listing</div>
                  <div id="listing-1-price">R00 000</div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div id="listing-row-2">
                <div id="listing-2-image">
                  <div id="listing-2-title">Placeholder for listing</div>
                  <div id="listing-2-price">R00 000</div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-3"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-3-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-3-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-3-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-4"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-4-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-4-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-4-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : activeTab === "previousListing" ? (
            <>
              <div
                id="previous-listings-title"
                className="previousListings"
                style={{
                  color: "#421918",
                  fontFamily: "Pinyon Script",
                  fontSize: "3.75rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  marginTop: "1.62rem",
                  marginLeft: "16.5rem",
                }}
              >
                Previous Listings
              </div>
              <div
                id="listing-row-1"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.56rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-1-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-1-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-1-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-2"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-2-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-2-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-2-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-3"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-3-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-3-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-3-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-4"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-4-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-4-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-4-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : activeTab === "viewLiked" ? (
            <>
              <div
                id="view-liked-title"
                className="viewLiked"
                style={{
                  color: "#421918",
                  fontFamily: "Pinyon Script",
                  fontSize: "3.75rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  marginTop: "1.62rem",
                  marginLeft: "16.5rem",
                }}
              >
                View Liked
              </div>
              <div
                id="listing-row-1"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.56rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-1-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-1-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-1-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-2"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-2-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-2-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-2-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-3"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-3-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-3-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-3-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
              <div
                id="listing-row-4"
                style={{
                  width: "53rem",
                  height: "10.375rem",
                  background:
                    "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                  marginTop: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 1rem",
                }}
              >
                <div
                  id="listing-4-image"
                  style={{
                    width: "8.375rem",
                    height: "8.375rem",
                    borderRadius: "2rem",
                    background: "#fff",
                  }}
                >
                  <div
                    id="listing-4-title"
                    style={{
                      width: "20rem",
                      marginTop: "1rem",
                      marginLeft: "9.375rem",
                      color: "#421918",
                      fontFamily: "Montserrat",
                      fontSize: "1.618rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    Placeholder for listing
                  </div>
                  <div
                    id="listing-4-price"
                    style={{
                      width: "20rem",
                      marginTop: "3.2rem",
                      marginLeft: "9.375rem",
                      color: "#ffffff",
                      fontFamily: "Montserrat",
                      fontSize: "2.61813rem",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      position: "absolute",
                    }}
                  >
                    R00 000
                  </div>
                </div>
                <button className="customBtn viewlistingBtn">
                  View Listing
                </button>
              </div>
            </>
          ) : (
            <div style={{ flex: "1" }}></div>
          )}
          <div
            id="pageContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              paddingBottom: "2rem",
            }}
          >
            {(activeTab === "activeListing" ||
              activeTab === "previousListing" ||
              activeTab === "viewLiked") && (
              <>
                <button
                  id="pageOne"
                  onClick={() => setActivePage(1)}
                  style={{
                    width: "3.9375rem",
                    height: "3.9375rem",
                    background: activePage === 1 ? "#B73E3A" : "#E6A5A4",
                    marginTop: "1.12rem",
                    border: "none",
                    cursor: "pointer",
                    color: "#FFF",
                    fontFamily: "Montserrat",
                    fontSize: "2.61813rem",
                    fontWeight: "700",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  1
                </button>
                <button
                  id="pageTwo"
                  onClick={() => setActivePage(2)}
                  style={{
                    width: "3.9375rem",
                    height: "3.9375rem",
                    background: activePage === 2 ? "#B73E3A" : "#E6A5A4",
                    marginTop: "1.12rem",
                    border: "none",
                    cursor: "pointer",
                    color: "#FFF",
                    fontFamily: "Montserrat",
                    fontSize: "2.61813rem",
                    fontWeight: "700",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  2
                </button>
                <button
                  id="pageThree"
                  onClick={() => setActivePage(3)}
                  style={{
                    width: "3.9375rem",
                    height: "3.9375rem",
                    background: activePage === 3 ? "#B73E3A" : "#E6A5A4",
                    marginTop: "1.12rem",
                    border: "none",
                    cursor: "pointer",
                    color: "#FFF",
                    fontFamily: "Montserrat",
                    fontSize: "2.61813rem",
                    fontWeight: "700",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  3
                </button>
                <img
                  id="arrowBottom"
                  src="/arrow.png"
                  alt="arrow"
                  style={{
                    height: "3rem",
                    width: "4rem",
                    marginTop: "1.5rem",
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
