import { Ajax } from '@baifendian/adhere';

import { fetchData, fetchTreeData } from '../mock';

const request = new Ajax('');

export const fetchList = (() => {
  return {
    call: (params) => {
      // const _localAddDataMap = params._localAddDataMap;
      //
      // const addCount = Array.from(_localAddDataMap.values()).flat().length;
      //
      // const res = data(params);
      //
      // const pages = res.data?.totalCount / params.limit;
      //
      // const invalidate = Array.from(_localAddDataMap.keys()).filter((page) => page > pages);
      //
      // res.data.totalCount += addCount;
      //
      // const addListByPage = _localAddDataMap.get(params.page) ?? [];
      //
      // res.data.list = [
      //   ...addListByPage,
      //   ...res.data.list.slice(0, res.data.list.length - addListByPage.length),
      // ];
      //
      // /**
      //  * data.slice((params.page - 1) * params.limit, params.page * params.limit)
      //  */
      // return request.get({
      //   path: res,
      //   mock: true,
      //   loading: {
      //     show: false,
      //   },
      // }).promise;

      return request.get({
        path: fetchData(params),
        mock: true,
        loading: {
          show: false,
        },
      }).promise;
    },
    defaultResult: () => ({
      total: 0,
      list: [],
    }),
  };
})();

export const fetchTreeList = (() => {
  return {
    call: (params) => {
      return request.get({
        path: fetchTreeData(params),
        mock: true,
        loading: {
          show: false,
        },
      }).promise;
    },
    defaultResult: () => ({
      total: 0,
      list: [],
    }),
  };
})();

export default {
  codeKey: 'code',
  codeSuccessKey: 200,
  dataKey: 'data',
  messageKey: 'message',
  name: 'user',
};
