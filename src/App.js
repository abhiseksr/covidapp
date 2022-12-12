import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Treatments from "./Treatments";
import Variants from "./Variants";
import Symptoms from "./Symptoms";
import Main from "./Main";
import World from "./World";
import India from "./India";
// import Navbar from "./Navbar";
// import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";
import Timeline from "./Timeline";
import Prevention from "./Prevention";
import { Route, Routes } from "react-router-dom";
const indiaCovidData = require("./indiaCovidData.json");
const worldCovidData = require("./worldCovidData.json");
const indiaTimelineData = require("./indiaTimelineData.json");

const QuickChart = require('quickchart-js');

const myChart = new QuickChart();
myChart
  .setConfig({
    type: 'bar',
    data: {
      labels: ['Hello world', 'Foo bar'],
      datasets: [{ label: 'Foo', data: [1, 2] }],
    },
  })
  .setWidth(800)
  .setHeight(400)
  .setBackgroundColor('transparent');

// Print the chart URL
console.log(myChart.getUrl());

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar indiaCovidData={indiaCovidData} worldCovidData={worldCovidData} />
        <div className="main">
          <input type="checkbox" id="menu" className="commonmenu"/>
          <label htmlFor="menu" className="commonmenu" id="mainlabel">
            <i id="menubar" className="fa-solid bars fa-bars"></i>
            <i id="menubar" className="fa cross fa-xmark"></i>
          </label>
          <Sidebar indiaCovidData={indiaCovidData} worldCovidData={worldCovidData} />
          <Routes>
            <Route exact path="/" element={<Main indiaCovidData={indiaCovidData} worldCovidData={worldCovidData} indiaTimelineData={indiaTimelineData} />} />
            <Route exact path="/prevention" element={<Prevention />} />
            <Route exact path="/variants" element={<Variants />} />
            <Route exact path="/symptoms" element={<Symptoms />} />
            <Route exact path="/treatments" element={<Treatments />} />
            <Route exact path="/timeline" element={<Timeline indiaTimelineData={indiaTimelineData} indiaCovidData={indiaCovidData} />} />
            <Route path="/world/*" element={<World worldCovidData={worldCovidData} />} />
            <Route path="/india/*" element={<India indiaCovidData={indiaCovidData} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
