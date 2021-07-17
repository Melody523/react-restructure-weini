import './App.css';
import React from 'react';

import router from '@/router/index';

import { Provider } from 'react-redux';
import store from './store/store'


function App() {
  return (
    <div>
      <Provider store={store}>
        {router}
      </Provider>
    </div>
  );
}

export default App;
