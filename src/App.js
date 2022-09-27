import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import Reservations from './components/Reservations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reserve" element={<Reservations />} />
        <Route path="/" element={<Home />} />
        <Route path="/reservationForm" element={<ReservationForm />} />
      </Routes>
    </div>
  );
}

export default App;
