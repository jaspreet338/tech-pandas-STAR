import React from "react";
import Button from "react-bootstrap/Button";

const DeleteCommentBtn = ({ comments, star, setStars, refreshStars }) => {
	function removeComment(index) {
		fetch(`/api/stars/${star.id}/comments/${index}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));
		refreshStars(true);
	}

	return (
		<Button variant="danger" type="submit" onClick={() => removeComment(star.comments.id)}>
			{" "}
			Delete{" "}
		</Button>
	);
};

export default DeleteCommentBtn;