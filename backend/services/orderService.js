const db = require("../database/db");

exports.getSingleOrder = async (params) => {
  const { orderId, userId } = params;

  if (!orderId) throw { message: "orderId was not provided", statusCode: 400 };
  if (!userId) throw { message: "userId was not provided", statusCode: 400 };

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM orders INNER JOIN orders_details ON ( orders.id = orders_details.order_id ) WHERE orders.id = ? AND orders.user_id = ?`,
      [orderId, userId],
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "order was not found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `Order was found`,
          data: result,
        });
      }
    );
  });
};

exports.getOrders = async (params) => {
  const { userId } = params;

  if (!userId) throw { message: "userId was not provided", statusCode: 400 };

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM orders INNER JOIN orders_details ON ( orders.id = orders_details.order_id ) WHERE user_id = ?`,
      [userId],
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0)
          reject({ message: "No order were found", statusCode: 400 });

        resolve({
          statusCode: 200,
          message: `${result.length} orders were found`,
          data: result,
        });
      }
    );
  });
};

// exports.createOrder = async (params) => {
//   // const { error } = updateUserValidation(params);
//   // if (error) throw { message: error.details[0].message, statusCode: 400 };

//   const { userId, products } = params;

//   return new Promise((resolve, reject) => {
//     db.query(
//       `INSERT INTO orders (user_id) VALUES (?)`,
//       [userId],
//       (err, result) => {
//         console.log(err);
//         console.log(result);
//       }
//     );
//   });
// };
