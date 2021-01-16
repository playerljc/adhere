import Util from '@baifendian/adhere-util';
import Dict from '@baifendian/adhere-util-dict';

/**
 * initBasicDict
 * Resource提供的字典命名规范 Resource${业务分组}${实际业务名称}
 */
function initBasicDict() {
  const requireComponent = require.context('./dict', false, /.*\.(js)$/);

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default;

    if (dict && Util.isFunction(dict)) {
      dict();
    }
  });
}

// 初始化一些基本的字典配置
initBasicDict();

export default {
  Dict,
};
