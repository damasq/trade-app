import {postgresDS} from '../data-source';
import {Book} from '../entity/Book';

export const booksRepository = postgresDS.getRepository(Book);
