import { useEffect, useRef } from 'react';

import Server from '../../server';
import Router from '../../server/router';
import type { RouteController, UseServerConfig } from '../../types';

/**
 * 使用服务器的React Hook
 * @description 在React组件中启动iframe通信服务器
 * @param config - 服务器配置
 */
export default function useServer(config: UseServerConfig): void {
  const server = useRef<Server>({} as Server);
  const router = useRef<Router>({} as Router);

  useEffect(() => {
    router.current = new Router();

    config.controllers.forEach(({ path, middleware }: RouteController) => {
      router.current?.controller(path, middleware);
    });

    server.current = new Server(config.whitelist, window, window.location.origin);
    server.current.use(router.current.routers());
    server.current.start({ startKeepAlive: config.startKeepAlive }).then(() => {
      config?.startAfterCB?.();
    });

    return () => {
      server?.current?.close?.();
    };
  }, [config.whitelist, config.controllers, config.startAfterCB]);
}
