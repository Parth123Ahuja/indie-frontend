const ProductSection = ({ bgColor, buttonColor, title,textColor,description }) => {
  return(
  <div className={`flex flex-col border-4 border-pink-400  items-center justify-between bg-${bgColor} p-6 text-${textColor} sm:p-8 w-full rounded-md group transition-all duration-700 ease-in-out hover:shadow-2xl`}>
    <div>
      <h2 className="text-xl py-2 font-medium md:text-2xl">{title}</h2>
      <p className="md:text-lg">{description}</p>
    </div>
    <div className="w-full">
      {textColor === "white"?
      <button className={`px-4 py-1 mt-4 text-pink-500 text-md sm:mt-6 sm:px-6 sm:text-lg rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}>
      Shop Now
      <i className="fa-solid fa-arrow-right absolute  text-pink-500  right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
      </button>:
      <button className={`px-4 py-1 mt-4 text-white text-md sm:mt-6 sm:px-6 sm:text-lg rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}>
      Shop Now
      <i className="fa-solid fa-arrow-right absolute text-white right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
      </button>  
    }
    </div>
      
  </div>
  );
};
export default ProductSection;

