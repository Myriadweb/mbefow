import React from 'react';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import logo from './logo.svg';
import { rootPath, CategoriesContext } from "./config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Slideshow from "./components/Slideshow";
import WorkerBio from "./components/WorkerBio";
import Button from "react-bootstrap/Button";
import {CSSTransition, TransitionGroup} from "react-transition-group";
function App() {
  const [ workerListCategory, setWorkerListCategory ] = React.useState(0);
  let location = useLocation();
  const nodeRef = React.useRef(null);
  return (
    <div className="App">
      <CategoriesContext.Provider value={{ workerListCategory, setWorkerListCategory }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Routes>
              <Route path={rootPath} element={<Splash />} />
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

export default App;
