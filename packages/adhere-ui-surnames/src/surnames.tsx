import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Util from '@baifendian/adhere-util';

import { IPosition, ISurnamesProps } from './types';

const selectorPrefix = 'adhere-ui-surnames';

const DURATION = 100;

// function isTouch() {
//   return 'ontouchend' in document;
// }
//
// /**
//  * getTopDom
//  * @param target
//  * @param selector
//  * @return HTMLElement
//  */
// function getTopDom(target, selector) {
//   if (!target || !selector) return null;
//
//   if (target.className.indexOf(selector) !== -1) {
//     return target;
//   }
//
//   let parentDom = target;
//   while ((parentDom = parentDom.parentElement)) {
//     if (parentDom.className.indexOf(selector) !== -1 || parentDom === document.body) {
//       break;
//     }
//   }
//
//   if (parentDom) {
//     if (parentDom === document.body) {
//       return null;
//     } else {
//       return parentDom;
//     }
//   } else {
//     return null;
//   }
// }

/**
 * Surnames
 * @class Surnames
 * @classdesc Surnames
 */
class Surnames extends React.Component<ISurnamesProps> {
  static defaultProps: any;
  static propTypes: any;

  private key = false;
  private isMouseClicked = false;
  private isMouseMoved = false;
  private startY: number | undefined;
  private startX: number | undefined;
  private curIndexName: string | undefined;
  private indexPositionMap: Array<IPosition> | undefined;

  private el: HTMLDivElement | null | undefined;
  private indexEl: HTMLDivElement | null | undefined;
  private indexInnerEl: HTMLDivElement | null | undefined;
  private highlightedEl: HTMLDivElement | null | undefined;
  private maskEl: HTMLElement | null | undefined;
  private contentEl: HTMLDivElement | null | undefined;

  componentDidMount() {
    this.initEvent();
    this.createMask();
    this.adapterDimension();
    this.createIndexPosition();
  }

  componentDidUpdate(prevProps: Readonly<ISurnamesProps>, prevState: Readonly<{}>, snapshot?: any) {
    this.adapterDimension();
    this.createIndexPosition();
  }

  componentWillUnmount() {
    if (this.maskEl) {
      // @ts-ignore
      this.maskEl.parentElement.removeChild(this.maskEl);
    }
  }

  private onClick = (e) => {
    e.preventDefault();

    e.stopPropagation();

    this.clickDetail(e);
  };

  private onTouchmove = (e) => {
    e.preventDefault();

    const y = e.changedTouches[0].pageY;

    const x = e.changedTouches[0].pageX;

    const target = e.target;

    const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

    this.curIndexName = indexItemEl.dataset.name;

    this.moveDetail(x, y);
  };

  private onTouchend = () => {
    // @ts-ignore
    this.highlightedEl.style.display = 'none';
    // @ts-ignore
    this.highlightedEl.innerText = '';
    // @ts-ignore
    this.highlightedEl.style.transform = 'translate3d(0,0,0)';
  };

  private onMousedown = (e) => {
    e.preventDefault();

    this.startY = e.pageY;

    this.startX = e.pageX;

    const target = e.target;

    const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

    // @ts-ignore
    console.log('按下获取索引名称', indexItemEl.dataset.name);

    // @ts-ignore
    this.curIndexName = indexItemEl.dataset.name;

    this.isMouseClicked = true;
  };

  private onMousemove = (e) => {
    if (!this.isMouseClicked) return false;

    this.isMouseMoved = true;

    e.preventDefault();

    const y = e.pageY;

    const x = e.pageX;

    this.moveDetail(x, y);
  };

  private onMouseleave = () => {
    this.isMouseClicked = false;
    this.isMouseMoved = false;
    // @ts-ignore
    this.highlightedEl.style.display = 'none';
    // @ts-ignore
    this.highlightedEl.innerText = '';
    // @ts-ignore
    this.highlightedEl.style.transform = 'translate3d(0,0,0)';
  };

  private onMouseup = (e) => {
    if (this.isMouseMoved) {
      this.isMouseClicked = false;
      this.isMouseMoved = false;
      // @ts-ignore
      this.highlightedEl.style.display = 'none';
      // @ts-ignore
      this.highlightedEl.innerText = '';
      // @ts-ignore
      this.highlightedEl.style.transform = 'translate3d(0,0,0)';
      return false;
    }

    e.preventDefault();

    this.clickDetail(e);
  };

  private onResize = () => {
    this.update();
  };

  private clickDetail(e) {
    const target = e.target;

    e.preventDefault();

    if (this.key) {
      return false;
    }

    this.key = true;

    // @ts-ignore
    this.maskEl.style.display = 'block';

    this.scrollToAnimation(target.dataset.name);
  }

