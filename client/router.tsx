import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './layout';
import OffersList from './pages/offers-list';
import UserProfile from './pages/user-profile';
import OfferPage from './pages/offer-page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<OffersList />} />
      <Route path="user">
        <Route path="id" element={<UserProfile />} />
      </Route>
      <Route path="offer/:id" element={<OfferPage />} />
    </Route>,
  ),
);

// export default router