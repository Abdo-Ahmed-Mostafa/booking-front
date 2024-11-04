import { Menu, MenuHandler, IoChevronDown, Link } from "@/components/imports";
import NavListItems from "../../UI/navbarReusable/NavListItems";

const NavDropDown = ({ title, items }) => {
  return (
    <Menu>
      <MenuHandler>
        <Link href="" className="flex items-center gap-1">
          <span className="font-medium">{title}</span>
          <IoChevronDown />
        </Link>
      </MenuHandler>
      <NavListItems items={items} />
    </Menu>
  );
};

export default NavDropDown;
