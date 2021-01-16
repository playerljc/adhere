const target = {};

const funParams = new Map();

/**
 * diffParams
 * @param preArgArray - {Array}
 * @param curArgArray - {Array}
 * @return {boolean}
 */
function diffParams(preArgArray: Array<any>, curArgArray: Array<any>): boolean {
  if (preArgArray.length !== curArgArray.length) return false;

  let flag = false;

  for (let i = 0; i < preArgArray.length; i++) {
    if (preArgArray[i] !== curArgArray[i]) {
      flag = true;

      break;
    }
  }

  return !flag;
}

/**
 * CreateFunProxy
 * @param fun - {Function}
 * @param property - {String}
 * @return {Proxy}
 */
function CreateFunProxy(fun: Function, property: string) {
  return new Proxy(fun, {
    apply(funTarget, thisArg, argArray) {
      const context = thisArg || window;

      let result = null;

      const entry = funParams.get(property);

      if (!entry) {
        result = funTarget.apply(context, argArray);

        funParams.set(property, {
          argArray,
          result,
        });
      } else if (!diffParams(entry.argArray, argArray)) {
        result = funTarget.apply(context, argArray);

        funParams.set(property, {
          argArray,
          result,
        });
      } else {
        result = entry.result;
      }

      return result;
    },
  });
}

const ins = {
  handlers: {},
  value: new Proxy(target, {
    get(t: Object, p: string, receiver) {
      // 如果p属性没在t中
      if (!(p in t)) {
        const handler = ins.handlers[p];

        // 返回值 - 一般都不是函数
        let value = handler();

        // 如果返回值是Function
        if (value instanceof Function) {
          value = CreateFunProxy(value, p);
        }

        receiver[p] = value;
      }
      return Reflect.get(target, p, receiver);
    },
  }),
};

export default ins;
