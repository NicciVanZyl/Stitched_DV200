import React, { useState } from "react";
import "./CartAndAndmin.css";
 <div className="admin-page"></div>
const AdminProfile = () => {

  const [profile, setProfile] = useState({
    address: "",
    firstName: "",
    surname: "",
    birthDate: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="dashboard-card">

      {/* LEFT SIDEBAR */}
      <aside className="sidebar-panel">

        <div
          className="avatar-circle"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400')",
          }}
        />

        <h2 className="admin-name">
          Jane Doe
        </h2>

        <div className="sidebar-tabs">

          <button className="sidebar-tab-btn">
            View Flags
          </button>

          <button className="sidebar-tab-btn">
            Approve Listings
          </button>

          <button className="sidebar-tab-btn active">
            Edit Profile
          </button>

          <button className="sidebar-tab-btn">
            Add Listing
          </button>

          <button className="sidebar-tab-btn">
            Sign Out
          </button>

        </div>

      </aside>

      {/* RIGHT SIDE */}
      <main className="content-window">

        <h1 className="dashboard-title">
          Profile Details
        </h1>

        <div className="profile-fields-grid">

          <div className="profile-field-row">

            <div className="field-label-pill">
              Address
            </div>

            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={profile.address}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Name
            </div>

            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={profile.firstName}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Surname
            </div>

            <input
              type="text"
              name="surname"
              placeholder="Enter surname"
              value={profile.surname}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Birth Date
            </div>

            <input
              type="text"
              name="birthDate"
              placeholder="DD/MM/YYYY"
              value={profile.birthDate}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Email
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={profile.email}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Mobile Number
            </div>

            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={profile.mobile}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

          <div className="profile-field-row">

            <div className="field-label-pill">
              Password
            </div>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={profile.password}
              onChange={handleInputChange}
              className="field-value-pill"
            />

          </div>

        </div>

        {/* BUTTONS */}

        <div className="profile-actions-row">

          <button className="cancelBtn">
            Cancel
          </button>

          <button className="customBtn">
            Save Details
          </button>

        </div>

      </main>

    </div>
  );
};

export default AdminProfile;