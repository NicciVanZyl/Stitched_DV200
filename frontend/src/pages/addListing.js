import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("addListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [uploadedImageFile, setUploadedImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uploadedImageFile) {
      alert("Please upload an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", uploadedImageFile);
      const response = await fetch("/api/listing/image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Image upload failed: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.imageUrl);

      const responsePost = await fetch("/api/listing/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          description,
          size,
          category,
          subCategory,
          imageUrl: data.imageUrl,
        }),
      });

      if (!responsePost.ok) {
        throw new Error(`Failed to create listing: ${responsePost.status}`);
      }

      const listingData = await responsePost.json();
      console.log("Listing created successfully:", listingData);
      alert("Listing posted successfully!");
      // Reset form
      setName("");
      setPrice("");
      setDescription("");
      setSize("");
      setCategory("");
      setSubCategory("");
      setUploadedImage(null);
      setUploadedImageFile(null);
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
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
                <form onSubmit={handleSubmit} id="addListingForm">
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
                    <input
                      className="field-input"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Description</label>
                    <input
                      className="field-input"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="field-row">
                    <div className="field-group">
                      <label className="field-label">Price</label>
                      <input
                        className="field-input"
                        type="number"
                        placeholder="R"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Size</label>
                      <select
                        className="field-input field-select"
                        onChange={(e) => setSize(e.target.value)}
                      >
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
                      <select
                        className="field-input field-select"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Women...</option>
                        <option>Men...</option>
                        <option>Kids...</option>
                      </select>
                    </div>
                    <div className="field-group">
                      <label className="field-label">Sub Category</label>
                      <select
                        className="field-input field-select"
                        onChange={(e) => setSubCategory(e.target.value)}
                      >
                        <option>Sneakers...</option>
                        <option>Boots...</option>
                        <option>Sandals...</option>
                      </select>
                    </div>
                  </div>

                  <div id="form-buttons">
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn-cancel">Save for Later</button>
                    <button
                      className="btn-post"
                      type="submit"
                      form="addListingForm"
                    >
                      Post
                    </button>
                  </div>
                </form>
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
