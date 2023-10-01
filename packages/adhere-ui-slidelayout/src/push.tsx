import classNames from 'classnames';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { slider } from './slidelayout';
import { PushProps, SlideLayoutHandle } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slide-layout-push';

/**
 * Push
 * @param props
 * @param ref
 * @constructor
 */
const Push: ForwardRefRenderFunction<SlideLayoutHandle, PushProps> = (props, ref) => {
  const {
    masterClassName = '',
    masterStyle = {},
    className = '',
    style = {},
    slaveClassName = '',
    slaveStyle = {},
    zIndex = 9999,
    direction = 'left',
    slide,
    master,
    onAfterShow,
    onAfterClose,
  } = props;

  const pMasterEl = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLDivElement>(null);
  const pSlaveEl = useRef<HTMLDivElement>(null);

  const positionConfig = useRef({
    init: {
      left: () => {
        (el.current as HTMLDivElement).style.left = '0';

        (pSlaveEl.current as HTMLElement).style.left = `${
          (el.current as HTMLElement).offsetWidth
        }px`;

        slider(
          pMasterEl.current as HTMLElement,
          `-${(el.current as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          '0',
        );
      },
      right: () => {
        (el.current as HTMLElement).style.right = '0';

        (pSlaveEl.current as HTMLElement).style.right = `${
          (el.current as HTMLElement).offsetWidth
        }px`;

        slider(
          pMasterEl.current as HTMLElement,
          `${(el.current as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          '0',
        );
      },
    },
    show: {
      left: (time) => {
        slider(
          pMasterEl.current as HTMLElement,
          '0',
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterShow,
        );

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
      right: (time) => {
        slider(
          pMasterEl.current as HTMLElement,
          '0',
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterShow,
        );

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
    },
    close: {
      left: (time) => {
        slider(
          pMasterEl.current as HTMLElement,
          `-${(el.current as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
      right: (time) => {
        slider(
          pMasterEl.current as HTMLElement,
          `${(el.current as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
    },
  });

  const { getDuration, maskEl } = useSlide(props, el, positionConfig);

  useEffect(() => {
    const onTransitionend = () => {
      if (!props.collapse) {
        el?.current?.classList?.add?.(`${selectorPrefix}-hide`);
      }
    };

    pMasterEl?.current?.addEventListener?.('transitionend', onTransitionend);

    return () => {
      pMasterEl?.current?.removeEventListener?.('transitionend', onTransitionend);
    };
  });

  useEffect(() => {
    if (props.collapse) {
      el?.current?.classList?.remove?.(`${selectorPrefix}-hide`);
    }
  }, [props.collapse]);

  useEffect(() => {
    if (!props.collapse) {
      el?.current?.classList?.add?.(`${selectorPrefix}-hide`);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    getEl: () => pMasterEl.current,
  }));

  return (
    <div
      className={classNames(`${selectorPrefix}-master`, masterClassName ?? '')}
      style={{ ...(masterStyle ?? {}), zIndex: (zIndex as number) - 1 }}
      ref={pMasterEl}
    >
      <div
        className={classNames(selectorPrefix, direction, className ?? '')}
        style={{ ...(style ?? {}), zIndex }}
        ref={el}
      >
        {slide}
      </div>

      <div
        className={classNames(`${selectorPrefix}-slave`, slaveClassName ?? '')}
        style={{ ...(slaveStyle ?? {}), zIndex: (zIndex as number) - 2 }}
        ref={pSlaveEl}
      >
        {master}
      </div>
    </div>
  );
};

// /**
//  * Push
//  * @class Push
//  * @classdesc Push
//  */
// class Push extends SlideLayout<IPushProps, ISlideLayoutState> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   private pMasterEl: HTMLDivElement | null | undefined;
//   private pSlaveEl: HTMLDivElement | null | undefined;
//
//   constructor(props) {
//     super(props);
//
//     this.positionConfig = {
//       init: {
//         left: () => {
//
//           this.el.style.left = '0';
//
//           this.pSlaveEl.style.left = `${this.el.offsetWidth}px`;
//
//           slider(this.pMasterEl, `-${this.el.offsetWidth}px`, '0', '0', '0');
//         },
//         right: () => {
//
//           this.el.style.right = '0';
//
//           this.pSlaveEl.style.right = `${this.el.offsetWidth}px`;
//
//           slider(this.pMasterEl, `${this.el.offsetWidth}px`, '0', '0', '0');
//         },
//       },
//       show: {
//         left: (time) => {
//           slider(
//             this.pMasterEl,
//             '0',
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterShow,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//         right: (time) => {
//           slider(
//             this.pMasterEl,
//             '0',
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterShow,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//       },
//       close: {
//         left: (time) => {
//           slider(
//             this.pMasterEl,
//
//             `-${this.el.offsetWidth}px`,
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterClose,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'none';
//         },
//         right: (time) => {
//           slider(
//             this.pMasterEl,
//
//             `${this.el.offsetWidth}px`,
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterClose,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'none';
//         },
//       },
//     };
//
//     this.state = {
//       collapse: this.props.collapse,
//     };
//   }
//
//   render() {
//
//     const {
//       masterClassName,
//       masterStyle,
//       className,
//       style,
//       slaveClassName,
//       slaveStyle,
//       direction,
//       slide,
//       master,
//       zIndex,
//     } = this.props;
//
//
//     return (
//       <div
//         className={classNames(
//           `${selectorPrefix}-master`,
//
//           masterClassName || '',
//         )}
//         style={{ ...masterStyle, zIndex: zIndex - 1 }}
//         ref={(el) => (this.pMasterEl = el)}
//       >
//         <div
//           className={classNames(
//             selectorPrefix,
//             direction,
//
//             className || '',
//           )}
//           style={{ ...style, zIndex }}
//           ref={(el) => (this.el = el)}
//         >
//           {slide}
//         </div>
//
//         <div
//           className={classNames(
//             `${selectorPrefix}-slave`,
//
//             slaveClassName || '',
//           )}
//           style={{ ...slaveStyle, zIndex: zIndex - 2 }}
//           ref={(el) => (this.pSlaveEl = el)}
//         >
//           {master}
//         </div>
//       </div>
//     );
//   }
// }
//
// Push.defaultProps = {
//   masterClassName: '',
//   masterStyle: {},
//   className: '',
//   style: {},
//   slaveClassName: '',
//   slaveStyle: {},
//   width: '80%',
//   height: '40%',
//   mask: true,
//   zIndex: 9999,
//   time: 300,
//   direction: 'left',
//   collapse: false,
//   Slide: null,
//   master: null,
// };
//
// Push.propTypes = {
//   masterClassName: PropTypes.string,
//   masterStyle: PropTypes.object,
//   className: PropTypes.string,
//   style: PropTypes.object,
//   slaveClassName: PropTypes.string,
//   slaveStyle: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mask: PropTypes.bool,
//   zIndex: PropTypes.number,
//   time: PropTypes.number,
//   direction: PropTypes.oneOf(['left', 'right']),
//   collapse: PropTypes.bool,
//   onAfterShow: PropTypes.func,
//   onAfterClose: PropTypes.func,
//   onBeforeShow: PropTypes.func,
//   onBeforeClose: PropTypes.func,
//   slide: PropTypes.node,
//   master: PropTypes.node,
// };

export default memo(forwardRef<SlideLayoutHandle, PushProps>(Push));
