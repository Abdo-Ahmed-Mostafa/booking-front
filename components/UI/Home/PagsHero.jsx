import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa6";
import { BsFillHandbagFill } from "react-icons/bs";

const PagesHero = ({ pathname }) => {
  const getTabStyle = (path) => {
    return pathname === path
      ? "bg-white text-blue-800 text-xl font-bold flex rounded-full px-4 py-1"
      : "text-white text-xl font-bold flex rounded-full px-4 py-1";
  };

  return (
    <div className=" ">
      <div>
        <div className="flex flex-col md:flex-row  sm:w-96 md:w-full gap-5 border-b-4 border-white pb-3">
          {/* Hotel Tab */}
          <Link href="/hotel">
            <span
              className={`${getTabStyle(
                "hotel"
              )} transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 flex gap-2`}
            >
              <FaHotel className="text-2xl" />
              Hotel
            </span>
          </Link>

          {/* Flight Tab */}
          <Link href="/flight">
            <span
              className={`${getTabStyle(
                "flight"
              )} transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95`}
            >
              <Image
                src={"/flight.png"}
                width={50}
                height={50}
                alt="Flight"
                loading="lazy"
                className="text-blue-800"
              />
              Flight
            </span>
          </Link>

          {/* Flight-Hotel Tab */}
          <Link href="/flight-hotel">
            <span
              className={`${getTabStyle(
                "flight-hotel"
              )} transform transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 flex gap-2`}
            >
              <BsFillHandbagFill className="text-2xl" />
              Flight-Hotel
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
