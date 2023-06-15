import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import '../App.css';
import KitchenStaffHousekeeping from './KitchenStaffHousekeeping';
import WorkerList from "./WorkerList";
function Home() {
  const workerListCategories = ['Kitchen Staff & Housekeeping', 'House & Grounds', 'Secretaries & Metaphysical Workers'];
  const [ workerListCategory, setWorkerListCategory ] = React.useState(0);
  const [ isActive, setIsActive ] = React.useState(false);

  const toggleActive = () => setIsActive(!isActive);
  return (
    <div className="Container">
      <div className="Title">A Family of Workers</div>
      <ToggleButtonGroup type="radio" name="options" defaultValue={workerListCategory} className="CategoryButtons">
        <ToggleButton id="tbg-radio-1" value={0} onClick={() => setWorkerListCategory(0)}>Kitchen Staff & Housekeeping</ToggleButton>
        <ToggleButton id="tbg-radio-2" value={1} onClick={() => setWorkerListCategory(1)}>House & Grounds</ToggleButton>
        <ToggleButton id="tbg-radio-3" value={2} onClick={() => setWorkerListCategory(2)}>Secretaries & Metaphysical Workers</ToggleButton>
      </ToggleButtonGroup>
      <div className="Intro">These women rose early to do all the cleaning, shopping, cooking, sewing, and laundry (sometimes with day-worker help) for an average of 20 people a day.</div>
      <Routes>
        <Route index element={<WorkerList category={workerListCategory} />} />
      </Routes>
    </div>
  );
}

export default Home;