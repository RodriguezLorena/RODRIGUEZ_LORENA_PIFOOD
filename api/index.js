
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false}).then(() => {
  server.listen(3001, () => {
    console.log('MODELOS SINCRONIZADOS'); // eslint-disable-line no-console
  });
});
