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

const educations = ['小学', '初中', '高中', '大专', '本科', '硕士', '博士'];
const nations = ['汉族', '回族', '满族', '蒙古族', '藏族', '维吾尔族', '壮族', '苗族'];
const positions = ['工程师', '设计师', '产品经理', '运营专员', '销售经理', '人事专员', '财务主管', '项目经理'];

const createUserRecord = () => ({
  id: Mockjs.mock('@guid'),
  name: Mockjs.mock('@cname'),
  sex: `${Util.generatorRandom(0, 1)}`,
  age: Mockjs.mock('@integer(18, 65)'),
  homeTown: Mockjs.mock('@city'),
  address: Mockjs.mock('@county(true)'),
  birthday: new Date(Mockjs.mock('@date("yyyy-MM-dd")')).getTime(),
  deptName: Mockjs.mock('@ctitle(3, 5)') + '部',
  height: Mockjs.mock('@float(150, 190, 1, 2)'),
  width: Mockjs.mock('@float(40, 100, 1, 2)'),
  email: Mockjs.mock('@email'),
  phone: Mockjs.mock(/^1[3-9]\d{9}$/),
  nation: nations[Util.generatorRandom(0, nations.length - 1)],
  education: educations[Util.generatorRandom(0, educations.length - 1)],
  company: Mockjs.mock('@ctitle(4, 8)') + '科技有限公司',
  position: positions[Util.generatorRandom(0, positions.length - 1)],
  salary: Mockjs.mock('@integer(5000, 50000)'),
  remark: Mockjs.mock('@csentence(5, 20)'),
});

const dataSource = Array.from({ length: 500 }).map(() => createUserRecord());

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
    current: params.page,
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
