import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PantoneCardSlateSilk from "../components/PantoneCardSlateSilk";
import PantoneCardMutedClay from "../components/PantoneCardMutedClay";
import PantoneCardSoftPeach from "../components/PantoneCardSoftPeach";
import PantoneCardBurgundy from "../components/PantoneCardBurgundy";
import PantoneCardPaleHaze from "../components/PantoneCardPaleHaze";
import PantoneCardSunset from "../components/PantoneCardSunset";
import PantoneCardTerracotta from "../components/PantoneCardTerracotta";
import PantoneCardDenim from "../components/PantoneCardDenim";
import PantoneCardPetal from "../components/PantoneCardPetal";
import PantoneCardMocha from "../components/PantoneCardMocha";
import PantoneCardSepia from "../components/PantoneCardSepia";
import PantoneCardDustRose from "../components/PantoneCardDustRose";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StitchedRedLogo from "../images/StitchedRedLogo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RedFooter from "../components/RedFooter";
import axios from "axios";
import BackToTop from "../components/btt";
import NotificationModal from "../components/modal";
import { useAuth } from '../context/authContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedColours, setSelectedColours] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const allCards = [
    PantoneCardSlateSilk,
    PantoneCardMutedClay,
    PantoneCardSoftPeach,
    PantoneCardBurgundy,
    PantoneCardSunset,
    PantoneCardPaleHaze,
    PantoneCardTerracotta,
    PantoneCardDustRose,
    PantoneCardPetal,
    PantoneCardMocha,
    PantoneCardSepia,
    PantoneCardDenim,
  ];

  // Shuffle Cards
  const [shuffledCards, setShuffledCards] = useState(() => {
    return [...allCards].sort(() => Math.random() - 0.5);
  });

  // Validation
  const isEmailInvalid =
    email.length > 0 && !email.includes("@") && !email.includes(".");
  const isPasswordInvalid = password.length > 0 && password.length < 6;
  const isNameInvalid = name.length > 0 && name.trim().length < 2;

  const SetLoginData = (userData, Token) => {
    // Stores JWT token and user data in local storage
    login(userData, Token);
  }

  const Register = async () => {
    try {
      const res = await axios.post("http://localhost:5009/api/user/register", {
        name,
        email,
        password,
        creativePassword: selectedColours.join(""),
      });

      SetLoginData(res.data.user, res.data.token);

      setUserName(name);
      setMessage("You're all set! Your account has been created.");
      setShowModal(true);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Registration failed. Please try again.",
        
      );
      setShowModal(true);
    }
  };

  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:5009/api/user/login", {
        email,
        password,
        creativePassword: selectedColours.join(""),
      });

      SetLoginData(res.data.user, res.data.token);


      setUserName(res.data.user.name);
      setMessage(`Welcome back, we're happy to see you!`);
      setShowModal(true);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed. Please try again.",
      );
      setShowModal(true);
    }
  };

  // Creative Login colour selection
  const handleColourSelect = (hex) => {
    if (selectedColours.length < 5) {
      const newSequence = [...selectedColours, hex];
      setSelectedColours(newSequence);
      console.log("Updated Sequence:", newSequence);
    }
  };

  // Undo for last clicked colour card
  const handleUndoColour = () => {
    setSelectedColours((prev) => prev.slice(0, -1));
  };

  // Modal
  const handleModalClose = () => {
    setShowModal(false);
    if (currentPage === "signup" && message.includes("all set")) {
      setCurrentPage("login");
      setSelectedColours([]);
    } else if (
      currentPage === "login" &&
      message.includes("happy to see you")
    ) {
      navigate("/Home");
    }
  };

  // Toggle between Login/Sign Up
  const renderPage = (activePage) => {
    if (activePage == "login") {
      return (
        <>
          <div className="loginHeader">
            <h1 className="loginText">Welcome Back!</h1>
            <img
              src={StitchedRedLogo}
              alt="Stitched Logo"
              className="stitchedLogo"
            ></img>
          </div>

          <div className="textFieldsContainer">
            <Box>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={isEmailInvalid}
                helperText={
                  isEmailInvalid ? "Please enter a valid email address" : ""
                }
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={password.length > 0 && password.length < 6}
                helperText={
                  password.length > 0 && password.length < 6
                    ? "Password must be at least 6 characters"
                    : ""
                }
              />

              <div className="d-flex flex-column align-items-center my-3 w-100">
                <p className="passwordPaletteText">
                  Select your unique colour palette~
                </p>
                <div className="d-flex justify-content-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "8px",
                        backgroundColor: selectedColours[i] || "#0a233f23",
                        border: selectedColours[i]
                          ? "1.5px solid #0A233F"
                          : "1.2px dashed #b1afaf",
                        transition: "background-color 0.2s ease",
                      }}
                    />
                  ))}
                </div>
                {selectedColours.length > 0 && (
                  <button
                    className="removeColourBtn"
                    onClick={handleUndoColour}
                  >
                    X Undo Last Color
                  </button>
                )}
              </div>

              <button onClick={() => Login()} className="customBtn loginBtn">
                Login
              </button>
            </Box>
          </div>

          <div className="loginFooter w-100">
            <div className="loginDivider" style={{ marginTop: "2rem" }}>
              <span>OR</span>
            </div>

            <div className="signUpPrompts">
              <p>Not yet a member?</p>
              <Button
                onClick={() => setCurrentPage("signup")}
                variant="outline-dark"
                className="customBtn"
                id="signUpBtnOutline"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </>
      );
    } else if (activePage == "signup") {
      return (
        <>
          <div className="loginHeader">
            <h1 className="loginText">Welcome To!</h1>
            <img
              src={StitchedRedLogo}
              alt="Stitched Logo"
              className="stitchedLogo"
            ></img>
          </div>

          <div className="textFieldsContainer">
            <Box>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={name.length > 0 && name.trim().length < 2}
                helperText={
                  name.length > 0 && name.trim().length < 2
                    ? "Name must be at least 2 characters"
                    : ""
                }
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={isEmailInvalid}
                helperText={
                  isEmailInvalid ? "Please enter a valid email address" : ""
                }
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={password.length > 0 && password.length < 6}
                helperText={
                  password.length > 0 && password.length < 6
                    ? "Password must be at least 6 characters"
                    : ""
                }
              />

              <div className="d-flex flex-column align-items-center my-3 w-100">
                <p className="passwordPaletteText">
                  {" "}
                  Select your unique colour palette~{" "}
                </p>
                <div className="d-flex justify-content-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "8px",
                        backgroundColor: selectedColours[i] || "#0a233f23",
                        border: selectedColours[i]
                          ? "1.5px solid #0A233F"
                          : "1.2px dashed #b1afaf",
                        transition: "background-color 0.2s ease",
                      }}
                    />
                  ))}
                </div>
                {selectedColours.length > 0 && (
                  <button
                    className="removeColourBtn"
                    onClick={handleUndoColour}
                  >
                    X Undo Last Color
                  </button>
                )}
              </div>

              <button onClick={() => Register()} className="customBtn loginBtn">
                Sign Up
              </button>
            </Box>
          </div>

          <div className="loginFooter w-100">
            <div className="loginDivider" style={{ marginTop: "2rem" }}>
              <span>OR</span>
            </div>

            <div className="signUpPrompts">
              <p>Already a member?</p>
              <Button
                onClick={() => setCurrentPage("login")}
                variant="outline-dark"
                className="customBtn"
                id="signUpBtnOutline"
              >
                Login
              </Button>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="loginContainer">
      <Container fluid>
        <Row className="justify-content-center align-items-stretch">
          {/* Pantone Cards */}
          <Col lg={6} md={12}>
            <Row className="mx-2 h-100">
              {shuffledCards.map((CardComponent, index) => (
                <Col key={index} lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                  <CardComponent onSelect={handleColourSelect} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Login/Sign Up */}
          <Col lg={4} md={10} sm={12} className="loginInputsContainer">
            {renderPage(currentPage)}
          </Col>
        </Row>
      </Container>

      <NotificationModal
        show={showModal}
        message={message}
        userName={userName}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default Login;
