import React from "react";
import "./App.css";

import { Result, SideBar } from "./components";

const App = () => (
  <div className="App">
    <header>
      <h1>SpaceEx Launch programs</h1>
    </header>
    <main>
      <SideBar />
      <Result />
    </main>
  </div>
);

export default App;
