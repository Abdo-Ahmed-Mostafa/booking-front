import React from "react";
import HeroTabs from "./hero/HeroTabs";

const MainHero = () => {
  return (
    <>
      <div
        className="w-full h-auto bg-cover rounded-b-3xl"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}>
        <div className="bg-[#213d91] w-full h-full bg-opacity-50 object-fill flex flex-col justify-center rounded-b-3xl   ">
          <div className="container sm:px-10 my-3  ">
            <div className="md:h-36"></div>
            <HeroTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
