import EventEmitter from 'events';

import { IDomain } from './types';

/**
 * Domain
 * @class
 * @description
 */
class Domain extends EventEmitter implements IDomain {
  /**
   * emitError
   * @param e
   */
  protected emitError(e): void {
    this.emit('error', e);
  }

  /**
   * add
   * @description
   * @param emitter
   */
  add(emitter: EventEmitter): void {
    emitter.on('error', this.emitError);
  }

  /**
   * bind
   * @description
   * @param fn
   * @return Function
   */
  bind(fn: Function): Function {
    const self = this;

    return function () {
      const args = Array.prototype.slice.call(arguments);
      try {
        fn.apply(null, args);
      } catch (err) {
        self.emitError(err);
      }
    };
  }

  /**
   * dispose
   * @description
   * @return IDomain
   */
  dispose(): IDomain {
    this.removeAllListeners();
    return this;
  }

  /**
   * enter
   * @description
   * @return IDomain
   */
  enter(): IDomain {
    return this;
  }

  /**
   * exit
   * @description
   * @return IDomain
   */
  exit(): IDomain {
    return this;
  }

  /**
   * intercept
   * @description
   * @param fn
   * @return Function
   */
  intercept(fn: Function): Function {
    const self = this;

    return function (err) {
      if (err) {
        self.emitError(err);
      } else {
        const args = Array.prototype.slice.call(arguments, 1);
        try {
          fn.apply(null, args);
        } catch (err) {
          self.emitError(err);
        }
      }
    };
  }

  /**
   * remove
   * @description
   * @param emitter
   */
  remove(emitter: EventEmitter): void {
    emitter.removeListener('error', this.emitError);
  }

  /**
   * run
   * @description
   * @param fn
   * @return IDomain
   */
  run(fn: Function): IDomain {
    try {
      fn();
    } catch (err) {
      this.emitError(err);
    }
    return this;
  }
}

export default {
  /**
   * createDomain
   * @description
   * @return Domain
   */
  createDomain(): Domain {
    return new Domain();
  },
  /**
   * create
   * @description
   * @return Domain
   */
  create(): Domain {
    return new Domain();
  },
};
