import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

function serviceRegister() {
  const requireComponent = require.context('./service', false, /.*\.(js)$/);

  const services = {};
  requireComponent.keys().forEach((fileName) => {
    const serviceKey = fileName.substring(2, fileName.length - 3);
    services[serviceKey] = requireComponent(fileName);
  });

  ServiceRegister.initConfig(services);
}

serviceRegister();
