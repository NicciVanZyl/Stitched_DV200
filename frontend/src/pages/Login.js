import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function Login() {
  const [currentPage, setCurrentPage] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const Register = async () => {
    // try {
    //   console.log(name);
    //   console.log(password);
    //   console.log(email);
    
    //   const res = await fetch("http://localhost:5000/api/user/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ name: name, email: email, password: password }),
    //   });
    //   if (!res.ok) {
    //     const e = await res.json();
    //     throw new Error(e.message);
    //   }
    //   setMessage(res.data);
    // } catch (e) {
    //   console.log(e);
    // }
     const res = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password
    });

    setMessage(res.data);
  };

  const Login = async () => {
    const res = await axios.post("http://localhost:5000/api/user/login", {
      email,
      password,
    });

    setMessage(res.data);
  };

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
            />
          </div>

          <div className="textFieldsContainer">
            <Box>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="passwordPaletteText">
                Select your unique colour palette~
              </p>
              <p className="passwordPaletteText">{message}</p>
              <button onClick={() => Login()} className="customBtn loginBtn">
                Login
              </button>
            </Box>
          </div>

          <div className="loginFooter w-100">
            <div className="loginDivider">
              <span>OR</span>
            </div>

            <div className="signUpPrompts">
              <p>Not yet a member?</p>
              <Button
                onClick={() => setCurrentPage("signup")}
                variant="outline-dark"
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
            <h1 className="loginText">Welcome Back!</h1>
            <img
              src={StitchedRedLogo}
              alt="Stitched Logo"
              className="stitchedLogo"
            />
          </div>

          <div className="textFieldsContainer">
            <Box>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="passwordPaletteText">
                Select your unique colour palette~
              </p>
              <p className="passwordPaletteText">{message}</p>
              <button onClick={() => Register()} className="customBtn loginBtn">
                Sign Up
              </button>
            </Box>
          </div>

          <div className="loginFooter w-100">
            <div className="loginDivider">
              <span>OR</span>
            </div>

            <div className="signUpPrompts">
              <p>Already a member?</p>
              <Button
                onClick={() => setCurrentPage("login")}
                variant="outline-dark"
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
        {/* Pantone Cards */}
        <Row className="pantoneCardsContainer mx-2">
          <Col lg={6} md={12}>
            <Row className="mx-2">
              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardSlateSilk />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardMutedClay />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardSoftPeach />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardBurgundy />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardSunset />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardPaleHaze />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardTerracotta />
              </Col>

              <Col lg={3} md={4} className="mb-lg-3 mb-md-3 mb-4">
                <PantoneCardDustRose />
              </Col>

              <Col lg={3} md={4} className="mb-lg-0 mb-md-3 mb-4">
                <PantoneCardPetal />
              </Col>

              <Col lg={3} md={4} className="mb-lg-0 mb-md-3 mb-4">
                <PantoneCardMocha />
              </Col>

              <Col lg={3} md={4} className="mb-lg-0 mb-md-3 mb-4">
                <PantoneCardSepia />
              </Col>

              <Col lg={3} md={4} className="mb-lg-0 mb-md-3 mb-4">
                <PantoneCardDenim />
              </Col>
            </Row>
          </Col>

          {/* Login/Sign Up */}
          <Col lg={5} md={12} className=" loginInputsContainer">
            {renderPage(currentPage)}
          </Col>
        </Row>

        <RedFooter />
      </Container>
    </div>
  );
}

export default Login;
