function Cart({cart}) {
  return (
    <div> 
    {cart.map(item =><div>{item.product.name}----{item.product.description}----{item.quantity}</div>)}
    </div>
  )
}

export default Cart