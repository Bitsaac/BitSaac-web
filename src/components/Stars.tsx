import React from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ count }: { count: number }) => {
  // Create an array of stars based on the 'count' prop
  const stars = Array.from({ length: count }, (_, index) => (
    <FaStar key={index} className="text-black" />
  ));

  return <div className="flex">{stars}</div>;
};

export default Stars;
