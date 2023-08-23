import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import ApplicationRoutes from "./Routes"

function App() {
  return (
    <>
      <Router>
        <Header/>
        <ApplicationRoutes/>
      </Router>
    </>
  );
}

export default App;