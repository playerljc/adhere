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

import React, {
  RefObject,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from 'react';
import { createMask } from './slidelayout';
import type { OverlayProps } from './types';

export default (
  props: OverlayProps,
  el: RefObject<HTMLDivElement>,
  positionConfig: MutableRefObject<{
    init: { top?: () => void; left?: () => void; bottom?: () => void; right?: () => void };
    show: {
      top?: (time?: number | string) => void;
      left?: (time?: number | string) => void;
      bottom?: (time?: number | string) => void;
      right?: (time?: number | string) => void;
    };
    close: {
      top?: (time?: number | string) => void;
      left?: (time?: number | string) => void;
      bottom?: (time?: number | string) => void;
      right?: (time?: number | string) => void;
    };
  }>,
) => {
  const {
    time = 300,
    mask = true,
    zIndex = 9999,
    direction = 'left',
    width = '80%',
    height = '40%',
    onBeforeClose,
  } = props;

  const [collapse, setCollapse] = useState(props.collapse);
  const maskEl = useRef<HTMLDivElement>();

  function close() {
    onBeforeClose && onBeforeClose();

    setCollapse(false);
  }

  function initial() {
    if (direction === 'left' || direction === 'right') {
      // 赋值宽度
      (el.current as HTMLElement).style.height = '100%';

      if (typeof width === 'string') {
        (el.current as HTMLElement).style.width = width;
      } else {
        (el.current as HTMLElement).style.width = `${
          (el.current?.parentElement as HTMLElement).offsetWidth * 0.9
        }px`;
      }
    } else {
      // 赋值高度
      (el.current as HTMLElement).style.width = '100%';

      if (typeof height === 'string') {
        (el.current as HTMLElement).style.height = height;
      } else {
        (el.current as HTMLElement).style.height = `${
          (el.current?.parentElement as HTMLElement).offsetHeight * 0.3
        }px`;
      }
    }

    // 赋值默认位置
    positionConfig.current['init'][direction]?.();

    if (collapse) {
      positionConfig.current['show'][direction]?.(0);
    }
  }

  useEffect(() => setCollapse(props.collapse as boolean), [props.collapse]);

  useLayoutEffect(() => {
    if (mask) {
      maskEl.current = createMask(zIndex!, () => close());

      (el.current?.parentElement as HTMLDivElement).insertBefore(
        maskEl.current as HTMLElement,
        el.current,
      );
    }

    initial();
  }, []);

  useLayoutEffect(() => {
    if (collapse) {
      positionConfig.current['show'][direction]?.();
    } else {
      positionConfig.current['close'][direction]?.();
    }
  }, [collapse]);

  function getDuration(_time: undefined | null | string | number) {
    return _time !== undefined && _time !== null ? _time : time;
  }

  return {
    getDuration,
    maskEl,
  };
};
