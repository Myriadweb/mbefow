import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import workersData from '../assets/fow.json';
import {rootPath} from "../config";
// @ts-ignore
function WorkerList(props) {
  console.log(props.category)
  const workerListCategories = ['Kitchen Staff & Housekeeping', 'House & Grounds', 'Secretaries & Metaphysical Workers'];
  const workersDataFiltered = workersData.filter((worker) => worker.CATEGORY === workerListCategories[props.category]);
  return (
    <div className="WorkerList">
      {workersDataFiltered.map((worker) => (
        <div key={worker.ID} className="WorkerItem">
          <Link to={`${rootPath}/worker/${worker.ID}`} className="WorkerLink">
            <img src={require(`../assets/images/portraits/${worker.PORTRAIT}`)} alt={worker?.NAME} />
            <div className="WorkerNameTag">{worker.NAME}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default WorkerList;