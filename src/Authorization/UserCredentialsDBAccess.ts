import { UserCredentials } from '../Shared/Models';

import { pool } from '../database/Client';

export class UserCredentialsDBAccess {
  constructor() {}

  public async putUserCredentials(
    userCredentials: UserCredentials
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO UserCredentials(id, AccessRight ) VALUES(${
          (userCredentials.username,
          userCredentials.password,
          userCredentials.accessRights)
        })`,
        (err: Error | null, docs: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        }
      );
    });
  }

  public async getUserCredential(
    username: string,
    password: string
  ): Promise<UserCredentials | undefined> {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM UserCredentials WHERE 
        username = ${username} 
        AND password = ${password}`,
        (err: Error | null, docs: any) => {
          if (err) {
            reject(err);
          } else {
            if (docs.length == 0) {
              resolve(undefined);
            } else {
              resolve(docs[0]);
            }
          }
        }
      );
    });
  }
}
