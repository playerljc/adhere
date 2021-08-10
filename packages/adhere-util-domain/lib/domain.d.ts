/// <reference types="node" />
import EventEmitter from 'events';
import { IDomain } from './types';
/**
 * Domain
 * @class
 * @description
 */
declare class Domain extends EventEmitter implements IDomain {
    protected emitError(e: any): void;
    add(emitter: EventEmitter): void;
    bind(fn: Function): Function;
    dispose(): IDomain;
    enter(): IDomain;
    exit(): IDomain;
    intercept(fn: Function): Function;
    remove(emitter: EventEmitter): void;
    run(fn: Function): IDomain;
}
declare const _default: {
    createDomain(): Domain;
    create(): Domain;
};
export default _default;
