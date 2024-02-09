import React, { useEffect } from 'react';
import {Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import { rootPath, CategoriesContext } from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Slideshow from "./components/Slideshow";
import WorkerBio from "./components/WorkerBio";
import Button from "react-bootstrap/Button";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ReactPlayer from "react-player";
function App() {
  useEffect(() => {
    document.title = "Family of Workers";
  })
  const [ workerListCategory, setWorkerListCategory ] = React.useState(0);
  let location = useLocation();
  const nodeRef = React.useRef(null);
  const timeoutRef = React.useRef(null);
  const navigate = useNavigate();
  const TIME_TO_SPLASH = 120000;
  const handleResetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      navigate(rootPath);
    }, TIME_TO_SPLASH);
  };
  return (
    <div className="App" onClick={() => handleResetTimeout()}>
      <CategoriesContext.Provider value={{ workerListCategory, setWorkerListCategory }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Routes>
              <Route path={rootPath} element={<Splash2 />} />
              <Route path={`${rootPath}/home`} element={<Home />} />
              <Route path={`${rootPath}/worker/:id`} element={<WorkerBio />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </CategoriesContext.Provider>
    </div>
  );
}

function Splash() {
  return (
    <div style={{display: "flex", alignItems: "center", height: "100vh", justifyContent: "center"}}>
      <div style={{position: "relative", zIndex: 1 }}>
        <Link to={`${rootPath}/home`} style={{color: 'white', textDecoration: 'none'}}>
          <div className="SplashTitle">A Family of Workers</div>
          <Button className="SplashButton">Touch to Begin</Button>
        </Link>
      </div>
      <Slideshow />
    </div>
  );
}

function Splash2() {
  return (
    <Link to={`${rootPath}/home`}>
      <ReactPlayer url={require('../src/assets/fow_intro.webm')} playing={true} muted={true} loop={true} controls={false} height={1080} width={1920} />
    </Link>
  )
}

export default App;
