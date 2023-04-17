import {authorsRepository} from '../repositories/authors';

export function getAuthorsList() {
  return authorsRepository.find();
}

export function createAuthor(data) {
  return authorsRepository.create(data);
}

export function getAuthor(id) {
  return authorsRepository.findOneBy({id});
}

export async function saveAuthor(author) {
  // console.log("author:", author)
  await authorsRepository.save(author);
}
