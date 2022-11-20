const doctorsController = require("../database");

exports.getPublicServants = async (_, res) => {
  const result = await doctorsController.query(
    "SELECT * FROM Hospital.PublicServant"
  );

  return res.status(200).json(result);
};

exports.createPublicServant = async (req, res, next) => {
  const { email, department } = req.body;

  try {
    const result = await doctorsController.query(
      "INSERT INTO Hospital.PublicServant VALUES($1, $2)",
      [email, department]
    );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updatePublicServant = async (req, res) => {
  const { department } = req.body;
  const { email } = req.params;

  const result = await doctorsController.query(
    "UPDATE Hospital.PublicServant \
     SET department = $1 \
     WHERE email = $2",
    [department, email]
  );

  return res.status(200).json(result);
};

exports.deletePublicServant = async (req, res) => {
  const result = await doctorsController.query(
    "DELETE FROM Hospital.PublicServant WHERE email = $1",
    [req.params.email]
  );

  return res.status(200).json(result);
};
