import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample({ product }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '100%' }} id='productCard'>
      <Card.Img 
        variant="top" 
        src={product.imageUrl} 
        style={{ borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem", height: "30rem", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title id='cardTitle'>
          {product.name || "Unnamed Item"}
        </Card.Title>
        <Card.Text id='cardPrice'>
          R{product.price || "0.00"}
        </Card.Text>
        <button className="customBtn productCardBtn mt-4" onClick={() => navigate(`/ProductDetails/${product._id}`)}>View Item</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;