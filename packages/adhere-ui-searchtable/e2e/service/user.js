import faker from 'faker';

import { Ajax, Util } from '@baifendian/adhere';

const request = new Ajax('');

const data = require('../mock.js').default;

// const data = Array.from({ length: 100 }).map((t) => ({
//   id: faker.random.uuid(),
//   name: faker.internet.userName(),
//   sex: `${Util.generatorRandom(0, 1)}`,
//   homeTown: faker.address.city(),
//   address: faker.address.city(),
//   birthday: new Date().getTime(),
//   deptName: faker.company.companyName(),
//   height: faker.random.number(),
//   width: faker.random.number(),
// }));

export const fetchList = (() => {
  return {
    call: (params) => {
      const _localAddDataMap = params._localAddDataMap;

      const addCount = Array.from(_localAddDataMap.values()).flat().length;

      const res = data(params);

      const pages = res.data?.totalCount / params.limit;

      const invalidate = Array.from(_localAddDataMap.keys()).filter((page) => page > pages);

      res.data.totalCount += addCount;

      const addListByPage = _localAddDataMap.get(params.page) ?? [];

      debugger;
      res.data.list = [
        ...addListByPage,
        ...res.data.list.slice(0, res.data.list.length - addListByPage.length),
      ];

      /**
       * data.slice((params.page - 1) * params.limit, params.page * params.limit)
       */
      return request.get({
        path: res,
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
