const data = [
  {
    firstName: 'Number',
    lastName: 'One',
    books: [
      {
        title: 'BOOK_1',
        description: 'DESCRIPTION_1',
        price: 111,
        rating: 1,
      },
      {
        title: 'BOOK_2',
        description: 'DESCRIPTION_2',
        price: 222,
        rating: 2,
      },
      {
        title: 'BOOK_3',
        description: 'DESCRIPTION_3',
        price: 333,
        rating: 3,
      },
    ],
  },
];

export default data;

export const offersMock = [
  {
    username: 'USERNAME-1',
    offers: [
      {
        give: 'GIVE-1',
        want: 'WANT-1',
        date: new Date().toString(),
      },
      {
        give: 'GIVE-01',
        want: 'WANT-01',
        date: new Date().toString(),
      },
    ],
  },
  {
    username: 'USERNAME-2',
    offers: [
      {
        give: 'GIVE-2',
        want: 'WANT-2',
        date: new Date().toString(),
      },
    ],
  },
  {
    username: 'USERNAME-3',
    offers: [
      {
        give: 'GIVE-3',
        want: 'WANT-3',
        date: new Date().toString(),
      },
      {
        give: 'GIVE-03',
        want: 'WANT-03',
        date: new Date().toString(),
      },
    ],
  },
];
