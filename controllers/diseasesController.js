const db = require("../database");

exports.getDiseases = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Disease");

  return res.status(200).json(result);
};

exports.createDisease = async (req, res, next) => {
  const { disease_code, pathogen, description, id } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Hospital.Disease VALUES($1, $2, $3, $4)",
      [disease_code, pathogen, description, id]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateDisease = async (req, res) => {
  const { pathogen, description, id } = req.body;
  const { disease_code } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Disease \
     SET pathogen = $1, description = $2, id = $3 \
     WHERE disease_code = $4",
    [pathogen, description, id, disease_code]
  );

  return res.status(200).json(result);
};

exports.deleteDisease = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Disease WHERE disease_code = $1",
    [req.params.disease_code]
  );

  return res.status(200).json(result);
};
