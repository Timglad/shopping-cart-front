import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import axios from "axios";

const CartDetails = ({ item }) => {
    const handleRemoveitem = () => {
        axios.delete(`http://localhost:8000/cart/` + item.id + "/")
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.error(error);
            });
    };
    
    return (
        <>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={'http://localhost:8000/static'+item.product.image} alt={item.product.name} />
                    <Card.Body>
                      <Card.Title>{item.product.name}</Card.Title>
                      <Card.Title>{item.product.price}</Card.Title>
                      <Card.Text>
                      {item.product.description}
                        <Button variant='danger' onClick={()=>handleRemoveitem(item.id)} className="btn btn-danger btn-sm">Delete</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            </>
          );
              }
export default CartDetails
