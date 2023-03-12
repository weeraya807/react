//import logo from './logo.svg';
//import './App.css';
//import image from './assets/cat.jpg';  สร้างตัวแปร image
import {Route, Routes} from "react-router-dom";  //import ตัว route เข้ามา
import Home from './pages/Home';
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}></Route> 
    <Route path="/sign-up" element={<Signup />}></Route> 
    <Route path="/sign-in" element={<Signin />}></Route> 
    <Route path="/profile" element={<Profile />}></Route> 
  </Routes>
  </>
   /* <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </header>
    </div>*/
  );
}

export default App;
