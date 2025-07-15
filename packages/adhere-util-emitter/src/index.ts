// Main exports
export { default as Emitter } from './emitter';
export { default as Events } from './events';

// Type exports
export type {
  EventHandler,
  EventType,
  EventHandlerEntry,
  ChangeLogEntry,
} from './events';

// Default export for backward compatibility
import Emitter from './emitter';
export default Emitter;
