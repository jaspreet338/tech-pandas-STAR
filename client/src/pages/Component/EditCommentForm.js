import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DeleteCommentBtn from "./Component/DeleteComment";

const EditCommentForm = ({ active, star, setStars, refreshStars }) => {
	const [comment, setComment] = useState(star.comments);

	const handleClose = () => {
		refreshStars(false);
	};

	const handleAdd = async () => {
		try {
			const response = await fetch(
				`/api/stars/${star.id}/comments/${star.comments.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(comment),
				}
			);
			if (response.ok) {
				console.log("Comment updated successfully");
				refreshStars(true);
			} else {
				console.error("Failed to update comment");
			}
		} catch (error) {
			console.error("Network error:", error);
		}
	};

	return (
		<div>
			<Modal show={active} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Your Comment </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="text">
							<Form.Label>text:</Form.Label>
							<Form.Control
								as="textarea"
								value={comment.comment}
								onChange={(e) => setComment(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="success" type="submit" onClick={handleAdd}>
						Save
					</Button>
					<DeleteCommentBtn
						comment={comment}
						refreshStars={refreshStars}
						setStars={setStars}
					/>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default EditCommentForm;