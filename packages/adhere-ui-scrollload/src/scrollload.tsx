import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  ForwardRefRenderFunction,
} from 'react';
import classNames from 'classnames';
import Intl from '@baifendian/adhere-util-intl';

import type { ScrollLoadHOCFunction, ScrollLoadRefHandle, ScrollLoadProps } from './types';

const selectorPrefix = 'adhere-ui-scrollload';

const EMPTY = 'empty';
const ERROR = 'error';
const NORMAL = 'normal';

const ScrollLoad: ForwardRefRenderFunction<ScrollLoadRefHandle, ScrollLoadProps> = (props, ref) => {
  const {
    className = '',
    style = {},
    children,
    getScrollContainer,
    distance = 50,
    onScrollBottom,
    onEmptyClick,
    onErrorClick,
    renderLoading,
    loadClassName = '',
    loadStyle = {},
    renderEmpty,
    emptyClassName = '',
    emptyStyle = {},
    renderError,
    errorClassName = '',
    errorStyle = {},
  } = props;

  const lock = useRef(false); // 锁
  const el = useRef<HTMLDivElement>(null);
  const loadEl = useRef<HTMLDivElement>(null);
  const emptyEl = useRef<HTMLDivElement>(null);
  const errorEl = useRef<HTMLDivElement>(null);

  function _getScrollContainer() {
    return getScrollContainer ? getScrollContainer() : el.current;
  }

  function initEvents() {
    _getScrollContainer()?.addEventListener('scroll', _onScroll);
    emptyEl.current?.addEventListener('click', _onEmptyClick);
    errorEl.current?.addEventListener('click', _onErrorClick);
  }

  function _onScroll() {
    const el = _getScrollContainer() as HTMLElement;

    const bottomHeight = el.scrollHeight - el.offsetHeight;
    const scrollTop = el.scrollTop;

    /**
     * 条件完全相等或误差值在1之间
     */
    if (onScrollBottom && Math.abs(scrollTop - bottomHeight) <= distance) {
      if (lock.current) return;

      lock.current = true;

      // 先显示loading
      (loadEl.current as HTMLElement).style.display = 'flex';

      /**
       * 完成
       * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
       */
      onScrollBottom((status) => {
        (loadEl.current as HTMLElement).style.display = 'none';

        if (status === EMPTY) {
          (emptyEl.current as HTMLElement).style.display = 'block';
        } else if (status === ERROR) {
          (errorEl.current as HTMLElement).style.display = 'block';
        }

        lock.current = false;
      });
    }
  }

  function _onEmptyClick() {
    onEmptyClick && onEmptyClick();
  }

  function _onErrorClick() {
    onErrorClick && onErrorClick();
  }

  /**
   * hideAll
   */
  function hideAll() {
    (loadEl.current as HTMLElement).style.display = 'none';
    (errorEl.current as HTMLElement).style.display = 'none';
    (emptyEl.current as HTMLElement).style.display = 'none';
  }

  function _renderLoading() {
    if (renderLoading) {
      return (
        <div
          className={classNames(`${selectorPrefix}-load`, loadClassName || '')}
          style={{ ...loadStyle }}
          ref={loadEl}
        >
          {renderLoading()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-load`, 'standard', loadClassName || '')}
        style={loadStyle || {}}
        ref={loadEl}
      >
        {Intl.v('数据加载中')}
      </div>
    );
  }

  function _renderEmpty() {
    if (renderEmpty) {
      return (
        <div
          className={classNames(`${selectorPrefix}-empty`, emptyClassName || '')}
          style={emptyStyle || {}}
          ref={emptyEl}
        >
          {renderEmpty()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-empty`, emptyClassName || '')}
        style={emptyStyle || {}}
        ref={emptyEl}
      >
        ~{Intl.v('没有更多')}
      </div>
    );
  }

  function _renderError() {
    if (renderError) {
      return (
        <div
          className={classNames(`${selectorPrefix}-error`, errorClassName || '')}
          style={errorStyle || {}}
          ref={errorEl}
        >
          {renderError()}
        </div>
      );
    }

    return (
      <div
        className={classNames(`${selectorPrefix}-error`, errorClassName || '')}
        style={errorStyle || {}}
        ref={errorEl}
      >
        {Intl.v('出现错误')}
      </div>
    );
  }

  useImperativeHandle(ref, () => ({
    hideAll,
  }));

  useEffect(() => initEvents(), []);

  return (
    <div
      className={classNames(selectorPrefix, className || '')}
      style={{
        ...(style || {}),
        overflowY: _getScrollContainer() === el.current ? 'auto' : 'initial',
      }}
      ref={el}
    >
      {children}
      {_renderLoading()}
      {_renderEmpty()}
      {_renderError()}
    </div>
  );
};

