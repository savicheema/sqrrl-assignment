import React from "react";
import "./result-card.css";

const ResultCard = ({ details }) => {
  let { cores } = details.rocket.first_stage;

  const landingSuccessReduced = landingReduce(cores);
  const landingSuccessText =
    landingSuccessReduced === null ? "N/A" : landingSuccessReduced;

  return (
    <article className="result-card">
      <figure>
        <img
          src={details.links.mission_patch_small}
          alt="mission patch small"
        />
      </figure>
      <details open>
        <summary>
          {details.mission_name} {`#${details.flight_number}`}
        </summary>
        <ul>
          <li>{`Mission Ids: ${details.mission_id.join(",")}`}</li>
          <li>{`Launch Year: ${details.launch_year}`}</li>
          <li>{`Successful Launch: ${details.launch_success}`}</li>
          <li>{`Successful Landing: ${landingSuccessText}`}</li>
        </ul>
      </details>
    </article>
  );
};

const landingReduce = (cores) => {
  let reducedValue = cores.reduce((reduced, currentValue) => {
    // console.log("REDUCE", reduced, currentValue.land_success);
    if (currentValue.land_success === null) return null;
    if (reduced === null) {
      return currentValue.land_success;
    }
    return reduced && currentValue.land_success;
  }, null);

  return reducedValue;
};

export default ResultCard;
