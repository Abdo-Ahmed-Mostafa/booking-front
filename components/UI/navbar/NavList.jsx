import { Menu, MenuHandler, IoChevronDown, Link } from "@/components/imports";
import NavListItems from "../navbarReusable/NavListItems";
import NavDropDown from "@/components/UI/navbarReusable/NavDropDown";

function NavList() {
  const items = ["Action", "Another Action", "Another Action"];
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <NavDropDown title={"KWD"} items={items} />
      <NavDropDown title={"My bookings"} items={items} />
    </ul>
  );
}

export default NavList;
