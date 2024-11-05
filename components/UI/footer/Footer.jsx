import { Link, Typography } from "@/components/imports";
import SocialMediaButton from "../navbarReusable/SocialMediaButton";
import MainLogo from "../navbarReusable/MainLogo";

const LINKS = [
  {
    title: "PASSAGIO",
    items: [
      <Typography
        key="about-passagio" // Add a unique key
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500">
        About PASSAGIO
      </Typography>,
    ],
  },
  {
    title: "Legal",
    items: [
      <Typography
        key="terms" // Unique key
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500">
        Terms & Conditions
      </Typography>,
      <Typography
        key="privacy" // Unique key
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500">
        Privacy Policy
      </Typography>,
    ],
  },
  {
    title: "Support",
    items: [
      <Typography
        key="contact-us" // Unique key
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500">
        Contact Us
      </Typography>,
    ],
  },
  {
    title: "Social Media",
    items: [
      <SocialMediaButton
        key="instagram" // Unique key
        url="https://wa.me/+201117842693"
        title="Instagram"
        icon={<svg /* Instagram icon */>{/* SVG Path */}</svg>}
      />,
      <SocialMediaButton
        key="facebook" // Unique key
        url="https://wa.me/+201117842693"
        title="Facebook"
        icon={<svg /* Facebook icon */>{/* SVG Path */}</svg>}
      />,
      <SocialMediaButton
        key="twitter" // Unique key
        url="https://wa.me/+201117842693"
        title="Twitter"
        icon={<svg /* Twitter icon */>{/* SVG Path */}</svg>}
      />,
      <SocialMediaButton
        key="youtube" // Unique key
        url="https://wa.me/+201117842693"
        title="Youtube"
        icon={<svg /* Youtube icon */>{/* SVG Path */}</svg>}
      />,
      <SocialMediaButton
        key="tiktok" // Unique key
        url="https://wa.me/+201117842693"
        title="TikTok"
        icon={<svg /* TikTok icon */>{/* SVG Path */}</svg>}
      />,
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-mainBlue">
      <div className="mx-auto w-full ">
        <div className="lg:grid grid-cols-1 gap-4 md:grid-cols-3 items-center flex flex-col justify-center place-items-center">
          <MainLogo width={200} height={60} />
          <div className="lg:grid lg:col-span-2 lg:grid-cols-4 lg:justify-between lg:items-start items-center flex flex-col gap-10 pt-5">
            {LINKS.map(({ title, items }, index) => (
              <div key={index}>
                {" "}
                {/* Changed <ul> to <div> */}
                <Typography
                  variant="paragraph"
                  color="white"
                  className="mb-3 font-medium lg:text-start text-center">
                  {title}
                </Typography>
                <ul>
                  {" "}
                  {/* Moved <ul> to wrap only the <li> elements */}
                  {items.map((link, i) => (
                    <li
                      className="lg:text-start text-center pb-1.5"
                      key={`${index}-${i}`}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full items-center justify-center border-t border-blue-gray-50 py-4 ">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0">
            All Copy Rights Reserved to PASSAGIO Travel Agent
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
