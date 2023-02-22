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
	// Check if the user has the appropriate permissions to query STARs
    if (
        decoded.role !== "TA" ||
        decoded.role !== "mentor" ||
        decoded.role !== "student"
    ) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // Set the user ID in the request object for use in subsequent middleware functions
    req.userId = decoded.userId;

    // Call the next middleware function
    next();
});
};