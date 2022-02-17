import { lazy } from 'react';

export const App = lazy(() => import(/* webpackChunkName: "app" */ '@/app'));
export const Introduction = lazy(() =>
  import(/* webpackChunkName: "introduction" */ '@/introduction'),
);
export const Changelog = lazy(() => import(/* webpackChunkName: "changelog" */ '@/changelog'));
