import type { DesignFieldAction } from '../index';
import Copy from './copy';
import Delete from './delete';
export declare const ACTIONS: Map<string, (id: string) => DesignFieldAction>;
export { Copy, Delete };
