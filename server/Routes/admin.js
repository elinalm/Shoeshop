module.exports = async (req, res, next) => {
  try {
    if (req.session.role === "admin") {
      next()
    }
    else {
      const err = new Error("Hey, you are not an Admin user");
      err.status = 'fail';
      err.statusCode = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
};
