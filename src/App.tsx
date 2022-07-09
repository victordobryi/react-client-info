import React, { Fragment } from 'react';
import AppRouter from './router/AppRouter';

import './styles/main.scss';

export const App = () => (
  <Fragment>
    <header className='header'></header>
    <AppRouter />
    <footer className='footer'></footer>
  </Fragment>
);

export default App;
