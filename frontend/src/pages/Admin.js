import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CartAndAndmin.css";
import { useAuth } from '../context/authContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function AdminPage() {
  const { user, token, isAdmin } = useAuth();

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

  const tabs = [
    "viewFlags",
    "approveListings",
    "editProfile",
    "addListing",
    "switchProfile",
  ];

  const tabLabels = {
    viewFlags: "View Flags",
    approveListings: "Approve Listings",
    editProfile: "Edit Profile Details",
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
      const res = await axios.get("http://localhost:5009/api/listing/awaitingApproval", { headers: { authorization: `Bearer ${token}` } });
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

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

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

  function handleProfileSubmit(e) {
    e.preventDefault();
    console.log("Updated Profile Data: ", profile);
  }

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

      await axios.patch(`http://localhost:5009/api/listing/${listingId}`, {}, config);
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
  if (isAdmin) {

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
                  flaggedProducts.map((product) => {
                    const isDropdownOpen = openDropdownId === (product._id || product.id);
                    return (
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

                        <div className="dropdown-action-container">
                          <button
                            type="button"
                            className="dropdown-trigger-btn"
                            onClick={() => toggleDropdown(product._id || product.id)}
                          >
                            Actions
                          </button>
                          <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`}>
                            <button
                              type="button"
                              className="dropdown-action-item"
                              onClick={() => handleDropdownAction("dismiss", product._id || product.id)}
                            >
                              Dismiss
                            </button>
                            <button type="button" className="dropdown-action-item">Ban User</button>
                            <button type="button" className="dropdown-action-item">View Full</button>
                            <button
                              type="button"
                              className="dropdown-action-item delete-action"
                              onClick={() => handleDropdownAction("delete", product._id || product.id)}
                            >
                              Delete Flag
                            </button>
                          </div>
                        </div>
                      </div>
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
                                  <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
                                  <Dropdown.Item eventKey="3">View Listing</Dropdown.Item>
                                  <Dropdown.Divider />
                                  <Dropdown.Item eventKey="4" onClick={() => handleApproveListing(item._id || item.id)}>Approve</Dropdown.Item>
                                </DropdownButton>
                              ),
                            )}
                          </div>
                          {/* <button
                          type="button"
                          className="customBtn saveProfileBtn compact-action-btn"
                          onClick={() => handleApproveListing(item._id || item.id)}
                        >
                          Approve
                        </button> */}
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

            {/* Edit Profile Tab */}
            {activeTab === "editProfile" && (
              <div className="admin-page">
                <div className="header-title profile-header-align">Edit Profile Details</div>

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

                  {/* ACTIONS */}
                  <div className="listing-actions">
                    <button className="approve-btn">
                      Approve
                    </button>

                    <button className="delete-btn">
                      Delete
                    </button>
                  </div>
                </form>
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
              "editProfile",
              "addListing",
              "switchProfile",
            ].includes(activeTab) && <div className="empty-spacer"></div>}
          </div>

        </div>
      </div>
    );
  } else {
    return (
      <div id="main-wrapper">
        <div id="content-container">
          <div style={{ 'marginTop': "10%" }}>

            <h2>You are not an admin</h2>
            <button className="customBtn" style={{ 'height': "fit-content", textDecoration: 'none' }}><Link style={{ 'color': "#000", textDecoration: 'none' }} to="/Home">Return to Home Page</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;