// @ts-ignore
const ScrollLoadHOC: ScrollLoadHOCFunction<ScrollLoadRefHandle, ScrollLoadProps> = forwardRef<
  ScrollLoadRefHandle,
  ScrollLoadProps
>(ScrollLoad);
ScrollLoadHOC.EMPTY = 'empty';
ScrollLoadHOC.ERROR = 'error';
ScrollLoadHOC.NORMAL = 'normal';

export default ScrollLoadHOC;

// /**
//  * ScrollLoad
//  * @class ScrollLoad
//  * @classdesc ScrollLoad
//  */
// class ScrollLoad extends React.Component<IScrollLoadProps> {
//   static defaultProps: any;
//   static propTypes: any;
//
//   static EMPTY = 'empty';
//   static ERROR = 'error';
//   static NORMAL = 'normal';
//
//   private lock = false; // 锁
//   private el: HTMLDivElement | null | undefined;
//   private loadEl: HTMLDivElement | null | undefined;
//   private emptyEl: HTMLDivElement | null | undefined;
//   private errorEl: HTMLDivElement | null | undefined;
//
//   constructor(props) {
//     super(props);
//
//     this.onScroll = this.onScroll.bind(this);
//     this.onEmptyClick = this.onEmptyClick.bind(this);
//     this.onErrorClick = this.onErrorClick.bind(this);
//   }
//
//   componentDidMount() {
//     this.initEvents();
//   }
//
//   private getScrollContainer() {
//     return this.props.getScrollContainer ? this.props.getScrollContainer() : this.el;
//   }
//
//   private initEvents() {
//     this.getScrollContainer()!.addEventListener('scroll', this.onScroll);
//     this.emptyEl!.addEventListener('click', this.onEmptyClick);
//     this.errorEl!.addEventListener('click', this.onErrorClick);
//   }
//
//   private onScroll() {
//     const {
//       loadEl,
//       errorEl,
//       emptyEl,
//       props: { distance, onScrollBottom },
//     } = this;
//
//     const el = this.getScrollContainer();
//
//     const bottomHeight = el!.scrollHeight - el!.offsetHeight;
//     const scrollTop = el!.scrollTop;
//
//     /**
//      * 条件完全相等或误差值在1之间
//      */
//     if (onScrollBottom && Math.abs(scrollTop - bottomHeight) <= distance) {
//       if (this.lock) return;
//
//       this.lock = true;
//
//       // 先显示loading
//       loadEl!.style.display = 'flex';
//
//       /**
//        * 完成
//        * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
//        */
//       onScrollBottom((status) => {
//         loadEl!.style.display = 'none';
//
//         if (status === ScrollLoad.EMPTY) {
//           emptyEl!.style.display = 'block';
//         } else if (status === ScrollLoad.ERROR) {
//           errorEl!.style.display = 'block';
//         }
//
//         this.lock = false;
//       });
//     }
//   }
//
//   private onEmptyClick() {
//     const { onEmptyClick } = this.props;
//
//     if (onEmptyClick) {
//       onEmptyClick();
//     }
//   }
//
//   private onErrorClick() {
//     const { onErrorClick } = this.props;
//
//     if (onErrorClick) {
//       onErrorClick();
//     }
//   }
//
//   /**
//    * hideAll
//    */
//   hideAll() {
//     this.loadEl!.style.display = 'none';
//     this.errorEl!.style.display = 'none';
//     this.emptyEl!.style.display = 'none';
//   }
//
//   private renderLoading(): React.ReactElement {
//     const { renderLoading, loadClassName, loadStyle } = this.props;
//
//     if (renderLoading) {
//       return (
//         <div
//           className={classNames(`${selectorPrefix}-load`, loadClassName.split(/\s+/))}
//           style={{ ...loadStyle }}
//           ref={(el) => (this.loadEl = el)}
//         >
//           {renderLoading()}
//         </div>
//       );
//     }
//
//     return (
//       <div
//         className={classNames(`${selectorPrefix}-load`, 'standard', loadClassName.split(/\s+/))}
//         style={{ ...loadStyle }}
//         ref={(el) => (this.loadEl = el)}
//       >
//         {Intl.v('数据加载中')}
//       </div>
//     );
//   }
//
//   private renderEmpty(): React.ReactElement {
//     const { renderEmpty, emptyClassName, emptyStyle } = this.props;
//
//     if (renderEmpty) {
//       return (
//         <div
//           className={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
//           style={{ ...emptyStyle }}
//           ref={(el) => (this.emptyEl = el)}
//         >
//           {renderEmpty()}
//         </div>
//       );
//     }
//
//     return (
//       <div
//         className={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
//         style={{ ...emptyStyle }}
//         ref={(el) => (this.emptyEl = el)}
//       >
//         ~{Intl.v('没有更多')}
//       </div>
//     );
//   }
//
//   private renderError(): React.ReactElement {
//     const { renderError, errorClassName, errorStyle } = this.props;
//
//     if (renderError) {
//       return (
//         <div
//           className={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
//           style={{ ...errorStyle }}
//           ref={(el) => (this.errorEl = el)}
//         >
//           {renderError()}
//         </div>
//       );
//     }
//
//     return (
//       <div
//         className={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
//         style={{ ...errorStyle }}
//         ref={(el) => (this.errorEl = el)}
//       >
//         {Intl.v('出现错误')}
//       </div>
//     );
//   }
//
//   render() {
//     const { className, style, children } = this.props;
//
//     return (
//       <div
//         className={classNames(selectorPrefix, (className || '').split(/\s+/))}
//         style={{
//           ...style,
//           overflowY: this.getScrollContainer() === this.el ? 'auto' : 'initial',
//         }}
//         ref={(el) => (this.el = el)}
//       >
//         {children}
//         {this.renderLoading()}
//         {this.renderEmpty()}
//         {this.renderError()}
//       </div>
//     );
//   }
// }
//
// ScrollLoad.defaultProps = {
//   className: '',
//   style: {},
//   loadClassName: '',
//   loadStyle: {},
//   emptyClassName: '',
//   emptyStyle: {},
//   errorClassName: '',
//   errorStyle: {},
//   distance: 50,
//   onScrollBottom: () => {},
//   onEmptyClick: () => {},
//   onErrorClick: () => {},
//   renderLoading: undefined,
//   renderEmpty: undefined,
//   renderError: undefined,
// };
//
// ScrollLoad.propTypes = {
//   getScrollContainer: PropTypes.func,
//   className: PropTypes.string,
//   style: PropTypes.object,
//   loadClassName: PropTypes.string,
//   loadStyle: PropTypes.object,
//   emptyClassName: PropTypes.string,
//   emptyStyle: PropTypes.object,
//   errorClassName: PropTypes.string,
//   errorStyle: PropTypes.object,
//   distance: PropTypes.number,
//   onScrollBottom: Function,
//   onEmptyClick: Function,
//   onErrorClick: Function,
//   renderLoading: Function,
//   renderEmpty: Function,
//   renderError: Function,
// };
