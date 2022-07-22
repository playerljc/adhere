import React, { Suspense } from 'react';
import { Skeleton } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { browserConfig } from '@ctsj/router';

import RouterConfig from '@/config/router/router.config';

import BasicLayout from '../BasicLayout';

import styles from './index.less';

const loadingRows = 15;

/**
 * WrapperComponent
 * @param props
 * @return {*}
 * @constructor
 */
function WrapperComponent(props) {
  return props.children;
}

function renderLoading() {
  const result = [];
  for (let i = 0; i < loadingRows; i++) {
    result.push(<Skeleton key={i + 1} loading active avatar />);
  }
  return result;
}

/**
 * renderRoute
 * @param router
 * @param parentRoutes
 * @param route
 * @param authorized
 */
function renderRoute({ router, parentRoutes, route, authorized }) {
  const { routes = [], ...others } = route;
  const cloneRoute = Object.assign(others, {
    routes: [],
  });
  router.push(cloneRoute);
  if (!cloneRoute.component) {
    if (!('redirect' in cloneRoute)) {
      // 没有component是SubMenu
      cloneRoute.component = WrapperComponent;
    } else {
      // 如果是redirect
      const firstAuthorityRoute = (parentRoutes || [])
        .filter((r) => r.authority)
        .find((r) => r.authority.some((a) => authorized.includes(a)));
      if (firstAuthorityRoute) {
        cloneRoute.redirect = firstAuthorityRoute.path;
      }
    }
  } else if (cloneRoute.component === BasicLayout) {
    // 菜单布局
    cloneRoute.component = (r) => <BasicLayout {...r} routes={routes} name={cloneRoute.name} />;
  } else {
    const Component = cloneRoute.component;
    cloneRoute.component = (r) => (
      <Suspense
        fallback={
          <QueueAnim
            className={styles.Wrap}
            animConfig={[
              { opacity: [1, 0], translateY: [0, 50] },
              { opacity: [1, 0], translateY: [0, -50] },
            ]}
          >
            {renderLoading()}
          </QueueAnim>
        }
      >
        <Component {...r} />
      </Suspense>
    );
  }

  if (routes && routes.length) {
    renderRouterLoop(cloneRoute.routes, routes, authorized);
  }
}

/**
 * RouterLoop
 * @param router
 * @param routes
 * @param authorized - 所有权限
 */
function renderRouterLoop(router, routes = [], authorized) {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    renderRoute({
      router,
      parentRoutes: routes,
      route,
      authorized,
    });
  }
}

/**
 * Router - Router的创建
 * @return {Promise<*>}
 */
export default async () => {
  // 路由配置
  const config = RouterConfig();

  // eslint-disable-next-line no-redeclare
  const authorized = [];

  const router = [];

  // 根据路由配置生成实际的路由
  renderRouterLoop(router, config, authorized);
  // eslint-disable-next-line no-unused-vars
  return browserConfig(router, () => {});
};

/**
 * renderChildren - 处理这个节点是一个SubMenu有自己的组件，但是它下面的子路由不显示，但面包屑上还要显示SubMenu中的Name
 * @param path
 * @param Component
 * @return {function(...[*]=)}
 */
export function renderChildren({ path, Component }) {
  return (props) => {
    if (window.location.pathname === path) {
      return <Component {...props} />;
    }

    return props.children;
  };
}
