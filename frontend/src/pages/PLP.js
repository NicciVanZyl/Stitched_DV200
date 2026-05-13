import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';
import Footer from "../components/RedFooter";
import Button from "react-bootstrap/Button";
import Box from '@mui/material/Box';
import FilterBar from "./componentTest";
import ProductCard from "../components/ProductCard";

function ProductListing() {
  return (
    <div className='loginContainer'>
      <Container fluid>
        <Row>
          <Col lg={4}>
            {/* Your existing Navbar sits above this Box, outside it */}
            <FilterBar>
              {/* your filter inputs */}
              <input type="text" placeholder="Search..." className="form-control mb-2" />
              <select className="form-select mb-2">
                <option>Category A</option>
                <option>Category B</option>
              </select>
            </FilterBar>

          </Col>
          <Col lg={8}>
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
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ProductListing;