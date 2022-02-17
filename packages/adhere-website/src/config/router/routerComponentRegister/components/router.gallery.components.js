import { lazy } from 'react';

export const Echarts = lazy(() =>
  import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'),
);
export const MapTalks = lazy(() =>
  import(/* webpackChunkName: "gis" */ '@/components/gallery/gis/maptalks'),
);
export const BMaps = lazy(() =>
  import(/* webpackChunkName: "gis" */ '@/components/gallery/gis/bmap'),
);

export const Graph = lazy(() =>
  import(/* webpackChunkName: "graph" */ '@/components/gallery/graph'),
);

export const Demo = lazy(() => import(/* webpackChunkName: "demo" */ '@/components/ui/demo'));
