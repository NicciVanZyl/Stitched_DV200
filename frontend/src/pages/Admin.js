import React from "react";
import Navbar from "../components/navbar";

function AdminPage() {
  return (
    <div className="admin-page">
      
      <Navbar />

      <div className="admin-wrapper">

        {/* SIDEBAR */}
        <div className="admin-sidebar">

          <div className="admin-profile-img"></div>

          <h2 className="admin-name">Jane Doe</h2>

          <div className="admin-nav">
            <button>View Flags</button>

            <button className="active-admin-btn">
              Approve Listings
            </button>

            <button>Edit Profile</button>

            <button>Sign Out</button>
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="admin-content">

          <h1 className="admin-title">
            Approve Listings
          </h1>

          <div className="listings-container">

            {[1, 2, 3, 4].map((item) => (
              <div className="listing-card" key={item}>

                {/* PRODUCT IMAGE */}
                <div className="listing-image"></div>

                {/* INFO */}
                <div className="listing-info">
                  <h3>Product Listing Name</h3>
                  <p>R000.00</p>
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

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminPage;