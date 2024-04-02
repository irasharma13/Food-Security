import Header from "../components/header";
import NavBar from "../components/nav";
import "../App.css";
import { useState } from "react";

const Bananas = () => {
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3" style={{ "background-color": "#12142f" }}>
          <NavBar />
        </div>
        <div className="col-md-1 vl"></div>

        <div className="col-md-8">
          <div className="bananas-container">
            <h5 align="center">Specialty Crops - Bananas </h5>
            <img src={require("./bananas.png")} height="100%" width="90%" />
            <div className="row">
              <div className="col-md-6">China</div>
              <div className="col-md-5">Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PopUpContainer = (props) => {
  return (
    <div className="formPopup">
      <h5>Seleted Values</h5>
      <div className="pop-up-contents">
        <div className="close-btn-container">
          <button onClick={() => props.close((s) => !s)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Bananas;
