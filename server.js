const app = require('./src/app');

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
