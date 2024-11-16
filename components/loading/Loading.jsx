import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const Loading = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <GiCommercialAirplane className="text-blue-500 text-[15rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fly" />
    </div>
  );
};

export default Loading;
