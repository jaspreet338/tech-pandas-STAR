import React from "react";
function RegisterForm() {
    return (
			<div className="form-container">
				<h1>Register Here</h1>
				<div className="form-body">
					<div>
						<label className="form_label" htmlFor="name">
							Name
						</label>
						<input
							className="form_input"
							type="text"
							id="name"
							placeholder="Display Name"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="role">
							Role
						</label>
						<select>
							<option defaultValue=""></option>
							<option value="Student">Student</option>
							<option value="Mentor">Training Mentor</option>
						</select>
					</div>
					<div>
						<label className="form_label" htmlFor="class">
							Class
						</label>
						<input
							className="form_input"
							type="text"
							id="class"
							placeholder="Class"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="area">
							Area
						</label>
						<input
							className="form_input"
							type="text"
							id="area"
							placeholder="Area"
						></input>
					</div>
				</div>
				<div>
					<button type="submit" className="btn">
						Register
					</button>
				</div>
			</div>
		);
}
export default RegisterForm;