const { updateUserValidation } = require("../middleware/validation");
const db = require("../database/db");
const md5 = require("md5");

exports.updateUser = async (params) => {
  const { error } = updateUserValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { userId, fullName, email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users WHERE user_id = ? AND password = ?`,
      [userId, hashedPassword],
      (err, result) => {
        if (err) reject({ message: err, statusCode: 500 });

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 400,
          });
        } else {
          if (email === result[0].email && fullName === result[0].fname) {
            reject({
              message: "No new data has been provided",
              statusCode: 400,
            });
          }

          let query = "";

          if (email !== result[0].email && fullName !== result[0].fname) {
            query = `fname = '${fullName}', email = '${email}'`;
          } else if (email !== result[0].email) {
            query = `email = '${email}'`;
          } else {
            query = `fname = '${fullName}'`;
          }

          db.query(
            `UPDATE users SET ${query} WHERE user_id = ?`,
            [userId],
            (err, result) => {
              if (err) throw { message: err, statusCode: 500 };
              resolve({
                message: "User details have been successfully updated",
                data: result,
              });
            }
          );
        }
      }
    );
  });
};
