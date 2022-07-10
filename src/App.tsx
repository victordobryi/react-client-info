import React from 'react';
import AppRouter from './router/AppRouter';

import './styles/main.scss';

export const App = () => (
  <div className='app'>
    <header className='header'></header>
    <AppRouter />
    <footer className='footer'></footer>
  </div>
);

export default App;
