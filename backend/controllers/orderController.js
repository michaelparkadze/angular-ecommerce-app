const { getOrders } = require("../services/orderService");

exports.get_orders = async (req, res, next) => {
  const { userId } = req.query;
  getOrders({ userId })
    .then((result) => {
      const { message, data } = result;
      res.status(200).send({ message, data });
    })
    .catch((err) => {
      const { statusCode = 400, message } = err;
      res.status(statusCode).send({ message }) && next(err);
    });
};
