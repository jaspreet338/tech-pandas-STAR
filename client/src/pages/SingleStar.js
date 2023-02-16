import React from "react";


  const SingleStar = ({ star }) => {
  return (
    <div>
      <h3>{star.name}</h3>
      <p>{star.description}</p>
    </div>
  );
};


export default SingleStar;
