import React, { useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Rating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index, event) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    console.log(clientX,left,width,"gdfgd")
    
    const clickPosition = clientX - left;
    const isHalf = clickPosition < width / 2;
    
    setRating(isHalf ? index + 0.5 : index + 1);
  };

  const handleReset = () => {
    setRating(0);
  };

  return (
    <div className="max-w-[1300px] h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[300px] h-[300px] bg-[#eef0f1] p-4 rounded-md">
        <h2 className="mb-4 text-lg font-semibold">Star Ratings</h2>

        <div className="flex" style={{ cursor: "pointer" }}>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <span
                key={index}
                onClick={(e) => handleStarClick(index, e)}
                style={{ cursor: "pointer", color: "gold", fontSize: "1.8rem" }}
                className="relative"
              >
                {rating >= ratingValue ? (
                  <BsStarFill className="mr-1" />
                ) : rating >= index + 0.5 ? (
                  <BsStarHalf className="mr-1" />
                ) : (
                  <BsStar className="mr-1" />
                )}
              </span>
            );
          })}
        </div>

        <p className="mt-2 text-gray-700">Selected Rating: {rating}</p>

        <button
          className="mt-4 px-4 py-1 bg-red-500 text-white rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
