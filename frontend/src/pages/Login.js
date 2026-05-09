import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PantoneCardSlateSilk from '../components/PantoneCardSlateSilk';
import PantoneCardMutedClay from '../components/PantoneCardMutedClay';
import PantoneCardSoftPeach from '../components/PantoneCardSoftPeach';
import PantoneCardBurgundy from '../components/PantoneCardBurgundy';
import PantoneCardPaleHaze from '../components/PantoneCardPaleHaze';
import PantoneCardSunset from '../components/PantoneCardSunset';
import PantoneCardTerracotta from '../components/PantoneCardTerracotta';
import PantoneCardDenim from '../components/PantoneCardDenim';
import PantoneCardPetal from '../components/PantoneCardPetal';
import PantoneCardMocha from '../components/PantoneCardMocha';
import PantoneCardSepia from '../components/PantoneCardSepia';
import PantoneCardDustRose from '../components/PantoneCardDustRose';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StitchedRedLogo from '../images/StitchedRedLogo.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from '../components/footer';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    console.log("Logo Path:", StitchedRedLogo);

    return (
        <div className='loginContainer'>
            <Container>

                {/* Pantone Cards */}
                <Row className='pantoneCardsContainer'>
                    <Col lg={6} md={12}>
                        <Row className='mx-1'>
                            <Col lg={3} md={4}>
                                <PantoneCardSlateSilk />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardMutedClay />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardSoftPeach />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardBurgundy />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardSunset />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardPaleHaze />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardTerracotta />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardDustRose />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardPetal />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardMocha />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardSepia />
                            </Col>

                            <Col lg={3} md={4}>
                                <PantoneCardDenim />
                            </Col>

                        </Row>
                    </Col>

                    {/* Login/Sign Up */}
                    <Col lg={5} md={12} className='loginInputsContainer'>
                        <div className='loginHeader'>
                            <h1 className='loginText'>Welcome Back!</h1>
                            <img src={StitchedRedLogo} alt='Stitched Logo' className='stitchedLogo' />
                        </div>

                        <div className='textFieldsContainer'>
                            <Box>
                                {/* <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal" /> */}
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal" />
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="password" />
                                <p>Select your unique colour palette~</p>

                                <button className='customBtn loginBtn'>Login</button>
                                {/* <button className='customBtn loginBtn'>Sign Up</button> */}
                            </Box>
                        </div>

                        <div className='loginFooter w-100'>
                            <div className="loginDivider">
                                <span>OR</span>
                            </div>

                            <div className="signUpPrompts">
                                <p>Not yet a member?</p>
                                <Button variant="outline-dark" id='signUpBtnOutline'>Sign Up</Button>
                            </div>

                            {/* <div className="signUpPrompts">
                                <p>Already a member?</p>
                                <Button variant="outline-dark" id='signUpBtnOutline'>Login</Button>
                            </div> */}
                        </div>

                    </Col>

                </Row>

                <Footer />

            </Container>
        </div>
    );

}

export default Login;