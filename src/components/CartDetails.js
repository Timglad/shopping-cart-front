import React from 'react'
import { Alert } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

function CartDetails( {item} ){


    async function deleteHandler(id){
        let res=await fetch("http://localhost:8000/cart/"+id,{
        method : 'DELETE'
    });
    res = await res.json();
    
    console.warn(res)}

    return (
    <div>
        <h3>{item.id}</h3>
        <p>{item.product.name}</p>
        <Alert key="info">{item.product.price}</Alert>
        <h3>{item.product.description}</h3>
        <img src={'http://localhost:8000/static'+item.product.image} alt={item.product.name}/>
        <Button variant='danger' onClick={()=>deleteHandler(item.id)} className="btn btn-danger btn-sm">Delete</Button>
    </div>
    )
    }   
export default CartDetails


