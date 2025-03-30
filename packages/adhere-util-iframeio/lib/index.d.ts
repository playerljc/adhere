import Fetch from './fetch';
import { useFetch, useServer } from './react/hooks';
import Server from './server';
import Compose from './server/compose';
import Router from './server/router';
declare const _default: {
    Fetch: typeof Fetch;
    Server: typeof Server;
    Router: typeof Router;
    Compose: typeof Compose;
    React: {
        useFetch: typeof useFetch;
        useServer: typeof useServer;
    };
};
export default _default;
