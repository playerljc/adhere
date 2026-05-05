// import faker from 'faker';
import Mockjs from 'mockjs';

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
        id: Mockjs.mock('@guid'),
        name: Mockjs.mock('@name'),
        sex: `${Util.generatorRandom(0, 1)}`,
        homeTown: Mockjs.mock('@name'),
        birthday: new Date().getTime(),
        deptName: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer'),
        width: Mockjs.mock('@integer'),
      },
    ],
  },
};

const dataSource = Array.from({ length: 100 }).map((t) => ({
  id: Mockjs.mock('@guid'),
  name: Mockjs.mock('@name'),
  // sex: `${Util.generatorRandom(0, 1)}`,
  // // homeTown: Mockjs.mock('@name'),
  // homeTown:
  //   '我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠我是一个粉刷匠',
  // address: Mockjs.mock('@name'),
  // birthday: new Date().getTime(),
  // deptName: Mockjs.mock('@name'),
  // height: Mockjs.mock('@integer'),
  // width: Mockjs.mock('@integer'),

  // name: '',
  sex: '',
  homeTown: '',
  address: '',
  birthday: undefined,
  deptName: '',
  height: undefined,
  width: undefined,

  // children: Array.from({ length: 2 }).map((t) => ({
  //   id: Mockjs.mock('@guid'),
  //   name: Mockjs.mock('@name'),
  //   sex: `${Util.generatorRandom(0, 1)}`,
  //   homeTown: Mockjs.mock('@name'),
  //   address: Mockjs.mock('@name'),
  //   birthday: new Date().getTime(),
  //   deptName: Mockjs.mock('@name'),
  //   height: Mockjs.mock('@integer'),
  //   width: Mockjs.mock('@integer'),
  //   children: Array.from({ length: 2 }).map((t) => ({
  //     id: Mockjs.mock('@guid'),
  //     name: Mockjs.mock('@name'),
  //     sex: `${Util.generatorRandom(0, 1)}`,
  //     homeTown: Mockjs.mock('@name'),
  //     address: Mockjs.mock('@name'),
  //     birthday: new Date().getTime(),
  //     deptName: Mockjs.mock('@name'),
  //     height: Mockjs.mock('@integer'),
  //     width: Mockjs.mock('@integer'),
  //     children: Array.from({ length: 2 }).map((t) => ({
  //       id: Mockjs.mock('@guid'),
  //       name: Mockjs.mock('@name'),
  //       sex: `${Util.generatorRandom(0, 1)}`,
  //       homeTown: Mockjs.mock('@name'),
  //       address: Mockjs.mock('@name'),
  //       birthday: new Date().getTime(),
  //       deptName: Mockjs.mock('@name'),
  //       height: Mockjs.mock('@integer'),
  //       width: Mockjs.mock('@integer'),
  //       children: Array.from({ length: 2 }).map((t) => ({
  //         id: Mockjs.mock('@guid'),
  //         name: Mockjs.mock('@name'),
  //         sex: `${Util.generatorRandom(0, 1)}`,
  //         homeTown: Mockjs.mock('@name'),
  //         address: Mockjs.mock('@name'),
  //         birthday: new Date().getTime(),
  //         deptName: Mockjs.mock('@name'),
  //         height: Mockjs.mock('@integer'),
  //         width: Mockjs.mock('@integer'),
  //         children: Array.from({ length: 2 }).map((t) => ({
  //           id: Mockjs.mock('@guid'),
  //           name: Mockjs.mock('@name'),
  //           sex: `${Util.generatorRandom(0, 1)}`,
  //           homeTown: Mockjs.mock('@name'),
  //           address: Mockjs.mock('@name'),
  //           birthday: new Date().getTime(),
  //           deptName: Mockjs.mock('@name'),
  //           height: Mockjs.mock('@integer'),
  //           width: Mockjs.mock('@integer'),
  //           children: Array.from({ length: 2 }).map((t) => ({
  //             id: Mockjs.mock('@guid'),
  //             name: Mockjs.mock('@name'),
  //             sex: `${Util.generatorRandom(0, 1)}`,
  //             homeTown: Mockjs.mock('@name'),
  //             address: Mockjs.mock('@name'),
  //             birthday: new Date().getTime(),
  //             deptName: Mockjs.mock('@name'),
  //             height: Mockjs.mock('@integer'),
  //             width: Mockjs.mock('@integer'),
  //           })),
  //         })),
  //       })),
  //     })),
  //   })),
  // })),
}));

