import React, { memo, useEffect, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import PlayGround from './PlayGround';
import PlayGroundMulti from './PlayGroundMulti';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundTabMobile from './PlayGroundTabMobile';
import Constant from './constant';
import type { CodeBoxProps, CodeBoxConfigItem } from './types';

const selectPrefix = 'adhere-ui-playground-code-box';

/**
 * 代码盒子面板组件
 * @component CodeBoxPanel
 * @description 代码组展示组件，支持多种类型的代码展示和统一管理
 * @param props - 组件属性
 * @returns JSX.Element
 */
const CodeBoxPanel = memo<CodeBoxProps>((props) => {
  const { 
    columnCount = 1, 
    config = [], 
    title, 
    isShowExpandAllBtn = true,
    expandAll: propExpandAll = false,
    extra,
  } = props;

  const [activeAnchor, setAnchor] = useState<string>('');
  const [expandAll, setExpandAll] = useState<boolean>(propExpandAll);
  const expandLock = useRef<boolean>(false);

  const column: unknown[] = Array.from({ length: columnCount }).fill(undefined);

  /**
   * 渲染函数映射表
   * @constant renderMap
   */
  const renderMap = new Map<string, (columnIndex: number, index: number) => React.ReactNode>([
    ['PlayGroundMulti', renderPlayGroundMulti],
    ['PlayGround', renderPlayGround],
    ['PlayGroundTab', renderPlayGroundTab],
    ['PlayGroundTabMobile', renderPlayGroundTabMobile],
  ]);

  /**
   * 监听hash变化
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onHashChange = (): void => {
      const hash = window.location.hash.substring(1);
      setAnchor(hash);
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      if (typeof window === 'undefined') return;
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  /**
   * 监听expandAll属性变化
   */
  useEffect(() => {
    setExpandAll(propExpandAll);
  }, [propExpandAll]);

  /**
   * 监听expandAll状态变化
   */
  useEffect(() => {
    expandLock.current = false;
  }, [expandAll]);

  /**
   * 渲染PlayGroundMulti组件
   * @function renderPlayGroundMulti
   * @param columnIndex - 列索引
   * @param index - 配置索引
   * @returns JSX.Element
   */
  function renderPlayGroundMulti(columnIndex: number, index: number): React.ReactNode {
    const item = config[index] as any;
    const { renderWrap, renderChildren, type, ...restProps } = item;

    const children = (
      <PlayGroundMulti 
        {...restProps} 
        isActive={activeAnchor === restProps.id} 
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGroundMulti>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  /**
   * 渲染PlayGround组件
   * @function renderPlayGround
   * @param columnIndex - 列索引
   * @param index - 配置索引
   * @returns JSX.Element
   */
  function renderPlayGround(columnIndex: number, index: number): React.ReactNode {
    const item = config[index] as any;
    const { renderWrap, renderChildren, type, ...restProps } = item;

    const children = (
      <PlayGround 
        {...restProps} 
        isActive={activeAnchor === restProps.id} 
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGround>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  /**
   * 渲染PlayGroundTab组件
   * @function renderPlayGroundTab
   * @param columnIndex - 列索引
   * @param index - 配置索引
   * @returns JSX.Element
   */
  function renderPlayGroundTab(columnIndex: number, index: number): React.ReactNode {
    const item = config[index] as any;
    const { renderWrap, renderChildren, type, ...restProps } = item;

    const children = (
      <PlayGroundTab 
        {...restProps} 
        isActive={activeAnchor === restProps.id} 
        expand={expandAll}
      >
        <ConditionalRender conditional={!!renderChildren}>
          {() => renderChildren?.(columnIndex, index, config)}
        </ConditionalRender>
      </PlayGroundTab>
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  /**
   * 渲染PlayGroundTabMobile组件
   * @function renderPlayGroundTabMobile
   * @param columnIndex - 列索引
   * @param index - 配置索引
   * @returns JSX.Element
   */
  function renderPlayGroundTabMobile(columnIndex: number, index: number): React.ReactNode {
    const item = config[index] as any;
    const { renderWrap, type, ...restProps } = item;

    const children = (
      <PlayGroundTabMobile
        {...restProps}
        isActive={activeAnchor === restProps.id}
        expand={expandAll}
      />
    );

    return (
      <ConditionalRender conditional={!!renderWrap} noMatch={() => children}>
        {() => renderWrap?.(columnIndex, index, config, children)}
      </ConditionalRender>
    );
  }

  /**
   * 处理展开全部按钮点击
   * @function handleExpandAll
   */
  const handleExpandAll = (): void => {
    if (expandLock.current) return;
    expandLock.current = true;
    setExpandAll(true);
  };

  /**
   * 处理收起全部按钮点击
   * @function handleCollapseAll
   */
  const handleCollapseAll = (): void => {
    if (expandLock.current) return;
    expandLock.current = true;
    setExpandAll(false);
  };

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
                    alt="展开全部"
                    onClick={handleExpandAll}
                  />
                )}
              >
                {() => (
                  <img
                    className={`${selectPrefix}-expand-code`}
                    src={Constant.CloseCodeAll}
                    alt="收起全部"
                    onClick={handleCollapseAll}
                  />
                )}
              </ConditionalRender>
            )}
          </ConditionalRender>
          <ConditionalRender conditional={!!extra}>
            {() => extra}
          </ConditionalRender>
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
});

CodeBoxPanel.displayName = 'CodeBoxPanel';

export default CodeBoxPanel;
