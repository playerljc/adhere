import { Ajax } from '@baifendian/adhere';

const request = new Ajax('');

const data = require('../mock.js').default;

export const fetchList = (() => {
  return {
    call: ({ page, limit }) => {
      const clone = JSON.parse(JSON.stringify(data));

      const res = {
        code: 200,
        data: {
          list: clone.data.list.slice((page - 1) * limit, page * limit),
          totalCount: clone.data.total,
        },
      };

      return request.get({
        path: res,
        mock: true,
        loading: {
          show: false,
        },
      });
    },
    defaultResult: () => ({
      totalCount: 0,
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
