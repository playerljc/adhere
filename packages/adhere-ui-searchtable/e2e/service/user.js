import { Ajax } from '@baifendian/adhere';

const request = new Ajax('');

const data = require('../mock.js').default;

export const fetchList = (() => {
  return {
    call: () => {
      return request.get({
        path: JSON.parse(JSON.stringify(data)),
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
