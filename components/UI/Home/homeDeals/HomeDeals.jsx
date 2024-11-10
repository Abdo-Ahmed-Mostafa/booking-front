import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Link,
} from "@/components/imports";

const HomeDeals = () => {
  const data = [
    {
      label: "Flash Deals",
      value: "Flash Deals",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Offers",
      value: "Offers",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Discounts",
      value: "Discounts",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="Flash Deals" className="">
      <TabsHeader
        className="bg-transparent flex justify-between items-center"
        indicatorProps={{
          className: "bg-mainBlue shadow-none rounded-full py-1.5 ",
        }}>
        <div className="w-fit flex">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="lg:w-28 bg-bgGrey text-mainBlue font-medium rounded-full py-1.5 mx-3">
              {label}
            </Tab>
          ))}
        </div>
        <Link href={""} className="">
          View all
        </Link>
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default HomeDeals;
