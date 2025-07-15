import { EventEmitter } from 'events';

/**
 * Domain interface for error handling and event management
 */
export interface IDomain {
  /**
   * Add an EventEmitter to the domain for error handling
   * @param emitter - The EventEmitter instance to add
   */
  add(emitter: EventEmitter): void;
  
  /**
   * Remove an EventEmitter from the domain
   * @param emitter - The EventEmitter instance to remove
   */
  remove(emitter: EventEmitter): void;
  
  /**
   * Bind a function to the domain for error handling
   * @param fn - The function to bind
   * @returns The bound function
   */
  bind<T extends (...args: any[]) => any>(fn: T): T;
  
  /**
   * Intercept a function to handle errors
   * @param fn - The function to intercept
   * @returns The intercepted function
   */
  intercept<T extends (...args: any[]) => any>(fn: T): T;
  
  /**
   * Run a function within the domain context
   * @param fn - The function to run
   * @returns The domain instance
   */
  run(fn: () => void): IDomain;
  
  /**
   * Dispose the domain and remove all listeners
   * @returns The domain instance
   */
  dispose(): IDomain;
  
  /**
   * Enter the domain context
   * @returns The domain instance
   */
  enter(): IDomain;
  
  /**
   * Exit the domain context
   * @returns The domain instance
   */
  exit(): IDomain;
}
