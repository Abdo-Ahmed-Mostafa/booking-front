import FlightClass from "./heroReusable/FlightClass";
import NumberPassanger from "./heroReusable/NumberPassanger";
import Ways from "./Ways";

const FlightHero = ({ pathname }) => {
  return (
    <div className="flex lg:flex-row lg:gap-0 gap-5 flex-col w-full items-center lg:justify-evenly justify-center">
      <Ways />
      <div className="flex gap-3 lg:flex-row flex-col lg:w-1/2 w-full items-center">
        <NumberPassanger />
        <FlightClass />
      </div>
    </div>
  );
};

export default FlightHero;
