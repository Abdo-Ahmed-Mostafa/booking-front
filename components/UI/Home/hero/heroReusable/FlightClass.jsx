"use client";
import React from "react";
import { Select, Option, useState } from "@/components/imports";

const FlightClass = () => {
  const [value, setValue] = useState("react");

  return (
    <div className="lg:w-fit w-full ">
      <Select
        value={value}
        onChange={(val) => setValue(val)}
        className="pr-3 pl-6 py-2 text-white"
        labelProps={{
          className: "before:mr-0 after:ml-0",
        }}>
        <Option value="html">Material Tailwind HTML</Option>
        <Option value="react">Material Tailwind React</Option>
        <Option value="vue">Material Tailwind Vue</Option>
        <Option value="angular">Material Tailwind Angular</Option>
        <Option value="svelte">Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
};

export default FlightClass;
