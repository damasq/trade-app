import {DataSource} from 'typeorm';
import {Author} from './entity/Author';
import {Book} from './entity/Book';
import {Offer} from './entity/Offer';
import {User} from './entity/User';

export const postgresDS = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'bestuser',
  password: 'pgpwd4h',
  database: 'bookstalldb',
  synchronize: true,
  entities: [Book, Author, User, Offer],
  dropSchema: true,
});
