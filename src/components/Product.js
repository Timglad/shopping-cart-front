import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from "axios";




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
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Alert key="info">{product.price}</Alert>
        {/* <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/> */}
        <img src={'http://localhost:8000/static'+product.image} alt={product.name}/>
        <Button variant="warning" onClick={handleAddToCart}>Add to cart</Button>
        <Link to={`/product/${product.id}`}>
        <Button variant="primary">View</Button>
        </Link>
    </div>
  )
}

export default Product