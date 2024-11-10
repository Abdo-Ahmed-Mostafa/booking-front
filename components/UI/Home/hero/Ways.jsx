import React from "react";
import WaysButton from "./heroReusable/WaysButton";

const Ways = () => {
  return (
    <ul className="flex justify-evenly">
      <WaysButton id={"one-way"} label={"One Way"} />
      <WaysButton id={"round-trip"} label={"Round Trip"} />
      <WaysButton id={"multi-city"} label={"Multi-City"} />
    </ul>
  );
};

export default Ways;
