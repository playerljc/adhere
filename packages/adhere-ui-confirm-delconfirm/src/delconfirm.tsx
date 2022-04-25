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

  onClick(e) {
    e.stopPropagation();

    const { children, ...params } = this.props;

    DelConform.open({ ...params });
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
      text: params.text || `${intl.v('确定删除吗')}?`,
      zIndex:
        'zIndex' in params ? params.zIndex : Resource.Dict.value.ResourceNormalMaxZIndex.value,
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
  title: intl.v('提示'),
  text: `${intl.v('确定删除吗')}?`,
};

DelConform.propTypes = {
  zIndex: PropTypes.number,
  className: PropTypes.string,
  success: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
};

export default DelConform;
