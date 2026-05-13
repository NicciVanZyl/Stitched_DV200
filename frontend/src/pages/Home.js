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
import NewCtgryImg from "../images/NewCtgryImg.png";
import WomenCtgryImg from "../images/WomenCtgryImg.png";
import MenCtgryImg from "../images/MenCtgryImg.png";
import KidsCtgryImg from "../images/KidsCtgryImg.png";
import AccessCtgryImg from "../images/AccessCtgryImg.png";
import ShoeCtgryImg from "../images/ShoeCtgryImg.png";
import ProductCard from "../components/ProductCard";
import BackToTop from "../components/btt";

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
                  <Row className="mt-5">
                    <Col lg={12}>
                      <h2 className="categoryTitle mb-4">Shop by Category</h2>
                      
                      <Row className="justify-content-between g-3"> 
                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={NewCtgryImg} alt="New In" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">New</p>
                        </Col>

                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={WomenCtgryImg} alt="Women" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">Women</p>
                        </Col>

                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={MenCtgryImg} alt="Men" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">Men</p>
                        </Col>

                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={KidsCtgryImg} alt="Kids" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">Kids</p>
                        </Col>

                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={ShoeCtgryImg} alt="Shoes" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">Shoes</p>
                        </Col>

                        <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center">
                          <div className="categoryImgWrapper">
                            <img src={AccessCtgryImg} alt="Accessories" className="categoryImg"/>
                          </div>
                          <p className="categoryLabel">Accessories</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>

            <Row className="justify-content-center mt-5">
              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>

              <Col lg={4} md={6} className="mb-4">
                <ProductCard />
              </Col>
            </Row>

            <Row>
              <Col lg={12} className="align-items-center mt-5">
                <div className="promoBanner">
                  <div className="promoTextWrapper">
                    <p className="promoSubtext">Limited time offer</p>
                    <h3 className="promoTitle">First Purchase 20% Off</h3>
                  </div>
                  <button className="customBtn bannerBtn m-0">Shop</button>
                </div>
              </Col>
            </Row>

            <BackToTop />

            <OrangeFooter />
          </Container> 
        </div>
      </>
    );
}

export default Home;