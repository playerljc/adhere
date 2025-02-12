import Util from '../../util';

/**
 * getPathName
 * @description 不同路由模式下获取pathname的方法
 * @return {string}
 */
export const getPathName = () => {
  const router = Util.getEvnVars().router;

  const routerMode = router || 'browser';

  let pathname = '';

  if (routerMode === 'browser') {
    pathname = window.location.pathname;
  } else if (routerMode === 'hash') {
    const hash = window.location.hash;
    if (hash.lastIndexOf('?') !== -1) {
      pathname = hash.substring(1, hash.lastIndexOf('?'));
    } else {
      pathname = hash.substring(1);
    }
  }

  if (CustomEvnVars.publicPath !== '/') {
    pathname = pathname.replace(`${CustomEvnVars.publicPath}/`, '');
  }

  return pathname;
};

/**
 * getSearch
 * @description 不同路由模式下获取search的方法
 * @return {string}
 */
export const getSearch = () => {
  const router = Util.getEvnVars().router;

  const routerMode = router || 'browser';

  if (routerMode === 'browser') {
    return window.location.search;
  } else if (routerMode === 'hash') {
    const hash = window.location.hash;

    const index = hash.lastIndexOf('?');
    if (index !== -1) {
      return hash.substring(index);
    }

    return '';
  }
};
