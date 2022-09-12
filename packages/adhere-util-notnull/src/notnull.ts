import Util from '@baifendian/adhere-util';

/**
 * createProxy
 * @param target
 * @return Object
 */
function createProxy(target) {
  if (Util.isEmpty(target)) {
    target = {};
  }

  // 只有对象和数组才能进行代理
  if (!Util.isObject(target) && !Util.isArray(target)) return target;

  // 创建代理
  let proxy = new Proxy(target, {
    get(target, p, receiver) {
      let value = target[p];

      if (Util.isEmpty(value)) {
        value = {};

        target[p] = createProxy(value);
      }

      return Reflect.get(target, p, receiver);
    },
    set(target, key, value, receiver) {
      if (Util.isEmpty(value)) {
        value = {};
      }

      // 是数组
      if (Util.isArray(target)) {
        // 数组的原始长度
        const srcLength = target.length;

        let result = Reflect.set(target, key, value, receiver);

        // 数组的当前长度
        const targetLength = target.length;

        // 数组是删除
        if (targetLength < srcLength) {
          // console.log('删除', `key:${key}`, `value:${value}`);
        }
        // 数组是添加
        else if (targetLength > srcLength) {
          // console.log('添加', `key:${key}`, `value:${value}`);

          // 如果可以则会给value继续创建代理
          if (Util.isObject(value) || Util.isArray(value)) {
            value = createProxy(value);
            result = Reflect.set(target, key, value, receiver);
          }
        }
        // 数组修改
        else {
          // console.log('修改', `key:${key}`, `value:${value}`);

          // 如果可以则会给value继续创建代理
          if (Util.isObject(value) || Util.isArray(value)) {
            value = createProxy(value);
            result = Reflect.set(target, key, value, receiver);
          }
        }
      }

      // 是对象
      if (Util.isObject(target)) {
        value = createProxy(value);
      }

      return Reflect.set(target, key, value, receiver);
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
