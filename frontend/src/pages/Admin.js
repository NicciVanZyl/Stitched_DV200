import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CartAndAndmin.css";
import { useAuth } from '../context/authContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function AdminPage() {
  const { user, token } = useAuth();

  const [activeTab, setActiveTab] = useState("viewFlags");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Profile Form State
  const tabs = [
    "viewFlags",
    "approveListings",
    "addListing",
    "switchProfile",
  ];

  const tabLabels = {
    viewFlags: "View Flags",
    approveListings: "Approve Listings",
    addListing: "Add Listing",
    switchProfile: "Switch Profile",
  };

  const [flaggedProducts, setFlaggedProducts] = useState([]);
  const [listings, setListings] = useState([]);

  // Handles the profile switching delay and auto-redirect logic
  useEffect(() => {
    if (activeTab === "switchProfile") {
      const timer = setTimeout(() => {
        setActiveTab("viewFlags");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const GetFlags = async () => {
    try {
      const res = await axios.get("http://localhost:5009/api/flag/all", { headers: { authorization: `Bearer ${token}` } });
      setFlaggedProducts(res.data);
    } catch (error) {
      console.error("Error fetching flags data:", error)
    }
  };

  const GetListings = async () => {
    try {
      const res = await axios.get("http://localhost:5009/api/listing/awaitingApproval",{ headers: { authorization: `Bearer ${token}` } });
      setListings(res.data);
    } catch (error) {
      console.error("Error fetching listings awaiting approval:", error)
    }
  }

  // Initial Data Fetching for Flags and Awaiting Approval Listings
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    // SECURE FLAGS API CALL 1: Fetch all flags via router.get('/all', ...)
    // axios
    //   .get("http://localhost:5009/api/flag/all")
    //   .then((response) => {
    //     setFlaggedProducts(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching flags data:", error));
    GetFlags();
    GetListings()
    // LISTINGS API CALL 1: Fetch listings awaiting approval
    // axios
    //   .get("http://localhost:5009/api/listing/awaitingApproval")
    //   .then((response) => {
    //     setListings(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching listings awaiting approval:", error));
  }, []);

  // SECURE FLAGS API CALL 2 & 3: Handle individual flag actions (Edit/Patch or Delete)
  const handleDropdownAction = async (actionType, productId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (actionType === "dismiss") {
        // Matches your: router.patch('/:id', verifyToken, requireAdmin, EditFlag);
        await axios.patch(`http://localhost:5009/api/flag/${productId}`, {
          status: "dismissed",
        }, config);
      } else if (actionType === "delete") {
        // Matches your: router.delete('/:id', verifyToken, requireAdmin, DeleteFlag);
        await axios.delete(`http://localhost:5009/api/flag/${productId}`, config);
      }

      setFlaggedProducts((prev) =>
        prev.filter((product) => (product._id || product.id) !== productId),
      );
      setOpenDropdownId(null);
    } catch (error) {
      console.error(`Error performing ${actionType} on flag:`, error);
    }
  };

  // LISTINGS API CALL 2: Approve Listing Handler
  const handleApproveListing = async (listingId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.patch(`http://localhost:5009/api/listing/${listingId}/approve`, {}, config);
      setListings((prev) => prev.filter((item) => (item._id || item.id) !== listingId));
    } catch (error) {
      console.error("Error approving listing:", error);
    }
  };

  // LISTINGS API CALL 3: Delete / Reject Listing Handler
  const handleDeleteListing = async (listingId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete(`http://localhost:5009/api/listing/${listingId}`, config);
      setListings((prev) => prev.filter((item) => (item._id || item.id) !== listingId));
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  const toggleDropdown = (productId) => {
    setOpenDropdownId((prevId) => (prevId === productId ? null : productId));
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

              if (tab === "switchProfile") {
                return (
                  <Link to="/personalProfile" className="tab-routing-link" key={tab}>
                    <button
                      className={`tab-button ${isActive ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(tab);
                        setOpenDropdownId(null);
                      }}
                    >
                      <div className="tab-label">{tabLabels[tab]}</div>
                    </button>
                  </Link>
                );
              }

              if (tab === "addListing") {
                return (
                  <Link to="/addListing" className="tab-routing-link" key={tab}>
                    <button
                      className={`tab-button ${isActive ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(tab);
                        setOpenDropdownId(null);
                      }}
                    >
                      <div className="tab-label">{tabLabels[tab]}</div>
                    </button>
                  </Link>
                );
              }

              return (
                <button
                  className={`tab-button ${isActive ? "active" : ""}`}
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenDropdownId(null);
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
              <div className="header-title flags-header-align">Admin Dashboard</div>

              {flaggedProducts.length === 0 ? (
                <p className="switch-profile-notice">No system flags reported.</p>
              ) : (
                flaggedProducts.map((product) => (
                  <div key={product._id || product.id} className="flag-row-item">
                    <div className="flag-info-side">
                      <h3 className="flag-product-name">{product.name}</h3>
                      <p className="flag-reporter-comment">{product.comment}</p>
                      <div className="flag-badges-row">
                        {product.badges && product.badges.map((badge, index) => (
                          <span key={index} className="flag-pill-badge">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="action-buttons-group">
                      <div className="customBtn compact-action-btn">
                        {['Actions'].map((variant) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                          >
                            <Dropdown.Item eventKey="1" onClick={() => handleDropdownAction('dismiss', product._id || product.id)}>Dismiss</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Ban User</Dropdown.Item>
                            <Dropdown.Item eventKey="2">View Full</Dropdown.Item>
                            <Dropdown.Item eventKey="5" onClick={() => handleDropdownAction('delete', product._id || product.id)}>Delete Flag</Dropdown.Item>
                            <Dropdown.Divider />
                          </DropdownButton>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Approve Listings Tab */}
          {activeTab === "approveListings" && (
            <div className="admin-page">
              <div className="header-title listings-header-align">Approve Listings</div>

              <div className="listings-approval-container">
                {listings.length === 0 ? (
                  <p className="switch-profile-notice">No listings awaiting approval.</p>
                ) : (
                  listings.map((item) => (
                    <div key={item._id || item.id} className="flag-row-item">
                      <div className="flag-info-side">
                        <h3 className="flag-product-name">{item.name || item.title}</h3>
                        <p className="flag-reporter-comment">{item.description}</p>
                      </div>

                      <div className="action-buttons-group">
                        <div className="customBtn compact-action-btn">
                        {['Actions'].map(
                          (variant) => (
                            <DropdownButton
                              as={ButtonGroup}
                              key={variant}
                              id={`dropdown-variants-${variant}`}
                              variant={variant.toLowerCase()}
                              title={variant}
                            >
                              <Dropdown.Item eventKey="1">Reject</Dropdown.Item>
                              <Dropdown.Item eventKey="3">View Listing</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey="4" onClick={() => handleApproveListing(item._id || item.id)}>Approve</Dropdown.Item>
                            </DropdownButton>
                          ),
                        )}
                        </div>
                        <button
                          type="button"
                          className="cancelBtn reset-margin compact-action-btn"
                          onClick={() => handleDeleteListing(item._id || item.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Add Listing Tab */}
          {activeTab === "addListing" && (
            <div className="admin-page">
              <div className="header-title listings-header-align">Add Listing</div>
            </div>
          )}

          {/* Switch Profile Tab */}
          {activeTab === "switchProfile" && (
            <div className="admin-page">
              <div className="header-title profileswitch-header-align">Switch Profile</div>
              <div className="switch-profile-notice">
                Please wait a moment while we switch back to the profile page...
              </div>
            </div>
          )}

          {![
            "viewFlags",
            "approveListings",
            "addListing",
            "switchProfile",
          ].includes(activeTab) && <div className="empty-spacer"></div>}
        </div>

      </div>
    </div>
  );
}

export default AdminPage;

