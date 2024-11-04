import { Link, Image } from "@/components/imports";
import logo from "@/public/logo.png";

const MainLogo = ({ hidden }) => {
  return (
    <Link href="/">
      <Image src={logo} width={140} height={40} alt="Passagio main logo" />
    </Link>
  );
};

export default MainLogo;
