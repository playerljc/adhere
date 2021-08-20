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
//  * PlaygroundMulit
//  * @class PlaygroundMulit
//  * @classdesc PlaygroundMulit
//  */
// class PlaygroundMulit extends React.Component {
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
//           const { config } = this.props;
//           copy(config.map((c) => c.codeText).join('\r\n'));
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
//    * @param config
//    * @return {*}
//    */
//   renderCodeView(config) {
//     return (
//       <div className={`${selectPrefix}-codeviewwrap`}>
//         <div className={`${selectPrefix}-codeviewwrap-title`}>{config.title}</div>
//         <div className={`${selectPrefix}-codeviewwrap-inner`}>
//           <PlaygroundExt
//             {...config}
//             collapsableCode={false}
//             initiallyExpanded={false}
//             es6Console={false}
//           />
//         </div>
//       </div>
//     );
//   }
//
//   /**
//    * renderCode
//    * @return {*}
//    */
//   renderCode() {
//     const { config, children } = this.props;
//     const { expand } = this.state;
//
//     return (
//       <div className={classNames(selectPrefix)}>
//         {/* 显示区 */}
//         <Card actions={this.renderAction()}>{children}</Card>
//         {/* 代码区 */}
//         {expand ? <Card>{(config || []).map((c) => this.renderCodeView(c))}</Card> : null}
//       </div>
//     );
//   }
//
//   /**
//    * render
//    * @return {*}
//    */
//   render() {
//     return this.renderCode();
//   }
// }
//
// PlaygroundMulit.defaultProps = {
//   config: [],
//   expand: false,
// };
//
// PlaygroundMulit.propTypes = {
//   config: PropTypes.arrayOf(
//     PropTypes.shape({
//       docClass: PropTypes.object,
//       codeText: PropTypes.string,
//       collapsableCode: PropTypes.bool,
//       initiallyExpanded: PropTypes.bool,
//       es6Console: PropTypes.bool,
//       propDescriptionMap: PropTypes.object,
//       scope: PropTypes.object,
//       // 描述
//       title: PropTypes.object,
//     }),
//   ),
//   expand: PropTypes.bool,
// };
//
// export default PlaygroundMulit;

import React from 'react';

import { PlayGround } from '@baifendian/adhere';

export default PlayGround.PlayGroundMulit;
