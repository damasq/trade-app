import {postgresDS} from '../data-source';
import {Author} from '../entity/Author';

export const authorsRepository = postgresDS.getRepository(Author)