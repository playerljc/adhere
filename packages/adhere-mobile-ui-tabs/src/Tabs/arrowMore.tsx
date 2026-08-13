import { Grid, Popup } from 'antd-mobile';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { memo, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import type { SystemTabArrowMoreProps } from '../types';

const arrowIcon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDZsLTYtNmwxLjQxLTEuNDF6Ij48L3BhdGg+PC9zdmc+DQo=';

const selectorPrefix = 'adhere-ui-tabs-arrow-more';

/**
 * 标签页更多箭头组件
 * 
 * @param props - 组件属性
 * @returns JSX元素
 */
const ArrowMore: FC<SystemTabArrowMoreProps> = (props) => {
  const {
    defaultCollapsed = false,
    activeKey,
    data = [],
    onChange,
    wrapRef,
    swiper = false,
    zIndex,
    getActiveIndexByKey,
  } = props;

  const [collapse, setCollapse] = useState(defaultCollapsed);

  /**
   * 获取弹出层容器
   * 
   * @returns DOM元素
   */
  const getPopupContainer = useCallback((): HTMLElement => {
    if (!wrapRef?.current) return document.body;

    let contentEl: HTMLElement | undefined;

    if (swiper) {
      const index = getActiveIndexByKey?.(activeKey);
      const slides = Array.from(wrapRef.current.querySelectorAll('.adm-swiper-slide'));
      contentEl = slides[index] as HTMLElement;
    } else {
      const tabsContent = Array.from(wrapRef.current.querySelectorAll('.adm-tabs-content'));
      contentEl = tabsContent.find(
        (el) => (el as HTMLElement).style.display === 'block',
      ) as HTMLElement;
    }

    return contentEl || document.body;
  }, [wrapRef, swiper, getActiveIndexByKey, activeKey]);

  /**
   * 处理标签页切换
   * 
   * @param key - 目标标签页key
   */
  const handleTabChange = useCallback((key: any) => {
    onChange?.(key);
    setCollapse(false);
  }, [onChange]);

  /**
   * 处理箭头点击
   */
  const handleArrowClick = useCallback(() => {
    setCollapse((prevCollapse) => !prevCollapse);
  }, []);

  /**
   * 处理遮罩点击
   */
  const handleMaskClick = useCallback(() => {
    setCollapse(false);
  }, []);

  useEffect(() => {
    setCollapse(defaultCollapsed);
  }, [defaultCollapsed, activeKey]);

  return (
    <>
      {wrapRef?.current &&
        createPortal(
          <img
            className={classNames(`${selectorPrefix}-icon`, {
              [`${selectorPrefix}-open`]: collapse,
              [`${selectorPrefix}-close`]: !collapse,
            })}
            style={{
              zIndex,
            }}
            src={arrowIcon}
            alt=""
            onClick={handleArrowClick}
          />,
          wrapRef.current.querySelector('.adm-tabs-header') as HTMLElement,
        )}
      <Popup
        className={`${selectorPrefix}-popup`}
        bodyClassName={`${selectorPrefix}-popup-body`}
        maskClassName={`${selectorPrefix}-mask`}
        visible={collapse}
        destroyOnClose
        getContainer={getPopupContainer}
        onMaskClick={handleMaskClick}
        position="top"
      >
        <Grid className={`${selectorPrefix}-grid`} columns={4} gap={[15, 20]}>
          {data.map((item) => (
            <Grid.Item key={item.key}>
              <div
                className={classNames(`${selectorPrefix}-item`, {
                  [`${selectorPrefix}-active`]: activeKey === item.key,
                })}
                onClick={() => handleTabChange(item.key)}
              >
                {item.title}
              </div>
            </Grid.Item>
          ))}
        </Grid>
      </Popup>
    </>
  );
};

export default memo(ArrowMore);
