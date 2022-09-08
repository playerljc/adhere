import React, { FC, useRef, useLayoutEffect, ReactElement } from 'react';
import classNames from 'classnames';

import { SliderScaleProps } from './types';

const selectorPrefix = 'adhere-ui-sliderscale';

const SliderScale: FC<SliderScaleProps> = (props) => {
  const {
    className = '',
    style = {},
    min = 0,
    max = 100,
    step = 1,
    value = 0,
    interval = 5,
    onChange,
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const rangeEl = useRef<HTMLInputElement>(null);
  const preValue = useRef<string | number | undefined>('');

  function renderScale() {
    const itResult: ReactElement[] = [];

    for (let i = min; i < max; i++) {
      if (max - 1 === min) {
        break;
      }

      let itemJSX: ReactElement | null = null;

      if ((i + 1) % interval === 0) {
        itemJSX = (
          <div
            key={i}
            className={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}
          >
            <span className={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
          </div>
        );
      } else if (i === min) {
        itemJSX = (
          <div key={i} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
          </div>
        );
      } else if ((i + 1) % interval !== 0 && i === max - 1) {
        itemJSX = (
          <div key={i} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
          </div>
        );
      } else {
        itemJSX = <div key={i} className={`${selectorPrefix}-scale-item`} />;
      }

      itResult.push(itemJSX);
    }

    const result: ReactElement[] = [];

    if (min === max) {
      result.push(
        <div key={0} className={`${selectorPrefix}-scale-item`}>
          <span className={`${selectorPrefix}-scale-item-value`}>0</span>
          <span className={`${selectorPrefix}-scale-item-value`} style={{ right: 0, left: 'auto' }}>
            ${max}
          </span>
        </div>,
      );
    } else {
      if (max - 1 === min) {
        result.push(
          <div key={min} className={`${selectorPrefix}-scale-item`}>
            <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
            <span
              className={`${selectorPrefix}-scale-item-value`}
              style={{ right: 0, left: 'auto' }}
            >
              {max}
            </span>
          </div>,
        );
      }
    }

    return result.concat(itResult);
  }

  function onMousemove(e) {
    touchEvent(e);
  }

  function onTouchmove(e) {
    touchEvent(e);
  }

  function touchEvent(e) {
    const { value } = e.target;

    (rangeEl.current as HTMLInputElement).value = value;

    if (preValue.current !== value) {
      preValue.current = value;

      if (onChange) {
        onChange(value);
      }
    }
  }

  useLayoutEffect(() => {
    (rangeEl.current as HTMLInputElement).value = `${value}`;
  }, [min, max, step, value, interval]);

  return (
    <div className={classNames(selectorPrefix, className || '')} style={style || {}} ref={el}>
      <div className={`${selectorPrefix}-scale`}>{renderScale()}</div>

      <input
        ref={rangeEl}
        className={`${selectorPrefix}-range`}
        type="range"
        min={min}
        max={max}
        step={step}
        onMouseMove={onMousemove}
        onTouchMove={onTouchmove}
      />
    </div>
  );
};

// /**
//  * SliderScale
//  * @class SliderScale
//  * @classdesc SliderScale
//  */
// class SliderScale extends React.Component<ISliderScaleProps, any> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   private el: HTMLDivElement | null | undefined;
//   private preValue: string | number | undefined;
//   private rangeEl: HTMLInputElement | null | undefined;
//
//   componentDidMount() {
//     // @ts-ignore
//     this.rangeEl?.value = this.props.value;
//   }
//
//   componentWillReceiveProps(nextProps: Readonly<ISliderScaleProps>, nextContext: any) {
//     // @ts-ignore
//     this.rangeEl?.value = nextProps.value;
//   }
//
//   private onMousemove = (e) => {
//     this.touchEvent(e);
//   };
//
//   private onTouchmove = (e) => {
//     this.touchEvent(e);
//   };
//
//   private touchEvent(e) {
//     // console.log('touchEvent', e.target, e.target.value, this.preValue);
//
//     const { value } = e.target;
//
//     // @ts-ignore
//     this.rangeEl?.value = value;
//
//     if (this.preValue !== value) {
//       this.preValue = value;
//
//       const { onChange } = this.props;
//
//       if (onChange) {
//         onChange(value);
//       }
//     }
//   }
//
//   private renderScale() {
//     const { min, max, interval } = this.props;
//
//     const itResult: Array<React.ReactElement> = [];
//
//     // @ts-ignore
//     for (let i = min; i < max; i++) {
//       // @ts-ignore
//       if (max - 1 === min) {
//         break;
//       }
//
//       let itemJSX: React.ReactElement | null = null;
//
//       // @ts-ignore
//       if ((i + 1) % interval === 0) {
//         itemJSX = (
//           <div
//             key={i}
//             className={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}
//           >
//             <span className={`${selectorPrefix}-scale-item-value`}>
//               {
//                 // @ts-ignore
//                 i + 1
//               }
//             </span>
//           </div>
//         );
//       } else if (i === min) {
//         itemJSX = (
//           <div key={i} className={`${selectorPrefix}-scale-item`}>
//             <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
//           </div>
//         );
//       }
//
//       // @ts-ignore
//       else if ((i + 1) % interval !== 0 && i === max - 1) {
//         itemJSX = (
//           <div key={i} className={`${selectorPrefix}-scale-item`}>
//             <span className={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
//           </div>
//         );
//       } else {
//         itemJSX = <div key={i} className={`${selectorPrefix}-scale-item`} />;
//       }
//
//       // @ts-ignore
//       itResult.push(itemJSX);
//     }
//
//     const result: Array<React.ReactElement> = [];
//
//     if (min === max) {
//       result.push(
//         <div key={0} className={`${selectorPrefix}-scale-item`}>
//           <span className={`${selectorPrefix}-scale-item-value`}>0</span>
//           <span className={`${selectorPrefix}-scale-item-value`} style={{ right: 0, left: 'auto' }}>
//             ${max}
//           </span>
//         </div>,
//       );
//     } else {
//       // @ts-ignore
//       if (max - 1 === min) {
//         result.push(
//           <div key={min} className={`${selectorPrefix}-scale-item`}>
//             <span className={`${selectorPrefix}-scale-item-value`}>{min}</span>
//             <span
//               className={`${selectorPrefix}-scale-item-value`}
//               style={{ right: 0, left: 'auto' }}
//             >
//               {max}
//             </span>
//           </div>,
//         );
//       }
//     }
//
//     return result.concat(itResult);
//   }
//
//   render() {
//     // @ts-ignore
//     const { className, style } = this.props;
//
//     const { min, max, step } = this.props;
//
//     // @ts-ignore
//     return (
//       <div
//         className={classNames(
//           selectorPrefix,
//           // @ts-ignore
//           className.split(/\s+/),
//         )}
//         style={{ ...style }}
//         ref={(el) => (this.el = el)}
//       >
//         <div className={`${selectorPrefix}-scale`}>{this.renderScale()}</div>
//
//         <input
//           ref={(el) => (this.rangeEl = el)}
//           className={`${selectorPrefix}-range`}
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           onMouseMove={this.onMousemove}
//           onTouchMove={this.onTouchmove}
//         />
//       </div>
//     );
//   }
// }
//
// SliderScale.defaultProps = {
//   className: '',
//   style: {},
//   min: 0,
//   max: 100,
//   step: 1,
//   value: 0,
//   interval: 5,
//   onChange: () => {},
// };
//
// SliderScale.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   // 最小值
//   min: PropTypes.number,
//   // 最大值
//   max: PropTypes.number,
//   // 步进
//   step: PropTypes.number,
//   // 当前值
//   value: PropTypes.number,
//   // 刻度的间隔
//   interval: PropTypes.number,
//   onChange: PropTypes.func,
// };

export default SliderScale;
