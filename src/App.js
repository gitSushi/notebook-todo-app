import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import store from './redux/store'
import Notepad from './components/Notepad'

function App() {
  return (
    <Provider store={store}>
      <Notepad/>
    </Provider>
    
  );
}

/*
    <Provider store={store}>
      <Notepad/>
    </Provider>
    <div>
      <Notepad/>
    </div>
*/

export default App;
