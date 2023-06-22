import Image from "next/image";
import bgImage from '../../public/banner.jpg'

const Banner = () => {
    return (
      <div className="relative">
        <Image
          className="w-full h-auto"
          src={bgImage}
          priority={true}
          alt="Almond Blossoms Painting"
        />
       {/**
        *  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-center">
            Welcome to Our Shop
          </h1>
        </div>
        */}
      </div>
    );
  };
  
  export default Banner;
  