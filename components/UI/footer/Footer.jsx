import { Link, Typography } from "@/components/imports";
import SocialMediaButton from "../navbarReusable/SocialMediaButton";
import MainLogo from "../navbarReusable/MainLogo";

const LINKS = [
  {
    title: "PASSAGIO",
    items: [
      <Typography
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500"
      >
        About PASSAGIO
      </Typography>,
    ],
  },
  {
    title: "Legal",
    items: [
      <Typography
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500"
      >
        Terms & Conditions
      </Typography>,
      <Typography
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500"
      >
        Privacy Policy
      </Typography>,
    ],
  },
  {
    title: "Support",
    items: [
      <Typography
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500"
      >
        Contact Us
      </Typography>,
      <Typography
        as={Link}
        href="/"
        className="py-1.5 font-normal text-gray-400 transition-colors hover:text-gray-500"
      ></Typography>,
    ],
  },
  {
    title: "Social Media",
    items: [
      <SocialMediaButton
        url="https://wa.me/+201117842693"
        title="Instagram"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 32 32"
          >
            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
          </svg>
        }
      />,
      <SocialMediaButton
        url="https://wa.me/+201117842693"
        title="Facebook"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 32 32"
          >
            <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"></path>
          </svg>
        }
      />,
      <SocialMediaButton
        url="https://wa.me/+201117842693"
        title="Twitter"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 48 48"
          >
            <path d="M 12.5 6 C 8.9280619 6 6 8.9280619 6 12.5 L 6 35.5 C 6 39.071938 8.9280619 42 12.5 42 L 35.5 42 C 39.071938 42 42 39.071938 42 35.5 L 42 12.5 C 42 8.9280619 39.071938 6 35.5 6 L 12.5 6 z M 12.5 9 L 35.5 9 C 37.450062 9 39 10.549938 39 12.5 L 39 35.5 C 39 37.450062 37.450062 39 35.5 39 L 12.5 39 C 10.549938 39 9 37.450062 9 35.5 L 9 12.5 C 9 10.549938 10.549938 9 12.5 9 z M 13.828125 14 L 21.564453 25.056641 L 13.822266 34 L 15.865234 34 L 22.46875 26.351562 L 27.820312 34 L 34.257812 34 L 26.025391 22.234375 L 33.136719 14 L 31.136719 14 L 25.123047 20.943359 L 20.265625 14 L 13.828125 14 z M 16.935547 15.695312 L 19.498047 15.695312 L 31.150391 32.304688 L 28.587891 32.304688 L 16.935547 15.695312 z"></path>
          </svg>
        }
      />,
      <SocialMediaButton
        url="https://wa.me/+201117842693"
        title="Youtube"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 32 32"
          >
            <path d="M 16 6 C 12.234375 6 8.90625 6.390625 6.875 6.6875 C 5.195313 6.933594 3.839844 8.199219 3.53125 9.875 C 3.269531 11.300781 3 13.386719 3 16 C 3 18.613281 3.269531 20.699219 3.53125 22.125 C 3.839844 23.800781 5.195313 25.070313 6.875 25.3125 C 8.914063 25.609375 12.253906 26 16 26 C 19.746094 26 23.085938 25.609375 25.125 25.3125 C 26.804688 25.070313 28.160156 23.800781 28.46875 22.125 C 28.730469 20.695313 29 18.605469 29 16 C 29 13.394531 28.734375 11.304688 28.46875 9.875 C 28.160156 8.199219 26.804688 6.933594 25.125 6.6875 C 23.09375 6.390625 19.765625 6 16 6 Z M 16 8 C 19.632813 8 22.878906 8.371094 24.84375 8.65625 C 25.6875 8.78125 26.347656 9.417969 26.5 10.25 C 26.742188 11.570313 27 13.527344 27 16 C 27 18.46875 26.742188 20.429688 26.5 21.75 C 26.347656 22.582031 25.691406 23.222656 24.84375 23.34375 C 22.871094 23.628906 19.609375 24 16 24 C 12.390625 24 9.125 23.628906 7.15625 23.34375 C 6.3125 23.222656 5.652344 22.582031 5.5 21.75 C 5.257813 20.429688 5 18.476563 5 16 C 5 13.519531 5.257813 11.570313 5.5 10.25 C 5.652344 9.417969 6.308594 8.78125 7.15625 8.65625 C 9.117188 8.371094 12.367188 8 16 8 Z M 13 10.28125 L 13 21.71875 L 14.5 20.875 L 21.5 16.875 L 23 16 L 21.5 15.125 L 14.5 11.125 Z M 15 13.71875 L 18.96875 16 L 15 18.28125 Z"></path>
          </svg>
        }
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
              <ul key={index}>
                <Typography
                  variant="paragraph"
                  color="white"
                  className="mb-3 font-medium lg:text-start text-center"
                >
                  {title}
                </Typography>
                {items.map((link, i) => (
                  <li className="lg:text-start text-center pb-1.5" key={i}>
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full items-center justify-center border-t border-blue-gray-50 py-4 ">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            All Copy Rights Reserved to PASSAGIO Travel Agent
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
