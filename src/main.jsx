import { Analytics } from '@vercel/analytics/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics mode={'production'} />
  </React.StrictMode>
);
