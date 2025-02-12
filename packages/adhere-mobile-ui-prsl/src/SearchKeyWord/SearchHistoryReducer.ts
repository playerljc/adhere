import { SearchHistoryAction, SearchHistoryData } from '../types';

export default (searchKeyWordHistoryMaxSize: number) =>
  function reducer(draft: SearchHistoryData, action: SearchHistoryAction) {
    switch (action.type) {
      case 'add': {
        if (action.addKw && draft.every((t) => t.kw !== action.addKw)) {
          if (draft.length === searchKeyWordHistoryMaxSize) {
            draft.pop();
          }

          draft.unshift({
            id: `${new Date().getTime()}`,
            kw: action.addKw,
          });
        }

        return draft;
      }

      case 'remove': {
        if (action.removeId) {
          draft.splice(
            draft.findIndex((t) => t.id === action.removeId),
            1,
          );
        }

        return draft;
      }

      case 'list':
        return action.list;
    }
  };
