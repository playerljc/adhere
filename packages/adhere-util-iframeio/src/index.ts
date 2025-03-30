import Fetch from './fetch';
import { useFetch, useServer } from './react/hooks';
import Server from './server';
import Compose from './server/compose';
import Router from './server/router';

export default {
  Fetch,
  Server,
  Router,
  Compose,
  React: {
    useFetch,
    useServer,
  },
};
