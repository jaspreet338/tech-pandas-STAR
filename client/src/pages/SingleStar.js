import React, { useState } from "react";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import CommentModal from "./Component/CommentModal";

const SingleStar = ({ star, setStars }) => {
    const [editing, setEditing] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const refreshStars = (refresh) => {
        if (refresh) {
            setStars(null);
        }
        setEditing(null);
    };
    // Helper function to handle adding a new comment
    const handleAddComment = (comment) => {
        // Add the comment to the star object
        star.comment.push(comment);
        // Update the list of stars
        setStars(null);
        // Hide the comment modal
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
                        <div>
                        <Badge variant="secondary">{star.comment && star.comment.length}</Badge>{" "}
                            <Button variant="link" onClick={() => setShowCommentModal(true)}>
                                View Comments
                            </Button>
                        </div>
                        <CommentModal
                            show={showCommentModal}
                            onHide={() => setShowCommentModal(false)}
                            onSubmit={handleAddComment}
                        />
                        {Array.isArray(star.comment) && star.comment.length > 0 && (
  <ListGroup className="mt-3">
    {star.comment.map((comment) => (
      <ListGroup.Item key={comment.id}>
        <p>
          {comment.commenter} - {comment.datetime}
        </p>
        <p>{comment.text}</p>
      </ListGroup.Item>
    ))}
  </ListGroup>
)}
                    </Col>
                    <Col
                        sm={12}
                        md={6}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Button onClick={() => setEditing(true)} className="ml-">
                            Edit STAR
                        </Button>
                        <EditForm
                            active={editing}
                            star={star}
                            refreshStars={refreshStars}
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
export default SingleStar;