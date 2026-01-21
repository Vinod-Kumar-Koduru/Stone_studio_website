import React, { useState } from "react";
import mockData from "../mockdata";
import ElevationCard from "./ElevationCard.jsx";
const ElevationsList = () => {
  const IntialElevation = mockData.Elevations;
  //console.log(IntialElevation);
  return (
    <div className="lg:ml-8 lg:mr-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl mb-5">
        Elevation Stones
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 grid-center">
        {IntialElevation.map((each) => (
          <ElevationCard EachCard={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
};
export default ElevationsList;
