import { Link } from "react-router-dom";
import "../App.css";
import { MenuCard } from "./home";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DataChart } from "../Data/Data";
import { AgriculturalDataChart } from "../Data/AgriculturalDataChart";
import { ManufactoringDataChart } from "../Data/ManufactoringDataChart";
import { FertilizersDataChart } from "../Data/FertilizersDataChart";
import { FertilizersProductionChart } from "../Data/FertilizersProductionChart";
import { GDPCurrentUSD } from "../Data/GDPCurrentUSD";
import { FDINetPercGDP } from "../Data/FDINetPercGDP";
import { FDIBoP } from "../Data/FDIBoP";
import { CurrentACBal } from "../Data/CurrentACBal";
import { NetInflowChart } from "../Data/NetInflow";
import { FDIInflow } from "../Data/FDIInflow";
import { ForestFish } from "../Data/ForestFish";
import { GNICurrent } from "../Data/GNICurrent";
import { ReserverImports } from "../Data/ReserverImports";
import { ReservesGold } from "../Data/ReservesGold";
import { DebtService } from "../Data/DebtService";
import { TotalReserve } from "../Data/TotalReserve";
import { DService } from "../Data/DService";

const NavBar = (props) => {
  const macroeconomic = [
    {
      id: 1,
      name: "GDP Growth Rate",
      chart: <DataChart country={props.country} range={props.range} />,
    },
    {
      id: 2,
      name: "GDP Current USD",
      chart: <GDPCurrentUSD country={props.country} range={props.range} />,
    },
    {
      id: 3,
      name: "Current Account Balance",
      chart: <CurrentACBal country={props.country} range={props.range} />,
    },
    {
      id: 4,
      name: "FDI net",
      chart: <NetInflowChart country={props.country} range={props.range} />,
    },
    {
      id: 5,
      name: "FDI net outflows - BoP",
      chart: <FDIBoP country={props.country} range={props.range} />,
    },
    {
      id: 6,
      name: "FDI inflows",
      chart: <FDIInflow country={props.country} range={props.range} />,
    },
    {
      id: 7,
      name: "FDI net outflows % GDP",
      chart: <FDINetPercGDP country={props.country} range={props.range} />,
    },
  ];

  const agricultural = [
    {
      id: 1,
      name: "Contribution",
      chart: (
        <AgriculturalDataChart country={props.country} range={props.range} />
      ),
    },
    {
      id: 2,
      name: "Manufacturing",
      chart: (
        <ManufactoringDataChart country={props.country} range={props.range} />
      ),
    },
    {
      id: 3,
      name: "Fertilizers",
      chart: (
        <FertilizersDataChart country={props.country} range={props.range} />
      ),
    },
    {
      id: 4,
      name: "Fertilizer Production",
      chart: (
        <FertilizersProductionChart
          country={props.country}
          range={props.range}
        />
      ),
    },
    {
      id: 5,
      name: "Forestery and Fishin",
      chart: <ForestFish country={props.country} range={props.range} />,
    },
  ];

  const debt = [
    {
      id: 1,
      name: "Reserves - imports",
      chart: <ReserverImports country={props.country} range={props.range} />,
    },
    {
      id: 2,
      name: "Reserves - gold",
      chart: <ReservesGold country={props.country} range={props.range} />,
    },
    {
      id: 3,
      name: "Total Debt Service % GNI",
      chart: <DebtService country={props.country} range={props.range} />,
    },
    {
      id: 4,
      name: "Total Reserves",
      chart: <TotalReserve country={props.country} range={props.range} />,
    },
    {
      id: 5,
      name: "Debt service",
      chart: <DService country={props.country} range={props.range} />,
    },
    {
      id: 6,
      name: "GNI current",
      chart: <GNICurrent country={props.country} range={props.range} />,
    },
  ];

  return (
    <div>
      <div className="nav-main-elements-macro">
        <Link
          className="link"
          to="/home"
          onClick={() => toggleContent("macro")}
          style={{ marginBottom: "10px" }}
        >
          Macroeconomic (USD)
        </Link>
        <div id="macro" style={{ display: "none" }}>
          <DndProvider backend={HTML5Backend}>
            <div className="pets">
              {macroeconomic.map((mc) => (
                <MenuCard
                  draggable
                  id={mc.id}
                  name={mc.name}
                  chart={mc.chart}
                />
              ))}
            </div>
          </DndProvider>
        </div>
      </div>

      <div className="nav-main-elements">
        <Link className="link" to="/home" onClick={() => toggleContent("agri")}>
          Agricultural
        </Link>
        <div id="agri" style={{ display: "none" }}>
          <DndProvider backend={HTML5Backend}>
            <div className="pets">
              {agricultural.map((ag) => (
                <MenuCard
                  draggable
                  id={ag.id}
                  name={ag.name}
                  chart={ag.chart}
                />
              ))}
            </div>
          </DndProvider>
        </div>
      </div>
      <div className="nav-main-elements">
        <Link className="link" to="/home" onClick={() => toggleContent("debt")}>
          Debt
        </Link>
        <div id="debt" style={{ display: "none" }}>
          <DndProvider backend={HTML5Backend}>
            <div className="pets">
              {debt.map((db) => (
                <MenuCard
                  draggable
                  id={db.id}
                  name={db.name}
                  chart={db.chart}
                />
              ))}
            </div>
          </DndProvider>
        </div>
      </div>
      <div className="nav-main-elements">
        <Link className="link" to="/imports">
          Imports
        </Link>
      </div>

      <div className="nav-main-elements">
        <Link className="link" to="/chat">
          Co-pilot
        </Link>
      </div>
      {/* <div className="nav-main-elements">
          <Link to="/yield">Yield</Link>
        </div>
        <div className="nav-main-elements">
          Crops
          <li>
            <Link to="/mangoes">Mangoes</Link>
          </li>
          <li>
            <Link to="/walnuts">Walnuts</Link>
          </li>
        </div>
        <div className="nav-main-elements" >
            <Link to="/Sensors">Sensors</Link>
        </div> */}
    </div>
  );
};

const toggleContent = (id) => {
  const content = document.getElementById(id);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
};

export default NavBar;
