import axios from "axios";
import { useParams} from 'react-router-dom';
import { useState } from "react";

function EditProduct  ( {products} )  {
    const handleEditProduct = () => {
        axios.put(`http://127.0.0.1:8000/product/` + id + '/', {
            name: newName,
            description: newDescription,
            price: newPrice
        } )
    };
    
    const { id } = useParams();

    const [newName , setName] = useState('');
    const newNameHandler = (e) => {
        setName(e.target.value);
    };

    const [newDescription, setDescription] = useState('');
    const newDescriptionHandler = (e) => {
        setDescription(e.target.value);
    };
    
    const [newPrice , setPrice] = useState('');
    const newPriceHandler = (e) => {
        setPrice(e.target.value);
    };

    const inputStyle = {border: "1px solid black", height: 75, "padding": 10}
    return (
        
        <div>
            
            <form onSubmit={handleEditProduct}>
            <table>
              <tbody style={inputStyle}>
                <tr><td>Name:</td><td><input type="text" name="name" value={newName} onChange={newNameHandler} /></td></tr>
                <tr><td>Description:</td><td><input type="text" name="description" value={newDescription} onChange={newDescriptionHandler} /></td></tr>
                <tr><td>Price:</td><td><input type="number" name="price" value={newPrice} onChange={newPriceHandler} /></td></tr>
                <tr><td ><button type="submit">Submit</button></td></tr>
                
              </tbody>
            </table>
          </form>
        </div>
    )

}
export default EditProduct
