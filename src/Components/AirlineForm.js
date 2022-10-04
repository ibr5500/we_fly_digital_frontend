import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewAirlines } from '../redux/airlines/airlines';

function AirlineForm() {
  const [airline, setAirline] = useState({
    name: '',
    price: '',
    image: '',
  });
  const dispach = useDispatch();

  const handleNewAirline = (e) => {
    e.preventDefault(e);
    const newAirline = {
      airline: { ...airline },
    };

    dispach(addNewAirlines(newAirline));

    // setAirline({
    //   name: '',
    //   price: '',
    //   image: '',
    // });
  };

  return (
    <section className="add-airline container">
      <h2>Add New Airline</h2>
      <form onSubmit={handleNewAirline}>
        <div className="mb-3">
          <label htmlFor="airline-name" className="form-label">
            Airline Name
            <input
              type="text"
              className="form-control"
              id="airline-name"
              value={airline.name}
              onChange={(e) => setAirline({ ...airline, name: e.target.value })}
              placeholder="Name"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Airline logo
            <input
              type="text"
              className="form-control"
              id="image"
              value={airline.image}
              onChange={(e) => setAirline({ ...airline, image: e.target.value })}
              placeholder="Image"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
            <input
              className="form-control"
              type="text"
              id="price"
              value={airline.price}
              onChange={(e) => setAirline({ ...airline, price: e.target.value })}
              placeholder="Price"
            />
          </label>
        </div>
        <button className="btn book-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AirlineForm;