const treeDataSource = Array.from({ length: 100 }).map((t) => ({
  id: Mockjs.mock('@guid'),
  name: Mockjs.mock('@name'),
  sex: `${Util.generatorRandom(0, 1)}`,
  homeTown: Mockjs.mock('@name'),
  address: Mockjs.mock('@name'),
  birthday: new Date().getTime(),
  deptName: Mockjs.mock('@name'),
  height: Mockjs.mock('@integer'),
  width: Mockjs.mock('@integer'),
  children: Array.from({ length: 2 }).map((t) => ({
    id: Mockjs.mock('@guid'),
    name: Mockjs.mock('@name'),
    sex: `${Util.generatorRandom(0, 1)}`,
    homeTown: Mockjs.mock('@name'),
    address: Mockjs.mock('@name'),
    birthday: new Date().getTime(),
    deptName: Mockjs.mock('@name'),
    height: Mockjs.mock('@integer'),
    width: Mockjs.mock('@integer'),
    children: Array.from({ length: 2 }).map((t) => ({
      id: Mockjs.mock('@guid'),
      name: Mockjs.mock('@name'),
      sex: `${Util.generatorRandom(0, 1)}`,
      homeTown: Mockjs.mock('@name'),
      address: Mockjs.mock('@name'),
      birthday: new Date().getTime(),
      deptName: Mockjs.mock('@name'),
      height: Mockjs.mock('@integer'),
      width: Mockjs.mock('@integer'),
      children: Array.from({ length: 2 }).map((t) => ({
        id: Mockjs.mock('@guid'),
        name: Mockjs.mock('@name'),
        sex: `${Util.generatorRandom(0, 1)}`,
        homeTown: Mockjs.mock('@name'),
        address: Mockjs.mock('@name'),
        birthday: new Date().getTime(),
        deptName: Mockjs.mock('@name'),
        height: Mockjs.mock('@integer'),
        width: Mockjs.mock('@integer'),
        children: Array.from({ length: 2 }).map((t) => ({
          id: Mockjs.mock('@guid'),
          name: Mockjs.mock('@name'),
          sex: `${Util.generatorRandom(0, 1)}`,
          homeTown: Mockjs.mock('@name'),
          address: Mockjs.mock('@name'),
          birthday: new Date().getTime(),
          deptName: Mockjs.mock('@name'),
          height: Mockjs.mock('@integer'),
          width: Mockjs.mock('@integer'),
          children: Array.from({ length: 2 }).map((t) => ({
            id: Mockjs.mock('@guid'),
            name: Mockjs.mock('@name'),
            sex: `${Util.generatorRandom(0, 1)}`,
            homeTown: Mockjs.mock('@name'),
            address: Mockjs.mock('@name'),
            birthday: new Date().getTime(),
            deptName: Mockjs.mock('@name'),
            height: Mockjs.mock('@integer'),
            width: Mockjs.mock('@integer'),
            children: Array.from({ length: 2 }).map((t) => ({
              id: Mockjs.mock('@guid'),
              name: Mockjs.mock('@name'),
              sex: `${Util.generatorRandom(0, 1)}`,
              homeTown: Mockjs.mock('@name'),
              address: Mockjs.mock('@name'),
              birthday: new Date().getTime(),
              deptName: Mockjs.mock('@name'),
              height: Mockjs.mock('@integer'),
              width: Mockjs.mock('@integer'),
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
