import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PantoneCardPink from '../components/PantoneCardPink';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignUp() {
    return (
        <Container className="signUpContainer">
            <div className="signUpHeader">
                <h1>Sign Up</h1>
            </div>

            <Row className='pantoneCardsContainer'>
                {/* 12 Pantone Card Grid */}
                <Col lg={6} md={12}>
                    <Row className='mx-1'>
                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>

                        <Col lg={3} md={4}>
                            <PantoneCardPink />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    
                </Col>
            </Row>

        </Container>
    );

}

export default SignUp;