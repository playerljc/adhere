import { Ajax } from '@baifendian/adhere';

const request = new Ajax('');

export const fetchList = (() => {
  return {
    call: () => {
      return request.get({
        path: require('../mock.js').default,
        mock: true,
        loading: {
          show: false,
        },
      });
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
