import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import { SubMenuProps, ContextMenuContext } from './types';
import MenuItem from './MenuItem';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu-submenu';

const SubMenu: FC<SubMenuProps> = (props) => {
  const { className = '', style = {}, data = [] } = props;

  const { config } = useContext<ContextMenuContext>(ProviderContext);

  function getStyle() {
    const { width } = config;

    return {
      width: `${width}px`,
      zIndex: 99999 * 2 + 1,
    };
  }

  return (
    <ul
      className={classNames(selectorPrefix, className || '')}
      style={{ ...(style || {}), ...getStyle() }}
    >
      {(data || []).map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

// /**
//  * SubMenu
//  * @class SubMenu
//  * @classdesc SubMenu
//  */
// class SubMenu extends React.PureComponent<ISubMenuProps, any> {
//   static propTypes: any;
//   static defaultProps: any;
//
//   private config: IConfig | undefined;
//
//   constructor(props) {
//     super(props);
//
//     this.renderInner = this.renderInner.bind(this);
//   }
//
//   private getStyle() {
//     // @ts-ignore
//     const { width } = this.config;
//
//     return {
//       width: `${width}px`,
//       zIndex: 99999 * 2 + 1,
//     };
//   }
//
//   private renderItems(): Array<React.ReactElement> {
//     const { data = [] } = this.props;
//
//     return data.map((item) => (
//       // @ts-ignore
//       <MenuItem key={item.id} data={item} />
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
// SubMenu.defaultProps = {
//   data: [],
//   className: '',
//   style: {},
// };
//
// SubMenu.propTypes = {
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

export default SubMenu;
