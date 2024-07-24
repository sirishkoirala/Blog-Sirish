import React from "react";
import "./../App.css";
import ReadMoreBtn from "./ReadMoreBtn";

const Latest = () => {
   return (
      <div className="md:grid grid-cols-2 contains justify-between gap-5 ">
         <div className="max-w-xl  col-span-1 bg-card text-card-foreground ">
            <div className="relative">
               <img src="./img/ice.jpg" alt="Destruction in Ukraine" className="w-full h-80 object-cover rounded-lg" />
               <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                  Ukraine, 24 April 2022
               </div>
               <div className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded">Hot Topic</div>
            </div>
            <div className="mt-4">
               <h2 className="text-2xl font-bold">Zelensky accuses Russia of worst crimes since WW2</h2>
               <p className="text-muted-foreground mt-2">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
               </p>
               <button className="mt-4">
                  <ReadMoreBtn />
               </button>
            </div>
         </div>
         <div className="space-y-8 col-span-1 ">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-5 md:space-x-6 ">
               <img
                  className="w-full md:h-[235px] md:w-[200px] object-cover "
                  src="./img/ice.jpg"
                  alt="Running track"
               />
               <div className="flex flex-col space-y-2 ">
                  <span className="text-muted-foreground">New York, 19 April 2022</span>
                  <h2 className="text-xl font-bold">Jhon Lorni has won 1st place in international match</h2>
                  <p className="text-muted-foreground">                
                     This is his first victory in the international olympics, so his name is quite explosive on the
                     international scene.
                  </p>
                  <button className="mt-4">
                     <ReadMoreBtn />
                  </button>
               </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-7 md:space-x-6">
               <img
                  className="w-full  md:h-[235px] md:w-[200px] object-cover "
                  src="./img/ice.jpg"
                  alt="Running track"
               />

               <div className="flex flex-col space-y-2">
                  <span className="text-muted-foreground">Amsterdam, 23 April 2022</span>
                  <h2 className="text-xl font-bold">The extinction of the Arabian turtle made the government...</h2>
                  <p className="text-muted-foreground">
                     The jalabiya turtle is a very unique species because it is thought to have existed from ancient
                     times, but has begun to become...
                  </p>
                  <button className="mt-4">
                     <ReadMoreBtn />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Latest;
