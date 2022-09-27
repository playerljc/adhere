import classNames from 'classnames';
import React, { FC, memo, useRef } from 'react';

import { slider } from './slidelayout';
import { RevealProps } from './types';
import useSlide from './useSlide';

const selectorPrefix = 'adhere-ui-slidelayout-reveal';

const Reveal: FC<RevealProps> = (props) => {
  const {
    masterClassName = '',
    masterStyle = {},
    slaveClassName = '',
    slaveStyle = {},
    zIndex = 9999,
    direction = 'left',
    slide = null,
    master = null,
    onAfterShow,
    onAfterClose,
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const rMasterEl = useRef<HTMLDivElement>(null);

  const positionConfig = useRef({
    init: {
      left: () => {
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        (el.current as HTMLElement).style.left = '0';
      },
      right: () => {
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        (el.current as HTMLElement).style.right = '0';
      },
    },
    show: {
      left: (time) => {
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (maskEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) - 2}`;

        slider(
          rMasterEl.current as HTMLElement,

          `${(el.current as HTMLElement).offsetWidth}px`,
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterShow,
        );

        if (maskEl.current) maskEl.current.style.display = 'block';
      },
      right: (time) => {
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (maskEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) - 2}`;

        slider(
          rMasterEl.current as HTMLElement,

          `-${(el.current as HTMLElement).offsetWidth}px`,
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
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        slider(
          rMasterEl.current as HTMLElement,
          '0',
          '0',
          '0',
          `${getDuration(time)}ms`,
          onAfterClose,
        );

        if (maskEl.current) maskEl.current.style.display = 'none';
      },
      right: (time) => {
        (el.current as HTMLElement).style.zIndex = `${zIndex}`;

        (rMasterEl.current as HTMLElement).style.zIndex = `${(zIndex as number) + 1}`;

        slider(
          rMasterEl.current as HTMLElement,
          '0',
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

  return (
    <>
      <div
        className={classNames(`${selectorPrefix}`, direction, slaveClassName || '')}
        style={{ ...(slaveStyle || {}), zIndex }}
        ref={el}
      >
        {slide}
      </div>
      <div
        className={classNames(`${selectorPrefix}-master`, masterClassName || '')}
        style={{ ...(masterStyle || {}), zIndex: (zIndex as number) + 1 }}
        ref={rMasterEl}
      >
        {master}
      </div>
    </>
  );
};

// /**
//  * Reveal
//  * @class Reveal
//  * @classdesc Reveal
//  */
// class Reveal extends SlideLayout<IRevealProps, ISlideLayoutState> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   private rMasterEl: HTMLDivElement | null | undefined;
//
//   constructor(props) {
//     super(props);
//
//     this.positionConfig = {
//       init: {
//         left: () => {
//
//           this.el.style.zIndex = this.props.zIndex;
//
//
//           this.rMasterEl.style.zIndex = this.props.zIndex + 1;
//
//
//           this.el.style.left = '0';
//         },
//         right: () => {
//
//           this.el.style.zIndex = this.props.zIndex;
//
//
//           this.rMasterEl.style.zIndex = this.props.zIndex + 1;
//
//
//           this.el.style.right = '0';
//         },
//       },
//       show: {
//         left: (time) => {
//
//           this.el.style.zIndex = this.props.zIndex;
//
//
//           this.maskEl.style.zIndex = this.props.zIndex - 1;
//
//
//           this.rMasterEl.style.zIndex = this.props.zIndex - 2;
//
//           slider(
//             this.rMasterEl,
//
//             `${this.el.offsetWidth}px`,
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterShow,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'block';
//         },
//         right: (time) => {
//
//           this.el.style.zIndex = this.props.zIndex;
//
//           this.maskEl.style.zIndex = this.props.zIndex - 1;
//
//           this.rMasterEl.style.zIndex = this.props.zIndex - 2;
//
//           slider(
//             this.rMasterEl,
//
//             `-${this.el.offsetWidth}px`,
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
//
//           this.el.style.zIndex = this.props.zIndex;
//
//
//           this.rMasterEl.style.zIndex = this.props.zIndex + 1;
//
//           slider(
//             this.rMasterEl,
//             '0',
//             '0',
//             '0',
//             `${this.getDuration(time)}ms`,
//             this.props.onAfterClose,
//           );
//
//           if (this.maskEl) this.maskEl.style.display = 'none';
//         },
//         right: (time) => {
//
//           this.el.style.zIndex = this.props.zIndex;
//
//
//           this.rMasterEl.style.zIndex = this.props.zIndex + 1;
//
//           slider(
//             this.rMasterEl,
//             '0',
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
//       <>
//         <div
//           className={classNames(
//             `${selectorPrefix}`,
//             direction,
//
//             slaveClassName|| '',
//           )}
//           style={{ ...slaveStyle, zIndex }}
//           ref={(el) => (this.el = el)}
//         >
//           {slide}
//         </div>
//         <div
//           className={classNames(
//             `${selectorPrefix}-master`,
//
//             masterClassName|| '',
//           )}
//           style={{ ...masterStyle, zIndex: zIndex + 1 }}
//           ref={(el) => (this.rMasterEl = el)}
//         >
//           {master}
//         </div>
//       </>
//     );
//   }
// }
//
// Reveal.defaultProps = {
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
//   slide: null,
//   master: null,
// };
//
// Reveal.propTypes = {
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

export default memo(Reveal);
