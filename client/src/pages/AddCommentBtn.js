import React from "react";
import Button from "react-bootstrap/Button";

const AddCommentBtn = ({ comment, star, setStars, refreshStars }) => {
	function AddComment() {
		fetch(`/api/stars/${star.id}/comments`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(comment),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));
		refreshStars(true);
	}

	return (
		<Button variant="primary" type="submit" onClick={() => AddComment()}>
			{" "}
			Add{" "}
		</Button>
	);
};

export default AddCommentBtn;