import faker from 'faker';

import { Util } from '@baifendian/adhere';
import Mock from '@baifendian/adhere-mock';

// const dataSource = [];
// dataSource.length = 50;
// dataSource.fill(0);

const { Province, City, County } = Mock;

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
  // children: Array.from({ length: 2 }).map((t) => ({
  //   id: faker.random.uuid(),
  //   name: faker.internet.userName(),
  //   sex: `${Util.generatorRandom(0, 1)}`,
  //   homeTown: faker.address.city(),
  //   address: faker.address.city(),
  //   birthday: new Date().getTime(),
  //   deptName: faker.company.companyName(),
  //   height: faker.random.number(),
  //   width: faker.random.number(),
  //   children: Array.from({ length: 2 }).map((t) => ({
  //     id: faker.random.uuid(),
  //     name: faker.internet.userName(),
  //     sex: `${Util.generatorRandom(0, 1)}`,
  //     homeTown: faker.address.city(),
  //     address: faker.address.city(),
  //     birthday: new Date().getTime(),
  //     deptName: faker.company.companyName(),
  //     height: faker.random.number(),
  //     width: faker.random.number(),
  //     children: Array.from({ length: 2 }).map((t) => ({
  //       id: faker.random.uuid(),
  //       name: faker.internet.userName(),
  //       sex: `${Util.generatorRandom(0, 1)}`,
  //       homeTown: faker.address.city(),
  //       address: faker.address.city(),
  //       birthday: new Date().getTime(),
  //       deptName: faker.company.companyName(),
  //       height: faker.random.number(),
  //       width: faker.random.number(),
  //       children: Array.from({ length: 2 }).map((t) => ({
  //         id: faker.random.uuid(),
  //         name: faker.internet.userName(),
  //         sex: `${Util.generatorRandom(0, 1)}`,
  //         homeTown: faker.address.city(),
  //         address: faker.address.city(),
  //         birthday: new Date().getTime(),
  //         deptName: faker.company.companyName(),
  //         height: faker.random.number(),
  //         width: faker.random.number(),
  //         children: Array.from({ length: 2 }).map((t) => ({
  //           id: faker.random.uuid(),
  //           name: faker.internet.userName(),
  //           sex: `${Util.generatorRandom(0, 1)}`,
  //           homeTown: faker.address.city(),
  //           address: faker.address.city(),
  //           birthday: new Date().getTime(),
  //           deptName: faker.company.companyName(),
  //           height: faker.random.number(),
  //           width: faker.random.number(),
  //           children: Array.from({ length: 2 }).map((t) => ({
  //             id: faker.random.uuid(),
  //             name: faker.internet.userName(),
  //             sex: `${Util.generatorRandom(0, 1)}`,
  //             homeTown: faker.address.city(),
  //             address: faker.address.city(),
  //             birthday: new Date().getTime(),
  //             deptName: faker.company.companyName(),
  //             height: faker.random.number(),
  //             width: faker.random.number(),
  //           })),
  //         })),
  //       })),
  //     })),
  //   })),
  // })),
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

export const fetchData = (params) => ({
  code: 200,
  data: {
    totalCount: dataSource.length,
    list: JSON.parse(JSON.stringify(dataSource)).slice(
      (params.page - 1) * params.limit,
      params.page * params.limit,
    ),
  },
});

export const fetchTreeData = (params) => ({
  code: 200,
  data: {
    totalCount: treeDataSource.length,
    list: JSON.parse(JSON.stringify(treeDataSource)).slice(
      (params.page - 1) * params.limit,
      params.page * params.limit,
    ),
  },
});

export const fetchSSQData = (params) => ({
  code: 200,
  data: {
    totalCount: ssqData.length,
    list: JSON.parse(JSON.stringify(ssqData)).slice(
      (params.page - 1) * params.limit,
      params.page * params.limit,
    ),
  },
});

export const fetchSListData = (params) => ({
  code: 200,
  data: {
    totalCount: Province.length,
    list: JSON.parse(JSON.stringify(Province)).slice(
      (params.page - 1) * params.limit,
      params.page * params.limit,
    ),
  },
});
