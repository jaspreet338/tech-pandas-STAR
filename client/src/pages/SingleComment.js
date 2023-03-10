import { Card } from "react-bootstrap";

function SingleComment({ commenter, daytime: daytime, text }) {
	return (
		<div className="my-3">
			<Card body>
				<Card.Subtitle className="mb-2 text-muted">
					{commenter} {daytime}
				</Card.Subtitle>
				<Card.Text>{text}</Card.Text>
			</Card>
		</div>
	);
}

export default SingleComment;
