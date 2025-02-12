import { HistoryFunction } from './types';

const History: HistoryFunction = (history, routePath = '/') => {
  // if(typeof document === 'undefined') return;
  //
  // if ('referrer' in document) {
  //   if (document.referrer !== '') {
  //     window.history.go(-1);
  //   } else if (history && routePath) {
  //     history.replace(routePath || '/');
  //   }
  // } else {
  //   window.history.go(-1);
  // }

  if (/*!!window.history.length*/ window.history.length > 1) {
    window.history.back();
  } else {
    history.replace(routePath || '/');
  }
};

/**
 * historyBack 历史回退
 * @param history {History}
 * @param routePath {string}
 */
export default History;
