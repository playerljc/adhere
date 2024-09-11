import faker from 'faker';

import { Util } from '@baifendian/adhere';

// const data = [];
// data.length = 50;
// data.fill(0);

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

const data = Array.from({ length: 100 }).map((t) => ({
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

export default (params) => ({
  code: 200,
  data: {
    totalCount: data.length,
    list: data.slice(
      (params.page - 1) * params.limit,
      params.page * params.limit,
    ) /*data.map(() => ({
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
    }))*/,
  },
});
