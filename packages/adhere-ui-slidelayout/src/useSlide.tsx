// import React from 'react';
// import { ISlideLayoutProps, ISlideLayoutState } from './types';
//
// import { createMask } from './slidelayout';
//
// /**
//  * SlideLayout
//  * @class SlideLayout
//  * @classdesc SlideLayout
//  */
// abstract class SlideLayout<
//   P extends ISlideLayoutProps,
//   S extends ISlideLayoutState,
// > extends React.Component<P, S> {
//   // @ts-ignore
//   protected positionConfig: {
//     init: object;
//     show: object;
//     close: object;
//   } = {};
//
//   protected el: HTMLElement | null | undefined;
//   protected maskEl: HTMLElement | undefined;
//
//   componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
//     if (nextProps.collapse !== this.state.collapse) {
//       this.setState({
//         collapse: nextProps.collapse,
//       });
//     }
//   }
//
//   componentDidMount() {
//     if (this.props.mask) {
//       this.maskEl = createMask(this.props.zIndex, () => {
//         this.close();
//       });
//
//       this.el?.parentElement?.insertBefore(this.maskEl, this.el);
//     }
//
//     this.initial();
//   }
//
//   // @ts-ignore
//   componentDidUpdate(prevProps: Readonly<P>, prevState: S, snapshot?: any) {
//     if (prevState.collapse !== this.state.collapse) {
//       if (this.state.collapse) {
//         // @ts-ignore
//         this.positionConfig['show'][this.props.direction]();
//       } else {
//         // @ts-ignore
//         this.positionConfig['close'][this.props.direction]();
//       }
//     }
//   }
//
//   componentWillUnmount() {
//     if (this.maskEl) {
//       // @ts-ignore
//       this.maskEl.parentElement.removeChild(this.maskEl);
//     }
//   }
//
//   /**
//    * getDuration
//    * @param time
//    */
//   protected getDuration(time: undefined | null | string | number) {
//     return time !== undefined && time !== null ? time : this.props.time;
//   }
//
//   /**
//    * initial
//    */
//   protected initial() {
//     const {
//       el,
//       props: {
//         // @ts-ignore
//         direction,
//         // @ts-ignore
//         width,
//         // @ts-ignore
//         height,
//       },
//     } = this;
//
//     if (direction === 'left' || direction === 'right') {
//       // 赋值宽度
//       // @ts-ignore
//       el?.style.height = '100%';
//       width
//         ? // @ts-ignore
//           (el?.style.width = width)
//         : // @ts-ignore
//           (el?.style.width = `${el?.parentElement?.offsetWidth * 0.9}px`);
//     } else {
//       // 赋值高度
//       // @ts-ignore
//       el?.style.width = '100%';
//       height
//         ? // @ts-ignore
//           (el?.style.height = height)
//         : // @ts-ignore
//           (el?.style.height = `${el?.parentElement?.offsetHeight * 0.3}px`);
//     }
//
//     // 赋值默认位置
//     // @ts-ignore
//     this.positionConfig['init'][this.props.direction]();
//
//     if (this.state.collapse) {
//       // @ts-ignore
//       this.positionConfig['show'][this.props.direction](0);
//     }
//   }
//
//   /**
//    * show
//    */
//   protected show() {
//     const { onBeforeShow } = this.props;
//     if (onBeforeShow) {
//       onBeforeShow();
//     }
//
//     const { direction } = this.props;
//
//     this.setState(
//       {
//         collapse: true,
//       },
//       () => {
//         // @ts-ignore
//         this.positionConfig['show'][direction]();
//       },
//     );
//   }
//
//   /**
//    * close
//    */
//   protected close() {
//     const { onBeforeClose } = this.props;
//     if (onBeforeClose) {
//       onBeforeClose();
//     }
//
//     const { direction } = this.props;
//
//     this.setState(
//       {
//         collapse: false,
//       },
//       () => {
//         // @ts-ignore
//         this.positionConfig['close'][direction]();
//       },
//     );
//   }
// }
//
// export default SlideLayout;

import React from 'react';
import type { OverlayProps } from './types';

export default (props: OverlayProps) => {
  const { time = 300 } = props;

  function getDuration(_time: undefined | null | string | number) {
    return _time !== undefined && _time !== null ? _time : time;
  }

  return {
    getDuration,
  };
};
