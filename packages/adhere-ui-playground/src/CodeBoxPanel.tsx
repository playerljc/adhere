import React, { FC, memo, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import PlayGround from './PlayGround';
import PlayGroundMulti from './PlayGroundMulti';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundTabMobile from './PlayGroundTabMobile';
import Constant from './constant';
import type { CodeBoxProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-box';

/**
 * CodeBoxPanel
 * @classdesc - 代码组
 * @constructor
 */
const CodeBoxPanel: FC<CodeBoxProps> = (props) => {
  const { columnCount = 1, config = [], title, isShowExpandAllBtn = true } = props;

  const [activeAnchor, setAnchor] = useState('');
  const [expandAll, setExpandAll] = useState(props.expandAll);
  const expandLock = useRef(false);

  const column: any[] = Array.from<any>({ length: columnCount }).fill(undefined);

  const renderMap = new Map<string, Function>([
    ['PlayGroundMulti', renderPlayGroundMulti],
    ['PlayGround', renderPlayGround],
    ['PlayGroundTab', renderPlayGroundTab],
    ['PlayGroundTabMobile', renderPlayGroundTabMobile],
  ]);

  /**
   * useEffect mount
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function onHashChange() {
      const hash = window.location.hash.substring(1);
      setAnchor(hash);
    }

    window.addEventListener('hashchange', onHashChange);

    return () => {
      if (typeof window === 'undefined') return;

      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  /**
   * useEffect props.expandAll
   */
  useEffect(() => {
    setExpandAll(props.expandAll);
  }, [props.expandAll]);

  /**
   * useEffect expandAll
   */
  useEffect(() => {
    expandLock.current = false;
  }, [expandAll]);

  /**
   * renderPlayGroundMulti
   * @description - 渲染PlayGroundMulti
   * @param columnIndex
   * @param index
   * @return JSX
   */
  function renderPlayGroundMulti(columnIndex: number, index: number) {
    const { config } = props;

    const { renderWrap, renderChildren, type, ...restProps } = config[index];

    const children = (
      // @ts-ignore
      <PlayGroundMulti {...restProps} isActive={activeAnchor === restProps.id} expand={expandAll}>
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config as Array<any>)}
        </ConditionalRender>
      </PlayGroundMulti>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config as any, children)}
      </ConditionalRender>
    );
  }

  /**
   * renderPlayGround
   * @description - 渲染PlayGround
   * @param columnIndex
   * @param index
   * @return JSX
   */
  function renderPlayGround(columnIndex: number, index: number) {
    const { renderWrap, renderChildren, type, ...restProps } = config[index];

    const children = (
      // @ts-ignore
      <PlayGround {...restProps} isActive={activeAnchor === restProps.id} expand={expandAll}>
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config as any)}
        </ConditionalRender>
      </PlayGround>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config as any, children)}
      </ConditionalRender>
    );
  }

  /**
   * renderPlayGroundTab
   * @param columnIndex
   * @param index
   */
  function renderPlayGroundTab(columnIndex: number, index: number) {
    const { renderWrap, renderChildren, type, ...restProps } = config[index];

    const children = (
      // @ts-ignore
      <PlayGroundTab {...restProps} isActive={activeAnchor === restProps.id} expand={expandAll}>
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config as any)}
        </ConditionalRender>
      </PlayGroundTab>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config as any, children)}
      </ConditionalRender>
    );
  }

  /**
   * renderPlayGroundTabMobile
   * @param columnIndex
   * @param index
   */
  function renderPlayGroundTabMobile(columnIndex: number, index: number) {
    const { renderWrap, type, ...restProps } = config[index];

    const children = (
      // @ts-ignore
      <PlayGroundTabMobile
        {...restProps}
        isActive={activeAnchor === restProps.id}
        expand={expandAll}
      />
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config as any, children)}
      </ConditionalRender>
    );
  }

  return (
    <div className={selectPrefix}>
      <div className={`${selectPrefix}-header`}>
        <ConditionalRender conditional={!!title}>
          {() => <div className={`${selectPrefix}-header-title`}>{title}</div>}
        </ConditionalRender>

        <div className={`${selectPrefix}-header-extra`}>
          <ConditionalRender conditional={isShowExpandAllBtn}>
            {() => (
              <ConditionalRender
                conditional={expandAll}
                noMatch={() => (
                  <img
                    className={`${selectPrefix}-expand-code`}
                    src={Constant.ExpandCodeAll}
                    alt=""
                    onClick={() => {
                      if (expandLock.current) return;
                      expandLock.current = true;
                      setExpandAll(true);
                    }}
                  />
                )}
              >
                {() => (
                  <img
                    className={`${selectPrefix}-expand-code`}
                    src={Constant.CloseCodeAll}
                    alt=""
                    onClick={() => {
                      if (expandLock.current) return;
                      expandLock.current = true;
                      setExpandAll(false);
                    }}
                  />
                )}
              </ConditionalRender>
            )}
          </ConditionalRender>
          <ConditionalRender conditional={!!props.extra}>{() => props.extra}</ConditionalRender>
        </div>
      </div>

      <div className={`${selectPrefix}-main`}>
        {column.map((_v, columnIndex) => (
          <div className={`${selectPrefix}-column`} key={`${columnIndex}`}>
            {config.map((item, index) => {
              if (index % columnCount === columnIndex) {
                return (
                  <div className={`${selectPrefix}-item`} key={item.id}>
                    {renderMap?.get?.(item.type)?.(columnIndex, index)}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// CodeBoxPanel.defaultProps = {
//   title: '',
//   extra: null,
//   isShowExpandAllBtn: true,
//   columnCount: 1,
//   expandAll: false,
//   config: [],
// };

// CodeBoxPanel.propTypes = {
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   extra: PropTypes.node,
//   isShowExpandAllBtn: PropTypes.bool,
//   columnCount: PropTypes.number,
//   expandAll: PropTypes.bool,
//   config: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       {
//         ...PlayGroundMultiPropTypes,
//
//         type: PropTypes.string,
//         renderWrap: PropTypes.func,
//         renderChildren: PropTypes.func,
//       },
//       {
//         ...APlayGroundPropTypes,
//
//         type: PropTypes.string,
//         renderWrap: PropTypes.func,
//         renderChildren: PropTypes.func,
//       },
//       {
//         ...PlayGroundTabPropTypes,
//
//         type: PropTypes.string,
//         renderWrap: PropTypes.func,
//         renderChildren: PropTypes.func,
//       },
//     ]),
//   ),
// };

export default memo<CodeBoxProps>(CodeBoxPanel);
