import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "./EditForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentList from "./CommentList";
import AddComment from "./Component/AddComment";
import Navbar from "./Navbar";
import NavbarButton from "./Component/NavbarButton";
import "./NavbarSingleStar.css";

const SingleStarView = () => {
	const [editing, setEditing] = useState(false);
	const [addComment, setAddComment] = useState(false);
	const [star, setStar] = useState(null);
	const { id } = useParams();
	const [user, setUser] = useState({ name: "", role: "" });
	useEffect(() => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	const refreshStars = (refresh) => {
		if (refresh) {
			setStar(null);
		}
		setEditing(false);
		setAddComment(false);
	};

	useEffect(() => {
		const fetchStarData = async () => {
			if (star === null) {
				try {
					const response = await fetch(`/api/stars/${id}`);
					const data = await response.json();
					setStar(data);
				} catch (error) {
					console.error(error);
				}
			}
		};
		fetchStarData();
	}, [id, star]);

	return (

		<div className="container my-4">
			<Navbar className="navbar">
            <NavbarButton className="dashboard" name="Dashboard" link="/dashboard" />
           </Navbar>
			{star && (
				<Card key={star.id} className="shadow">
					<Card.Body className="cardSize">
						{/* <Row> */}
							<Col sm={12} md={12}>
								<Card.Title>{star.name}</Card.Title>
								{user.role === "TA" || user.role === "mentor" ? (
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}> Star Creator Name: {star.creator ? star.creator : "Unknown"} </span>
            ) : null}
								<Card.Text className="mb-3">
									<span className="font-weight-bold">Situation: </span>
									{star.situation}
								</Card.Text>
								<Card.Text className="mb-3">
									<span className="font-weight-bold">Task: </span>
									{star.task}
								</Card.Text>
								<Card.Text className="mb-3">
									<span className="font-weight-bold">Action: </span>
									{star.action}
								</Card.Text>
								<Card.Text className="mb-3">
									<span className="font-weight-bold">Result: </span>
									{star.result}
								</Card.Text>
								<Card.Text className="mb-3">
									<span className="font-weight-bold">Description: </span>
									{star.description}
								</Card.Text>

							</Col>
							{user.role === "TA" || user.role === "mentor" ? (

									<AddComment
										active={addComment}
										star={star}
										setStar={setStar}
									/>

							) : (
								<Col sm={12} md={6} className="d-flex flex-column">
									<div className="mb-3">
										<Button onClick={() => setEditing(true)}>Edit STAR</Button>
									</div>
									<EditForm
										active={editing}
										star={star}
										refreshStars={refreshStars}
									/>
								</Col>
							)}
						{/* </Row> */}
					</Card.Body>
					<CommentList
									comments={star.comments}
									refreshStar={refreshStars}
									user={user}
								/>
				</Card>
			)}
		</div>
	);
};

export default SingleStarView;
