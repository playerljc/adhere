import faker from 'faker';

import { Util } from '@baifendian/adhere';

const data = [];
data.length = 300;
data.fill(0);

export const oneData = {
  code: 200,
  data: {
    total: 1,
    list: [
      {
        id: faker.random.uuid(),
        name: faker.internet.userName(),
        sex: `${Util.generatorRandom(0, 1)}`,
        homeTown: faker.address.city(),
        birthday: new Date().getTime(),
        deptName: faker.company.companyName(),
        height: faker.random.number(),
        width: faker.random.number(),
      },
    ],
  },
};

export default {
  code: 200,
  data: {
    total: data.length,
    list: data.map(() => ({
      id: faker.random.uuid(),
      name: faker.internet.userName(),
      sex: `${Util.generatorRandom(0, 1)}`,
      homeTown: faker.address.city(),
      address: faker.address.city(),
      birthday: new Date().getTime(),
      deptName: faker.company.companyName(),
      height: faker.random.number(),
      width: faker.random.number(),
    })),
  },
};
