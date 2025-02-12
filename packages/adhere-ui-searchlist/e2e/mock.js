import faker from 'faker';

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
        avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
        subTitle: faker.company.companyName(),
        title: faker.internet.userName(),
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        // name: faker.internet.userName(),
        // sex: `${Util.generatorRandom(0, 1)}`,
        // homeTown: faker.address.city(),
        // birthday: new Date().getTime(),
        // deptName: faker.company.companyName(),
        // height: faker.random.number(),
        // width: faker.random.number(),
        // picture: 'https://randomuser.me/api/portraits/men/66.jpg',
        // description:
        //   'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        // content:
        //   'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      },
    ],
  },
};

export default {
  code: 200,
  data: {
    total: data.length,
    list: data.map((v, index) => ({
      id: faker.random.uuid(),
      // avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
      // subTitle: faker.company.companyName(),
      // title: faker.internet.userName(),
      // description:
      //   'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      // content:
      //   'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',

      name: faker.company.companyName(),
      type: ['directory', 'doc', 'video', 'audio', 'image', 'compress', 'other'][index % 7],
      size: faker.random.number(),
      modifyTime: Date.now(),
      // id: faker.random.uuid(),
      // name: faker.internet.userName(),
      // sex: `${Util.generatorRandom(0, 1)}`,
      // homeTown: faker.address.city(),
      // address: faker.address.city(),
      // birthday: new Date().getTime(),
      // deptName: faker.company.companyName(),
      // height: faker.random.number(),
      // width: faker.random.number(),
      // picture: 'https://randomuser.me/api/portraits/men/66.jpg',
      // description:
      //   'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      // content:
      //   'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    })),
  },
};
