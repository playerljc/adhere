import Domain from './domain';
import { IDomain } from './types';

/**
 * Domain utility for error handling and event management
 * 
 * This module provides a Domain class that helps manage error handling across
 * multiple operations and EventEmitter instances. It's inspired by Node.js domains
 * but implemented as a standalone utility.
 * 
 * @example
 * ```typescript
 * import Domain from '@baifendian/adhere-util-domain';
 * 
 * const domain = Domain.createDomain();
 * domain.on('error', (error) => {
 *   console.error('Domain error:', error);
 * });
 * 
 * domain.run(() => {
 *   // Your code here
 * });
 * ```
 */

// Export the factory as default
export default Domain;

// Export the Domain class and interface for direct use
export { Domain };
export type { IDomain };
