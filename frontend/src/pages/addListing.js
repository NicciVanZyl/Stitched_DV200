import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("addListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            <p>Jane</p>
            <p>Doe</p>
          </div>
          <div id="profile-button">
            {["addListing"].map((tab) => {
              const tabLabels = {
                addListing: "Add Listing",
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
          <div id="add-listing-content">
            {activeTab === "addListing" ? (
              <>
                <div
                  id="product-information-title"
                  className="productInformationTitle"
                >
                  Product Information
                </div>

                <div
                  id="image-upload-container"
                  style={{ marginBottom: "20px" }}
                >
                  <label
                    htmlFor="image-input"
                    style={{
                      marginTop: "3rem",
                      marginLeft: "5.5rem",
                      display: "block",
                      marginBottom: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Image
                  </label>

                  <label htmlFor="image-input" id="upload-area">
                    <div id="upload-plus-box">
                      <span>+</span>
                    </div>
                  </label>

                  <input
                    id="image-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />

                  {uploadedImage && (
                    <div
                      id="image-preview-container"
                      style={{ marginTop: "15px" }}
                    >
                      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                        Preview:
                      </p>
                      <img
                        id="listing-preview-image"
                        src={uploadedImage}
                        alt="Listing preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "300px",
                          border: "1px solid #ccc",
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="field-group">
                  <label className="field-label">Name</label>
                  <input className="field-input" type="text" />
                </div>

                <div className="field-group">
                  <label className="field-label">Description</label>
                  <input className="field-input" type="text" />
                </div>

                <div className="field-row">
                  <div className="field-group">
                    <label className="field-label">Price</label>
                    <input
                      className="field-input"
                      type="number"
                      placeholder="R"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Size</label>
                    <select className="field-input field-select">
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field-group">
                    <label className="field-label">Choose Category</label>
                    <select className="field-input field-select">
                      <option>Women...</option>
                      <option>Men...</option>
                      <option>Kids...</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Sub Category</label>
                    <select className="field-input field-select">
                      <option>Sneakers...</option>
                      <option>Boots...</option>
                      <option>Sandals...</option>
                    </select>
                  </div>
                </div>

                <div id="form-buttons">
                  <button className="btn-cancel">Cancel</button>
                  <button className="btn-cancel">Save for Later</button>
                  <button className="btn-post">Post</button>
                </div>
              </>
            ) : (
              <div></div>
            )}
            <div id="pageContainer">{activeTab === "addListing" && <></>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
