import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

const CommentItem = ({ comment, currentUser, onEdit, onDelete }) => {
	const [showModal, setShowModal] = useState(false);
	const [editedComment, setEditedComment] = useState(comment.text);

	const handleEdit = () => {
		onEdit(comment.id, editedComment);
		setShowModal(false);
	};

	const handleDelete = () => {
		onDelete(comment.id);
	};

	return (
		<>
			<ListGroup.Item key={comment.id}>
				<p>
					{comment.commenter} - {comment.datetime}
				</p>
				{comment.editing ? (
					<div>
						<textarea
							value={editedComment}
							onChange={(e) => setEditedComment(e.target.value)}
						></textarea>
						<Button onClick={handleEdit}>Save</Button>
					</div>
				) : (
					<p>{comment.text}</p>
				)}
				{currentUser === comment.commenter && !comment.editing && (
					<>
						<Button onClick={() => setShowModal(true)}>Edit</Button>{" "}
						<Button onClick={handleDelete}>Delete</Button>
					</>
				)}
			</ListGroup.Item>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<textarea
						value={editedComment}
						onChange={(e) => setEditedComment(e.target.value)}
					></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={handleEdit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CommentItem;

// render in other components:
// {
// 	star.comments.length > 0 && (
// 		<ListGroup className="mt-3">
// 			{star.comments.map((comment) => (
// 				<CommentItem
// 					key={comment.id}
// 					comment={comment}
// 					currentUser={currentUser} // pass in the current user from props
// 					onEdit={(id, text) => handleEditComment(id, text)}
// 					onDelete={(id) => handleDeleteComment(id)}
// 				/>
// 			))}
// 		</ListGroup>
// 	);
// }