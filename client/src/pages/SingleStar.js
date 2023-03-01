
import React from "react";
import Card from "react-bootstrap/Card";

const SingleStar = ({ star }) => {
	return (
		<Card
			className="my-3 p-3 rounded"
			border="dark"
			style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}
		>
			<Card.Body>
				<Card.Title>{star.name}</Card.Title>
				<Card.Text>
					<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
						Situation :
					</span>
					{star.situation}
				</Card.Text>
				<Card.Text>
					<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Task:</span>
					{star.task}
				</Card.Text>
				<Card.Text>
					<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Action:</span>
					{star.action}
				</Card.Text>
				<Card.Text>
					<span style={{ fontSize: "1rem", fontWeight: "bold" }}>Result:</span>{" "}
					{star.result}
				</Card.Text>
				<Card.Text>
					<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
						Description:
					</span>{" "}
					{star.description}
				</Card.Text>
			</Card.Body>
		</Card>

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
