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

export type Offer = {
  date: string;
  give: string;
  want: string;
  id: number;
  user: User
};

export type User = {
  id: number;
  username: string;
}