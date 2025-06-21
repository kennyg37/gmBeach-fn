import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Activities from './pages/Activities';
import Dining from './pages/Dining';
import Wellness from './pages/Wellness';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  )
}

export default App