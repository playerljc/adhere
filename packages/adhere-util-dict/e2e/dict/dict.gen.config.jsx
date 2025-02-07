import Dict from '../../src';

const { genModuleDict } = Dict;

const { names, values } = genModuleDict({
  dict1: {
    isStatic: true,
    handler: () => ({
      a: 1,
      b: 2,
    }),
  },
  dict2: {
    isStatic: true,
    handler: () => [
      {
        label: '男',
        value: '1',
      },
      {
        label: '女',
        value: '2',
      },
    ],
  },
  dict3: {
    handler: () =>
      Promise.resolve([
        {
          label: '男',
          value: '1',
        },
        {
          label: '女',
          value: '2',
        },
      ]),
  },
  dict4: {
    handler: () => (a, b) => a + b,
  },
  dict5: {
    handler: () => () =>
      Promise.resolve({
        a: 1,
        b: 2,
      }),
  },
  dict6: {
    isStatic: true,
    handler: function ({ names, values }) {
      return [...[{ label: '1', value: 1 }], ...values.dict2.value];
    },
  },
});

export { names, values };
