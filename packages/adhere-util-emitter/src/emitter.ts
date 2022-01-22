import Events from './events';

const Emitter = new Events();

// @ts-ignore
Emitter.Events = Events;

export default Emitter;
