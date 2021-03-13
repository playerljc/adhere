import faker from 'faker';

import { Util } from '@baifendian/adhere';

const data = [];
data.length = 100;
data.fill(0);

export default {
  total: data.length,
  list: data.map(() => ({
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    sex: `${Util.generatorRandom(0, 1)}`,
    homeTown: faker.address.city(),
    birthday: new Date().getTime(),
    deptName: faker.company.companyName(),
    height: faker.random.number(),
    width: faker.random.number(),
  })),
};
