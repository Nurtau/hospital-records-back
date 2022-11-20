const db = require("../database");

exports.getDiseaseTypes = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.DiseaseType");

  return res.status(200).json(result);
};

exports.createDiseaseType = async (req, res, next) => {
  const { id, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Hospital.DiseaseType VALUES($1, $2)",
      [id, description]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateDiseaseType = async (req, res) => {
  const { description } = req.body;
  const { id } = req.params;

  const result = await db.query(
    "UPDATE Hospital.DiseaseType \
     SET description = $1 \
     WHERE id = $2",
    [description, id]
  );

  return res.status(200).json(result);
};

exports.deleteDiseaseType = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.DiseaseType WHERE id = $1",
    [req.params.id]
  );

  return res.status(200).json(result);
};
