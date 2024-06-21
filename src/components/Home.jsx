import React from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { addtoCart } from '../features/cartSlice';

function Home() {
  const dispatch = useDispatch();
  const { items } = useLoaderData();
  console.log(items);

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs.{item.price}</p>
                <button
                  onClick={() => dispatch(addtoCart({ id: item.id, image: item.image, name: item.name, price: item.price }))}
                  className="btn btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
