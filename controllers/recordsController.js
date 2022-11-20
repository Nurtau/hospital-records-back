const db = require("../database");

exports.getRecords = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Record");

  return res.status(200).json(result);
};

exports.createRecord = async (req, res, next) => {
  const { email, cname, disease_code, total_deaths, total_patients } = req.body;
  try {
  const result = await db.query(
    "INSERT INTO Hospital.Record(email, cname, disease_code, total_deaths, total_patients) VALUES($1, $2, $3, $4, $5)",
    [email, cname, disease_code, total_deaths, total_patients]
  );

  return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateRecord = async (req, res) => {
  const { email, cname, disease_code, total_deaths, total_patients } = req.body;
  const { record_id } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Record \
     SET email = $1, cname = $2, disease_code = $3, total_deaths = $4, total_patients = $5 \
     WHERE record_id = $6",
    [email, cname, disease_code, total_deaths, total_patients, record_id]
  );

  return res.status(200).json(result);
};

exports.deleteRecord = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Record WHERE record_id = $1",
    [req.params.record_id]
  );

  return res.status(200).json(result);
};
