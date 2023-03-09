import React from "react";
import Button from "react-bootstrap/Button";

const DeleteComment = () => {
	function removeStar(i) {
		alert("Do you want to delete : " );

		fetch(`/stars/:id/comments/:commentId`, {
			method: "DELETE",
		})
			.then((res) => res)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));

	}

	return (
		<Button variant="danger" type="submit" onClick={() => removeStar(star.id)}>
			{" "}
			Delete{" "}
		</Button>
	);
};

export default DeleteComment;
