import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
