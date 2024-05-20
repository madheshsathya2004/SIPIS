import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import DataVisualization from './DataVisualization';
import ReportGeneration from './ReportGeneration';
import MapVisualization from './MapVisualisation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          <Route path="/map-visualization" element={<MapVisualization/>} />
          <Route path="/report-generation" element={<ReportGeneration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
