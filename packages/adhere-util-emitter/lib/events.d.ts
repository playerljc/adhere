/**
 * Event handler function type
 */
export type EventHandler<T = any> = (...args: T[]) => any;
/**
 * Event type can be string or symbol
 */
export type EventType = string | symbol;
/**
 * Event handler entry structure
 */
export interface EventHandlerEntry {
    handlers: EventHandler[];
}
/**
 * Change log entry for all/race methods
 */
export interface ChangeLogEntry {
    key: symbol;
    status: boolean;
    fn: EventHandler;
}
/**
 * Events class for implementing observer pattern
 *
 * @class Events
 * @description A comprehensive event emitter implementation with support for
 * string and symbol event types, handler management, and advanced event patterns
 *
 * @example
 * ```typescript
 * const events = new Events();
 *
 * // Basic event handling
 * events.on('user:login', (user) => console.log('User logged in:', user));
 * events.trigger('user:login', { id: 1, name: 'John' });
 *
 * // One-time event
 * events.once('app:ready', () => console.log('App is ready'));
 *
 * // Multiple events (all)
 * const unsubscribe = events.all(['load', 'ready'], () => {
 *   console.log('Both load and ready events fired');
 * });
 *
 * // Race events (first to fire)
 * const unsubscribeRace = events.race(['timeout', 'success'], () => {
 *   console.log('Either timeout or success fired');
 * });
 *
 * // Count-based events
 * const unsubscribeCount = events.count('click', 3, () => {
 *   console.log('Clicked 3 times');
 * });
 * ```
 */
