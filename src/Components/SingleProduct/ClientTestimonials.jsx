import { Carousel } from "@material-tailwind/react";
import SingleReviewCard from "./SingleReviewCard";
import vijayImage from "../../assets/vijay.jpg";
import smitaImage from "../../assets/smita.jpeg";

export default function UserTestimonials({ className }) {
  return (
    <div className={`${className} p-4 mb-1`}>
      <section className="text-gray-400 bg-white body-font lg:mx-24 sm:mx-4">
        <div className="container px-5 py-8 mx-auto">
          <h1 className="text-3xl tracking-widest font-mono space-x-1 title-font text-pink-400 mb-4 text-center">
            -Testimonials-
          </h1>
          <Carousel
            nextArrow={false}
            prevArrow={false}
            loop="true"
            autoplay="true"
            autoplayDelay={4000}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            className="w-full flex items-center py-8 mx-auto"
          >
            <SingleReviewCard
              imageUrl={vijayImage}
              username={"Vijay Shekhar Sharma"}
              usertext={
                "Must replace your chaat masala with this! We loved every bit of it. Healthy and tasty."
              }
              userposition={"Co-founder and CEO - PayTM"}
              className="w-5/6 lg:w-3/4 p-4 mx-auto flex flex-col justify-between"
            />
            <SingleReviewCard
              imageUrl={smitaImage}
              username={"Smita Pathak"}
              usertext={
                "I have been using the turmeric and it has worked wonders in keeping my health and energy levels intact."
              }
              userposition={"AVP - Deutsche Bank"}
              className="w-5/6 lg:w-3/4 p-4 mx-auto flex flex-col justify-between"
            />
            <SingleReviewCard
              imageUrl={null}
              username={"Amit Mandana"}
              usertext={
                "I recently purchased the Himalayan Forest Honey from Indiestori, and I’m absolutely thrilled with the quality and packaging."
              }
              userposition={""}
              className="w-5/6 lg:w-3/4 p-4 mx-auto flex flex-col justify-between"
            />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
