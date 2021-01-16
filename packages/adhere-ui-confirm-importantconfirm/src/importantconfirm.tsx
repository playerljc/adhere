import React from 'react';
import PropTypes from 'prop-types';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import IImportantConfirmProps from './types';

import icon from './icon.svg';

const selectorPrefix = 'adhere-ui-importantconfirm';

/**
 * ImportantConfirm
 * @class ImportantConfirm
 * @classdesc ImportantConfirm
 */
class ImportantConfirm extends React.Component<IImportantConfirmProps, any> {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { success, zIndex = Resource.Dict.value.ResourceNormalMaxZIndex } = this.props;

    ImportantConfirm.open(success, zIndex || Resource.Dict.value.ResourceNormalMaxZIndex);
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
   * @param success - 成功的回调
   * @param zIndex - 层级
   */
  static open(success, zIndex) {
    MessageDialog.Confirm({
      title: intl.v('提示'),
      text: `${intl.v('真的要执行此操作码')}?`,
      zIndex,
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
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex,
  className: '',
  success: () => {},
  children: null,
};

ImportantConfirm.propTypes = {
  zIndex: PropTypes.number,
  className: PropTypes.string,
  success: PropTypes.func,
  children: PropTypes.node,
};

export default ImportantConfirm;