export declare class Events {
    /**
     * Static reference to the Events class
     */
    static Events: typeof Events;
    /**
     * Internal storage for event handlers
     * Maps event types to their handler collections
     */
    private events;
    /**
     * Creates a new Events instance
     */
    constructor();
    /**
     * Removes a specific event handler from an event type
     *
     * @param type - The event type (string or symbol)
     * @param handler - The handler function to remove
     * @returns {boolean} True if handler was found and removed, false otherwise
     *
     * @example
     * ```typescript
     * const handler = (data) => console.log(data);
     * events.on('test', handler);
     * events.remove('test', handler); // Returns true
     * ```
     */
    remove(type: EventType, handler: EventHandler): boolean;
    /**
     * Checks if an event type has any registered handlers
     *
     * @param type - The event type to check
     * @returns {boolean} True if the event type exists and has handlers
     *
     * @example
     * ```typescript
     * events.on('test', () => {});
     * events.hasType('test'); // Returns true
     * events.hasType('nonexistent'); // Returns false
     * ```
     */
    hasType(type: EventType): boolean;
    /**
     * Checks if an event type is registered (even if no handlers)
     *
     * @param type - The event type to check
     * @returns {boolean} True if the event type is registered
     */
    hasRegisteredType(type: EventType): boolean;
    /**
     * Clears all handlers for a specific event type
     *
     * @param type - The event type to clear
     * @returns {boolean} True if the event type was found and cleared
     *
     * @example
     * ```typescript
     * events.on('test', handler1);
     * events.on('test', handler2);
     * events.clear('test'); // Removes both handlers
     * ```
     */
    clear(type: EventType): boolean;
    /**
     * Clears all events and handlers
     *
     * @example
     * ```typescript
     * events.on('event1', handler1);
     * events.on('event2', handler2);
     * events.clearAll(); // Removes all events and handlers
     * ```
     */
    clearAll(): void;
    /**
     * Registers an event handler for an event type
     *
     * @param type - The event type to listen for
     * @param handler - The handler function to execute when the event fires
     * @param maxStackSize - Maximum number of handlers allowed for this event type (default: 200)
     * @returns {Function} Unsubscribe function to remove this specific handler
     *
     * @example
     * ```typescript
     * const unsubscribe = events.on('user:update', (user) => {
     *   console.log('User updated:', user);
     * });
     *
     * // Later, to remove this specific handler:
     * unsubscribe();
     * ```
     */
    on(type: EventType, handler: EventHandler, maxStackSize?: number): () => boolean;
    /**
     * Registers a one-time event handler that will be automatically removed after execution
     *
     * @param type - The event type to listen for
     * @param handler - The handler function to execute once
     * @returns {Function} Unsubscribe function to remove this handler before it fires
     *
     * @example
     * ```typescript
     * events.once('app:ready', () => {
     *   console.log('App is ready - this will only fire once');
     * });
     *
     * events.trigger('app:ready'); // Handler fires and is removed
     * events.trigger('app:ready'); // Nothing happens
     * ```
     */
    once(type: EventType, handler: EventHandler): () => boolean;
    /**
     * Registers a handler that fires only when ALL specified events have been triggered
     *
     * @param types - Array of event types to wait for
     * @param handler - The handler function to execute when all events have fired
     * @returns {Function} Unsubscribe function to remove all event listeners
     *
     * @example
     * ```typescript
     * const unsubscribe = events.all(['load', 'ready', 'init'], () => {
     *   console.log('All events have fired!');
     * });
     *
     * events.trigger('load');
     * events.trigger('ready');
     * events.trigger('init'); // Handler fires here
     *
     * // Reset for next round
     * events.trigger('load');
     * events.trigger('ready');
     * events.trigger('init'); // Handler fires again
     * ```
     */
    all(types: EventType[], handler: EventHandler): () => void;
    /**
     * Registers a handler that fires when ANY of the specified events is triggered (race condition)
     *
     * @param types - Array of event types to race
     * @param handler - The handler function to execute when any event fires
     * @returns {Function} Unsubscribe function to remove all event listeners
     *
     * @example
     * ```typescript
     * const unsubscribe = events.race(['timeout', 'success', 'error'], () => {
     *   console.log('One of the events fired!');
     * });
     *
     * events.trigger('success'); // Handler fires here
     * events.trigger('timeout'); // Nothing happens (already fired)
     * ```
     */
    race(types: EventType[], handler: EventHandler): () => void;
    /**
     * Registers a handler that fires after a specific event has been triggered a certain number of times
     *
     * @param type - The event type to count
     * @param count - The number of times the event must fire before the handler executes
     * @param handler - The handler function to execute after the count is reached
     * @returns {Function} Unsubscribe function to remove the event listener
     *
     * @example
     * ```typescript
     * const unsubscribe = events.count('click', 3, () => {
     *   console.log('Button clicked 3 times!');
     * });
     *
     * events.trigger('click'); // Count: 1
     * events.trigger('click'); // Count: 2
     * events.trigger('click'); // Count: 3, handler fires
     * events.trigger('click'); // Count: 1 (reset)
     * ```
     */
    count(type: EventType, count: number, handler: EventHandler): () => boolean;
    /**
     * Triggers an event, executing all registered handlers
     *
     * @param type - The event type to trigger
     * @param params - Parameters to pass to the event handlers
     * @returns {any} The result of the last executed handler, or null if no handlers
     *
     * @example
     * ```typescript
     * events.on('user:update', (user, timestamp) => {
     *   console.log('User updated:', user, 'at:', timestamp);
     * });
     *
     * const result = events.trigger('user:update', { id: 1, name: 'John' }, Date.now());
     * ```
     */
    trigger(type: EventType, ...params: any[]): any;
    /**
     * Dispatches a custom DOM event
     *
     * @param el - The DOM element to dispatch the event on (defaults to document)
     * @param type - The event type name
     * @param params - CustomEventInit parameters
     * @returns {boolean} True if the event was dispatched successfully
     *
     * @example
     * ```typescript
     * events.dispatchEvent(document, 'custom:event', {
     *   detail: { message: 'Hello world' },
     *   bubbles: true
     * });
     * ```
     */
    dispatchEvent(el: (HTMLElement | Document) | undefined, type: string, params?: CustomEventInit): boolean;
    /**
     * Gets the number of handlers for a specific event type
     *
     * @param type - The event type to check
     * @returns {number} The number of handlers for this event type
     *
     * @example
     * ```typescript
     * events.on('test', handler1);
     * events.on('test', handler2);
     * events.getHandlerCount('test'); // Returns 2
     * ```
     */
    getHandlerCount(type: EventType): number;
    /**
     * Gets all registered event types
     *
     * @returns {EventType[]} Array of all registered event types
     *
     * @example
     * ```typescript
     * events.on('event1', handler1);
     * events.on('event2', handler2);
     * events.getEventTypes(); // Returns ['event1', 'event2']
     * ```
     */
    getEventTypes(): EventType[];
}
/**
 * Default export of the Events class
 */
export default Events;
