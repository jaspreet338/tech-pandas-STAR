import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditForm() {
    const handleClose = () => setShowForm(false);
		const handleShow = () => setShowForm(true);
	return (
		<div>
			<Modal show={showForm} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Your Star </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="name">
							<Form.Label>Name:</Form.Label>
							<Form.Control as="textarea" value="name" />
						</Form.Group>
						<Form.Group controlId="situation">
							<Form.Label>Situation:</Form.Label>
							<Form.Control as="textarea" value="situation" />
						</Form.Group>
						<Form.Group controlId="task">
							<Form.Label>Task:</Form.Label>
							<Form.Control as="textarea" value="task" />
						</Form.Group>
						<Form.Group controlId="action">
							<Form.Label>Action:</Form.Label>
							<Form.Control as="textarea" value="action" />
						</Form.Group>
						<Form.Group controlId="result">
							<Form.Label>Result:</Form.Label>
							<Form.Control as="textarea" value="result" />
						</Form.Group>
						<Form.Group controlId="content">
							<Form.Label>Description :</Form.Label>
							<Form.Control as="textarea" value="description" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="success" type="submit" onClick={handleAdd}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
export default EditForm;
