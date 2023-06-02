import React from "react";
import "./Mainhome.css";
import CardList from "./Cardlist";

const Mainhome = () => {
  return (
   <div>

 <div className="home">
      <h1>Welcome to the LPU Library</h1>
      <p>"Libraries are the temples of learning, and books are the keys to knowledge and imagination."</p>
      {/* Add more content or components as needed */}
    </div>
   <div className="categories"> <h2>Popular Categories</h2></div>
    <CardList></CardList>

   </div>
 )
   
};
export default Mainhome;