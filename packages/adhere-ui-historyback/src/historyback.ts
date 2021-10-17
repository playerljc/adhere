/**
 * historyBack 历史回退
 * @param history {History}
 * @param routePath {string}
 */
export default (history, routePath = '/') => {
  if ('referrer' in document) {
    if (document.referrer !== '') {
      window.history.go(-1);
    } else if (history && routePath) {
      history.replace(routePath || '/');
    }
  } else {
    window.history.go(-1);
  }
};
