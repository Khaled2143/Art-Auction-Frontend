import './App.css';
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage.jsx';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <LandingPage/>
    </div>
  );
}

export default App;

