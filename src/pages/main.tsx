import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';

createRoot(
  document.getElementById('root') ?? document.createElement('div')
).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
