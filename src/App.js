import React from "react";
import "./App.css";

import { Result, SideBar, Loading } from "./components";
import { loaderStore } from "./utils/redux";

const App = () => {
  const { isLoader } = loaderStore.getState();

  return (
    <div className="App">
      <header>
        <h1>SpaceEx Launch programs</h1>
      </header>
      <main>
        <SideBar />
        <Result />
      </main>
      {isLoader && <Loading />}
    </div>
  );
};

export default App;
