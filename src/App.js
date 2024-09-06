import logo from './logo.svg';
import './App.css';
import Header from './layouts/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Navrouter from './Router/Navrouter';
import Footer from './layouts/footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Navrouter />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
