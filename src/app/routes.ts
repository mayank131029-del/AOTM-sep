import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from '../pages/Home';
import Solar from '../pages/Solar';
import Wind from '../pages/Wind';
import Lifestyle from '../pages/Lifestyle';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'solar', Component: Solar },
      { path: 'wind', Component: Wind },
      { path: 'lifestyle', Component: Lifestyle },
    ],
  },
]);
