import React from 'react'
import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
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
        <div>
            <h3>{item.id}</h3>
            <p>{item.product.name}</p>
            <Alert key="info">{item.product.price}</Alert>
            <h3>{item.product.description}</h3>
            <h3>{item.quantity}</h3>
            <img src={'http://localhost:8000/static' + item.product.image} alt={item.product.name} />
            <Button variant='danger' onClick={handleRemoveitem} className="btn btn-danger btn-sm">Delete</Button>
        </div>
    )
}
export default CartDetails


