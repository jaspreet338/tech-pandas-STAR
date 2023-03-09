import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentModal from "./Component/CommentModal";

const SingleStar = ({ star, setStars }) => {
	const [editing, setEditing] = useState(false);
	const [showCommentModal, setShowCommentModal] = useState(false);
	const [comments, setComments] = useState([]);

	// Function to refresh stars
	const refreshStars = (refresh) => {
		if (refresh) {
			setStars([]);
		}
		setEditing(false);
	};

	// Functions to handle comment submit
	const handleCommentSubmit = (comment) => {
		setComments([...comments, comment]);
		setShowCommentModal(false);
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
						sm={12}
						md={6}
						className="d-flex justify-content-center align-items-center"
					>
						{comments.user_id === star.user_id && (
							<>
								<Button onClick={() => setEditing(true)} className="ml-1">
									Edit STAR
								</Button>
								<EditForm
									active={editing}
									star={star}
									refreshStars={refreshStars}
								/>
							</>
						)}
					</Col>
				</Row>
				<CommentModal
					show={showCommentModal}
					handleClose={() => setShowCommentModal(false)}
					handleCommentSubmit={handleCommentSubmit}
				/>
			</Card.Body>
		</Card>
	);
};

 export default SingleStar;
