const db = require("../database");

exports.getSpecializations = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Specialize");

  return res.status(200).json(result);
};

exports.createSpecializtion = async (req, res, next) => {
  const { id, email } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO Hospital.Specialize(id, email) VALUES($1, $2)",
      [id, email]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateSpecialization = async (req, res) => {
  const { id, email } = req.body;
  const { specialize_id } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Specialize \
     SET id = $1, email = $2 \
     WHERE specialize_id = $3",
    [id, email, specialize_id]
  );

  return res.status(200).json(result);
};

exports.deleteSpecialization = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Specialize WHERE specialize_id = $1",
    [req.params.specialize_id]
  );

  return res.status(200).json(result);
};
