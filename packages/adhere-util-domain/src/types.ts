// @ts-ignore
import EventEmitter from 'events';

export interface IDomain {
  add: (emitter: EventEmitter) => void;
  remove: (emitter: EventEmitter) => void;
  bind: (fn: Function) => Function;
  intercept: (fn: Function) => Function;
  run: (fn: Function) => IDomain;
  dispose: () => IDomain;
  enter: () => IDomain;
  exit: () => IDomain;
}
