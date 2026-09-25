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
 * @description 路由监听函数：处理 PUSH、REPLACE 和 POP 操作
 */
const Listener = function (history, action) {
  const location = history.location;

  function handlePush() {
    const pathname: string = location.pathname;

    if (historyStack.length === 0) {
      historyStack.push(pathname);
      return;
    }

    const top = historyStack[historyStack.length - 1];

    // 不是一个体系中的：清掉查询缓存，并把落地页作为新的栈起点。
    // 不能把栈置空。卸载阶段若看到 getLength()===0，会把刚离开的页面又写回缓存。
    if (!hasCommonPathRelation(top, pathname)) {
      clearAll();
      historyStack = [pathname];
      return;
    }

    historyStack.push(pathname);
  }

  // 菜单跳转是 PUSH；布局 Tab 切换是 REPLACE。两者都要立刻区分是否还在同一路由体系。
  // POP 延后到下一页构造函数里执行，先用缓存初始化再处理栈。
  const navigationAction = action.action;

  if (navigationAction === 'PUSH' || navigationAction === 'REPLACE') {
    handlePush();
  } else if (navigationAction === 'POP') {
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
