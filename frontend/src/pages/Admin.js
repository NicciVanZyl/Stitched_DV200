import React, { useState } from "react";
import Navbar from "../components/navbar";
import './CartAndAndmin.css';

function AdminPage() {
  // State to track which view is selected: "flags", "approve", or "profile"
  const [activeTab, setActiveTab] = useState("approve");
  
  // States to track which dropdown index is currently open
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="admin-page">

      <div className="admin-wrapper">
        
        {/* SIDEBAR */}
        <div className="admin-sidebar">
          <div className="admin-profile-container">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
              alt="Jane Doe" 
              className="admin-profile-img"
            />
          </div>
          <h2 className="admin-name">Jane Doe</h2>
          
          <div className="admin-nav">
            <button 
              className="customBtn"
              onClick={() => { setActiveTab("flags"); setOpenDropdown(null); }}
            >
              View Flags
            </button>

            <button 
              className="customBtn"
              onClick={() => { setActiveTab("approve"); setOpenDropdown(null); }}
            >
              Approve Listings
            </button>

            <button 
              className="customBtn"
              onClick={() => { setActiveTab("profile"); setOpenDropdown(null); }}
            >
              Edit Profile
            </button>

            <button className="customBtn">Sign Out</button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="admin-content">
          
          {/* DYNAMIC TITLE */}
          <h1 className="admin-title">
            {activeTab === "profile" ? "Profile Details" : "Admin Dashboard"}
          </h1>

          {/* VIEW FLAGS TAB */}
          {activeTab === "flags" && (
            <div className="listings-container flags-view">
              {[
                { name: "Product Listing Name", tags: ["Counterfeit", "Misleading"] },
                { name: "Product Listing Name", tags: ["Prohibited Item"] },
                { name: "Product Listing Name", tags: ["Harassment"] },
                { name: "Product Listing Name", tags: ["Misleading", "Counterfeit"] }
              ].map((item, idx) => (
                <div className="listing-card flag-card" key={idx}>
                  <div className="listing-info">
                    <h3>{item.name}</h3>
                    <p className="reporter-text">Reporter comment and a small snippet of why they reported it...</p>
                    <div className="flag-tags">
                      {item.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className={`flag-badge ${tag.toLowerCase().replace(" ", "-")}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="listing-actions">
                    <button className="customBtn" onClick={() => toggleDropdown(idx)}>
                      Actions <span className="arrow-down">▼</span>
                    </button>
                    {openDropdown === idx && (
                      <div className="custom-dropdown-menu">
                        <button className="customBtn">Dismiss</button>
                        <button className="customBtn">Ban User</button>
                        <button className="customBtn">More Info</button>
                        <div className="dropdown-divider"></div>
                        <button className="customBtn">Delete Listing</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* APPROVE LISTINGS TAB */}
          {activeTab === "approve" && (
            <div className="listings-container approve-view">
              {[
                { img: "https://images.unsplash.com/photo-1624242971730-ea36111754a4?q=80&w=150&auto=format&fit=crop", name: "Product Listing Name" },
                { img: "https://images.unsplash.com/photo-1621454537170-a31525d88f98?q=80&w=150&auto=format&fit=crop", name: "Product Listing Name" },
                { img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=150&auto=format&fit=crop", name: "Product Listing Name" }
              ].map((item, idx) => (
                <div className="listing-card" key={idx}>
                  <div className="listing-img-wrapper">
                    <img src={item.img} alt={item.name} className="listing-image" />
                  </div>
                  
                  <div className="listing-info">
                    <h3>{item.name}</h3>
                    <p className="product-desc">Product Description...</p>
                    <p className="product-price">R000,00</p>
                  </div>

                  <div className="listing-actions">
                    <button className="customBtn" onClick={() => toggleDropdown(idx)}>
                      Actions <span className="arrow-down">▼</span>
                    </button>
                    {openDropdown === idx && (
                      <div className="custom-dropdown-menu">
                        <button className="customBtn">Reject</button>
                        <button className="customBtn">Edit</button>
                        <button className="customBtn">View Full</button>
                        <div className="dropdown-divider"></div>
                        <button className="customBtn">Approve</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EDIT PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="profile-form-container">
              <div className="form-grid">
                <div className="form-row">
                  <div className="form-label-box">Address</div>
                  <input type="text" className="form-input-box" defaultValue="Unknown 123" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Name</div>
                  <input type="text" className="form-input-box" defaultValue="Jane" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Surname</div>
                  <input type="text" className="form-input-box" defaultValue="Doe" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Birth Date</div>
                  <input type="text" className="form-input-box" defaultValue="67/67/6767" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Email</div>
                  <input type="email" className="form-input-box" defaultValue="janedoe@gmail.com" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Mobile Number</div>
                  <input type="text" className="form-input-box" defaultValue="067 676 6767" />
                </div>
                <div className="form-row">
                  <div className="form-label-box">Password</div>
                  <input type="text" className="form-input-box" defaultValue="Supersecret******" />
                </div>
              </div>

              <div className="form-button-group">
                <button className="customBtn">Cancel</button>
                <button className="customBtn">Save Details</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminPage;