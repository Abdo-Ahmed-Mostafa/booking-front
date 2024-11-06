"use client";
import { Button, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import PassengerSelector from "./PassengerSelector";
import SelectComponent from "@/components/SelectComponent";
const DetailsFlightHero = () => {
  const [active, setActive] = useState("One Way");
  const getTabStyle = (path) => {
    return active === path
      ? "bg-[#0c2742] py-2 px-7 text-sm font-bold rounded-full"
      : "bg-mainBlue py-2 px-7 text-sm font-bold rounded-full";
  };
  return (
    <div className="my-4 flex gap-10 flex-col xl:flex-row items-center mx-10 ">
      <div className="flex gap-4 flex-col sm:flex-row   w-full">
        <Button
          onClick={() => setActive("One Way")}
          className={`${getTabStyle("One Way")}`}
        >
          One Way
        </Button>
        <Button
          onClick={() => setActive("Round Trip")}
          className={`${getTabStyle("Round Trip")}  `}
        >
          Round Trip
        </Button>
        <Button
          onClick={() => setActive("Multi-City")}
          className={`${getTabStyle("Multi-City")}  `}
        >
          Multi-City
        </Button>
      </div>
      <div className="flex justify-center w-full gap-9 items-center flex-col md:flex-row">
        <PassengerSelector />

        <SelectComponent
          data={[
            { value: "economy", label: "Economy" },
            { value: "business", label: "Business" },
            { value: "first_class", label: "First Class" },
          ]}
        />
      </div>
    </div>
  );
};

export default DetailsFlightHero;
