import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import './style/init.css';
import './i18next.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
