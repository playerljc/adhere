import { SearchAndPaginParamsMemo as StateSearchAndPaginParamsMemo } from '../../ProSearchStateTable';
import { SearchAndPaginParamsMemo } from '../../ProSearchTable';
import { hasCommonPathRelation } from '../../Util';

let historyStack: string[] = [];
let codeStack: any = [];

/**
 * clearSearAndPaginParamsByPathname
 * @description 清除指定路径的分页与搜索参数（针对两个 Memo 实例）
 */
function clearSearAndPaginParamsByPathname(pathname) {
  SearchAndPaginParamsMemo.deleteByPath(pathname);
  StateSearchAndPaginParamsMemo.deleteByPath(pathname);
}

/**
 * clearAll
 */
function clearAll() {
  SearchAndPaginParamsMemo.clearAll();
  StateSearchAndPaginParamsMemo.clearAll();
}

/**
 * Listener
 * @description 路由监听函数：处理 PUSH 和 POP 操作
 */
const Listener = function (history, action) {
  const location = history.location;

  function handlePush() {
    const pathname: string = location.pathname;

    if (historyStack.length === 0) {
      historyStack.push(pathname);
    } else {
      const top = historyStack[historyStack.length - 1];

      // 不是一个体系中的
      if (!hasCommonPathRelation(top, pathname)) {
        clearAll();

        historyStack = [];
      } else {
        historyStack.push(pathname);
      }
    }
  }

  if (action.action === 'PUSH') {
    handlePush();
  } else if (action.action === 'POP') {
    codeStack.push(handlePush);
  }
};

/**
 * getCode
 * @description 获取最近保存的回调函数（用于处理 POP）
 */
Listener.getCode = function () {
  return codeStack.pop();
};

/**
 * getTop
 */
Listener.getTop = function () {
  if (historyStack.length === 0) {
    return null;
  }

  return historyStack[historyStack.length - 1];
};

/**
 * getLength
 */
Listener.getLength = function () {
  return historyStack.length;
};

export default Listener;

//# sourceMappingURL=routeListen.js.map
