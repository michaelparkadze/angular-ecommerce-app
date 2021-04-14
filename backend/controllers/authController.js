const { registerUser } = require("../services/authService");

exports.register_user = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  registerUser({ fullName, email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((error) => {
      const { statusCode = 400, message, err } = error;
      res.status(statusCode).send({ message, err }) && next(error);
    });
};
