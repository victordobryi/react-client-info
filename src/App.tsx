import React, { Fragment } from 'react';
import Main from './pages/Main';

import './styles/main.scss';

export const App = () => (
  <Fragment>
    <header className="header"></header>
    <main className="main">
      <Main />
    </main>
    <footer className="footer"></footer>
  </Fragment>
);

export default App;
