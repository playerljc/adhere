import React, { FC, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { OverlayProps } from './types';
import { slider } from './slidelayout';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slidelayout-overlay';

const Overlay: FC<OverlayProps> = (props) => {
  const {
    className = '',
    style = {},
    width = '80%',
    height = '40%',
    mask = true,
    zIndex = 9999,
    time = 300,
    direction = 'left',
    collapse = false,
    onAfterShow,
    children,
  } = props;

  const el = useRef<HTMLDivElement>(null);

  const positionConfig = useRef({
    init: {
      left: () => slider(el.current as HTMLDivElement, '-100%', '0', '0', '0'),
      right: () =>
        slider(
          el.current as HTMLDivElement,
          `${el.current?.parentElement?.offsetWidth}px`,
          '0',
          '0',
          '0',
        ),
      top: () => slider(el.current as HTMLDivElement, '0', '-100%', '0', '0'),
      bottom: () =>
        slider(
          el.current as HTMLDivElement,
          '0',
          `${el.current?.parentElement?.offsetHeight}px`,
          '0',
          '0',
        ),
    },
    show: {
      left: (time) => {
        slider(el.current as HTMLElement, '0', '0', '0', `${getDuration(time)}ms`, onAfterShow);

        if (maskEl.current) maskEl.style.display = 'block';
      },
      right: (time) => {
        slider(
          this.el,
          `${this.el?.parentElement?.offsetWidth - this.el.offsetWidth}px`,
          '0',
          '0',
          `${this.getDuration(time)}ms`,
          this.props.onAfterShow,
        );

        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      top: (time) => {
        slider(this.el, '0', '0', '0', `${this.getDuration(time)}ms`, this.props.onAfterShow);

        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      bottom: (time) => {
        slider(
          this.el,
          '0',
          `${this.el?.parentElement?.offsetHeight - this.el.offsetHeight}px`,
          '0',
          `${this.getDuration(time)}ms`,
          this.props.onAfterShow,
        );

        if (this.maskEl) this.maskEl.style.display = 'block';
      },
    },
    close: {
      left: (time) => {
        slider(this.el, '-100%', '0', '0', `${this.getDuration(time)}ms`, this.props.onAfterClose);

        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      right: (time) => {
        slider(
          this.el,
          `${this.el?.parentElement?.offsetWidth}px`,
          '0',
          '0',
          `${this.getDuration(time)}ms`,
          this.props.onAfterClose,
        );

        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      top: (time) => {
        slider(
          this.el,
          '0',
          `-${this.el?.parentElement?.offsetHeight}px`,
          '0',
          `${this.getDuration(time)}ms`,
          this.props.onAfterClose,
        );

        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      bottom: (time) => {
        slider(
          this.el,
          '0',
          `${this.el?.parentElement?.offsetHeight}px`,
          '0',
          `${this.getDuration(time)}ms`,
          this.props.onAfterClose,
        );

        if (this.maskEl) this.maskEl.style.display = 'none';
      },
    },
  });

  const {} = useSlide(props);

  return (
    <div
      className={classNames(selectorPrefix, direction, className || '')}
      style={{ ...(style || {}), zIndex }}
      ref={el}
    >
      {children}
    </div>
  );
};

// /**
//  * Overlay
//  * @class Overlay
//  * @classdesc Overlay
//  */
// class Overlay extends SlideLayout<IOverlayProps, ISlideLayoutState> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   constructor(props) {
//     super(props);
//
//     this.positionConfig = {
//       init: {
//         left: () => {
//           // @ts-ignore
//           slider(this.el, '-100%', '0', '0', '0');
//         },
//         right: () => {
//           // @ts-ignore
//           slider(this.el, `${this.el?.parentElement?.offsetWidth}px`, '0', '0', '0');
//         },
//         top: () => {
//           // @ts-ignore
//           slider(this.el, '0', '-100%', '0', '0');
//         },
//         bottom: () => {
//           // @ts-ignore
//           slider(this.el, '0', `${this.el?.parentElement?.offsetHeight}px`, '0', '0');
//         },
//       },
//       show: {
//         left: (time) => {
//           slider(this.el, '0', '0', '0', `${this.getDuration(time)}ms`, this.props.onAfterShow);
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//         right: (time) => {
//           slider(
//             this.el,
//             // @ts-ignore
//             `${this.el?.parentElement?.offsetWidth - this.el.offsetWidth}px`,
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterShow,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//         top: (time) => {
//           slider(this.el, '0', '0', '0', `${this.getDuration(time)}ms`, this.props.onAfterShow);
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//         bottom: (time) => {
//           slider(
//             this.el,
//             '0',
//             // @ts-ignore
//             `${this.el?.parentElement?.offsetHeight - this.el.offsetHeight}px`,
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
//             this.el,
//             '-100%',
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
//             this.el,
//             `${this.el?.parentElement?.offsetWidth}px`,
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterClose,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'none';
//         },
//         top: (time) => {
//           slider(
//             this.el,
//             '0',
//             `-${this.el?.parentElement?.offsetHeight}px`,
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterClose,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'none';
//         },
//         bottom: (time) => {
//           slider(
//             this.el,
//             '0',
//             `${this.el?.parentElement?.offsetHeight}px`,
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
//     // @ts-ignore
//     const { className, style, zIndex, direction, children } = this.props;
//
//     // @ts-ignore
//     return (
//       <div
//         className={classNames(
//           selectorPrefix,
//           direction,
//           // @ts-ignore
//           className.split(/\s+/),
//         )}
//         style={{ ...style, zIndex }}
//         ref={(el) => (this.el = el)}
//       >
//         {children}
//       </div>
//     );
//   }
// }
//
// Overlay.defaultProps = {
//   className: '',
//   style: {},
//   width: '80%',
//   height: '40%',
//   mask: true,
//   zIndex: 9999,
//   time: 300,
//   direction: 'left',
//   collapse: false,
// };
//
// Overlay.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   mask: PropTypes.bool,
//   zIndex: PropTypes.number,
//   time: PropTypes.number,
//   direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
//   collapse: PropTypes.bool,
//   onAfterShow: PropTypes.func,
//   onAfterClose: PropTypes.func,
//   onBeforeShow: PropTypes.func,
//   onBeforeClose: PropTypes.func,
// };

export default Overlay;
