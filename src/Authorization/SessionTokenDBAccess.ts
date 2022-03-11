import { SessionToken } from '../Server/Model';
import { pool } from '../database/Client';

export class SessionTokenDBAccess {
  constructor() {}

  public async storeSessionToken(token: SessionToken): Promise<void> {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO SessionToken(id, AccessRight ) VALUES(${
          (token.tokenId,
          token.username,
          token.valid,
          token.expirationTime,
          token.accessRight)
        })`,
        (err: Error | null, docs: any) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}