  private moveDetail(x, y) {
    const index = this.findIndex(x, y);

    if (index) {
      console.log(index.name);
      // @ts-ignore
      this.highlightedEl.innerText = index.name;
      // @ts-ignore
      this.highlightedEl.style.display = 'block';

      const direction = this.getDirection();

      if (direction === 'vertical') {
        const translateY = index.offsetTop + Math.floor(index.height / 2);
        // @ts-ignore
        this.highlightedEl.style.transform = `translate3d(0,${translateY}px,0)`;
      } else {
        const translateX = index.offsetLeft + index.width;
        // @ts-ignore
        this.highlightedEl.style.transform = `translate3d(${translateX}px,0,0)`;
      }

      this.scrollTo(index.name);
    }
  }

  private initEvent() {
    if (Util.isTouch()) {
      // @ts-ignore
      this.indexInnerEl.addEventListener('click', this.onClick);

      // 索引touchmove和mousemove
      // @ts-ignore
      this.indexInnerEl.addEventListener('touchmove', this.onTouchmove);

      // @ts-ignore
      this.indexInnerEl.addEventListener('touchend', this.onTouchend);
    } else {
      // @ts-ignore
      this.indexInnerEl.addEventListener('mousedown', this.onMousedown);

      // @ts-ignore
      this.indexInnerEl.addEventListener('mousemove', this.onMousemove);

      // @ts-ignore
      this.indexInnerEl.addEventListener('mouseleave', this.onMouseleave);

      // @ts-ignore
      this.indexInnerEl.addEventListener('mouseup', this.onMouseup);

      typeof window !== 'undefined' && window.addEventListener('resize', this.onResize);
    }
  }

  private adapterDimension() {
    const direction = this.getDirection();

    // @ts-ignore
    // 'vertical', 'horizontal'

    if (direction === 'vertical') {
      // @ts-ignore
      this.el?.style.height = `${this.indexInnerEl?.offsetHeight + 50}px`;
      // @ts-ignore
      this.el?.style.width = '100%';
    } else {
      // @ts-ignore
      // this.el?.style.width = `${this.indexInnerEl?.offsetWidth + 50}px`;
      // @ts-ignore
      this.el?.style.height = '100%';
    }
  }

  private createIndexPosition() {
    // @ts-ignore
    const indexItemEls = this.indexInnerEl.querySelectorAll(`.${selectorPrefix}-index-item`);

    this.indexPositionMap = [];

    // 计算每一项距离视口的top和bottom
    for (let i = 0; i < indexItemEls.length; i++) {
      const indexItemEl = indexItemEls[i];
      const indexName = indexItemEl.dataset.name;

      const rect = indexItemEl.getBoundingClientRect();

      this.indexPositionMap.push({
        name: indexName,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
        offsetTop: indexItemEl.offsetTop,
        offsetLeft: indexItemEl.offsetLeft,
        width: indexItemEl.offsetWidth,
        height: indexItemEl.offsetHeight,
      });
    }

    console.log(this.indexPositionMap);
  }

  private createMask() {
    const el = document.createElement('div');

    el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

    this.maskEl = el.firstElementChild as HTMLElement;

    // @ts-ignore
    document.body.appendChild(this.maskEl);
  }

  scrollToAnimation(name: string | undefined, duration = 100) {
    const self = this;

    const { onScroll, onBeforeScroll } = this.props;

    // @ts-ignore
    const targetEl = self.contentEl.querySelector(
      `.${selectorPrefix}-group-title[data-name='${name}']`,
    );

    // @ts-ignore
    const srcTop = self.contentEl.scrollTop;

    let scrollVal = srcTop;

    // @ts-ignore
    const targetTop = targetEl.offsetTop;

    // @ts-ignore
    const { updateInterval } = screen;

    const step =
      // @ts-ignore
      self.el.scrollHeight /
      ((DURATION | duration) / (updateInterval || 16.7) +
        ((DURATION | duration) % (updateInterval || 16.7) !== 0 ? 1 : 0));

    /**
     * scrollAnimation
     */
    function scrollAnimation() {
      if (srcTop < targetTop) {
        if (scrollVal + step > targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal += step;
        }
      } else if (scrollVal - step < targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal -= step;
      }

      // @ts-ignore
      self.contentEl.scrollTop = scrollVal;

      if (srcTop < targetTop) {
        if (scrollVal >= targetTop) {
          clear();
        } else {
          typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
        }
      } else if (scrollVal <= targetTop) {
        clear();
      } else {
        typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
      }

      function clear() {
        self.key = false;
        self.isMouseClicked = false;
        // @ts-ignore
        self.maskEl.style.display = 'none';

        if (onScroll) {
          onScroll(name);
        }
      }
    }

    if (onBeforeScroll) {
      onBeforeScroll(name);
    }

    typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
  }

