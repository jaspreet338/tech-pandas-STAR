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
	);
};

export default SingleStar;
