// import React from 'react';
// import PropTypes from 'prop-types';
// import pathToRegexp from 'path-to-regexp';
// import classNames from 'classnames';
// import { Link } from '@ctsj/router';
// import { Menu, Breadcrumb, Tooltip } from 'antd';
// import { Decorators } from '@baifendian/adhere';
//
// import Footer from '@/lib/Footer';
//
// import styles from './index.less';
//
// const { SubMenu } = Menu;
//
// /**
//  * isAuthority
//  * @param authoritys
//  * @param allAuthority
//  * @return {boolean}
//  */
// function isAuthority(authoritys = [], allAuthority = []) {
//   let flag = true;
//   for (let i = 0; i < authoritys.length; i++) {
//     if (allAuthority.indexOf(authoritys[i]) === -1) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }
//
// /**
//  * BasicLayout
//  * @class BasicLayout
//  * @classdesc BasicLayout
//  */
// @Decorators.ReactErrorBoundaries
// class BasicLayout extends React.Component {
//   state = {
//     authorized: [],
//     isMenuCollapse: false,
//
//     selectedKeys: [],
//     openKeys: [],
//   };
//
//   /**
//    * fillKey
//    * @param key
//    * @param routes
//    * @return {{path: *, name: *}}
//    */
//   static fillKey(key, routes) {
//     let entry;
//     for (let i = 0; i < routes.length; i++) {
//       const item = routes[i];
//       if (item.path === key) {
//         entry = {
//           name: item.name,
//           path: item.path,
//         };
//         break;
//       }
//
//       if (item.routes) {
//         entry = BasicLayout.fillKey(key, item.routes);
//         if (entry) break;
//       }
//     }
//
//     return entry;
//   }
//
//   /**
//    * renderTitle
//    * @param name
//    * @param icon
//    * @return {*}
//    */
//   static renderTitle({ name, icon }) {
//     return (
//       <Tooltip title={name} placement="right">
//         {icon ? <img src={icon} className={styles.MenuIcon} alt="" /> : null}
//         <span className={styles.MenuIconText}>{name}</span>
//       </Tooltip>
//     );
//   }
//
//   /**
//    * getPathBySelectKey
//    * @param path
//    * @param routes
//    * @param selectKey
//    */
//   static getPathBySelectKey({ path, routes, selectKey }) {
//     for (let i = 0; i < routes.length; i++) {
//       const item = routes[i];
//
//       // eslint-disable-next-line no-continue
//       if ('redirect' in item) continue;
//
//       const keys = [];
//
//       // 通过路由中定义的path生成正则表达式
//       const reg = pathToRegexp(item.path, keys, {
//         sensitive: false, // When true the route will be case sensitive. (default: false)
//         strict: false, // When false the trailing slash is optional. (default: false)
//         end: false, // When false the path will match at the beginning. (default: true)
//         delimiter: '/', // Set the default delimiter for repeat parameters. (default: '/')
//       });
//
//       if (reg.test(selectKey)) {
//         path.push(item);
//       }
//
//       if (item.routes) {
//         BasicLayout.getPathBySelectKey({ path, routes: item.routes, selectKey });
//       }
//     }
//   }
//
//   /**
//    * loopRoutes
//    * @param defaultOpenKeys
//    * @param defaultSelectedKeys
//    * @param routes
//    */
//   static loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes }) {
//     const { pathname } = window.location;
//     for (let i = 0; i < routes.length; i++) {
//       const route = routes[i];
//
//       if (pathname.indexOf(route.path) !== -1) {
//         if (
//           route.routes &&
//           route.routes.length &&
//           route.routes.filter((t) => t.hide).length !== route.routes.length
//         ) {
//           defaultOpenKeys.push({
//             path: route.path,
//             name: route.name,
//           });
//           BasicLayout.loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes: route.routes });
//         } else {
//           if (pathname === route.path) {
//             // 如果是hide，找到第一个不是hide的route
//             if ('hide' in route && route.hide) {
//               const firstIncludeRoute = routes
//                   .filter((t) => !('redirect' in t))
//                   .find((r) => (!('hide' in r) || !r.hide) && pathname.indexOf(r.path) !== -1);
//
//               if (firstIncludeRoute) {
//                 defaultSelectedKeys.push({
//                   path: firstIncludeRoute.path,
//                   name: firstIncludeRoute.name,
//                 });
//               }
//             } else {
//               defaultSelectedKeys.push({
//                 path: route.path,
//                 name: route.name,
//               });
//             }
//           }
//         }
//       }
//     }
//   }
//
//   /**
//    * renderMenuItem
//    * @param routes
//    * @return {any[]}
//    */
//   renderMenuItem(routes = []) {
//     return routes
//       .filter((r) => {
//         if ('hide' in r && r.hide) return false;
//
//         if (!r.redirect) {
//           if (r.authority && r.authority.length) {
//             return isAuthority(r.authority, this.state.authorized);
//           }
//           return true;
//         }
//         return false;
//       })
//       .map((r) => {
//         if (
//           r.routes &&
//           r.routes.length &&
//           r.routes.filter((t) => t.hide).length !== r.routes.length
//         ) {
//           return (
//             <SubMenu title={BasicLayout.renderTitle(r)} key={r.path}>
//               {this.renderMenuItem(r.routes)}
//             </SubMenu>
//           );
//         }
//         return (
//           <Menu.Item key={r.path}>
//             <Link to={r.path}>{BasicLayout.renderTitle(r)}</Link>
//           </Menu.Item>
//         );
//       });
//   }
//
//   // renderMenuBar() {
//   //   return (
//   //     <div className={styles.MenuBar}>
//   //       <i
//   //         className="icon iconfont iconbuoumaotubiao09"
//   //         onClick={() => {
//   //           this.setState({
//   //             isMenuCollapse: !this.state.isMenuCollapse,
//   //           });
//   //         }}
//   //       />
//   //     </div>
//   //   );
//   // }
//
//   /**
//    * renderMenu
//    * @param defaultSelectedKeys
//    * @param defaultOpenKeys
//    * @return {*}
//    */
//   renderMenu({ defaultSelectedKeys, defaultOpenKeys }) {
//     const { routes = [] } = this.props;
//
//     return (
//       <Menu
//         className={styles.Menu}
//         selectedKeys={defaultSelectedKeys.map((t) => t.path)}
//         openKeys={defaultOpenKeys.map((t) => t.path)}
//         onOpenChange={(openKeys) => {
//           this.setState({
//             openKeys: openKeys.map((key) => BasicLayout.fillKey(key, routes)),
//           });
//         }}
//         onSelect={({ selectedKeys }) => {
//           this.setState({
//             selectedKeys: selectedKeys.map((key) => BasicLayout.fillKey(key, routes)),
//           });
//         }}
//         mode="inline"
//         theme="dark"
//       >
//         {/* {this.renderMenuBar()} */}
//         {this.renderMenuItem(routes)}
//       </Menu>
//     );
//   }
//
//   /**
//    * renderBreadcrumb
//    // * @param defaultSelectedKeys
//    // * @param defaultOpenKeys
//    * @return {*}
//    */
//   renderBreadcrumb() {
//     const { name, routes } = this.props;
//
//     const selectKey = window.location.pathname;
//
//     const path = [];
//     BasicLayout.getPathBySelectKey({
//       path,
//       routes,
//       selectKey,
//     });
//
//     const paths = path.filter((t) => !t.redirect);
//
//     return (
//       <div className={styles.BreadcrumbWrap}>
//         <Breadcrumb separator="/">
//           <Breadcrumb.Item>{name}</Breadcrumb.Item>
//           {paths.map((t, index) => (
//             <Breadcrumb.Item key={t.path}>
//               {index !== paths.length - 1 ? <Link to={t.path}>{t.name}</Link> : t.name}
//             </Breadcrumb.Item>
//           ))}
//         </Breadcrumb>
//       </div>
//     );
//   }
//
//   /**
//    * getDefault
//    * @return {{defaultOpenKeys: Array, defaultSelectedKeys: Array}}
//    */
//   getDefault() {
//     const { routes = [] } = this.props;
//     const { openKeys, selectedKeys } = this.state;
//     const defaultSelectedKeys = [];
//     const defaultOpenKeys = [];
//     BasicLayout.loopRoutes({
//       defaultOpenKeys,
//       defaultSelectedKeys,
//       routes: routes.filter((t) => !t.redirect),
//     });
//
//     return {
//       defaultSelectedKeys: selectedKeys.length ? selectedKeys : defaultSelectedKeys,
//       defaultOpenKeys: openKeys.length ? openKeys : defaultOpenKeys,
//     };
//   }
//
//   render() {
//     const { defaultSelectedKeys, defaultOpenKeys } = this.getDefault();
//     const { isMenuCollapse } = this.state;
//
//     return (
//       <div className={styles.BasicLayout}>
//         <div
//           className={classNames(styles.Fixed, styles.Sider, isMenuCollapse ? styles.Collapse : '')}
//         >
//           {this.renderMenu({
//             defaultSelectedKeys,
//             defaultOpenKeys,
//           })}
//         </div>
//         <div className={styles.Auto}>
//           {this.renderBreadcrumb({
//             defaultSelectedKeys,
//             defaultOpenKeys,
//           })}
//           <div className={styles.Auto}>{this.props.children}</div>
//           <div className={styles.FooterWrap}>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// BasicLayout.propTypes = {
//   routes: PropTypes.array,
//   name: PropTypes.string,
// };
//
// BasicLayout.defaultProps = {
//   routes: [],
//   name: '',
// };
//
// export default BasicLayout;

