import { Route, Routes } from 'react-router-dom';
import './App.css';
import ReservationForm from './components/ReservationForm';
import Reservations from './components/Reservations';

function App() {
  return (
    <div className="App">
      <Reservations />
      <Routes>
        <Route path="/reservationForm" element={<ReservationForm />} />
      </Routes>
    </div>
  );
}

export default App;
