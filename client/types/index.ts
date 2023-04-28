export interface IBook {
  cover: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  inCart: boolean;
}

export interface IBooksState {
  data: IBook[];
}
