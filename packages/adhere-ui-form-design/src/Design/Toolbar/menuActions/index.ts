import type { MenuItem } from '../../../types';
import Clear from './clear';
import GenJSON from './genJSON';
import Preview from './preview';
import Template from './template';

export const ACTIONS = new Map<string, () => MenuItem>([
  [
    Clear.key,
    () => ({
      key: Clear.key,
      label: Clear.label,
      icon: Clear.icon,
      el: Clear.render(),
    }),
  ],
  [
    GenJSON.key,
    () => ({
      key: GenJSON.key,
      label: GenJSON.label,
      icon: GenJSON.icon,
      el: GenJSON.render(),
    }),
  ],
  [
    Preview.key,
    () => ({
      key: Preview.key,
      label: Preview.label,
      icon: Preview.icon,
      el: Preview.render(),
    }),
  ],
  [
    Template.key,
    () => ({
      key: Template.key,
      label: Template.label,
      icon: Template.icon,
      el: Template.render(),
    }),
  ],
  [
    GenJSON.key,
    () => ({
      key: GenJSON.key,
      label: GenJSON.label,
      icon: GenJSON.icon,
      el: GenJSON.render(),
    }),
  ],
]);

export const defaultMenuItems = Array.from(ACTIONS.values()).map((fn) => fn() as MenuItem);

export { Clear, Preview, Template, GenJSON };
