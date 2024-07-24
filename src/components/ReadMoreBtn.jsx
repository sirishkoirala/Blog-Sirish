import { IconArrowUpRight } from "@tabler/icons-react";
import React from "react";

const ReadMoreBtn = () => {
   return (
      <button className="bg-black text-white pl-4 pr-2 py-2 rounded-lg text-base flex gap-1 justify-center items-center">
         <p>Read More</p>
         <IconArrowUpRight />
      </button>
   );
};

export default ReadMoreBtn;