import { Decorators, Dict } from '@baifendian/adhere';
import { Link } from '@ctsj/router';
import { Breadcrumb, Menu, Tooltip } from 'antd';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import React from 'react';
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
  state = {
    authorized: [],
    isMenuCollapse: false,

    selectedKeys: [],
    openKeys: [],
  };

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
    const { pathname } = window.location;
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

  async componentDidMount() {
    this.setState({
      authorized: await Dict.value.SystemAuthorized.value,
    });
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
    const { routes = [] } = this.props;

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
    const { name, routes } = this.props;

    const selectKey = window.location.pathname;

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
   * getDefault
   * @return {{defaultOpenKeys: Array, defaultSelectedKeys: Array}}
   */
  getDefault() {
    const { routes = [] } = this.props;
    const { openKeys, selectedKeys } = this.state;
    const defaultSelectedKeys = [];
    const defaultOpenKeys = [];
    BasicLayout.loopRoutes({
      defaultOpenKeys,
      defaultSelectedKeys,
      routes: routes.filter((t) => !t.redirect),
    });

    return {
      defaultSelectedKeys: selectedKeys.length ? selectedKeys : defaultSelectedKeys,
      defaultOpenKeys: openKeys.length ? openKeys : defaultOpenKeys,
    };
  }

  render() {
    const { defaultSelectedKeys, defaultOpenKeys } = this.getDefault();
    const { isMenuCollapse } = this.state;

    return (
      <div className={styles.BasicLayout}>
        <div
          className={classNames(styles.Fixed, styles.Sider, isMenuCollapse ? styles.Collapse : '')}
        >
          {this.renderMenu({
            defaultSelectedKeys,
            defaultOpenKeys,
          })}
        </div>
        <div className={styles.Auto}>
          {this.renderBreadcrumb({
            defaultSelectedKeys,
            defaultOpenKeys,
          })}
          <div className={styles.Auto}>{this.props.children}</div>
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
