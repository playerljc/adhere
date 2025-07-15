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
declare class Domain extends EventEmitter implements IDomain {
    /**
     * Emit an error event
     * @param error - The error to emit
     * @private
     */
    protected emitError(error: Error): void;
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
    add(emitter: EventEmitter): void;
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
    bind<T extends (...args: any[]) => any>(fn: T): T;
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
    dispose(): IDomain;
    /**
     * Enter the domain context
     *
     * This method is provided for compatibility with Node.js domains.
     * In this implementation, it simply returns the domain instance.
     *
     * @returns The domain instance for chaining
     */
    enter(): IDomain;
    /**
     * Exit the domain context
     *
     * This method is provided for compatibility with Node.js domains.
     * In this implementation, it simply returns the domain instance.
     *
     * @returns The domain instance for chaining
     */
    exit(): IDomain;
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
    intercept<T extends (error: Error | null, ...args: any[]) => any>(fn: T): T;
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
    remove(emitter: EventEmitter): void;
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
    run(fn: () => void): IDomain;
}
/**
 * Domain factory object
 *
 * Provides factory methods for creating Domain instances.
 */
declare const DomainFactory: {
    /**
     * Create a new Domain instance
     *
     * @returns A new Domain instance
     * @example
     * ```typescript
     * const domain = DomainFactory.createDomain();
     * ```
     */
    createDomain(): Domain;
    /**
     * Create a new Domain instance (alias for createDomain)
     *
     * @returns A new Domain instance
     * @example
     * ```typescript
     * const domain = DomainFactory.create();
     * ```
     */
    create(): Domain;
};
export default DomainFactory;
