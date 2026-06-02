import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardPlaceholderImg from "../images/CardPlaceholderImg.jpg";
import { useNavigate } from 'react-router-dom';


function BasicExample({ listing }) {
  const navigate = useNavigate();
  const handleViewProduct = () => {
    navigate(`/ProductDetails/${listing._id}`, { state: { listing } });
  };
  return (
    <Card style={{ width: '100%' }} id='productCard'>
      <Card.Img variant="top" src={listing.imageUrl} style={{ borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem" }} />
      <Card.Body>
        <Card.Title id='cardTitle'>{listing.name}</Card.Title>
        <Card.Text id='cardPrice'>
          R{listing.price}
        </Card.Text>
        <button onClick={handleViewProduct} className="customBtn productCardBtn mt-4">View Item</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;