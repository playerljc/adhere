import type { ToolBarGroup, ToolBarItem } from '../../../types';
import ChangeDesktopMode from './changeDesktopMode';
import ChangeMobileMode from './changeMobileMode';
import FullScreen from './fullScreen';
import Redo from './redo';
import Undo from './undo';

export const ACTIONS = new Map<string, () => ToolBarItem>([
  [
    ChangeDesktopMode.key,
    () => ({
      key: ChangeDesktopMode.key,
      label: ChangeDesktopMode.label,
      icon: ChangeDesktopMode.icon,
      el: ChangeDesktopMode.render(),
    }),
  ],
  [
    ChangeMobileMode.key,
    () => ({
      key: ChangeMobileMode.key,
      label: ChangeMobileMode.label,
      icon: ChangeMobileMode.icon,
      el: ChangeMobileMode.render(),
    }),
  ],
  [
    FullScreen.key,
    () => ({
      key: FullScreen.key,
      label: FullScreen.label,
      icon: FullScreen.icon,
      el: FullScreen.render(),
    }),
  ],
  [
    Undo.key,
    () => ({
      key: Undo.key,
      label: Undo.label,
      icon: Undo.icon,
      el: Undo.render(),
    }),
  ],
  [
    Redo.key,
    () => ({
      key: Redo.key,
      label: Redo.label,
      icon: Redo.icon,
      el: Redo.render(),
    }),
  ],
]);

export const defaultGroups: ToolBarGroup[] = [
  [
    ACTIONS.get(ChangeDesktopMode.key)?.() as ToolBarItem,
    ACTIONS.get(ChangeMobileMode.key)?.() as ToolBarItem,
  ],
  [ACTIONS.get(Undo.key)?.() as ToolBarItem, ACTIONS.get(Redo.key)?.() as ToolBarItem],
  [ACTIONS.get(FullScreen.key)?.() as ToolBarItem],
];

export { ChangeDesktopMode, ChangeMobileMode, FullScreen, Undo, Redo };
