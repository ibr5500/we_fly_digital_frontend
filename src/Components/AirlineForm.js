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
    <section>
      <h2>Add New Airline</h2>
      <form onSubmit={handleNewAirline}>
        <input type="text" value={airline.name} onChange={(e) => setAirline({ ...airline, name: e.target.value })} placeholder="Name" />
        <input type="text" value={airline.image} onChange={(e) => setAirline({ ...airline, image: e.target.value })} placeholder="Image" />
        <input type="text" value={airline.price} onChange={(e) => setAirline({ ...airline, price: e.target.value })} placeholder="Price" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AirlineForm;
