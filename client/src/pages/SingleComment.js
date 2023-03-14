import { Card } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import EditComment from "./Component/EditComment";

function SingleComment({ comment, refreshStar, user }) {
	const [editing, setEditing] = useState(false);

	const refreshComment = (refresh) => {
		if (refresh) {
			refreshStar(true);
		}
		setEditing(false);
	};

	return (
		<div className="my-3">
			<Card body>
				<Card.Subtitle className="mb-2 text-muted">
					{comment.commenter} {comment.created_at}
				</Card.Subtitle>
				<Card.Text>{comment.comment}</Card.Text>
				{user.role === "TA" || user.role === "mentor" ? (
				<>
				<div className="mb-3">
					<Button onClick={() => setEditing(true)}>Edit Comment</Button>
				</div>
				<EditComment
					comment={comment}
					active={editing}
					refreshComment={refreshComment}
				/>
				</>
				) : null
				}
			</Card>
		</div>
	);
}

export default SingleComment;
