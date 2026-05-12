import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../App.css";
import Button from "react-bootstrap/Button";
import HomeHeroImg from "../images/HomeHeroImg.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StitchedWhiteLogo from "../images/StitchedWhiteLogo.png";
import HeroTagline from "../images/HeroTagline.png";
import OrangeFooter from "../components/OrangeFooter";

function Home() {
  
    return(
      <>
        <div className="homeContainer">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} className="homeHeroCard mt-3 ms-mx-5">
                <Row className="align-items-center align-content-center">
                  <Col lg={6} md={12} className="homeHeroText">
                    <img src={HeroTagline} alt="Stitched Logo and Tagline" className="homeHeroTagline ms-3 me-auto"/>
                    
                    <div className="contentHomeHero ms-5 me-auto">
                      <h1 className="homeTitle">
                        Online thrift store connecting closets, helping you curate your personal style!
                      </h1>
                      
                      <button className="customBtn heroBtn mt-4">Discover Shop</button>
                      
                      <div className="signUpPrompts mt-4" id="heroSignUpBtn">
                        <p>Not yet a member?</p>
                        <Button
                          as={Link} to="/signup"
                          variant="outline-light"
                          id="signUpBtnOutline" style={{color: '#ffffff'}}>Sign Up</Button>
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <img src={HomeHeroImg} alt="Home Hero" className="homeHeroImg"></img>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col lg={12} className="categoryContainer mt-3 ms-mx-5">
                <Row className="align-items-center">
                  <Col lg={6} className="shopByCategory">
                    <h2 className="categoryTitle">Shop by Category</h2>

                    <div className="categoriesWrapper">
                      {/* <img src={} alt="Category 1" className="categoryImg"/>
                      <img src={} alt="Category 2" className="categoryImg"/> */}
                    </div>
                  </Col> 
                </Row>
              </Col>
            </Row>
            <OrangeFooter />
          </Container> 
        </div>
      </>
    );
}

export default Home;