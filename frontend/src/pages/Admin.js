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

  const [profileData, setProfileData] = useState({ firstName: "", lastName: ""});
  const getProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/user/${user?.id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        },
      );
      const spacePos = res.data.name.indexOf(" ");
      let firstName;
      let lastName;
      if (spacePos == -1) {
        firstName = res.data.name;
        lastName = "";
      } else {
        firstName = res.data.name.slice(0, spacePos);
        lastName = res.data.name.slice(spacePos + 1, res.data.name.length);
      }
      setProfileData({
        address: res.data.address,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: res.data.dateOfBirth,
        email: res.data.email,
        number: res.data.number,
        password: res.data.password,
      });

      console.log(res.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const [flaggedProducts, setFlaggedProducts] = useState([]);
  const [listings, setListings] = useState([]);
  const [viewFullInfo, setViewFullInfo] = useState({ id: null, summary: "", title: "" });

  const getItemId = (item) => item._id || item.id;

  const handleDropdownToggle = (isOpen, id) => {
    setOpenDropdownId(isOpen ? id : null);
  };

  const truncateSummary = (text, maxLength = 160) => {
    if (!text) return "No description available.";
    return text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;
  };

  const handleViewFull = async (product) => {
    const listingId = product.listingId || getItemId(product);
    if (!listingId) {
      setViewFullInfo({
        id: null,
        summary: product.flagBody || product.comment || "No description available.",
        title: product.name || product.title || "Product summary",
      });
      setOpenDropdownId(null);
      return;
    }

    if (viewFullInfo.id === listingId) {
      setViewFullInfo({ id: null, summary: "", title: "" });
      setOpenDropdownId(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5009/api/listing/${listingId}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const description = response.data?.description || product.flagBody || product.comment || "No description available.";
      setViewFullInfo({
        id: listingId,
        summary: description,
        title: product.name || response.data?.name || product.title || "Product summary",
      });
    } catch (error) {
      setViewFullInfo({
        id: listingId,
        summary: product.flagBody || product.comment || "No description available.",
        title: product.name || product.title || "Product summary",
      });
    }
    setOpenDropdownId(null);
  };

  const GetFlaggedProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5009/api/flag/all", {
        headers: { authorization: `Bearer ${token}` },
      });
      setFlaggedProducts(res.data);
    } catch (error) {
      console.error("Error fetching flagged products:", error);
    }
  };

  const GetListings = async () => {
    try {
      const res = await axios.get("http://localhost:5009/api/listing/awaitingApproval", {
        headers: { authorization: `Bearer ${token}` },
      });
      setListings(res.data);
    } catch (error) {
      console.error("Error fetching listings awaiting approval:", error);
    }
  };

  // Handles the profile switching delay and auto-redirect logic
  useEffect(() => {
    if (activeTab === "switchProfile") {
      const timer = setTimeout(() => {
        setActiveTab("viewFlags");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  useEffect(() => {
    if (token) {
      getProfile();
      GetFlaggedProducts();
      GetListings();
    }
  }, [token]);

  // SECURE FLAGS API CALL 2 & 3: Handle individual flag actions (Edit/Patch or Delete)
  const handleDropdownAction = async (actionType, productId) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (actionType === "dismiss") {
        await axios.patch(`http://localhost:5009/api/flag/${productId}`, {
          status: "dismissed",
        }, config);
      } else if (actionType === "delete") {
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

  const handleApproveListing = async (listingId) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.patch(`http://localhost:5009/api/listing/${listingId}/approve`, {}, config);
      setListings((prev) => prev.filter((item) => getItemId(item) !== listingId));
      setOpenDropdownId(null);
    } catch (error) {
      console.error("Error approving listing:", error);
    }
  };

  const handleRejectListing = async (listingId) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete(`http://localhost:5009/api/listing/${listingId}`, config);
      setListings((prev) => prev.filter((item) => getItemId(item) !== listingId));
      setOpenDropdownId(null);
    } catch (error) {
      console.error("Error rejecting listing:", error);
    }
  };

  return (
    <div id="main-wrapper">
      <div id="content-container">
        {/* Left Sidebar */}
        <div id="orange-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            <p className="first-name">{profileData.firstName}</p>
            <p className="last-name">{profileData.lastName}</p>
          </div>
          <div id="profile-button">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              {isActive && <div className="active-indicator-bar" />}

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
                flaggedProducts.map((product) => {
                  const productId = getItemId(product);
                  const listingReferenceId = product.listingId || productId;
                  return (
                    <React.Fragment key={productId}>
                      <div className={`flag-row-item ${openDropdownId === productId ? "open-dropdown" : ""}`}>
                        <div className="flag-info-side">
                          <h3 className="flag-product-name">Flagged Item (ID: {product.listingId})</h3>
                          <p className="flag-reporter-comment">{product.flagBody}</p>
                          <div className="flag-badges-row">
                            {product.reason && product.reason.map((badge, index) => {
                              const badgeText = badge && typeof badge === 'object' ? badge.reason : badge; 

                              return (
                                <span key={index} className="flag-pill-badge">
                                  {badgeText}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        <div className="action-buttons-group">
                            {['Actions'].map((variant) => (
                              <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}-${productId}`}
                                variant="warning"
                                title={variant}
                                show={openDropdownId === productId}
                                onToggle={(isOpen) => handleDropdownToggle(isOpen, productId)}
                                onSelect={() => setOpenDropdownId(null)}
                              >
                                <Dropdown.Item eventKey="1" onClick={() => handleDropdownAction('dismiss', productId)}>Dismiss</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Ban User</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() => handleViewFull(product)}>View Full</Dropdown.Item>
                                <Dropdown.Item eventKey="5" onClick={() => handleDropdownAction('delete', productId)} style={{fontWeight: "600"}}>Delete Flag</Dropdown.Item>
                                <Dropdown.Divider />
                              </DropdownButton>
                            ))}
                        </div>
                      </div>
                      {viewFullInfo.id === listingReferenceId && (
                        <div className="view-full-summary">
                          <div className="summary-title">Product description summary</div>
                          <p>{truncateSummary(viewFullInfo.summary)}</p>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })
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
                  listings.map((item) => {
                    const listingId = getItemId(item);
                    return (
                      <div key={listingId} className={`flag-row-item listing-row-item ${openDropdownId === listingId ? "open-dropdown" : ""}`}>
                        <div className="listing-image-side">
                          <img
                            src={item.imageUrl || item.image || "/placeholder.jpg"}
                            alt={item.name || item.title || "Listing image"}
                            className="approved-listing-image"
                          />
                          <div className="listing-meta">
                            <div className="listing-header-row">
                              <h3 className="flag-product-name">{item.name || item.title}</h3>
                              <span className="listing-price">R{Number(item.price || 0).toFixed(2)}</span>
                            </div>
                            <p className="flag-reporter-comment approval-description">{item.description}</p>
                          </div>
                        </div>

                        <div className="action-buttons-group">
                            {['Actions'].map((variant) => (
                              <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}-${listingId}`}
                                variant="warning"
                                title={variant}
                                show={openDropdownId === listingId}
                                onToggle={(isOpen) => handleDropdownToggle(isOpen, listingId)}
                                onSelect={() => setOpenDropdownId(null)}
                              >
                                <Dropdown.Item eventKey="1" onClick={() => handleRejectListing(listingId)}>Reject</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() => handleViewFull(item)}>View Listing</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4" onClick={() => handleApproveListing(listingId)} style={{fontWeight: "600"}}>Approve</Dropdown.Item>
                              </DropdownButton>
                            ))}
                        </div>
                      </div>
                    );
                  })
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

