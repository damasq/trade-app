import {DataSource} from 'typeorm';
import {Book} from './entity/Book';

export const postgresDS = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'bestuser',
  password: 'pgpwd4h',
  database: 'bookstalldb',
  synchronize: true,
  entities: [Book],
});