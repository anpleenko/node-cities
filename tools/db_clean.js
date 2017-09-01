(() => {
  const fs = require('fs');
  const path = require('path');
  const readFile = require('fs-readfile-promise');
  const db = require('../src/db');

  const sql = path.join(__dirname, '../migrations');

  const clean = async () => {
    const temp = [];

    fs.readdirSync(sql).forEach((file) => {
      if (file.includes('.sql')) {
        temp.push(path.join(sql, file));
      }
    });

    try {
      temp.map(async (filePath) => {
        const data = await readFile(filePath, { encoding: 'utf-8' });
        await db.any(data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  clean();
})();
