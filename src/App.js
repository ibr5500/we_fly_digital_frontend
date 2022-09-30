import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationPanel from './Components/NavigationPanel';
import Home from './Components/Home';
import BookFlight from './Components/BookFlight';
import DeletedFlights from './Components/DeletedFlights';
import Reservations from './Components/Reservations';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
      <NavigationPanel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<BookFlight />} />
        <Route path="/cancelled" element={<DeletedFlights />} />
        <Route path="/reserved" element={<Reservations />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
