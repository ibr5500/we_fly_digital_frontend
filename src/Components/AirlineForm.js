import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewAirlines } from '../redux/airlines/airlines';

function AirlineForm() {
  const dispach = useDispatch();
  const navigate = useNavigate();
  const [airline, setAirline] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleNewAirline = (e) => {
    e.preventDefault(e);

    if (!airline.name || !airline.image || !airline.price) {
      alert('Fill up the form!');
      return;
    }
    const newAirline = {
      airline: { ...airline },
    };

    dispach(addNewAirlines(newAirline));

    setAirline({
      name: '',
      price: '',
      image: '',
    });

    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <section className="add-airline container">
      <h2>Add New Airline</h2>
      <form onSubmit={handleNewAirline} className="form">
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
              type="url"
              className="form-control"
              id="image"
              value={airline.image}
              onChange={(e) => setAirline({ ...airline, image: e.target.value })}
              placeholder="Image URL"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
            <input
              className="form-control"
              type="number"
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
