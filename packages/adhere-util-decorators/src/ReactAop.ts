/**
 * aop - before和after
 * @param before
 * @param after
 */
export default function (before, after) {
  return function (target, property, desc) {
    const { value } = desc;

    desc.value = function () {
      let res = null;

      try {
        let flag = true;

        if (before) {
          flag = before.call(this);
        }

        if (flag) {
          res = value.apply(this, Array.prototype.slice.call(arguments));
        }

        if (after) {
          after.call(this);
        }
      } catch (e) {
        console.error(e);
      }

      return res;
    };

    return desc;
  };
}
