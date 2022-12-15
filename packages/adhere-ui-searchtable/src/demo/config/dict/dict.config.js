/**
 * 字典的配置
 */

export default () => {
  console.log('字典');
  const requireComponent = require.context('./dict', false, /.*\.(js)$/);

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default;
    if (dict) {
      dict.initStatic();
      dict.initRemote();
    }
  });
};
