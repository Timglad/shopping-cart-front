import CartDetails from "./CartDetails"
import React from 'react'
import { Col } from "react-bootstrap"

function Cart({cart}) {
  return (
    <div> 
    {cart.map(item => <Col xs={12} md={6} lg={4}><CartDetails key={item.id} item={item}/></Col>)}
    </div>
  )
}
export default Cart