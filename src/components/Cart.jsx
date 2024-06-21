import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((a, b) => a + b.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs. {item.price}</p>
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total mt-4">
        <h3>Total: Rs. {total}</h3>
        <button className="btn btn-success">Buy All</button>
      </div>
    </div>
  );
}

export default Cart;
