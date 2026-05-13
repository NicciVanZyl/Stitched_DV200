import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StitchedRedLogo from '../images/StitchedRedLogo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TTIconRed from '../images/TTIconRed.png';
import XIconRed from '../images/XIconRed.png';
import IGIconRed from '../images/IGIconRed.png';
import FBIconRed from '../images/FBIconRed.png';

function OrangeFooter() {
    return (
        <div className='footerContainer'>
            <Container>
                <Row className='footerContainer mt-5'>
                    {/* Socials */}
                    <Col lg={4} md={12} className='orngfooterBrandSection'>
                        <p className='orngfooterHeading'>FOLLOW US ON</p>
                        <div className='orngsocialIcons'>
                            <Link to="#" className='orngsocial-icon'><img src={FBIconRed}></img></Link>
                            <Link to="#" className='orngsocial-icon'><img src={IGIconRed}></img></Link>
                            <Link to="#" className='orngsocial-icon'><img src={XIconRed}></img></Link>
                            <Link to="#" className='orngsocial-icon'><img src={TTIconRed}></img></Link>
                        </div>
                        <img src={StitchedRedLogo} alt='Stitched Logo' className='orngfooterLogo' />
                    </Col>

                    {/* Support */}
                    <Col lg={4} md={6} className='orngfooterLinks'>
                        <p className='orngfooterHeading'>SUPPORT</p>
                        <div className='orngfooterLinkGroup'>
                            <Link to="#" className='orngfooterLink'>FAQS</Link>
                            <Link to="#" className='orngfooterLink'>Returns</Link>
                            <Link to="#" className='orngfooterLink'>Contact Us</Link>
                            <Link to="#" className='orngfooterLink'>Shipping Info</Link>
                            <Link to="#" className='orngfooterLink'>Stitched Rewards</Link>
                        </div>
                    </Col>

                    {/* Company Info */}
                    <Col lg={4} md={6} className='orngfooterLinks'>
                        <p className='orngfooterHeading'>COMPANY INFO</p>
                        <div className='orngfooterLinkGroup'>
                            <Link to="#" className='orngfooterLink'>About Us</Link>
                            <Link to="#" className='orngfooterLink'>Refund Policy</Link>
                            <Link to="#" className='orngfooterLink'>Privacy Policy</Link>
                            <Link to="#" className='orngfooterLink'>Shipping Policy</Link>
                            <Link to="#" className='orngfooterLink'>Terms of Service</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 

export default OrangeFooter;