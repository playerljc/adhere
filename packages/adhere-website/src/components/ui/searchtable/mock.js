import faker from 'faker';

import { Util } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';

const { Province, City, County } = Mock;

const dataSource = Array.from({ length: 100 }).map((t) => ({
  id: faker.random.uuid(),
  name: faker.internet.userName(),
  sex: `${Util.generatorRandom(0, 1)}`,
  homeTown: faker.address.city(),
  address: faker.address.city(),
  birthday: new Date().getTime(),
  deptName: faker.company.companyName(),
  height: faker.random.number(),
  width: faker.random.number(),
}));

const treeDataSource = Array.from({ length: 100 }).map((t) => ({
  id: faker.random.uuid(),
  name: faker.internet.userName(),
  sex: `${Util.generatorRandom(0, 1)}`,
  homeTown: faker.address.city(),
  address: faker.address.city(),
  birthday: new Date().getTime(),
  deptName: faker.company.companyName(),
  height: faker.random.number(),
  width: faker.random.number(),
  children: Array.from({ length: 2 }).map((t) => ({
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    sex: `${Util.generatorRandom(0, 1)}`,
    homeTown: faker.address.city(),
    address: faker.address.city(),
    birthday: new Date().getTime(),
    deptName: faker.company.companyName(),
    height: faker.random.number(),
    width: faker.random.number(),
    children: Array.from({ length: 2 }).map((t) => ({
      id: faker.random.uuid(),
      name: faker.internet.userName(),
      sex: `${Util.generatorRandom(0, 1)}`,
      homeTown: faker.address.city(),
      address: faker.address.city(),
      birthday: new Date().getTime(),
      deptName: faker.company.companyName(),
      height: faker.random.number(),
      width: faker.random.number(),
      children: Array.from({ length: 2 }).map((t) => ({
        id: faker.random.uuid(),
        name: faker.internet.userName(),
        sex: `${Util.generatorRandom(0, 1)}`,
        homeTown: faker.address.city(),
        address: faker.address.city(),
        birthday: new Date().getTime(),
        deptName: faker.company.companyName(),
        height: faker.random.number(),
        width: faker.random.number(),
        children: Array.from({ length: 2 }).map((t) => ({
          id: faker.random.uuid(),
          name: faker.internet.userName(),
          sex: `${Util.generatorRandom(0, 1)}`,
          homeTown: faker.address.city(),
          address: faker.address.city(),
          birthday: new Date().getTime(),
          deptName: faker.company.companyName(),
          height: faker.random.number(),
          width: faker.random.number(),
          children: Array.from({ length: 2 }).map((t) => ({
            id: faker.random.uuid(),
            name: faker.internet.userName(),
            sex: `${Util.generatorRandom(0, 1)}`,
            homeTown: faker.address.city(),
            address: faker.address.city(),
            birthday: new Date().getTime(),
            deptName: faker.company.companyName(),
            height: faker.random.number(),
            width: faker.random.number(),
            children: Array.from({ length: 2 }).map((t) => ({
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
          })),
        })),
      })),
    })),
  })),
}));

const ssqData = Province.map((t) => {
  return {
    ...t,
    children: City[t.id].map((city) => ({
      ...city,
      children: County[city.id],
    })),
  };
});

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

export const fetchData = (params) => ({
  code: 200,
  data: {
    totalCount: dataSource.length,
    list: dataSource.slice((params.page - 1) * params.limit, params.page * params.limit),
  },
});

export const fetchTreeListData = (params) => ({
  code: 200,
  data: {
    totalCount: treeDataSource.length,
    list: treeDataSource.slice((params.page - 1) * params.limit, params.page * params.limit),
  },
});

export const fetchSSQListData = (params) => ({
  code: 200,
  data: {
    totalCount: ssqData.length,
    list: ssqData.slice((params.page - 1) * params.limit, params.page * params.limit),
  },
});

const data = Array.from({ length: 300 }).map(() => 0);

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
