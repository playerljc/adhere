const depts = ['研发中心', '产品部', '设计部', '市场部', '财务部', '人力资源部'];
const educations = ['高中', '大专', '本科', '硕士', '博士'];
const nations = ['汉族', '回族', '满族', '蒙古族', '藏族'];
const companies = ['百菲特', '星辰科技', '云海信息', '智联数据', '前沿软件'];
const positions = ['工程师', '高级工程师', '产品经理', '设计师', '运营专员', '分析师'];

let idSeed = 1;

export const createUserRecord = () => {
  const id = idSeed++;
  return {
    key: `${id}`,
    id,
    name: `用户${id}`,
    sex: id % 2,
    age: 20 + (id % 40),
    height: 150 + (id % 50),
    width: 45 + (id % 40),
    birthday: `19${70 + (id % 30)}-${String((id % 12) + 1).padStart(2, '0')}-${String(
      (id % 28) + 1,
    ).padStart(2, '0')}`,
    homeTown: `城市${(id % 20) + 1}`,
    address: `某省某市某区街道${id}号`,
    deptName: depts[id % depts.length],
    email: `user${id}@example.com`,
    phone: `138${String(id).padStart(8, '0')}`,
    nation: nations[id % nations.length],
    education: educations[id % educations.length],
    company: companies[id % companies.length],
    position: positions[id % positions.length],
    salary: 8000 + (id % 20) * 1000,
    remark: `备注信息-${id}`,
  };
};

export const createTreeUserRecord = (depth = 0, maxDepth = 2) => {
  const record = createUserRecord();
  if (depth < maxDepth) {
    record.children = Array.from({ length: 2 }).map(() =>
      createTreeUserRecord(depth + 1, maxDepth),
    );
  }
  return record;
};

export const flatDataSource = Array.from({ length: 500 }).map(() => createUserRecord());

export const treeDataSource = Array.from({ length: 30 }).map(() => createTreeUserRecord());
