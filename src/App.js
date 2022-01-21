import React from "react";
import Sidebar from "./components/sidebar/sidebar.component";
import Schedule from "./pages/schedule/schedule.component";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="sub-container">
        <Schedule />
      </div>
    </div>
  );
};

export default App;
