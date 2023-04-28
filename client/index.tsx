import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {watchRefreshMessages} from './watchRefreshMessages';

import App from './App';
import './reset.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import BooksList from './components/books-list';
import Layout from './components/layout';
import {Provider} from 'react-redux';
import store from './redux/store';
import CartPage from './components/cart';
import BookPage from './components/book-page';

watchRefreshMessages();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<BooksList />} />
      <Route path="book/:id" element={<BookPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
