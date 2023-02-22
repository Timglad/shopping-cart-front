import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Product({product}) {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Alert key="info">{product.price}</Alert>
        {/* <img src={'https://shopping-k6qe.onrender.com/static'+product.image} alt={product.name}/> */}
        <img src={'http://localhost:8000/static'+product.image} alt={product.name}/>
        <Button variant="warning">Add to cart</Button>
        <Link to={`/product/${product.id}`}>delete product</Link>
    </div>
  )
}

export default Product