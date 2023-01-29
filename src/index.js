import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { store, persistor } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/dictionary">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback='...loading'>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);