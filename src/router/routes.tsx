import Error from '../pages/Error';
import Main from '../pages/Main';
import Client from '../pages/Client';

export const routes = [
  {
    path: '/main',
    component: <Main />,
  },
  {
    path: '/',
    component: <Main />,
  },
  { path: '/main/:id', component: <Client /> },
  {
    path: '*',
    component: <Error />,
  },
];
