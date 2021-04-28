import React from "react";
import "./index.css";

import Loader from "react-loader-spinner";

const Loading = () => (
  <div className="loading">
    <Loader
      type="RevolvingDot"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={20000} //3 secs
    />
  </div>
);

export default Loading;
