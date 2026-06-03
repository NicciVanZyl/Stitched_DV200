import React, { useState } from "react";
import "./Profile.css";
import { useAuth } from "../context/authContext";
import axios from "axios";

export default function Profile() {
  const { user, token } = useAuth();
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState("addListing");
  const [hoverTab, setHoverTab] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sellerId, setSellerId] = useState();
  const [profileData, setProfileData] = useState({});
  const [sellerName, setSellerName] = useState();
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [uploadedImageFiles, setUploadedImageFiles] = useState([]);

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
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
    setUploadedImageFiles((prev) => [...prev, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!uploadedImageFiles.length) newErrors.image = "Please upload an image";
    if (!name.trim()) newErrors.name = "Name is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!price) newErrors.price = "Price is required";
    if (!size) newErrors.size = "Size is required";
    if (!category) newErrors.category = "Category is required";
    if (!subCategory) newErrors.subCategory = "Sub category is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const formData = new FormData();
      formData.append("image", uploadedImageFiles[0]);
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
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          price: price,
          description: description,
          size: size,
          category: category,
          subCategory: subCategory,
          ImgUrl: data.imageUrl,
          userId: user.id,
          userRating: user.rating,
        }),
      });

      if (!responsePost.ok) {
        throw new Error(`Failed to create listing: ${responsePost.status}`);
      }

      const listingData = await responsePost.json();
      console.log("Listing created successfully:", listingData);
      setSubmitStatus("success");

      // Reset form
      setName("");
      setPrice("");
      setDescription("");
      setSize("");
      setCategory("");
      setSubCategory("");
      setUploadedImages([]);
      setUploadedImageFiles([]);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div id="main-wrapper">
      <div id="content-container">
        <div id="yellow-section">
          <div id="profile-circle"></div>
          <div id="name-container">
            <p>{user.name}</p>
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
                {submitStatus === "success" && (
                  <div
                    style={{
                      margin: "0 5.5rem 1rem 5.5rem",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#d5c8a8",
                      border: "0.09rem solid #c4b49a",
                      color: "#421918",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "600",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    ✓ Listing posted successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    style={{
                      margin: "0 5.5rem 1rem 5.5rem",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#e6a5a4",
                      border: "0.09rem solid #b73e3a",
                      color: "#421918",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "600",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    ✗ Upload unsuccessful. Please try again.
                  </div>
                )}
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

                    <div
                      id="upload-area"
                      style={
                        errors.image ? { border: "0.09rem solid #b73e3a" } : {}
                      }
                    >
                      {uploadedImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`upload-${index}`}
                          style={{
                            width: "5.625rem",
                            height: "5.625rem",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                            flexShrink: 0,
                          }}
                        />
                      ))}
                      <label htmlFor="image-input" id="upload-plus-box">
                        <span>+</span>
                      </label>
                      {errors.image && (
                        <span
                          className="field-error"
                          style={{ marginLeft: "5.5rem" }}
                        >
                          {errors.image}
                        </span>
                      )}
                    </div>

                    <input
                      id="image-input"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Name</label>
                    <input
                      className="field-input"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      style={
                        errors.name ? { border: "0.09rem solid #b73e3a" } : {}
                      }
                    />
                    {errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                  </div>

                  <div className="field-group">
                    <label className="field-label">Description</label>
                    <input
                      className="field-input"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      style={
                        errors.description
                          ? { border: "0.09rem solid #b73e3a" }
                          : {}
                      }
                    />
                    {errors.description && (
                      <span className="field-error">{errors.description}</span>
                    )}
                  </div>

                  <div className="field-row">
                    <div className="field-group">
                      <label className="field-label">Price</label>
                      <input
                        className="field-input"
                        type="number"
                        placeholder="R"
                        onChange={(e) => setPrice(e.target.value)}
                        style={
                          errors.price
                            ? { border: "0.09rem solid #b73e3a" }
                            : {}
                        }
                      />
                      {errors.price && (
                        <span className="field-error">{errors.price}</span>
                      )}
                    </div>
                    <div className="field-group">
                      <label className="field-label">Size</label>
                      <select
                        className="field-input field-select"
                        onChange={(e) => setSize(e.target.value)}
                        style={
                          errors.size ? { border: "0.09rem solid #b73e3a" } : {}
                        }
                      >
                        <option>XXXS</option>
                        <option>XXS</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                      </select>
                      {errors.size && (
                        <span className="field-error">{errors.size}</span>
                      )}
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field-group">
                      <label className="field-label">Choose Category</label>
                      <select
                        className="field-input field-select"
                        onChange={(e) => setCategory(e.target.value)}
                        style={
                          errors.category
                            ? { border: "0.09rem solid #b73e3a" }
                            : {}
                        }
                      >
                        <option>womans</option>
                        <option>mens</option>
                        <option>kids</option>
                      </select>
                      {errors.category && (
                        <span className="field-error">{errors.category}</span>
                      )}
                    </div>
                    <div className="field-group">
                      <label className="field-label">Sub Category</label>
                      <select
                        className="field-input field-select"
                        onChange={(e) => setSubCategory(e.target.value)}
                        style={
                          errors.subCategory
                            ? { border: "0.09rem solid #b73e3a" }
                            : {}
                        }
                      >
                        <option>shoes</option>
                        <option>boots</option>
                        <option>sandals</option>
                        <option>shirts</option>
                        <option>pants</option>
                        <option>dresses</option>
                        <option>skirts</option>
                        <option>accessories</option>
                      </select>
                      {errors.subCategory && (
                        <span className="field-error">
                          {errors.subCategory}
                        </span>
                      )}
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
