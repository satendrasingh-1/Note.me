const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (!token) {
    return res.status(401).send({success: 401, message:"Unauthorized person"});
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(403).send({success: 403, message:"Session Expired, try to login again"});
    req.userId = user.user;
    next();
  });
}


module.exports = {
    auth,
}