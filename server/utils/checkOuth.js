import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
	// Get the authentication token from the request headers
	const token = req.headers.authorization;