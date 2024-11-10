import React from "react";
import { RiHotelFill } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { LuPackageSearch } from "react-icons/lu";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/components/imports";
import FlightHero from "./FlightHero";

const HeroTabs = () => {
  const data = [
    {
      label: "Hotels",
      value: "hotels",
      icon: RiHotelFill,
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Flight",
      value: "flight",
      icon: ImAirplane,
      desc: <FlightHero />,
    },
    {
      label: "Flight & Hotel",
      value: "flight-hotel",
      icon: LuPackageSearch,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly`,
    },
  ];

  return (
    <Tabs value="flight">
      <TabsHeader
        className="bg-transparent  flex justify-between items-center lg:w-1/2"
        indicatorProps={{
          className: "bg-mainBlue shadow-none rounded-full py-1.5 ",
        }}>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="">
            <div className="flex items-center gap-2 text-white">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="text-white">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default HeroTabs;
