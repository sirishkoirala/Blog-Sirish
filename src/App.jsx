import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Topic from "./components/Topic";
import Latest from "./components/Latest";
import CenteredHeadingMovies from "./components/CenteredHeadingMovies";
import Carousel from "./components/Carousel";
import CardCarousel from "./components/CardCarousel";
import BlackScreen from "./components/BlackScreen";
import PhotoCarousel from "./components/PhotoCarousel";
import Line from "./components/Line";
import TopicCard from "./components/TopicCard";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
   return (
      <div>
         <Navbar />
         <HomePage />
         <Topic name={"Sports"} />
         <Latest />
         <CenteredHeadingMovies />
         <Carousel />
         <CardCarousel />
         <BlackScreen />
         <PhotoCarousel />
         <div className="-mt-32">
            <Topic name={"Health"} />
         </div>
         <Line />
         <TopicCard />
         <Topic name={"Food"} />
         <Line />
         <TopicCard />
         <Topic name={"Entertainment"} />
         <Line />
         <TopicCard />
         <Topic name={"Finance"} />
         <Line />
         <TopicCard />
         <Topic name={"Nation"} />
         <Line />
         <TopicCard />
         <Subscribe />
         <Footer />
      </div>
   );
};

export default App;
