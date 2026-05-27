import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import "../App.css";
import ProfileTextFields from "../components/textField";

export default function Profile() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("activeListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [hoverAddButton, setHoverAddButton] = useState(false);
  const [profileData, setProfileData] = useState({
    // firstName: "Jane",
    // lastName: "Doe",
    // email: "janedoe@gmail.com",
    // phone: "067 676 6767",
    // address: "Unknown 123",
    // city: "Cape Town",
    // postalCode: "8000",
    // birthDate: "",
    // password: "",
  });
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <button
            className="add-listing-circle-btn"
            onClick={() => navigate("/addListing")}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: hoverAddButton
                ? "rgba(237, 120, 73, 0.35)"
                : "#FFD700",
              border: "none",
              fontSize: "32px",
              color: "#333",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px auto 0 auto",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHoverAddButton(true)}
            onMouseLeave={() => setHoverAddButton(false)}
          >
            +
          </button>
          <div id="name-container">
            <p>Jane</p>
            <p>Doe</p>
          </div>
          <div id="profile-button">
            {[
              "activeListing",
              "previousListing",
              "viewLiked",
              "editProfile",
              "signOut",
            ].map((tab) => {
              const tabLabels = {
                activeListing: "Active Listings",
                previousListing: "Previous Listings",
                viewLiked: "View Liked",
                editProfile: "Edit Profile Details",
                signOut: "Sign Out",
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
          ) : activeTab === "editProfile" ? (
            <>
              <div
                id="edit-profile-title"
                className="editProfile"
                style={{ marginBottom: "2rem" }}
              >
                Profile Details
              </div>

              <div className="profile-fields" style={{ color: "#ffff" }}>
                {[
                  {
                    label: "Address",
                    name: "address",
                    type: "text",
                    placeholder: "Your address",
                  },
                  {
                    label: "Name",
                    name: "firstName",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    label: "Surname",
                    name: "lastName",
                    type: "text",
                    placeholder: "Your surname",
                  },
                  {
                    label: "Birth Date",
                    name: "birthDate",
                    type: "text",
                    placeholder: "DD/MM/YYYY",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "Your email",
                  },
                  {
                    label: "Mobile Number",
                    name: "phone",
                    type: "text",
                    placeholder: "Your mobile number",
                  },
                  {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "Your password",
                  },
                ].map(({ label, name, type, placeholder }) => (
                  <div className="profile-field-row" key={name}>
                    <span className="profile-field-label">{label}</span>
                    <ProfileTextFields label={label}></ProfileTextFields>
                  </div>
                ))}
              </div>

              <div id="form-buttons">
                <button
                  className="btn-cancel"
                  style={{
                    marginLeft: "5.5rem",
                    width: "11.75rem",
                    height: "4.44rem",
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn-post"
                  style={{ width: "21.5rem", height: "4.44rem" }}
                >
                  Save Details
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
