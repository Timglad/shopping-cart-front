import React from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from "react";
import "./CartDetails.css"



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
    const handleQuantitySet = () => {
        axios.put(`http://127.0.0.1:8000/cart/` + item.id + '/', {
            quantity: newQuantity
        })
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.error(error);
            });

    };
    const [newQuantity, setQuantity] = useState('')
    const newQuantityHandler = (e) => {
        setQuantity(e.target.value)
    }
    return (
        <>
            <Row xs={3} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} />
                            <Card.Body>
                                <Card.Title>{item.product.name}</Card.Title>
                                <Card.Text>
                                    {item.product.description}
                                    <Button variant='danger' onClick={() => handleRemoveitem(item.id)} className="btn btn-danger btn-sm">Delete</Button>
                                    <form onSubmit={handleQuantitySet}>
                                         <tr><td>Quantity:</td><td><input className='smaller-input' size="sm" type="number" name="Quantity" value={newQuantity} onChange={newQuantityHandler} /></td></tr>
                                        <tr><td ><button type="submit">Submit</button></td></tr>
                                        </form>
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


