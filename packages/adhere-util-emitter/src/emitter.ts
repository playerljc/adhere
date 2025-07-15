import Events, { EventHandler, EventType } from './events';

/**
 * Global event emitter instance
 * 
 * This is a singleton instance of the Events class that can be used
 * throughout the application for global event communication.
 * 
 * @example
 * ```typescript
 * import Emitter from '@baifendian/adhere-util-emitter';
 * 
 * // Listen for global events
 * Emitter.on('app:ready', () => {
 *   console.log('Application is ready');
 * });
 * 
 * // Trigger global events
 * Emitter.trigger('app:ready');
 * 
 * // Use advanced patterns
 * const unsubscribe = Emitter.all(['load', 'ready'], () => {
 *   console.log('Both load and ready completed');
 * });
 * ```
 */
const Emitter: Events = new Events();

export default Emitter;

// Re-export types for convenience
export type { EventHandler, EventType };
