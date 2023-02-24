import React, { useState } from "react";
// import { json } from "react-router-dom";
function RegisterForm() {
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [section, setSection] = useState("");
	const [area, setArea] = useState("");

 function register() {
		console.warn(username,name, role, section, area);

 }
	return (
		<div>

			<div className="form-container">
				<h1>Register Here</h1>
				<div className="form-body">
					<div>
						<label className="form_label" htmlFor="name">
							Username
						</label>
						<input
							className="form_input"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							id="username"
							placeholder="type your name"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="name">
							Name
						</label>
						<input
							className="form_input"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							id="name"
							placeholder="Display Name"
						></input>
					</div>
					<div>
						<label className="form_label" htmlFor="role">
							Role
						</label>
						<select>
							<option
								defaultValue={role}
								onChange={(e) => setRole(e.target.value)}
							></option>
							<option value="Student">Student</option>
							<option value="Mentor">Training Mentor</option>
						</select>
					</div>
					<div>
						<label className="form_label" htmlFor="section">
							Class
						</label>
						<input
							className="form_input"
							type="text"
							id="class"
							value={section}
							onChange={(e) => setSection(e.target.value)}
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
							value={area}
							onChange={(e) => setArea(e.target.value)}
							placeholder="Area"
						></input>
					</div>
				</div>
				<div>
					<button onClick={register} type="submit" className="btn">
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
export default RegisterForm;
