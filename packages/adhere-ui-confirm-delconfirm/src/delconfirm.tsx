import React from 'react';
import PropTypes from 'prop-types';

import MessageDialog from '@baifendian/adhere-ui-messagedialog';
import intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { IDelConfirmProps } from './types';

const selectorPrefix = 'adhere-ui-delconfirm';

/**
 * DelConform
 * @class DelConform
 * @classdesc DelConform
 */
class DelConform extends React.Component<IDelConfirmProps, any> {
  static defaultProps: any;
  static propTypes: any;

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { success, zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value } = this.props;

    DelConform.open(success, zIndex || Resource.Dict.value.ResourceNormalMaxZIndex.value);
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
      text: `${intl.v('确定删除吗')}?`,
      zIndex,
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

DelConform.defaultProps = {
  zIndex: Resource.Dict.value.ResourceNormalMaxZIndex.value,
  className: '',
  success: () => {},
  children: null,
};

DelConform.propTypes = {
  zIndex: PropTypes.number,
  className: PropTypes.string,
  success: PropTypes.func,
  children: PropTypes.node,
};

export default DelConform;
