import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';

import { ProviderContext } from './ContextMenuContext';
import MenuItem from './MenuItem';
import type { ContextMenuContext, MenuProps, MenuRefHandle } from './types';

const selectorPrefix = 'adhere-ui-context-menu-sub-menu';

const Menu = memo<PropsWithoutRef<MenuProps> & RefAttributes<MenuRefHandle>>(
  forwardRef<MenuRefHandle, MenuProps>((props, ref) => {
    const { className = '', style = {}, data = [] } = props;

    const el = useRef<HTMLUListElement | null>(null);
    const { config } = useContext<ContextMenuContext>(ProviderContext);

    const getStyle = useCallback(() => {
      const { width } = config;

      return {
        width: `${width}px`,
        zIndex: 99999 * 2 + 1,
      };
    }, [config]);

    function mount() {
      let { x, y } = config;

      const menuWidth = el.current?.offsetWidth as number;
      const menuHeight = el.current?.offsetHeight as number;

      const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
      const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

      if (clientWidth - x < menuWidth) {
        x = clientWidth - menuWidth;
      }

      if (clientHeight - y < menuHeight) {
        y = clientHeight - menuHeight;
      }

      (el.current as HTMLUListElement).style.left = `${x}px`;

      (el.current as HTMLUListElement).style.top = `${y}px`;
    }

    useImperativeHandle(ref, () => ({
      mount,
    }));

    return (
      <ul
        className={classNames(selectorPrefix, className ?? '')}
        style={{ ...(style ?? {}), ...getStyle() }}
        ref={el}
      >
        {(data || []).map((item) => (
          <MenuItem key={item.id} data={item} />
        ))}
      </ul>
    );
  }),
);

export default Menu;
