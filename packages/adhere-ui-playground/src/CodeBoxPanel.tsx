import React, { FC, memo, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundTab from './PlayGroundTab';
import Constant from './constant';
import { CodeBoxPlayGroundMulitProps, CodeBoxPlayGroundProps, CodeBoxProps } from './types';

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

  const column: any[] = [];
  if (columnCount != null) {
    column.length = columnCount;
  }
  column.fill(undefined);

  const renderMap = new Map<string, Function>([
    ['PlayGroundMulit', renderPlayGroundMulit],
    ['PlayGround', renderPlayGround],
    ['PlayGroundTab', renderPlayGroundTab],
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
  useEffect(() => setExpandAll(props.expandAll), [props.expandAll]);

  /**
   * useEffect expandAll
   */
  useEffect(() => {
    expandLock.current = false;
  }, [expandAll]);

  /**
   * renderPlayGroundMulit
   * @description - 渲染PlayGroundMulit
   * @param columnIndex
   * @param index
   * @return JSX
   */
  function renderPlayGroundMulit(columnIndex: number, index: number) {
    const { config } = props;

    const { renderWrap, renderChildren, type, ...playGroundProps } = config[index];
    // activeAnchor

    const children = (
      // @ts-ignore
      <PlayGroundMulit
        {...playGroundProps}
        isActive={activeAnchor === playGroundProps.id}
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config as Array<any>)}
        </ConditionalRender>
      </PlayGroundMulit>
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
    const { renderWrap, renderChildren, type, ...playGroundProps } = config[index];
    // activeAnchor

    const children = (
      <PlayGround
        {...playGroundProps}
        isActive={activeAnchor === playGroundProps.id}
        expand={expandAll}
      >
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
   */
  function renderPlayGroundTab(columnIndex: number, index: number) {
    const { renderWrap, renderChildren, type, ...playGroundTabProps } = config[index];
    // activeAnchor

    const children = (
      // @ts-ignore
      <PlayGroundTab
        {...playGroundTabProps}
        isActive={activeAnchor === playGroundTabProps.id}
        expand={expandAll}
      >
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
                conditional={!!expandAll}
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
          <div className={`${selectPrefix}-column`}>
            {config.map((item, index) => {
              if (index % columnCount === columnIndex) {
                return (
                  <div className={`${selectPrefix}-item`} key={item.id}>
                    {renderMap?.get(item.type)?.(columnIndex, index)}
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
//         ...PlayGroundMulitPropTypes,
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

export default memo<any>(CodeBoxPanel);
