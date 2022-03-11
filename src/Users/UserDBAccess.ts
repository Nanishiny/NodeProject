import Nedb = require('nedb');
import { User } from '../Shared/Models';

export class UserDBAccess {
  private nedb: Nedb = new Nedb();

  constructor() {
    this.nedb = new Nedb('database/User.db');
    this.nedb.loadDatabase();
  }

  public async putUser(user: User) {
    return new Promise((resolve, reject) => {
      this.nedb.insert(user, (err: Error | null) => {
        if (err) {
          reject(err);
        } else {
          resolve;
        }
      });
    });
  }
}
