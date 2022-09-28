import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../redux/details/details';

const Home = () => {
  const details = useSelector((state) => state.details.data);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchData());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      { details && details.map((item) => (
        <div key={item.id} className="card">
          <div className="img-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="contents">
            <h3>{item.name}</h3>
            {' '}
            ................
            <h4>
              Price: $
              {item.price}
            </h4>
          </div>
          <Link to="/details/:id" className="btn-link">View details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
