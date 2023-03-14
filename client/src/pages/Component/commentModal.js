import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CommentModal = ({ show, handleClose, handleCommentSubmit }) => {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		fetch("/api/comments")
			.then((res) => {
				res.json();
			})
			.then((data) => {
				setComments(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCommentSubmit({ comments });
		setComments([]);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Comment</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="comment">
						<Form.Label>Comment</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							value={comments}
							onChange={(e) => setComments(e.target.value)}
							required
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default CommentModal;