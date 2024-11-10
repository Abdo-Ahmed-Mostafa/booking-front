import React from "react";

const WaysButton = ({ id, label }) => {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name="hosting"
        value={id}
        className="hidden peer"
        required
      />
      <label
        htmlFor={id}
        className="items-center w-full px-6 py-2 text-white bg-black bg-opacity-20 border-none rounded-full cursor-pointer peer-checked:bg-mainBlue peer-checked:text-white">
        {label}
      </label>
    </li>
  );
};

export default WaysButton;
