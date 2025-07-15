import { EventEmitter } from 'events';

import { IDomain } from './types';

/**
 * Domain class for error handling and event management
 * 
 * A Domain provides a way to group multiple operations together and handle errors
 * that occur within those operations. It extends EventEmitter to provide event
 * handling capabilities.
 * 
 * @example
 * ```typescript
 * const domain = new Domain();
 * domain.add(someEventEmitter);
 * domain.run(() => {
 *   // Your code here
 * });
 * ```
 */
class Domain extends EventEmitter implements IDomain {
  /**
   * Emit an error event
   * @param error - The error to emit
   * @private
   */
  protected emitError(error: Error): void {
    this.emit('error', error);
  }

  /**
   * Add an EventEmitter to the domain for error handling
   * 
   * When an error occurs in the added emitter, it will be forwarded to this domain.
   * 
   * @param emitter - The EventEmitter instance to add to the domain
   * @example
   * ```typescript
   * const domain = new Domain();
   * const httpServer = new http.Server();
   * domain.add(httpServer);
   * ```
   */
  add(emitter: EventEmitter): void {
    if (!emitter || typeof emitter.on !== 'function') {
      throw new TypeError('emitter must be a valid EventEmitter instance');
    }
    emitter.on('error', this.emitError.bind(this));
  }

  /**
   * Bind a function to the domain for error handling
   * 
   * The bound function will have its errors caught and emitted by this domain.
   * 
   * @param fn - The function to bind to the domain
   * @returns The bound function that handles errors through this domain
   * @example
   * ```typescript
   * const domain = new Domain();
   * const boundFn = domain.bind((a: number, b: number) => {
   *   if (b === 0) throw new Error('Division by zero');
   *   return a / b;
   * });
   * ```
   */
  bind<T extends (...args: any[]) => any>(fn: T): T {
    const self = this;
    
    return function(this: any, ...args: Parameters<T>): ReturnType<T> {
      try {
        return fn.apply(this, args);
      } catch (error) {
        self.emitError(error instanceof Error ? error : new Error(String(error)));
        throw error; // Re-throw to maintain original behavior
      }
    } as T;
  }

  /**
   * Dispose the domain and remove all listeners
   * 
   * This method removes all event listeners from the domain and cleans up
   * any resources associated with it.
   * 
   * @returns The domain instance for chaining
   * @example
   * ```typescript
   * const domain = new Domain();
   * // ... use domain
   * domain.dispose();
   * ```
   */
  dispose(): IDomain {
    this.removeAllListeners();
    return this;
  }

  /**
   * Enter the domain context
   * 
   * This method is provided for compatibility with Node.js domains.
   * In this implementation, it simply returns the domain instance.
   * 
   * @returns The domain instance for chaining
   */
  enter(): IDomain {
    return this;
  }

  /**
   * Exit the domain context
   * 
   * This method is provided for compatibility with Node.js domains.
   * In this implementation, it simply returns the domain instance.
   * 
   * @returns The domain instance for chaining
   */
  exit(): IDomain {
    return this;
  }

  /**
   * Intercept a function to handle errors
   * 
   * The intercepted function will have its errors caught and emitted by this domain.
   * This is similar to bind but designed for callback-style functions where the
   * first parameter is typically an error.
   * 
   * @param fn - The function to intercept
   * @returns The intercepted function that handles errors through this domain
   * @example
   * ```typescript
   * const domain = new Domain();
   * const interceptedFn = domain.intercept((err: Error | null, data: any) => {
   *   if (err) throw err;
   *   // Process data
   * });
   * ```
   */
  intercept<T extends (error: Error | null, ...args: any[]) => any>(fn: T): T {
    const self = this;
    
    return function(this: any, error: Error | null, ...args: any[]): ReturnType<T> {
      if (error) {
        self.emitError(error);
        return undefined as ReturnType<T>;
      } else {
        try {
          return fn.apply(this, [error, ...args]);
        } catch (err) {
          const domainError = err instanceof Error ? err : new Error(String(err));
          self.emitError(domainError);
          throw err; // Re-throw to maintain original behavior
        }
      }
    } as T;
  }

  /**
   * Remove an EventEmitter from the domain
   * 
   * This removes the error handler that was added when the emitter was added
   * to the domain.
   * 
   * @param emitter - The EventEmitter instance to remove from the domain
   * @example
   * ```typescript
   * const domain = new Domain();
   * const httpServer = new http.Server();
   * domain.add(httpServer);
   * // ... later
   * domain.remove(httpServer);
   * ```
   */
  remove(emitter: EventEmitter): void {
    if (!emitter || typeof emitter.removeListener !== 'function') {
      throw new TypeError('emitter must be a valid EventEmitter instance');
    }
    emitter.removeListener('error', this.emitError.bind(this));
  }

  /**
   * Run a function within the domain context
   * 
   * The function will be executed and any errors thrown will be caught
   * and emitted by this domain.
   * 
   * @param fn - The function to run within the domain context
   * @returns The domain instance for chaining
   * @example
   * ```typescript
   * const domain = new Domain();
   * domain.run(() => {
   *   // This code runs within the domain context
   *   throw new Error('Something went wrong');
   * });
   * ```
   */
  run(fn: () => void): IDomain {
    try {
      fn();
    } catch (error) {
      this.emitError(error instanceof Error ? error : new Error(String(error)));
    }
    return this;
  }
}

/**
 * Domain factory object
 * 
 * Provides factory methods for creating Domain instances.
 */
const DomainFactory = {
  /**
   * Create a new Domain instance
   * 
   * @returns A new Domain instance
   * @example
   * ```typescript
   * const domain = DomainFactory.createDomain();
   * ```
   */
  createDomain(): Domain {
    return new Domain();
  },
  
  /**
   * Create a new Domain instance (alias for createDomain)
   * 
   * @returns A new Domain instance
   * @example
   * ```typescript
   * const domain = DomainFactory.create();
   * ```
   */
  create(): Domain {
    return new Domain();
  },
};

export default DomainFactory;
