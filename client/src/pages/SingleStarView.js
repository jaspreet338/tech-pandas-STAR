import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const SingleStar = ({ star, setStars }) => {
	const [editing, setEditing] = useState(false);
	const refreshStars = (refresh) => {
		if (refresh) {
			setStars(null);
		}
		setEditing(null);
	};
	return (
		<Card key={star.id} className="my-3 shadow">
			<Card.Body>
				<Row>
					<Col sm={12} md={6}>
						<Link to={`/star/${star.id}`}>
							<Card.Title>{star.name}</Card.Title>
						</Link>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Situation:
							</span>{" "}
							{star.situation}
						</Card.Text>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Task:
							</span>{" "}
							{star.task}
						</Card.Text>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Action:
							</span>{" "}
							{star.action}
						</Card.Text>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Result:
							</span>{" "}
							{star.result}
						</Card.Text>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Description:
							</span>{" "}
							{star.description}
						</Card.Text>
						<Card.Text>
							<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
								Comment:
							</span>{" "}
							<Badge pill bg="success">
								{star.comment_count}
							</Badge>{" "}
						</Card.Text>
					</Col>

					<Col
						sm={12}
						md={6}
						className="d-flex justify-content-center align-items-center"
					>
						<Button onClick={() => setEditing(true)} className="ml-">
							Edit STAR
						</Button>
						<EditForm
							active={editing}
							star={star}
							refreshStars={refreshStars}
						/>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default SingleStar;
