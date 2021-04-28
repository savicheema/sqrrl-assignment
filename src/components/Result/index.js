import React from "react";
import "./result.css";

import ResultCard from "./ResultCard";
import { filterCall } from "../../apis";

class Result extends React.Component {
  render() {
    let { results } = this.state;
    console.log(" Result STATE", results);

    return (
      <div className="result">
        {results.map((result, index) => {
          return <ResultCard details={result} key={index} />;
        })}
      </div>
    );
  }

  constructor(props) {
    super(props);

    let results = [];

    this.state = { results };
  }

  componentDidMount() {
    filterCall({})
      .then((results) => {
        // alert("success");
        this.setState({ results });
      })
      .catch((err) => {
        alert(err);
      });
  }
  componentWillUnmount() {}
}

export default Result;
