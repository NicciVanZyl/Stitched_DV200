import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/PDP";
import ProductListing from "./pages/PLP";
import Profile from "./pages/ViewProfile";
import PersonalProfile from "./pages/personalProfile";
import AddListing from "./pages/addListing";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/ProductDetails/:id" element={<ProductDetails />}></Route>
            <Route path="/ProductListing" element={<ProductListing />}></Route>
            <Route path="/Profile/:id" element={<Profile />}></Route>
            <Route path="/personalProfile" element={<PersonalProfile />}></Route>
            <Route path="/addListing" element={<AddListing />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
