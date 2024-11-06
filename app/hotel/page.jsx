import React from "react";
import HotelPage from "./HotelPage";
import PagesHero from "@/components/UI/Home/PagsHero";

const Hotel = () => {
  return (
    <div>
      <div>
        <div
          className="w-full h-96 bg-cover rounded-b-3xl"
          style={{
            backgroundImage: `url('/hero.png')`,
          }}
        >
          <div className="bg-[#213d91] w-full h-full bg-opacity-50 object-fill flex flex-col justify-center rounded-b-3xl   ">
            <div className="container mx-7 ">
              <PagesHero pathname="hotel" />
            </div>
          </div>
        </div>
      </div>
      <HotelPage />
    </div>
  );
};

export default Hotel;