import React from "react";
import "./result.css";

import ResultCard from "./ResultCard";
import { filterCall } from "../../apis";

import { filterStore, spacexStore, setSpaceX } from "../../utils/redux";

class Result extends React.Component {
  render() {
    // let { results } = this.state;
    // console.log(" Result STATE", results);

    const { spaceX } = spacexStore.getState();

    return (
      <div className="result">
        {spaceX.length
          ? spaceX.map((result, index) => {
              return <ResultCard details={result} key={index} />;
            })
          : "No Results!"}
      </div>
    );
  }

  constructor(props) {
    super(props);

    // let results = [];

    // this.state = { results };
  }

  componentDidMount() {
    this.fetchStores();

    filterStore.subscribe(this.fetchStores);
  }
  componentWillUnmount() {}

  fetchStores = () => {
    filterCall(filterStore.getState())
      .then((results) => {
        console.log("SUCCESS");
        spacexStore.dispatch(setSpaceX(results));
      })
      .catch((err) => {
        alert(err);
      });
  };
}

export default Result;
