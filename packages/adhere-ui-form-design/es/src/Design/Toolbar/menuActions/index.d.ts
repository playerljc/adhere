import type { MenuItem } from '../../../types';
import Clear from './clear';
import GenJSON from './genJSON';
import Preview from './preview';
import Template from './template';
export declare const ACTIONS: Map<string, () => MenuItem>;
export declare const defaultMenuItems: MenuItem[];
export { Clear, Preview, Template, GenJSON };
