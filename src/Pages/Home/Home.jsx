import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSide from "../Shared/LeftSide";
import Navbar from "../Shared/Navbar";

import RightSide from "../Shared/RightSide";
import BreackingNews from "./BreackingNews";
import NewsCard from "../Shared/NewsCard";


const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreackingNews></BreackingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSide></LeftSide>
        </div>
        <div className="md:col-span-2 border">
          
         {
          news.map((aNews)=> <NewsCard

        key={aNews._id}
        news={aNews}
          
          ></NewsCard>
          
          )
         }

        </div>
        <div className="border">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
