import Header from "./header";
import NavBar from "./nav";
import "../App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { Slider } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCountry, setRRange } from "../CountryRangeSlice";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("China");
  const [persona, setSelectedPersona] = useState("Researcher");
  const [basket, setBasket] = useState([]);
  const [range, setRange] = useState([1960, 2020]);
  const dispatch = useDispatch();
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    dispatch(setCountry(country));
    setBasket([]);
  };

  const handlePersonaChange = (country) => {
    setSelectedPersona(country);
  };

  const years = [];
  for (let i = 1990; i < 2021; i++) {
    years.push(i);
  }

  const [annotations, setAnnotations] = useState([]);

  const rangeChange = (event, newValue) => {
    setRange(newValue);
    console.log(newValue);
    dispatch(setRRange(newValue));
  };

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row-class">
        <div className="columns" style={{ "background-color": "#12142f" }}>
          <NavBar country={selectedCountry} range={range} />
        </div>
        {/* <div className="col-md-2" style={{ "background-color": "#12142f" }}>
          <NavBar country={selectedCountry} range={range} />
        </div> */}
        {/* <div
          className="col-md-1 vl"
          style={{ "background-color": "#c3c6f8fc" }}
        ></div> */}
        {/* <div
          // className="col-md-8 main-container"
          // className="main-container"
          style={{ "background-color": "#c3c6f8fc" }}
        > */}
        <div
          className="row-class-slider"
          style={{ "background-color": "#c3c6f8fc", margin: "None" }}
        >
          {/* <div className="col-md-9"> */}
          <div className="columns">
            <div className="row-class">
              {/* <div className="col-md-3"></div> */}
              {/* <div className="col-md-3"></div> */}
              {/* <br />
              <br />
              <br /> */}
              <Slider
                size="small"
                getAriaLabel={() => "Temperature range"}
                value={range}
                onChange={rangeChange}
                min={1960}
                max={2020}
                marks
                valueLabelDisplay="auto"
                color="secondary"
              />
              <p style={{ fontFamily: "Noto Serif" }}>
                Year: <span id="demo">{`${range[0]}-${range[1]}`}</span>
              </p>
            </div>
          </div>
          {/* <div className="col-md-3"> */}
          <div className="columns">
            <select
              onChange={(e) => {
                handleCountryChange(e.target.value);
              }}
            >
              <option>CHINA</option>
              <option>INDIA</option>
              <option>USA</option>
              {/* <option>EQUADOR</option> */}
            </select>
            <br />
            <select
              onChange={(e) => {
                handlePersonaChange(e.target.value);
              }}
            >
              <option>Researcher</option>
              <option>Government Official</option>
            </select>
          </div>
          {/* </div> */}

          <div className="row-class">
            {/* <div className="col-md-10"> */}
            <div className="columns">
              <div className=" row drag-drop-area">
                <DragDropArea
                  basket={basket}
                  setBasket={setBasket}
                  notes={setAnnotations}
                />
              </div>
            </div>

            {/* <div className="col-md-2"> */}
            <div className="columns">
              {persona === "Researcher" && (
                <div className="annotation">
                  {/* <h4>Click on the chart to write an annotation. The annotations are displayed below:</h4> */}
                  <div>{annotations}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DragDropArea({ isDragging, text, basket, setBasket, notes }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Basket basket={basket} setBasket={setBasket} notes={notes} />
    </DndProvider>
  );
}

export const MenuCard = ({ id, name, chart }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "menuItem",
    item: { id, name, chart },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="pet-card" ref={dragRef}>
      {name}
      {isDragging}
    </div>
  );
};

export const Notes = (props) => {
  const [notes, setNotes] = useState("");

  const closeNote = () => {
    props.closeNote(notes);
  };
  return (
    <div>
      <div
        style={{ backgroundColor: "rgba(90, 142, 184, 0.5", width: "200px" }}
      >
        <textarea
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          placeholder="Add Notes.."
        ></textarea>{" "}
        <br />
        <button onClick={closeNote}>Add note</button>
      </div>
    </div>
  );
};

export const BasketChart = ({ id, name, chart, anNotes }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "menuItem",
    item: { id, name, chart },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [showNotes, setShowNotes] = useState(false);

  const addNotes = () => {
    setShowNotes(true);
  };

  const submitNotes = (notes) => {
    anNotes(notes);
    setShowNotes(false);
  };

  return (
    <div>
      <div onClick={addNotes} className="pet-card" ref={dragRef}>
        {name}
        {isDragging}
        {chart}
      </div>
      {showNotes ? <Notes closeNote={submitNotes} /> : null}
    </div>
  );
};

export const Basket = ({ basket, setBasket, notes }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "menuItem",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div>
      <div
        style={{ width: "800px", height: "600px", marginTop: "20px" }}
        className="basket"
        ref={dropRef}
      >
        {basket.map((menuItem) => (
          <BasketChart
            id={menuItem.id}
            name={menuItem.name}
            chart={menuItem.chart}
            anNotes={notes}
          />
        ))}
        {isOver && <div>Drop Here!</div>}
      </div>
    </div>
  );
};
