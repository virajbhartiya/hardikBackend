// usersController.js
const uuid = require('uuid');
const db = require('../db');

async function registerUser(name, email, password) {
  try {
    const userExistsQuery = 'SELECT * FROM users WHERE email = $1';
    const userExistsResult = await db.query(userExistsQuery, [email]);

    if (userExistsResult.rows.length > 0) {
      return { error: 'User already exists' };
    }

    const userId = uuid.v4();

    const insertUserQuery = 'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)';
    await db.query(insertUserQuery, [userId, name, email, password]);

    return { userId };
  } catch (error) {
    console.error('Error during registration:', error);
    return { error: 'Internal Server Error' };
  }
}

module.exports = {
  registerUser,
};
