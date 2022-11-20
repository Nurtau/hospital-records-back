const db = require("../database");

exports.getCountries = async (_, res) => {
  const result = await db.query("SELECT * FROM Hospital.Country");

  return res.status(200).json(result);
};

exports.createCountry = async (req, res, next) => {
  const { cname, population } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO Hospital.Country VALUES($1, $2)",
      [cname, population]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateCountry = async (req, res) => {
  const { population } = req.body;
  const { cname } = req.params;

  const result = await db.query(
    "UPDATE Hospital.Country \
     SET population = $1 \
     WHERE cname = $2",
    [population, cname]
  );

  return res.status(200).json(result);
};

exports.deleteCountry = async (req, res) => {
  const result = await db.query(
    "DELETE FROM Hospital.Country WHERE cname = $1",
    [req.params.cname]
  );

  return res.status(200).json(result);
};
