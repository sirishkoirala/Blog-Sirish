import React from "react";
import ViewAllBtn from "./ViewAllBtn";

const Topic = ({name}) => {
   return (
      <div className="flex contains justify-between py-9">
         <h1 className="font-semibold text-4xl">{name}</h1>
         <ViewAllBtn/>         
      </div>
   );
};

export default Topic;
