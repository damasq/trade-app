import {booksRepository} from '../repositories/books';

export function getBooksList() {
  return booksRepository.find();
}

export function getBook(id) {
  return booksRepository.findOneBy({id});
}

// export function updateCart(id) {
//   return booksRepository.update(id, { isInCart: true});
// }

export function createBook(data) {
  return booksRepository.create(data);
}

export async function saveBook(book) {
  console.log('book:', book);
  await booksRepository.save(book);
}
