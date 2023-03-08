import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const SingleStarPage = ({ star }) => {
  const navigate = useNavigate();
	const close =()=>{
// redirect back to DASHBOARD
navigate ("/dashboard");
	};
		return (
		<Card key={star.id} className="my-3 shadow">
			<Card.Body>
				<Row>
					<Col sm={12} md={6}>
						<Card.Title>{star.name}</Card.Title>
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
					</Col>
					<Col
						sm={12} md={6}className="d-flex justify-content-center align-items-center">
						<Button onClick={close} className="ml-">
						Close
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default SingleStarPage;