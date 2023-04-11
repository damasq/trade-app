import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {watchRefreshMessages} from './watchRefreshMessages';

import App from './App';

watchRefreshMessages();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
    <div>Hello world</div>
  </StrictMode>,
);
