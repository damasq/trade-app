import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import BooksList from './pages/books-list';
import Layout from './layout';
import CartPage from './pages/cart';
import BookPage from './pages/book-page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<BooksList />} />
      <Route path="book/:id" element={<BookPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>,
  ),
);

// export default router
