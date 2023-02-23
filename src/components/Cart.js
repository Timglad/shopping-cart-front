import CartDetails from "./CartDetails"
import React from 'react'
import { Col, Row } from "react-bootstrap"

function Cart({cart}) {
  return (
    <div> 
    <Row>
    {cart.map(item => <Col xs={12} md={6} lg={4}><CartDetails key={item.id} item={item}/></Col>)}
    </Row>
    </div>
  )
}
export default Cart