import type { ToolBarGroup, ToolBarItem } from '../../../types';
import ChangeDesktopMode from './changeDesktopMode';
import ChangeMobileMode from './changeMobileMode';
import FullScreen from './fullScreen';
import Redo from './redo';
import Undo from './undo';
export declare const ACTIONS: Map<string, () => ToolBarItem>;
export declare const defaultGroups: ToolBarGroup[];
export { ChangeDesktopMode, ChangeMobileMode, FullScreen, Undo, Redo };
