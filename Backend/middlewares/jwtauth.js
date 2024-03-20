const jwt = require('jsonwebtoken');
require("dotenv").config();

const jwtAuthMiddleware = (req, res, next) => {

  if (req.headers['x-api-key']) {
    if (req.headers['x-api-key'] === process.env.X_API_KEY) {
      next();
    }
    else{
      return res.sendStatus(401);
    }
  }

 else{
  if (!req.headers['authorization']) {
    return res.sendStatus(401); // Unauthorized
  }
  const authHeader = req.headers['authorization'];
  if (authHeader == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(authHeader, "SECFORHWT!@#123", (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    if (user) {
      req.user = user;
    }
    next(); // Pass the request to the next middleware
  });
 }
};

module.exports = jwtAuthMiddleware;
