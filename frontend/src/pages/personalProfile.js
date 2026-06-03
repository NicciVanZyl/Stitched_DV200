import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import "../App.css";
import ProfileTextFields from "../components/textField";
import axios from "axios";
import ProfileCards from "../components/profileCards";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activeListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [listings, setListings] = useState([]);
  const [likedListings, setLikedListings] = useState([]);
  const [previousListings, setPreviousListings] = useState([]);
  const { user, token, logout } = useAuth();

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

  const getActiveListings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/listing/active/${user?.id}`,
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

  const saveProfile = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5009/api/user/${user?.id}`,
        {
          name: profileData.firstName + " " + profileData.lastName,
          email: profileData.email,
          dateOfBirth: profileData.dateOfBirth,
          password: profileData.password,
          address: profileData.address,
          number: profileData.number,
        },
        { headers: { authorization: `Bearer ${token}` } },
      );
      console.log("Profile saved successfully:", res.data);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const RenderItems = (listings) => {
    return listings.map((listing) => <ProfileCards listing={listing} />);
  };

  useEffect(() => {
    getProfile();
    getActiveListings();
    getLikedListings();
    getPreviousListings();
  }, []);

  useEffect(() => {
    if (activeTab === "addListing") {
      navigate("/addListing");
    }
  }, [activeTab, navigate]);
  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="name-container">
            <p>{profileData.firstName}</p>
            <p>{profileData.lastName}</p>
          </div>
          <div id="profile-button">
            {[
              "activeListing",
              "previousListing",
              "viewLiked",
              "editProfile",
              "addListing",
              "signOut",
            ].map((tab) => {
              const tabLabels = {
                activeListing: "Active Listings",
                previousListing: "Previous Listings",
                viewLiked: "View Liked",
                editProfile: "Edit Profile Details",
                addListing: "Add Listing",
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
              {RenderItems(listings)}
            </>
          ) : activeTab === "previousListing" ? (
            <>
              <div id="previous-listings-title" className="previousListings">
                Previous Listings
              </div>
              {RenderItems(previousListings)}
            </>
          ) : activeTab === "viewLiked" ? (
            <>
              <div id="view-liked-title" className="viewLiked">
                View Liked
              </div>
              {RenderItems(likedListings)}
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
                    name: "dateOfBirth",
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
                    name: "number",
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
                    <ProfileTextFields
                      label={label}
                      value={profileData[name] || ""}
                      onChangeValue={(value) =>
                        setProfileData((prev) => ({
                          ...prev,
                          [name]: value,
                        }))
                      }
                    ></ProfileTextFields>
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
                  onClick={() => {
                    getProfile();
                  }}
                >
                  Cancel
                </button>
                <button className="btn-post" onClick={saveProfile}>
                  {" "}
                  Save Details{" "}
                </button>
              </div>
            </>
          ) : activeTab === "addListing" ? (
            <div></div>
          ) : activeTab === "signOut" ? (
            <>
              <div id="sign-out-title" className="signOut">
                Sign Out
              </div>
              <div className="sign-out-container">
                <div className="sign-out-message">
                  <p className="sign-out-text">
                    Are you sure you want to sign out?
                  </p>
                </div>
                <div className="sign-out-buttons">
                  <button
                    className="sign-out-cancel-btn"
                    onClick={() => setActiveTab("activeListing")}
                  >
                    Cancel
                  </button>
                  <button
                    className="sign-out-confirm-btn"
                    onClick={() => {
                      navigate("/");
                      logout();
                    }}
                  >
                    Sign Out
                  </button>
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
