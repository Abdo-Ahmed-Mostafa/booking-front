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
  const [classes, setClasses] = useState("economy");

  return (
    <div className="relative w-full">
      <Menu open={isOpen} handler={() => setIsOpen(!isOpen)}>
        <MenuHandler>
          <Button
            className="bg-black bg-opacity-20 pr-3 pl-6 py-2 w-full border-none "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex gap-5 items-center justify-center">
              {classes}
              {isOpen ? <IoChevronUp /> : <IoChevronDown />}
            </div>
          </Button>
        </MenuHandler>
        <MenuList className="bg-white rounded-lg shadow-lg flex flex-col gap-1 px-4 ">
          {["Economy", "Business", "First Class"].map((singleClass, index) => (
            <div
              key={index}
              onClick={() => setClasses(singleClass)}
              className="flex items-center gap-1.5 group cursor-pointer"
            >
              <span className="bg-transparent group-hover:bg-blue-600 p-1.5 rounded-full"></span>
              <span className="text-base group-hover:text-mainBlue">
                {singleClass}
              </span>
            </div>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default NumberPassanger;
