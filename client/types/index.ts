export interface Book {
  cover: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  inCart: boolean;
}

export interface BooksState {
  data: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
