import { Ajax } from '@baifendian/adhere';

import { fetchData, fetchSSQListData, fetchTreeListData } from '../mock';

const request = new Ajax('');

export const fetchList = (() => {
  return {
    call: (params) => {
      return request.get({
        path: fetchData(params),
        mock: true,
        loading: {
          show: false,
        },
      }).then((res) => res.promise);
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
        path: fetchTreeListData(params),
        mock: true,
        loading: {
          show: false,
        },
      }).then((res) => res.promise);
    },
    defaultResult: () => ({
      total: 0,
      list: [],
    }),
  };
})();

export const fetchSSQList = (() => {
  return {
    call: (params) => {
      return request.get({
        path: fetchSSQListData(params),
        mock: true,
        loading: {
          show: false,
        },
      }).then((res) => res.promise);
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
};
