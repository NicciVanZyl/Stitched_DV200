import React, { useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import placeholderImage from "../images/product image placeholder.png";
import Footer from "../components/RedFooter";
import Button from "react-bootstrap/Button";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FlagIcon from "@mui/icons-material/Flag";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import "./PDP.css";
import FlagModal from "../components/flagModal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/cartContext";
import ConfirmModal from "../components/modal"

//Custom styling for Icon Buttons
const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          backgroundColor: "transparent",

          "&:hover": {
            backgroundColor: "transparent",
          },

          "&:active": {
            transform: "scale(0.95)",
          },

          //Icon
          "& .MuiSvgIcon-root": {
            transition: "0.2s ease",
            fontSize: "45px",
          },
          "&:hover .MuiSvgIcon-root": {
            transform: "scale(1.2)",
            color: "#ed7849",
          },
        },
      },
    },
  },
});

function ProductDetails() {
  const { addToCart } = useCart();
  const { state } = useLocation();
  const { listing } = state;
  const navigate = useNavigate();
  const handleViewSeller = () => {
    navigate(`/Profile/${listing.postedBy}`, {
      state: { sellerId: listing.postedBy, sellerName: sellerName },
    });
  };
  const { user, token } = useAuth();

  const [selectedFlag, setSelectedFlag] = useState(false);
  const [selectedLike, setSelectedLike] = useState(false);
  const [showFlagModal, setShowFlagModal] = useState(false);
  const [sellerName, setSellerName] = useState();
  const [sellerRating, setSellerRating] = useState();
  const [confirmMessage, setConfirmMessage] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const GetSellerInfo = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/user/` + listing.postedBy,
      );
      setSellerName(res.data.name);
      setSellerRating(res.data.rating);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
  const GetBuyerLikes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5009/api/listing/getUserLikes`,
        { headers: { authorization: `Bearer ${token}` } },
      );
      res.data.data.listings.forEach((listings) => {
        if (listings._id == listing._id) {
          setSelectedLike(true);
        }
      });
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  const SetAsLiked = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:5009/api/listing/${listing._id}`,
        {},
        { headers: { authorization: `Bearer ${token}` } },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  const setLiked = () => {
    setSelectedLike(!selectedLike);
    SetAsLiked();
  };

  useEffect(() => {
    GetSellerInfo();
    GetBuyerLikes();
  }, []);

  useEffect(() => {
    if (showFlagModal) {
      setSelectedFlag(true);
    } else {
      setSelectedFlag(false);

    }
  }, [showFlagModal]);

  const renderPage = () => {
    if (listing.isSold == true) {
      return (<Stack direction='horizontal' gap={4}>
        <h2>This listing has been sold</h2>
      </Stack>)
    } else {
      return (<Stack direction='horizontal' gap={4}>
        <button className="customBtn pdButton" onClick={() => {
          addToCart(listing._id, sellerName, listing.postedBy);
          setConfirmMessage("Item added to cart!");
          setShowConfirm(true);
        }}>Add to Cart</button>
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={() => setLiked()}
            sx={{
              "& .MuiSvgIcon-root": {
                color: selectedLike ? "#B73E3A" : "#F5BD54",
                transition: "0.2s",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setSelectedFlag(!selectedFlag);
              setShowFlagModal(true);
            }}
            sx={{
              "& .MuiSvgIcon-root": {
                color: selectedFlag ? "#B73E3A" : "#F5BD54",
                transition: "0.2s",
              },
            }}
          >
            <FlagIcon />
          </IconButton>
        </ThemeProvider>
      </Stack>)
    }
  }

  return (
    <div className="loginContainer">
      <FlagModal
        isOpen={showFlagModal}
        setClosed={() => {
          setShowFlagModal(false);
          setConfirmMessage("Flag submitted.");
          setShowConfirm(true);
        }}
        postID={listing._id}
      ></FlagModal>
      <Container fluid>
        <Row>
          <Col sm={12} className="mx-auto productDetails">
            <Row>
              <Col lg={6} md={12} className="mb-3 mb-lg-0 mx-auto">
                <div id="pdImageContainer">
                  <img id="pdImage" src={listing.imageUrl}></img>
                </div>
              </Col>
              <Col lg={6} md={12} className="pdDetails">
                <Stack gap={5}>
                  <Stack gap={4}>
                    <div>
                      <h1>{listing.name}</h1>
                      <h2>R{listing.price}</h2>
                    </div>
                    <Stack>
                      <Button id="sellerNameLink" onClick={handleViewSeller}>
                        <h3>{sellerName}</h3>
                      </Button>
                      <Stack direction="horizontal" className="my-auto" gap={2}>
                        <Rating
                          name="size-medium"
                          value={parseFloat(sellerRating)}
                          precision={0.5}
                          readOnly
                        />
                        <p style={{ "margin": 0 }}>{sellerRating}</p>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack>
                    <p>Size: {listing.size}</p>
                    <p>Category: {listing.category}</p>
                    <p>Sub-Category: {listing.subCategory}</p>
                    <p>Description: {listing.description}</p>
                  </Stack>
                  {renderPage()}
                </Stack>
              </Col>
            </Row>
          </Col>
        </Row>
        <ConfirmModal show={showConfirm} message={confirmMessage} userName={user.name} onClose={() => {
          setShowConfirm(false);
        }}>

        </ConfirmModal>
        <Footer />
      </Container>
    </div>
  );
}

export default ProductDetails;
