import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        {routes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
