import React, { FC, memo, useCallback, useEffect, useState } from 'react';

import { SimpleTabsFunction, SimpleTabsProps } from '../types';
import { TabContext } from './Context';
import TabPanel from './TabPanel';

const selectorPrefix = 'adhere-ui-playground-simple-tabs';

const SimpleTabs: FC<SimpleTabsProps> = (props) => {
  const { className = '', onChange, children } = props;

  const [activeKey, setActiveKey] = useState(props.activeKey);

  const renderHead = useCallback(() => {
    return children instanceof Array
      ? children.map((t) => renderHeadItem(t))
      : renderHeadItem(children);
  }, [children]);

  function renderHeadItem({ props: { index, title } }) {
    return (
      <li
        key={index}
        className={activeKey === index ? 'active' : ''}
        onClick={() => {
          setActiveKey(index);

          onChange && onChange(index);
        }}
      >
        {title}
      </li>
    );
  }

  useEffect(() => setActiveKey(props.activeKey), [props.activeKey]);

  return (
    <TabContext.Provider
      value={{
        activeKey: activeKey || '',
      }}
    >
      <div className={`${selectorPrefix} ${className}`}>
        <ul className={`${selectorPrefix}-head`}>{renderHead()}</ul>
        <div className={`${selectorPrefix}-body`}>{children}</div>
      </div>
    </TabContext.Provider>
  );
};

// @ts-ignore
const MemoWrap: SimpleTabsFunction<SimpleTabsProps> = memo(SimpleTabs);

MemoWrap.TabPanel = TabPanel;

// /**
//  * SimpleTabs
//  * @class SimpleTabs
//  * @classdesc 一个超级简单的选项卡
//  */
// class SimpleTabs extends React.PureComponent {
//   static TabPanel = TabPanel;
//   static defaultProps: { onChange: () => void; activeKey: string; className: string };
//   static propTypes: {
//     onChange: Requireable<(...args: any[]) => any>;
//     activeKey: Requireable<NonNullable<InferType<Requireable<number> | any>>>;
//     className: any;
//   };
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       activeKey: props.activeKey,
//     };
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       activeKey: nextProps.activeKey,
//     });
//   }
//
//   renderHead() {
//     const { children } = this.props;
//     return children instanceof Array
//       ? children.map((t) => this.renderHeadItem(t))
//       : this.renderHeadItem(children);
//   }
//
//   renderHeadItem({ props: { index, title } }) {
//     const { onChange } = this.props;
//
//     const { activeKey } = this.state;
//
//     return (
//       <li
//         key={index}
//         className={activeKey === index ? 'active' : ''}
//         onClick={() => {
//           this.setState(
//             {
//               activeKey: index,
//             },
//             () => {
//               if (onChange) {
//                 onChange(index);
//               }
//             },
//           );
//         }}
//       >
//         {title}
//       </li>
//     );
//   }
//
//   render() {
//     const { className, children } = this.props;
//
//     return (
//       <TabContext.Provider value={this.state}>
//         <div className={`${selectorPrefix} ${className}`}>
//           <ul className={`${selectorPrefix}-head`}>{this.renderHead()}</ul>
//           <div className={`${selectorPrefix}-body`}>{children}</div>
//         </div>
//       </TabContext.Provider>
//     );
//   }
// }
//
// SimpleTabs.defaultProps = {
//   activeKey: '',
//   className: '',
//   onChange: () => {},
// };
//
// SimpleTabs.propTypes = {
//   activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   className: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default MemoWrap;
