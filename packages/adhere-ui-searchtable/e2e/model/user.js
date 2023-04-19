import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

export const name = 'user';
export default () => Object.assign(ServiceRegister.model('user'), {});
