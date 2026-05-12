import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';
import Footer from "../components/footer";
import Button from "react-bootstrap/Button";
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'

//Custom styling for Icon Buttons
const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: 'transparent',
          },

          '&:active': {
            transform: 'scale(0.95)',
          },

          //Icon
          '& .MuiSvgIcon-root': {
            transition: '0.2s ease',
            fontSize: '45px',
          },
          '&:hover .MuiSvgIcon-root': {
            transform: 'scale(1.2)',
            color: '#ed7849',
          },
        },
      },

    },
  },
});


function ProductDetails() {

  const [selectedFlag, setSelectedFlag] = useState(false);
  const [selectedLike, setSelectedLike] = useState(false);

  return (
    <div className='loginContainer'>

      <Container fluid>
        <Row  >
          <Col sm={12} className='mx-auto productDetails' >
            <Row>
              <Col lg={6} md={12} className='mb-3 mb-lg-0 pdImageContainer'>
                <img className='pdImage' src={placeholderImage}></img>
              </Col>
              <Col lg={6} md={12} className='pdDetails'>
                <Stack gap={5} >
                  <Stack gap={4}>
                    <div>
                      <h1>Product Name</h1>
                      <h2>R000000.00</h2>
                    </div>
                    <div>
                      <h3>Seller Name</h3>
                      <Rating name="size-medium" value={2.5} precision={0.5} readOnly />
                    </div>
                  </Stack>
                  <p>Product details: description & size Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet orci neque. Aenean non sem ut massa interdum ultrices quis posuere purus. Ut ullamcorper magna non nunc fringilla, id sodales turpis laoreet. Mauris rutrum risus tristique, cursus eros in, tincidunt odio. Nunc non gravida purus. Morbi pretium arcu eu commodo tempor. Praesent euismod rutrum lorem, at tincidunt magna laoreet id.magna non nunc fringilla, id sodales turpis laoreet. Mauris rutrum risus tristique, cursus eros in, tincidunt odio. Nunc non gravida purus. Morbi pretium arcu eu commodo tempor. Praesent euismod rutrum lorem, at tincidunt magna laoreet ide
                  </p>
                  <Stack direction='horizontal' gap={4}>
                    <button className="customBtn pdButton">Add to Cart</button>
                    <ThemeProvider theme={theme}>
                      <IconButton
                        onClick={() => setSelectedLike(!selectedLike)}
                        sx={{
                          '& .MuiSvgIcon-root': {
                            color: selectedLike ? '#B73E3A' : '#F5BD54',
                            transition: '0.2s',
                          },
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => setSelectedFlag(!selectedFlag)}
                        sx={{
                          '& .MuiSvgIcon-root': {
                            color: selectedFlag ? '#B73E3A' : '#F5BD54',
                            transition: '0.2s',
                          },
                        }}
                      >
                        <FlagIcon />
                      </IconButton>

                    </ThemeProvider>
                  </Stack>
                </Stack>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductDetails;