import React from "react";
import ReadMoreBtn from "./ReadMoreBtn";

const TopicCard = () => {
   return (
      <div className="flex space-x-4 contains mb-24">
         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative">
               <img className="w-full h-64 object-cover" src="./img/ice.jpg" alt="News Image" />
               <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-full">
                  Entertainment
               </span>
            </div>
            <div className="p-4">
               <h2 className="font-bold text-lg mt-2">Zelensky accuses Russia of worst crimes since WW2</h2>
               <p className="text-muted-foreground text-sm">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
               </p>
               <p className="text-muted text-xs mt-2">Ukraine, 24 April 2024</p>
               <div className="mt-4">
                  <ReadMoreBtn />
               </div>
            </div>
         </div>
         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative">
               <img className="w-full h-64 object-cover" src="./img/WhatsApp.jpg" alt="News Image" />
               <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-full">
                  Entertainment
               </span>
            </div>
            <div className="p-4">
               <h2 className="font-bold text-lg mt-2">Zelensky accuses Russia of worst crimes since WW2</h2>
               <p className="text-muted-foreground text-sm">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
               </p>
               <p className="text-muted text-xs mt-2">Ukraine, 24 April 2024</p>
               <div className="mt-4">
                  <ReadMoreBtn />
               </div>
            </div>
         </div>
         <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card">
            <div className="relative">
               <img className="w-full h-64 object-cover" src="./img/glass-web.jpg" alt="News Image" />
               <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-semibold rounded-full">
                  Entertainment
               </span>
            </div>
            <div className="p-4">
               <h2 className="font-bold text-lg mt-2">Zelensky accuses Russia of worst crimes since WW2</h2>
               <p className="text-muted-foreground text-sm">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
               </p>
               <p className="text-muted text-xs mt-2">Ukraine, 24 April 2024</p>
               <div className="mt-4">
                  <ReadMoreBtn />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopicCard;
