import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Pages from './pages/Pages';
import { BrowserRouter } from "react-router-dom"
import { Post } from './utils/APICall';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    Post("/check-auth", {})
      .then(res => {
        console.log(res);
        console.log(res.data);
        setAuthenticated(res.data.authenticated);
      })
      .catch(err => {
        console.log(err);
        setAuthenticated(false);
      });
  }, []);

  const handleLogout = () => {
    Post('/logout', {})
      .then(res => {
        console.log(res);
        console.log(res.data);
        setAuthenticated(false)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleLogin = () => {
    setAuthenticated(true);
  }

  console.log(authenticated);

  return (
    <BrowserRouter>
      <Navbar authenticated={authenticated} handleLogout={handleLogout} />
      <div className="App">
        <Pages handleLogin={handleLogin} />
      </div>
    </BrowserRouter>
  );
}

export default App;

