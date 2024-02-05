// user.js
const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controllers/usersController');

const router = express.Router();
router.use(bodyParser.json());

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const result = await usersController.registerUser(name, email, password);

  if (result.error) {
    return res.status(result.statusCode || 500).json({ error: result.error });
  }

  res.status(201).json(result);
});

module.exports = router;
