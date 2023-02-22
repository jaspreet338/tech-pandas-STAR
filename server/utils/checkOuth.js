import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
	// Get the authentication token from the request headers
	const token = req.headers.authorization;

    // Verify the token and extract the user ID
	jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
		if (err) {
			// If the token is invalid, return a 401 error
			return res.status(401).json({ error: "Unauthorized" });
		}
