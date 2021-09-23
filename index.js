const app = require('./app');

const { sequelize } = require('./models');

const startServer = async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  app.listen(5000, () => {
    console.log(`[SERVER]: Listening on port 5000`);
  });
};

startServer();
