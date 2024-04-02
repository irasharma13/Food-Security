import "./logo.css";
import "../img/wheat.png";

const Header = () => {
  return (
    // <div className="row header">
    //   <div className="col-md-1 header-elements" style={{ paddingTop: "10px" }}>
    //     <img src={require("../img/wheat.png")} width="60" height="60" />
    //   </div>
    //   <div className="col-md-11 header-elements">
    //     <span>Food Security Dashboard</span>
    //   </div>
    // </div>
    <div className="header">
      <div className="fsicon" style={{ paddingLeft: "4px" }}>
        <img src={require("../img/wheat.png")} width="60" height="60" />
      </div>
      <div className="header-elements">
        <span>
          Macroeconomic Researcher Food Security Time Series and Large Language
          Chat GPT Dashboard
        </span>
      </div>
      <div className="fsicon" style={{ marginLeft: "14%" }}>
        <img src={require("../img/wheat.png")} width="60" height="60" />
      </div>
    </div>
  );
};

export default Header;
