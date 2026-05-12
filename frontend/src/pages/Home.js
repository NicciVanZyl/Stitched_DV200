import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../App.css";
import Button from "react-bootstrap/Button";
import HomeHeroImg from "../images/HomeHeroImg.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  
    return(
      <>
        <div className="homeContainer">
          <Container fluid>
            <Row className="homeHero">
              <Col lg={6} md={12}>
                <h5 className="homeTitle">Online thrift store connecting closets, helping you curate your personal style!</h5>
                <button className="customBtn">Discover Shop</button>
                <div className="signUpPrompts">
                  <p>Not yet a member?</p>
                  <Button
                    // onClick={}
                    as={Link} to="/"
                    variant="outline-dark"
                    id="signUpBtnOutline">Sign Up</Button>
                </div>
              </Col>

              <Col lg={6} md={12}>
                <img src={HomeHeroImg} alt="Home Hero" className="homeHeroImg"/>
              </Col>
            </Row>
          </Container>  
        </div>
      </>
    );
}

export default Home;