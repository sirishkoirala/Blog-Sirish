import React from "react";

const Subscribe = () => {
   return (
      <div className="bg-black text-white p-10 rounded-3xl contains shadow-lg flex flex-col items-center  text-center mb-24">
         <h2 className="text-3xl font-bold mb-1">Get the Latest Notifications</h2>
         <p className="text-3xl font-bold mb-6">and Info from Us</p>
         <p className="text-slate-400 w-9/12 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled.
         </p>
         <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-slate-100/80">Subscribe Now</button>
      </div>
   );
};

export default Subscribe;
