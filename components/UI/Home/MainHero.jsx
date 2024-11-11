import React from "react";
import HeroTabs from "./hero/HeroTabs";

const MainHero = () => {
  return (
    <>
      <div className="w-full h-auto bg-hero bg-cover rounded-b-3xl">
        <div className="bg-[#213d91] w-full h-full bg-opacity-50 object-fill flex flex-col justify-center rounded-b-3xl pt-28 ">
          <div className="container sm:px-10">
            <HeroTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
