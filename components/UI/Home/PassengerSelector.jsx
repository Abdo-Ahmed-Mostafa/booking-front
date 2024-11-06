"use client";
import React, { useState } from "react";

const PassengerSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const updateCount = (type, operation) => {
    setPassengerCount((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (operation === "increment" ? 1 : -1)),
    }));
  };

  // Format Display Text
  const formatText = () => {
    return `${passengerCount.adults} Adults, ${passengerCount.children} Children, ${passengerCount.infants} Infants`;
  };

  return (
    <div className="relative w-72">
      {/* Display Button */}
      <button
        onClick={toggleDropdown}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg flex justify-between items-center"
      >
        {formatText()}
        <span className="ml-2">&#9662;</span>
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="text-gray-700 font-semibold mb-2">
            No. of Passengers
          </h3>
          {["adults", "children", "infants"].map((type, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="capitalize">{type}</span>
                <span className="text-xs text-gray-500">
                  {type === "adults"
                    ? "(age 12 and over)"
                    : type === "children"
                    ? "(age 2 - 11)"
                    : "(below age 2)"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateCount(type, "decrement")}
                  className="w-8 h-8 bg-gray-200 text-blue-600 rounded-full flex items-center justify-center"
                >
                  -
                </button>
                <span>{passengerCount[type]}</span>
                <button
                  onClick={() => updateCount(type, "increment")}
                  className="w-8 h-8 bg-gray-200 text-blue-600 rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={toggleDropdown}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
