import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Product({product}) {
  const handleAddToCart = () => {
    axios.post(`http://localhost:8000/cart/`, {
      product: product.id,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={'http://localhost:8000/static' + product.image} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Title>{product.price}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <Button variant="warning" onClick={handleAddToCart}>Add to cart</Button>
        <Link to={`/product/${product.id}`}>
        <Button variant="primary">View</Button>
        </Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </div>

  )}

    

export default Product