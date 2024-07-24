import React from "react";
import Carousel from "./Carousel";
import ViewAllBtn from "./ViewAllBtn";

const PhotoCarousel = () => {
   return (
      <div className="relative mb-14">
         <Carousel />
         <div className="contains relative bottom-44">
            <p className="font-semibold text-white">Live Topic</p>
            <h2 className="font-bold text-2xl text-white">St Pete's most beautiful beach in Florida</h2>
            <div className="mt-10">
               <ViewAllBtn />
            </div>
         </div>
      </div>
   );
};

export default PhotoCarousel;