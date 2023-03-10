import React from "react";
// import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
function CommentList({ comments, refreshStar }) {
	return (
		<>
			{Array.isArray(comments) && comments.length > 0 && (
				<ListGroup className="mt-3">
					{comments.map((comment, index) => (
					<li id="list-item" key={index}>
						<SingleComment
							key={comment.id}
							comment={comment}
							refreshStar={refreshStar}
						/>
					</li>
					))}
				</ListGroup>
			)}
		</>
	);
}
export default CommentList;
