const recordsController = require("../database");

exports.getUsers = async (_, res) => {
  const result = await recordsController.query("SELECT * FROM Hospital.Users");

  return res.status(200).json(result);
};

exports.createUser = async (req, res, next) => {
  const { email, name, surname, salary, phone, cname } = req.body;

  try {
    const result = await recordsController.query(
      "INSERT INTO Hospital.Users VALUES($1, $2, $3, $4, $5, $6)",
      [email, name, surname, salary, phone, cname]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res) => {
  const { name, surname, salary, phone, cname } = req.body;
  const { email } = req.params;

  const result = await recordsController.query(
    "UPDATE Hospital.Users \
     SET name = $1, surname = $2, salary = $3, phone = $4, cname = $5 \
     WHERE email = $6",
    [name, surname, salary, phone, cname, email]
  );

  return res.status(200).json(result);
};

exports.deleteUser = async (req, res) => {
  const result = await recordsController.query(
    "DELETE FROM Hospital.Users WHERE email = $1",
    [req.params.email]
  );

  return res.status(200).json(result);
};
