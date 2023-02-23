import React from 'react'
import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CartDetails( {item} ){


    async function deleteHandler(id){
        let res=await fetch("http://localhost:8000/cart/"+id,{
        method : 'DELETE'
    });
    res = await res.json();
    
    console.warn(res)}

    return (
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
    
export default CartDetails


