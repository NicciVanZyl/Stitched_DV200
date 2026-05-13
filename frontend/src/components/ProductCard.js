import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardPlaceholderImg from "../images/CardPlaceholderImg.jpg";

function BasicExample() {
  return (
    <Card style={{ width: '100%' }} id='productCard'>
      <Card.Img variant="top" src={CardPlaceholderImg} style={{borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem"}}/>
      <Card.Body>
        <Card.Title id='cardTitle'>Product Name</Card.Title>
        <Card.Text id='cardPrice'>
          R0.00
        </Card.Text>
        <button className="customBtn productCardBtn mt-4">View Item</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;