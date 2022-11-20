const db = require("../database");

exports.getDoctors = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Doctor");

  return res.status(200).json(result);
};

exports.createDoctor = async (req, res, next) => {
  const { email, degree } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO Hospital.Doctor VALUES($1, $2)",
      [email, degree]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateDoctor = async (req, res) => {
  const { degree } = req.body;
  const { email } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Doctor \
     SET degree = $1 \
     WHERE email = $2",
    [degree, email]
  );

  return res.status(200).json(result);
};

exports.deleteDoctor = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Doctor WHERE email = $1",
    [req.params.email]
  );

  return res.status(200).json(result);
};
