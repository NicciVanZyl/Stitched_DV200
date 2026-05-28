import React, { useState } from "react";
import "./CartAndAndmin.css";
import FlaggedRowItem from "../components/ViewFlagsListingcard";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("viewFlags");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Profile Form State
  const [profile, setProfile] = useState({
    address: "",
    firstName: "",
    surname: "",
    birthDate: "",
    email: "",
    mobile: "",
    password: "",
  });

  const tabs = ["viewFlags", "approveListings", "editProfile", "addListing", "signOut"];
  
  const tabLabels = {
    viewFlags: "View Flags",
    approveListings: "Approve Listings",
    editProfile: "Edit Profile Details",
    addListing: "Add Listing",
    signOut: "Sign Out",
  };

  const flaggedProducts = [
    {
      id: 1,
      name: "Product Listing Name",
      comment: "Reporter comment and a small snippet of why they reported it...",
      badges: ["Counterfeit", "Misleading"]
    },
    {
      id: 2,
      name: "Product Listing Name",
      comment: "Reporter comment and a small snippet of why they reported it...",
      badges: ["Prohibited Item"]
    },
    {
      id: 3,
      name: "Product Listing Name",
      comment: "Reporter comment and a small snippet of why they reported it...",
      badges: ["Harassment"]
    },
    {
      id: 4,
      name: "Product Listing Name",
      comment: "Reporter comment and a small snippet of why they reported it...",
      badges: ["Misleading", "Counterfeit"]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setProfile({
      address: "",
      firstName: "",
      surname: "",
      birthDate: "",
      email: "",
      mobile: "",
      password: "",
    });
    setActiveTab("viewFlags");
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data: ", profile);
  };

  // Toggles the dropdown for a specific row id, closing others
  const toggleDropdown = (id) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    } else {
      setOpenDropdownId(id);
    }
  };

  return (
    <div id="main-wrapper">
      <div id="content-container">
        
        {/* Left Sidebar */}
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            <p className="first-name">Jane</p>
            <p className="last-name">Doe</p>
          </div>
          <div id="profile-button">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  className={`tab-button ${isActive ? "active" : ""}`}
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenDropdownId(null); // Close dropdowns on nav change
                  }}
                >
                  <div className="tab-label">{tabLabels[tab]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Panel */}
        <div id="right-panel">
          
          {/* View Flags Tab */}
          {activeTab === "viewFlags" && (
            <div className="flags-container">
              <div className="header-title" style={{ marginLeft: "0px" }}>
                Admin Dashboard
              </div>
              
              {flaggedProducts.map((product) => {
                const isDropdownOpen = openDropdownId === product.id;
                return (
                  <div key={product.id} className="flag-row-item">
                    
                    {/* Left Meta Section */}
                    <div className="flag-info-side">
                      <h3 className="flag-product-name">{product.name}</h3>
                      <p className="flag-reporter-comment">{product.comment}</p>
                      <div className="flag-badges-row">
                        {product.badges.map((badge, index) => (
                          <span key={index} className="flag-pill-badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Interactive Actions Dropdown */}
                    <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`}>
                      <button 
                        type="button" 
                        className="dropdown-trigger-btn"
                        onClick={() => toggleDropdown(product.id)}
                      >
                        Actions <span className="dropdown-arrow-icon">▼</span>
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="dropdown-menu-box">
                          <button type="button" className="dropdown-action-item">Dismiss</button>
                          <button type="button" className="dropdown-action-item">Ban User</button>
                          <button type="button" className="dropdown-action-item">View Full</button>
                          <button type="button" className="dropdown-action-item delete-action">Delete Listing</button>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Edit Profile Tab */}
          {activeTab === "editProfile" && (
            <div className="admin-page">
              <div className="header-title" style={{ marginLeft: "0px" }}>
                Edit Profile Details
              </div>
              
              <form onSubmit={handleProfileSubmit} className="profile-fields-grid">
                <div className="profile-field-row">
                  <div className="field-label-pill">First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    className="field-value-pill"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Surname</div>
                  <input
                    type="text"
                    name="surname"
                    className="field-value-pill"
                    value={profile.surname}
                    onChange={handleInputChange}
                    placeholder="Enter surname"
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Email Address</div>
                  <input
                    type="email"
                    name="email"
                    className="field-value-pill"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Mobile Number</div>
                  <input
                    type="tel"
                    name="mobile"
                    className="field-value-pill"
                    value={profile.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Birth Date</div>
                  <input
                    type="date"
                    name="birthDate"
                    className="field-value-pill"
                    value={profile.birthDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Address</div>
                  <input
                    type="text"
                    name="address"
                    className="field-value-pill"
                    value={profile.address}
                    onChange={handleInputChange}
                    placeholder="Enter home address"
                  />
                </div>

                <div className="profile-field-row">
                  <div className="field-label-pill">Password</div>
                  <input
                    type="password"
                    name="password"
                    className="field-value-pill"
                    value={profile.password}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                  />
                </div>

                <div className="profile-buttons-row">
                  <button type="button" className="cancelBtn" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button type="submit" className="customBtn saveProfileBtn">
                    Save Details
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Fallback empty view spacer */}
          {!["viewFlags", "editProfile"].includes(activeTab) && (
            <div className="empty-spacer"></div>
          )}

        </div>
      </div>
    </div>
  );
}