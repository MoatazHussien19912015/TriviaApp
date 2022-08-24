import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import Layout from './components/shared/Layout';

const lazy = (cb) => loadable(() => pMinDelay(cb(), 200), { fallback: <>loading</> });
export const DefaultLayout = Layout;

export const routes = [
    {
      path: '/intro',
      component: lazy(() => import('./components/pages/HomePage'))
    }, {
      path: '/quiz',
      component: lazy(() => import('./components/pages/QuizPage'))
    }, {
      path: '/result',
      component: lazy(() => import('./components/pages/ResultPage'))
    }
  ];