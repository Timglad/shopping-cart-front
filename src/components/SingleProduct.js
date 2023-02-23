import React from 'react'
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
        <div >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/> */}
            <img src={'http://localhost:8000/static' + product.image} alt={product.name} />
            <Button variant='warning' onClick={handleAddToCart}>Add to cart</Button>
            <Link to={`/products`}>
                <Button variant='primary'>Return to products</Button>
            </Link>
            <Link to={`/editproduct/${id}`}>
                <Button variant='success'>Edit</Button>
            </Link>
            <Button variant='danger' onClick={handleRemoveProduct}>Delete</Button>
            
        </div>
    )
}

export default SingleProduct
