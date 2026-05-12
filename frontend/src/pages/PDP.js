import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';


function ProductDetails() {
    return(
      <Container className='productDetails' >
        <Row>
          <Col lg={6} md={12} className='pdImage'>
            <img src={placeholderImage}></img>
          </Col>
          <Col lg={6} md={12} className='pdDetails'>
            <Stack gap={5}>
              <Stack gap={4}>
              <div>
                <h1>Product Name</h1>
                <h2>Product Price</h2>
              </div>
              <div>
                <h3>Seller Name</h3>
                <h3>Seller Rating</h3>
              </div>
              </Stack>
              <p>Product details: description & size Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet orci neque. Aenean non sem ut massa interdum ultrices quis posuere purus. Ut ullamcorper magna non nunc fringilla, id sodales turpis laoreet. Mauris rutrum risus tristique, cursus eros in, tincidunt odio. Nunc non gravida purus. Morbi pretium arcu eu commodo tempor. Praesent euismod rutrum lorem, at tincidunt magna laoreet id.
              </p>
              <Stack direction='horizontal' gap={4}>
                <button>Add to cart</button>
                <button>Like</button>
                <button>Flag</button>
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Container>  
    );
}

export default ProductDetails;