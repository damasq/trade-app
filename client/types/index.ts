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

// export interface Offer {
//   date: string;
//   give: string;
//   want: string;
//   id: number;
//   user: User
// };

// export interface User {
//   id: number;
//   username: string;
// }

export interface Offer {
  date: string;
  give: string;
  want: string;
  id: number;
  user: {
    id: number;
    username: string;
  }
};

export interface User {
  id: number;
  username: string;
  offers: UserOffer[]
}

interface UserOffer {
  date: string;
  give: string;
  want: string;
  id: number;
}