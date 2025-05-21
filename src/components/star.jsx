import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Star() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    setRating(0);
  };

  return (
    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"700px"}}>
      <Rating style={{display:"flex"}} onClick={handleRating} initialValue={rating} />
      <button onClick={handleReset}>reset</button>
    </div>


  );
}
