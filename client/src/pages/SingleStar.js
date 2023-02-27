import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";


const SingleStar = ({ star, setStars }) => {
	const [editing, setEditing] = useState(false);
	const refreshStars = (refresh) => {
		if (refresh) {
			setStars(null);
		}
		setEditing(null);
	};

	return (
		<div key={star.id}>
			<h3>{star.name}</h3>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
					Situation :
				</span>
				{star.situation}
			</p>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Task:</span>
				{star.task}
			</p>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Action:</span>
				{star.action}
			</p>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Result:</span>{" "}
				{star.result}
			</p>
			<p>
				<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
					Description:
				</span>{" "}
				{star.description}
			</p>
			<Button onClick={() => setEditing(true)} className="ml-">
				Edit STAR
			</Button>
			<EditForm active={editing} star={star} setStars={setStars} refreshStars={refreshStars} />
		</div>
	);
};

export default SingleStar;
