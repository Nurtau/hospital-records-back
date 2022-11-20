const db = require("../database");

exports.getDiscovers = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Discover");

  return res.status(200).json(result);
};

exports.createDiscover = async (req, res, next) => {
  const { cname, disease_code, first_enc_date } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Hospital.Discover(cname, disease_code, first_enc_date) VALUES($1, $2, $3)",
      [cname, disease_code, first_enc_date]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateDiscover = async (req, res) => {
  const { cname, disease_code, first_enc_date } = req.body;
  const { id } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Discover \
     SET cname = $1, disease_code = $2, first_enc_date = $3 \
     WHERE discover_id = $4",
    [cname, disease_code, first_enc_date, id]
  );

  return res.status(200).json(result);
};

exports.deleteDiscover = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Discover WHERE discover_id = $1",
    [req.params.id]
  );

  return res.status(200).json(result);
};
