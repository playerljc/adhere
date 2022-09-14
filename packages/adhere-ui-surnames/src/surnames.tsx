import classNames from 'classnames';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

import Util from '@baifendian/adhere-util';

import { Position, SurnamesProps, SurnamesRefHandle } from './types';

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

const Surnames: ForwardRefRenderFunction<SurnamesRefHandle, SurnamesProps> = (props, ref) => {
  const {
    position = 'right',
    className = '',
    style = {},
    indexes = [],
    dataSource = [],
    onScroll,
    onBeforeScroll,
  } = props;

  const el = useRef<HTMLDivElement>(null);
  const highlightedEl = useRef<HTMLDivElement>(null);
  const contentEl = useRef<HTMLDivElement>(null);
  const indexEl = useRef<HTMLDivElement>(null);
  const indexInnerEl = useRef<HTMLDivElement>(null);
  const maskEl = useRef<HTMLDivElement>();

  const key = useRef(false);
  const isMouseClicked = useRef(false);
  const isMouseMoved = useRef(false);
  const startY = useRef<number>(0);
  const startX = useRef<number>(0);
  const curIndexName = useRef('');
  const indexPositionMap = useRef<Position[]>([]);

  function initEvent() {
    if (Util.isTouch()) {
      indexInnerEl.current?.addEventListener('click', onClick);

      // 索引touchmove和mousemove
      indexInnerEl.current?.addEventListener('touchmove', onTouchmove);

      indexInnerEl.current?.addEventListener('touchend', onTouchend);
    } else {
      indexInnerEl.current?.addEventListener('mousedown', onMousedown);

      indexInnerEl.current?.addEventListener('mousemove', onMousemove);

      indexInnerEl.current?.addEventListener('mouseleave', onMouseleave);

      indexInnerEl.current?.addEventListener('mouseup', onMouseup);

      typeof window !== 'undefined' && window.addEventListener('resize', onResize);
    }
  }

  function removeEvent() {
    indexInnerEl.current?.removeEventListener('click', onClick);
    indexInnerEl.current?.removeEventListener('touchmove', onTouchmove);
    indexInnerEl.current?.removeEventListener('touchend', onTouchend);
    indexInnerEl.current?.removeEventListener('mousedown', onMousedown);
    indexInnerEl.current?.removeEventListener('mousemove', onMousemove);
    indexInnerEl.current?.removeEventListener('mouseleave', onMouseleave);
    indexInnerEl.current?.removeEventListener('mouseup', onMouseup);
    typeof window !== 'undefined' && window.removeEventListener('resize', onResize);
  }

  function createMask() {
    const el = document.createElement('div');

    el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

    maskEl.current = el.firstElementChild as HTMLDivElement;

    document.body.appendChild(maskEl.current);
  }

  function getDirection() {
    return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
  }

  function adapterDimension() {
    const direction = getDirection();

    // 'vertical', 'horizontal'

    if (direction === 'vertical') {
      (el.current as HTMLDivElement).style.height = `${
        (indexInnerEl.current as HTMLDivElement).offsetHeight + 50
      }px`;
      (el.current as HTMLDivElement).style.width = '100%';
    } else {
      (el.current as HTMLDivElement).style.height = '100%';
    }
  }

  function renderContent() {
    return dataSource.map((record) => {
      const indexConfig = indexes.find((index) => index.index === record.index);

      return (
        <div key={record.index} className={`${selectorPrefix}-group`}>
          <a className={`${selectorPrefix}-group-title`} data-name={record.index}>
            {indexConfig?.renderTitle ? indexConfig.renderTitle(record) : indexConfig?.index}
          </a>
          <div className={`${selectorPrefix}-group-inner`}>
            {indexConfig?.renderContent ? indexConfig?.renderContent(record) : null}
          </div>
        </div>
      );
    });
  }

  function renderIndex() {
    return indexes.map((index) => {
      return (
        <a key={index.index} className={`${selectorPrefix}-index-item`} data-name={index.index}>
          {index.renderIndex ? index.renderIndex(index) : index.index}
        </a>
      );
    });
  }

  function createIndexPosition() {
    const indexItemEls = indexInnerEl.current?.querySelectorAll(
      `.${selectorPrefix}-index-item`,
    ) as NodeList;

    indexPositionMap.current = [];

    // 计算每一项距离视口的top和bottom
    for (let i = 0; i < indexItemEls.length; i++) {
      const indexItemEl = indexItemEls[i] as HTMLElement;
      const indexName = indexItemEl.dataset.name;

      const rect = indexItemEl.getBoundingClientRect();

      indexPositionMap.current.push({
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
  }

  function findIndex(x: number, y: number) {
    const direction = getDirection();

    const val = direction === 'vertical' ? y - startY.current : x - startX.current;
    const curIndex = indexPositionMap.current.find(
      (t) => t.name === curIndexName.current,
    ) as Position;

    // console.log('获取增量', val);
    // console.log('移动获取当前索引信息', curIndex);

    let low = 0;
    let high = indexPositionMap.current.length - 1;
    let middle;
    let target;

    while (
      low <= high &&
      low <= indexPositionMap.current.length - 1 &&
      high <= indexPositionMap.current.length - 1
    ) {
      middle = (high + low) >> 1;
      const targetVal = indexPositionMap.current[middle];

      let t1;
      let t2;
      let t3;
      let t4;
      if (direction === 'vertical') {
        t1 = (curIndex.top as number) + val;
        t2 = (curIndex.bottom as number) + val;
        t3 = targetVal.top;
        t4 = targetVal.bottom;
      } else {
        t1 = (curIndex.left as number) + val;
        t2 = (curIndex.right as number) + val;
        t3 = targetVal.left;
        t4 = targetVal.right;
      }

      // console.log(t1, t2, t3, t4);

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

  function clickDetail(e) {
    const target = e.target;

    e.preventDefault();

    if (key.current) {
      return false;
    }

    key.current = true;

    (maskEl.current as HTMLElement).style.display = 'block';

    scrollToAnimation(target.dataset.name);
  }

  function moveDetail(x, y) {
    const index = findIndex(x, y);

    if (index) {
      (highlightedEl.current as HTMLElement).innerText = index.name;
      (highlightedEl.current as HTMLElement).style.display = 'block';

      const direction = getDirection();

      if (direction === 'vertical') {
        const translateY = index.offsetTop + Math.floor(index.height / 2);
        (highlightedEl.current as HTMLElement).style.transform = `translate3d(0,${translateY}px,0)`;
      } else {
        const translateX = index.offsetLeft + index.width;
        (highlightedEl.current as HTMLElement).style.transform = `translate3d(${translateX}px,0,0)`;
      }

      scrollTo(index.name);
    }
  }

  function scrollToAnimation(name: string | undefined, duration = 100) {
    const targetEl = contentEl.current?.querySelector(
      `.${selectorPrefix}-group-title[data-name='${name}']`,
    );

    const srcTop = contentEl.current?.scrollTop as number;

    let scrollVal = srcTop;

    const targetTop = (targetEl as HTMLElement).offsetTop;

    // @ts-ignore
    const { updateInterval } = screen;

    const step =
      (el.current as HTMLElement).scrollHeight /
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

      (contentEl.current as HTMLElement).scrollTop = scrollVal;

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
        key.current = false;
        isMouseClicked.current = false;
        (maskEl.current as HTMLElement).style.display = 'none';

        onScroll && onScroll(name);
      }
    }

    onBeforeScroll && onBeforeScroll(name);

    typeof window !== 'undefined' && window.requestAnimationFrame(scrollAnimation);
  }

  function scrollTo(name: any) {
    (contentEl.current as HTMLElement).scrollTop = (
      contentEl.current?.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      ) as HTMLElement
    ).offsetTop;

    onScroll && onScroll(name);
  }

  function update() {
    adapterDimension();
    createIndexPosition();
  }

  function onClick(e) {
    e.preventDefault();

    e.stopPropagation();

    clickDetail(e);
  }

  function onTouchmove(e) {
    e.preventDefault();

    const y = e.changedTouches[0].pageY;

    const x = e.changedTouches[0].pageX;

    const target = e.target;

    const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`) as HTMLElement;

    curIndexName.current = indexItemEl.dataset.name as string;

    moveDetail(x, y);
  }

  function onTouchend() {
    (highlightedEl.current as HTMLElement).style.display = 'none';
    (highlightedEl.current as HTMLElement).innerText = '';
    (highlightedEl.current as HTMLElement).style.transform = 'translate3d(0,0,0)';
  }

  function onMousedown(e) {
    e.preventDefault();

    startY.current = e.pageY;

    startX.current = e.pageX;

    const target = e.target;

    const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

    // console.log('按下获取索引名称', indexItemEl.dataset.name);

    curIndexName.current = indexItemEl?.dataset.name as string;

    isMouseClicked.current = true;
  }

  function onMousemove(e) {
    if (!isMouseClicked.current) return false;

    isMouseMoved.current = true;

    e.preventDefault();

    const y = e.pageY;

    const x = e.pageX;

    moveDetail(x, y);
  }

  function onMouseleave() {
    isMouseClicked.current = false;
    isMouseMoved.current = false;
    (highlightedEl.current as HTMLElement).style.display = 'none';
    (highlightedEl.current as HTMLElement).innerText = '';
    (highlightedEl.current as HTMLElement).style.transform = 'translate3d(0,0,0)';
  }

  function onMouseup(e) {
    if (isMouseMoved.current) {
      isMouseClicked.current = false;
      isMouseMoved.current = false;
      (highlightedEl.current as HTMLElement).style.display = 'none';
      (highlightedEl.current as HTMLElement).innerText = '';
      (highlightedEl.current as HTMLElement).style.transform = 'translate3d(0,0,0)';
      return false;
    }

    e.preventDefault();

    clickDetail(e);
  }

  function onResize() {
    update();
  }

  useImperativeHandle(ref, () => ({
    scrollToAnimation,
    scrollTo,
  }));

  useLayoutEffect(() => {
    createMask();
    adapterDimension();
    createIndexPosition();

    return () => {
      maskEl.current?.parentElement?.removeChild(maskEl.current);
    };
  }, []);

  useLayoutEffect(() => {
    initEvent();
    adapterDimension();
    createIndexPosition();
    return () => removeEvent();
  });

  return (
    <div
      className={classNames(
        selectorPrefix,
        `${selectorPrefix}-config-position-${position}`,
        className || '',
      )}
      style={style || {}}
      ref={el}
    >
      <div className={`${selectorPrefix}-highlighted`} ref={highlightedEl} />

      <div className={`${selectorPrefix}-content`} ref={contentEl}>
        {renderContent()}
      </div>

      <div className={`${selectorPrefix}-index`} ref={indexEl}>
        <div className={`${selectorPrefix}-index-inner`} ref={indexInnerEl}>
          {renderIndex()}
        </div>
      </div>
    </div>
  );
};

export default forwardRef<SurnamesRefHandle, SurnamesProps>(Surnames);