  scrollTo(name: any) {
    const self = this;

    // @ts-ignore
    self.contentEl.scrollTop = self.contentEl.querySelector(
      `.${selectorPrefix}-group-title[data-name='${name}']`,
      // @ts-ignore
    ).offsetTop;

    const { onScroll } = this.props;

    if (onScroll) {
      onScroll(name);
    }
  }

  private getDirection() {
    const { position } = this.props;

    return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
  }

  private findIndex(x: number, y: number) {
    const direction = this.getDirection();

    // @ts-ignore
    const val = direction === 'vertical' ? y - this.startY : x - this.startX;
    // @ts-ignore
    const curIndex = this.indexPositionMap.find((t) => t.name === this.curIndexName);

    console.log('获取增量', val);
    console.log('移动获取当前索引信息', curIndex);

    let low = 0;
    // @ts-ignore
    let high = this.indexPositionMap.length - 1;
    let middle;
    let target;

    while (
      low <= high &&
      // @ts-ignore
      low <= this.indexPositionMap.length - 1 &&
      // @ts-ignore
      high <= this.indexPositionMap.length - 1
    ) {
      middle = (high + low) >> 1;
      // @ts-ignore
      const targetVal = this.indexPositionMap[middle];

      let t1;
      let t2;
      let t3;
      let t4;
      if (direction === 'vertical') {
        // @ts-ignore
        t1 = curIndex.top + val;
        // @ts-ignore
        t2 = curIndex.bottom + val;
        t3 = targetVal.top;
        t4 = targetVal.bottom;
      } else {
        // @ts-ignore
        t1 = curIndex.left + val;
        // @ts-ignore
        t2 = curIndex.right + val;
        t3 = targetVal.left;
        t4 = targetVal.right;
      }

      console.log(t1, t2, t3, t4);

      if (t1 >= t3 && t1 <= t4) {
        target = targetVal;
        break;
      } else if (t1 < t3) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    if (target) {
      return target;
    } else {
      return null;
    }
  }

  private update() {
    this.adapterDimension();
    this.createIndexPosition();
  }

  private renderIndex() {
    const { indexes } = this.props;

    return indexes.map((index) => {
      return (
        <a key={index.index} className={`${selectorPrefix}-index-item`} data-name={index.index}>
          {index.renderIndex ? index.renderIndex(index) : index.index}
        </a>
      );
    });
  }

  private renderContent() {
    const { indexes, dataSource } = this.props;

    return dataSource.map((record) => {
      const indexConfig = indexes.find((index) => index.index === record.index);

      return (
        <div key={record.index} className={`${selectorPrefix}-group`}>
          <a className={`${selectorPrefix}-group-title`} data-name={record.index}>
            {
              // @ts-ignore
              indexConfig.renderTitle ? indexConfig.renderTitle(record) : indexConfig.index
            }
          </a>
          <div className={`${selectorPrefix}-group-inner`}>
            {
              // @ts-ignore
              indexConfig.renderContent ? indexConfig.renderContent(record) : null
            }
          </div>
        </div>
      );
    });
  }

  render() {
    // @ts-ignore
    const { position, className, style } = this.props;

    return (
      <div
        className={classNames(
          selectorPrefix,
          `${selectorPrefix}-config-position-${position}`,
          // @ts-ignore
          className.split(/\s+/),
        )}
        style={{ ...style }}
        ref={(el) => (this.el = el)}
      >
        <div className={`${selectorPrefix}-highlighted`} ref={(el) => (this.highlightedEl = el)} />

        <div className={`${selectorPrefix}-content`} ref={(el) => (this.contentEl = el)}>
          {this.renderContent()}
        </div>

        <div className={`${selectorPrefix}-index`} ref={(el) => (this.indexEl = el)}>
          <div className={`${selectorPrefix}-index-inner`} ref={(el) => (this.indexInnerEl = el)}>
            {this.renderIndex()}
          </div>
        </div>
      </div>
    );
  }
}

Surnames.defaultProps = {
  className: '',
  style: {},
  position: 'right',
  indexes: [],
  dataSource: [],
  onBeforeScroll: () => {},
  onScroll: () => {},
};

Surnames.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  indexes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.string,
      renderIndex: PropTypes.func,
      renderTitle: PropTypes.func,
      renderContent: PropTypes.func,
    }),
  ),
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
    }),
  ),
  onBeforeScroll: PropTypes.func,
  onScroll: PropTypes.func,
};

export default Surnames;
