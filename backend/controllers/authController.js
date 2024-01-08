const { registerUser, loginUser } = require("../services/authService");

exports.login_user = async (req, res, next) => {
  const { email, password } = req.body;

  loginUser({ email, password })
    .then((result) => {
      console.log(result);
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};

exports.register_user = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  registerUser({ fullName, email, password })
    .then((result) => {
      const { statusCode = 200, message, data, token } = result;
      res.status(statusCode).send({ message, data, token });
    })
    .catch((err) => {
      const { statusCode = 400, message, data } = err;
      res.status(statusCode).send({ message, data }) && next(err);
    });
};
