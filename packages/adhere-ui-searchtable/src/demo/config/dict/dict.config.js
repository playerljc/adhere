/**
 * 字典的配置
 */

export default () => {
  const requireComponent = require.context('./dict', false, /.*\.(js)$/);

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default;
    if (dict) {
      dict.initStatic();
      dict.initRemote();
    }
  });
};
