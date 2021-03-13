/**
 * AutoTryCatch - 自动加入try/catch
 * @param callback
 */
export default function (callback) {
  return function (target, property, desc) {
    const { value } = desc;

    desc.value = function () {
      let res = null;

      try {
        res = value.apply(this, Array.prototype.slice.call(arguments));
      } catch (e) {
        if (callback) {
          callback.call(this,e);
        }
      }

      return res;
    };

    return desc;
  };
}
