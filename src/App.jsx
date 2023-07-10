import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import SideNav from "./sideNav";
import MainContent from "./mainContent/content";
import "./App.css";
import Explore from "./Explore/Explore";

function App() {
  return (
    <div className="container">
      <div className="flex-element sideNav">
        <SideNav />
      </div>
      <div className="flex-element mainContent">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
