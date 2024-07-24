import { IconCircleArrowLeftFilled, IconCircleArrowRightFilled } from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";

const Carousel = () => {
   const images = [
      "./img/ice.jpg",
      "./img/glass-web.jpg",
      "./img/profile-pic (7).png",
      "./img/profile-pic (9).png",
      "./img/sidelook2.jpg",
   ];
   const [currentIndex, setCurrentIndex] = useState(0);
   const carouselRef = useRef(null);
   const totalSlides = images.length;

   useEffect(() => {
      const carousel = carouselRef.current;
      const dots = document.querySelectorAll("[data-slide]");

      const updateCarousel = () => {
         carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
         dots.forEach((dot, index) => {
            dot.classList.toggle("bg-primary", index === currentIndex);
            dot.classList.toggle("bg-muted-foreground", index !== currentIndex);
         });
      };

      updateCarousel();
   }, [currentIndex]);

   const prevSlide = () => {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalSlides - 1);
   };

   const nextSlide = () => {
      setCurrentIndex(currentIndex < totalSlides - 1 ? currentIndex + 1 : 0);
   };

   return (
      <>
         <div className="relative w-full mx-auto">
            <div className="overflow-hidden relative h-[550px]">
               <div className="flex transition-transform duration-500 ease-in-out" ref={carouselRef}>
                  {images.map((image, index) => (
                     <div key={index} className="min-w-full h-full flex items-center justify-center bg-zinc-200">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain " />
                     </div>
                  ))}
               </div>
            </div>

            <button
               onClick={prevSlide}
               className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80"
            >
               <IconCircleArrowLeftFilled color="white" size={32} />
            </button>
            <button
               onClick={nextSlide}
               className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80"
            >
               <IconCircleArrowRightFilled color="white" size={32} />
            </button>

            <div className="z absolute bottom-[47%] right-[48%] bg-gray-500 text-white px-2 py-1 rounded">
               {currentIndex + 1} / {totalSlides}
            </div>
         </div>
         
      </>
   );
};

export default Carousel;
