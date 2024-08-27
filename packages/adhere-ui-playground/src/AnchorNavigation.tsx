import classNames from 'classnames';
import React, {
  memo,
  /*useContext,*/
  useEffect,
  useRef,
  useState,
} from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

// import Util from '@baifendian/adhere-util';
// import { AnchorNavigationContext } from './AnchorNavigationContext';
import type { AnchorNavigationProps } from './types';

const selectPrefix = 'adhere-ui-playground-anchor-navigation';

/**
 * AnchorNavigation
 * @classdesc 带有锚点导航的面板
 * @constructor
 */
const AnchorNavigation = memo<AnchorNavigationProps>((props) => {
  const {
    className,
    style,
    autoClassName,
    autoStyle,
    fixedClassName,
    fixedStyle,
    anchors = [],
    anchorPosition = {
      top: 77,
      width: 120,
    },
    children,
  } = props;

  const [activeAnchor, setActiveAnchor] = useState<string>(props.activeAnchor ?? '');

  const anchorRef = useRef<HTMLUListElement | null>(null);

  // const anchorDimensionIndex = useRef<
  //   {
  //     anchor: string;
  //     range: {
  //       top: number;
  //       bottom?: number | undefined;
  //     };
  //   }[]
  // >([]);

  // const { scrollEl } = useContext(AnchorNavigationContext);

  // /**
  //  * createAnchorDimensionIndex
  //  */
  // function createAnchorDimensionIndex(): void {
  //   if (!scrollEl) return;
  //
  //   const container = scrollEl as HTMLElement;
  //
  //   anchorDimensionIndex.current = [];
  //
  //   (anchors || []).forEach(({ anchor }, index) => {
  //     const el = document.getElementById(anchor) as HTMLElement;
  //
  //     if (!el) return;
  //
  //     const top = Util.getTopUntil({ el, untilEl: container });
  //
  //     const entry = {
  //       anchor,
  //       range: {
  //         top,
  //         bottom:
  //           index === anchorDimensionIndex.current.length - 1 ? top + el.offsetHeight : undefined,
  //       },
  //     };
  //
  //     anchorDimensionIndex.current.push(entry);
  //
  //     if (index !== 0) {
  //       anchorDimensionIndex.current[index - 1].range.bottom = top;
  //     }
  //   });
  // }

  // /**
  //  * findAnchorByScrollVal
  //  * @param scrollVal
  //  */
  // function findAnchorByScrollVal(scrollVal: number) {
  //   return anchorDimensionIndex.current.find(
  //     (anchorIndexItem) =>
  //       scrollVal >= anchorIndexItem.range.top &&
  //       scrollVal <= (anchorIndexItem.range.bottom as number),
  //   );
  // }

  /**
   * useEffect
   * @description scrollEl change
   */
  // useEffect(() => {
  //   if (!scrollEl) return;
  //
  //   /**
  //    * onWrapScroll
  //    */
  //   function onWrapScroll() {
  //     if (!scrollEl || !anchorRef.current) return;
  //
  //     const scrollTop = (scrollEl as HTMLElement).scrollTop;
  //
  //     const anchor = findAnchorByScrollVal(scrollTop);
  //
  //     if (anchor) {
  //       setActiveAnchor(anchor.anchor);
  //     }
  //
  //     if (scrollTop === 0) {
  //       (anchorRef.current as HTMLElement)?.classList?.remove?.(`${selectPrefix}-affix`);
  //       // (anchorRef.current as HTMLElement).style.top = '0';
  //     } else {
  //       (anchorRef.current as HTMLElement)?.classList?.add?.(`${selectPrefix}-affix`);
  //
  //       if ((anchorRef.current as HTMLElement).style) {
  //         (anchorRef.current as HTMLElement).style.top = `${anchorPosition.top}px`;
  //       }
  //     }
  //   }
  //
  //   createAnchorDimensionIndex();
  //
  //   (scrollEl as HTMLElement).addEventListener('scroll', onWrapScroll);
  //
  //   return () => {
  //     if (!scrollEl) return;
  //     (scrollEl as HTMLElement).removeEventListener('scroll', onWrapScroll);
  //   };
  // }, [scrollEl]);

  /**
   * useEffect
   * @description activeAnchor change
   */
  useEffect(() => {
    setActiveAnchor(props.activeAnchor ?? '');
  }, [props.activeAnchor]);

  /**
   * render jsx
   */
  return (
    <div className={classNames(selectPrefix, className)} style={style ?? {}}>
      <div className={classNames(`${selectPrefix}-auto`, autoClassName)} style={autoStyle ?? {}}>
        <div className={`${selectPrefix}-inner`}>{children}</div>
      </div>

      <ConditionalRender conditional={!!(anchors || []).length}>
        {() => (
          <div
            className={classNames(`${selectPrefix}-fixed`, fixedClassName)}
            style={{ ...(style ?? {}), width: `${anchorPosition.width}px` }}
          >
            <ul className={`${selectPrefix}-anchor`} ref={anchorRef}>
              {(anchors || []).map((anchor, _index) => (
                <li
                  key={`${_index}`}
                  className={anchor.anchor === activeAnchor ? `${selectPrefix}-active` : ''}
                  title={anchor.name}
                >
                  <a
                    onClick={() => {
                      setActiveAnchor(anchor.anchor);

                      const anchorEl = document.getElementById(anchor.anchor);

                      if (anchorEl) {
                        anchorEl.scrollIntoView(true);
                      }
                    }}
                  >
                    {anchor.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
});

AnchorNavigation.displayName = 'AnchorNavigation';

export default AnchorNavigation;
