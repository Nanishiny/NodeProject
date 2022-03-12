const DBMigrate = require('db-migrate');

export const applyMigration = async () =>
  new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true);

    dbMigrate.silence(true);

    dbMigrate.up((error: Error, result = []) => {
      if (error) {
        reject(error);
      }
      resolve(result.length);
    });
  });
