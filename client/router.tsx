import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './layout';
import OffersList from './pages/offers-list';
import UserProfile from './pages/user-profile';
import OfferPage from './pages/offer-page';
import OfferFormPage from './pages/offer-form';
import ChatPage from './pages/chat-page';
import ChatsList from './pages/chats-list';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<OffersList />} />
        <Route path="users">
          <Route path=":id" element={<UserProfile />} />
        </Route>
        {/* <Route path="offers/:id" element={<OfferPage />} /> */}
        <Route path="offers">
          <Route path=":id" element={<OfferPage />} />
          <Route path="form" element={<OfferFormPage />} />
        </Route>
        <Route path="dialogs" element={<ChatsList />} />
      </Route>

      <Route path="chat" element={<ChatPage />} />
    </Route>,
  ),
);

// export default router
