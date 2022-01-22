// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { Card, message } from 'antd';
// import { UpSquareOutlined, CopyOutlined, DownSquareOutlined } from '@ant-design/icons';
// import PlaygroundExt from 'component-playground';
// import copy from 'copy-to-clipboard';
//
// import './index.less';
//
// const selectPrefix = 'adhere-website-playground';
//
// /**
//  * Playground
//  * @class Playground
//  * @classdesc Playground
//  */
// class Playground extends React.Component {
//   state = {
//     expand: this.props.expand,
//   };
//
//   actionConfig = [this.renderClipboardAction, this.renderExpandAction];
//
//   // eslint-disable-next-line react/no-deprecated,no-unused-vars
//   componentWillReceiveProps(nextProps, nextContext) {
//     this.setState({
//       expand: nextProps.expand,
//     });
//   }
//
//   /**
//    * renderProps
//    * @return {*}
//    */
//   renderProps() {
//     return (
//       <div className={classNames(selectPrefix, this.props.mode)}>
//         <PlaygroundExt
//           {...this.props}
//           collapsableCode={false}
//           initiallyExpanded={false}
//           es6Console={false}
//         />
//       </div>
//     );
//   }
//
//   renderAction() {
//     return this.actionConfig.map((config) => config.call(this));
//   }
//
//   /**
//    * renderClipboardAction
//    */
//   renderClipboardAction() {
//     return (
//       <div
//         onClick={() => {
//           copy(this.props.codeText);
//           message.success('复制成功');
//         }}
//       >
//         <CopyOutlined />
//       </div>
//     );
//   }
//
//   /**
//    * renderExpandAction
//    * @return {*}
//    */
//   renderExpandAction() {
//     return this.state.expand ? (
//       <div
//         onClick={() => {
//           this.setState({ expand: false });
//         }}
//       >
//         <UpSquareOutlined />
//       </div>
//     ) : (
//       <div
//         onClick={() => {
//           this.setState({ expand: true });
//         }}
//       >
//         <DownSquareOutlined />
//       </div>
//     );
//   }
//
//   /**
//    * renderCodeView - 代码展示视图
//    * @return {*}
//    */
//   renderCodeView() {
//     return this.state.expand ? (
//       <Card>
//         <PlaygroundExt
//           {...this.props}
//           collapsableCode={false}
//           initiallyExpanded={false}
//           es6Console={false}
//         />
//       </Card>
//     ) : null;
//   }
//
//   /**
//    * renderCode
//    * @return {*}
//    */
//   renderCode() {
//     return (
//       <div className={classNames(selectPrefix, this.props.mode)}>
//         <Card actions={this.renderAction()}>{this.props.children}</Card>
//         {this.renderCodeView()}
//       </div>
//     );
//   }
//
//   /**
//    * render
//    * @return {*}
//    */
//   render() {
//     const { mode } = this.props;
//
//     return mode === 'props' ? this.renderProps() : this.renderCode();
//   }
// }
//
// Playground.defaultProps = {
//   docClass: null,
//   codeText: '',
//   collapsableCode: true,
//   initiallyExpanded: true,
//   es6Console: true,
//   propDescriptionMap: null,
//   scope: { React },
//   mode: 'code',
//   expand: false,
// };
//
// Playground.propTypes = {
//   docClass: PropTypes.object,
//   codeText: PropTypes.string,
//   collapsableCode: PropTypes.bool,
//   initiallyExpanded: PropTypes.bool,
//   es6Console: PropTypes.bool,
//   propDescriptionMap: PropTypes.object,
//   scope: PropTypes.object,
//   mode: PropTypes.oneOf(['props', 'code']),
//   expand: PropTypes.bool,
// };
//
// export default Playground;

import React from 'react';

import { PlayGround } from '@baifendian/adhere';

export default PlayGround.PlayGround;
