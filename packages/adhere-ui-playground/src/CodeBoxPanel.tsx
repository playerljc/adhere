import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { APlayGroundPropTypes } from './APlayGround';
import PlayGround from './PlayGround';
import PlayGroundTab, { PlayGroundTabPropTypes } from './PlayGroundTab';
import PlayGroundMulit, { PlayGroundMulitPropTypes } from './PlayGroundMulit';
import { ICodeBoxProps } from './types';
import Constant from './constant';

const selectPrefix = 'adhere-ui-playground-code-box';

/**
 * CodeBoxPanel
 * @classdesc - 代码组
 * @constructor
 */
function CodeBoxPanel(props: ICodeBoxProps) {
  const [activeAnchor, setAnchor] = useState('');
  const [expandAll, setExpandAll] = useState(props.expandAll);
  const { columnCount, config } = props;

  const column = [];
  if (columnCount != null) {
    column.length = columnCount;
  }
  // @ts-ignore
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
    function onHashChange() {
      const hash = window.location.hash.substring(1);
      setAnchor(hash);
    }

    window.addEventListener('hashchange', onHashChange);

    return () => {
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
   * renderPlayGroundMulit
   * @description - 渲染PlayGroundMulit
   * @param columnIndex
   * @param index
   * @return JSX
   */
  function renderPlayGroundMulit(columnIndex: number, index: number): React.ReactElement {
    const { config } = props;

    // @ts-ignore
    const { renderWrap, renderChildren, type, ...playGroundProps } = config[index];
    // activeAnchor

    const children = (
      // @ts-ignore
      <PlayGroundMulit
        {...playGroundProps}
        // @ts-ignore
        isActive={activeAnchor === playGroundProps.id}
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {/*@ts-ignore*/}
          {() => renderChildren(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGroundMulit>
    );

    return (
      // @ts-ignore
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {/*@ts-ignore*/}
        {() => renderWrap(columnIndex, index, config, children)}
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
  function renderPlayGround(columnIndex: number, index: number): React.ReactElement {
    const { config } = props;

    // @ts-ignore
    const { renderWrap, renderChildren, type, ...playGroundProps } = config[index];
    // activeAnchor

    const children = (
      // @ts-ignore
      <PlayGround
        {...playGroundProps}
        // @ts-ignore
        isActive={activeAnchor === playGroundProps.id}
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {/*@ts-ignore*/}
          {() => renderChildren(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGround>
    );

    return (
      // @ts-ignore
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {/*@ts-ignore*/}
        {() => renderWrap(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  /**
   * renderPlayGroundTab
   */
  function renderPlayGroundTab(columnIndex: number, index: number): React.ReactElement {
    const { config } = props;

    // @ts-ignore
    const { renderWrap, renderChildren, type, ...playGroundTabProps } = config[index];
    // activeAnchor

    const children = (
      // @ts-ignore
      <PlayGroundTab
        {...playGroundTabProps}
        // @ts-ignore
        isActive={activeAnchor === playGroundTabProps.id}
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {/*@ts-ignore*/}
          {() => renderChildren(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGroundTab>
    );

    return (
      // @ts-ignore
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {/*@ts-ignore*/}
        {() => renderWrap(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  return (
    <div className={selectPrefix}>
      <div className={`${selectPrefix}-header`}>
        <ConditionalRender conditional={!!props.title}>
          {() => <div className={`${selectPrefix}-header-title`}>{props.title}</div>}
        </ConditionalRender>
        <div className={`${selectPrefix}-header-extra`}>
          <ConditionalRender conditional={props.isShowExpandAllBtn}>
            {() => (
              <ConditionalRender
                conditional={expandAll}
                // @ts-ignore
                noMatch={() => (
                  <img
                    className={`${selectPrefix}-expand-code`}
                    src={Constant.ExpandCodeAll}
                    alt=""
                    onClick={() => setExpandAll(true)}
                  />
                )}
              >
                {() => (
                  <img
                    className={`${selectPrefix}-expand-code`}
                    src={Constant.CloseCodeAll}
                    alt=""
                    onClick={() => setExpandAll(false)}
                  />
                )}
              </ConditionalRender>
            )}
          </ConditionalRender>
          <ConditionalRender conditional={!!props.extra}>{() => props.extra}</ConditionalRender>
        </div>
      </div>

      <div className={`${selectPrefix}-main`}>
        {column.map((item, columnIndex) => (
          <div className={`${selectPrefix}-column`}>
            {config.map((item, index) => {
              if (index % columnCount === columnIndex) {
                return (
                  <div className={`${selectPrefix}-item`} key={item.id}>
                    {/*@ts-ignore*/}
                    {renderMap.get(item.type)(columnIndex, index)}
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
}

CodeBoxPanel.defaultProps = {
  title: '',
  extra: null,
  isShowExpandAllBtn: true,
  columnCount: 1,
  expandAll: false,
  config: [],
};

CodeBoxPanel.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  extra: PropTypes.node,
  isShowExpandAllBtn: PropTypes.bool,
  columnCount: PropTypes.number,
  expandAll: PropTypes.bool,
  config: PropTypes.arrayOf(
    PropTypes.oneOfType([
      {
        ...PlayGroundMulitPropTypes,
        // @ts-ignore
        type: PropTypes.string,
        renderWrap: PropTypes.func,
        renderChildren: PropTypes.func,
      },
      {
        ...APlayGroundPropTypes,
        // @ts-ignore
        type: PropTypes.string,
        renderWrap: PropTypes.func,
        renderChildren: PropTypes.func,
      },
      {
        ...PlayGroundTabPropTypes,
        // @ts-ignore
        type: PropTypes.string,
        renderWrap: PropTypes.func,
        renderChildren: PropTypes.func,
      },
    ]),
  ),
};

export default CodeBoxPanel;
