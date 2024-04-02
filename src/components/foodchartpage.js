import Chart from "react-google-charts";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./header";
import NavBar from "./nav";

export default function FoodChartPage(props) {
  let [year, setYear] = useState(2020);
  let [country, setCountry] = useState("SA");
  let [product, setProduct] = useState("Wheat");
  let [displayVar, setVar] = useState("SAWheat2020");

  var SAWheat2020 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "Australia", 0],
    ["Saudi Arabia", "Brazil", 62460],
    ["Saudi Arabia", "Egypt", 0],
    ["Saudi Arabia", "Estonia", 0],
    ["Saudi Arabia", "France", 0],
    ["Saudi Arabia", "Germany", 0],
    ["Saudi Arabia", "Latvia", 70100],
    ["Saudi Arabia", "Lebanon", 2],
    ["Saudi Arabia", "Lithuania", 130500],
    ["Saudi Arabia", "Poland", 448613],
    ["Saudi Arabia", "Russian Federation", 61700],
    ["Saudi Arabia", "Ukraine", 0],
    ["Saudi Arabia", "United States of America", 0],
    ["Saudi Arabia", "Yemen", 30],
  ];

  var SAWheat2019 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "France", 11],
    ["Saudi Arabia", "Germany", 139850],
    ["Saudi Arabia", "Italy", 37],
    ["Saudi Arabia", "Lithuania", 259583],
    ["Saudi Arabia", "Poland", 66149],
    ["Saudi Arabia", "Russian Federation", 50],
    ["Saudi Arabia", "Yemen", 92],
  ];

  var SAWheat2018 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "France", 191477],
    ["Saudi Arabia", "Germany", 257434],
    ["Saudi Arabia", "Italy", 6],
    ["Saudi Arabia", "Latvia", 129703],
    ["Saudi Arabia", "Lithuania", 260521],
    ["Saudi Arabia", "Poland", 64090],
    ["Saudi Arabia", "United States of America", 84],
    ["Saudi Arabia", "Yemen", 304],
  ];

  var PieSAWheat2020 = [
    ["PartnerCountries", "Value"],
    ["Australia", 0],
    ["Brazil", 62460],
    ["Egypt", 0],
    ["Estonia", 0],
    ["France", 0],
    ["Germany", 0],
    ["Latvia", 70100],
    ["Lebanon", 2],
    ["Lithuania", 130500],
    ["Poland", 448613],
    ["Russian Federation", 61700],
    ["Ukraine", 0],
    ["United States of America", 0],
    ["Yemen", 30],
  ];

  var PieSAWheat2019 = [
    ["PartnerCountries", "Value"],
    ["France", 11],
    ["Germany", 139850],
    ["Italy", 37],
    ["Lithuania", 259583],
    ["Poland", 66149],
    ["Russian Federation", 50],
    ["Yemen", 92],
  ];

  var PieSAWheat2018 = [
    ["PartnerCountries", "Value"],
    ["France", 191477],
    ["Germany", 257434],
    ["Italy", 6],
    ["Latvia", 129703],
    ["Lithuania", 260521],
    ["Poland", 64090],
    ["United States of America", 84],
    ["Yemen", 304],
  ];

  var SARice2020 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "Argentina", 519],
    ["Saudi Arabia", "Australia", 4316],
    ["Saudi Arabia", "Bangladesh", 3798],
    ["Saudi Arabia", "Brazil", 9836],
    ["Saudi Arabia", "Bulgaria", 1545],
    ["Saudi Arabia", "Cambodia", 3302],
    ["Saudi Arabia", "Canada", 2],
    ["Saudi Arabia", "China, mainland", 2508],
    ["Saudi Arabia", "China, Taiwan Province of", 7],
    ["Saudi Arabia", "Egypt", 567],
    ["Saudi Arabia", "France", 0],
    ["Saudi Arabia", "Germany", 3],
    ["Saudi Arabia", "India", 1199521],
    ["Saudi Arabia", "Indonesia", 14],
    ["Saudi Arabia", "Iraq", 56],
    ["Saudi Arabia", "Italy", 2059],
    ["Saudi Arabia", "Japan", 5],
    ["Saudi Arabia", "Lebanon", 0],
    ["Saudi Arabia", "Netherlands", 2],
    ["Saudi Arabia", "Pakistan", 126799],
    ["Saudi Arabia", "Philippines", 63],
    ["Saudi Arabia", "Portugal", 2401],
    ["Saudi Arabia", "Republic of Korea", 7],
    ["Saudi Arabia", "Romania", 21],
    ["Saudi Arabia", "Russian Federation", 25],
    ["Saudi Arabia", "Serbia", 40],
    ["Saudi Arabia", "Spain", 906],
    ["Saudi Arabia", "Sri Lanka", 113],
    ["Saudi Arabia", "Thailand", 31377],
    ["Saudi Arabia", "Turkey", 0],
    ["Saudi Arabia", "United Arab Emirates", 72],
    ["Saudi Arabia", "United Kingdom of Great Britain and Northern Ireland", 6],
    ["Saudi Arabia", "United States of America", 112894],
    ["Saudi Arabia", "Uzbekistan", 83],
    ["Saudi Arabia", "Viet Nam", 32292],
  ];

  var PieSARice2020 = [
    ["PartnerCountries", "Value"],
    ["Argentina", 519],
    ["Australia", 4316],
    ["Bangladesh", 3798],
    ["Brazil", 9836],
    ["Bulgaria", 1545],
    ["Cambodia", 3302],
    ["Canada", 2],
    ["China, mainland", 2508],
    ["China, Taiwan Province of", 7],
    ["Egypt", 567],
    ["France", 0],
    ["Germany", 3],
    ["India", 1199521],
    ["Indonesia", 14],
    ["Iraq", 56],
    ["Italy", 2059],
    ["Japan", 5],
    ["Lebanon", 0],
    ["Netherlands", 2],
    ["Pakistan", 126799],
    ["Philippines", 63],
    ["Portugal", 2401],
    ["Republic of Korea", 7],
    ["Romania", 21],
    ["Russian Federation", 25],
    ["Serbia", 40],
    ["Spain", 906],
    ["Sri Lanka", 113],
    ["Thailand", 31377],
    ["Turkey", 0],
    ["United Arab Emirates", 72],
    ["United Kingdom of Great Britain and Northern Ireland", 6],
    ["United States of America", 112894],
    ["Uzbekistan", 83],
    ["Viet Nam", 32292],
  ];

  var SARice2019 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "Afghanistan", 21],
    ["Saudi Arabia", "Argentina", 100],
    ["Saudi Arabia", "Australia", 16176],
    ["Saudi Arabia", "Bangladesh", 2331],
    ["Saudi Arabia", "Belgium", 21],
    ["Saudi Arabia", "Brazil", 10918],
    ["Saudi Arabia", "Bulgaria", 149],
    ["Saudi Arabia", "Canada", 1],
    ["Saudi Arabia", "China, mainland", 924],
    ["Saudi Arabia", "Egypt", 1100],
    ["Saudi Arabia", "Germany", 1],
    ["Saudi Arabia", "India", 1045884],
    ["Saudi Arabia", "Indonesia", 17],
    ["Saudi Arabia", "Iraq", 50],
    ["Saudi Arabia", "Italy", 800],
    ["Saudi Arabia", "Japan", 1],
    ["Saudi Arabia", "Malaysia", 2],
    ["Saudi Arabia", "Pakistan", 134885],
    ["Saudi Arabia", "Philippines", 271],
    ["Saudi Arabia", "Portugal", 1612],
    ["Saudi Arabia", "Republic of Korea", 3],
    ["Saudi Arabia", "Spain", 1453],
    ["Saudi Arabia", "Sri Lanka", 67],
    ["Saudi Arabia", "Thailand", 44520],
    ["Saudi Arabia", "Turkey", 1],
    ["Saudi Arabia", "Ukraine", 0],
    ["Saudi Arabia", "United Arab Emirates", 6],
    ["Saudi Arabia", "United Kingdom of Great Britain and Northern Ireland", 3],
    ["Saudi Arabia", "United States of America", 103685],
    ["Saudi Arabia", "Viet Nam", 27803],
  ];

  var PieSARice2019 = [
    ["PartnerCountries", "Value"],
    ["Afghanistan", 21],
    ["Argentina", 100],
    ["Australia", 16176],
    ["Bangladesh", 2331],
    ["Belgium", 21],
    ["Brazil", 10918],
    ["Bulgaria", 149],
    ["Canada", 1],
    ["China, mainland", 924],
    ["Egypt", 1100],
    ["Germany", 1],
    ["India", 1045884],
    ["Indonesia", 17],
    ["Iraq", 50],
    ["Italy", 800],
    ["Japan", 1],
    ["Malaysia", 2],
    ["Pakistan", 134885],
    ["Philippines", 271],
    ["Portugal", 1612],
    ["Republic of Korea", 3],
    ["Spain", 1453],
    ["Sri Lanka", 67],
    ["Thailand", 44520],
    ["Turkey", 1],
    ["Ukraine", 0],
    ["United Arab Emirates", 6],
    ["United Kingdom of Great Britain and Northern Ireland", 3],
    ["United States of America", 103685],
    ["Viet Nam", 27803],
  ];

  var SARice2018 = [
    ["ReporterCountries", "PartnerCountries", "Value"],
    ["Saudi Arabia", "Australia", 30358],
    ["Saudi Arabia", "Bangladesh", 1964],
    ["Saudi Arabia", "Belgium", 1],
    ["Saudi Arabia", "Brazil", 6834],
    ["Saudi Arabia", "Bulgaria", 72],
    ["Saudi Arabia", "Cambodia", 558],
    ["Saudi Arabia", "Canada", 1],
    ["Saudi Arabia", "China, mainland", 1852],
    ["Saudi Arabia", "Egypt", 801],
    ["Saudi Arabia", "France", 2],
    ["Saudi Arabia", "Germany", 1],
    ["Saudi Arabia", "Greece", 815],
    ["Saudi Arabia", "India", 968660],
    ["Saudi Arabia", "Indonesia", 13],
    ["Saudi Arabia", "Iraq", 47],
    ["Saudi Arabia", "Italy", 432],
    ["Saudi Arabia", "Japan", 3],
    ["Saudi Arabia", "Lebanon", 51],
    ["Saudi Arabia", "Mongolia", 48],
    ["Saudi Arabia", "Pakistan", 93272],
    ["Saudi Arabia", "Peru", 12],
    ["Saudi Arabia", "Philippines", 23],
    ["Saudi Arabia", "Portugal", 2554],
    ["Saudi Arabia", "Republic of Korea", 2],
    ["Saudi Arabia", "South Africa", 87],
    ["Saudi Arabia", "Spain", 1402],
    ["Saudi Arabia", "Sri Lanka", 162],
    ["Saudi Arabia", "Thailand", 62574],
    ["Saudi Arabia", "Turkey", 6],
    ["Saudi Arabia", "United Arab Emirates", 96],
    [
      "Saudi Arabia",
      "United Kingdom of Great Britain and Northern Ireland",
      14,
    ],
    ["Saudi Arabia", "United States of America", 90510],
    ["Saudi Arabia", "Viet Nam", 20941],
  ];

  var PieSARice2018 = [
    ["PartnerCountries", "Value"],
    ["Australia", 30358],
    ["Bangladesh", 1964],
    ["Belgium", 1],
    ["Brazil", 6834],
    ["Bulgaria", 72],
    ["Cambodia", 558],
    ["Canada", 1],
    ["China, mainland", 1852],
    ["Egypt", 801],
    ["France", 2],
    ["Germany", 1],
    ["Greece", 815],
    ["India", 968660],
    ["Indonesia", 13],
    ["Iraq", 47],
    ["Italy", 432],
    ["Japan", 3],
    ["Lebanon", 51],
    ["Mongolia", 48],
    ["Pakistan", 93272],
    ["Peru", 12],
    ["Philippines", 23],
    ["Portugal", 2554],
    ["Republic of Korea", 2],
    ["South Africa", 87],
    ["Spain", 1402],
    ["Sri Lanka", 162],
    ["Thailand", 62574],
    ["Turkey", 6],
    ["United Arab Emirates", 96],
    ["United Kingdom of Great Britain and Northern Ireland", 14],
    ["United States of America", 90510],
    ["Viet Nam", 20941],
  ];

  var EgyptWheat2020 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "Australia", 203640],
    ["Egypt", "Bulgaria", 46593],
    ["Egypt", "Canada", 8391],
    ["Egypt", "France", 593422],
    ["Egypt", "Hungary", 19171],
    ["Egypt", "Italy", 0],
    ["Egypt", "Lithuania", 23518],
    ["Egypt", "Romania", 294522],
    ["Egypt", "Russian Federation", 5460508],
    ["Egypt", "Ukraine", 2317534],
    ["Egypt", "United Kingdom of Great Britain and Northern Ireland", 2],
    ["Egypt", "United States of America", 75282],
  ];

  var EgyptWheat2019 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "Australia", 32724],
    ["Egypt", "Belarus", 57750],
    ["Egypt", "Brazil", 5],
    ["Egypt", "Bulgaria", 14],
    ["Egypt", "Canada", 64],
    ["Egypt", "France", 625830],
    ["Egypt", "Netherlands", 1],
    ["Egypt", "Poland", 128333],
    ["Egypt", "Republic of Moldova", 9],
    ["Egypt", "Romania", 1286086],
    ["Egypt", "Russian Federation", 5743949],
    ["Egypt", "Ukraine", 1767563],
    ["Egypt", "United States of America", 782095],
  ];

  var EgyptWheat2018 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "Australia", 264309],
    ["Egypt", "Belarus", 67604],
    ["Egypt", "Bulgaria", 57741],
    ["Egypt", "Canada", 34901],
    ["Egypt", "France", 67],
    ["Egypt", "Lithuania", 38029],
    ["Egypt", "Poland", 138721],
    ["Egypt", "Romania", 1104706],
    ["Egypt", "Russian Federation", 9198030],
    ["Egypt", "Ukraine", 1600458],
  ];

  var EgyptRice2020 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "Australia", 0],
    ["Egypt", "Bahrain", 0],
    ["Egypt", "Cambodia", 4],
    ["Egypt", "China, mainland", 16699],
    ["Egypt", "France", 2],
    ["Egypt", "India", 49898],
    ["Egypt", "Italy", 127],
    ["Egypt", "Kuwait", 0],
    ["Egypt", "Netherlands", 9],
    ["Egypt", "Pakistan", 553],
    ["Egypt", "Republic of Korea", 0],
    ["Egypt", "Russian Federation", 1],
    ["Egypt", "Saudi Arabia", 0],
    ["Egypt", "Thailand", 7620],
    ["Egypt", "United Kingdom of Great Britain and Northern Ireland", 1],
    ["Egypt", "United States of America", 22],
    ["Egypt", "Viet Nam", 93],
  ];

  var EgyptRice2019 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "Brunei Darussalam", 1],
    ["Egypt", "China, mainland", 425186],
    ["Egypt", "Denmark", 0],
    ["Egypt", "Greece", 0],
    ["Egypt", "India", 61402],
    ["Egypt", "Italy", 32],
    ["Egypt", "Kuwait", 0],
    ["Egypt", "Pakistan", 4960],
    ["Egypt", "Qatar", 0],
    ["Egypt", "Russian Federation", 2],
    ["Egypt", "Saudi Arabia", 0],
    ["Egypt", "Spain", 4],
    ["Egypt", "Thailand", 1136],
    ["Egypt", "United Kingdom of Great Britain and Northern Ireland", 0],
    ["Egypt", "United States of America", 0],
    ["Egypt", "Viet Nam", 293],
  ];

  var EgyptRice2018 = [
    ["Reporter Countries", "Partner Countries", "Value"],
    ["Egypt", "China, mainland", 32672],
    ["Egypt", "France", 0],
    ["Egypt", "India", 29165],
    ["Egypt", "Italy", 138],
    ["Egypt", "Kuwait", 0],
    ["Egypt", "Nigeria", 0],
    ["Egypt", "Oman", 0],
    ["Egypt", "Pakistan", 284],
    ["Egypt", "Qatar", 0],
    ["Egypt", "Russian Federation", 315],
    ["Egypt", "Saudi Arabia", 1],
    ["Egypt", "South Africa", 0],
    ["Egypt", "Sri Lanka", 1],
    ["Egypt", "Thailand", 8190],
    ["Egypt", "United Arab Emirates", 0],
    ["Egypt", "United Kingdom of Great Britain and Northern Ireland", 1],
    ["Egypt", "United States of America", 19],
  ];

  var PieEgyptWheat2020 = [
    ["Partner Countries", "Value"],
    ["Australia", 203640],
    ["Bulgaria", 46593],
    ["Canada", 8391],
    ["France", 593422],
    ["Hungary", 19171],
    ["Italy", 0],
    ["Lithuania", 23518],
    ["Romania", 294522],
    ["Russian Federation", 5460508],
    ["Ukraine", 2317534],
    ["United Kingdom of Great Britain and Northern Ireland", 2],
    ["United States of America", 75282],
  ];

  var PieEgyptWheat2019 = [
    ["Partner Countries", "Value"],
    ["Australia", 32724],
    ["Belarus", 57750],
    ["Brazil", 5],
    ["Bulgaria", 14],
    ["Canada", 64],
    ["France", 625830],
    ["Netherlands", 1],
    ["Poland", 128333],
    ["Republic of Moldova", 9],
    ["Romania", 1286086],
    ["Russian Federation", 5743949],
    ["Ukraine", 1767563],
    ["United States of America", 782095],
  ];

  var PieEgyptWheat2018 = [
    ["Partner Countries", "Value"],
    ["Australia", 264309],
    ["Belarus", 67604],
    ["Bulgaria", 57741],
    ["Canada", 34901],
    ["France", 67],
    ["Lithuania", 38029],
    ["Poland", 138721],
    ["Romania", 1104706],
    ["Russian Federation", 9198030],
    ["Ukraine", 1600458],
  ];

  var PieEgyptRice2020 = [
    ["Partner Countries", "Value"],
    ["Australia", 0],
    ["Bahrain", 0],
    ["Cambodia", 4],
    ["China, mainland", 16699],
    ["France", 2],
    ["India", 49898],
    ["Italy", 127],
    ["Kuwait", 0],
    ["Netherlands", 9],
    ["Pakistan", 553],
    ["Republic of Korea", 0],
    ["Russian Federation", 1],
    ["Saudi Arabia", 0],
    ["Thailand", 7620],
    ["United Kingdom of Great Britain and Northern Ireland", 1],
    ["United States of America", 22],
    ["Viet Nam", 93],
  ];

  var PieEgyptRice2019 = [
    ["Partner Countries", "Value"],
    ["Brunei Darussalam", 1],
    ["China, mainland", 425186],
    ["Denmark", 0],
    ["Greece", 0],
    ["India", 61402],
    ["Italy", 32],
    ["Kuwait", 0],
    ["Pakistan", 4960],
    ["Qatar", 0],
    ["Russian Federation", 2],
    ["Saudi Arabia", 0],
    ["Spain", 4],
    ["Thailand", 1136],
    ["United Kingdom of Great Britain and Northern Ireland", 0],
    ["United States of America", 0],
    ["Viet Nam", 293],
  ];

  var PieEgyptRice2018 = [
    ["Partner Countries", "Value"],
    ["China, mainland", 32672],
    ["France", 0],
    ["India", 29165],
    ["Italy", 138],
    ["Kuwait", 0],
    ["Nigeria", 0],
    ["Oman", 0],
    ["Pakistan", 284],
    ["Qatar", 0],
    ["Russian Federation", 315],
    ["Saudi Arabia", 1],
    ["South Africa", 0],
    ["Sri Lanka", 1],
    ["Thailand", 8190],
    ["United Arab Emirates", 0],
    ["United Kingdom of Great Britain and Northern Ireland", 1],
    ["United States of America", 19],
  ];

  var options = {
    height: "700px",
  };

  let onButtonClick = (e) => {
    setVar(e.target.value);
    setVar(country + product + year);

    if (displayVar === "SAWheat2020") {
      setDisplay(SAWheat2020);
      setPieDisplay(PieSAWheat2020);
      console.log(displayVar);
    }
    if (displayVar === "SAWheat2019") {
      setDisplay(SAWheat2019);
      setPieDisplay(PieSAWheat2019);
      console.log(displayVar);
    }
    if (displayVar === "SAWheat2018") {
      setDisplay(SAWheat2018);
      setPieDisplay(PieSAWheat2018);
      console.log(displayVar);
    }
    if (displayVar === "SARice2020") {
      setDisplay(SARice2020);
      setPieDisplay(PieSARice2020);
      console.log(displayVar);
    }
    if (displayVar === "SARice2019") {
      setDisplay(SARice2019);
      setPieDisplay(PieSARice2019);
      console.log(displayVar);
    }
    if (displayVar === "SARice2018") {
      setDisplay(SARice2018);
      setPieDisplay(PieSARice2018);
      console.log(displayVar);
    }

    if (displayVar === "EgyptWheat2020") {
      setDisplay(EgyptWheat2020);
      setPieDisplay(PieEgyptWheat2020);
      console.log(displayVar);
    }
    if (displayVar === "EgyptWheat2019") {
      setDisplay(EgyptWheat2019);
      setPieDisplay(PieEgyptWheat2019);
      console.log(displayVar);
    }
    if (displayVar === "EgyptWheat2018") {
      setDisplay(EgyptWheat2018);
      setPieDisplay(PieEgyptWheat2018);
      console.log(displayVar);
    }
    if (displayVar === "EgyptRice2020") {
      setDisplay(EgyptRice2020);
      setPieDisplay(PieEgyptRice2020);
      console.log(displayVar);
    }
    if (displayVar === "EgyptRice2019") {
      setDisplay(EgyptRice2019);
      setPieDisplay(PieEgyptRice2019);
      console.log(displayVar);
    }
    if (displayVar === "EgyptRice2018") {
      setDisplay(EgyptRice2018);
      setPieDisplay(PieEgyptRice2018);
      console.log(displayVar);
    }
  };

  let [displayChart, setDisplay] = useState(SAWheat2020);
  let [displayPie, setPieDisplay] = useState(PieSAWheat2020);

  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="main-content">
        <div className="side-nav-bar">
          <NavBar />
        </div>
        <div className="right-area-imports">
          <div className="top-right-area-imports">
            <Form.Group>
              <Form.Label>Year: </Form.Label>
              <Form.Select
                value={year}
                required
                name="from"
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select Year</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Country: </Form.Label>
              <Form.Select
                value={country}
                required
                name="to"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                <option value="SA">Saudi Arabia</option>
                <option value="Egypt">Egypt</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Product: </Form.Label>
              <Form.Select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="">Product</option>
                <option value="Wheat">Wheat</option>
                <option value="Rice">Rice</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="secondary"
              className="pure-u-1-6 btn-spacing"
              align="center"
              onClick={(e) => onButtonClick(e)}
              style={{ width: "100px", height: "40px", marginTop: "30px" }}
            >
              Submit
            </Button>
          </div>
          <div
            id="chart-area"
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              // marginTop: "100px",
              width: "80%",
            }}
          >
            <CustomCharts
              displayChart={displayChart}
              options={options}
              displayPie={displayPie}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomCharts(props) {
  return (
    <div id="chart-area">
      <div style={{ marginLeft: "10%" }}>
        <Chart
          width={"700px"}
          height={"500px"}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={props.displayChart}
          rootProps={{ "data-testid": "1" }}
          legendToggle
          options={props.options}
        />
      </div>
      <div style={{ marginLeft: "30%" }}>
        <Chart
          chartType="PieChart"
          data={props.displayPie}
          width="70%"
          height="400px"
          legendToggle
        />
      </div>
    </div>
  );
}
