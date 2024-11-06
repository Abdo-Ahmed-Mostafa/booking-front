import { Link, Image } from "@/components/imports";
import logo from "@/public/logo.png";

const MainLogo = ({ width, height }) => {
  return (
    <Link href="/">
      <Image src={logo} width={width} height={height} alt="Passagio main logo" />
    </Link>
  );
};

export default MainLogo;
