import NumberPassanger from "./heroReusable/NumberPassanger";
import Ways from "./Ways";

const FlightHero = ({ pathname }) => {
  return (
    <div className="grid grid-cols-2 w-full items-center">
      <Ways />
      <NumberPassanger />
    </div>
  );
};

export default FlightHero;
