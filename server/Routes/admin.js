module.exports = async (req, res, next) => {
  console.log(req.session.role);
  if (req.session.role === "admin") {
    next();
  } else {
    res.status(401).send("Hey, you are not an Admin user");
  }
};
