import { Button, Link } from "@/components/imports";

const SocialMediaButton = ({ url, title, icon }) => {
  return (
    <Link target="_blank" href={url}>
      <Button
        variant="outlined"
        size="sm"
        className={` flex gap-1.5 p-0 items-center text-white border-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none`}>
        {icon}
        {title}
      </Button>
    </Link>
  );
};

export default SocialMediaButton;
