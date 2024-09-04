import logo from "../assets/HorizontalLogo.png";
import MissionVision from "../assets/MissionVision.png";
import OurStori from "../assets/OurStori.png";
import { ourStoriInfo, team, partners } from "../constants";
import TeamCard from"../Components/GlobalComponents/TeamCard";

export default function OurStoryPage() {
  return (
    <>
      {/* DESCRIPTION */}
      <div className="bg-[#f8f5ee] text-[#712c2c] p-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-8 pb-2 text-center">Our Stori</h1>
            <div className="border-t-2 border-[#712c2c] w-24 mx-auto mb-8"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center  mb-8 lg:space-x-8">
            <img src={OurStori} alt="Indie Stori Logo" className="w-48 h-48 md:w-1/3 md:h-full object-contain mx-auto lg:mx-0" />
            <div className="space-y-6  text-justify text-lg md:text-xl font-medium mt-8 lg:mt-0 lg:columns-2">
              <p>
                Imagine a situation where you nurture a mango tree for years but when it starts bearing fruits someone else plucks it all away leaving nothing for you or your family. Instead, you are handed over the leftovers. How would that make you feel? This was our experience and here began the journey of Indie Stori.
              </p>
              <p>
                Travelling and interacting with farmers and artisans, we discovered the age-old indigenous ways of living that existed for years in the Indian subcontinent – a sustainable lifestyle in harmony with nature, from food to clothes to things used in our daily lives. Shifts from these practices degraded our health and wellbeing and also led to an adverse effect on the environment.
              </p>
              <p>
                We at Indie Stori, promote products produced by nature and nurtured by hands through traditional indigenous methods practiced for centuries. We intend to create a lifestyle free from artificial chemicals with a mission to add value and happiness to the lives we touch. Our commitment towards providing 100% authentic products is above our profits. Our sustainable packaging comes with a utility value allowing the consumer to recycle or reuse it.
              </p>
              <p>
                We also aim to increase the production of these products to prevent its extinction, helping us to give back to Mother Nature and ensuring accessibility of our glorious past to all.
              </p>
              <p>
                Our vision is to create an ecosystem of sustainable villages to achieve a future for all in harmony with nature so that we get to eat those mangoes from our own trees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-8 pb-2 text-center">Our Vision and Mission</h2>
        <div className="flex py-6 flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <img src={MissionVision} className="h-32 md:h-40 lg:h-48 mt-8 lg:mt-0" alt="Indie Stori Logo" />
          <p className="lg:p-4 text-lg lg:text-xl font-medium max-w-2xl text-center lg:text-left">
            <strong>Our Vision:</strong><br />
            Our vision is to create an ecosystem of sustainable villages to achieve a future for all in harmony with nature.
            <br /><br />
            <strong>Our Mission:</strong><br />
            Our mission is to help produce, promote, preserve and protect the native indigenous produce of the Indian subcontinent region.
          </p>
        </div>
      </div>

      {/* WHY INDIE STORI */}
      <div className="bg-customYellow p-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  pt-8 pb-2 text-center">Why Indie Stori?</h2>
        <div className=" mx-auto text-center flex flex-wrap justify-around md:p-1">
          {ourStoriInfo.map((info, index) => (
            <div key={index} className="text-center my-4 w-full md:w-1/2 lg:w-1/4">
              <img src={info.img} className="h-32 w-32 rounded-full mx-auto" alt={info.title} />
              <h2 className="mt-6 text-xl font-bold lg:text-3xl">{info.title}</h2>
              <p className="mt-2 md:w-52  text-center mx-auto text-base sm:text-lg">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="bg-[#f8f5ee] py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  pt-8 pb-2 text-center">Our Team</h2>
        <div className="flex flex-wrap justify-center space-y-4 text-center font-medium">
          {team.map((member, index) => (
            <TeamCard 
              key={index}
              img={member.img}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div className="py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  pt-8 pb-2 text-center">Our Partners</h2>
        <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 lg:space-x-4 text-center font-medium">
          {partners.map((partner, index) => (
            <div key={index} className="py-8 shadow-md px-4 w-full sm:w-1/2 lg:w-1/4">
              <img src={partner.img} className="bg-customYellow h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 mx-auto" alt={partner.title} />
              <h2 className="mt-6 text-xl lg:text-2xl">{partner.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
