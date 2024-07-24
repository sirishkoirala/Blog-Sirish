import React from "react";
import Carousel from "./Carousel";

const BlackScreen = () => {
   return (
      <div className="bg-black -top-32 relative py-10 ">
         <div className="grid contains grid-cols-12">
            {/* <img src="./img/ice.jpg" alt="" className="h-[560px] col-span-7 object-cover" /> */}
            <div className="h-[560px] col-span-7 object-cover">
               <Carousel/>
            </div>
            <div className=" col-span-5 ">
               <div className="px-4 space-y-2">
                  <div className="flex space-x-4 bg-card px-4 pb-3 rounded-lg shadow-md">
                     <img
                        undefinedhidden="true"
                        alt="City view"
                        src="./img/ice.jpg"
                        className="w-24 h-24 object-cover rounded-lg"
                     />
                     <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">How to maximize investment with mutual funds</h2>
                        <p className="text-white">Indonesia, 22 August 2022 - 15 minutes ago</p>
                     </div>
                  </div>

                  <div className="flex space-x-4 bg-card px-4 pb-3 rounded-lg shadow-md">
                     <img
                        undefinedhidden="true"
                        alt="City view"
                        src="./img/ice.jpg"
                        className="w-24 h-24 object-cover rounded-lg"
                     />
                     <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">How to maximize investment with mutual funds</h2>
                        <p className="text-white">Indonesia, 22 August 2022 - 15 minutes ago</p>
                     </div>
                  </div>

                  <div className="flex space-x-4 bg-card px-4 pb-3 rounded-lg shadow-md">
                     <img
                        undefinedhidden="true"
                        alt="City view"
                        src="./img/ice.jpg"
                        className="w-24 h-24 object-cover rounded-lg"
                     />
                     <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">How to maximize investment with mutual funds</h2>
                        <p className="text-white">Indonesia, 22 August 2022 - 15 minutes ago</p>
                     </div>
                  </div>

                  <div className="flex space-x-4 bg-card px-4 pb-3 rounded-lg shadow-md">
                     <img
                        undefinedhidden="true"
                        alt="City view"
                        src="./img/ice.jpg"
                        className="w-24 h-24 object-cover rounded-lg"
                     />
                     <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">How to maximize investment with mutual funds</h2>
                        <p className="text-white">Indonesia, 22 August 2022 - 15 minutes ago</p>
                     </div>
                  </div>

                  <div className="flex space-x-4 bg-card px-4  rounded-lg shadow-md">
                     <img
                        undefinedhidden="true"
                        alt="City view"
                        src="./img/ice.jpg"
                        className="w-24 h-24 object-cover rounded-lg"
                     />
                     <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold text-white">How to maximize investment with mutual funds</h2>
                        <p className="text-white">Indonesia, 22 August 2022 - 15 minutes ago</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlackScreen;
