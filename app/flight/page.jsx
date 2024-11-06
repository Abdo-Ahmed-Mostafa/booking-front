import React from "react";
import FlightPage from "./FlightPage";
import PagesHero from "@/components/UI/Home/PagsHero";
import HomeDeals from "@/components/UI/homeDeals/HomeDeals";
import DetailsFlightHero from "@/components/UI/Home/DetailsFlightHero";

const Flight = () => {
  return (
    <>
      <div
        className="w-full  h-auto bg-cover rounded-b-3xl"
        style={{
          backgroundImage: `url('/hero.png')`,
        }}
      >
        <div className="bg-[#213d91] w-full h-full bg-opacity-50 object-fill flex flex-col justify-center rounded-b-3xl   ">
          <div className="container sm:px-10 my-3  ">
            <div className="md:h-36"></div>
            <PagesHero pathname="flight" />
            <DetailsFlightHero />
          </div>
        </div>
      </div>

      <FlightPage />
      <HomeDeals />
    </>
  );
};

export default Flight;
