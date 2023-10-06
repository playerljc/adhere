import { Grid, Popup } from 'antd-mobile';
import classNames from 'classnames';
import type { FC } from 'react';
import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import type { SystemTabArrowMoreProps } from '../types';

const arrowIcon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDZsLTYtNmwxLjQxLTEuNDF6Ij48L3BhdGg+PC9zdmc+DQo=';

const selectorPrefix = 'adhere-ui-tabs-arrow-more';

const ArrowMore: FC<SystemTabArrowMoreProps> = (props) => {
  const {
    defaultCollapsed = false,
    activeKey,
    data = [],
    onChange,
    wrapRef,
    swiper = false,
    getActiveIndexByKey,
  } = props;

  const [collapse, setCollapse] = useState(defaultCollapsed);

  function getPopupContainer() {
    if (!wrapRef?.current) return document.body;

    let contentEl;

    if (swiper) {
      const index = getActiveIndexByKey?.(activeKey);
      contentEl = Array.from(wrapRef.current.querySelectorAll('.adm-swiper-slide'))[index];
    } else {
      contentEl = Array.from(wrapRef.current.querySelectorAll('.adm-tabs-content')).find(
        (_el) => (_el as HTMLElement).style.display === 'block',
      );
    }

    return contentEl;
  }

  useEffect(() => setCollapse(defaultCollapsed), [defaultCollapsed, activeKey]);

  return (
    <>
      {wrapRef?.current &&
        ReactDOM.createPortal(
          <img
            className={classNames(`${selectorPrefix}-icon`, {
              [`${selectorPrefix}-open`]: collapse,
              [`${selectorPrefix}-close`]: !collapse,
            })}
            src={arrowIcon}
            alt=""
            onClick={() => {
              setCollapse(!collapse);
            }}
          />,
          wrapRef.current.querySelector('.adm-tabs-header') as HTMLElement,
        )}
      <Popup
        className={`${selectorPrefix}-popup`}
        bodyClassName={`${selectorPrefix}-popup-body`}
        maskClassName={`${selectorPrefix}-mask`}
        visible={collapse}
        destroyOnClose
        getContainer={() => getPopupContainer()}
        onMaskClick={() => setCollapse(false)}
        position="top"
      >
        <Grid className={`${selectorPrefix}-grid`} columns={4} gap={[15, 20]}>
          {(data || []).map((t) => (
            <Grid.Item key={t.key}>
              <div
                className={classNames(`${selectorPrefix}-item`, {
                  [`${selectorPrefix}-active`]: activeKey === t.key,
                })}
                onClick={() => {
                  onChange?.(t.key);
                  setCollapse(false);
                }}
              >
                {t.title}
              </div>
            </Grid.Item>
          ))}
        </Grid>
      </Popup>
    </>
  );
};

export default memo(ArrowMore);
