import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

router.use(isAuthenticated); // Apply the middleware to all routes in homeRouter

// Define home route
router.get("/", (req, res) => {
  res.send("Home route");
});

export default router;