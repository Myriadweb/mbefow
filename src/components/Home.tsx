import React, { useContext } from 'react';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import '../App.css';
import WorkerList from "./WorkerList";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { CategoriesContext, rootPath } from "../config";
import workersData from '../assets/fow.json';
function Home() {
  const [ isActive, setIsActive ] = React.useState(false);
  // @ts-ignore
  const { workerListCategory, setWorkerListCategory } = useContext(CategoriesContext);
  const toggleActive = () => setIsActive(!isActive);
  let location = useLocation();
  return (
    <div className="Container">
      <div className="Title">A Family of Workers</div>
      <ToggleButtonGroup type="radio" name="options" defaultValue={workerListCategory} className="CategoryButtons">
        <ToggleButton id="tbg-radio-1" value={0} active={workerListCategory === 0} onClick={() => setWorkerListCategory(0)}>Kitchen Staff & Housekeeping</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={1} active={workerListCategory === 1} onClick={() => setWorkerListCategory(1)}>House & Grounds</ToggleButton>
        <ToggleButton id="tbg-radio-3" value={2} active={workerListCategory === 2} onClick={() => setWorkerListCategory(2)}>Secretaries & Metaphysical Workers</ToggleButton>
      </ToggleButtonGroup>
      <WorkersListByCategory category={workerListCategory} />
      <div className="acorn">
        <img src={require('../assets/images/MBE_acorn.png')} alt="acorn" />
      </div>
    </div>
  );
}

// @ts-ignore
const WorkersListByCategory = (props) => {
  const workerListCategories = [
    {id: 0, name: 'Kitchen Staff & Housekeeping', intro: 'These women rose early to do all the cleaning, shopping, cooking, sewing, and laundry (sometimes with day-worker help) for an average of 20 household members.'},
    {id: 1, name: 'House & Grounds', intro: 'These men handled repairs, kept the house in good working order, and took care of the gardens, carriages, and automobiles.'},
    {id: 2, name: 'Secretaries & Metaphysical Workers', intro: 'Secretaries helped with Mrs. Eddy’s correspondence, communications, and calendar. Metaphysical workers set aside dedicated time to pray about specific issues at Mrs. Eddy’s direction. For some individuals these jobs overlapped.'}
  ]
  return (
    <div>
      <div className="Intro">{workerListCategories[props.category].intro}</div>
      <div className={`WorkerList Category${props.category}`}>
        {workersData.filter((worker) => worker.CATEGORY === workerListCategories[props.category].name).map((worker) => (
          <CSSTransition key={worker.ID} classNames="item" timeout={500}>
            <div key={worker.ID} className="WorkerItem">
              <Link to={`${rootPath}/worker/${worker.ID}`} className="WorkerLink">
                <img src={require(`../assets/images/portraits/${worker.PORTRAIT}`)} alt={worker?.NAME} />
                <div className="WorkerNameTag">{worker.NAME}</div>
              </Link>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  )
}

export default Home;