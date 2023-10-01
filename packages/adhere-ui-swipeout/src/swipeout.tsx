import classNames from 'classnames';
import React, { FC, memo, useEffect, useLayoutEffect, useRef } from 'react';
import { Swiper } from 'swiper';

import { SwipeOutProps } from './types';

const selectorPrefix = 'adhere-ui-swipe-out';

const SwipeOut: FC<SwipeOutProps> = (props) => {
  const {
    className = '',
    style = {},
    contentClassName = '',
    contentStyle = {},
    beforeClassName = '',
    beforeStyle = {},
    afterClassName = '',
    afterStyle = {},
    before,
    after,
    beforeShow = false,
    afterShow = false,
    direction = 'horizontal',
    duration = 0,
    children,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const swiper = useRef<Swiper>();
  const map = useRef(
    new Map([
      [[true, true].toString(), 1],
      [[false, false].toString(), 1],
      [[true, false].toString(), 0],
      [[false, true].toString(), 2],
    ]),
  );

  function slide() {
    swiper?.current?.slideTo?.(
      map.current.get([beforeShow, afterShow].toString()) as number,
      duration,
    );
  }

  function createSwiper() {
    if (swiper.current) {
      return;
      // swiper.current.destroy();
    }

    const initialSlide = map.current.get([beforeShow, afterShow].toString());

    swiper.current = new Swiper(ref.current as HTMLElement, {
      init: false,
      // 初始化在第一个选项卡上
      initialSlide,
      direction: direction,
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 0,
    });

    swiper?.current?.on?.('init', () => trigger('onInit'));

    swiper?.current?.on?.('slideChangeTransitionStart', () =>
      trigger('onSlideChangeTransitionStart', swiper.current?.activeIndex),
    );

    swiper?.current?.on?.('slideChangeTransitionEnd', () =>
      trigger('onSlideChangeTransitionEnd', swiper.current?.activeIndex),
    );

    swiper?.current?.init?.();
  }

  function trigger(action: string, params?: any): void {
    if (props[action]) {
      props[action](params);
    }
  }

  useLayoutEffect(() => createSwiper(), []);
  useEffect(() => {
    slide();
  }, [beforeShow, afterShow, duration]);
  useEffect(() => {
    swiper.current && swiper.current.changeDirection(direction);
  }, [direction]);

  return (
    <div
      className={classNames(selectorPrefix, 'swiper', className ?? '')}
      style={style ?? {}}
      ref={ref}
    >
      <div className="swiper-wrapper">
        <div
          className={classNames('swiper-slide', `${selectorPrefix}-before`, beforeClassName ?? '')}
          style={beforeStyle ?? {}}
        >
          {before?.()}
        </div>

        <div
          className={classNames(
            'swiper-slide',
            `${selectorPrefix}-content`,
            contentClassName ?? '',
          )}
          style={contentStyle ?? {}}
        >
          {children}
        </div>

        <div
          className={classNames('swiper-slide', `${selectorPrefix}-after`, afterClassName ?? '')}
          style={afterStyle ?? {}}
        >
          {after?.()}
        </div>
      </div>
    </div>
  );
};

// /**
//  * SwipeOut
//  * @class SwipeOut
//  * @classdesc SwipeOut
//  */
// class SwipeOut extends React.Component<ISwipeOutProps> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   private ref = React.createRef();
//   private swiper: Swiper | null = null;
//
//   private map = new Map([
//     [[true, true].toString(), 1],
//     [[false, false].toString(), 1],
//     [[true, false].toString(), 0],
//     [[false, true].toString(), 2],
//   ]);
//
//   componentDidMount() {
//     this.createSwiper();
//   }
//
//   componentWillReceiveProps(nextProps: Readonly<ISwipeOutProps>) {
//     if (this.props.direction !== nextProps.direction) {
//       this.swiper.changeDirection(nextProps.direction);
//     }
//
//     if (
//       this.props.beforeShow !== nextProps.beforeShow ||
//       this.props.afterShow !== nextProps.afterShow
//     ) {
//       this.slide(nextProps);
//     }
//   }
//
//   private slide(props: ISwipeOutProps): void {
//     const { beforeShow, afterShow, duration } = props;
//
//     this.swiper.slideTo(this.map.get([beforeShow, afterShow].toString()), duration);
//   }
//
//   /**
//    * createSwiper
//    * @private
//    */
//   private createSwiper(): void {
//     if (this.swiper) {
//       this.swiper.destroy();
//     }
//
//     const { beforeShow, afterShow } = this.props;
//
//     // console.log('beforeShow-afterShow', beforeShow, afterShow, [beforeShow, afterShow].toString());
//
//     const initialSlide = this.map.get([beforeShow, afterShow].toString());
//
//     // console.log('initialSlide', initialSlide);
//
//     this.swiper = new Swiper(this.ref.current, {
//       init: false,
//       // 初始化在第一个选项卡上
//       initialSlide,
//       direction: this.props.direction,
//       slidesPerView: 'auto',
//       centeredSlides: false,
//       spaceBetween: 0,
//     });
//
//     this.swiper.on('init', () => {
//       this.trigger('onInit');
//     });
//
//     this.swiper.on('slideChangeTransitionStart', () => {
//       this.trigger('onSlideChangeTransitionStart', this.swiper.activeIndex);
//     });
//
//     this.swiper.on('slideChangeTransitionEnd', () => {
//       this.trigger('onSlideChangeTransitionEnd', this.swiper.activeIndex);
//     });
//
//     this.swiper.init();
//   }
//
//   /**
//    * trigger
//    * @param action
//    * @param params
//    * @private
//    */
//   private trigger(action: string, params?: any): void {
//     if (this.props[action]) {
//       this.props[action](params);
//     }
//   }
//
//   render() {
//     // @ts-ignore
//     const {
//       className,
//       style,
//       contentClassName,
//       contentStyle,
//       beforeClassName,
//       beforeStyle,
//       afterClassName,
//       afterStyle,
//       before,
//       after,
//       children,
//     } = this.props;
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
//         // @ts-ignore
//         ref={this.ref}
//       >
//         <div className="swiper-wrapper">
//           <div
//             className={classNames(
//               'swiper-slide',
//               `${selectorPrefix}-before`,
//               // @ts-ignore
//               beforeClassName.split(/\s+/),
//             )}
//             style={{ ...beforeStyle }}
//           >
//             {before()}
//           </div>
//           <div
//             className={classNames(
//               'swiper-slide',
//               `${selectorPrefix}-content`,
//               // @ts-ignore
//               contentClassName.split(/\s+/),
//             )}
//             style={{ ...contentStyle }}
//           >
//             {children}
//           </div>
//           <div
//             className={classNames(
//               'swiper-slide',
//               `${selectorPrefix}-after`,
//               // @ts-ignore
//               afterClassName.split(/\s+/),
//             )}
//             style={{ ...afterStyle }}
//           >
//             {after()}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// SwipeOut.defaultProps = {
//   className: '',
//   style: {},
//   beforeClassName: '',
//   beforeStyle: {},
//   afterClassName: '',
//   afterStyle: {},
//   contentClassName: '',
//   contentStyle: {},
//   beforeShow: false,
//   afterShow: false,
//   direction: 'horizontal',
//   duration: 0,
//   before: () => null,
//   after: () => null,
// };
//
// SwipeOut.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   beforeClassName: PropTypes.string,
//   beforeStyle: PropTypes.object,
//   afterClassName: PropTypes.string,
//   afterStyle: PropTypes.object,
//   contentClassName: PropTypes.string,
//   contentStyle: PropTypes.object,
//   beforeShow: PropTypes.bool,
//   afterShow: PropTypes.bool,
//   direction: PropTypes.string,
//   duration: PropTypes.number,
//   before: PropTypes.func,
//   after: PropTypes.func,
//   onInit: PropTypes.func,
//   slideChangeTransitionStart: PropTypes.func,
//   slideChangeTransitionEnd: PropTypes.func,
// };

export default memo(SwipeOut);
