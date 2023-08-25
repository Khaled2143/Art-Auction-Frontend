import './App.css';
import Navbar from './components/Navbar.jsx'
import ImageCarousel from './components/ImageCarousel';
import Pages from './pages/Pages';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;

