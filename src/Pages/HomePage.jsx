import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Testimonials from "../Components/GlobalComponents/Testimonials";
import CircleHover from "../Components/GlobalComponents/CircleHover";
import CardDefault from "../Components/GlobalComponents/CardDefault";
import CountUp from "../Components/GlobalComponents/CountUp";
import ProductSection from "../Components/GlobalComponents/ProductSection";
import ResponsiveCard from "../Components/GlobalComponents/ResponsiveCard";
import ProductDefault from "../Components/GlobalComponents/ProductDefault";
import BlogCard from "../Components/GlobalComponents/BlogCard";
import CarouselDefault from "../Components/GlobalComponents/CarouselDefault";
import {
  testimonials,
  brandpartners,
  slides,
  metricsData,
  cards,
  cardsData,
  products,
  blogData,
  upcomingData,
  categories,
} from "../constants";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import amazonlogo from "../assets/amazon.png"
import HomeAboutUs from "../assets/HomeAboutUs.png"
import Shop from "./Shop";


export default function HomePage() {
  const displayedProducts = products.slice(0, 4);
  return (
    <>
      <CarouselDefault />


      {/* ABOUT US  */}

      <div className="flex flex-col md:flex-row items-center flex-wrap md:p-2 lg:space-x-0 my-8">
        <div className="p-2 w-full lg:w-1/2 lg:p-0 animate-slideInLeft">
          <img
            className="w-full rounded-xl object-cover h-full mx-auto md:max-w-sm lg:max-w-lg"
            src={HomeAboutUs}
            alt="About us"
          />
        </div>

        <div className="p-4 lg:p-10 mx-auto text-justify lg:w-1/2 py-4 animate-slideInRight">
          <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3">
            About us
          </h3>
          <h1 className="text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl">
            What is Indie Stori ?
          </h1>
          <p className="text-lg py-1 font-semibold md:text-2xl md:py-2">
            We are Indie Stori. A seed in the forest on our way to becoming a tree. 
          </p>
          <p className="text-customBrown py-2 text-md md:text-lg">
          We are passionate towards improving the lives of every soul we touch. After working with multiple artisans and understanding the story of farmers, we  plan on leveraging India and bringing back the traditional methods imparted to us by our ancestors.
          Our vision is to combine the culture and traditions from every corner of India and bring forward the best produce that's not even accessible to the people living in the same origin.

          </p>

          <div className="text-base py-2 space-y-4 md:space-x-6 lg:space-y-0 flex flex-col md:flex-row md:text-lg lg:py-4">
            <div>
              <h2 className="font-semibold">Why Indie Stori?
              </h2>
              <p>Indie Stori is more than just a brand of Organic products. Our Products are ethically sourced from the native communities living in a particular region.</p>
            </div>
            {/* <div>
              <h2 className="font-semibold">Why Organic?</h2>
              <p>We're making room for self care today with plan.</p>
            </div> */}

          </div>
          
          <Link to="/ourstori">
            <Button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Our Stori
            </Button>
        </Link>
        </div>
      </div>

      {/* CountUp 5000+ Customers */}

      <div className="p-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 border-y-4 bg-green-100 bg-opacity-50 border-green-500">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            className="flex flex-col p-2 items-center sm:space-y-2 justify-start relative lg:py-2"
          >
            <img
              src={metric.imageSrc}
              className="h-28 w-28 rounded-xl sm:h-24 sm:w-24 md:h-36 md:w-36"
              alt="Metric Icon"
            />
            <div className="text-center  w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
                <CountUp
                  end={metric.endValue}
                  start={metric.startValue}
                  timer={metric.timer}
                />
              </div>
              <p className="font-sans text-base sm:text-lg md:text-2xl font-semibold my-4">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="my-4 md:my-8">
        <div className="text-center py-4">
          {/* <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3">
            Products
          </h3> */}
          <h1 className="text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl animate-pulseOpacity">
            Go native | Go Indie
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 sm:p-6 justify-center sm:mt-4">
          {cardsData.map((card, index) => (
            <ProductSection
              key={index}
              bgColor={card.bgColor}
              textColor={card.textColor}
              buttonColor={card.buttonColor}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="flex w-max mx-auto sm:my-8 pb-8 -mt-10">
          <h3 className="text-2xl mt-16 lg:mt-2">Also available on</h3>
          <img className="h-8 w-20 mx-4 mt-16 lg:mt-2" src={amazonlogo}/>
      </div>

      <div className="w-full mx-auto bg-customYellow ">
        <iframe
          src="https://www.youtube.com/embed/geyYhCGAEC4?si=Kf5N1L84B76UAg4X"
          title="YouTube video player"
          height={540}
          frameBorder="0"
          className="w-full h-screen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Brand Partners */}

      <div className="p-4 space-y-2 sm:p-6 sm:space-y-8 -mt-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center my-12">
          -Brand Partners-
        </h2>
        images go here
      </div>

      {/* Testimonials */}

      <div className="p-4 space-y-4 sm:p-6 sm:space-y-8 my-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center my-12">
          -Client’s testimonial-
        </h2>
        <Testimonials
          autoSlide={true}
          autoSlideInterval={9000}
          testimonials={testimonials}
        />
      </div>

      {/* Shop By Category  */}

      <div className="p-4 bg-pink-100 bg-opacity-50 border-y-4 border-pink-500 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-8">
        Shop By Category
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-6 lg:justify-around">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center w-full sm:w-auto sm:text-lg">
            <CircleHover category={category} />
          </div>
        ))}
      </div>
    </div>

      {/* Best Seller */}
      {/* <div className="text-center pt-8 ">
        <h1 className=" text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl ">
          Our Best Sellers
        </h1>
      </div> */}


      {/* <Card/> */}
      <div className="py-6">
      <h2 className="text-xl text-center py-6 text-pink-400">~ Products ~</h2>
        <Shop />
      </div>

      {/* Why Choose us?  */}

      <div className=" flex flex-col md:flex-row items-center flex-wrap md:p-2 lg:space-x-0 my-8">
        <div className="p-2 w-full lg:w-1/2 lg:p-0 ">
          <img
            className="w-full rounded-xl
        object-cover h-96 mx-auto md:max-w-sm lg:p- lg:max-w-lg "
            src={img2}
            alt="About us"
          />
        </div>

        <div className="p-4 lg:p-10 mx-auto text-justify lg:w-1/2 py-4 ">
          <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3 ">
            Why Choose us?
          </h3>
          <h1 className=" text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl">
            Purpose over profits
          </h1>
          <p className="text-customBrown py-2 text-md md:text-lg">
            Bringing the finest produce from different part of India directly to your homes, our vision is to enhance the life of every farmer and artisan we meet along the way. Our products are carefully made using the highest quality of equipment and skills. We envision a future in which the whole world would one day see the beauty of India.
            {/* <br />
            <br />
            Organic Foods and Café is a family run company that runs organic
            super markets and cafés selling fresh organic and biodynamic food,
            supplers, skincare, cosmetics, baby items and household cleaning
            products. We have 5 shops in Dubai – on Sheikh Zayed Road. */}
          </p>
        </div>
      </div>

      {/* What We Are Cooking */}

      {/* <div className="bg-customYellow p-4 my-16">
        <h2 className=" text-3xl p-4 text-center md:text-3xl font-bold md:py-8 lg:text-4xl py-12">
          What We Are Cooking
        </h2>
        <h3 className="text-customBrown text-center mx-auto py-6 px-4 max-w-4xl text-md md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className="md:p-4 py-8">
          <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2" // Adjusted widths for different screen sizes
              >
                <ResponsiveCard
                  title={card.title}
                  subtitle={card.subtitle}
                  image={card.image}
                  href={card.href}
                  avatar={card.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Products  */}

      {/* <div className="overflow-hidden text-center p-2 sm:py-4 md:py-6 ">
        <h2 className="text-xl text-center pt-6">~ Products ~</h2>
        <h1 className="text-2xl sm:text-3xl font-bold pb-4">
          All of our products are organic & fresh.
        </h1>
        {/* <div className="py-4">
            <ProductDefault/>
          </div> *
      </div> */}

      {/* NEWS */}
      {/* <div className="overflow-hidden space-y-4 p-4">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-pink-500">Latest</span> News & Blog
        </h1>
        <p className="text-center w-full sm:w-1/2 lg:w-1/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex sm:flex-row flex-wrap justify-center gap-8 p-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
              link={blog.link}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}
