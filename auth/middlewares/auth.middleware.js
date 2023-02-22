import { verifyAccessToken } from "../services/token.service.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const { userId } = verifyAccessToken(token);
    console.log("userId", userId);

    req.userId = userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
