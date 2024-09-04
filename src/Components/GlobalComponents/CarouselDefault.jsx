import { Carousel } from "@material-tailwind/react";
import banner1 from "../../assets/banners/banner1.jpeg"
import banner2 from "../../assets/banners/bannersingle1.jpeg"
import banner3 from "../../assets/banners/crazytrip.jpeg"
import banner4 from "../../assets/banners/ideas.jpeg"
import banner5 from "../../assets/banners/rawhoney.jpeg"

 
export default function CarouselDefault() {
  return (
    <Carousel autoplay="true" autoplayDelay="4000" loop="true" className="pb-12 lg:-mt-28 mt-0">
      <img
        src={banner1}
        alt="image 1"
        className="w-full object-fit h-max"
      />
      <img
        src={banner2}
        alt="image 2"
        className="w-full object-fit h-max"
      />
      <img
        src={banner3}
        alt="image 2"
        className="w-full object-fit h-max"
      />
      <img
        src={banner4}
        alt="image 2"
        className="w-full object-fit h-max"
      />
      <img
        src={banner5}
        alt="image 2"
        className="w-full object-fit h-max"
      />
    </Carousel>
  );
}