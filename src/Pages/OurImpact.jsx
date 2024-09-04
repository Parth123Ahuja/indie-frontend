import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import gharat1 from "../assets/gharat1.png";
import gharat2 from "../assets/gharat2.png";
import gharat3 from "../assets/gharat3.png";
import gharat4 from "../assets/gharat4.png";
import farmerProg1 from "../assets/farmerProg1.png";
import farmerProg2 from "../assets/farmerProg2.png";
import farmerProg3 from "../assets/farmerProg3.png";
import artisans1 from "../assets/artisans1.png";
import artisans2 from "../assets/artisans2.png";
import artisans3 from "../assets/artisans3.png";

export default function OurImpactPage() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-8 pb-2 text-center">Our Impact</h1>
      <div className="border-t-2 border-[#712c2c] w-36 mx-auto mb-8"></div>

      <div className="text-customBrown pb-4 md:pb-24 ">
        <div className="flex flex-col md:flex-row justify-center pt-8 md:pt-12 items-center">
          <div className="md:w-1/2 p-4 md:p-2 space-y-2 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Gharat (Pun-Chakki or watermill)</h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold ">A Story of traditional sustainable technology</h3>
            <p className="w-full text-lg text-justify md:text-xl md:w-full ">
              Gharat (Pun-Chakki or watermill) was a traditional indigenously designed instrument used for grinding spices and pulses by the native communities of the Himalayan region for hundreds of years. This method not only preserved the natural essential flavour and oils within the food but also ensured environmental sustainability since water was used as the main source of energy.
            </p>
          </div>
          <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={gharat1} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
        </div>

        <div className="md:pl-16 flex flex-col lg:px-32 md:flex-row justify-center items-center">
        <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={gharat2} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
          <p className="w-full text-lg text-justify md:text-xl md:w-1/2 p-4 md:p-8">
            Traditional watermills were made by village communities from locally available materials like wood or Iron and consisted a turbine that rotated with the flow of water force coming from glaciers, perennial streams and rivulets. A shaft connecting the turbine to a rotating stone moved against a stationery stone grinding the food material.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="w-full text-lg text-justify md:text-xl md:w-1/2 p-4 md:p-8">
            Traditional watermills were made by village communities from locally available materials like wood or Iron and consisted a turbine that rotated with the flow of water force coming from glaciers, perennial streams and rivulets. A shaft connecting the turbine to a rotating stone moved against a stationery stone grinding the food material.
          </p>
          <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={gharat3} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-16 justify-center p-4 md:p-8 items-center bg-customYellow">
            <div className="space-y-4 ">
                <img src={farmerProg1} className="rounded-lg h-64 object-cover md:h-80 w-full md:w-96" alt="Farmer Training" />
                <img src={farmerProg2} className="rounded-lg h-64 object-cover md:h-80 w-full md:w-96" alt="Farmer Training" />
                <img src={farmerProg3} className="rounded-lg h-64 object-cover md:h-80 w-full md:w-96" alt="Farmer Training" />
            </div>
        <div className="w-full md:w-[550px] py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Farmer Training Program (Uttarakhand)</h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold pt-4">Story of traditional cultivation methods</h3>
          <p className="pt-4 md:pt-8 text-lg md:text-xl ">
            In earlier times, agriculture was done using traditional methods with natural and organic fertilisers which helped in maintaining the quality of soil and prevented degradation of land. We have been working with farmers to revive the indigenous methods and training them in skills which would help them to grow organic products and also enable them to earn a better livelihood.
          </p>
          <p className="pt-4 md:pt-8 text-lg md:text-xl ">
            With modernisation, we switched our agriculture towards chemical based hazardous fertilizers and pesticides which not only hampered the quality of the food we eat leading to many chronic ailments but also degraded the soil and the extinction of thousands of native species each year. In this regard, we are working with the farmers’ community in the Kumaon region of Uttarakhand to bring awareness and training with respect to organic methods of cultivation.
          </p>
          <p className="pt-4 md:pt-8 text-lg md:text-xl ">
            With scarcity of water in this region, it has become very difficult for farmers to yield the best cultivation especially in summer and has affected their livelihood mostly due to erosion of top soil due to lack of organic matter. Organic matter can hold up to 90% of its weight in water and releases it slowly over time to keep the humus intact. Therefore, we are working towards increasing the organic matter in the soil to hold more nutrients and regulate water flow.
          </p>
        </div>
      </div>

      <div className="text-customBrown pb-4 md:pb-24  ">
        <div className="flex flex-col md:flex-row justify-center pt-8 pb-6 md:pb-16 items-center">
          <div className="md:w-1/2 p-4 space-y-4  md:w-1/2 p-4 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Working with Local Artisans</h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">A Story of our wooden box</h3>
            <p className="w-full text-lg md:text-xl ">
              To promote the work of local artisans and create awareness about environmental sustainability, we trained some of the local artisans (carpenters) in creating packaging boxes using waste wood and other waste products. This not only helped them to gain an additional skill to increase their livelihood, it also ensured reduction in the amount of waste finding its way to dumping sites.
            </p>
          </div>
          <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={artisans1} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={artisans2} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
          <p className="w-full text-lg md:text-xl md:w-1/2 p-4 md:p-8">
            We believe that if we keep things to let them be rare all the time, it will surely get extinct someday. So, our vision is to create a sustainable lifestyle where we do not have to depend on the artificial chemical based recycled but get access to the ways our ancestors lived in harmony with nature.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="w-full text-lg md:text-xl md:w-1/2 p-4 md:p-8">
            As part of this project, the artisans created some hand-made wooden boxes for our packaging from waste wood of pinewood which we sourced from the scrap dealers in bulk and after rigorous effort and commitment, we could successfully carve out the best for our customers and also gather some monetary support for the local artisans. We also working towards better utilization of dried Pine leaves, which are mostly responsible for forest fires in Uttarakhand.
          </p>
          <div className="p-4 h-1/2 sm:px-12 md:p-0  w-full md:w-96"><img src={artisans3} className="rounded-lg shadow-lg shadow-gray-500" alt="Gharat" /></div>
        </div>
      </div>
    </>
  );
}
