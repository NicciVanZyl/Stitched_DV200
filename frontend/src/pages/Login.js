import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PantoneCardPink from '../components/PantoneCardPink';
import PantoneCardLightPink from '../components/PantoneCardLightPink';
import PantoneCardBlue from '../components/PantoneCardBlue';
import PantoneCardLightBlue from '../components/PantoneCardLightBlue';
import PantoneCardGreen from '../components/PantoneCardGreen';
import PantoneCardLightGreen from '../components/PantoneCardLightGreen';
import PantoneCardYellow from '../components/PantoneCardYellow';
import PantoneCardOrange from '../components/PantoneCardOrange';
import PantoneCardPurple from '../components/PantoneCardPurple';
import PantoneCardLightPurple from '../components/PantoneCardLightPurple';
import PantoneCardBurgundy from '../components/PantoneCardBurgundy';
import PantoneCardRed from '../components/PantoneCardRed';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignUp() {
    return (
        <Container className="signUpContainer">

            <Row className='pantoneCardsContainer'>
                {/* 12 Pantone Card Grid */}
                <Col lg={6} md={12}>
                    <Row className='mx-1'>
                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardLightPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardBlue />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardLightBlue />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardGreen />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardLightGreen />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardYellow />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardOrange />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPurple />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardLightPurple />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardBurgundy />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardRed />
                        </Col>

                    </Row>
                </Col>

                <Col lg={6} md={12} className='signUpTextContainer'>
                    <h1>Welcome to</h1>
                    <img src='../images/Stitched Logo.png'></img>
                    <p>Email</p>
                    <input type="email"></input>

                    <p>Password</p>
                    <input type="password"></input>
                </Col>
            </Row>

        </Container>
    );

}

export default SignUp;