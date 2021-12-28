/// <reference types="node" />
import EventEmitter from 'events';
import { IDomain } from './types';
/**
 * Domain
 * @class
 * @description
 */
declare class Domain extends EventEmitter implements IDomain {
    /**
     * emitError
     * @param e
     */
    protected emitError(e: any): void;
    /**
     * add
     * @description
     * @param emitter
     */
    add(emitter: EventEmitter): void;
    /**
     * bind
     * @description
     * @param fn
     * @return Function
     */
    bind(fn: Function): Function;
    /**
     * dispose
     * @description
     * @return IDomain
     */
    dispose(): IDomain;
    /**
     * enter
     * @description
     * @return IDomain
     */
    enter(): IDomain;
    /**
     * exit
     * @description
     * @return IDomain
     */
    exit(): IDomain;
    /**
     * intercept
     * @description
     * @param fn
     * @return Function
     */
    intercept(fn: Function): Function;
    /**
     * remove
     * @description
     * @param emitter
     */
    remove(emitter: EventEmitter): void;
    /**
     * run
     * @description
     * @param fn
     * @return IDomain
     */
    run(fn: Function): IDomain;
}
declare const _default: {
    /**
     * createDomain
     * @description
     * @return Domain
     */
    createDomain(): Domain;
    /**
     * create
     * @description
     * @return Domain
     */
    create(): Domain;
};
export default _default;
