import React from 'react';
import * as ReactDOM from 'react-dom/client';
import {watchRefreshMessages} from './watchRefreshMessages';

watchRefreshMessages();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<h1>Hello, world!</h1>);
