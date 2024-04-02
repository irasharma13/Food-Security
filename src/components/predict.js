import Header from "./header";
import NavBar from "./nav";
import "../App.css";
import { useState } from "react";

let value1 = 50;
let value2 = 50;
let value3 = 50;
let value4 = 50;
let value5 = 50;
let value6 = 50;
let value7 = 50;
let value8 = 50;
let value9 = 50;
let value10 = 50;

const Predict = () => {
  const [showPopUp, setShow] = useState(false);

  const updateValue1 = (val) => {
    value1 = val;
    document.getElementById("sliderValue1").innerHTML = val;
  };
  const updateValue2 = (val) => {
    value2 = val;
    document.getElementById("sliderValue2").innerHTML = val;
  };
  const updateValue3 = (val) => {
    value3 = val;
    document.getElementById("sliderValue3").innerHTML = val;
  };
  const updateValue4 = (val) => {
    value4 = val;
    document.getElementById("sliderValue4").innerHTML = val;
  };
  const updateValue5 = (val) => {
    value5 = val;
    document.getElementById("sliderValue5").innerHTML = val;
  };
  const updateValue6 = (val) => {
    value6 = val;
    document.getElementById("sliderValue6").innerHTML = val;
  };
  const updateValue7 = (val) => {
    value7 = val;
    document.getElementById("sliderValue7").innerHTML = val;
  };
  const updateValue8 = (val) => {
    value8 = val;
    document.getElementById("sliderValue8").innerHTML = val;
  };
  const updateValue9 = (val) => {
    value9 = val;
    document.getElementById("sliderValue9").innerHTML = val;
  };
  const updateValue10 = (val) => {
    value10 = val;
    document.getElementById("sliderValue10").innerHTML = val;
  };

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-2" style={{ "background-color": "#202123" }}>
          <NavBar />
        </div>
        <div className="col-md-1 vl"></div>

        <div className="col-md-8">
          <div className="predict-container">
            <img
              src={require("./img1.png")}
              alt="Test Image"
              height="300"
              width="400"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img
              src={require("./img2.png")}
              alt="Test Image"
              height="300"
              width="400"
            />
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
        <span>Projected GDP: {value1}</span> <br />
        <span>Current Account Balance (% of GDP): {value2}</span> <br />
        <span>
          {" "}
          Foreign direct investment, net inflows(% of GDP): {value3}
        </span>{" "}
        <br />
        <span>
          Fertilizer consumption (% of fertilizer production): {value4}
        </span>{" "}
        <br />
        <span>Total reserves (% of total external debt): {value5}</span> <br />
        <span>FDI- NetOutflows(%ofG DP): {value6}</span> <br />
        <span>Agricultural Contribution (% GDP): {value7}</span> <br />
        <span>PManufacturing(%GDP): {value8}</span> <br />
        <span>
          Agriculture, forestry, and fishing, value added (annual % growth):{" "}
          {value9}
        </span>{" "}
        <br />
        <span>Total debt service (% of GNI): {value10}</span>
        <div style={{ marginTop: "20px" }}>
          Calling Machine Learning Model............
        </div>
        <div className="close-btn-container">
          <button onClick={() => props.close((s) => !s)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Predict;
