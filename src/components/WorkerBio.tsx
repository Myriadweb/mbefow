import React, {useEffect, useState} from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import {Modal, Tooltip, OverlayTrigger} from "react-bootstrap";
import '../App.css';
import workersData from '../assets/fow.json';
import {rootPath} from "../config";
// @ts-ignore
function WorkerBio(props) {
  const workerParams = useParams();
  console.log(workerParams.id);
  // @ts-ignore
  const workersDataFiltered = workersData.filter((worker) => worker.ID === +workerParams.id);
  // @ts-ignore
  const selectedWorker = workersData.find((worker) => worker.ID === +workerParams.id);
  // get next/prev worker: 1) get all workers in category, 2) get index of current worker, 3) get next/prev worker
  const workersCategory = workersData.filter((workers) => workers.CATEGORY === selectedWorker?.CATEGORY);
  const workerIndex = workersCategory.findIndex((worker) => worker.ID === selectedWorker?.ID);
  const nextWorker = workersCategory[workerIndex + 1];
  const prevWorker = workersCategory[workerIndex - 1];
  const portrait = require(`../assets/images/portraits/${selectedWorker?.PORTRAIT}`);
  const image1 = require(`../assets/images/popups/${selectedWorker?.IMAGE_1}`);
  const caption1 : string | TrustedHTML = selectedWorker?.CAPTION_1!;
  const credit1 = selectedWorker?.CREDIT_1;
  const image2 = require(`../assets/images/popups/${selectedWorker?.IMAGE_2}`);
  const caption2 : string | TrustedHTML = selectedWorker?.CAPTION_2!;
  const credit2 = selectedWorker?.CREDIT_2;
  const image3 = require(`../assets/images/popups/${selectedWorker?.IMAGE_3}`);
  const caption3 : string | TrustedHTML = selectedWorker?.CAPTION_3!;
  const credit3 = selectedWorker?.CREDIT_3;
  const [showImg1, setShowImg1] = React.useState(false);
  const [showImg2, setShowImg2] = React.useState(false);
  const [showImg3, setShowImg3] = React.useState(false);
  const [showKidsFacts, setShowKidsFacts] = React.useState(false);
  const kidsFacts = selectedWorker?.KIDS_FACTS;
  // @ts-ignore
  const biography : string | TrustedHTML = selectedWorker?.BIOGRAPHY;
    return (
    <div className="BioContainer">
      <Link to={`${rootPath}/home`} className="HomeLink"><span>&#x25c0;</span> Back to Menu</Link>
      <div className="BioNav">
        {prevWorker && (
          <div key={prevWorker.ID} className="Prev">
            <Link to={`${rootPath}/worker/${prevWorker.ID}`} onClick={() => setShowKidsFacts(false)}>{prevWorker.NAME}</Link>
          </div>

        )}
      </div>
      <div className="CardContainer">
        <div className="Card">
          <div className="CardTitle">
            <div className="Category">{selectedWorker?.CATEGORY}</div>
            <div className="WorkerName">{selectedWorker?.NAME}</div>
          </div>
          <div className="CardBody">
            <div className="CardPortrait">
              <img src={portrait} alt={selectedWorker?.NAME} draggable="false" />
            </div>
            <div className="CardBio" dangerouslySetInnerHTML={{__html: biography}}></div>
          </div>
        </div>
        <div className="Popups">
          <img src={image1} alt={caption1} onClick={() => setShowImg1(true)} draggable="false" />
          <img src={image2} alt={caption2} onClick={() => setShowImg2(true)} draggable="false" />
          <img src={image3} alt={caption3} onClick={() => setShowImg3(true)} draggable="false" />
        </div>
        <Modal show={showImg1} onHide={() => setShowImg1(false)} size="xl">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={image1} alt={caption1} draggable="false" />
            <div className="Caption" dangerouslySetInnerHTML={{__html: caption1}}></div>
            <div className="Credit">{credit1}</div>
          </Modal.Body>
        </Modal>
        <Modal show={showImg2} onHide={() => setShowImg2(false)} size="xl">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={image2} alt={caption2} draggable="false" />
            <div className="Caption" dangerouslySetInnerHTML={{__html: caption2}}></div>
            <div className="Credit">{credit2}</div>
          </Modal.Body>
        </Modal>
        <Modal show={showImg3} onHide={() => setShowImg3(false)} size="xl">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img src={image3} alt={caption3} draggable="false" />
            <div className="Caption" dangerouslySetInnerHTML={{__html: caption3}}></div>
            <span className="Credit">{credit3}</span>
          </Modal.Body>
        </Modal>
        <div className="directions" style={{marginTop: 20}}>Touch an image to expand and learn more.</div>
      </div>
      <div className="BioNav">
        {nextWorker && (
          <div key={nextWorker.ID} className="Next">
            <Link to={`${rootPath}/worker/${nextWorker.ID}`} onClick={() => setShowKidsFacts(false)}>{nextWorker.NAME}</Link>
          </div>
        )}
        {!nextWorker && (
          <div className="Next">
            <Link to={`${rootPath}/home`}>Back to Main Menu</Link>
          </div>
        )}
      </div>
      {kidsFacts && (
        <>
          <div className={showKidsFacts ? "acorn active popup" : "acorn active"} onClick={() => setShowKidsFacts(true)}>
            <img src={require('../assets/images/MBE_acorn.png')} alt="acorn" />
          </div>
          <div className={showKidsFacts ? "acorn-screen active" : "acorn-screen"} onClick={() => setShowKidsFacts(false)}></div>
          <div className={showKidsFacts ? "acorn-popup active" : "acorn-popup"} onClick={() => setShowKidsFacts(false)}>
            <div className="close"></div>
            <div dangerouslySetInnerHTML={{__html: kidsFacts}}></div>
          </div>
        </>
      )}
      {!kidsFacts && (
        <div className="acorn">
          <img src={require('../assets/images/MBE_acorn.png')} alt="acorn" />
        </div>
      )}
    </div>
  );
}
export default WorkerBio;

