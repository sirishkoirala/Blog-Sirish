import { IconCircleFilled } from "@tabler/icons-react";
import React from "react";
import ReadMoreBtn from "./ReadMoreBtn";

const HomePage = () => {
   return (
      <div className="my-4">
         <div className="contains  mt-3 mb-4 ">
            <div className="flex flex-col md:flex-row">
               <div className="md:w-1/2">
                  <img
                     src="img/ice.jpg"
                     alt="Football player in action"
                     className="w-full h-[320px] object-cover rounded-lg"
                  />
               </div>
               <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                  <div className=" flex">
                     <IconCircleFilled size={20} className="mr-2" />
                     <span className="text-muted-foreground">Hot Topic</span>
                  </div>
                  <h2 className="text-2xl font-bold mt-2">
                     Miami Dolphins won the match and officially qualified for the final
                  </h2>
                  <p className="text-muted-foreground mt-2">New York, 22 August 2022</p>
                  <div className="mt-4">
                     <ReadMoreBtn />
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
               <div className="flex items-center">
                  <img src="img/ice.jpg" alt="Scenic view" className=" w-[100px] h-[100px] object-cover " />

                  <div className="ml-4">
                     <h3 className="font-semibold">How to maximize investment with mutual funds</h3>
                     <p className="text-muted-foreground">Indonesia, 22 August 2022 - 15 minutes ago</p>
                  </div>
               </div>
               <div className="flex">
                  <img src="img/ice.jpg" alt="Scenic view" className=" w-[100px] h-[100px] object-cover " />
                  <div className="ml-4">
                     <h3 className="font-semibold">John Kennedy won 3rd oscar trophy at Los Angeles</h3>
                     <p className="text-muted-foreground">Los Angeles, 22 August 2022 - 22 minutes ago</p>
                  </div>
               </div>
               <div className="flex">
                  <img src="img/ice.jpg" alt="Scenic view" className=" w-[100px] h-[100px] object-cover " />
                  <div className="ml-4">
                     <h3 className="font-semibold">
                        Miami Dolphins won the match and officially qualified for the final
                     </h3>
                     <p className="text-muted-foreground">New York, 22 August 2022 - 10 minutes ago</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
