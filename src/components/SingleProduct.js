import React from 'react'
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SingleProduct = ({ products }) => {
    const handleAddToCart = () => {
        axios.post(`http://localhost:8000/cart/`, {
            product: id,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
    const handleRemoveProduct = () => {
        axios.delete(`http://localhost:8000/product/` + id + "/")
            .then((response) => {
                 console.log(response);
                
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
    const { id } = useParams();
    
    const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return <div>Could'nt fetch product</div>;
    }
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
            <Button variant='warning' onClick={handleAddToCart}>Add to cart</Button>
      <Link to={`/products`}>
          <Button variant='primary'>Return to products</Button>
      </Link>
      <Link to={`/editproduct/${id}`}>
          <Button variant='success'>Edit</Button>
      </Link>
      <Button variant='danger' onClick={handleRemoveProduct}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </div>
)
}
export default SingleProduct
