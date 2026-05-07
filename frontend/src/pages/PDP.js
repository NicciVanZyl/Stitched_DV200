import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';


function ProductDetails() {
    return(
      <Container className=''>
        <h1>PDP Page</h1>
        <Row>
          <Col lg={6} md={12}>
            <img src={placeholderImage}></img>
          </Col>
          <Col lg={6} md={12}>
            
          </Col>
        </Row>
      </Container>  
    );
}

export default ProductDetails;