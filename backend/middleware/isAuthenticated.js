import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({
      message: "unauthourized",
      success: false,
    });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: "Token invalid",
        success: false,
      });
    }
    req.user = user;
    next();
  });
};
export default isAuthenticated;
