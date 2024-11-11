"use client";
import React from "react";
import {
  useState,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  IoAdd,
  AiOutlineMinus,
  IoMan,
  FaChildReaching,
  FaBaby,
  IoClose,
  IoChevronDown,
  IoChevronUp,
} from "@/components/imports";

const NumberPassanger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const handleIncrement = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => {
    if (passengers[type] > 0) {
      setPassengers((prev) => ({ ...prev, [type]: prev[type] - 1 }));
    }
  };

  const totalPassengers = `${passengers.adults} Adults, ${passengers.children} Children, ${passengers.infants} Infants`;

  return (
    <div className="relative">
      <Menu open={isOpen} handler={() => setIsOpen(!isOpen)}>
        <MenuHandler>
          <Button
            className="bg-black bg-opacity-20 pr-3 pl-6 py-2 borderborder-white w-full"
            onClick={() => setIsOpen(!isOpen)}>
            <div className="flex gap-5">
              {totalPassengers}
              {isOpen ? <IoChevronUp /> : <IoChevronDown />}
            </div>
          </Button>
        </MenuHandler>
        <MenuList className="p-4 w-80 bg-white rounded-lg shadow-lg space-y-4 z-10">
          <div className="flex justify-between items-center">
            <span className="font-semibold">No. of Passengers</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500">
              <IoClose className="h-5 w-5" />
            </button>
          </div>
          {[
            { label: "Adults", age: "(age 12 and over)", type: "adults" },
            { label: "Children", age: "(age 2 - 11)", type: "children" },
            { label: "Infants", age: "(below age 2)", type: "infants" },
          ].map((category) => (
            <div
              key={category.type}
              className="flex items-center justify-between">
              <div className="flex gap-1">
                {category.label == "Adults" && (
                  <IoMan className="text-blue-500 h-7 w-7" />
                )}
                {category.label == "Children" && (
                  <FaChildReaching className="text-blue-500 h-6 w-6" />
                )}
                {category.label == "Infants" && (
                  <FaBaby className="text-blue-500 h-6 w-6" />
                )}
                <div>
                  <span className="font-semibold text-mainBlue">
                    {category.label}
                  </span>
                  <div className="text-gray-500 text-sm">{category.age}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDecrement(category.type);
                  }}
                  className="bg-blue-100 text-blue-600 rounded-full p-1">
                  <AiOutlineMinus className="h-4 w-4" />
                </button>
                <span>{passengers[category.type]}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIncrement(category.type);
                  }}
                  className="bg-mainBlue text-white rounded-full p-1">
                  <IoAdd className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default NumberPassanger;
