import type { CircularMenuConfig, CircularMenuIns, Point } from '../types';
import CircularMenu from './index';

let menuContainer: HTMLElement | null = null;
let contextMenu: CircularMenuIns | null = null;
let mask: HTMLDivElement | null = null;

const selectorPrefix = 'adhere-ui-context-circular-menu';

function close() {
  menuContainer?.parentElement?.removeChild?.(menuContainer as HTMLElement);
  closeMask();
  menuContainer = null;
  contextMenu = null;
}

function createMask() {
  mask = document.createElement('div');

  mask.addEventListener('click', () => {
    close();
  });

  mask.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    close();
  });

  mask.className = selectorPrefix;

  document.body.appendChild(mask);
}

function closeMask() {
  mask?.parentElement?.removeChild?.(mask as HTMLElement);
  mask = null;
}

export default {
  open(config: CircularMenuConfig, point: Point) {
    createMask();

    menuContainer = document.createElement('div');
    document.body.appendChild(menuContainer);
    contextMenu = CircularMenu(menuContainer).config(config) as CircularMenuIns;
    contextMenu?.show?.([point.x, point.y]);
  },
  hide() {
    if (contextMenu) {
      contextMenu.hide?.();
    }
  },
  styles(properties: object) {
    if (contextMenu) {
      contextMenu.styles?.(properties);
    }
  },
};
