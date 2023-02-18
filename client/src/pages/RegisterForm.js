import React, { useState } from "react";
import { json } from "react-router-dom";
function RegisterForm() {
	const [name, setName] = useState("");
	const [role, setRole] = useState("");
	const [section, setSection] = useState("");
	const [area, setArea] = useState("");

	async function register() {
		console.warn(name, role, section, area);

		let result = await fetch("http://localhost:3000/api/register",{
			method:'POST',
			body: JSON.stringify(item),
			headers:{
				"Content-Type": 'application/json',
				"Accept": 'application/json',
			};
		});
		result = await result.json()
		localStorage.setItem("user-info", JSON.stringify(result))
	}
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
	);
}
export default RegisterForm;
