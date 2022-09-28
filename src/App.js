import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationPanel from './Components/NavigationPanel';
import Home from './pages/Home';
import BookFlight from './pages/BookFlight';
import DeletedFlights from './pages/DeletedFlights';
import Reservations from './pages/Reservations';

function App() {
  return (
    <div>
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<BookFlight />} />
        <Route path="/cancelled" element={<DeletedFlights />} />
        <Route path="/reserved" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
