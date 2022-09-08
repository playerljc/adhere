import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';
import Swiper from 'swiper';

import { RevolvingHOCFunction, RevolvingRefHandle, RevolvingProps } from './types';

import RevolvingItem from './item';

const selectorPrefix = 'adhere-ui-revolving';

const Revolving: ForwardRefRenderFunction<RevolvingRefHandle, RevolvingProps> = (props, ref) => {
  const {
    className = '',
    style = {},
    classNameWrapper = '',
    styleWrapper = {},
    children,
    speed = 1000,
    delay = 1000,
    direction = 'top',
    loop = true,
    stopOnLastSlide = false,
    listeners = {},
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const wrapperEl = useRef<HTMLDivElement>(null);
  const swiper = useRef<Swiper>();

  function initial() {
    if (swiper.current) {
      if ('destory' in swiper.current && swiper.current.destory instanceof Function) {
        swiper.current.destory();
      }

      swiper.current = null;
    }

    swiper.current = new Swiper(el.current, {
      allowTouchMove: false,
      direction: getDirection(direction),
      loop,
      speed,
      autoplay: {
        delay,
        stopOnLastSlide,
        reverseDirection: direction === 'right' || direction === 'bottom',
      },
      on: listeners,
    });
  }

  function getDirection(direction) {
    return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
  }

  /**
   * start
   */
  function start() {
    swiper.current.autoplay.start();
  }

  /**
   * stop
   */
  function stop() {
    swiper.current.autoplay.stop();
  }

  /**
   * isRunning
   * @return {boolean}
   */
  function isRunning() {
    return swiper.current.autoplay.running;
  }

  useImperativeHandle(ref, () => ({
    start,
    stop,
    isRunning,
  }));

  useEffect(() => initial(), [speed, delay, direction, loop, stopOnLastSlide, listeners]);

  return (
    <div
      className={classNames(selectorPrefix, 'swiper-container', className || '')}
      style={style || {}}
      ref={el}
    >
      <div
        className={classNames(
          `${selectorPrefix}-wrapper`,
          'swiper-wrapper',
          classNameWrapper || '',
        )}
        style={styleWrapper || {}}
        ref={wrapperEl}
      >
        {children}
      </div>
    </div>
  );
};

// @ts-ignore
const RevolvingHOC: RevolvingHOCFunction<RevolvingRefHandle, RevolvingProps> = forwardRef<
  RevolvingRefHandle,
  RevolvingProps
>(Revolving);
RevolvingHOC.Item = RevolvingItem;

export default RevolvingHOC;

// /**
//  * Revolving
//  * @class Revolving
//  * @classdesc Revolving
//  */
// class Revolving extends React.Component<IRevolvingProps> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   // @ts-ignore
//   static Item: RevolvingItem = RevolvingItem;
//
//   private el: HTMLDivElement | null | undefined;
//   private wrapperEl: HTMLDivElement | null | undefined;
//   private swiper: Swiper;
//
//   componentDidMount() {
//     this.initial();
//   }
//
//   componentDidUpdate(
//     prevProps: Readonly<IRevolvingProps>,
//     prevState: Readonly<{}>,
//     snapshot?: any,
//   ) {
//     this.initial();
//   }
//
//   private initial() {
//     const { speed, delay, loop, direction, stopOnLastSlide, listeners } = this.props;
//
//     if (this.swiper) {
//       if ('destory' in this.swiper && this.swiper.destory instanceof Function) {
//         this.swiper.destory();
//       }
//
//       this.swiper = null;
//     }
//
//     this.swiper = new Swiper(this.el, {
//       allowTouchMove: false,
//       direction: this.getDirection(direction),
//       loop,
//       speed,
//       autoplay: {
//         delay,
//         stopOnLastSlide,
//         reverseDirection: direction === 'right' || direction === 'bottom',
//       },
//       on: listeners,
//     });
//   }
//
//   private getDirection(direction) {
//     return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
//   }
//
//   /**
//    * start
//    */
//   start() {
//     this.swiper.autoplay.start();
//   }
//
//   /**
//    * stop
//    */
//   stop() {
//     this.swiper.autoplay.stop();
//   }
//
//   /**
//    * isRunning
//    * @return {boolean}
//    */
//   isRunning() {
//     return this.swiper.autoplay.running;
//   }
//
//   render() {
//     // @ts-ignore
//     const { className, style, classNameWrapper, styleWrapper, children } = this.props;
//
//     // @ts-ignore
//     return (
//       <div
//         className={classNames(
//           selectorPrefix,
//           'swiper-container',
//           // @ts-ignore
//           className.split(/\s+/),
//         )}
//         style={{ ...style }}
//         ref={(el) => (this.el = el)}
//       >
//         <div
//           className={classNames(
//             `${selectorPrefix}-wrapper`,
//             'swiper-wrapper',
//             // @ts-ignore
//             classNameWrapper.split(/\s+/),
//           )}
//           style={{ ...styleWrapper }}
//           ref={(el) => (this.wrapperEl = el)}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   }
// }
//
// Revolving.defaultProps = {
//   className: '',
//   style: {},
//   classNameWrapper: '',
//   styleWrapper: {},
//
//   speed: 1000,
//   delay: 1000,
//   direction: 'top',
//   loop: true,
//   stopOnLastSlide: false,
//   listeners: {},
// };
//
// Revolving.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   classNameWrapper: PropTypes.string,
//   styleWrapper: PropTypes.object,
//
//   speed: PropTypes.number,
//   delay: PropTypes.number,
//   direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
//   loop: PropTypes.bool,
//   stopOnLastSlide: PropTypes.bool,
//   listeners: PropTypes.object,
// };
