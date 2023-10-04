const requireComponent = require.context('./components', false, /.*\.(js)$/);

let components = {};

requireComponent.keys().forEach((path) => {
  components = { ...components, ...requireComponent(path) };
});

export default components;
