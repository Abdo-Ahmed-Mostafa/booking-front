import { Button, Link } from "@/components/imports";

const NavSignIn = ({ title, hidden }) => {
  return (
    <Link href={"/login"}>
      <Button
        variant="outlined"
        size="sm"
        className={`${hidden} lg:inline-block capitalize text-white border-white focus:ring-0 focus-visible:ring-0 focus-visible:outline-none`}
      >
        {title}
      </Button>
    </Link>
  );
};

export default NavSignIn;
