import React from "react";
// import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
function CommentList({ comments }) {
    return (
      <>
        {Array.isArray(comments) && comments.length > 0 && (
          <ListGroup className="mt-3">
            {comments.map((comment, index) => (
              <SingleComment
                key={index}
                commenter={comment.commenter}
                daytime={comment.created_at}
                text={comment.comment}
              />
            ))}
          </ListGroup>
        )}
      </>
    );
  }
  export default CommentList;