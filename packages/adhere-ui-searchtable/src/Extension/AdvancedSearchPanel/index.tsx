import { Button } from 'antd';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {
  FilterOutlined,
  LeftCircleOutlined,
  ReloadOutlined,
  RightCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import SlideLayout from '@baifendian/adhere-ui-slidelayout';
import Space from '@baifendian/adhere-ui-space';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import type { AdvancedSearchPanelProps } from '../../types';

const { VerticalFlexLayout, ScrollLayout } = FlexLayout;
const { renderGridSearchFormGroup } = TableGridLayout;
const { Overlay } = SlideLayout;

const _selectorPrefix = `${selectorPrefix}-advancedsearchpanel`;

/**
 * AdvancedSearchPanel
 * @param props
 * @return {React.ReactPortal}
 * @constructor
 */
const AdvancedSearchPanel: FC<AdvancedSearchPanelProps> = (props) => {
  const {
    advancedSearchConfig: {
      advancedSearch: { getPopupContainer, ...overlayProps },
      showStrategy = 'all',
      renderTitleLabel,
      renderCollapse,
    },
    tableGridLayoutConfig = {
      layout: 'horizontal',
      bordered: false,
    },
    groupData = [],
    remainingGroupData = [],
    onSearch,
    onReset,
  } = props;

  const [collapse, setCollapse] = useState(overlayProps.collapse);

  const overlayRef = useRef();

  useEffect(() => {
    setCollapse(overlayProps.collapse);
  }, [overlayProps.collapse]);

  return ReactDOM.createPortal(
    <Overlay
      ref={overlayRef}
      {...(overlayProps as any)}
      className={classNames(`${_selectorPrefix}`, overlayProps.className ?? '')}
      collapse={collapse}
    >
      <VerticalFlexLayout
        className={`${_selectorPrefix}-inner`}
        renderTop={
          <header className={`${_selectorPrefix}-header`}>
            <div className={`${_selectorPrefix}-title`}>
              <ConditionalRender
                conditional={!renderTitleLabel}
                noMatch={() => renderTitleLabel?.()}
              >
                {() => (
                  <Space.Group direction="horizontal" size={2}>
                    <FilterOutlined />
                    <strong>{Intl.v('高级搜索')}</strong>
                  </Space.Group>
                )}
              </ConditionalRender>
            </div>

            <div className={`${_selectorPrefix}-collapse`} onClick={() => setCollapse(!collapse)}>
              <ConditionalRender
                conditional={!renderCollapse}
                noMatch={() => renderCollapse?.(collapse)}
              >
                {() => (
                  <ConditionalRender
                    conditional={collapse}
                    noMatch={() => (
                      <Space.Group direction="horizontal" size={2}>
                        <RightCircleOutlined />
                        <strong>{Intl.v('展开')}</strong>
                      </Space.Group>
                    )}
                  >
                    {() => (
                      <Space.Group direction="horizontal" size={2}>
                        <LeftCircleOutlined />
                        <strong>{Intl.v('收起')}</strong>
                      </Space.Group>
                    )}
                  </ConditionalRender>
                )}
              </ConditionalRender>
            </div>
          </header>
        }
        renderMain={
          <div className={`${_selectorPrefix}-main`}>
            <div className={`${_selectorPrefix}-scroll`}>
              <ScrollLayout scrollY className={`${_selectorPrefix}-scroll-innner`}>
                {renderGridSearchFormGroup(
                  // @ts-ignore
                  showStrategy === 'all' ? groupData : remainingGroupData,
                  tableGridLayoutConfig,
                )}
              </ScrollLayout>
            </div>

            <footer className={`${_selectorPrefix}-footer`}>
              <div className={`${_selectorPrefix}-item`}>
                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => onSearch().then(() => setCollapse(false))}
                >
                  {Intl.v('确定')}
                </Button>
              </div>

              <div className={`${_selectorPrefix}-item`}>
                <Button
                  icon={<ReloadOutlined />}
                  onClick={() => onReset().then(() => setCollapse(false))}
                >
                  {Intl.v('重置')}
                </Button>
              </div>
            </footer>
          </div>
        }
      />
    </Overlay>,
    getPopupContainer(),
  );
};

AdvancedSearchPanel.defaultProps = {
  groupData: [],
  tableGridLayoutConfig: {
    layout: 'horizontal',
    bordered: false,
  },
  remainingGroupData: [],
  advancedSearchConfig: {
    // 显示少行 'auto' | number
    // auto - 为自动
    // number - 指定行数 超出行会在高级筛选中显示
    rowCount: 'auto',
    // 剩余的条件的显示方式 'all' | 'remaining'
    // all - 全部显示
    // remaining - 显示剩余
    showStrategy: 'all',
    // 高级搜索
    advancedSearch: {
      // 外围样式
      className: '',
      // 外围style
      style: {},
      // 宽度
      width: '30%',
      // 是否有遮罩
      mask: true,
      // 层级
      zIndex: 19999,
      // 过度时间
      time: 300,
      // 方向
      direction: 'right',
      // 默认不展开
      collapse: false,
      onBeforeShow: () => {},
      onBeforeClose: () => {},
      onAfterShow: () => {},
      onAfterClose: () => {},
      getPopupContainer: () => document.body,
    },
  },
};

export default React.memo(AdvancedSearchPanel);
