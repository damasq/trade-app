import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {watchRefreshMessages} from './watchRefreshMessages';

import App from './App';
import './reset.css';

watchRefreshMessages();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
