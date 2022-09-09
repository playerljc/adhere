import React, { FC, useContext, useLayoutEffect, useRef } from 'react';
import classNames from 'classnames';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import { SplitLayoutProps } from './types';

const FlexContext = FlexLayout.Context;
const flexLayoutSelectorPrefix = FlexLayout.selectorPrefix;
const directionProp = {
  horizontal: {
    page: 'pageX',
    dimension: 'width',
    offset: 'offsetWidth',
  },
  vertical: {
    page: 'pageY',
    dimension: 'height',
    offset: 'offsetHeight',
  },
};
const selectorPrefix = 'adhere-ui-splitlayout';

/**
 * toPoint - 百分数转化为小数
 * @param percent
 */
function toPoint(percent: string) {
  let str = Number(percent.replace('%', ''));

  return str / 100;
}

const SplitLayout: FC<SplitLayoutProps> = (props) => {
  const {
    className = '',
    style = {},
    maxSize = '100%',
    minSize = 10,
    onCanDrag,
    onDragStarted,
    onDragFinished,
    onOut,
    onChange,
  } = props;

  const { direction } = useContext(FlexContext);

  const el = useRef<HTMLDivElement>(null);
  const fixedEl = useRef<HTMLElement>();
  const autoEl = useRef<HTMLElement>();
  const containerEl = useRef<HTMLElement>();
  const situation = useRef(
    new Map([
      [`${flexLayoutSelectorPrefix}-fixed_${flexLayoutSelectorPrefix}-auto`, true],
      [`${flexLayoutSelectorPrefix}-auto_${flexLayoutSelectorPrefix}-fixed`, true],
    ]),
  );

  const isEnter = useRef(false);
  const isOut = useRef(false);
  const isDown = useRef(false);
  const isMove = useRef(false);

  const startVal = useRef(0);
  const changeVal = useRef(0);
  const changeBaseVal = useRef(0);
  const fixedValue = useRef(0);
  const maxDimension = useRef(0);

  /**
   * checked
   */
  function checked() {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    const keys = Array.from(situation.current.keys());

    return keys.some((key) => {
      const arr = key.split('_');
      const prevKey = arr[0];
      const nextKey = arr[1];

      return (
        previousElementSibling?.classList.contains(prevKey) &&
        nextElementSibling?.classList.contains(nextKey)
      );
    });
  }

  /**
   * getFixedEl
   */
  function getFixedEl(): HTMLElement {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }

  /**
   * getAutoEl
   */
  function getAutoEl(): HTMLElement {
    const { previousElementSibling, nextElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-auto`)
      ? (previousElementSibling as HTMLElement)
      : (nextElementSibling as HTMLElement);
  }

  /**
   * getResizeClass
   */
  function getResizeClass(): 'rowResize' | 'colResize' {
    return direction === 'vertical' ? 'rowResize' : 'colResize';
  }

  /**
   * getProps
   */
  function getProps() {
    return directionProp[direction];
  }

  function getFixedElPosition(): 'prev' | 'next' {
    const { previousElementSibling } = el.current as HTMLDivElement;

    return previousElementSibling?.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
      ? 'prev'
      : 'next';
  }

  /**
   * getMaxDimension
   */
  function getMaxDimension(): number {
    if (maxDimension.current) {
      return maxDimension.current;
    }

    const fixedEl = getFixedEl();

    const autoEl = getAutoEl();

    const { offset } = getProps();

    maxDimension.current = fixedEl[offset] + autoEl[offset];

    return maxDimension.current;
  }

  function getMaxSize(): number {
    let resultVal = 0;

    const maxDimension = getMaxDimension();

    if (typeof maxSize === 'string') {
      resultVal = maxDimension * toPoint(maxSize);
    } else if (typeof maxSize === 'number') {
      resultVal = maxSize;
    }

    return resultVal > maxDimension ? maxDimension : resultVal;
  }

  /**
   * getMinSize
   */
  function getMinSize(): number {
    let resultVal = 0;

    const maxDimension = getMaxDimension();

    const { offset } = getProps();

    const elSize = el[offset];

    if (typeof minSize === 'string') {
      resultVal = maxDimension * toPoint(minSize);
    } else if (typeof minSize === 'number') {
      resultVal = minSize;
    }

    return resultVal < elSize ? elSize : resultVal;
  }

  function onMouseenter(e) {
    el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

    isOut.current = false;

    isEnter.current = true;

    onCanDrag && onCanDrag(e);
  }

  function onMousedown(e) {
    el.current?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);

    if (isEnter.current) {
      isDown.current = true;

      startVal.current = e[getProps().page];

      fixedValue.current = fixedEl.current?.[getProps().offset];

      onDragStarted && onDragStarted(e);
    }
  }

  function onMouseup(e) {
    el.current?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

    if (isDown.current) {
      isDown.current = false;

      isMove.current = false;

      isEnter.current = !isOut;

      startVal.current = 0;

      changeBaseVal.current = changeBaseVal.current + changeVal.current;

      onDragFinished && onDragFinished(e);
    }
  }

  function onMouseleave(e) {
    if (isDown.current) {
      isDown.current = false;

      isMove.current = false;

      isEnter.current = false;

      startVal.current = 0;

      changeBaseVal.current += changeVal.current;

      onDragFinished && onDragFinished(e);
    }
  }

  function onMousemove(e) {
    if (isEnter.current && isDown.current) {
      isMove.current = true;

      let end = e[getProps().page];

      changeVal.current = end - startVal.current;

      const position = getFixedElPosition();

      const computedValue =
        position === 'prev'
          ? fixedValue.current + changeVal.current
          : fixedValue.current - changeVal.current;

      let targetValue;

      const maxSize = getMaxSize();

      const minSize = getMinSize();

      if (computedValue >= maxSize || computedValue <= minSize) {
        if (computedValue >= maxSize) {
          targetValue = maxSize;
        } else {
          if (computedValue <= minSize) {
            targetValue = minSize;
          }
        }
      } else {
        targetValue = computedValue;
      }

      (fixedEl.current as HTMLElement).style[getProps().dimension] = `${targetValue}px`;

      onChange && onChange(e);
    }
  }

  function onMouseout(e) {
    isOut.current = true;

    if (!isDown.current) {
      isEnter.current = false;

      onChange && onChange(e);
    }
  }

  function initEvents() {
    el.current?.removeEventListener('mouseenter', onMouseenter);

    el.current?.addEventListener('mouseenter', onMouseenter);

    el.current?.removeEventListener('mousedown', onMousedown);

    el.current?.addEventListener('mousedown', onMousedown);

    fixedEl.current?.removeEventListener('mousemove', onMousemove);

    el.current?.removeEventListener('mousemove', onMousemove);

    autoEl.current?.removeEventListener('mousemove', onMousemove);

    fixedEl.current?.addEventListener('mousemove', onMousemove);

    el.current?.addEventListener('mousemove', onMousemove);

    autoEl.current?.addEventListener('mousemove', onMousemove);

    fixedEl.current?.removeEventListener('mouseout', onMouseout);

    el.current?.removeEventListener('mouseout', onMouseout);

    autoEl.current?.removeEventListener('mouseout', onMouseout);

    fixedEl.current?.addEventListener('mouseout', onMouseout);

    el.current?.addEventListener('mouseout', onMouseout);

    autoEl.current?.addEventListener('mouseout', onMouseout);

    fixedEl.current?.removeEventListener('mouseup', onMouseup);

    el.current?.removeEventListener('mouseup', onMouseup);

    autoEl.current?.removeEventListener('mouseup', onMouseup);

    fixedEl.current?.addEventListener('mouseup', onMouseup);

    el.current?.addEventListener('mouseup', onMouseup);

    autoEl.current?.addEventListener('mouseup', onMouseup);

    containerEl.current?.removeEventListener('mouseleave', onMouseleave);

    containerEl.current?.addEventListener('mouseleave', onMouseleave);
  }

  function removeEvents() {
    el.current?.removeEventListener('mouseenter', onMouseenter);

    el.current?.removeEventListener('mouseenter', onMouseenter);

    el.current?.removeEventListener('mousedown', onMousedown);

    el.current?.removeEventListener('mousedown', onMousedown);

    fixedEl.current?.removeEventListener('mousemove', onMousemove);

    el.current?.removeEventListener('mousemove', onMousemove);

    autoEl.current?.removeEventListener('mousemove', onMousemove);

    fixedEl.current?.removeEventListener('mousemove', onMousemove);

    el.current?.removeEventListener('mousemove', onMousemove);

    autoEl.current?.removeEventListener('mousemove', onMousemove);

    fixedEl.current?.removeEventListener('mouseout', onMouseout);

    el.current?.removeEventListener('mouseout', onMouseout);

    autoEl.current?.removeEventListener('mouseout', onMouseout);

    fixedEl.current?.removeEventListener('mouseout', onMouseout);

    el.current?.removeEventListener('mouseout', onMouseout);

    autoEl.current?.removeEventListener('mouseout', onMouseout);

    fixedEl.current?.removeEventListener('mouseup', onMouseup);

    el.current?.removeEventListener('mouseup', onMouseup);

    autoEl.current?.removeEventListener('mouseup', onMouseup);

    fixedEl.current?.removeEventListener('mouseup', onMouseup);

    el.current?.removeEventListener('mouseup', onMouseup);

    autoEl.current?.removeEventListener('mouseup', onMouseup);

    containerEl.current?.removeEventListener('mouseleave', onMouseleave);

    containerEl.current?.removeEventListener('mouseleave', onMouseleave);
  }

  useLayoutEffect(() => {
    if (checked()) {
      fixedEl.current = getFixedEl();

      autoEl.current = getAutoEl();

      containerEl.current = el.current?.parentElement as HTMLElement;

      containerEl.current.classList.add(`${selectorPrefix}-noSelect`);

      initEvents();
    }

    return () => removeEvents();
  }, []);

  useLayoutEffect(() => {
    if (checked()) {
      isEnter.current = false;
      isOut.current = false;
      isDown.current = false;
      isMove.current = false;

      startVal.current = 0;
      changeVal.current = 0;
      changeBaseVal.current = 0;
      fixedValue.current = 0;
      maxDimension.current = 0;

      fixedEl.current = getFixedEl();

      autoEl.current = getAutoEl();

      initEvents();
    }

    return () => removeEvents();
  });

  return (
    <div
      ref={el}
      className={classNames(selectorPrefix, `${selectorPrefix}-${direction}`, className || '')}
      style={style || {}}
    />
  );
};

// /**
//  * SplitLayout
//  * @class SplitLayout
//  * @classdesc SplitLayout
//  */
// class SplitLayout extends React.Component<ISplitLayoutProps, any> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   // @ts-ignore
//   private props: ISplitLayoutProps | undefined;
//   private direction: 'vertical' | 'horizontal' | undefined;
//   private el: HTMLDivElement | null | undefined;
//   private situation = new Map([
//     [`${flexLayoutSelectorPrefix}-fixed_${flexLayoutSelectorPrefix}-auto`, true],
//     [`${flexLayoutSelectorPrefix}-auto_${flexLayoutSelectorPrefix}-fixed`, true],
//   ]);
//
//   private directionProp = {
//     horizontal: {
//       page: 'pageX',
//       dimension: 'width',
//       offset: 'offsetWidth',
//     },
//     vertical: {
//       page: 'pageY',
//       dimension: 'height',
//       offset: 'offsetHeight',
//     },
//   };
//
//   private isEnter = false;
//   private isOut = false;
//   private isDown = false;
//   private isMove = false;
//
//   private startVal = 0;
//   private changeVal = 0;
//   private changeBaseVal = 0;
//   private fixedValue = 0;
//   private maxDimension = 0;
//
//   private fixedEl: HTMLElement | undefined;
//   private autoEl: HTMLElement | undefined;
//   private containerEl: HTMLElement | undefined;
//
//   componentDidMount() {
//     if (this.checked()) {
//       this.fixedEl = this.getFixedEl();
//
//       this.autoEl = this.getAutoEl();
//
//       // @ts-ignore
//       this.containerEl = this.el.parentElement;
//
//       this.containerEl?.classList.add(`${selectorPrefix}-noSelect`);
//
//       this.initEvents();
//     }
//   }
//
//   componentDidUpdate() {
//     if (this.checked()) {
//       this.isEnter = false;
//       this.isOut = false;
//       this.isDown = false;
//       this.isMove = false;
//
//       this.startVal = 0;
//       this.changeVal = 0;
//       this.changeBaseVal = 0;
//       this.fixedValue = 0;
//       this.maxDimension = 0;
//
//       this.fixedEl = this.getFixedEl();
//
//       this.autoEl = this.getAutoEl();
//
//       this.initEvents();
//     }
//   }
//
//   /**
//    * checked
//    */
//   private checked(): boolean {
//     // @ts-ignore
//     const { previousElementSibling, nextElementSibling } = this.el;
//
//     const keys = Array.from(this.situation.keys());
//
//     return keys.some((key) => {
//       const arr = key.split('_');
//       const prevKey = arr[0];
//       const nextKey = arr[1];
//
//       // console.log('prevKey', prevKey);
//       // console.log('nextKey', nextKey);
//       // console.log('previousElementSibling', previousElementSibling);
//       // console.log('nextElementSibling', nextElementSibling);
//
//       return (
//         previousElementSibling.classList.contains(prevKey) &&
//         nextElementSibling.classList.contains(nextKey)
//       );
//     });
//   }
//
//   /**
//    * getFixedEl
//    */
//   private getFixedEl(): HTMLElement {
//     // @ts-ignore
//     const { previousElementSibling, nextElementSibling } = this.el;
//
//     return previousElementSibling.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
//       ? previousElementSibling
//       : nextElementSibling;
//   }
//
//   /**
//    * getAutoEl
//    */
//   private getAutoEl(): HTMLElement {
//     // @ts-ignore
//     const { previousElementSibling, nextElementSibling } = this.el;
//
//     return previousElementSibling.classList.contains(`${flexLayoutSelectorPrefix}-auto`)
//       ? previousElementSibling
//       : nextElementSibling;
//   }
//
//   /**
//    * getFixedElPosition
//    */
//   private getFixedElPosition(): 'prev' | 'next' {
//     // @ts-ignore
//     const { previousElementSibling } = this.el;
//
//     return previousElementSibling.classList.contains(`${flexLayoutSelectorPrefix}-fixed`)
//       ? 'prev'
//       : 'next';
//   }
//
//   /**
//    * getMaxDimension
//    */
//   private getMaxDimension(): number {
//     if (this.maxDimension) {
//       return this.maxDimension;
//     }
//
//     const fixedEl = this.getFixedEl();
//
//     const autoEl = this.getAutoEl();
//
//     // @ts-ignore
//     const { offset } = this.getProps();
//
//     // @ts-ignore
//     this.maxDimension = fixedEl[offset] + autoEl[offset];
//
//     return this.maxDimension;
//   }
//
//   /**
//    * getResizeClass
//    */
//   private getResizeClass(): 'rowResize' | 'colResize' {
//     const { direction } = this;
//
//     return direction === 'vertical' ? 'rowResize' : 'colResize';
//   }
//
//   /**
//    * getProps
//    */
//   private getProps() {
//     // @ts-ignore
//     return this.directionProp[this.direction];
//   }
//
//   /**
//    * getMaxSize
//    */
//   private getMaxSize(): number {
//     // @ts-ignore
//     const { maxSize } = this.props;
//
//     let resultVal = 0;
//
//     const maxDimension = this.getMaxDimension();
//
//     if (typeof maxSize === 'string') {
//       resultVal = maxDimension * toPoint(maxSize);
//     } else if (typeof maxSize === 'number') {
//       resultVal = maxSize;
//     }
//
//     return resultVal > maxDimension ? maxDimension : resultVal;
//   }
//
//   /**
//    * getMinSize
//    */
//   private getMinSize(): number {
//     // @ts-ignore
//     const { minSize } = this.props;
//
//     let resultVal = 0;
//
//     const maxDimension = this.getMaxDimension();
//
//     const { offset } = this.getProps();
//
//     // @ts-ignore
//     const elSize = this.el[offset];
//
//     if (typeof minSize === 'string') {
//       resultVal = maxDimension * toPoint(minSize);
//     } else if (typeof minSize === 'number') {
//       resultVal = minSize;
//     }
//
//     return resultVal < elSize ? elSize : resultVal;
//   }
//
//   initEvents() {
//     const { fixedEl, autoEl, containerEl } = this;
//
//     const { el: splitEl } = this;
//
//     // @ts-ignore
//     this.el.removeEventListener('mouseenter', this.onMouseenter);
//     // @ts-ignore
//     this.el.addEventListener('mouseenter', this.onMouseenter);
//
//     // @ts-ignore
//     this.el.removeEventListener('mousedown', this.onMousedown);
//     // @ts-ignore
//     this.el.addEventListener('mousedown', this.onMousedown);
//
//     // @ts-ignore
//     fixedEl.removeEventListener('mousemove', this.onMousemove);
//     // @ts-ignore
//     splitEl.removeEventListener('mousemove', this.onMousemove);
//     // @ts-ignore
//     autoEl.removeEventListener('mousemove', this.onMousemove);
//
//     // @ts-ignore
//     fixedEl.addEventListener('mousemove', this.onMousemove);
//     // @ts-ignore
//     splitEl.addEventListener('mousemove', this.onMousemove);
//     // @ts-ignore
//     autoEl.addEventListener('mousemove', this.onMousemove);
//
//     // @ts-ignore
//     fixedEl.removeEventListener('mouseout', this.onMouseout);
//     // @ts-ignore
//     splitEl.removeEventListener('mouseout', this.onMouseout);
//     // @ts-ignore
//     autoEl.removeEventListener('mouseout', this.onMouseout);
//
//     // @ts-ignore
//     fixedEl.addEventListener('mouseout', this.onMouseout);
//     // @ts-ignore
//     splitEl.addEventListener('mouseout', this.onMouseout);
//     // @ts-ignore
//     autoEl.addEventListener('mouseout', this.onMouseout);
//
//     // @ts-ignore
//     fixedEl.removeEventListener('mouseup', this.onMouseup);
//     // @ts-ignore
//     splitEl.removeEventListener('mouseup', this.onMouseup);
//     // @ts-ignore
//     autoEl.removeEventListener('mouseup', this.onMouseup);
//
//     // @ts-ignore
//     fixedEl.addEventListener('mouseup', this.onMouseup);
//     // @ts-ignore
//     splitEl.addEventListener('mouseup', this.onMouseup);
//     // @ts-ignore
//     autoEl.addEventListener('mouseup', this.onMouseup);
//
//     // @ts-ignore
//     containerEl.removeEventListener('mouseleave', this.onMouseleave);
//     // @ts-ignore
//     containerEl.addEventListener('mouseleave', this.onMouseleave);
//   }
//
//   onMouseenter = (e) => {
//     // console.log('mouseenter');
//
//     const {
//       el: splitEl,
//       props: {
//         // @ts-ignore
//         onCanDrag,
//       },
//     } = this;
//
//     // @ts-ignore
//     splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);
//
//     this.isOut = false;
//
//     this.isEnter = true;
//
//     if (onCanDrag) {
//       onCanDrag(e);
//     }
//   };
//
//   onMousedown = (e) => {
//     // console.log('mousedown');
//
//     const {
//       el: splitEl,
//       fixedEl,
//       props: {
//         // @ts-ignore
//         onDragStarted,
//       },
//     } = this;
//
//     // @ts-ignore
//     splitEl.classList.remove(`${selectorPrefix}-${this.getResizeClass()}`);
//
//     if (this.isEnter) {
//       this.isDown = true;
//
//       this.startVal = e[this.getProps().page];
//
//       // @ts-ignore
//       this.fixedValue = fixedEl[this.getProps().offset];
//
//       if (onDragStarted) {
//         onDragStarted(e);
//       }
//     }
//   };
//
//   onMouseup = (e) => {
//     // console.log('mouseup');
//
//     const { el: splitEl } = this;
//
//     // @ts-ignore
//     splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);
//
//     if (this.isDown) {
//       // @ts-ignore
//       const { onDragFinished } = this.props;
//
//       this.isDown = false;
//
//       this.isMove = false;
//
//       this.isEnter = !this.isOut;
//
//       this.startVal = 0;
//
//       this.changeBaseVal += this.changeVal;
//
//       if (onDragFinished) {
//         onDragFinished(e);
//       }
//     }
//   };
//
//   onMouseleave = (e) => {
//     // console.log('onMouseleave');
//
//     if (this.isDown) {
//       // @ts-ignore
//       const { onDragFinished } = this.props;
//
//       this.isDown = false;
//
//       this.isMove = false;
//
//       this.isEnter = false;
//
//       this.startVal = 0;
//
//       this.changeBaseVal += this.changeVal;
//
//       if (onDragFinished) {
//         onDragFinished(e);
//       }
//     }
//   };
//
//   onMousemove = (e) => {
//     // e.stopPropagation();
//
//     // @ts-ignore
//     const { onChange } = this.props;
//
//     // console.log(this.isEnter, this.isDown);
//
//     if (this.isEnter && this.isDown) {
//       this.isMove = true;
//
//       let end = e[this.getProps().page];
//
//       this.changeVal = end - this.startVal;
//
//       const position = this.getFixedElPosition();
//
//       const computedValue =
//         position === 'prev' ? this.fixedValue + this.changeVal : this.fixedValue - this.changeVal;
//
//       let targetValue;
//
//       const maxSize = this.getMaxSize();
//
//       const minSize = this.getMinSize();
//
//       // @ts-ignore
//       if (computedValue >= maxSize || computedValue <= minSize) {
//         // @ts-ignore
//         if (computedValue >= maxSize) {
//           targetValue = maxSize;
//         } else {
//           // @ts-ignore
//           if (computedValue <= minSize) {
//             targetValue = minSize;
//           }
//         }
//       } else {
//         targetValue = computedValue;
//       }
//
//       // @ts-ignore
//       this.fixedEl.style[this.getProps().dimension] = `${targetValue}px`;
//
//       if (onChange) {
//         onChange(e);
//       }
//     }
//   };
//
//   onMouseout = (e) => {
//     // console.log('onMouseout');
//
//     this.isOut = true;
//
//     if (!this.isDown) {
//       // split.style.cursor = 'default';
//       this.isEnter = false;
//
//       // @ts-ignore
//       const { onChange } = this.props;
//
//       if (onChange) {
//         onChange(e);
//       }
//     }
//   };
//
//   renderInner = ({ direction }): React.ReactElement => {
//     // console.log('renderInner-direction',direction);
//     this.direction = direction;
//
//     // @ts-ignore
//     const { className, style } = this.props;
//
//     return (
//       <div
//         ref={(el) => (this.el = el)}
//         style={{ ...style }}
//         className={classNames(
//           selectorPrefix,
//           `${selectorPrefix}-${direction}`,
//           className.split(/\s+/),
//         )}
//       />
//     );
//   };
//
//   render() {
//     return <FlexContext.Consumer>{this.renderInner}</FlexContext.Consumer>;
//   }
// }
//
// SplitLayout.defaultProps = {
//   onCanDrag: () => {},
//   onDragStarted: () => {},
//   onDragFinished: () => {},
//   onOut: () => {},
//   onChange: () => {},
//   maxSize: '100%',
//   minSize: 10,
//   className: '',
//   style: {},
// };
//
// SplitLayout.propTypes = {
//   onCanDrag: PropTypes.func,
//   onDragStarted: PropTypes.func,
//   onDragFinished: PropTypes.func,
//   onOut: PropTypes.func,
//   onChange: PropTypes.func,
//   maxSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   minSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   className: PropTypes.string,
//   style: PropTypes.object,
// };

export default SplitLayout;
