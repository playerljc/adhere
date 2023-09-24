import { Decorators, Dict } from '@baifendian/adhere';
import { Link } from '@ctsj/router';
import { Breadcrumb, Menu, Tooltip } from 'antd';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '@/lib/Footer';
import { getPathName, getSearch } from "../Router/path";
import styles from './index.less';

const { SubMenu } = Menu;

function isAuthority(authoritys = [], allAuthority = []) {
  return authoritys.some((authority) => allAuthority.includes(authority));
}

/**
 * BasicLayout
 * @class BasicLayout
 * @classdesc BasicLayout
 */
@Decorators.ReactErrorBoundaries
class BasicLayout extends React.Component {
  /**
   * fillKey
   * @param key
   * @param routes
   * @return {{path: *, name: *}}
   */
  static fillKey(key, routes) {
    let entry;
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      if (item.path === key) {
        entry = {
          name: item.name,
          path: item.path,
        };
        break;
      }

      if (item.routes) {
        entry = BasicLayout.fillKey(key, item.routes);
        if (entry) break;
      }
    }

    return entry;
  }

  /**
   * renderTitle
   * @param name
   * @param icon
   * @return {*}
   */
  static renderTitle({ name, icon }) {
    return (
      <Tooltip title={name} placement="right">
        {icon ? <img src={icon} className={styles.MenuIcon} alt="" /> : null}
        <span className={styles.MenuIconText}>{name}</span>
      </Tooltip>
    );
  }

  /**
   * getPathBySelectKey
   * @param path
   * @param routes
   * @param selectKey
   */
  static getPathBySelectKey({ path, routes, selectKey }) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];

      if ('redirect' in item) continue;

      const keys = [];

      // 通过路由中定义的path生成正则表达式
      const reg = pathToRegexp(item.path, keys, {
        sensitive: false, // When true the route will be case sensitive. (default: false)
        strict: false, // When false the trailing slash is optional. (default: false)
        end: false, // When false the path will match at the beginning. (default: true)
        delimiter: '/', // Set the default delimiter for repeat parameters. (default: '/')
      });

      if (reg.test(selectKey)) {
        path.push(item);
      }

      if (item.routes) {
        BasicLayout.getPathBySelectKey({ path, routes: item.routes, selectKey });
      }
    }
  }

  /**
   * loopRoutes
   * @param defaultOpenKeys
   * @param defaultSelectedKeys
   * @param routes
   */
  static loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes }) {
    const pathname = getPathName();

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (pathname.indexOf(route.path) !== -1) {
        if (
          route.routes &&
          route.routes.length &&
          route.routes.filter((t) => t.hide).length !== route.routes.length
        ) {
          defaultOpenKeys.push({
            path: route.path,
            name: route.name,
          });
          BasicLayout.loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes: route.routes });
        } else {
          if (pathname === route.path) {
            // 如果是hide，找到第一个不是hide的route
            if ('hide' in route && route.hide) {
              const firstIncludeRoute = routes
                .filter((t) => !('redirect' in t))
                .find((r) => (!('hide' in r) || !r.hide) && pathname.indexOf(r.path) !== -1);

              if (firstIncludeRoute) {
                defaultSelectedKeys.push({
                  path: firstIncludeRoute.path,
                  name: firstIncludeRoute.name,
                });
              }
            } else {
              defaultSelectedKeys.push({
                path: route.path,
                name: route.name,
              });
            }
          }
        }
      }
    }
  }

  static sortRouters(_routes) {
    const routes = _routes.map((t) => ({ ...t }));

    function loop(children) {
      children.sort((pre, cur) => {
        if ('sort' in pre) {
          if ('sort' in cur) {
            if (pre.sort > cur.sort) return 1;
            if (pre.sort < cur.sort) return -1;
            return 0;
          } else {
            return 1;
          }
        } else {
          if ('sort' in cur) {
            return -1;
          } else {
            return 0;
          }
        }
      });

      children.forEach((node) => {
        if ('routes' in node && node.routes.length) {
          node.routes = BasicLayout.sortRouters(node.routes);
        }
      });
    }

    loop(routes);

    return routes;
  }

  constructor(props) {
    super(props);

    this.state = {
      authorized: [],
      isMenuCollapse: false,

      selectedKeys: [],
      openKeys: [],

      routes: BasicLayout.sortRouters(this.props.routes),
    };
  }

  async componentDidMount() {
    this.setState({
      authorized: await Dict.value.SystemAuthorized.value,
    });

    this.unregisterCallback = this.props.history.listen((location) => {
      const { defaultSelectedKeys, defaultOpenKeys } = this.getDefaultKeys(location.pathname);

      if (
        JSON.stringify(defaultSelectedKeys) !== JSON.stringify(this.state.selectedKeys) ||
        JSON.stringify(defaultOpenKeys) !== JSON.stringify(this.state.openKeys)
      ) {
        this.setState({
          selectedKeys: defaultSelectedKeys,
          openKeys: defaultOpenKeys,
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.routes) !== JSON.stringify(nextProps.routes)) {
      this.setState({
        routes: BasicLayout.sortRouters(nextProps.routes),
      });
    }
  }

  componentWillUnmount() {
    if (this.unregisterCallback) {
      this.unregisterCallback();
      this.unregisterCallback = null;
    }
  }

  /**
   * renderMenuItem
   * @param routes
   * @return {any[]}
   */
  renderMenuItem(routes = []) {
    return routes
      .filter((r) => {
        if ('hide' in r && r.hide) return false;

        if (!r.redirect) {
          if (r.authority && r.authority.length) {
            return isAuthority(r.authority, this.state.authorized);
          }
          return true;
        }
        return false;
      })
      .map((r) => {
        if (
          r.routes &&
          r.routes.length &&
          r.routes.filter((t) => t.hide).length !== r.routes.length
        ) {
          return (
            <SubMenu title={BasicLayout.renderTitle(r)} key={r.path}>
              {this.renderMenuItem(r.routes)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item key={r.path}>
            <Link to={r.path}>{BasicLayout.renderTitle(r)}</Link>
          </Menu.Item>
        );
      });
  }

  renderMenuBar() {
    return (
      <div className={styles.MenuBar}>
        <i
          className="icon iconfont iconbuoumaotubiao09"
          onClick={() => {
            this.setState({
              isMenuCollapse: !this.state.isMenuCollapse,
            });
          }}
        />
      </div>
    );
  }

  /**
   * renderMenu
   * @param defaultSelectedKeys
   * @param defaultOpenKeys
   * @return {*}
   */
  renderMenu({ defaultSelectedKeys, defaultOpenKeys }) {
    const { routes = [] } = this.state;

    return (
      <Menu
        className={styles.Menu}
        selectedKeys={defaultSelectedKeys.map((t) => t.path)}
        openKeys={defaultOpenKeys.map((t) => t.path)}
        onOpenChange={(openKeys) => {
          // 展开多个
          this.setState({
            openKeys: openKeys.map((key) => BasicLayout.fillKey(key, routes)),
          });

          // 只能展开一个
          // if (openKeys.length === 1) {
          //   this.setState({
          //     openKeys: [BasicLayout.fillKey(openKeys[0], routes)],
          //   });
          //
          //   return;
          // }
          //
          // let flag = true;
          //
          // // 1,2,3
          // for (let i = 0; i < openKeys.length - 1; i++) {
          //   if (openKeys[i + 1].indexOf(openKeys[i]) === -1) {
          //     flag = false;
          //     break;
          //   }
          // }
          //
          // if (flag) {
          //   this.setState({
          //     openKeys: openKeys.map((key) => BasicLayout.fillKey(key, routes)),
          //   });
          //
          //   return;
          // }
          //
          // this.setState({
          //   openKeys: openKeys
          //       .slice(openKeys.length - 1)
          //       .map((key) => BasicLayout.fillKey(key, routes)),
          // });
        }}
        onSelect={({ selectedKeys }) => {
          this.setState({
            selectedKeys: selectedKeys.map((key) => BasicLayout.fillKey(key, routes)),
          });
        }}
        mode="inline"
        theme="dark"
      >
        {this.renderMenuBar()}
        {this.renderMenuItem(routes)}
      </Menu>
    );
  }

  /**
   * renderBreadcrumb
   * @return {*}
   */
  renderBreadcrumb() {
    const { name } = this.props;
    const { routes } = this.state;

    const selectKey = getPathName()/*window.location.pathname;*/

    const path = [];
    BasicLayout.getPathBySelectKey({
      path,
      routes,
      selectKey,
    });

    const paths = path
      .filter((t) => !t.redirect)
      .sort((p1, p2) => {
        if (p1.path.length > p2.path.length) return 1;
        else if (p1.path.length < p2.path.length) return -1;
        else return 0;
      });

    return (
      <div className={styles.BreadcrumbWrap}>
        <Breadcrumb separator="/">
          <Breadcrumb.Item>{name}</Breadcrumb.Item>
          {paths.map((t, index) => (
            <Breadcrumb.Item key={t.path}>
              {index !== paths.length - 1 ? <Link to={t.path}>{t.name}</Link> : t.name}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }

  /**
   * getDefaultKeys
   * @param pathname
   * @return {{defaultOpenKeys: [], defaultSelectedKeys: []}}
   */
  getDefaultKeys(pathname = getPathName()/*window.location.pathname*/) {
    const { routes = [] } = this.props;
    const defaultSelectedKeys = [];
    const defaultOpenKeys = [];

    BasicLayout.loopRoutes({
      defaultOpenKeys,
      defaultSelectedKeys,
      routes: routes.filter((t) => !t.redirect),
      pathname,
    });

    return {
      defaultSelectedKeys,
      defaultOpenKeys,
    };
  }

  /**
   * getDefault
   * @return {{selectedKeys: ([]|*[]), openKeys: ([]|*[])}}
   */
  getKeys(pathname = getPathName()/*window.location.pathname*/) {
    const { defaultSelectedKeys, defaultOpenKeys } = this.getDefaultKeys(pathname);

    const { selectedKeys, openKeys } = this.state;

    return {
      selectedKeys: selectedKeys.length ? selectedKeys : defaultSelectedKeys,
      openKeys: openKeys.length ? openKeys : defaultOpenKeys,
    };
  }

  render() {
    const { selectedKeys, openKeys } = this.getKeys();
    const { isMenuCollapse } = this.state;

    return (
      <div className={styles.BasicLayout}>
        <div
          className={classNames(styles.Fixed, styles.Sider, isMenuCollapse ? styles.Collapse : '')}
        >
          {this.renderMenu({
            defaultSelectedKeys: selectedKeys,
            defaultOpenKeys: openKeys,
          })}
        </div>

        <div className={styles.Auto}>
          {this.renderBreadcrumb({
            defaultSelectedKeys: selectedKeys,
            defaultOpenKeys: openKeys,
          })}

          <div className={styles.Auto}>{this.props.children}</div>

          <div className={styles.FooterWrap}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

BasicLayout.propTypes = {
  routes: PropTypes.array,
  name: PropTypes.string,
};

BasicLayout.defaultProps = {
  routes: [],
  name: '',
};

export default BasicLayout;
