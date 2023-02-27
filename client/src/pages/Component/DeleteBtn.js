import React from "react";
import Button from "react-bootstrap/Button";


const DeleteBtn = ({ star , setStars , refreshStars }) => {


	function removeStar(index) {
		alert("Do you want to delete " + index);

		fetch(`/api/stars/${index}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => console.error(error));
			setStars(star.filter((t) => t.id !== index));
		console.log((setStars(star.filter((t) => t.id !== index))));
		refreshStars(true);
	}

	return (
		<Button variant="danger" type="submit" onClick={() => removeStar(star.id)}> Delete </Button>
	);
};

export default DeleteBtn;
