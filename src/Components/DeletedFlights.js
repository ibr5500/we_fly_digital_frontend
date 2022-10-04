import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAirlines, deleteAirline } from '../redux/airlines/airlines';

const DeletedFlights = () => {
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataList) dispatch(fetchAirlines());
  });

  const handleClick = (id) => {
    dispatch(deleteAirline(id));
  };

  return (
    <section className="add-airline container ">
      <div className="header">
        <h2>Flights list:</h2>
        <p>Want to cancel? please pic a flight from the following list</p>
      </div>
      <div className="">
        <div className="flights">
          {!dataList ? (
            <p>There are no flight yet!!</p>
          ) : (
            dataList.map((item) => (
              <div className="mb-3 details-container " key={item.id}>
                <Link to={`/airline/${item.id}`} className="link">
                  <div className="img-container">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cancelled-flights">
                    <h3>{item.name}</h3>
                    {' '}
                    {item.id}
                    {' '}
                    ................
                    <h4>
                      Price: $
                      {item.price}
                    </h4>
                  </div>
                </Link>
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => handleClick(item.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DeletedFlights;
