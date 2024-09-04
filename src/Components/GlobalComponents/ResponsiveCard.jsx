import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function BackgroundBlogCard({ title, subtitle, image, href, avatar }) {
  const handleClick = () => {
    window.location.href = href; // Navigate to the link
  };

  return (
    <Card
      shadow={false}
      className="relative grid items-end h-72 justify-center overflow-hidden text-center cursor-pointer "
      onClick={handleClick}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
        <Typography variant="h6" className="mb-4 text-gray-400">
          {subtitle}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default BackgroundBlogCard;
