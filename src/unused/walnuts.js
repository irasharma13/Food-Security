import Header from "../components/header";
import NavBar from "../components/nav";
import "../App.css";
import { useState } from "react";
import { Circle, GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Calicenter = { lat: 37.2531, lng: -119.6142 };
const walnutProductionCenters = [
  { lat: 37.766594, lng: -121.958095 },
  { lat: 36.778259, lng: -119.417931 },
  { lat: 36.737798, lng: -119.787125 },
  { lat: 39.021281, lng: -121.55474 },
  { lat: 38.678516, lng: -121.773297 },
  { lat: 36.555239, lng: -119.611755 },
  { lat: 38.005375, lng: -121.805751 },
  { lat: 37.496904, lng: -120.848343 },
  { lat: 38.147105, lng: -120.648455 },
  { lat: 39.0077, lng: -122.924705 },
];

const walnutProductionCentersIran = [
  { lat: 36.262, lng: 59.6168 }, //- Khorasan Razavi Province
  { lat: 36.3049, lng: 59.6161 }, //- Mashhad
  { lat: 36.6019, lng: 52.6723 }, //- Semnan Province
  { lat: 34.0804, lng: 49.685 }, //- Isfahan Province
  { lat: 35.5733, lng: 53.3743 }, //- Sari
  { lat: 36.6188, lng: 53.2105 }, //- Golestan Province
  { lat: 36.297, lng: 59.3979 }, //- Neyshabur
  { lat: 32.665, lng: 51.6776 }, //- Fars Province
  { lat: 37.4822, lng: 57.3119 }, //- Gorgan
  { lat: 35.7153, lng: 51.4044 }, //- Tehran
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
const walnuts = () => {
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-2" style={{ "background-color": "#12142f" }}>
          <NavBar />
        </div>
        <div className="col-md-1 vl"></div>

        <div className="col-md-8">
          <div className="mangos-container">
            <h5 align="center">Specialty Crops - Walnuts </h5>
            <div className="row">
              {/* <img src={require("./mangos.png")} height="100%" width="90%" /> */}
              <LoadScript googleMapsApiKey="AIzaSyDIMNvaF3cQ3nJO-z5_mfcNh9B60NPYBbs">
                <div className="col-md-6">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={Calicenter}
                    zoom={6}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    {walnutProductionCenters.map((point) => {
                      return <Circle center={point} options={options}></Circle>;
                    })}
                    <></>
                  </GoogleMap>
                </div>
                <div className="col-md-6">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: 32.4279, lng: 53.688 }}
                    zoom={5}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    {walnutProductionCentersIran.map((point) => {
                      return <Circle center={point} options={options}></Circle>;
                    })}
                    <></>
                  </GoogleMap>
                </div>
              </LoadScript>
            </div>
            <div className="row">
              <div className="col-md-6">California</div>
              <div className="col-md-5">Iran</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default walnuts;
