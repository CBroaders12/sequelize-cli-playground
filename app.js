const express = require('express');
const db = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user/create', async (req, res) => {
  try {
    console.log(req.body);
    const { email, username, password } = req.body;

    const newUser = await db.User.create({
      username,
      password,
      email,
    });

    res.status(200).json({
      status: 'success',
      data: {
        message: 'User created',
        user: newUser,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
