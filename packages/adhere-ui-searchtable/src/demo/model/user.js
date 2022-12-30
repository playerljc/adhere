import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

export default () => Object.assign(ServiceRegister.model('user'), {});
