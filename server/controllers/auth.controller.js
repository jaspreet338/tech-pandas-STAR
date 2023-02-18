import User from "../model/user.model"; // user model

export const register = async (req, res) => {
	const { Name, Role, Class, Area } = req.body; // assuming the form data is submitted via POST request with these fields

	// validate user input
	if (!Name || !Role || !Class || !Area) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const user = new User({ Name, Role, Class, Area });
	try {
		const newUser = await user.save();
		return res.status(201).json({
			message: "User registered successfully",
			data: newUser,
		});
	} catch (error) {
		return res.status(409).json({ message: error.message });
	}
};

// read all user in db
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.getAll();
		return res.status(200).json({ data: users });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};