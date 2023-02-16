import User from "../model/userModel"; // assume you have a user model in a separate file

export const register = async (req, res) => {
  const { Name, Role, Class, Area } = req.body; // assuming the form data is submitted via POST request with these fields

  // validate user input
  if (!Name||Role||Class || !Area) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check if user already exists in the DB
  const existingUser = await User.findOne({ name: Name });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  try {
    // save the user to the DB
    // create a new user with the provided details
    const user = await User.create({
      Name,
      Role,
      Class,
      Area,
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", data: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};