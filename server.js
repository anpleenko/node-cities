const fs = require('fs');
const path = require('path');
const env = require('node-env-file');
const app = require('./src/app');

const envFile = path.join(__dirname, '.env');

if (fs.existsSync(envFile)) {

  // parse .env file
  env(envFile);

  env.lines.variables.map((e) => {
    const splitString = e.split('=');

    console.log(`\n==> ${splitString[0]}=${splitString[1]}`);
  });
}

const port = process.env.NODE_PORT || 3000;
app.listen(port, (error) => {
  if (error) throw error;

  console.log(`==> Listen ${port} port. Open http://localhost:${port}/ in your browser.`);
});

// https://habrahabr.ru/post/329942/#comment_10244722
// process.on('unhandledRejection', (err) => {
//   console.error('uncaughtException:', err.message);
//   console.error(err.stack);
//   process.exit(1);
// });

process.on('exit', () => {console.log('process.on.exit')});
process.on('SIGINT', () => {console.log('process.on.SIGINT')});
process.on('SIGTERM', () => {console.log('process.on.SIGTERM')});
process.on('uncaughtException', () => {console.log('process.on.uncaughtException')});
