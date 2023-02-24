import React from "react";

const SingleStar = ({ star }) => {
	return (
		<div>
			<h3>{star.name}</h3>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Situation :</span>{" "}
				{star.situation}
			</p>
      <p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Task:</span>{" "}
				{star.task}
			</p>
      <p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Action:</span>{" "}
				{star.action}
			</p>
      <p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Result:</span>{" "}
				{star.result}
			</p>
      <p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Description:</span>{" "}
				{star.description}
			</p>
		</div>
	);
};

export default SingleStar;
