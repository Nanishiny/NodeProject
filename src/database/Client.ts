const { Pool, Client } = require('pg');
import { loadEnvironmentvariable } from '../config/index';

export const pool = new Pool({
  loadEnvironmentvariable
});
