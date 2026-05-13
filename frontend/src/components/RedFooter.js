import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StitchedWhiteLogo from '../images/StitchedWhiteLogo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TTIcon from '../images/TTIcon.png';
import XIcon from '../images/XIcon.png';
import IGIcon from '../images/IGIcon.png';
import FBIcon from '../images/FBIcon.png';

function RedFooter() {
    return (
        <div className='footerContainer'>
            <Container>
                <Row className='footerContainer mt-5'>
                    {/* Socials */}
                    <Col lg={4} md={12} className='footerBrandSection'>
                        <p className='footerHeading'>FOLLOW US ON</p>
                        <div className='socialIcons'>
                            <Link to="#" className='social-icon'><img src={FBIcon}></img></Link>
                            <Link to="#" className='social-icon'><img src={IGIcon}></img></Link>
                            <Link to="#" className='social-icon'><img src={XIcon}></img></Link>
                            <Link to="#" className='social-icon'><img src={TTIcon}></img></Link>
                        </div>
                        <img src={StitchedWhiteLogo} alt='Stitched Logo' className='footerLogo' />
                    </Col>

                    {/* Support */}
                    <Col lg={4} md={6} className='footerLinks'>
                        <p className='footerHeading'>SUPPORT</p>
                        <div className='footerLinkGroup'>
                            <Link to="#" className='footerLink'>FAQS</Link>
                            <Link to="#" className='footerLink'>Returns</Link>
                            <Link to="#" className='footerLink'>Contact Us</Link>
                            <Link to="#" className='footerLink'>Shipping Info</Link>
                            <Link to="#" className='footerLink'>Stitched Rewards</Link>
                        </div>
                    </Col>

                    {/* Company Info */}
                    <Col lg={4} md={6} className='footerLinks'>
                        <p className='footerHeading'>COMPANY INFO</p>
                        <div className='footerLinkGroup'>
                            <Link to="#" className='footerLink'>About Us</Link>
                            <Link to="#" className='footerLink'>Refund Policy</Link>
                            <Link to="#" className='footerLink'>Privacy Policy</Link>
                            <Link to="#" className='footerLink'>Shipping Policy</Link>
                            <Link to="#" className='footerLink'>Terms of Service</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 

export default RedFooter;