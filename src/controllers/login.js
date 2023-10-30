const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    res.json({ access: true });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
