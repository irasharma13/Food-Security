import Header from "../components/header";
import NavBar from "../components/nav";
import "../App.css";
import React, { Component } from "react";
import { Circle, GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Philipinescenter = {
  lat: 14.5955,
  lng: 120.9791,
};
const mangoProductionCenters = [
  { lat: 10.577, lng: 122.6077 },
  { lat: 15.4431, lng: 120.5024 },
  { lat: 16.0278, lng: 120.2704 },
  { lat: 10.7202, lng: 122.5621 },
  { lat: 10.3157, lng: 123.8854 },
];

const mangoProductionCentersIndia = [
  { lat: 16.9944, lng: 81.7768 }, // Bhimavaram
  { lat: 15.9227, lng: 80.0371 }, // Kadiam
  { lat: 17.0197, lng: 81.7907 }, // Palakollu
];
const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};
const Mangoes = () => {
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-2" style={{ "background-color": "#333" }}>
          <NavBar />
        </div>
        <div className="col-md-1 vl"></div>

        <div className="col-md-8">
          <div className="mangos-container">
            <h5 align="center">Specialty Crops - Mangos </h5>
            <div className="row">
              {/* <img src={require("./mangos.png")} height="100%" width="90%" /> */}
              <LoadScript googleMapsApiKey="AIzaSyDIMNvaF3cQ3nJO-z5_mfcNh9B60NPYBbs">
                <div className="col-md-6">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={Philipinescenter}
                    zoom={5}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    {mangoProductionCenters.map((point) => {
                      return <Circle center={point} options={options}></Circle>;
                    })}
                    <></>
                  </GoogleMap>
                </div>
                <div className="col-md-6">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: 17.2477, lng: 80.1437 }}
                    zoom={7}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    {mangoProductionCentersIndia.map((point) => {
                      return <Circle center={point} options={options}></Circle>;
                    })}
                    <></>
                  </GoogleMap>
                </div>
              </LoadScript>
            </div>
            <div className="row">
              <div className="col-md-6">Philippines</div>
              <div className="col-md-5">India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangoes;
