import { MenuItem, MenuList } from "@/components/imports";

const NavListItems = ({ items }) => {
  return (
    <MenuList>
      {items.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </MenuList>
  );
};

export default NavListItems;
