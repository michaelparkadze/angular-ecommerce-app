const { registerUser } = require("../services/authService");

exports.register_user = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  registerUser({ fullName, email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, error, data } = err;
      res.status(statusCode).send({ error, data }) && next(err);
    });
};
