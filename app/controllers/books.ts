import {booksRepository} from '../repositories/books';

export function getBooksList() {
  return booksRepository.find();
}

export function getBook() {
  return {};
}

export function addToCart() {
  return [];
}
