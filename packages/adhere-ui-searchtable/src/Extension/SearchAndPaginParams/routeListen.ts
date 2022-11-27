import { SearchAndPaginParamsMemo as StateSearchAndPaginParamsMemo } from '../../ProSearchStateTable';
import { SearchAndPaginParamsMemo } from '../../ProSearchTable';

let historyStack: string[] = [];

/**
 * clearSearAndPaginParamsByPathname
 * @description 清除查询条件根据pathname
 * @param pathname
 */
function clearSearAndPaginParamsByPathname(pathname) {
  let findIndex = SearchAndPaginParamsMemo.findIndexByPath(pathname);
  if (findIndex !== -1) {
    SearchAndPaginParamsMemo.deleteByIndex(findIndex);
  }

  findIndex = StateSearchAndPaginParamsMemo.findIndexByPath(pathname);
  if (findIndex !== -1) {
    StateSearchAndPaginParamsMemo.deleteByIndex(findIndex);
  }
}

export default ({ location, action }) => {
  const { pathname } = location;

  const findIndex = historyStack.lastIndexOf(pathname);
  // 没找到
  if (findIndex === -1) {
    // 清除查询条件
    clearSearAndPaginParamsByPathname(pathname);
    historyStack.push(pathname);
  }
  // 找到了
  else {
    const pathArr = historyStack.slice(findIndex + 1);

    // 1 2 1
    // 之间只有一个页面的路径
    if (pathArr.length === 1) {
      // pathArr[0] /system/task/list/view
      // pathname   /system/task/list/ 当前

      if (!pathArr[0].startsWith(pathname)) {
        // 清除查询条件
        clearSearAndPaginParamsByPathname(pathname);
      }
    } else {
      // 清除查询条件
      clearSearAndPaginParamsByPathname(pathname);
    }

    // 都需要清空路径
    historyStack = historyStack.slice(0, findIndex);
    historyStack.push(pathname);
  }
};
