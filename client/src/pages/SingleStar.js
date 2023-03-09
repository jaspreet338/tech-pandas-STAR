import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentModal from "./Component/CommentModal";
import Badge from "react-bootstrap/Badge";

const SingleStar = ({ star, setStars, comments }) => {
	const [editing, setEditing] = useState(false);
	const [showCommentModal, setShowCommentModal] = useState(false);
	const [comments, setComments] = useState(comments);

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

	// Functions to handle comment edit
	const handleCommentEdit = (commentId, updatedComment) => {
		const updatedComments = comments.map((comment) => {
			if (comment.id === commentId) {
				return { ...comment, comment: updatedComment };
			}
			return comment;
		});
		setComments(updatedComments);
	};

	// Functions to handle comment delete
	const handleCommentDelete = (commentId) => {
		const updatedComments = comments.filter(
			(comment) => comment.id !== commentId
		);
		setComments(updatedComments);
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
				{comments.user_id !== star.user_id && (
					<Button onClick={() => setShowCommentModal(true)}>Add Comment</Button>
				)}
				{comments.length > 0 && (
					<div>
						<h4>Comments:</h4>
						<Badge variant="secondary">{comments.length}</Badge>
						{comments.map((comment, index) => (
							<div key={index}>
								<p>{comment.comment}</p>
								{comment.user_id === comment.user_id && (
									<>
										<Button
											onClick={() =>
												handleCommentEdit(comment.id, comment.comment)
											}
											className="mr-1"
										>
											Edit
										</Button>
										<Button
											onClick={() => handleCommentDelete(comment.id)}
											variant="danger"
										>
											Delete
										</Button>
									</>
								)}
							</div>
						))}
					</div>
				)}
			</Card.Body>
		</Card>
	);
};

export default SingleStar;