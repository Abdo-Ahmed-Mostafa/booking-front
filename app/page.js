import HomeDeals from "@/components/UI/homeDeals/HomeDeals";
import { Button } from "../components/imports";
import Flight from "./flight/page";

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div className="mb-auto">
      <Flight />
      <HomeDeals />
    </div>
  );
}
