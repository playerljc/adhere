import { SearchHistoryAction, SearchHistoryData } from '../types';

export default (searchKeyWordHistoryMaxSize: number) =>
  function reducer(draft: SearchHistoryData, action: SearchHistoryAction) {
    switch (action.type) {
      case 'add': {
        if (action.addKw && draft.every((t) => t.kw !== action.addKw)) {
          // 用 >= 保证 maxSize 动态变小后也能收敛到上限内
          while (draft.length >= searchKeyWordHistoryMaxSize && draft.length > 0) {
            draft.pop();
          }

          draft.unshift({
            id: `${Date.now()}-${action.addKw}`,
            kw: action.addKw,
          });
        }

        return draft;
      }

      case 'remove': {
        if (action.removeId) {
          const removeIndex = draft.findIndex((t) => t.id === action.removeId);

          // findIndex 为 -1 时 splice(-1, 1) 会误删最后一条
          if (removeIndex !== -1) {
            draft.splice(removeIndex, 1);
          }
        }

        return draft;
      }

      case 'list':
        return action.list;
    }
  };
