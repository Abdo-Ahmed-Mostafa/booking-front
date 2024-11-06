import React, { useState, useEffect } from "react";
import Select from "react-select";

const SelectComponent = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Select
        className=" w-[100%]"
        classNamePrefix="select"
        defaultValue={data[0]}
        isLoading={false}
        name="color"
        options={data}
      />
    </>
  );
};

export default SelectComponent;
