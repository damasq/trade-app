import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {watchRefreshMessages} from './watchRefreshMessages';

import './reset.css';
import './style.css';
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {router} from './router';

watchRefreshMessages();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
