import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>

);
