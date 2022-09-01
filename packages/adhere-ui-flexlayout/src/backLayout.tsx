import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import HistoryBack from '@baifendian/adhere-ui-historyback';
import Intl from '@baifendian/adhere-util-intl';

// @ts-ignore
import ToolBarLayout from './toolBarLayout';
import { IBackLayoutProps } from './types';

/**
 * BackLayout
 * @class BackLayout
 * @classdesc BackLayout
 */
const BackLayout = ({
  topToolBarItems,
  isShowBack,
  backPath,
  enforceBackPath,
  history,
  backTitle,
  children,
  ...otherProps
}: IBackLayoutProps) => {
  const toolbar = [
    ...topToolBarItems,
    <ConditionalRender key="backBtn" conditional={isShowBack}>
      {() => (
        <Button
          onClick={() => {
            if (enforceBackPath) {
              history.replace(enforceBackPath);
            } else {
              HistoryBack(history, backPath);
            }
          }}
        >
          {backTitle || Intl.v('返回')}
        </Button>
      )}
    </ConditionalRender>,
  ].filter((t) => {
    if ('props' in t && 'conditional' in t.props) return t.props.conditional;
    return true;
  });

  return (
    <ToolBarLayout {...otherProps} topToolBarItems={toolbar}>
      {children}
    </ToolBarLayout>
  );
};

BackLayout.defaultProps = {
  topToolBarItems: [],
  backPath: '',
  isShowBack: true,
};

BackLayout.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  topClassName: PropTypes.string,
  topStyle: PropTypes.object,
  bottomClassName: PropTypes.string,
  bottomStyle: PropTypes.object,
  mainClassName: PropTypes.string,
  mainStyle: PropTypes.object,
  mainAutoWrapClassName: PropTypes.string,
  mainAutoStyle: PropTypes.object,
  mainWrapClassName: PropTypes.string,
  mainWrapStyle: PropTypes.object,
  topToolBarItems: PropTypes.arrayOf(PropTypes.node),
  topProps: PropTypes.object,
  mainProps: PropTypes.object,
  mainAutoWrapProps: PropTypes.object,
  backPath: PropTypes.string,
  enforceBackPath: PropTypes.string,
  isShowBack: PropTypes.bool,
  history: PropTypes.object,
  backTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default BackLayout;
