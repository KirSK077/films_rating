import React from "react";
import Star from "./Star";

const Stars = ({ count }: { count: number }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }).map((_, index) => (
        <Star key ={index} />
      ))}
    </ul>
  );
}

export default Stars;
