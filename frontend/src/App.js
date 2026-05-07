import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/PDP";
import ProductListing from "./pages/PLP";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/ProductDetails' element={<ProductDetails />}></Route>
        <Route path='/ProductListing' element={<ProductListing />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
