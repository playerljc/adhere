import type { DesignFieldAction } from '../index';
import Copy from './copy';
import Delete from './delete';

export const ACTIONS = new Map<string, (id: string) => DesignFieldAction>([
  [
    Copy.key,
    (id: string) => ({
      key: Copy.key,
      label: Copy.label,
      el: Copy.render(id),
    }),
  ],
  [
    Delete.key,
    (id: string) => ({
      key: Delete.key,
      label: Delete.label,
      el: Delete.render(id),
    }),
  ],
]);

export { Copy, Delete };
