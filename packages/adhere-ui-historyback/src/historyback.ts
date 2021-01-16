export default (history, routePath = '/') => {
  if (document.referrer !== '') {
    window.history.go(-1);
  } else if (history && routePath) {
    history.replace(routePath || '/');
  }
};
