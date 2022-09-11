import React, {
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import { MenuRefHandle, MenuProps, ContextMenuContext } from './types';
import MenuItem from './MenuItem';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu-submenu';

const Menu: ForwardRefRenderFunction<MenuRefHandle, MenuProps> = (props, ref) => {
  const { className = '', style = {}, data = [] } = props;

  const el = useRef<HTMLUListElement>(null);
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
      className={classNames(selectorPrefix, className || '')}
      style={{ ...(style || {}), ...getStyle() }}
      ref={el}
    >
      {(data || []).map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

// /**
//  * Menu
//  * @class Menu
//  * @classdesc Menu
//  */
// class Menu extends React.PureComponent<MenuProps, any> {
//   static propTypes: any;
//   static defaultProps: any;
//
//   private config: Config | undefined;
//   private el: HTMLElement | null | undefined;
//
//   constructor(props) {
//     super(props);
//
//     this.renderInner = this.renderInner.bind(this);
//   }
//
//   mount() {
//     // @ts-ignore
//     let { x, y } = this.config;
//
//     const menuWidth = this.el?.offsetWidth;
//     const menuHeight = this.el?.offsetHeight;
//
//     const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
//
//     // console.log(
//     //   'x',
//     //   x,
//     //   'y',
//     //   y,
//     //   'menuWidth',
//     //   menuWidth,
//     //   'menuHeight',
//     //   menuHeight,
//     //   'clientWidth',
//     //   clientWidth,
//     //   'clientHeight',
//     //   clientHeight,
//     // );
//
//     // @ts-ignore
//     if (clientWidth - x < menuWidth) {
//       // @ts-ignore
//       x = clientWidth - menuWidth;
//     }
//
//     // @ts-ignore
//     if (clientHeight - y < menuHeight) {
//       // @ts-ignore
//       y = clientHeight - menuHeight;
//     }
//
//     // @ts-ignore
//     this.el?.style.left = `${x}px`;
//
//     // @ts-ignore
//     this.el?.style.top = `${y}px`;
//   }
//
//   private getStyle() {
//     // @ts-ignore
//     const { /*x, y, */ width } = this.config;
//
//     return {
//       width: `${width}px`,
//       // left: `${x}px`,
//       // top: `${y}px`,
//       zIndex: 99999 * 2 + 1,
//     };
//   }
//
//   private renderItems(): Array<React.ReactElement> {
//     const { data = [] } = this.props;
//
//     return data.map((item) => (
//       // @ts-ignore
//       <MenuItem
//         key={item.id}
//         // @ts-ignore
//         data={item}
//       />
//     ));
//   }
//
//   private renderInner({ config }) {
//     const { className, style } = this.props;
//
//     // @ts-ignore
//     this.config = config;
//
//     return (
//       <ul
//         className={classNames(
//           selectorPrefix,
//           // @ts-ignore
//           (className || '').split(/\s+/),
//         )}
//         style={{ ...(style || {}), ...this.getStyle() }}
//         ref={(el) => (this.el = el)}
//       >
//         {this.renderItems()}
//       </ul>
//     );
//   }
//
//   render() {
//     return <ProviderContext.Consumer>{this.renderInner}</ProviderContext.Consumer>;
//   }
// }
//
// Menu.defaultProps = {
//   data: [],
//   className: '',
//   style: {},
// };
//
// Menu.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//       icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//       disabled: PropTypes.bool,
//       separation: PropTypes.bool,
//       attribute: PropTypes.object,
//       children: PropTypes.array,
//       className: PropTypes.string,
//       style: PropTypes.object,
//       subMenuClassName: PropTypes.string,
//       subMenuStyle: PropTypes.object,
//     }),
//   ),
//   className: PropTypes.string,
//   style: PropTypes.object,
// };

export default forwardRef<MenuRefHandle, MenuProps>(Menu);
