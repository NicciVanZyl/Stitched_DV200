import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';
import Footer from "../components/RedFooter";
import Button from "react-bootstrap/Button";
import Box from '@mui/material/Box';
import FilterBar from "../components/filterBar";
import ProductCard from "../components/ProductCard";
import Slider from '@mui/material/Slider'
import Selector from '../components/selectors';

function valueLabelFormat(value1, value2) {
  const units = "R";

  return `${units} ${value1} - ${units} ${value2}`;
}

function ProductListing() {
  const [value, setValue] = React.useState([0, 10000]);
  const [selectedItemCategory, setSelectedItemCategory] = React.useState('');
  const [categoryList, setCategoryList] = React.useState([{ label: 'shirt', id: 0 }, { label: 'pants', id: 1 }, { label: 'Dresses', id: 2 }]);
  const [selectedItemRating, setSelectedItemRating] = React.useState('');
  const [ratingList, setRatingList] = React.useState([{ label: '0-1', id: 0 }, { label: '1.1-2', id: 1 }, { label: '2.1-3', id: 2 }, { label: '3.1-4', id: 3 }, { label: '4.1-5', id: 4 }]);
  const [selectedItemSize, setSelectedItemSize] = React.useState('');
  const [sizeList, setSizeList] = React.useState([{ label: '> XS', id: 0 }, { label: 'XS', id: 1 }, { label: 'S', id: 2 }, { label: 'M', id: 3 }, { label: 'L', id: 4 }, { label: 'XL', id: 5 }, { label: '< XL', id: 6 }]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='loginContainer'>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <FilterBar>
              <div>
                <input type="text" placeholder="Search..." className="form-control mb-2" />
                <button className="customBtn">Search</button>
              </div>

              <Selector onSelectItem={setSelectedItemCategory} defaultVal={'Category'} options={categoryList} />
              <Selector onSelectItem={setSelectedItemRating} defaultVal={'Seller Rating'} options={ratingList} />
              <Selector onSelectItem={setSelectedItemSize} defaultVal={'Size'} options={sizeList} />
              <div>
                <p>Price Range {valueLabelFormat(value[0], value[1])}</p>
                <Slider
                  min={0}
                  step={20}
                  max={10000}
                  getAriaLabel={() => 'Price range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  sx={{
                    color:'linear-gradient(180deg,rgba(237, 120, 73, 1) 0%,rgba(211, 89, 40, 1) 100%)',
                  }}
                />
              </div>
            </FilterBar>

          </Col>
          <Col lg={8}>
            <h1>Our Products</h1>
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