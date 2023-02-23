import React from 'react'
import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CartDetails( {item} ){
=======
import axios from "axios";
>>>>>>> 3859beaba8610c693f7e62c74ab9d40a2831b964


const CartDetails = ({ item }) => {
    console.log(item)
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
<<<<<<< HEAD
        <>
        return (
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={'http://localhost:8000/static'+item.product.image} alt={item.product.name} />
                    <Card.Body>
                      <Card.Title>{item.product.name}</Card.Title>
                      <Card.Text>
                      {item.product.description}
                        <Button variant='danger' onClick={()=>deleteHandler(item.id)} className="btn btn-danger btn-sm">Delete</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            </>
          );
        }
    
=======
        <div>
            <h3>{item.id}</h3>
            <p>{item.product.name}</p>
            <Alert key="info">{item.product.price}</Alert>
            <h3>{item.product.description}</h3>
            <img src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} />
            <Button variant='danger' onClick={handleRemoveitem} className="btn btn-danger btn-sm">Delete</Button>
        </div>
    )
}
>>>>>>> 3859beaba8610c693f7e62c74ab9d40a2831b964
export default CartDetails


