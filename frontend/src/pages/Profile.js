import React, { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [activePage, setActivePage] = useState(1);
  const [hoverListing1, setHoverListing1] = useState(false);
  const [hoverListing2, setHoverListing2] = useState(false);
  <div
    id="unused-container"
    style={{
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      background: "#f5ede0",
    }}
  ></div>;
  return (
    <div
      id="main-wrapper"
      style={{
        background:
          "linear-gradient(180deg, rgba(239, 227, 199, 1), rgba(237, 120, 73, 1))",
        minHeight: "100vh",
      }}
    >
      <div
        id="content-container"
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          width: "fit-content",
        }}
      >
        <div
          id="yellow-section"
          style={{
            marginTop: "5rem",
            marginLeft: "6rem",
            maxHeight: "64rem",
            width: "25rem",
            background: "#F5BD54",
            display: "flex",
            height: "58rem",
            borderTopLeftRadius: "32px",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: "0",
          }}
        >
          <div
            id="profile-circle"
            style={{
              marginTop: "3.81rem",
              width: "10.25rem",
              height: "10.25rem",
              borderRadius: "50%",
              background: "#ffffff",
              overflow: "hidden",
              alignItems: "center",
            }}
          ></div>
          <div
            id="name-container"
            style={{
              textAlign: "center",
              width: "11.3125rem",
              height: "9.5625rem",
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "4.23613rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            <p
              style={{
                marginTop: "0.25rem",
                marginBottom: "0rem",
              }}
            >
              Jane
            </p>
            <p
              style={{
                marginTop: "0.10rem",
              }}
            >
              Doe
            </p>
          </div>
          <div
            id="profile-button"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "3.37rem",
              width: "25rem",
              height: "5.9375rem",
              background: "rgba(237, 120, 73, 0.50)",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <div
              id="profile-bar"
              style={{
                width: "1.5rem",
                height: "5.9375rem",
                background: "#ED7849",
                overflow: "hidden",
              }}
            ></div>
            <div
              id="profile-text"
              className="profileSection"
              style={{
                width: "12.125rem",
                height: "3.0625rem",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "2.61813rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                overflow: "hidden",
                marginLeft: "6.44rem",
              }}
            >
              Profile
            </div>
          </div>
        </div>
        <div
          id="right-panel"
          style={{
            marginTop: "5rem",
            flex: "1",
            height: "58rem",
            borderRadius: "0 2rem 0 0",
            background: "#EFE3C7",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-5px 0 40px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            id="profile-details-title"
            className="profileDetails"
            style={{
              color: "#421918",
              fontFamily: "Pinyon Script",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "1.62rem",
              marginLeft: "16.5rem",
            }}
          >
            Profile Details
          </div>
          <div
            id="name-field-row"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "4.4375rem",
            }}
          >
            <div
              id="name-label"
              style={{
                borderRadius: "2rem",
                background: "#ED7849",
                width: "11.75rem",
                height: "4.4375rem",
                padding: "0.625rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                marginLeft: "4.12rem",
                marginTop: "4.12rem",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "1.618rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  textAlign: "center",
                  marginTop: "0.62rem",
                }}
              >
                Name
              </div>
            </div>
            <div
              id="name-input"
              style={{
                display: "flex",
                width: "31.625rem",
                height: "4.4375rem",
                padding: "0.625rem 0.625rem 0.625rem 3.125rem",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "2rem",
                background: "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                marginTop: "4.12rem",
                marginLeft: "1.44rem",
              }}
            >
              <div
                style={{
                  color: "#421918",
                  fontFamily: "Montserrat",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Jane
              </div>
            </div>
          </div>
          <div
            id="surname-field-row"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "4.4375rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              id="surname-label"
              style={{
                borderRadius: "2rem",
                background: "#ED7849",
                width: "11.75rem",
                height: "4.4375rem",
                padding: "0.625rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                marginLeft: "4.12rem",
                marginTop: "4.12rem",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  fontFamily: "Montserrat",
                  fontSize: "1.618rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  textAlign: "center",
                  marginTop: "0.62rem",
                }}
              >
                Surname
              </div>
            </div>
            <div
              id="surname-input"
              style={{
                display: "flex",
                width: "31.625rem",
                height: "4.4375rem",
                padding: "0.625rem 0.625rem 0.625rem 3.125rem",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "2rem",
                background: "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
                marginTop: "4.12rem",
                marginLeft: "1.44rem",
              }}
            >
              <div
                style={{
                  color: "#421918",
                  fontFamily: "Montserrat",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Doe
              </div>
            </div>
          </div>
          <div
            id="active-listings-title"
            className="activeListings"
            style={{
              color: "#421918",
              fontFamily: "Pinyon Script",
              fontSize: "3.75rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "6.25rem",
              marginLeft: "16.5rem",
            }}
          >
            Active Listings
          </div>
          <div
            id="listing-row-1"
            style={{
              width: "53rem",
              height: "10.375rem",
              background: "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
              marginTop: "2.19rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1rem",
            }}
          >
            <div
              id="listing-1-image"
              style={{
                width: "8.375rem",
                height: "8.375rem",
                borderRadius: "2rem",
                background: "#fff",
              }}
            >
              <div
                id="listing-1-title"
                style={{
                  width: "20rem",
                  marginTop: "1rem",
                  marginLeft: "9.375rem",
                  color: "#421918",
                  fontFamily: "Montserrat",
                  fontSize: "1.618rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  position: "absolute",
                }}
              >
                Placeholder for listing
              </div>
              <div
                id="listing-1-price"
                style={{
                  width: "20rem",
                  marginTop: "3.2rem",
                  marginLeft: "9.375rem",
                  color: "#ffffff",
                  fontFamily: "Montserrat",
                  fontSize: "2.61813rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  position: "absolute",
                }}
              >
                R00 000
              </div>
            </div>
            <button
              onClick={() => console.log("View Listing clicked")}
              onMouseEnter={() => setHoverListing1(true)}
              onMouseLeave={() => setHoverListing1(false)}
              style={{
                width: "12rem",
                height: "3rem",
                background: hoverListing1
                  ? "linear-gradient(180deg, rgba(237, 120, 73, 1) 0%, rgba(211, 89, 40, 1) 100%)"
                  : "linear-gradient(180deg, rgba(255, 206, 113, 1) 0%, rgba(241, 160, 9, 1) 100%)",
                borderRadius: "0.5rem",
                marginRight: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                color: hoverListing1 ? "#fff" : "#421918",
                fontFamily: "Montserrat",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow:
                  "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              View Listing
            </button>
          </div>
          <div
            id="listing-row-2"
            style={{
              width: "53rem",
              height: "10.375rem",
              background: "linear-gradient(90deg, #E8B098 0%, #B73E3A 100%)",
              marginTop: "1.38rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 1rem",
            }}
          >
            <div
              id="listing-2-image"
              style={{
                width: "8.375rem",
                height: "8.375rem",
                borderRadius: "2rem",
                background: "#fff",
              }}
            >
              <div
                id="listing-2-title"
                style={{
                  width: "20rem",
                  marginTop: "1rem",
                  marginLeft: "9.375rem",
                  color: "#421918",
                  fontFamily: "Montserrat",
                  fontSize: "1.618rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  position: "absolute",
                }}
              >
                Placeholder for listing
              </div>
              <div
                id="listing-2-price"
                style={{
                  width: "20rem",
                  marginTop: "3.2rem",
                  marginLeft: "9.375rem",
                  color: "#ffffff",
                  fontFamily: "Montserrat",
                  fontSize: "2.61813rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  position: "absolute",
                }}
              >
                R00 000
              </div>
            </div>
            <button
              onClick={() => console.log("View Listing clicked")}
              onMouseEnter={() => setHoverListing2(true)}
              onMouseLeave={() => setHoverListing2(false)}
              style={{
                width: "12rem",
                height: "3rem",
                background: hoverListing2
                  ? "linear-gradient(180deg, rgba(237, 120, 73, 1) 0%, rgba(211, 89, 40, 1) 100%)"
                  : "linear-gradient(180deg, rgba(255, 206, 113, 1) 0%, rgba(241, 160, 9, 1) 100%)",
                borderRadius: "0.5rem",
                marginRight: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                color: hoverListing2 ? "#fff" : "#421918",
                fontFamily: "Montserrat",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow:
                  "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              View Listing
            </button>
          </div>
          <div
            id="pageContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <button
              id="pageOne"
              onClick={() => setActivePage(1)}
              style={{
                width: "3.9375rem",
                height: "3.9375rem",
                background: activePage === 1 ? "#B73E3A" : "#E6A5A4",
                marginTop: "1.12rem",
                border: "none",
                cursor: "pointer",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "2.61813rem",
                fontWeight: "700",
                transition: "background-color 0.3s ease",
              }}
            >
              1
            </button>
            <button
              id="pageTwo"
              onClick={() => setActivePage(2)}
              style={{
                width: "3.9375rem",
                height: "3.9375rem",
                background: activePage === 2 ? "#B73E3A" : "#E6A5A4",
                marginTop: "1.12rem",
                border: "none",
                cursor: "pointer",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "2.61813rem",
                fontWeight: "700",
                transition: "background-color 0.3s ease",
              }}
            >
              2
            </button>
            <button
              id="pageThree"
              onClick={() => setActivePage(3)}
              style={{
                width: "3.9375rem",
                height: "3.9375rem",
                background: activePage === 3 ? "#B73E3A" : "#E6A5A4",
                marginTop: "1.12rem",
                border: "none",
                cursor: "pointer",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "2.61813rem",
                fontWeight: "700",
                transition: "background-color 0.3s ease",
              }}
            >
              3
            </button>
            <img
              id="arrowBottom"
              src="/arrow.png"
              alt="arrow"
              style={{
                height: "3rem",
                width: "4rem",
                marginTop: "1.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
