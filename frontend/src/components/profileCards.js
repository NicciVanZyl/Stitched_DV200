import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

function BasicExample({ listing }) {
  const navigate = useNavigate();
  const handleViewProduct = () => {
    navigate(`/ProductDetails/${listing._id}`, { state: { listing } });
  };
  return (
    <div className="listing-row-1">
      <img src={listing.imageUrl} className="listing-1-image"></img>
      <div className="listing-1-title">{listing.name}</div>
      <div className="listing-1-price">R{listing.price}</div>
      <button onClick={handleViewProduct} className="customBtn viewlistingBtn">
        View Listing
      </button>
    </div>
  );
}

export default BasicExample;
