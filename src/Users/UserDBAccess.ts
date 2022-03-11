import { User } from '../Shared/Models';
import { pool } from '../database/Client';

export class UserDBAccess {
  constructor() {}

  public async putUser(user: User) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO User(id, name, age,email) VALUES(${
          (user.name, user.age, user.email)
        })`,
        (err: Error | null, docs: any) => {
          if (err) {
            reject(err);
          } else {
            resolve;
          }
        }
      );
    });
  }
}
