import { applyMigration } from './database/migration';
import { Server } from './Server/Server';

class Launcher {
  //instance variable
  server: Server;

  constructor() {
    this.server = new Server();
  }

  launchApp() {
    console.log('Start migration');
    const migrationCount = applyMigration();
    console.log(`Migration is About to run: ${migrationCount}`);
    console.log('started app');
    this.server.createServer();
  }
}

new Launcher().launchApp();
