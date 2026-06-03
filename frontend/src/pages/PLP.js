import React, { useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import placeholderImage from '../images/product image placeholder.png';
import Footer from "../components/OrangeFooter";
import Button from "react-bootstrap/Button";
import Box from '@mui/material/Box';
import FilterBar from "../components/filterBar";
import ProductCard from "../components/ProductCard";

import Selector from '../components/selectors';
import SearchField from '../components/searchField';
import './PDP.css';
import axios from "axios";
import Sliders from "../components/Sliders"



function ProductListing() {
  const [value, setValue] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState('');
  const [filtered, setFiltered] = React.useState(false);
  const [selectedItemCategory, setSelectedItemCategory] = React.useState([]);
  const [categoryList, setCategoryList] = React.useState([{ label: 'shirts', id: 0 }, { label: 'pants', id: 1 }, { label: 'dresses', id: 2 }, { label: 'skirts', id: 3 }, { label: 'sandals', id: 4 }, { label: 'shoes', id: 5 }, { label: 'boots', id: 6 }, , { label: 'womans', id: 7 }, { label: 'mens', id: 8 }, { label: 'kids', id: 9 }, { label: 'accessories', id: 10 }]);
  const [selectedItemRating, setSelectedItemRating] = React.useState([]);
  const [ratingList, setRatingList] = React.useState([{ label: '0-1', id: 0 }, { label: '1.1-2', id: 1 }, { label: '2.1-3', id: 2 }, { label: '3.1-4', id: 3 }, { label: '4.1-5', id: 4 }]);
  const [selectedItemSize, setSelectedItemSize] = React.useState([]);
  const [sizeList, setSizeList] = React.useState([{ label: 'XXXS', id: 0 }, { label: 'XXS', id: 1 }, { label: 'XS', id: 2 }, { label: 'S', id: 3 }, { label: 'M', id: 4 }, { label: 'L', id: 5 }, { label: 'XL', id: 6 }, { label: '2XL', id: 7 }, { label: '3XL', id: 8 }]);
  const [listings, setListings] = React.useState([]);
  const [filteredListings, setFilteredListings] = React.useState([]);


  const GetAllListings = async () => {
    try {
      const res = await axios.get("http://localhost:5009/api/listing/approved");
      setListings(res.data);
      setFiltered(false);

    } catch (error) {
      console.log(error.response?.data?.message);

    }
  };

  const RenderItems = () => {
    if (filtered === false) {
      return listings.map((listing) => (
        <Col key={listing._id} lg={4} md={6} className="mb-4">
          <ProductCard
            listing={listing}
          />
        </Col>
      ));
    } else {
      return filteredListings.map((listing) => (
        <Col key={listing._id} lg={4} md={6} className="mb-4">
          <ProductCard

            listing={listing}
          />
        </Col>
      ));
    }
  };

  useEffect(() => {
    GetAllListings();
  }, [])

  //filters have to be reapplied every time you filter in any way because it hates me. Thus it's a function
  const applyFilters = (category, rating, size, priceRange, search) => {
    if (listings.length === 0) return;

    let tempListings = [...listings];

    if (category?.length > 0) {
      const labels = category.map(item => item.label);
      tempListings = tempListings.filter(listing =>
        labels.includes(listing.category) || labels.includes(listing.subCategory)
      );
    }
    if (rating?.length > 0) {
      tempListings = tempListings.filter(listing =>
        rating.some(rating => {
          const [min, max] = (rating.label).split('-').map(Number);
          return listing.userRating >= min && listing.userRating <= max;
        })
      );
    }
    if (size?.length > 0) {
      const labels = size.map(item => item.label);
      tempListings = tempListings.filter(listing => labels.includes(listing.size));
    }

    if (priceRange?.length > 0) {
      tempListings = tempListings.filter(listing => {
        return listing.price <= priceRange[1] && listing.price >= priceRange[0]
      }

      );
    }

    if (search) {
      tempListings = tempListings.filter(listing =>
        listing.name.toLowerCase().includes(search)
      );
    }

    setFilteredListings(tempListings);
    setFiltered(true);
  };

  //apply filters for dropdowns and sliders
  useEffect(() => {
    applyFilters(selectedItemCategory, selectedItemRating, selectedItemSize, value, searchVal);
  }, [selectedItemCategory, selectedItemRating, selectedItemSize])

  const ChangeSliderVals = (newValues) => {
    setValue(newValues);
    applyFilters(selectedItemCategory, selectedItemRating, selectedItemSize, newValues, searchVal);
  };

  //search filter stuff
  const changeSerachVal = (newValue) => {
    setSearchVal(newValue.toLowerCase().trim())
  };

  useEffect(() => {
    applyFilters(selectedItemCategory, selectedItemRating, selectedItemSize, value, searchVal);
  }, [searchVal])

  return (
    <div className='homeContainer'>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <FilterBar>
              <div className='searchContainer'>
                <SearchField onChangeVal={(newData) => changeSerachVal(newData)}></SearchField>
              </div>

              <Selector multiple={true} onSelectItem={setSelectedItemCategory} defaultVal={'Category'} options={categoryList} />
              <Selector multiple={true} onSelectItem={setSelectedItemRating} defaultVal={'Seller Rating'} options={ratingList} />
              <Selector multiple={true} onSelectItem={setSelectedItemSize} defaultVal={'Size'} options={sizeList} />
              <Sliders onChangeValues={(newData) => ChangeSliderVals(newData)}></Sliders>
            </FilterBar>

          </Col>
          <Col lg={8} className='productCardsContainer'>
            <h1 className='plpTitle mt-lg-0 mt-4'>Our Products</h1>
            <Row className="justify-content-center mt-5 me-lg-4">
              {RenderItems()}
            </Row>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>

    </div>
  );
}

export default ProductListing;
