import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FAQ from './Components/FAQ/Faq';
import Navbarcom from './Components/nav/Navbarcom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Footer from './Components/footer/Footer';
import Register from './Components/pages/Register';
import Login from './Components/pages/Login';
function App() {
  return (
    <>
      <Router>
        <Navbarcom/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/FAQ" element={<FAQ/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;