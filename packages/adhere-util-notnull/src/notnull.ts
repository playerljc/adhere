import Util from '@baifendian/adhere-util';

function createProxy(target) {
  if (Util.isEmpty(target)) {
    target = {};
  }

  // 只有对象和数组才能进行代理
  if (!Util.isObject(target) && !Util.isArray(target)) return target;

  let proxy = new Proxy(target, {
    get(target, p, receiver) {
      let value = target[p];

      if (Util.isEmpty(value)) {
        value = {};
      }

      if (Util.isArray(value) || Util.isObject(value)) {
        target[p] = createProxy(value);
      }

      return Reflect.get(target, p, receiver);
    },
  });

  // 继续进行迭代，迭代target的所有属性，为srcObj的所有属性都进行代理
  for (const p in target) {
    const objItem = target[p];
    if (Util.isObject(objItem) || Util.isArray(objItem)) {
      target[p] = createProxy(objItem);
    }
  }

  return proxy;
}

export default (target) => {
  return createProxy(target);
};
