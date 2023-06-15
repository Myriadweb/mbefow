import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Slideshow from "./components/Slideshow";
import WorkerBio from "./components/WorkerBio";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/worker/:id" element={<WorkerBio />} />
      </Routes>
    </div>
  );
}

function Splash() {
  return (
    <div style={{display: "flex", alignItems: "center", height: "100vh", justifyContent: "center"}}>
      <div style={{position: "relative", zIndex: 1 }}>
        <Link to="/home" style={{color: 'white', textDecoration: 'none'}}>
          <div className="SplashTitle">A Family of Workers</div>
          <Button>Touch to Begin</Button>
        </Link>
      </div>
      <Slideshow />
    </div>
  );
}

export default App;
