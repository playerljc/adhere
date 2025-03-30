import { useEffect, useRef } from 'react';

import Server from '../../server';
import Router from '../../server/router';
import type { MiddleWare } from '../../types';

type Config = {
  whitelist: string[];
  controllers: {
    path: string;
    middleWare: MiddleWare;
  }[];
  startAfterCB?: () => void;
};

/**
 * useServer
 * @param {Config} config
 */
export default function useServer(config: Config) {
  const server = useRef<Server>();
  const router = useRef<Router>();

  useEffect(() => {
    router.current = new Router();

    config.controllers.forEach(({ path, middleWare }) => {
      router.current?.controller(path, middleWare);
    });

    server.current = new Server(config.whitelist, window, window.location.origin);
    server.current.use(router.current.routers());
    server.current.start().then(() => {
      config?.startAfterCB?.();
    });

    return () => {
      server?.current?.close?.();
    };
  });
}
