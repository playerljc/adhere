import { createLoggerMiddleware, createSagaMiddleware } from '@ctsj/state/lib/middleware';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';
import { applyMiddleware, createStore } from '@ctsj/state/lib/state';

const saga = createSagaMiddleware();

// SearchList / SearchTable demos call saga.model() at module load time,
// so the store must exist as soon as this module is imported.
ServiceRegister.setSage(saga);

const store = createStore(null, {}, applyMiddleware(createLoggerMiddleware(), saga));

export { store };
export default saga;
