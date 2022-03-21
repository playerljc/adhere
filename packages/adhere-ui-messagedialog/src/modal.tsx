import intl from '@baifendian/adhere-util-intl';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { IModalDialogProps } from './types';

export const selectorPrefix = 'adhere-ui-messagedialog';

/**
 * ModalDialog
 * @class Modal
 * @classdesc Modal
 */
class ModalDialog extends React.Component<IModalDialogProps, any> {
  static defaultProps: any;
  static propTypes: any;

  // constructor(props) {
  //   super(props);

  //   this.onClose = this.onClose.bind(this);
  // }

  // componentDidMount() {
  //   Emitter.on(Actions.close, this.onClose);
  // }

  // componentWillUnmount() {
  //   Emitter.remove(Actions.close, this.onClose);
  // }

  /**
   * renderCloseBtn
   * @return {ReactNode}
   */
  renderCloseBtn() {
    const {
      // @ts-ignore
      config: { footer = [] },
    } = this.props;

    const props = {
      key: 'close',
      title: intl.v('取消'),
      type: undefined,

      onClick: () => {
        // @ts-ignore
        this.props.close();
      },
    };

    if (footer.length === 0) {
      // @ts-ignore
      props.type = 'primary';
    }

    return <Button {...props}>{intl.v('取消')}</Button>;
  }

  render() {
    const { config, cloneBtn, close, children } = this.props;

    // @ts-ignore
    const { footer = [], centered = true, ...other } = config;

    return (
      <Modal
        {...other}
        footer={cloneBtn ? footer.concat(this.renderCloseBtn()) : footer}
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          close();
        }}
        visible
      >
        {children}
      </Modal>
    );
  }
}

ModalDialog.defaultProps = {
  config: {},
  cloneBtn: true,
};

ModalDialog.propTypes = {
  config: PropTypes.object,
  cloneBtn: PropTypes.bool,
  close: PropTypes.func,
};

export default ModalDialog;
