import React from "react";
function RegistrationForm() {
    return (
			<div>
				<h2>Register Here</h2>
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
						Select Role:
					</label>
					<select>
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
                <div>
                    <button type="submit" className="btn">Register</button>
                </div>
			</div>
		);
}
export default RegistrationForm;