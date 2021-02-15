import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

import intl from '@baifendian/adhere-util-intl';

import Actions from './actions';
import Emitter from './emitter';
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
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    Emitter.on(Actions.close, this.onClose);
  }

  componentWillUnmount() {
    Emitter.remove(Actions.close, this.onClose);
  }

  /**
   * onClose
   * @param el
   */
  onClose(el) {
    const { parent } = this.props;

    function close() {
      // @ts-ignore
      const flag = ReactDOM.unmountComponentAtNode(parent);
      if (flag) {
        // @ts-ignore
        parent.parentElement.removeChild(parent);
      }
    }

    if (el) {
      if (el === parent) {
        close();
      }
    } else {
      close();
    }
  }

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
        this.onClose();
      },
    };

    if (footer.length === 0) {
      // @ts-ignore
      props.type = 'primary';
    }

    return <Button {...props}>{intl.v('取消')}</Button>;
  }

  render() {
    const { config, cloneBtn, children } = this.props;

    // @ts-ignore
    const { footer = [], centered = true, ...other } = config;

    return (
      <Modal
        {...other}
        footer={cloneBtn ? footer.concat(this.renderCloseBtn()) : footer}
        centered={centered}
        wrapClassName={selectorPrefix}
        onCancel={() => {
          // @ts-ignore
          this.onClose();
        }}
        visible
      >
        {children}
      </Modal>
    );
  }
}

ModalDialog.defaultProps = {
  parent: null,
  config: {},
  cloneBtn: true,
};

ModalDialog.propTypes = {
  parent: PropTypes.object,
  config: PropTypes.object,
  cloneBtn: PropTypes.bool,
};

export default ModalDialog;
