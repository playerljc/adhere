import React from 'react';
import PropTypes from 'prop-types';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { IImportantConfirmProps } from './types';

const selectorPrefix = 'adhere-ui-importantconfirm';

const icon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=';
/**
 * ImportantConfirm
 * @class ImportantConfirm
 * @classdesc ImportantConfirm
 */
class ImportantConfirm extends React.Component<IImportantConfirmProps, any> {
  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.stopPropagation();

    const { children, ...params } = this.props;

    ImportantConfirm.open({ ...params });
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={`${selectorPrefix} ${className}`} onClick={this.onClick}>
        {children}
      </div>
    );
  }

  /**
   * open
   */
  static open({ success, ...params }) {
    MessageDialog.Confirm({
      ...params,
      title: params.title || intl.v('提示'),
      text: params.text || `${intl.v('真的要执行此操作码')}?`,
      zIndex:
        'zIndex' in params ? params.zIndex : Resource.Dict.value.ResourceNormalMaxZIndex.value,
      icon: <img src={icon} alt="" width={32} />,
      onSuccess: () => {
        return new Promise((resolve, reject) => {
          if (success) {
            success()
              .then(() => {
                resolve();
              })
              .catch(() => {
                reject();
              });
          } else {
            resolve();
          }
        });
      },
    });
  }
}

ImportantConfirm.defaultProps = {
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
  className: '',
  success: () => {},
  children: null,
  title: intl.v('提示'),
  text: `${intl.v('真的要执行此操作码')}?`,
  icon: <img src={icon} alt="" width={32} />,
};

ImportantConfirm.propTypes = {
  zIndex: PropTypes.number,
  className: PropTypes.string,
  success: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
};

export default ImportantConfirm;
