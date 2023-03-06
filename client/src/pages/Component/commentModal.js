import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CommentModal = ({ show, onHide, onSubmit }) => {
	const [commentText, setCommentText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Create a new comment object with the current date and time
		const newComment = {
			text: commentText,
			commenter: "Anonymous",
			datetime: new Date().toLocaleString(),
			id: Math.floor(Math.random() * 10000), // generate a random id for the comment
		};
		// Call the onSubmit function to add the comment
		onSubmit(newComment);
		// Clear the comment text
		setCommentText("");
	};

	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Comments</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="commentText">
						<Form.Control
							as="textarea"
							placeholder="Add a comment..."
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Add Comment
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};
export default CommentModal;