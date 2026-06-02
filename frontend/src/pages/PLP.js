// import React from 'react';
// import Stack from 'react-bootstrap/Stack';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import placeholderImage from '../images/product image placeholder.png';
// import Footer from "../components/OrangeFooter";
// import Button from "react-bootstrap/Button";
// import Box from '@mui/material/Box';
// import FilterBar from "../components/filterBar";
// import ProductCard from "../components/ProductCard";
// import Slider from '@mui/material/Slider'
// import Selector from '../components/selectors';
// import SearchField from '../components/searchField';
// import './PDP.css';

// function valueLabelFormat(value1, value2) {
//   const units = "R";

//   return `${units} ${value1} - ${units} ${value2}`;
// }

// function ProductListing() {
//   const [value, setValue] = React.useState([0, 10000]);
//   const [selectedItemCategory, setSelectedItemCategory] = React.useState('');
//   const [categoryList, setCategoryList] = React.useState([{ label: 'shirts', id: 0 }, { label: 'pants', id: 1 }, { label: 'dresses', id: 2 }, { label: 'skirts', id: 3 }, { label: 'sandals', id: 4 }, { label: 'shoes', id: 5 }, { label: 'boots', id: 6 },, { label: 'womans', id: 7 }, { label: 'mens', id: 8 }, { label: 'kids', id: 9 }, { label: 'accessories', id: 10 }]);
//   const [selectedItemRating, setSelectedItemRating] = React.useState('');
//   const [ratingList, setRatingList] = React.useState([{ label: '0-1', id: 0 }, { label: '1.1-2', id: 1 }, { label: '2.1-3', id: 2 }, { label: '3.1-4', id: 3 }, { label: '4.1-5', id: 4 }]);
//   const [selectedItemSize, setSelectedItemSize] = React.useState('');
//   const [sizeList, setSizeList] = React.useState([{ label: 'XXXS', id: 0 },{ label: 'XXS', id: 1 }, { label: 'XS', id: 2 }, { label: 'S', id: 3 }, { label: 'M', id: 4 }, { label: 'L', id: 5 }, { label: 'XL', id: 6 }, { label: '2XL', id: 7 },{ label: '3XL', id: 8 }]);

//  const GetListings = async () => {
//     try {
//       const res = await axios.post("http://localhost:5009/api/user/register", {
//         name,
//         email,
//         password,
//         creativePassword: selectedColours.join(""),
//       });

//       SetLoginData(res.data.user, res.data.token);

//       setUserName(name);
//       setMessage("You're all set! Your account has been created.");
//       setShowModal(true);
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message ||
//         "Registration failed. Please try again.",
        
//       );
//       setShowModal(true);
//     }
//   };


//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className='homeContainer'>
//       <Container fluid>
//         <Row>
//           <Col lg={4}>
//             <FilterBar>
//               <div className='searchContainer'>
//                 <SearchField></SearchField>
//                 <button className="customBtnPLP">Search</button>
//               </div>

//               <Selector onSelectItem={setSelectedItemCategory} defaultVal={'Category'} options={categoryList} />
//               <Selector onSelectItem={setSelectedItemRating} defaultVal={'Seller Rating'} options={ratingList} />
//               <Selector onSelectItem={setSelectedItemSize} defaultVal={'Size'} options={sizeList} />
//               <div className='sliderContainer'>
//                 <p>Price Range {valueLabelFormat(value[0], value[1])}</p>
//                 <Slider
//                   min={0}
//                   step={20}
//                   max={10000}
//                   getAriaLabel={() => 'Price range'}
//                   value={value}
//                   onChange={handleChange}
//                   valueLabelDisplay="auto"
//                   sx={{
//                     color:'#ED7849',
//                   }}
//                 />
//               </div>
//             </FilterBar>

//           </Col>
//           <Col lg={8} className='productCardsContainer'>
//             <h1 className='plpTitle mt-lg-0 mt-4'>Our Products</h1>
//             <Row className="justify-content-center mt-5 me-lg-4">
//               <Col lg={4} md={6} className="mb-4">
//                 <ProductCard />
//               </Col>

//               <Col lg={4} md={6} className="mb-4 ">
//                 <ProductCard />
//               </Col>

//               <Col lg={4} md={6} className="mb-4">
//                 <ProductCard />
//               </Col>

//               <Col lg={4} md={6} className="mb-4">
//                 <ProductCard />
//               </Col>

//               <Col lg={4} md={6} className="mb-4">
//                 <ProductCard />
//               </Col>

//               <Col lg={4} md={6} className="mb-4">
//                 <ProductCard />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <Footer></Footer>
//       </Container>

//     </div>
//   );
// }

// export default ProductListing;