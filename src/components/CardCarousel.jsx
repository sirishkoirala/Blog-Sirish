import React from "react";
import ViewAllBtn from "./ViewAllBtn";

const CardCarousel = () => {
   return (
      <div className="bg-background relative -top-44 contains">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
               <img src="./img/ice.jpg" alt="Avengers Age of Ultron" className="w-full h-[330px] object-cover" />
               <div className="p-4">
                  <h3 className="text-lg font-semibold">Avengers Age of Ultron</h3>
                  <p className="text-muted-foreground">Genres: Action Adventure Sci-Fi</p>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  </div>
               </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
               <img src="./img/ice.jpg" alt="Captain Marvel" className="w-full h-[330px] object-cover" />
               <div className="p-4">
                  <h3 className="text-lg font-semibold">Captain Marvel</h3>
                  <p className="text-muted-foreground">Genres: Action Adventure Sci-Fi</p>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  </div>
               </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
               <img src="./img/ice.jpg" alt="Avengers End Game" className="w-full h-[330px] object-cover" />
               <div className="p-4">
                  <h3 className="text-lg font-semibold">Avengers End Game</h3>
                  <p className="text-muted-foreground">Genres: Action Adventure Sci-Fi</p>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  </div>
               </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
               <img src="./img/ice.jpg" alt="Spiderman Far from Home" className="w-full h-[330px] object-cover" />
               <div className="p-4">
                  <h3 className="text-lg font-semibold">Spiderman Far from Home</h3>
                  <p className="text-muted-foreground">Genres: Action Adventure Sci-Fi</p>
                  <div className="flex items-center">
                     <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="text-center mt-6">
            <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">
               <ViewAllBtn />
            </div>
         </div>
      </div>
   );
};

export default CardCarousel;
