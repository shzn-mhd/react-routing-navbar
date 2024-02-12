import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Pages/Services';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        
      </Routes>
      
      </div>
  );
}

export default App;
