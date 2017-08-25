const fs = require('fs');
const path = require('path');
const env = require('node-env-file');
const app = require('./src/app');

const envFile = path.join(__dirname, '.env');
const envPack = {};

if (fs.existsSync(envFile)) {
  env(envFile);

  env.lines.variables.map((e) => {
    envPack[e.split('=')[0]] = e.split('=')[1];
  });

  console.log(`${Object.keys(envPack).map(e => `\n==> ${e}=${envPack[e]}`)}`);
}

const port = process.env.NODE_PORT || 3000;
app.listen(port, (error) => {
  if (error) throw error;

  console.log(`==> Listen ${port} port. Open http://localhost:${port}/ in your browser.`);
});

// https://habrahabr.ru/post/329942/#comment_10244722
process.on('unhandledRejection', (err) => {
  console.error('uncaughtException:', err.message);
  console.error(err.stack);
  process.exit(1);
});
